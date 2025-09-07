from __future__ import annotations

import logging
from typing import Tuple

from homeassistant.components.media_source.error import MediaSourceError, Unresolvable
from homeassistant.components.media_source.models import (
    BrowseMediaSource,
    MediaSource,
    MediaSourceItem,
    PlayMedia,
)
from homeassistant.core import HomeAssistant, callback

from homeassistant.components.media_player import BrowseError, BrowseMedia
from homeassistant.components.media_source.const import MEDIA_MIME_TYPES, URI_SCHEME
from homeassistant.components.media_player.const import MediaType, MediaClass

from homeassistant.const import (  # pylint: disable=import-error
    CONF_URL,
)

from . import JellyfinClientManager, JellyfinDevice, autolog
from .const import (
    DOMAIN,
    USER_APP_NAME,
)

PLAYABLE_MEDIA_TYPES = [
    MediaType.ALBUM,
    MediaType.ARTIST,
    MediaType.TRACK,
]

CONTAINER_TYPES_SPECIFIC_MEDIA_CLASS = {
    MediaType.ALBUM: MediaClass.ALBUM,
    MediaType.ARTIST: MediaClass.ARTIST,
    MediaType.PLAYLIST: MediaClass.PLAYLIST,
    MediaType.SEASON: MediaClass.SEASON,
    MediaType.TVSHOW: MediaClass.TV_SHOW,
}

CHILD_TYPE_MEDIA_CLASS = {
    MediaType.SEASON: MediaClass.SEASON,
    MediaType.ALBUM: MediaClass.ALBUM,
    MediaType.ARTIST: MediaClass.ARTIST,
    MediaType.MOVIE: MediaClass.MOVIE,
    MediaType.PLAYLIST: MediaClass.PLAYLIST,
    MediaType.TRACK: MediaClass.TRACK,
    MediaType.TVSHOW: MediaClass.TV_SHOW,
    MediaType.CHANNEL: MediaClass.CHANNEL,
    MediaType.EPISODE: MediaClass.EPISODE,
}

IDENTIFIER_SPLIT = "~~"

_LOGGER = logging.getLogger(__name__)

class UnknownMediaType(BrowseError):
    """Unknown media type."""

async def async_get_media_source(hass: HomeAssistant):
    """Set up Jellyfin media source."""
    entry = hass.config_entries.async_entries(DOMAIN)[0]
    jelly_cm: JellyfinClientManager = hass.data[DOMAIN][entry.data[CONF_URL]]["manager"] if "manager" in hass.data[DOMAIN][entry.data[CONF_URL]] else None
    return JellyfinSource(hass, jelly_cm)

class JellyfinSource(MediaSource):
    """Media source for Jellyfin"""

    @staticmethod
    def parse_mediasource_identifier(identifier: str):
        prefix = f"{URI_SCHEME}{DOMAIN}/"
        text = identifier
        if identifier.startswith(prefix):
            text = identifier[len(prefix):]
        if IDENTIFIER_SPLIT in text:
            return text.split(IDENTIFIER_SPLIT, 2)

        return "", text

    def __init__(self, hass: HomeAssistant, manager: JellyfinClientManager):
        """Initialize Jellyfin source."""
        super().__init__(DOMAIN)
        self.hass = hass
        self.jelly_cm = manager

    async def async_resolve_media(self, item: MediaSourceItem) -> PlayMedia:
        """Resolve a media item to a playable item."""
        autolog("<<<")

        if not item or not item.identifier:
            return None

        media_content_type, media_content_id = self.parse_mediasource_identifier(item.identifier)
        t = await self.jelly_cm.get_stream_url(media_content_id, media_content_type)
        return PlayMedia(t[0], t[1])

    async def async_browse_media(
        self, item: MediaSourceItem, media_types: Tuple[str] = MEDIA_MIME_TYPES
    ) -> BrowseMediaSource:
        """Browse media."""
        autolog("<<<")

        media_content_type, media_content_id = async_parse_identifier(item)
        return await async_library_items(self.jelly_cm, media_content_type, media_content_id, canPlayList=False)

@callback
def async_parse_identifier(
    item: MediaSourceItem,
) -> tuple[str | None, str | None]:
        """Parse identifier."""
        if not item.identifier:
            return None, None

        return item.identifier, item.identifier

def Type2Mediatype(type):
    switcher = {
        "Movie": MediaType.MOVIE,
        "Series": MediaType.TVSHOW,
        "Season": MediaType.SEASON,
        "Episode": MediaType.EPISODE,
        "Music": MediaType.ALBUM,
        "Audio": MediaType.TRACK,
        "BoxSet": MediaClass.DIRECTORY,
        "Folder": MediaClass.DIRECTORY,
        "CollectionFolder": MediaClass.DIRECTORY,
        "Playlist": MediaClass.DIRECTORY,
        "PlaylistsFolder": MediaClass.DIRECTORY,
        "ManualPlaylistsFolder": MediaClass.DIRECTORY,
        "MusicArtist": MediaType.ARTIST,
        "MusicAlbum": MediaType.ALBUM,
    }
    return switcher.get(type)

def Type2Mimetype(type):
    switcher = {
        "Movie": "video/mp4",
        "Series": MediaType.TVSHOW,
        "Season": MediaType.SEASON,
        "Episode": "video/mp4",
        "Music": MediaType.ALBUM,
        "Audio": "audio/mp3",
        "BoxSet": MediaClass.DIRECTORY,
        "Folder": MediaClass.DIRECTORY,
        "CollectionFolder": MediaClass.DIRECTORY,
        "Playlist": MediaClass.DIRECTORY,
        "PlaylistsFolder": MediaClass.DIRECTORY,
        "ManualPlaylistsFolder": MediaClass.DIRECTORY,
        "MusicArtist": MediaType.ARTIST,
        "MusicAlbum": MediaType.ALBUM,
    }
    return switcher.get(type)

def Type2Mediaclass(type):
    switcher = {
        "Movie": MediaClass.MOVIE,
        "Series": MediaClass.TV_SHOW,
        "Season": MediaClass.SEASON,
        "Episode": MediaClass.EPISODE,
        "Music": MediaClass.DIRECTORY,
        "BoxSet": MediaClass.DIRECTORY,
        "Folder": MediaClass.DIRECTORY,
        "CollectionFolder": MediaClass.DIRECTORY,
        "Playlist": MediaClass.DIRECTORY,
        "PlaylistsFolder": MediaClass.DIRECTORY,
        "ManualPlaylistsFolder": MediaClass.DIRECTORY,
        "MusicArtist": MediaClass.ARTIST,
        "MusicAlbum": MediaClass.ALBUM,
        "Audio": MediaClass.TRACK,
    }
    return switcher.get(type)

def IsPlayable(type, canPlayList):
    switcher = {
        "Movie": True,
        "Series": canPlayList,
        "Season": canPlayList,
        "Episode": True,
        "Music": False,
        "BoxSet": canPlayList,
        "Folder": False,
        "CollectionFolder": False,
        "Playlist": canPlayList,
        "PlaylistsFolder": False,
        "ManualPlaylistsFolder": False,
        "MusicArtist": canPlayList,
        "MusicAlbum": canPlayList,
        "Audio": True,
    }
    return switcher.get(type)

async def async_library_items(jelly_cm: JellyfinClientManager, 
            media_content_type_in=None, 
            media_content_id_in=None,
            canPlayList=True
        ) -> BrowseMediaSource:
    """
    Create response payload to describe contents of a specific library.

    Used by async_browse_media.
    """
    _LOGGER.debug(f'>> async_library_items: {media_content_id_in} / {canPlayList}')

    library_info = None
    query = None

    if (media_content_type_in is None):
        media_content_type = None
        media_content_id = None
    else:
        media_content_type, media_content_id = JellyfinSource.parse_mediasource_identifier(media_content_id_in)
    _LOGGER.debug(f'-- async_library_items: {media_content_type} / {media_content_id}')

    if media_content_type in [None, "library"]:
        library_info = BrowseMediaSource(
            domain=DOMAIN,
            identifier=f'library{IDENTIFIER_SPLIT}library',
            media_class=MediaClass.DIRECTORY,
            media_content_type="library",
            title="Media Library",
            can_play=False,
            can_expand=True,
            children=[],
        )
    elif media_content_type in [MediaClass.DIRECTORY, MediaType.ARTIST, MediaType.ALBUM, MediaType.PLAYLIST, MediaType.TVSHOW, MediaType.SEASON]:
        query = {
            "ParentId": media_content_id,
            "sortBy": "SortName",
            "sortOrder": "Ascending"
        }

        parent_item = await jelly_cm.get_item(media_content_id)
        library_info = BrowseMediaSource(
            domain=DOMAIN,
            identifier=f'{media_content_type}{IDENTIFIER_SPLIT}{media_content_id}',
            media_class=media_content_type,
            media_content_type=media_content_type,
            title=parent_item["Name"],
            can_play=IsPlayable(parent_item["Type"], canPlayList),
            can_expand=True,
            thumbnail=jelly_cm.get_artwork_url(media_content_id),
            children=[],
        )
    else:
        query = {
            "Id": media_content_id
        }
        library_info = BrowseMediaSource(
            domain=DOMAIN,
            identifier=f'{media_content_type}{IDENTIFIER_SPLIT}{media_content_id}',
            media_class=MediaClass.DIRECTORY,
            media_content_type=media_content_type,
            title="",
            can_play=True,
            can_expand=False,
            thumbnail=jelly_cm.get_artwork_url(media_content_id),
            children=[],
        )
    _LOGGER.debug(f'-- async_library_items: 1')

    items = await jelly_cm.get_items(query)
    for item in items:
        if media_content_type in [None, "library", MediaClass.DIRECTORY, MediaType.ARTIST, MediaType.ALBUM, MediaType.PLAYLIST, MediaType.TVSHOW, MediaType.SEASON]:
            if item["IsFolder"]:
                library_info.children_media_class = MediaClass.DIRECTORY
                library_info.children.append(BrowseMediaSource(
                    domain=DOMAIN,
                    identifier=f'{Type2Mediatype(item["Type"])}{IDENTIFIER_SPLIT}{item["Id"]}',
                    media_class=Type2Mediaclass(item["Type"]),
                    media_content_type=Type2Mimetype(item["Type"]),
                    title=item["Name"],
                    can_play=IsPlayable(item["Type"], canPlayList),
                    can_expand=True,
                    children=[],
                    thumbnail=jelly_cm.get_artwork_url(item["Id"])
                ))
            else:
                library_info.children_media_class = Type2Mediaclass(item["Type"])
                library_info.children.append(BrowseMediaSource(
                    domain=DOMAIN,
                    identifier=f'{Type2Mediatype(item["Type"])}{IDENTIFIER_SPLIT}{item["Id"]}',
                    media_class=Type2Mediaclass(item["Type"]),
                    media_content_type=Type2Mimetype(item["Type"]),
                    title=item["Name"],
                    can_play=IsPlayable(item["Type"], canPlayList),
                    can_expand=False,
                    children=[],
                    thumbnail=jelly_cm.get_artwork_url(item["Id"])
                ))
        else:
            library_info.domain=DOMAIN
            library_info.identifier=f'{Type2Mediatype(item["Type"])}{IDENTIFIER_SPLIT}{item["Id"]}',
            library_info.title = item["Name"]
            library_info.media_content_type = Type2Mimetype(item["Type"])
            library_info.media_class = Type2Mediaclass(item["Type"])
            library_info.can_expand = False
            library_info.can_play=IsPlayable(item["Type"], canPlayList),
            break

    _LOGGER.debug(f'<< async_library_items {library_info.as_dict()}')
    return library_info
