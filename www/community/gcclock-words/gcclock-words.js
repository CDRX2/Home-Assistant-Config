function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}var e,s;"function"==typeof SuppressedError&&SuppressedError,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(s||(s={}));var i=function(t,e,s,i){i=i||{},s=null==s?{}:s;var n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=s,t.dispatchEvent(n),n
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};const n=globalThis,r=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),a=new WeakMap;let l=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&a.set(e,t))}return t}toString(){return this.cssText}};const h=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new l(s,t,o)},c=(t,e)=>{if(r)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),i=n.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=s.cssText,t.appendChild(e)}},d=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:p,defineProperty:u,getOwnPropertyDescriptor:_,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:y}=Object,f=globalThis,v=f.trustedTypes,w=v?v.emptyScript:"",S=f.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!p(t,e),x={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&u(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=_(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);n.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...m(t),...g(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??A)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[b("elementProperties")]=new Map,C[b("finalized")]=new Map,S?.({ReactiveElement:C}),(f.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=globalThis,P=E.trustedTypes,T=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,N="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+U,k=`<${O}>`,M=document,R=()=>M.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,V=Array.isArray,j="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,I=/>/g,D=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,q=/"/g,W=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),J=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Z=new WeakMap,G=M.createTreeWalker(M,129);function Q(t,e){if(!V(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==T?T.createHTML(e):e}const X=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=L;for(let e=0;e<s;e++){const s=t[e];let a,l,h=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===L?"!--"===l[1]?o=z:void 0!==l[1]?o=I:void 0!==l[2]?(W.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=D):void 0!==l[3]&&(o=D):o===D?">"===l[0]?(o=n??L,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?D:'"'===l[3]?q:B):o===q||o===B?o=D:o===z||o===I?o=L:(o=D,n=void 0);const d=o===D&&t[e+1].startsWith("/>")?" ":"";r+=o===L?s+k:h>=0?(i.push(a),s.slice(0,h)+N+s.slice(h)+U+d):s+U+(-2===h?e:d)}return[Q(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=X(t,e);if(this.el=Y.createElement(l,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(N)){const e=h[r++],s=i.getAttribute(t).split(U),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?nt:"?"===o[1]?rt:"@"===o[1]?ot:it}),i.removeAttribute(t)}else t.startsWith(U)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(W.test(i.tagName)){const t=i.textContent.split(U),e=t.length-1;if(e>0){i.textContent=P?P.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],R()),G.nextNode(),a.push({type:2,index:++n});i.append(t[e],R())}}}else if(8===i.nodeType)if(i.data===O)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(U,t+1));)a.push({type:7,index:n}),t+=U.length-1}n++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function tt(t,e,s=t,i){if(e===J)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=H(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=tt(t,n._$AS(t,e.values),n,i)),e}class et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);G.currentNode=i;let n=G.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new st(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new at(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=G.nextNode(),r++)}return G.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class st{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),H(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>V(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(Q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new et(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new Y(t)),e}k(t){V(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new st(this.O(R()),this.O(R()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=K}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=tt(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==J,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=tt(this,i[s+o],e,o),a===J&&(a=this._$AH[o]),r||=!H(a)||a!==this._$AH[o],a===K?t=K:t!==K&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ot extends it{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??K)===J)return;const s=this._$AH,i=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==K&&(s===K||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const lt=E.litHtmlPolyfillSupport;lt?.(Y,st),(E.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ht extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new st(e.insertBefore(R(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:ht}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const dt="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,pt=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},ut=`{{lit-${String(Math.random()).slice(2)}}}`,_t=`\x3c!--${ut}--\x3e`,mt=new RegExp(`${ut}|${_t}`),gt="$lit$";class yt{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=n.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)ft(e[t].name,gt)&&i++;for(;i-- >0;){const e=l[a],s=St.exec(e)[2],i=s.toLowerCase()+gt,n=t.getAttribute(i);t.removeAttribute(i);const r=n.split(mt);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(ut)>=0){const i=t.parentNode,n=e.split(mt),r=n.length-1;for(let e=0;e<r;e++){let s,r=n[e];if(""===r)s=wt();else{const t=St.exec(r);null!==t&&ft(t[2],gt)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-5)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===n[r]?(i.insertBefore(wt(),t),s.push(t)):t.data=n[r],a+=r}}else if(8===t.nodeType)if(t.data===ut){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(wt(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(ut,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const ft=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},vt=t=>-1!==t.index,wt=()=>document.createComment(""),St=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function bt(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let r=At(i),o=i[r],a=-1,l=0;const h=[];let c=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(h.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,r=At(i,r),o=i[r]}h.forEach((t=>t.parentNode.removeChild(t)))}const $t=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},At=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(vt(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const xt=new WeakMap,Ct=t=>"function"==typeof t&&xt.has(t),Et={},Pt={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Tt{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=dt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,r=0,o=0,a=i.nextNode();for(;r<s.length;)if(n=s[r],vt(n)){for(;o<n.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=e.pop(),a=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return dt&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Nt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),Ut=` ${ut} `;class Ot{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const r=St.exec(t);e+=null===r?t+(s?Ut:_t):t.substr(0,r.index)+r[1]+r[2]+gt+r[3]+ut}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==Nt&&(e=Nt.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const kt=t=>null===t||!("object"==typeof t||"function"==typeof t),Mt=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Rt{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Ht(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!Mt(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=s[n];if(void 0!==e){const t=e.value;if(kt(t)||!Mt(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ht{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===Et||kt(t)&&t===this.value||(this.value=t,Ct(t)||(this.committer.dirty=!0))}commit(){for(;Ct(this.value);){const t=this.value;this.value=Et,t(this)}this.value!==Et&&this.committer.commit()}}class Vt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(wt()),this.endNode=t.appendChild(wt())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=wt()),t.__insert(this.endNode=wt())}insertAfterPart(t){t.__insert(this.startNode=wt()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Ct(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Et,t(this)}const t=this.__pendingValue;t!==Et&&(kt(t)?t!==this.value&&this.__commitText(t):t instanceof Ot?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Mt(t)?this.__commitIterable(t):t===Pt?(this.value=Pt,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof Tt&&this.value.template===e)this.value.update(t.values);else{const s=new Tt(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new Vt(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){pt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class jt{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;Ct(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Et,t(this)}if(this.__pendingValue===Et)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=Et}}class Lt extends Rt{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new zt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class zt extends Ht{}let It=!1;(()=>{try{const t={get capture(){return It=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Dt{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Ct(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Et,t(this)}if(this.__pendingValue===Et)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Bt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=Et}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Bt=t=>t&&(It?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function qt(t){let e=Wt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Wt.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(ut);return s=e.keyString.get(i),void 0===s&&(s=new yt(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const Wt=new Map,Ft=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Jt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new Lt(t,e.slice(1),s).parts}if("@"===n)return[new Dt(t,e.slice(1),i.eventContext)];if("?"===n)return[new jt(t,e.slice(1),s)];return new Rt(t,e,s).parts}handleTextExpression(t){return new Vt(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Kt=(t,...e)=>new Ot(t,e,"html",Jt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Zt=(t,e)=>`${t}--${e}`;let Gt=!0;void 0===window.ShadyCSS?Gt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Gt=!1);const Qt=t=>e=>{const s=Zt(e.type,t);let i=Wt.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Wt.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(ut);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();Gt&&window.ShadyCSS.prepareTemplateDom(s,t),n=new yt(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},Xt=["html","svg"],Yt=new Set,te=(t,e,s)=>{Yt.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{Xt.forEach((e=>{const s=Wt.get(Zt(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),bt(t,s)}))}))})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=At(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=$t(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=At(n,o);return}o=At(n,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),bt(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const ee={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},se=(t,e)=>e!==t&&(e==e||t==t),ie={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:se},ne="finalized";class re extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=ie){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ie}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(ne)||t.finalize(),this[ne]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=se){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||ee,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||ee.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=ie){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let i=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}re[ne]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const oe=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),ae=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function le(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):ae(t,e)}const he=t=>le({attribute:!1,hasChanged:void 0})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,ce=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol();class pe{constructor(t,e){if(e!==de)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ce?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ue={};class _e extends re{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),i=[];s.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!ce){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new pe(String(e),de)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ce?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ue&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return ue}}_e.finalized=!0,_e.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=Ft.has(e),r=Gt&&11===e.nodeType&&!!e.host,o=r&&!Yt.has(i),a=o?document.createDocumentFragment():e;if(((t,e,s)=>{let i=Ft.get(e);void 0===i&&(pt(e,e.firstChild),Ft.set(e,i=new Vt(Object.assign({templateFactory:qt},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,a,Object.assign({templateFactory:Qt(i)},s)),o){const t=Ft.get(a);Ft.delete(a);const s=t.value instanceof Tt?t.value.template:void 0;te(i,a,s),pt(e,e.firstChild),e.appendChild(a),Ft.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)},_e.shadowRootOptions={mode:"open"};let me=class extends ht{constructor(){super(...arguments),this.disabled=!1,this.required=!0}render(){return F`
      <ha-textfield
        type="color"
        helperPersistent
        .value=${this.value||""}
        .label=${this.label||""}
        .required=${this.required}
        .helper=${this.helper}
        .disalbled=${this.disabled}
        @change=${this._valueChanged}
      ></ha-textfield>
    `}_valueChanged(t){if(null==t.target)return;const e=t.target.value;i(this,"value-changed",{value:e})}};me.styles=h`
    :host {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    ha-textfield {
      --text-field-padding: 8px;
      min-width: 75px;
      flex-grow: 1;
      margin: 0 4px;
    }
  `,t([le({attribute:!1})],me.prototype,"hass",void 0),t([le({attribute:!1})],me.prototype,"selector",void 0),t([le()],me.prototype,"value",void 0),t([le()],me.prototype,"label",void 0),t([le()],me.prototype,"helper",void 0),t([le({type:Boolean,reflect:!0})],me.prototype,"disabled",void 0),t([le({type:Boolean})],me.prototype,"required",void 0),me=t([oe("ha-selector-color_hex")],me);let ge=class extends(
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return class extends t{createRenderRoot(){const t=this.constructor,{registry:e,elementDefinitions:s,shadowRootOptions:i}=t;s&&!e&&(t.registry=new CustomElementRegistry,Object.entries(s).forEach((([e,s])=>t.registry.define(e,s))));const n=this.renderOptions.creationScope=this.attachShadow({...i,customElements:t.registry});return c(n,this.constructor.elementStyles),n}}}(ht)){constructor(){super(...arguments),this.SCHEMA=[{name:"",type:"grid",title:"expandable",iconPath:"test",schema:[{name:"highlight_text_color",selector:{color_hex:{}}},{name:"show_highlight_glow",selector:{boolean:{}}}]},{name:"muted_text_brightness",selector:{number:{min:0,max:1,step:.01}}}]}setConfig(t){this._config=t}get _highlight_text_color(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.highlight_text_color)&&void 0!==e?e:"var(--mdc-theme-primary)"}get _show_highlight_glow(){var t,e;return null===(e=null===(t=this._config)||void 0===t?void 0:t.show_highlight_glow)||void 0===e||e}get _muted_text_brightness(){var t,e;return null!==(e=null===(t=this._config)||void 0===t?void 0:t.muted_text_brightness)&&void 0!==e?e:.2}_computeLabel(t){switch(t.name){case"highlight_text_color":return"Text Colour";case"show_highlight_glow":return"Text Glow?";case"muted_text_brightness":return"Muted Text Brightness"}return"aubergine"}render(){return this.hass?F`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this.SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F``}_valueChanged(t){const e=t.detail.value;i(this,"config-changed",{config:e})}};ge.styles=h``,t([le({attribute:!1})],ge.prototype,"hass",void 0),t([he()],ge.prototype,"_config",void 0),ge=t([oe("gcclock-words-editor")],ge);const ye={highlight_text_color:"var(--mdc-theme-primary)",show_highlight_glow:!0,muted_text_brightness:.1},fe=((t,...e)=>{const s=e.reduce(((e,s,i)=>e+(t=>{if(t instanceof pe)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1]),t[0]);return new pe(s,de)})`
  .gcclock-words {
    background-color: var(--ha-card-background, var(--card-background-color, #222));
    width: 100%;
    padding: 65px;
    position: relative;
    box-sizing: border-box;
    box-shadow: var(--ha-card-box-shadow, none);
    border-radius: var(--ha-card-border-radius, 12px);
    border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
    border-width: var(--ha-card-border-width, 1px);
    border-style: solid;
    container-type: inline-size;
  }
  .gcclock-words .line {
    display: flex;
    justify-content: space-between;
  }
  .gcclock-words .line .word {
    font-family: 'Titillium Web', sans-serif;
    font-size: 11.5cqw;
    line-height: 120%;
    color: var(--primary-text-color);
    text-transform: uppercase;
    display: block;
    transition: all 0.3s;
  }
`;!function(t){const e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.href=t,document.head.appendChild(e)}("https://fonts.googleapis.com/css?family=Titillium+Web:700"),console.info("%c gcclock-words 0.0.4","color: white; background-color:rgb(34, 110, 197); font-weight: 700;"),window.customCards=window.customCards||[],window.customCards.push({type:"gcclock-words",name:"Time in Words",description:"Clock displaying Time in Words."});let ve=class extends _e{constructor(){super(...arguments),this.lastUpdateMinutes=0}static async getConfigElement(){return document.createElement("gcclock-words-editor")}set hass(t){this.updateData(),this._hass=t}get actions(){return["more-info","url","navigate","toggle","call-service","fire-dom-event"]}setConfig(t){if(!t)throw new Error("Invalid configuration !");this.config=Object.assign(Object.assign({},ye),t),this.activeStyle=`color: ${this._highlightTextColor}; opacity: 1;`,this.config.show_highlight_glow&&(this.activeStyle+=` text-shadow: 0px 0px 10px ${this._highlightTextColor};`),this.inactiveStyle=`opacity: ${this._mutedTextBrightness};`,this.updateData()}updateData(){const t=new Date;this.currentTime=[t.getHours(),t.getMinutes()],this.currentTime[1]!=this.lastUpdateMinutes&&(this.lastUpdateMinutes=this.currentTime[1],this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.timer=window.setInterval((()=>{this.updateData()}),2e4),this.updateData()}disconnectedCallback(){this.timer&&(clearInterval(this.timer),this.timer=void 0),super.disconnectedCallback()}getCardSize(){return 7}isHour(t){let e=this.currentTime[0]%12;return this.currentTime[1]>32&&e++,0==e&&(e=12),e==t?this.activeStyle:this.inactiveStyle}isDirection(t){const e=this.currentTime[1];return"past"==t&&e>2&&e<28||"to"==t&&e>32&&e<58?this.activeStyle:this.inactiveStyle}isMinute(t){const e=this.currentTime[1];return this.between(e,0,2)&&0==t||this.between(e,3,8)&&5==t||this.between(e,9,13)&&10==t||this.between(e,14,18)&&15==t||this.between(e,19,23)&&20==t?this.activeStyle:!this.between(e,24,27)||20!=t&&5!=t?this.between(e,28,32)&&30==t?this.activeStyle:!this.between(e,33,37)||20!=t&&5!=t?this.between(e,38,42)&&20==t||this.between(e,43,47)&&15==t||this.between(e,48,53)&&10==t||this.between(e,54,57)&&5==t||this.between(e,58,60)&&0==t?this.activeStyle:this.inactiveStyle:this.activeStyle:this.activeStyle}between(t,e,s){return t>=e&&t<=s}render(){return Kt`
      <ha-card class="gcclock-words">
        <div class="line">
          <span class="word" style="${this.activeStyle}">it's</span
          ><span class="word" style="${this.isMinute(15)}">quarter</span
          ><span class="word" style="${this.isMinute(30)}">half</span>
        </div>
        <div class="line">
          <span class="word" style="${this.isMinute(10)}">ten</span
          ><span class="word" style="${this.isMinute(20)}">twenty</span
          ><span class="word" style="${this.isMinute(5)}">five</span>
        </div>
        <div class="line">
          <span class="word" style="${this.isDirection("to")}">to</span
          ><span class="word" style="${this.isDirection("past")}">past</span>
          <span class="word" style="${this.isHour(1)}">one</span>
          <span class="word" style="${this.isHour(2)}">two</span>
        </div>
        <div class="line">
          <span class="word" style="${this.isHour(3)}">three</span>
          <span class="word" style="${this.isHour(4)}">four</span
          ><span class="word" style="${this.isHour(5)}">five</span>
        </div>
        <div class="line">
          <span class="word" style="${this.isHour(6)}">six</span
          ><span class="word" style="${this.isHour(7)}">seven</span
          ><span class="word" style="${this.isHour(8)}">eight</span>
        </div>
        <div class="line">
          <span class="word" style="${this.isHour(9)}">nine</span>
          <span class="word" style="${this.isHour(10)}">ten</span
          ><span class="word" style="${this.isHour(11)}">eleven</span>
        </div>
        <div class="line">
          <span class="word" style="${this.isHour(12)}">twelve</span>
          <span class="word" style="${this.isMinute(0)}">o'clock</span>
        </div>
      </ha-card>
    `}get _highlightTextColor(){var t;return null!==(t=this.config.highlight_text_color)&&void 0!==t?t:ye.highlight_text_color}get _mutedTextBrightness(){var t;return null!==(t=this.config.muted_text_brightness)&&void 0!==t?t:ye.muted_text_brightness}static get styles(){return fe}};t([le({attribute:!1})],ve.prototype,"_hass",void 0),t([he()],ve.prototype,"config",void 0),t([he()],ve.prototype,"lastUpdateMinutes",void 0),t([he()],ve.prototype,"currentTime",void 0),t([he()],ve.prototype,"activeStyle",void 0),t([he()],ve.prototype,"inactiveStyle",void 0),ve=t([oe("gcclock-words")],ve);export{ve as GcClockWords};
