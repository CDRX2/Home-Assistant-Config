"""Binary sensor platform for irrigation_unlimited."""

from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import Entity
from homeassistant.helpers.entity_component import EntityComponent
from homeassistant.helpers.entity_platform import (
    EntityPlatform,
    current_platform,
    async_get_platforms,
)
from homeassistant.util import dt

from .irrigation_unlimited import IUCoordinator
from .entity import IUEntity
from .service import register_platform_services
from .const import (
    ATTR_ENABLED,
    ATTR_SEQUENCE_STATUS,
    ATTR_STATUS,
    ATTR_INDEX,
    ATTR_CURRENT_SCHEDULE,
    ATTR_CURRENT_NAME,
    ATTR_CURRENT_ADJUSTMENT,
    ATTR_CURRENT_START,
    ATTR_CURRENT_DURATION,
    ATTR_NEXT_SCHEDULE,
    ATTR_NEXT_ZONE,
    ATTR_NEXT_NAME,
    ATTR_NEXT_ADJUSTMENT,
    ATTR_NEXT_START,
    ATTR_NEXT_DURATION,
    ATTR_TIME_REMAINING,
    ATTR_PERCENT_COMPLETE,
    ATTR_ZONE_COUNT,
    ATTR_CURRENT_ZONE,
    ATTR_TOTAL_TODAY,
    ATTR_SCHEDULE_COUNT,
    ATTR_ADJUSTMENT,
    ATTR_CONFIGURATION,
    ATTR_TIMELINE,
    ATTR_SUSPENDED,
    BINARY_SENSOR,
    DOMAIN,
    COORDINATOR,
    CONF_SCHEDULES,
    CONF_ZONE_ID,
    RES_MANUAL,
    RES_NOT_RUNNING,
    RES_NONE,
    ATTR_VOLUME,
    ATTR_FLOW_RATE,
    ATTR_SEQUENCE_COUNT,
    ATTR_ZONES,
    ATTR_REPEAT,
)


def find_platform(hass: HomeAssistant, name: str) -> EntityPlatform:
    """Find a platform in our domain"""
    platforms = async_get_platforms(hass, DOMAIN)
    for platform in platforms:
        if platform.domain == name:
            return platform
    return None


async def async_setup_platform(
    hass, config, async_add_entities, discovery_info=None
) -> None:
    """Setup binary_sensor platform."""
    # pylint: disable=unused-argument

    coordinator: IUCoordinator = hass.data[DOMAIN][COORDINATOR]
    entities = []
    for controller in coordinator.controllers:
        entities.append(IUMasterEntity(coordinator, controller, None, None))
        for zone in controller.zones:
            entities.append(IUZoneEntity(coordinator, controller, zone, None))
        for sequence in controller.sequences:
            entities.append(IUSequenceEntity(coordinator, controller, None, sequence))
    async_add_entities(entities)

    platform = current_platform.get()
    register_platform_services(platform)

    return


async def async_reload_platform(
    component: EntityComponent, coordinator: IUCoordinator
) -> bool:
    """Handle the reloading of this platform"""

    def remove_entity(entities: "dict[Entity]", entity_id: str) -> bool:
        entity_id = f"{BINARY_SENSOR}.{DOMAIN}_{entity_id}"
        if entity_id in entities:
            entities.pop(entity_id)
            return True
        return False

    platform: EntityPlatform = find_platform(component.hass, BINARY_SENSOR)
    if platform is None:
        return False

    old_entities: dict[Entity] = platform.entities.copy()
    new_entities: list[Entity] = []

    for controller in coordinator.controllers:
        if not remove_entity(old_entities, controller.unique_id):
            new_entities.append(IUMasterEntity(coordinator, controller, None, None))
        for zone in controller.zones:
            if not remove_entity(old_entities, zone.unique_id):
                new_entities.append(IUZoneEntity(coordinator, controller, zone, None))
        for sequence in controller.sequences:
            if not remove_entity(old_entities, sequence.unique_id):
                new_entities.append(
                    IUSequenceEntity(coordinator, controller, None, sequence)
                )
    for entity in old_entities:
        await platform.async_remove_entity(entity)
    if len(new_entities) > 0:
        await platform.async_add_entities(new_entities)
        coordinator.initialise()

    return True


class IUMasterEntity(IUEntity):
    """irrigation_unlimited controller binary_sensor class."""

    @property
    def unique_id(self):
        """Return a unique ID."""
        return self._controller.unique_id

    @property
    def name(self):
        """Return the friendly name of the binary_sensor."""
        return self._controller.name

    @property
    def is_on(self):
        """Return true if the binary_sensor is on."""
        return self._controller.is_on

    @property
    def should_poll(self):
        """Indicate that we need to poll data"""
        return False

    @property
    def icon(self):
        """Return the icon to use in the frontend."""
        return self._controller.icon

    @property
    def extra_state_attributes(self):
        """Return the state attributes of the device."""
        attr = {}
        attr[ATTR_INDEX] = self._controller.index
        attr[ATTR_ENABLED] = self._controller.enabled
        attr[ATTR_SUSPENDED] = self._controller.suspended
        attr[ATTR_STATUS] = self._controller.status
        attr[ATTR_ZONE_COUNT] = len(self._controller.zones)
        attr[ATTR_SEQUENCE_COUNT] = len(self._controller.sequences)
        attr[ATTR_ZONES] = ""
        attr[ATTR_SEQUENCE_STATUS] = self._controller.sequence_status()
        current = self._controller.runs.current_run
        if current is not None:
            attr[ATTR_CURRENT_ZONE] = current.zone.index + 1
            attr[ATTR_CURRENT_NAME] = current.zone.name
            attr[ATTR_CURRENT_START] = dt.as_local(current.start_time)
            attr[ATTR_CURRENT_DURATION] = str(current.duration)
            attr[ATTR_TIME_REMAINING] = str(current.time_remaining)
            attr[ATTR_PERCENT_COMPLETE] = current.percent_complete
        else:
            attr[ATTR_CURRENT_SCHEDULE] = "deprecated (use current_zone)"
            attr[ATTR_CURRENT_ZONE] = RES_NOT_RUNNING
            attr[ATTR_PERCENT_COMPLETE] = 0

        next_run = self._controller.runs.next_run
        if next_run is not None:
            attr[ATTR_NEXT_ZONE] = next_run.zone.index + 1
            attr[ATTR_NEXT_NAME] = next_run.zone.name
            attr[ATTR_NEXT_START] = dt.as_local(next_run.start_time)
            attr[ATTR_NEXT_DURATION] = str(next_run.duration)
        else:
            attr[ATTR_NEXT_SCHEDULE] = "deprecated (use next_zone)"
            attr[ATTR_NEXT_ZONE] = RES_NONE
        attr[ATTR_VOLUME] = self._controller.volume.total
        attr[ATTR_FLOW_RATE] = self._controller.volume.flow_rate
        attr |= self._controller.user
        return attr


class IUZoneEntity(IUEntity):
    """irrigation_unlimited zone binary_sensor class."""

    @property
    def unique_id(self):
        """Return a unique ID."""
        return self._zone.unique_id

    @property
    def name(self):
        """Return the friendly name of the binary_sensor."""
        return self._zone.name

    @property
    def is_on(self):
        """Return true if the binary_sensor is on."""
        return self._zone.is_on

    @property
    def should_poll(self):
        """Indicate that we need to poll data"""
        return False

    @property
    def icon(self):
        """Return the icon to use in the frontend."""
        return self._zone.icon

    @property
    def extra_state_attributes(self):
        """Return the state attributes of the device."""
        # pylint: disable=too-many-branches

        attr = {}
        attr[CONF_ZONE_ID] = self._zone.zone_id
        attr[ATTR_INDEX] = self._zone.index
        attr[ATTR_ENABLED] = self._zone.enabled
        attr[ATTR_SUSPENDED] = self._zone.suspended
        attr[ATTR_STATUS] = self._zone.status
        attr[ATTR_SCHEDULE_COUNT] = len(self._zone.schedules)
        attr[CONF_SCHEDULES] = ""
        attr[ATTR_ADJUSTMENT] = str(self._zone.adjustment)
        current = self._zone.runs.current_run
        if current is not None:
            attr[ATTR_CURRENT_ADJUSTMENT] = current.adjustment
            if current.schedule is not None:
                attr[ATTR_CURRENT_SCHEDULE] = current.schedule.index + 1
                attr[ATTR_CURRENT_NAME] = current.schedule.name
            else:
                attr[ATTR_CURRENT_SCHEDULE] = 0
                attr[ATTR_CURRENT_NAME] = RES_MANUAL
            attr[ATTR_CURRENT_START] = dt.as_local(current.start_time)
            attr[ATTR_CURRENT_DURATION] = str(current.duration)
            attr[ATTR_TIME_REMAINING] = str(current.time_remaining)
            attr[ATTR_PERCENT_COMPLETE] = current.percent_complete
        else:
            attr[ATTR_CURRENT_SCHEDULE] = None
            attr[ATTR_PERCENT_COMPLETE] = 0

        next_run = self._zone.runs.next_run
        if next_run is not None:
            attr[ATTR_NEXT_ADJUSTMENT] = next_run.adjustment
            if next_run.schedule is not None:
                attr[ATTR_NEXT_SCHEDULE] = next_run.schedule.index + 1
                attr[ATTR_NEXT_NAME] = next_run.schedule.name
            else:
                attr[ATTR_NEXT_SCHEDULE] = 0
                attr[ATTR_NEXT_NAME] = RES_MANUAL
            attr[ATTR_NEXT_START] = dt.as_local(next_run.start_time)
            attr[ATTR_NEXT_DURATION] = str(next_run.duration)
        else:
            attr[ATTR_NEXT_SCHEDULE] = None
        attr[ATTR_TOTAL_TODAY] = round(
            self._zone.today_total.total_seconds() / 60,
            1,
        )
        if self._zone.show_config:
            attr[ATTR_CONFIGURATION] = self._zone.configuration
        if self._zone.show_timeline:
            attr[ATTR_TIMELINE] = self._zone.timeline()
        attr[ATTR_VOLUME] = self._zone.volume.total
        attr[ATTR_FLOW_RATE] = self._zone.volume.flow_rate
        attr |= self._zone.user
        return attr


class IUSequenceEntity(IUEntity):
    """irrigation_unlimited sequence binary_sensor class."""

    @property
    def unique_id(self):
        """Return a unique ID."""
        return self._sequence.unique_id

    @property
    def name(self):
        """Return the friendly name of the binary_sensor."""
        return self._sequence.name

    @property
    def is_on(self):
        """Return true if the binary_sensor is on."""
        return self._sequence.is_on

    @property
    def should_poll(self):
        """Indicate that we need to poll data"""
        return False

    @property
    def icon(self):
        """Return the icon to use in the frontend."""
        return self._sequence.icon

    @property
    def extra_state_attributes(self):
        """Return the state attributes of the device."""
        attr = {}
        attr[ATTR_INDEX] = self._sequence.index
        attr[ATTR_ENABLED] = self._sequence.enabled
        attr[ATTR_SUSPENDED] = (
            dt.as_local(self._sequence.suspended) if self._sequence.suspended else None
        )
        attr[ATTR_STATUS] = self._sequence.status
        attr[ATTR_ZONE_COUNT] = len(self._sequence.zones)
        attr[ATTR_SCHEDULE_COUNT] = len(self._sequence.schedules)
        attr[ATTR_ADJUSTMENT] = str(self._sequence.adjustment)
        attr[ATTR_VOLUME] = self._sequence.volume
        if (current := self._sequence.runs.current_run) is not None:
            if current.active_zone is not None:
                attr[ATTR_CURRENT_ZONE] = current.active_zone.sequence_zone.id1
            else:
                attr[ATTR_CURRENT_ZONE] = None
            attr[ATTR_CURRENT_START] = dt.as_local(current.start_time)
            attr[ATTR_CURRENT_DURATION] = str(current.total_time)
            attr[ATTR_TIME_REMAINING] = str(current.time_remaining)
            attr[ATTR_PERCENT_COMPLETE] = current.percent_complete
            attr[ATTR_REPEAT] = (
                f"{current.current_zone.sequence_repeat + 1}/{self._sequence.repeat}"
            )
            if current.schedule is not None:
                attr[ATTR_CURRENT_SCHEDULE] = current.schedule.id1
                attr[ATTR_CURRENT_NAME] = current.schedule.name
            else:
                attr[ATTR_CURRENT_SCHEDULE] = 0
                attr[ATTR_CURRENT_NAME] = RES_MANUAL
        else:
            attr[ATTR_CURRENT_ZONE] = None
            attr[ATTR_CURRENT_SCHEDULE] = None
            attr[ATTR_PERCENT_COMPLETE] = 0
        if (next_run := self._sequence.runs.next_run) is not None:
            attr[ATTR_NEXT_START] = dt.as_local(next_run.start_time)
            attr[ATTR_NEXT_DURATION] = str(next_run.total_time)
            if next_run.schedule is not None:
                attr[ATTR_NEXT_SCHEDULE] = next_run.schedule.id1
                attr[ATTR_NEXT_NAME] = next_run.schedule.name
            else:
                attr[ATTR_NEXT_SCHEDULE] = 0
                attr[ATTR_NEXT_NAME] = RES_MANUAL
        else:
            attr[ATTR_NEXT_SCHEDULE] = None
        attr[ATTR_ZONES] = self._sequence.ha_zone_attr()
        return attr
