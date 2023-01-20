(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Qu(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Xu(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ge(r)?Dw(r):Xu(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ge(t))return t;if(Me(t))return t}}const Cw=/;(?![^(]*\))/g,Aw=/:([^]+)/,Ow=/\/\*.*?\*\//gs;function Dw(t){const e={};return t.replace(Ow,"").split(Cw).forEach(n=>{if(n){const r=n.split(Aw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ro(t){let e="";if(Ge(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=ro(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xw=Qu(Rw);function Jp(t){return!!t||t===""}const fn=t=>Ge(t)?t:t==null?"":ee(t)||Me(t)&&(t.toString===ng||!re(t.toString))?JSON.stringify(t,Zp,2):String(t),Zp=(t,e)=>e&&e.__v_isRef?Zp(t,e.value):hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:eg(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!ee(e)&&!rg(e)?String(e):e,Oe={},fi=[],Kt=()=>{},Nw=()=>!1,Pw=/^on[^a-z]/,lc=t=>Pw.test(t),Ju=t=>t.startsWith("onUpdate:"),yt=Object.assign,Zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Mw=Object.prototype.hasOwnProperty,me=(t,e)=>Mw.call(t,e),ee=Array.isArray,hi=t=>uc(t)==="[object Map]",eg=t=>uc(t)==="[object Set]",re=t=>typeof t=="function",Ge=t=>typeof t=="string",ef=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",tg=t=>Me(t)&&re(t.then)&&re(t.catch),ng=Object.prototype.toString,uc=t=>ng.call(t),Lw=t=>uc(t).slice(8,-1),rg=t=>uc(t)==="[object Object]",tf=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oa=Qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fw=/-(\w)/g,gn=fc(t=>t.replace(Fw,(e,n)=>n?n.toUpperCase():"")),$w=/\B([A-Z])/g,ji=fc(t=>t.replace($w,"-$1").toLowerCase()),hc=fc(t=>t.charAt(0).toUpperCase()+t.slice(1)),cl=fc(t=>t?`on${hc(t)}`:""),Ts=(t,e)=>!Object.is(t,e),aa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ta=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nd;const Uw=()=>nd||(nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ct;class ig{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){Ct=this}off(){Ct=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function sg(t){return new ig(t)}function jw(t,e=Ct){e&&e.active&&e.effects.push(t)}function Bw(){return Ct}function Vw(t){Ct&&Ct.cleanups.push(t)}const nf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},og=t=>(t.w&sr)>0,ag=t=>(t.n&sr)>0,qw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sr},Hw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];og(i)&&!ag(i)?i.delete(t):e[n++]=i,i.w&=~sr,i.n&=~sr}e.length=n}},Bl=new WeakMap;let rs=0,sr=1;const Vl=30;let qt;const Dr=Symbol(""),ql=Symbol("");class rf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jw(this,r)}run(){if(!this.active)return this.fn();let e=qt,n=Zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Zn=!0,sr=1<<++rs,rs<=Vl?qw(this):rd(this),this.fn()}finally{rs<=Vl&&Hw(this),sr=1<<--rs,qt=this.parent,Zn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(rd(this),this.onStop&&this.onStop(),this.active=!1)}}function rd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Zn=!0;const cg=[];function Bi(){cg.push(Zn),Zn=!1}function Vi(){const t=cg.pop();Zn=t===void 0?!0:t}function Dt(t,e,n){if(Zn&&qt){let r=Bl.get(t);r||Bl.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=nf()),lg(i)}}function lg(t,e){let n=!1;rs<=Vl?ag(t)||(t.n|=sr,n=!og(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function kn(t,e,n,r,i,s){const o=Bl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=ks(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?tf(n)&&a.push(o.get("length")):(a.push(o.get(Dr)),hi(t)&&a.push(o.get(ql)));break;case"delete":ee(t)||(a.push(o.get(Dr)),hi(t)&&a.push(o.get(ql)));break;case"set":hi(t)&&a.push(o.get(Dr));break}if(a.length===1)a[0]&&Hl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hl(nf(c))}}function Hl(t,e){const n=ee(t)?t:[...t];for(const r of n)r.computed&&id(r);for(const r of n)r.computed||id(r)}function id(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ww=Qu("__proto__,__v_isRef,__isVue"),ug=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ef)),zw=sf(),Kw=sf(!1,!0),Gw=sf(!0),sd=Yw();function Yw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ge(this);for(let s=0,o=this.length;s<o;s++)Dt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ge)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Bi();const r=ge(this)[e].apply(this,n);return Vi(),r}}),t}function sf(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?f_:pg:e?mg:dg).get(r))return r;const o=ee(r);if(!t&&o&&me(sd,i))return Reflect.get(sd,i,s);const a=Reflect.get(r,i,s);return(ef(i)?ug.has(i):Ww(i))||(t||Dt(r,"get",i),e)?a:Ue(a)?o&&tf(i)?a:a.value:Me(a)?t?gg(a):qi(a):a}}const Qw=fg(),Xw=fg(!0);function fg(t=!1){return function(n,r,i,s){let o=n[r];if(Ii(o)&&Ue(o)&&!Ue(i))return!1;if(!t&&(!ka(i)&&!Ii(i)&&(o=ge(o),i=ge(i)),!ee(n)&&Ue(o)&&!Ue(i)))return o.value=i,!0;const a=ee(n)&&tf(r)?Number(r)<n.length:me(n,r),c=Reflect.set(n,r,i,s);return n===ge(s)&&(a?Ts(i,o)&&kn(n,"set",r,i):kn(n,"add",r,i)),c}}function Jw(t,e){const n=me(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&kn(t,"delete",e,void 0),r}function Zw(t,e){const n=Reflect.has(t,e);return(!ef(e)||!ug.has(e))&&Dt(t,"has",e),n}function e_(t){return Dt(t,"iterate",ee(t)?"length":Dr),Reflect.ownKeys(t)}const hg={get:zw,set:Qw,deleteProperty:Jw,has:Zw,ownKeys:e_},t_={get:Gw,set(t,e){return!0},deleteProperty(t,e){return!0}},n_=yt({},hg,{get:Kw,set:Xw}),of=t=>t,dc=t=>Reflect.getPrototypeOf(t);function Fo(t,e,n=!1,r=!1){t=t.__v_raw;const i=ge(t),s=ge(e);n||(e!==s&&Dt(i,"get",e),Dt(i,"get",s));const{has:o}=dc(i),a=r?of:n?lf:Ss;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function $o(t,e=!1){const n=this.__v_raw,r=ge(n),i=ge(t);return e||(t!==i&&Dt(r,"has",t),Dt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Uo(t,e=!1){return t=t.__v_raw,!e&&Dt(ge(t),"iterate",Dr),Reflect.get(t,"size",t)}function od(t){t=ge(t);const e=ge(this);return dc(e).has.call(e,t)||(e.add(t),kn(e,"add",t,t)),this}function ad(t,e){e=ge(e);const n=ge(this),{has:r,get:i}=dc(n);let s=r.call(n,t);s||(t=ge(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Ts(e,o)&&kn(n,"set",t,e):kn(n,"add",t,e),this}function cd(t){const e=ge(this),{has:n,get:r}=dc(e);let i=n.call(e,t);i||(t=ge(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&kn(e,"delete",t,void 0),s}function ld(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&kn(t,"clear",void 0,void 0),n}function jo(t,e){return function(r,i){const s=this,o=s.__v_raw,a=ge(o),c=e?of:t?lf:Ss;return!t&&Dt(a,"iterate",Dr),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Bo(t,e,n){return function(...r){const i=this.__v_raw,s=ge(i),o=hi(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?of:e?lf:Ss;return!e&&Dt(s,"iterate",c?ql:Dr),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){return t==="delete"?!1:this}}function r_(){const t={get(s){return Fo(this,s)},get size(){return Uo(this)},has:$o,add:od,set:ad,delete:cd,clear:ld,forEach:jo(!1,!1)},e={get(s){return Fo(this,s,!1,!0)},get size(){return Uo(this)},has:$o,add:od,set:ad,delete:cd,clear:ld,forEach:jo(!1,!0)},n={get(s){return Fo(this,s,!0)},get size(){return Uo(this,!0)},has(s){return $o.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:jo(!0,!1)},r={get(s){return Fo(this,s,!0,!0)},get size(){return Uo(this,!0)},has(s){return $o.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:jo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Bo(s,!1,!1),n[s]=Bo(s,!0,!1),e[s]=Bo(s,!1,!0),r[s]=Bo(s,!0,!0)}),[t,n,e,r]}const[i_,s_,o_,a_]=r_();function af(t,e){const n=e?t?a_:o_:t?s_:i_;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(me(n,i)&&i in r?n:r,i,s)}const c_={get:af(!1,!1)},l_={get:af(!1,!0)},u_={get:af(!0,!1)},dg=new WeakMap,mg=new WeakMap,pg=new WeakMap,f_=new WeakMap;function h_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d_(t){return t.__v_skip||!Object.isExtensible(t)?0:h_(Lw(t))}function qi(t){return Ii(t)?t:cf(t,!1,hg,c_,dg)}function m_(t){return cf(t,!1,n_,l_,mg)}function gg(t){return cf(t,!0,t_,u_,pg)}function cf(t,e,n,r,i){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=d_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Tn(t){return Ii(t)?Tn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ii(t){return!!(t&&t.__v_isReadonly)}function ka(t){return!!(t&&t.__v_isShallow)}function vg(t){return Tn(t)||Ii(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function Ti(t){return Ta(t,"__v_skip",!0),t}const Ss=t=>Me(t)?qi(t):t,lf=t=>Me(t)?gg(t):t;function yg(t){Zn&&qt&&(t=ge(t),lg(t.dep||(t.dep=nf())))}function bg(t,e){t=ge(t),t.dep&&Hl(t.dep)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function fe(t){return wg(t,!1)}function p_(t){return wg(t,!0)}function wg(t,e){return Ue(t)?t:new g_(t,e)}class g_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:Ss(e)}get value(){return yg(this),this._value}set value(e){const n=this.__v_isShallow||ka(e)||Ii(e);e=n?e:ge(e),Ts(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ss(e),bg(this))}}function di(t){return Ue(t)?t.value:t}const v_={get:(t,e,n)=>di(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ue(i)&&!Ue(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function _g(t){return Tn(t)?t:new Proxy(t,v_)}function y_(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=Eg(t,n);return e}class b_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Eg(t,e,n){const r=t[e];return Ue(r)?r:new b_(t,e,n)}var Ig;class w_{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ig]=!1,this._dirty=!0,this.effect=new rf(e,()=>{this._dirty||(this._dirty=!0,bg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ge(this);return yg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ig="__v_isReadonly";function __(t,e,n=!1){let r,i;const s=re(t);return s?(r=t,i=Kt):(r=t.get,i=t.set),new w_(r,i,s||!i,n)}function er(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){io(s,e,n)}return i}function Gt(t,e,n,r){if(re(t)){const s=er(t,e,n,r);return s&&tg(s)&&s.catch(o=>{io(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Gt(t[s],e,n,r));return i}function io(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){er(c,null,10,[t,o,a]);return}}E_(t,n,i,r)}function E_(t,e,n,r=!0){console.error(t)}let Cs=!1,Wl=!1;const ut=[];let on=0;const mi=[];let wn=null,_r=0;const Tg=Promise.resolve();let uf=null;function ff(t){const e=uf||Tg;return t?e.then(this?t.bind(this):t):e}function I_(t){let e=on+1,n=ut.length;for(;e<n;){const r=e+n>>>1;As(ut[r])<t?e=r+1:n=r}return e}function hf(t){(!ut.length||!ut.includes(t,Cs&&t.allowRecurse?on+1:on))&&(t.id==null?ut.push(t):ut.splice(I_(t.id),0,t),kg())}function kg(){!Cs&&!Wl&&(Wl=!0,uf=Tg.then(Ag))}function T_(t){const e=ut.indexOf(t);e>on&&ut.splice(e,1)}function Sg(t){ee(t)?mi.push(...t):(!wn||!wn.includes(t,t.allowRecurse?_r+1:_r))&&mi.push(t),kg()}function ud(t,e=Cs?on+1:0){for(;e<ut.length;e++){const n=ut[e];n&&n.pre&&(ut.splice(e,1),e--,n())}}function Cg(t){if(mi.length){const e=[...new Set(mi)];if(mi.length=0,wn){wn.push(...e);return}for(wn=e,wn.sort((n,r)=>As(n)-As(r)),_r=0;_r<wn.length;_r++)wn[_r]();wn=null,_r=0}}const As=t=>t.id==null?1/0:t.id,k_=(t,e)=>{const n=As(t)-As(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ag(t){Wl=!1,Cs=!0,ut.sort(k_);const e=Kt;try{for(on=0;on<ut.length;on++){const n=ut[on];n&&n.active!==!1&&er(n,null,14)}}finally{on=0,ut.length=0,Cg(),Cs=!1,uf=null,(ut.length||mi.length)&&Ag()}}function S_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||Oe;h&&(i=n.map(m=>Ge(m)?m.trim():m)),f&&(i=n.map(ks))}let a,c=r[a=cl(e)]||r[a=cl(gn(e))];!c&&s&&(c=r[a=cl(ji(e))]),c&&Gt(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Gt(l,t,6,i)}}function Og(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=Og(l,e,!0);u&&(a=!0,yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Me(t)&&r.set(t,null),null):(ee(s)?s.forEach(c=>o[c]=null):yt(o,s),Me(t)&&r.set(t,o),o)}function mc(t,e){return!t||!lc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,ji(e))||me(t,e))}let At=null,Dg=null;function Sa(t){const e=At;return At=t,Dg=t&&t.type.__scopeId||null,e}function Wt(t,e=At,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&wd(-1);const s=Sa(e);let o;try{o=t(...i)}finally{Sa(s),r._d&&wd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ll(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:m,ctx:v,inheritAttrs:w}=t;let I,y;const g=Sa(t);try{if(n.shapeFlag&4){const x=i||r;I=Vt(u.call(x,x,f,s,m,h,v)),y=c}else{const x=e;I=Vt(x.length>1?x(s,{attrs:c,slots:a,emit:l}):x(s,null)),y=e.props?c:A_(c)}}catch(x){fs.length=0,io(x,t,1),I=he(Sn)}let b=I;if(y&&w!==!1){const x=Object.keys(y),{shapeFlag:O}=b;x.length&&O&7&&(o&&x.some(Ju)&&(y=O_(y,o)),b=Ci(b,y))}return n.dirs&&(b=Ci(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),I=b,Sa(g),I}function C_(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Da(r)){if(r.type!==Sn||r.children==="v-if"){if(e)return;e=r}}else return}return e}const A_=t=>{let e;for(const n in t)(n==="class"||n==="style"||lc(n))&&((e||(e={}))[n]=t[n]);return e},O_=(t,e)=>{const n={};for(const r in t)(!Ju(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function D_(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!mc(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fd(r,o,l):!0:!!o;return!1}function fd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!mc(n,s))return!0}return!1}function df({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const R_=t=>t.__isSuspense,x_={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,o,a,c,l){t==null?N_(e,n,r,i,s,o,a,c,l):P_(t,e,n,r,i,o,a,c,l)},hydrate:M_,create:mf,normalize:L_},Ca=x_;function Os(t,e){const n=t.props&&t.props[e];re(n)&&n()}function N_(t,e,n,r,i,s,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),h=t.suspense=mf(t,i,r,e,f,n,s,o,a,c);l(null,h.pendingBranch=t.ssContent,f,null,r,h,s,o),h.deps>0?(Os(t,"onPending"),Os(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,s,o),pi(h,t.ssFallback)):h.resolve()}function P_(t,e,n,r,i,s,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,m=e.ssFallback,{activeBranch:v,pendingBranch:w,isInFallback:I,isHydrating:y}=f;if(w)f.pendingBranch=h,Kn(h,w)?(c(w,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0?f.resolve():I&&(c(v,m,n,r,i,null,s,o,a),pi(f,m))):(f.pendingId++,y?(f.isHydrating=!1,f.activeBranch=w):l(w,i,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),I?(c(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0?f.resolve():(c(v,m,n,r,i,null,s,o,a),pi(f,m))):v&&Kn(h,v)?(c(v,h,n,r,i,f,s,o,a),f.resolve(!0)):(c(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0&&f.resolve()));else if(v&&Kn(h,v))c(v,h,n,r,i,f,s,o,a),pi(f,h);else if(Os(e,"onPending"),f.pendingBranch=h,f.pendingId++,c(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:g,pendingId:b}=f;g>0?setTimeout(()=>{f.pendingId===b&&f.fallback(m)},g):g===0&&f.fallback(m)}}function mf(t,e,n,r,i,s,o,a,c,l,u=!1){const{p:f,m:h,um:m,n:v,o:{parentNode:w,remove:I}}=l,y=ks(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof y=="number"?y:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:x,activeBranch:O,pendingBranch:B,pendingId:U,effects:G,parentComponent:se,container:oe}=g;if(g.isHydrating)g.isHydrating=!1;else if(!b){const kt=O&&B.transition&&B.transition.mode==="out-in";kt&&(O.transition.afterLeave=()=>{U===g.pendingId&&h(B,oe,We,0)});let{anchor:We}=g;O&&(We=v(O),m(O,se,g,!0)),kt||h(B,oe,We,0)}pi(g,B),g.pendingBranch=null,g.isInFallback=!1;let Se=g.parent,rt=!1;for(;Se;){if(Se.pendingBranch){Se.effects.push(...G),rt=!0;break}Se=Se.parent}rt||Sg(G),g.effects=[],Os(x,"onResolve")},fallback(b){if(!g.pendingBranch)return;const{vnode:x,activeBranch:O,parentComponent:B,container:U,isSVG:G}=g;Os(x,"onFallback");const se=v(O),oe=()=>{g.isInFallback&&(f(null,b,U,se,B,null,G,a,c),pi(g,b))},Se=b.transition&&b.transition.mode==="out-in";Se&&(O.transition.afterLeave=oe),g.isInFallback=!0,m(O,B,null,!0),Se||oe()},move(b,x,O){g.activeBranch&&h(g.activeBranch,b,x,O),g.container=b},next(){return g.activeBranch&&v(g.activeBranch)},registerDep(b,x){const O=!!g.pendingBranch;O&&g.deps++;const B=b.vnode.el;b.asyncDep.catch(U=>{io(U,b,0)}).then(U=>{if(b.isUnmounted||g.isUnmounted||g.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:G}=b;Xl(b,U,!1),B&&(G.el=B);const se=!B&&b.subTree.el;x(b,G,w(B||b.subTree.el),B?null:v(b.subTree),g,o,c),se&&I(se),df(b,G.el),O&&--g.deps===0&&g.resolve()})},unmount(b,x){g.isUnmounted=!0,g.activeBranch&&m(g.activeBranch,n,b,x),g.pendingBranch&&m(g.pendingBranch,n,b,x)}};return g}function M_(t,e,n,r,i,s,o,a,c){const l=e.suspense=mf(e,r,n,t.parentNode,document.createElement("div"),null,i,s,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,s,o);return l.deps===0&&l.resolve(),u}function L_(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=hd(r?n.default:n),t.ssFallback=r?hd(n.fallback):he(Sn)}function hd(t){let e;if(re(t)){const n=ki&&t._c;n&&(t._d=!1,be()),t=t(),n&&(t._d=!0,e=Pt,Wg())}return ee(t)&&(t=C_(t)),t=Vt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function F_(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Sg(t)}function pi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,df(r,i))}function ca(t,e){if(Je){let n=Je.provides;const r=Je.parent&&Je.parent.provides;r===n&&(n=Je.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=Je||At;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&re(e)?e.call(r.proxy):e}}const Vo={};function Rr(t,e,n){return Rg(t,e,n)}function Rg(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Oe){const a=Je;let c,l=!1,u=!1;if(Ue(t)?(c=()=>t.value,l=ka(t)):Tn(t)?(c=()=>t,r=!0):ee(t)?(u=!0,l=t.some(b=>Tn(b)||ka(b)),c=()=>t.map(b=>{if(Ue(b))return b.value;if(Tn(b))return Ir(b);if(re(b))return er(b,a,2)})):re(t)?e?c=()=>er(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Gt(t,a,3,[h])}:c=Kt,e&&r){const b=c;c=()=>Ir(b())}let f,h=b=>{f=y.onStop=()=>{er(b,a,4)}},m;if(Ds)if(h=Kt,e?n&&Gt(e,a,3,[c(),u?[]:void 0,h]):c(),i==="sync"){const b=O1();m=b.__watcherHandles||(b.__watcherHandles=[])}else return Kt;let v=u?new Array(t.length).fill(Vo):Vo;const w=()=>{if(y.active)if(e){const b=y.run();(r||l||(u?b.some((x,O)=>Ts(x,v[O])):Ts(b,v)))&&(f&&f(),Gt(e,a,3,[b,v===Vo?void 0:u&&v[0]===Vo?[]:v,h]),v=b)}else y.run()};w.allowRecurse=!!e;let I;i==="sync"?I=w:i==="post"?I=()=>_t(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),I=()=>hf(w));const y=new rf(c,I);e?n?w():v=y.run():i==="post"?_t(y.run.bind(y),a&&a.suspense):y.run();const g=()=>{y.stop(),a&&a.scope&&Zu(a.scope.effects,y)};return m&&m.push(g),g}function $_(t,e,n){const r=this.proxy,i=Ge(t)?t.includes(".")?xg(r,t):()=>r[t]:t.bind(r,r);let s;re(e)?s=e:(s=e.handler,n=e);const o=Je;Ai(this);const a=Rg(i,s.bind(r),n);return o?Ai(o):xr(),a}function xg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ir(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Ir(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)Ir(t[n],e);else if(eg(t)||hi(t))t.forEach(n=>{Ir(n,e)});else if(rg(t))for(const n in t)Ir(t[n],e);return t}function tt(t){return re(t)?{setup:t,name:t.name}:t}const la=t=>!!t.type.__asyncLoader,Ng=t=>t.type.__isKeepAlive;function U_(t,e){Pg(t,"a",e)}function j_(t,e){Pg(t,"da",e)}function Pg(t,e,n=Je){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(pc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ng(i.parent.vnode)&&B_(r,e,n,i),i=i.parent}}function B_(t,e,n,r){const i=pc(e,t,r,!0);Mg(()=>{Zu(r[e],i)},n)}function pc(t,e,n=Je,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Bi(),Ai(n);const a=Gt(e,n,t,o);return xr(),Vi(),a});return r?i.unshift(s):i.push(s),s}}const Ln=t=>(e,n=Je)=>(!Ds||t==="sp")&&pc(t,(...r)=>e(...r),n),V_=Ln("bm"),pf=Ln("m"),q_=Ln("bu"),H_=Ln("u"),W_=Ln("bum"),Mg=Ln("um"),z_=Ln("sp"),K_=Ln("rtg"),G_=Ln("rtc");function Y_(t,e=Je){pc("ec",t,e)}function Aa(t,e){const n=At;if(n===null)return t;const r=yc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Oe]=e[s];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&Ir(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function gr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Bi(),Gt(c,n,8,[t.el,a,t,e]),Vi())}}const Lg="components";function It(t,e){return X_(Lg,t,!0,e)||t}const Q_=Symbol();function X_(t,e,n=!0,r=!1){const i=At||Je;if(i){const s=i.type;if(t===Lg){const a=S1(s,!1);if(a&&(a===e||a===gn(e)||a===hc(gn(e))))return s}const o=dd(i[t]||s[t],e)||dd(i.appContext[t],e);return!o&&r?s:o}}function dd(t,e){return t&&(t[e]||t[gn(e)]||t[hc(gn(e))])}function gf(t,e,n,r){let i;const s=n&&n[r];if(ee(t)||Ge(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const zl=t=>t?Gg(t)?yc(t)||t.proxy:zl(t.parent):null,us=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zl(t.parent),$root:t=>zl(t.root),$emit:t=>t.emit,$options:t=>vf(t),$forceUpdate:t=>t.f||(t.f=()=>hf(t.update)),$nextTick:t=>t.n||(t.n=ff.bind(t.proxy)),$watch:t=>$_.bind(t)}),ul=(t,e)=>t!==Oe&&!t.__isScriptSetup&&me(t,e),J_={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(ul(r,e))return o[e]=1,r[e];if(i!==Oe&&me(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&me(l,e))return o[e]=3,s[e];if(n!==Oe&&me(n,e))return o[e]=4,n[e];Kl&&(o[e]=0)}}const u=us[e];let f,h;if(u)return e==="$attrs"&&Dt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Oe&&me(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,me(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return ul(i,e)?(i[e]=n,!0):r!==Oe&&me(r,e)?(r[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Oe&&me(t,o)||ul(e,o)||(a=s[0])&&me(a,o)||me(r,o)||me(us,o)||me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Kl=!0;function Z_(t){const e=vf(t),n=t.proxy,r=t.ctx;Kl=!1,e.beforeCreate&&md(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:v,activated:w,deactivated:I,beforeDestroy:y,beforeUnmount:g,destroyed:b,unmounted:x,render:O,renderTracked:B,renderTriggered:U,errorCaptured:G,serverPrefetch:se,expose:oe,inheritAttrs:Se,components:rt,directives:kt,filters:We}=e;if(l&&e1(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const Te=o[ve];re(Te)&&(r[ve]=Te.bind(n))}if(i){const ve=i.call(n,n);Me(ve)&&(t.data=qi(ve))}if(Kl=!0,s)for(const ve in s){const Te=s[ve],Ut=re(Te)?Te.bind(n,n):re(Te.get)?Te.get.bind(n,n):Kt,pr=!re(Te)&&re(Te.set)?Te.set.bind(n):Kt,jt=Re({get:Ut,set:pr});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>jt.value,set:bt=>jt.value=bt})}if(a)for(const ve in a)Fg(a[ve],r,n,ve);if(c){const ve=re(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(Te=>{ca(Te,ve[Te])})}u&&md(u,t,"c");function _e(ve,Te){ee(Te)?Te.forEach(Ut=>ve(Ut.bind(n))):Te&&ve(Te.bind(n))}if(_e(V_,f),_e(pf,h),_e(q_,m),_e(H_,v),_e(U_,w),_e(j_,I),_e(Y_,G),_e(G_,B),_e(K_,U),_e(W_,g),_e(Mg,x),_e(z_,se),ee(oe))if(oe.length){const ve=t.exposed||(t.exposed={});oe.forEach(Te=>{Object.defineProperty(ve,Te,{get:()=>n[Te],set:Ut=>n[Te]=Ut})})}else t.exposed||(t.exposed={});O&&t.render===Kt&&(t.render=O),Se!=null&&(t.inheritAttrs=Se),rt&&(t.components=rt),kt&&(t.directives=kt)}function e1(t,e,n=Kt,r=!1){ee(t)&&(t=Gl(t));for(const i in t){const s=t[i];let o;Me(s)?"default"in s?o=Yt(s.from||i,s.default,!0):o=Yt(s.from||i):o=Yt(s),Ue(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function md(t,e,n){Gt(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fg(t,e,n,r){const i=r.includes(".")?xg(n,r):()=>n[r];if(Ge(t)){const s=e[t];re(s)&&Rr(i,s)}else if(re(t))Rr(i,t.bind(n));else if(Me(t))if(ee(t))t.forEach(s=>Fg(s,e,n,r));else{const s=re(t.handler)?t.handler.bind(n):e[t.handler];re(s)&&Rr(i,s,t)}}function vf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Oa(c,l,o,!0)),Oa(c,e,o)),Me(e)&&s.set(e,c),c}function Oa(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Oa(t,s,n,!0),i&&i.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=t1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const t1={data:pd,props:yr,emits:yr,methods:yr,computed:yr,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:yr,directives:yr,watch:r1,provide:pd,inject:n1};function pd(t,e){return e?t?function(){return yt(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function n1(t,e){return yr(Gl(t),Gl(e))}function Gl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function yr(t,e){return t?yt(yt(Object.create(null),t),e):e}function r1(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function i1(t,e,n,r=!1){const i={},s={};Ta(s,vc,1),t.propsDefaults=Object.create(null),$g(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:m_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function s1(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ge(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(mc(t.emitsOptions,h))continue;const m=e[h];if(c)if(me(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const v=gn(h);i[v]=Yl(c,a,v,m,t,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{$g(t,e,i,s)&&(l=!0);let u;for(const f in a)(!e||!me(e,f)&&((u=ji(f))===f||!me(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Yl(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!me(e,f))&&(delete s[f],l=!0)}l&&kn(t,"set","$attrs")}function $g(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oa(c))continue;const l=e[c];let u;i&&me(i,u=gn(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:mc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=ge(n),l=a||Oe;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Yl(i,c,f,l[f],t,!me(l,f))}}return o}function Yl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&re(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Ai(i),r=l[n]=c.call(null,e),xr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ji(n))&&(r=!0))}return r}function Ug(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!re(t)){const u=f=>{c=!0;const[h,m]=Ug(f,e,!0);yt(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Me(t)&&r.set(t,fi),fi;if(ee(s))for(let u=0;u<s.length;u++){const f=gn(s[u]);gd(f)&&(o[f]=Oe)}else if(s)for(const u in s){const f=gn(u);if(gd(f)){const h=s[u],m=o[f]=ee(h)||re(h)?{type:h}:Object.assign({},h);if(m){const v=bd(Boolean,m.type),w=bd(String,m.type);m[0]=v>-1,m[1]=w<0||v<w,(v>-1||me(m,"default"))&&a.push(f)}}}const l=[o,a];return Me(t)&&r.set(t,l),l}function gd(t){return t[0]!=="$"}function vd(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function yd(t,e){return vd(t)===vd(e)}function bd(t,e){return ee(e)?e.findIndex(n=>yd(n,t)):re(e)&&yd(e,t)?0:-1}const jg=t=>t[0]==="_"||t==="$stable",yf=t=>ee(t)?t.map(Vt):[Vt(t)],o1=(t,e,n)=>{if(e._n)return e;const r=Wt((...i)=>yf(e(...i)),n);return r._c=!1,r},Bg=(t,e,n)=>{const r=t._ctx;for(const i in t){if(jg(i))continue;const s=t[i];if(re(s))e[i]=o1(i,s,r);else if(s!=null){const o=yf(s);e[i]=()=>o}}},Vg=(t,e)=>{const n=yf(e);t.slots.default=()=>n},a1=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),Ta(e,"_",n)):Bg(e,t.slots={})}else t.slots={},e&&Vg(t,e);Ta(t.slots,vc,1)},c1=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Oe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(yt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Bg(e,i)),o=e}else e&&(Vg(t,e),o={default:1});if(s)for(const a in i)!jg(a)&&!(a in o)&&delete i[a]};function qg(){return{app:null,config:{isNativeTag:Nw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l1=0;function u1(t,e){return function(r,i=null){re(r)||(r=Object.assign({},r)),i!=null&&!Me(i)&&(i=null);const s=qg(),o=new Set;let a=!1;const c=s.app={_uid:l1++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:D1,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=he(r,i);return h.appContext=s,u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,yc(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Ql(t,e,n,r,i=!1){if(ee(t)){t.forEach((h,m)=>Ql(h,e&&(ee(e)?e[m]:e),n,r,i));return}if(la(r)&&!i)return;const s=r.shapeFlag&4?yc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Oe?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Ge(l)?(u[l]=null,me(f,l)&&(f[l]=null)):Ue(l)&&(l.value=null)),re(c))er(c,a,12,[o,u]);else{const h=Ge(c),m=Ue(c);if(h||m){const v=()=>{if(t.f){const w=h?me(f,c)?f[c]:u[c]:c.value;i?ee(w)&&Zu(w,s):ee(w)?w.includes(s)||w.push(s):h?(u[c]=[s],me(f,c)&&(f[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,me(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,_t(v,n)):v()}}}const _t=F_;function f1(t){return h1(t)}function h1(t,e){const n=Uw();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Kt,insertStaticContent:v}=t,w=(d,p,_,E=null,S=null,N=null,L=!1,D=null,P=!!p.dynamicChildren)=>{if(d===p)return;d&&!Kn(d,p)&&(E=M(d),bt(d,S,N,!0),d=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:C,ref:Y,shapeFlag:V}=p;switch(C){case gc:I(d,p,_,E);break;case Sn:y(d,p,_,E);break;case fl:d==null&&g(p,_,E,L);break;case ct:rt(d,p,_,E,S,N,L,D,P);break;default:V&1?O(d,p,_,E,S,N,L,D,P):V&6?kt(d,p,_,E,S,N,L,D,P):(V&64||V&128)&&C.process(d,p,_,E,S,N,L,D,P,de)}Y!=null&&S&&Ql(Y,d&&d.ref,N,p||d,!p)},I=(d,p,_,E)=>{if(d==null)r(p.el=a(p.children),_,E);else{const S=p.el=d.el;p.children!==d.children&&l(S,p.children)}},y=(d,p,_,E)=>{d==null?r(p.el=c(p.children||""),_,E):p.el=d.el},g=(d,p,_,E)=>{[d.el,d.anchor]=v(d.children,p,_,E,d.el,d.anchor)},b=({el:d,anchor:p},_,E)=>{let S;for(;d&&d!==p;)S=h(d),r(d,_,E),d=S;r(p,_,E)},x=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=h(d),i(d),d=_;i(p)},O=(d,p,_,E,S,N,L,D,P)=>{L=L||p.type==="svg",d==null?B(p,_,E,S,N,L,D,P):se(d,p,S,N,L,D,P)},B=(d,p,_,E,S,N,L,D)=>{let P,C;const{type:Y,props:V,shapeFlag:Q,transition:te,dirs:ce}=d;if(P=d.el=o(d.type,N,V&&V.is,V),Q&8?u(P,d.children):Q&16&&G(d.children,P,null,E,S,N&&Y!=="foreignObject",L,D),ce&&gr(d,null,E,"created"),V){for(const ke in V)ke!=="value"&&!oa(ke)&&s(P,ke,null,V[ke],N,d.children,E,S,F);"value"in V&&s(P,"value",null,V.value),(C=V.onVnodeBeforeMount)&&nn(C,E,d)}U(P,d,d.scopeId,L,E),ce&&gr(d,null,E,"beforeMount");const Ce=(!S||S&&!S.pendingBranch)&&te&&!te.persisted;Ce&&te.beforeEnter(P),r(P,p,_),((C=V&&V.onVnodeMounted)||Ce||ce)&&_t(()=>{C&&nn(C,E,d),Ce&&te.enter(P),ce&&gr(d,null,E,"mounted")},S)},U=(d,p,_,E,S)=>{if(_&&m(d,_),E)for(let N=0;N<E.length;N++)m(d,E[N]);if(S){let N=S.subTree;if(p===N){const L=S.vnode;U(d,L,L.scopeId,L.slotScopeIds,S.parent)}}},G=(d,p,_,E,S,N,L,D,P=0)=>{for(let C=P;C<d.length;C++){const Y=d[C]=D?Hn(d[C]):Vt(d[C]);w(null,Y,p,_,E,S,N,L,D)}},se=(d,p,_,E,S,N,L)=>{const D=p.el=d.el;let{patchFlag:P,dynamicChildren:C,dirs:Y}=p;P|=d.patchFlag&16;const V=d.props||Oe,Q=p.props||Oe;let te;_&&vr(_,!1),(te=Q.onVnodeBeforeUpdate)&&nn(te,_,p,d),Y&&gr(p,d,_,"beforeUpdate"),_&&vr(_,!0);const ce=S&&p.type!=="foreignObject";if(C?oe(d.dynamicChildren,C,D,_,E,ce,N):L||Te(d,p,D,null,_,E,ce,N,!1),P>0){if(P&16)Se(D,p,V,Q,_,E,S);else if(P&2&&V.class!==Q.class&&s(D,"class",null,Q.class,S),P&4&&s(D,"style",V.style,Q.style,S),P&8){const Ce=p.dynamicProps;for(let ke=0;ke<Ce.length;ke++){const Be=Ce[ke],Bt=V[Be],Zr=Q[Be];(Zr!==Bt||Be==="value")&&s(D,Be,Bt,Zr,S,d.children,_,E,F)}}P&1&&d.children!==p.children&&u(D,p.children)}else!L&&C==null&&Se(D,p,V,Q,_,E,S);((te=Q.onVnodeUpdated)||Y)&&_t(()=>{te&&nn(te,_,p,d),Y&&gr(p,d,_,"updated")},E)},oe=(d,p,_,E,S,N,L)=>{for(let D=0;D<p.length;D++){const P=d[D],C=p[D],Y=P.el&&(P.type===ct||!Kn(P,C)||P.shapeFlag&70)?f(P.el):_;w(P,C,Y,null,E,S,N,L,!0)}},Se=(d,p,_,E,S,N,L)=>{if(_!==E){if(_!==Oe)for(const D in _)!oa(D)&&!(D in E)&&s(d,D,_[D],null,L,p.children,S,N,F);for(const D in E){if(oa(D))continue;const P=E[D],C=_[D];P!==C&&D!=="value"&&s(d,D,C,P,L,p.children,S,N,F)}"value"in E&&s(d,"value",_.value,E.value)}},rt=(d,p,_,E,S,N,L,D,P)=>{const C=p.el=d?d.el:a(""),Y=p.anchor=d?d.anchor:a("");let{patchFlag:V,dynamicChildren:Q,slotScopeIds:te}=p;te&&(D=D?D.concat(te):te),d==null?(r(C,_,E),r(Y,_,E),G(p.children,_,Y,S,N,L,D,P)):V>0&&V&64&&Q&&d.dynamicChildren?(oe(d.dynamicChildren,Q,_,S,N,L,D),(p.key!=null||S&&p===S.subTree)&&Hg(d,p,!0)):Te(d,p,_,Y,S,N,L,D,P)},kt=(d,p,_,E,S,N,L,D,P)=>{p.slotScopeIds=D,d==null?p.shapeFlag&512?S.ctx.activate(p,_,E,L,P):We(p,_,E,S,N,L,P):pe(d,p,P)},We=(d,p,_,E,S,N,L)=>{const D=d.component=w1(d,E,S);if(Ng(d)&&(D.ctx.renderer=de),E1(D),D.asyncDep){if(S&&S.registerDep(D,_e),!d.el){const P=D.subTree=he(Sn);y(null,P,p,_)}return}_e(D,d,p,_,S,N,L)},pe=(d,p,_)=>{const E=p.component=d.component;if(D_(d,p,_))if(E.asyncDep&&!E.asyncResolved){ve(E,p,_);return}else E.next=p,T_(E.update),E.update();else p.el=d.el,E.vnode=p},_e=(d,p,_,E,S,N,L)=>{const D=()=>{if(d.isMounted){let{next:Y,bu:V,u:Q,parent:te,vnode:ce}=d,Ce=Y,ke;vr(d,!1),Y?(Y.el=ce.el,ve(d,Y,L)):Y=ce,V&&aa(V),(ke=Y.props&&Y.props.onVnodeBeforeUpdate)&&nn(ke,te,Y,ce),vr(d,!0);const Be=ll(d),Bt=d.subTree;d.subTree=Be,w(Bt,Be,f(Bt.el),M(Bt),d,S,N),Y.el=Be.el,Ce===null&&df(d,Be.el),Q&&_t(Q,S),(ke=Y.props&&Y.props.onVnodeUpdated)&&_t(()=>nn(ke,te,Y,ce),S)}else{let Y;const{el:V,props:Q}=p,{bm:te,m:ce,parent:Ce}=d,ke=la(p);if(vr(d,!1),te&&aa(te),!ke&&(Y=Q&&Q.onVnodeBeforeMount)&&nn(Y,Ce,p),vr(d,!0),V&&ae){const Be=()=>{d.subTree=ll(d),ae(V,d.subTree,d,S,null)};ke?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Be()):Be()}else{const Be=d.subTree=ll(d);w(null,Be,_,E,d,S,N),p.el=Be.el}if(ce&&_t(ce,S),!ke&&(Y=Q&&Q.onVnodeMounted)){const Be=p;_t(()=>nn(Y,Ce,Be),S)}(p.shapeFlag&256||Ce&&la(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&d.a&&_t(d.a,S),d.isMounted=!0,p=_=E=null}},P=d.effect=new rf(D,()=>hf(C),d.scope),C=d.update=()=>P.run();C.id=d.uid,vr(d,!0),C()},ve=(d,p,_)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,s1(d,p.props,E,_),c1(d,p.children,_),Bi(),ud(),Vi()},Te=(d,p,_,E,S,N,L,D,P=!1)=>{const C=d&&d.children,Y=d?d.shapeFlag:0,V=p.children,{patchFlag:Q,shapeFlag:te}=p;if(Q>0){if(Q&128){pr(C,V,_,E,S,N,L,D,P);return}else if(Q&256){Ut(C,V,_,E,S,N,L,D,P);return}}te&8?(Y&16&&F(C,S,N),V!==C&&u(_,V)):Y&16?te&16?pr(C,V,_,E,S,N,L,D,P):F(C,S,N,!0):(Y&8&&u(_,""),te&16&&G(V,_,E,S,N,L,D,P))},Ut=(d,p,_,E,S,N,L,D,P)=>{d=d||fi,p=p||fi;const C=d.length,Y=p.length,V=Math.min(C,Y);let Q;for(Q=0;Q<V;Q++){const te=p[Q]=P?Hn(p[Q]):Vt(p[Q]);w(d[Q],te,_,null,S,N,L,D,P)}C>Y?F(d,S,N,!0,!1,V):G(p,_,E,S,N,L,D,P,V)},pr=(d,p,_,E,S,N,L,D,P)=>{let C=0;const Y=p.length;let V=d.length-1,Q=Y-1;for(;C<=V&&C<=Q;){const te=d[C],ce=p[C]=P?Hn(p[C]):Vt(p[C]);if(Kn(te,ce))w(te,ce,_,null,S,N,L,D,P);else break;C++}for(;C<=V&&C<=Q;){const te=d[V],ce=p[Q]=P?Hn(p[Q]):Vt(p[Q]);if(Kn(te,ce))w(te,ce,_,null,S,N,L,D,P);else break;V--,Q--}if(C>V){if(C<=Q){const te=Q+1,ce=te<Y?p[te].el:E;for(;C<=Q;)w(null,p[C]=P?Hn(p[C]):Vt(p[C]),_,ce,S,N,L,D,P),C++}}else if(C>Q)for(;C<=V;)bt(d[C],S,N,!0),C++;else{const te=C,ce=C,Ce=new Map;for(C=ce;C<=Q;C++){const St=p[C]=P?Hn(p[C]):Vt(p[C]);St.key!=null&&Ce.set(St.key,C)}let ke,Be=0;const Bt=Q-ce+1;let Zr=!1,Zh=0;const es=new Array(Bt);for(C=0;C<Bt;C++)es[C]=0;for(C=te;C<=V;C++){const St=d[C];if(Be>=Bt){bt(St,S,N,!0);continue}let tn;if(St.key!=null)tn=Ce.get(St.key);else for(ke=ce;ke<=Q;ke++)if(es[ke-ce]===0&&Kn(St,p[ke])){tn=ke;break}tn===void 0?bt(St,S,N,!0):(es[tn-ce]=C+1,tn>=Zh?Zh=tn:Zr=!0,w(St,p[tn],_,null,S,N,L,D,P),Be++)}const ed=Zr?d1(es):fi;for(ke=ed.length-1,C=Bt-1;C>=0;C--){const St=ce+C,tn=p[St],td=St+1<Y?p[St+1].el:E;es[C]===0?w(null,tn,_,td,S,N,L,D,P):Zr&&(ke<0||C!==ed[ke]?jt(tn,_,td,2):ke--)}}},jt=(d,p,_,E,S=null)=>{const{el:N,type:L,transition:D,children:P,shapeFlag:C}=d;if(C&6){jt(d.component.subTree,p,_,E);return}if(C&128){d.suspense.move(p,_,E);return}if(C&64){L.move(d,p,_,de);return}if(L===ct){r(N,p,_);for(let V=0;V<P.length;V++)jt(P[V],p,_,E);r(d.anchor,p,_);return}if(L===fl){b(d,p,_);return}if(E!==2&&C&1&&D)if(E===0)D.beforeEnter(N),r(N,p,_),_t(()=>D.enter(N),S);else{const{leave:V,delayLeave:Q,afterLeave:te}=D,ce=()=>r(N,p,_),Ce=()=>{V(N,()=>{ce(),te&&te()})};Q?Q(N,ce,Ce):Ce()}else r(N,p,_)},bt=(d,p,_,E=!1,S=!1)=>{const{type:N,props:L,ref:D,children:P,dynamicChildren:C,shapeFlag:Y,patchFlag:V,dirs:Q}=d;if(D!=null&&Ql(D,null,_,d,!0),Y&256){p.ctx.deactivate(d);return}const te=Y&1&&Q,ce=!la(d);let Ce;if(ce&&(Ce=L&&L.onVnodeBeforeUnmount)&&nn(Ce,p,d),Y&6)k(d.component,_,E);else{if(Y&128){d.suspense.unmount(_,E);return}te&&gr(d,null,p,"beforeUnmount"),Y&64?d.type.remove(d,p,_,S,de,E):C&&(N!==ct||V>0&&V&64)?F(C,p,_,!1,!0):(N===ct&&V&384||!S&&Y&16)&&F(P,p,_),E&&Jr(d)}(ce&&(Ce=L&&L.onVnodeUnmounted)||te)&&_t(()=>{Ce&&nn(Ce,p,d),te&&gr(d,null,p,"unmounted")},_)},Jr=d=>{const{type:p,el:_,anchor:E,transition:S}=d;if(p===ct){Lo(_,E);return}if(p===fl){x(d);return}const N=()=>{i(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(d.shapeFlag&1&&S&&!S.persisted){const{leave:L,delayLeave:D}=S,P=()=>L(_,N);D?D(d.el,N,P):P()}else N()},Lo=(d,p)=>{let _;for(;d!==p;)_=h(d),i(d),d=_;i(p)},k=(d,p,_)=>{const{bum:E,scope:S,update:N,subTree:L,um:D}=d;E&&aa(E),S.stop(),N&&(N.active=!1,bt(L,d,p,_)),D&&_t(D,p),_t(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},F=(d,p,_,E=!1,S=!1,N=0)=>{for(let L=N;L<d.length;L++)bt(d[L],p,_,E,S)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),z=(d,p,_)=>{d==null?p._vnode&&bt(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,_),ud(),Cg(),p._vnode=d},de={p:w,um:bt,m:jt,r:Jr,mt:We,mc:G,pc:Te,pbc:oe,n:M,o:t};let Le,ae;return e&&([Le,ae]=e(de)),{render:z,hydrate:Le,createApp:u1(z,Le)}}function vr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hg(t,e,n=!1){const r=t.children,i=e.children;if(ee(r)&&ee(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Hn(i[s]),a.el=o.el),n||Hg(o,a)),a.type===gc&&(a.el=o.el)}}function d1(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const m1=t=>t.__isTeleport,ct=Symbol(void 0),gc=Symbol(void 0),Sn=Symbol(void 0),fl=Symbol(void 0),fs=[];let Pt=null;function be(t=!1){fs.push(Pt=t?null:[])}function Wg(){fs.pop(),Pt=fs[fs.length-1]||null}let ki=1;function wd(t){ki+=t}function zg(t){return t.dynamicChildren=ki>0?Pt||fi:null,Wg(),ki>0&&Pt&&Pt.push(t),t}function Fe(t,e,n,r,i,s){return zg(R(t,e,n,r,i,s,!0))}function Si(t,e,n,r,i){return zg(he(t,e,n,r,i,!0))}function Da(t){return t?t.__v_isVNode===!0:!1}function Kn(t,e){return t.type===e.type&&t.key===e.key}const vc="__vInternal",Kg=({key:t})=>t??null,ua=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ge(t)||Ue(t)||re(t)?{i:At,r:t,k:e,f:!!n}:t:null;function R(t,e=null,n=null,r=0,i=null,s=t===ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kg(e),ref:e&&ua(e),scopeId:Dg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:At};return a?(bf(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),ki>0&&!o&&Pt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Pt.push(c),c}const he=p1;function p1(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Q_)&&(t=Sn),Da(t)){const a=Ci(t,e,!0);return n&&bf(a,n),ki>0&&!s&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(C1(t)&&(t=t.__vccOpts),e){e=g1(e);let{class:a,style:c}=e;a&&!Ge(a)&&(e.class=ro(a)),Me(c)&&(vg(c)&&!ee(c)&&(c=yt({},c)),e.style=Xu(c))}const o=Ge(t)?1:R_(t)?128:m1(t)?64:Me(t)?4:re(t)?2:0;return R(t,e,n,r,i,o,s,!0)}function g1(t){return t?vg(t)||vc in t?yt({},t):t:null}function Ci(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?v1(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kg(a),ref:e&&e.ref?n&&i?ee(i)?i.concat(ua(e)):[i,ua(e)]:ua(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ci(t.ssContent),ssFallback:t.ssFallback&&Ci(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Jn(t=" ",e=0){return he(gc,null,t,e)}function fa(t="",e=!1){return e?(be(),Si(Sn,null,t)):he(Sn,null,t)}function Vt(t){return t==null||typeof t=="boolean"?he(Sn):ee(t)?he(ct,null,t.slice()):typeof t=="object"?Hn(t):he(gc,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ci(t)}function bf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),bf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(vc in e)?e._ctx=At:i===3&&At&&(At.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:At},n=32):(e=String(e),r&64?(n=16,e=[Jn(e)]):n=8);t.children=e,t.shapeFlag|=n}function v1(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ro([e.class,r.class]));else if(i==="style")e.style=Xu([e.style,r.style]);else if(lc(i)){const s=e[i],o=r[i];o&&s!==o&&!(ee(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function nn(t,e,n,r=null){Gt(t,e,7,[n,r])}const y1=qg();let b1=0;function w1(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||y1,s={uid:b1++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ig(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ug(r,i),emitsOptions:Og(r,i),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=S_.bind(null,s),t.ce&&t.ce(s),s}let Je=null;const _1=()=>Je||At,Ai=t=>{Je=t,t.scope.on()},xr=()=>{Je&&Je.scope.off(),Je=null};function Gg(t){return t.vnode.shapeFlag&4}let Ds=!1;function E1(t,e=!1){Ds=e;const{props:n,children:r}=t.vnode,i=Gg(t);i1(t,n,i,e),a1(t,r);const s=i?I1(t,e):void 0;return Ds=!1,s}function I1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ti(new Proxy(t.ctx,J_));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?k1(t):null;Ai(t),Bi();const s=er(r,t,0,[t.props,i]);if(Vi(),xr(),tg(s)){if(s.then(xr,xr),e)return s.then(o=>{Xl(t,o,e)}).catch(o=>{io(o,t,0)});t.asyncDep=s}else Xl(t,s,e)}else Yg(t,e)}function Xl(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=_g(e)),Yg(t,n)}let _d;function Yg(t,e,n){const r=t.type;if(!t.render){if(!e&&_d&&!r.render){const i=r.template||vf(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=yt(yt({isCustomElement:s,delimiters:a},o),c);r.render=_d(i,l)}}t.render=r.render||Kt}Ai(t),Bi(),Z_(t),Vi(),xr()}function T1(t){return new Proxy(t.attrs,{get(e,n){return Dt(t,"get","$attrs"),e[n]}})}function k1(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=T1(t))},slots:t.slots,emit:t.emit,expose:e}}function yc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_g(Ti(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in us)return us[n](t)},has(e,n){return n in e||n in us}}))}function S1(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function C1(t){return re(t)&&"__vccOpts"in t}const Re=(t,e)=>__(t,e,Ds);function bc(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ee(e)?Da(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Da(n)&&(n=[n]),he(t,e,n))}const A1=Symbol(""),O1=()=>Yt(A1),D1="3.2.45",R1="http://www.w3.org/2000/svg",Er=typeof document<"u"?document:null,Ed=Er&&Er.createElement("template"),x1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Er.createElementNS(R1,t):Er.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Er.createTextNode(t),createComment:t=>Er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Ed.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ed.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function N1(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function P1(t,e,n){const r=t.style,i=Ge(n);if(n&&!i){for(const s in n)Jl(r,s,n[s]);if(e&&!Ge(e))for(const s in e)n[s]==null&&Jl(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Id=/\s*!important$/;function Jl(t,e,n){if(ee(n))n.forEach(r=>Jl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=M1(t,e);Id.test(n)?t.setProperty(ji(r),n.replace(Id,""),"important"):t[r]=n}}const Td=["Webkit","Moz","ms"],hl={};function M1(t,e){const n=hl[e];if(n)return n;let r=gn(e);if(r!=="filter"&&r in t)return hl[e]=r;r=hc(r);for(let i=0;i<Td.length;i++){const s=Td[i]+r;if(s in t)return hl[e]=s}return e}const kd="http://www.w3.org/1999/xlink";function L1(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(kd,e.slice(6,e.length)):t.setAttributeNS(kd,e,n);else{const s=xw(e);n==null||s&&!Jp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function F1(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ri(t,e,n,r){t.addEventListener(e,n,r)}function $1(t,e,n,r){t.removeEventListener(e,n,r)}function U1(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=j1(e);if(r){const l=s[e]=q1(r,i);ri(t,a,l,c)}else o&&($1(t,a,o,c),s[e]=void 0)}}const Sd=/(?:Once|Passive|Capture)$/;function j1(t){let e;if(Sd.test(t)){e={};let r;for(;r=t.match(Sd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ji(t.slice(2)),e]}let dl=0;const B1=Promise.resolve(),V1=()=>dl||(B1.then(()=>dl=0),dl=Date.now());function q1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(H1(r,n.value),e,5,[r])};return n.value=t,n.attached=V1(),n}function H1(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Cd=/^on[a-z]/,W1=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?N1(t,r,i):e==="style"?P1(t,n,r):lc(e)?Ju(e)||U1(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z1(t,e,r,i))?F1(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),L1(t,e,r,i))};function z1(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Cd.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Cd.test(e)&&Ge(n)?!1:e in t}const Ad=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>aa(e,n):e};function K1(t){t.target.composing=!0}function Od(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ra={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Ad(i);const s=r||i.props&&i.props.type==="number";ri(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=ks(a)),t._assign(a)}),n&&ri(t,"change",()=>{t.value=t.value.trim()}),e||(ri(t,"compositionstart",K1),ri(t,"compositionend",Od),ri(t,"change",Od))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Ad(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&ks(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},G1=["ctrl","shift","alt","meta"],Y1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>G1.some(n=>t[`${n}Key`]&&!e.includes(n))},wf=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=Y1[e[i]];if(s&&s(n,e))return}return t(n,...r)},Q1=yt({patchProp:W1},x1);let Dd;function X1(){return Dd||(Dd=f1(Q1))}const J1=(...t)=>{const e=X1().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Z1(r);if(!i)return;const s=e._component;!re(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Z1(t){return Ge(t)?document.querySelector(t):t}var eE=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Qg;const wc=t=>Qg=t,Xg=Symbol();function Zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hs||(hs={}));function tE(){const t=sg(!0),e=t.run(()=>fe({}));let n=[],r=[];const i=Ti({install(s){wc(i),i._a=s,s.provide(Xg,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!eE?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Jg=()=>{};function Rd(t,e,n,r=Jg){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Bw()&&Vw(i),i}function ei(t,...e){t.slice().forEach(n=>{n(...e)})}function eu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Zl(i)&&Zl(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!Tn(r)?t[n]=eu(i,r):t[n]=r}return t}const nE=Symbol();function rE(t){return!Zl(t)||!t.hasOwnProperty(nE)}const{assign:Wn}=Object;function iE(t){return!!(Ue(t)&&t.effect)}function sE(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=y_(n.state.value[t]);return Wn(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Ti(Re(()=>{wc(n);const m=n._s.get(t);return o[h].call(m,m)})),f),{}))}return c=Zg(t,l,e,n,r,!0),c.$reset=function(){const f=i?i():{};this.$patch(h=>{Wn(h,f)})},c}function Zg(t,e,n={},r,i,s){let o;const a=Wn({actions:{}},n),c={deep:!0};let l,u,f=Ti([]),h=Ti([]),m;const v=r.state.value[t];!s&&!v&&(r.state.value[t]={}),fe({});let w;function I(U){let G;l=u=!1,typeof U=="function"?(U(r.state.value[t]),G={type:hs.patchFunction,storeId:t,events:m}):(eu(r.state.value[t],U),G={type:hs.patchObject,payload:U,storeId:t,events:m});const se=w=Symbol();ff().then(()=>{w===se&&(l=!0)}),u=!0,ei(f,G,r.state.value[t])}const y=Jg;function g(){o.stop(),f=[],h=[],r._s.delete(t)}function b(U,G){return function(){wc(r);const se=Array.from(arguments),oe=[],Se=[];function rt(pe){oe.push(pe)}function kt(pe){Se.push(pe)}ei(h,{args:se,name:U,store:O,after:rt,onError:kt});let We;try{We=G.apply(this&&this.$id===t?this:O,se)}catch(pe){throw ei(Se,pe),pe}return We instanceof Promise?We.then(pe=>(ei(oe,pe),pe)).catch(pe=>(ei(Se,pe),Promise.reject(pe))):(ei(oe,We),We)}}const x={_p:r,$id:t,$onAction:Rd.bind(null,h),$patch:I,$reset:y,$subscribe(U,G={}){const se=Rd(f,U,G.detached,()=>oe()),oe=o.run(()=>Rr(()=>r.state.value[t],Se=>{(G.flush==="sync"?u:l)&&U({storeId:t,type:hs.direct,events:m},Se)},Wn({},c,G)));return se},$dispose:g},O=qi(x);r._s.set(t,O);const B=r._e.run(()=>(o=sg(),o.run(()=>e())));for(const U in B){const G=B[U];if(Ue(G)&&!iE(G)||Tn(G))s||(v&&rE(G)&&(Ue(G)?G.value=v[U]:eu(G,v[U])),r.state.value[t][U]=G);else if(typeof G=="function"){const se=b(U,G);B[U]=se,a.actions[U]=G}}return Wn(O,B),Wn(ge(O),B),Object.defineProperty(O,"$state",{get:()=>r.state.value[t],set:U=>{I(G=>{Wn(G,U)})}}),r._p.forEach(U=>{Wn(O,o.run(()=>U({store:O,app:r._a,pinia:r,options:a})))}),v&&s&&n.hydrate&&n.hydrate(O.$state,v),l=!0,u=!0,O}function oE(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const l=_1();return a=a||l&&Yt(Xg,null),a&&wc(a),a=Qg,a._s.has(r)||(s?Zg(r,e,i,a):sE(r,i,a)),a._s.get(r)}return o.$id=r,o}function aE(t){{t=ge(t);const e={};for(const n in t){const r=t[n];(Ue(r)||Tn(r))&&(e[n]=Eg(t,n))}return e}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ii=typeof window<"u";function cE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function ml(t,e){const n={};for(const r in e){const i=e[r];n[r]=Qt(i)?i.map(t):t(i)}return n}const ds=()=>{},Qt=Array.isArray,lE=/\/$/,uE=t=>t.replace(lE,"");function pl(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=mE(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function fE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hE(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Oi(e.matched[r],n.matched[i])&&ev(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Oi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ev(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dE(t[n],e[n]))return!1;return!0}function dE(t,e){return Qt(t)?Nd(t,e):Qt(e)?Nd(e,t):t===e}function Nd(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Rs;(function(t){t.pop="pop",t.push="push"})(Rs||(Rs={}));var ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ms||(ms={}));function pE(t){if(!t)if(ii){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uE(t)}const gE=/^[^#]+#/;function vE(t,e){return t.replace(gE,"#")+e}function yE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _c=()=>({left:window.pageXOffset,top:window.pageYOffset});function bE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=yE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pd(t,e){return(history.state?history.state.position-e:-1)+t}const tu=new Map;function wE(t,e){tu.set(t,e)}function _E(t){const e=tu.get(t);return tu.delete(t),e}let EE=()=>location.protocol+"//"+location.host;function tv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),xd(c,"")}return xd(n,t)+r+i}function IE(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const m=tv(t,location),v=n.value,w=e.value;let I=0;if(h){if(n.value=m,e.value=h,o&&o===v){o=null;return}I=w?h.position-w.position:0}else r(m);i.forEach(y=>{y(n.value,v,{delta:I,type:Rs.pop,direction:I?I>0?ms.forward:ms.back:ms.unknown})})};function c(){o=n.value}function l(h){i.push(h);const m=()=>{const v=i.indexOf(h);v>-1&&i.splice(v,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Ie({},h.state,{scroll:_c()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Md(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?_c():null}}function TE(t){const{history:e,location:n}=window,r={value:tv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:EE()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=Ie({},e.state,Md(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Ie({},i.value,e.state,{forward:c,scroll:_c()});s(u.current,u,!0);const f=Ie({},Md(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function kE(t){t=pE(t);const e=TE(t),n=IE(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Ie({location:"",base:t,go:r,createHref:vE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function SE(t){return typeof t=="string"||t&&typeof t=="object"}function nv(t){return typeof t=="string"||typeof t=="symbol"}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rv=Symbol("");var Ld;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ld||(Ld={}));function Di(t,e){return Ie(new Error,{type:t,[rv]:!0},e)}function bn(t,e){return t instanceof Error&&rv in t&&(e==null||!!(t.type&e))}const Fd="[^/]+?",CE={sensitive:!1,strict:!1,start:!0,end:!0},AE=/[.+*?^${}()[\]/\\]/g;function OE(t,e){const n=Ie({},CE,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(AE,"\\$&"),m+=40;else if(h.type===1){const{value:v,repeatable:w,optional:I,regexp:y}=h;s.push({name:v,repeatable:w,optional:I});const g=y||Fd;if(g!==Fd){m+=10;try{new RegExp(`(${g})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${v}" (${g}): `+x.message)}}let b=w?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;f||(b=I&&l.length<2?`(?:/${b})`:"/"+b),I&&(b+="?"),i+=b,m+=20,I&&(m+=-8),w&&(m+=-20),g===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",v=s[h-1];f[v.name]=m&&v.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:w,optional:I}=m,y=v in l?l[v]:"";if(Qt(y)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const g=Qt(y)?y.join("/"):y;if(!g)if(I)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function DE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function RE(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=DE(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if($d(r))return 1;if($d(i))return-1}return i.length-r.length}function $d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xE={type:0,value:""},NE=/[a-zA-Z0-9_]/;function PE(t){if(!t)return[[]];if(t==="/")return[[xE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:NE.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function ME(t,e,n){const r=OE(PE(t.path),n),i=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function LE(t,e){const n=[],r=new Map;e=Bd({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,h){const m=!h,v=FE(u);v.aliasOf=h&&h.record;const w=Bd(e,u),I=[v];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of b)I.push(Ie({},v,{components:h?h.record.components:v.components,path:x,aliasOf:h?h.record:v}))}let y,g;for(const b of I){const{path:x}=b;if(f&&x[0]!=="/"){const O=f.record.path,B=O[O.length-1]==="/"?"":"/";b.path=f.record.path+(x&&B+x)}if(y=ME(b,f,w),h?h.alias.push(y):(g=g||y,g!==y&&g.alias.push(y),m&&u.name&&!jd(y)&&o(u.name)),v.children){const O=v.children;for(let B=0;B<O.length;B++)s(O[B],y,h&&h.children[B])}h=h||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return g?()=>{o(g)}:ds}function o(u){if(nv(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&RE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!iv(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!jd(u)&&r.set(u.record.name,u)}function l(u,f){let h,m={},v,w;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Di(1,{location:u});w=h.record.name,m=Ie(Ud(f.params,h.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&Ud(u.params,h.keys.map(g=>g.name))),v=h.stringify(m)}else if("path"in u)v=u.path,h=n.find(g=>g.re.test(v)),h&&(m=h.parse(v),w=h.record.name);else{if(h=f.name?r.get(f.name):n.find(g=>g.re.test(f.path)),!h)throw Di(1,{location:u,currentLocation:f});w=h.record.name,m=Ie({},f.params,u.params),v=h.stringify(m)}const I=[];let y=h;for(;y;)I.unshift(y.record),y=y.parent;return{name:w,path:v,params:m,matched:I,meta:UE(I)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ud(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function FE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$E(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $E(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function jd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function UE(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Bd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function iv(t,e){return e.children.some(n=>n===t||iv(t,n))}const sv=/#/g,jE=/&/g,BE=/\//g,VE=/=/g,qE=/\?/g,ov=/\+/g,HE=/%5B/g,WE=/%5D/g,av=/%5E/g,zE=/%60/g,cv=/%7B/g,KE=/%7C/g,lv=/%7D/g,GE=/%20/g;function _f(t){return encodeURI(""+t).replace(KE,"|").replace(HE,"[").replace(WE,"]")}function YE(t){return _f(t).replace(cv,"{").replace(lv,"}").replace(av,"^")}function nu(t){return _f(t).replace(ov,"%2B").replace(GE,"+").replace(sv,"%23").replace(jE,"%26").replace(zE,"`").replace(cv,"{").replace(lv,"}").replace(av,"^")}function QE(t){return nu(t).replace(VE,"%3D")}function XE(t){return _f(t).replace(sv,"%23").replace(qE,"%3F")}function JE(t){return t==null?"":XE(t).replace(BE,"%2F")}function xa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ZE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(ov," "),o=s.indexOf("="),a=xa(o<0?s:s.slice(0,o)),c=o<0?null:xa(s.slice(o+1));if(a in e){let l=e[a];Qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Vd(t){let e="";for(let n in t){const r=t[n];if(n=QE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(s=>s&&nu(s)):[r&&nu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function eI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const tI=Symbol(""),qd=Symbol(""),Ec=Symbol(""),uv=Symbol(""),ru=Symbol("");function ts(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function zn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Di(4,{from:n,to:e})):f instanceof Error?a(f):SE(f)?a(Di(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function gl(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(nI(a)){const l=(a.__vccOpts||a)[e];l&&i.push(zn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=cE(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&zn(h,n,r,s,o)()}))}}return i}function nI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hd(t){const e=Yt(Ec),n=Yt(uv),r=Re(()=>e.resolve(di(t.to))),i=Re(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Oi.bind(null,u));if(h>-1)return h;const m=Wd(c[l-2]);return l>1&&Wd(u)===m&&f[f.length-1].path!==m?f.findIndex(Oi.bind(null,c[l-2])):h}),s=Re(()=>i.value>-1&&oI(n.params,r.value.params)),o=Re(()=>i.value>-1&&i.value===n.matched.length-1&&ev(n.params,r.value.params));function a(c={}){return sI(c)?e[di(t.replace)?"replace":"push"](di(t.to)).catch(ds):Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const rI=tt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hd,setup(t,{slots:e}){const n=qi(Hd(t)),{options:r}=Yt(Ec),i=Re(()=>({[zd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),iI=rI;function sI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oI(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Qt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Wd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zd=(t,e,n)=>t??e??n,aI=tt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(ru),i=Re(()=>t.route||r.value),s=Yt(qd,0),o=Re(()=>{let l=di(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Re(()=>i.value.matched[o.value]);ca(qd,Re(()=>o.value+1)),ca(tI,a),ca(ru,i);const c=fe();return Rr(()=>[c.value,a.value,t.name],([l,u,f],[h,m,v])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Oi(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Kd(n.default,{Component:h,route:l});const m=f.props[u],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,I=bc(h,Ie({},v,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Kd(n.default,{Component:I,route:l})||I}}});function Kd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cI=aI;function lI(t){const e=LE(t.routes,t),n=t.parseQuery||ZE,r=t.stringifyQuery||Vd,i=t.history,s=ts(),o=ts(),a=ts(),c=p_(Un);let l=Un;ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,k=>""+k),f=ml.bind(null,JE),h=ml.bind(null,xa);function m(k,F){let M,z;return nv(k)?(M=e.getRecordMatcher(k),z=F):z=k,e.addRoute(z,M)}function v(k){const F=e.getRecordMatcher(k);F&&e.removeRoute(F)}function w(){return e.getRoutes().map(k=>k.record)}function I(k){return!!e.getRecordMatcher(k)}function y(k,F){if(F=Ie({},F||c.value),typeof k=="string"){const d=pl(n,k,F.path),p=e.resolve({path:d.path},F),_=i.createHref(d.fullPath);return Ie(d,p,{params:h(p.params),hash:xa(d.hash),redirectedFrom:void 0,href:_})}let M;if("path"in k)M=Ie({},k,{path:pl(n,k.path,F.path).path});else{const d=Ie({},k.params);for(const p in d)d[p]==null&&delete d[p];M=Ie({},k,{params:f(k.params)}),F.params=f(F.params)}const z=e.resolve(M,F),de=k.hash||"";z.params=u(h(z.params));const Le=fE(r,Ie({},k,{hash:YE(de),path:z.path})),ae=i.createHref(Le);return Ie({fullPath:Le,hash:de,query:r===Vd?eI(k.query):k.query||{}},z,{redirectedFrom:void 0,href:ae})}function g(k){return typeof k=="string"?pl(n,k,c.value.path):Ie({},k)}function b(k,F){if(l!==k)return Di(8,{from:F,to:k})}function x(k){return U(k)}function O(k){return x(Ie(g(k),{replace:!0}))}function B(k){const F=k.matched[k.matched.length-1];if(F&&F.redirect){const{redirect:M}=F;let z=typeof M=="function"?M(k):M;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=g(z):{path:z},z.params={}),Ie({query:k.query,hash:k.hash,params:"path"in z?{}:k.params},z)}}function U(k,F){const M=l=y(k),z=c.value,de=k.state,Le=k.force,ae=k.replace===!0,d=B(M);if(d)return U(Ie(g(d),{state:typeof d=="object"?Ie({},de,d.state):de,force:Le,replace:ae}),F||M);const p=M;p.redirectedFrom=F;let _;return!Le&&hE(r,z,M)&&(_=Di(16,{to:p,from:z}),pr(z,z,!0,!1)),(_?Promise.resolve(_):se(p,z)).catch(E=>bn(E)?bn(E,2)?E:Ut(E):ve(E,p,z)).then(E=>{if(E){if(bn(E,2))return U(Ie({replace:ae},g(E.to),{state:typeof E.to=="object"?Ie({},de,E.to.state):de,force:Le}),F||p)}else E=Se(p,z,!0,ae,de);return oe(p,z,E),E})}function G(k,F){const M=b(k,F);return M?Promise.reject(M):Promise.resolve()}function se(k,F){let M;const[z,de,Le]=uI(k,F);M=gl(z.reverse(),"beforeRouteLeave",k,F);for(const d of z)d.leaveGuards.forEach(p=>{M.push(zn(p,k,F))});const ae=G.bind(null,k,F);return M.push(ae),ti(M).then(()=>{M=[];for(const d of s.list())M.push(zn(d,k,F));return M.push(ae),ti(M)}).then(()=>{M=gl(de,"beforeRouteUpdate",k,F);for(const d of de)d.updateGuards.forEach(p=>{M.push(zn(p,k,F))});return M.push(ae),ti(M)}).then(()=>{M=[];for(const d of k.matched)if(d.beforeEnter&&!F.matched.includes(d))if(Qt(d.beforeEnter))for(const p of d.beforeEnter)M.push(zn(p,k,F));else M.push(zn(d.beforeEnter,k,F));return M.push(ae),ti(M)}).then(()=>(k.matched.forEach(d=>d.enterCallbacks={}),M=gl(Le,"beforeRouteEnter",k,F),M.push(ae),ti(M))).then(()=>{M=[];for(const d of o.list())M.push(zn(d,k,F));return M.push(ae),ti(M)}).catch(d=>bn(d,8)?d:Promise.reject(d))}function oe(k,F,M){for(const z of a.list())z(k,F,M)}function Se(k,F,M,z,de){const Le=b(k,F);if(Le)return Le;const ae=F===Un,d=ii?history.state:{};M&&(z||ae?i.replace(k.fullPath,Ie({scroll:ae&&d&&d.scroll},de)):i.push(k.fullPath,de)),c.value=k,pr(k,F,M,ae),Ut()}let rt;function kt(){rt||(rt=i.listen((k,F,M)=>{if(!Lo.listening)return;const z=y(k),de=B(z);if(de){U(Ie(de,{replace:!0}),z).catch(ds);return}l=z;const Le=c.value;ii&&wE(Pd(Le.fullPath,M.delta),_c()),se(z,Le).catch(ae=>bn(ae,12)?ae:bn(ae,2)?(U(ae.to,z).then(d=>{bn(d,20)&&!M.delta&&M.type===Rs.pop&&i.go(-1,!1)}).catch(ds),Promise.reject()):(M.delta&&i.go(-M.delta,!1),ve(ae,z,Le))).then(ae=>{ae=ae||Se(z,Le,!1),ae&&(M.delta&&!bn(ae,8)?i.go(-M.delta,!1):M.type===Rs.pop&&bn(ae,20)&&i.go(-1,!1)),oe(z,Le,ae)}).catch(ds)}))}let We=ts(),pe=ts(),_e;function ve(k,F,M){Ut(k);const z=pe.list();return z.length?z.forEach(de=>de(k,F,M)):console.error(k),Promise.reject(k)}function Te(){return _e&&c.value!==Un?Promise.resolve():new Promise((k,F)=>{We.add([k,F])})}function Ut(k){return _e||(_e=!k,kt(),We.list().forEach(([F,M])=>k?M(k):F()),We.reset()),k}function pr(k,F,M,z){const{scrollBehavior:de}=t;if(!ii||!de)return Promise.resolve();const Le=!M&&_E(Pd(k.fullPath,0))||(z||!M)&&history.state&&history.state.scroll||null;return ff().then(()=>de(k,F,Le)).then(ae=>ae&&bE(ae)).catch(ae=>ve(ae,k,F))}const jt=k=>i.go(k);let bt;const Jr=new Set,Lo={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,hasRoute:I,getRoutes:w,resolve:y,options:t,push:x,replace:O,go:jt,back:()=>jt(-1),forward:()=>jt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:Te,install(k){const F=this;k.component("RouterLink",iI),k.component("RouterView",cI),k.config.globalProperties.$router=F,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>di(c)}),ii&&!bt&&c.value===Un&&(bt=!0,x(i.location).catch(de=>{}));const M={};for(const de in Un)M[de]=Re(()=>c.value[de]);k.provide(Ec,F),k.provide(uv,qi(M)),k.provide(ru,c);const z=k.unmount;Jr.add(k),k.unmount=function(){Jr.delete(k),Jr.size<1&&(l=Un,rt&&rt(),rt=null,c.value=Un,bt=!1,_e=!1),z()}}};return Lo}function ti(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uI(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Oi(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Oi(l,c))||i.push(c))}return[n,r,i]}function Hi(){return Yt(Ec)}const Wi=oE("user",{state:()=>({editObject:[],dateString:[],timeObj:[]}),getters:{BookingObject(t){return t.editObject},DateString(t){return t.dateString},TimeObj(t){return t.timeObj}},actions:{addBookingObj(t){this.editObject=t},addTimeObj(t){this.dateString=t},addDateString(t){this.timeObj=t}}}),fI=tt({name:"Menu-item",setup(){const t=Hi(),e=Wi(),n=fe(!1);function r(){sessionStorage.clear(),t.push({path:"/login"})}return{showMenu:n,SignOut:r,userStore:e}}}),$t=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},hI={key:0,class:"menu-container"},dI=R("div",{class:"menu-fill"},null,-1),mI={class:"menu-items-list"},pI=R("span",{class:"h-px w-full bg-white opacity-30"},null,-1),gI=R("label",{class:"menu-item-s flex justify-center items-center"},[Jn("Notiser "),R("input",{class:"w-12 h-5",type:"checkbox"})],-1),vI=R("div",{class:"menu-item-s"},"English",-1),yI={class:"btn-container"},bI=R("div",{class:"btn-empty-lg"},null,-1);function wI(t,e,n,r,i,s){const o=It("font-awesome-icon"),a=It("RouterLink");return be(),Fe(ct,null,[he(o,{style:{color:"currentColor","font-size":"2rem"},class:"absolute right-6 top-6",icon:"fa-solid fa-bars ",onClick:e[0]||(e[0]=c=>(t.showMenu=!0,t.userStore.$reset()))}),t.showMenu?(be(),Fe("div",hI,[dI,he(o,{style:{color:"white","font-size":"2rem"},class:"absolute right-6 top-6",icon:"fa-solid fa-xmark",onClick:e[1]||(e[1]=c=>t.showMenu=!1)}),R("div",mI,[he(a,{class:"menu-item-lg",onClick:e[2]||(e[2]=c=>t.showMenu=!1),to:"/home"},{default:Wt(()=>[Jn("Boka tvättid")]),_:1}),he(a,{class:"menu-item-lg",onClick:e[3]||(e[3]=c=>t.showMenu=!1),to:"/user"},{default:Wt(()=>[Jn("Min sida")]),_:1}),he(a,{class:"menu-item-lg",onClick:e[4]||(e[4]=c=>t.showMenu=!1),to:"/home"},{default:Wt(()=>[Jn("Upphittat")]),_:1}),he(a,{class:"menu-item-lg",onClick:e[5]||(e[5]=c=>t.showMenu=!1),to:"/home"},{default:Wt(()=>[Jn("Felanmälan")]),_:1}),pI,gI,vI]),R("div",yI,[R("input",{type:"button",class:"btn-primary-lg",onClick:e[6]||(e[6]=c=>t.SignOut()),value:"Logga ut"}),bI])])):fa("",!0)],64)}const Ef=$t(fI,[["render",wI]]),_I=tt({name:"vue-app",components:{Menu:Ef},setup(){return{}}});function EI(t,e,n,r,i,s){const o=It("RouterView");return be(),Si(o)}const II=$t(_I,[["render",EI]]);function Cn(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function nt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ha(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ha=function(n){return typeof n}:ha=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ha(t)}function xt(t){nt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||ha(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function qn(t,e){nt(2,arguments);var n=xt(t),r=Cn(e);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}function TI(t,e){nt(2,arguments);var n=xt(t).getTime(),r=Cn(e);return new Date(n+r)}var kI={};function so(){return kI}function Gd(t,e){var n,r,i,s,o,a,c,l;nt(1,arguments);var u=so(),f=Cn((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:u.weekStartsOn)!==null&&r!==void 0?r:(c=u.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=xt(t),m=h.getDay(),v=(m<f?7:0)+m-f;return h.setDate(h.getDate()-v),h.setHours(0,0,0,0),h}function SI(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function da(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?da=function(n){return typeof n}:da=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},da(t)}function CI(t){return nt(1,arguments),t instanceof Date||da(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function AI(t){if(nt(1,arguments),!CI(t)&&typeof t!="number")return!1;var e=xt(t);return!isNaN(Number(e))}function OI(t,e){nt(2,arguments);var n=Cn(e);return TI(t,-n)}var DI=864e5;function RI(t){nt(1,arguments);var e=xt(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/DI)+1}function Na(t){nt(1,arguments);var e=1,n=xt(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function fv(t){nt(1,arguments);var e=xt(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Na(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=Na(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function xI(t){nt(1,arguments);var e=fv(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Na(n);return r}var NI=6048e5;function PI(t){nt(1,arguments);var e=xt(t),n=Na(e).getTime()-xI(e).getTime();return Math.round(n/NI)+1}function Pa(t,e){var n,r,i,s,o,a,c,l;nt(1,arguments);var u=so(),f=Cn((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:u.weekStartsOn)!==null&&r!==void 0?r:(c=u.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=xt(t),m=h.getUTCDay(),v=(m<f?7:0)+m-f;return h.setUTCDate(h.getUTCDate()-v),h.setUTCHours(0,0,0,0),h}function hv(t,e){var n,r,i,s,o,a,c,l;nt(1,arguments);var u=xt(t),f=u.getUTCFullYear(),h=so(),m=Cn((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(c=h.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(f+1,0,m),v.setUTCHours(0,0,0,0);var w=Pa(v,e),I=new Date(0);I.setUTCFullYear(f,0,m),I.setUTCHours(0,0,0,0);var y=Pa(I,e);return u.getTime()>=w.getTime()?f+1:u.getTime()>=y.getTime()?f:f-1}function MI(t,e){var n,r,i,s,o,a,c,l;nt(1,arguments);var u=so(),f=Cn((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&r!==void 0?r:(c=u.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:1),h=hv(t,e),m=new Date(0);m.setUTCFullYear(h,0,f),m.setUTCHours(0,0,0,0);var v=Pa(m,e);return v}var LI=6048e5;function FI(t,e){nt(1,arguments);var n=xt(t),r=Pa(n,e).getTime()-MI(n,e).getTime();return Math.round(r/LI)+1}function Ee(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var $I={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Ee(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Ee(r+1,2)},d:function(e,n){return Ee(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Ee(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Ee(e.getUTCHours(),n.length)},m:function(e,n){return Ee(e.getUTCMinutes(),n.length)},s:function(e,n){return Ee(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,r-3));return Ee(s,n.length)}};const jn=$I;var ni={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},UI={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return jn.y(e,n)},Y:function(e,n,r,i){var s=hv(e,i),o=s>0?s:1-s;if(n==="YY"){var a=o%100;return Ee(a,2)}return n==="Yo"?r.ordinalNumber(o,{unit:"year"}):Ee(o,n.length)},R:function(e,n){var r=fv(e);return Ee(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Ee(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Ee(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Ee(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return jn.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Ee(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var s=FI(e,i);return n==="wo"?r.ordinalNumber(s,{unit:"week"}):Ee(s,n.length)},I:function(e,n,r){var i=PI(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Ee(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):jn.d(e,n)},D:function(e,n,r){var i=RI(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Ee(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return Ee(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return Ee(o,n.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),s=i===0?7:i;switch(n){case"i":return String(s);case"ii":return Ee(s,n.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),s=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),s;switch(i===12?s=ni.noon:i===0?s=ni.midnight:s=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),s;switch(i>=17?s=ni.evening:i>=12?s=ni.afternoon:i>=4?s=ni.morning:s=ni.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return jn.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):jn.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Ee(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Ee(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):jn.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):jn.s(e,n)},S:function(e,n){return jn.S(e,n)},X:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return Qd(o);case"XXXX":case"XX":return br(o);case"XXXXX":case"XXX":default:return br(o,":")}},x:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"x":return Qd(o);case"xxxx":case"xx":return br(o);case"xxxxx":case"xxx":default:return br(o,":")}},O:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Yd(o,":");case"OOOO":default:return"GMT"+br(o,":")}},z:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Yd(o,":");case"zzzz":default:return"GMT"+br(o,":")}},t:function(e,n,r,i){var s=i._originalDate||e,o=Math.floor(s.getTime()/1e3);return Ee(o,n.length)},T:function(e,n,r,i){var s=i._originalDate||e,o=s.getTime();return Ee(o,n.length)}};function Yd(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(s===0)return n+String(i);var o=e||"";return n+String(i)+o+Ee(s,2)}function Qd(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Ee(Math.abs(t)/60,2)}return br(t,e)}function br(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),s=Ee(Math.floor(i/60),2),o=Ee(i%60,2);return r+s+n+o}const jI=UI;var Xd=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},dv=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},BI=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Xd(e,n);var o;switch(i){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",Xd(i,n)).replace("{{time}}",dv(s,n))},VI={p:dv,P:BI};const qI=VI;var HI=["D","DD"],WI=["YY","YYYY"];function zI(t){return HI.indexOf(t)!==-1}function KI(t){return WI.indexOf(t)!==-1}function Jd(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var GI={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},YI=function(e,n,r){var i,s=GI[e];return typeof s=="string"?i=s:n===1?i=s.one:i=s.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const QI=YI;function gi(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var XI={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},JI={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ZI={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},eT={date:gi({formats:XI,defaultWidth:"full"}),time:gi({formats:JI,defaultWidth:"full"}),dateTime:gi({formats:ZI,defaultWidth:"full"})};const tT=eT;var nT={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},rT=function(e,n,r,i){return nT[e]};const iT=rT;function an(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):s;i=t.formattingValues[o]||t.formattingValues[s]}else{var a=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[c]||t.values[a]}var l=t.argumentCallback?t.argumentCallback(e):e;return i[l]}}var sT={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},oT={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},aT={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},cT={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},lT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},uT={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},fT=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},hT={ordinalNumber:fT,era:an({values:sT,defaultWidth:"wide"}),quarter:an({values:oT,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:an({values:aT,defaultWidth:"wide"}),day:an({values:cT,defaultWidth:"wide"}),dayPeriod:an({values:lT,defaultWidth:"wide",formattingValues:uT,defaultFormattingWidth:"wide"})};const dT=hT;function cn(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(a)?pT(a,function(f){return f.test(o)}):mT(a,function(f){return f.test(o)}),l;l=t.valueCallback?t.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;var u=e.slice(o.length);return{value:l,rest:u}}}function mT(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function pT(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function mv(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var gT=/^(\d+)(th|st|nd|rd)?/i,vT=/\d+/i,yT={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},bT={any:[/^b/i,/^(a|c)/i]},wT={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},_T={any:[/1/i,/2/i,/3/i,/4/i]},ET={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},IT={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},TT={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},kT={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ST={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},CT={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},AT={ordinalNumber:mv({matchPattern:gT,parsePattern:vT,valueCallback:function(e){return parseInt(e,10)}}),era:cn({matchPatterns:yT,defaultMatchWidth:"wide",parsePatterns:bT,defaultParseWidth:"any"}),quarter:cn({matchPatterns:wT,defaultMatchWidth:"wide",parsePatterns:_T,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:cn({matchPatterns:ET,defaultMatchWidth:"wide",parsePatterns:IT,defaultParseWidth:"any"}),day:cn({matchPatterns:TT,defaultMatchWidth:"wide",parsePatterns:kT,defaultParseWidth:"any"}),dayPeriod:cn({matchPatterns:ST,defaultMatchWidth:"any",parsePatterns:CT,defaultParseWidth:"any"})};const OT=AT;var DT={code:"en-US",formatDistance:QI,formatLong:tT,formatRelative:iT,localize:dT,match:OT,options:{weekStartsOn:0,firstWeekContainsDate:1}};const RT=DT;var xT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,NT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,PT=/^'([^]*?)'?$/,MT=/''/g,LT=/[a-zA-Z]/;function rn(t,e,n){var r,i,s,o,a,c,l,u,f,h,m,v,w,I,y,g,b,x;nt(2,arguments);var O=String(e),B=so(),U=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:B.locale)!==null&&r!==void 0?r:RT,G=Cn((s=(o=(a=(c=n==null?void 0:n.firstWeekContainsDate)!==null&&c!==void 0?c:n==null||(l=n.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:B.firstWeekContainsDate)!==null&&o!==void 0?o:(f=B.locale)===null||f===void 0||(h=f.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(G>=1&&G<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var se=Cn((m=(v=(w=(I=n==null?void 0:n.weekStartsOn)!==null&&I!==void 0?I:n==null||(y=n.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.weekStartsOn)!==null&&w!==void 0?w:B.weekStartsOn)!==null&&v!==void 0?v:(b=B.locale)===null||b===void 0||(x=b.options)===null||x===void 0?void 0:x.weekStartsOn)!==null&&m!==void 0?m:0);if(!(se>=0&&se<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var oe=xt(t);if(!AI(oe))throw new RangeError("Invalid time value");var Se=SI(oe),rt=OI(oe,Se),kt={firstWeekContainsDate:G,weekStartsOn:se,locale:U,_originalDate:oe},We=O.match(NT).map(function(pe){var _e=pe[0];if(_e==="p"||_e==="P"){var ve=qI[_e];return ve(pe,U.formatLong)}return pe}).join("").match(xT).map(function(pe){if(pe==="''")return"'";var _e=pe[0];if(_e==="'")return FT(pe);var ve=jI[_e];if(ve)return!(n!=null&&n.useAdditionalWeekYearTokens)&&KI(pe)&&Jd(pe,e,String(t)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&zI(pe)&&Jd(pe,e,String(t)),ve(rt,pe,U.localize,kt);if(_e.match(LT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_e+"`");return pe}).join("");return We}function FT(t){var e=t.match(PT);return e?e[1].replace(MT,"'"):t}function pv(t){nt(1,arguments);var e=xt(t),n=e.getFullYear(),r=e.getMonth(),i=new Date(0);return i.setFullYear(n,r+1,0),i.setHours(0,0,0,0),i.getDate()}let $T=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw Error();const h=s<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jT=function(t){const e=gv(t);return vv.encodeByteArray(e,!0)},Ma=function(t){return jT(t).replace(/\./g,"")},yv=function(t){try{return vv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function bv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qT(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wv(){try{return typeof indexedDB=="object"}catch{return!1}}function _v(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function HT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function WT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=()=>WT().__FIREBASE_DEFAULTS__,KT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yv(t[1]);return e&&JSON.parse(e)},If=()=>{try{return zT()||KT()||GT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ev=t=>{var e,n;return(n=(e=If())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YT=t=>{const e=Ev(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},QT=()=>{var t;return(t=If())===null||t===void 0?void 0:t.config},Iv=t=>{var e;return(e=If())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="FirebaseError";class en extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZT,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ek(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new en(i,a,r)}}function ek(t,e){return t.replace(tk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tk=/\{\$([^}]+)}/g;function nk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zd(s)&&Zd(o)){if(!xs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rk(t,e){const n=new ik(t,e);return n.subscribe.bind(n)}class ik{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vl),i.error===void 0&&(i.error=vl),i.complete===void 0&&(i.complete=vl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=1e3,ak=2,ck=4*60*60*1e3,lk=.5;function em(t,e=ok,n=ak){const r=e*Math.pow(n,t),i=Math.round(lk*r*(Math.random()-.5)*2);return Math.min(ck,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hk(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fk(t){return t===wr?void 0:t}function hk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const mk={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},pk=ye.INFO,gk={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},vk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=pk,this._logHandler=vk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const yk=(t,e)=>e.some(n=>t instanceof n);let tm,nm;function bk(){return tm||(tm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wk(){return nm||(nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tv=new WeakMap,iu=new WeakMap,kv=new WeakMap,yl=new WeakMap,Tf=new WeakMap;function _k(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tv.set(n,t)}).catch(()=>{}),Tf.set(e,t),e}function Ek(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ik(t){su=t(su)}function Tk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bl(this),e,...n);return kv.set(r,e.sort?e.sort():[e]),tr(r)}:wk().includes(t)?function(...e){return t.apply(bl(this),e),tr(Tv.get(this))}:function(...e){return tr(t.apply(bl(this),e))}}function kk(t){return typeof t=="function"?Tk(t):(t instanceof IDBTransaction&&Ek(t),yk(t,bk())?new Proxy(t,su):t)}function tr(t){if(t instanceof IDBRequest)return _k(t);if(yl.has(t))return yl.get(t);const e=kk(t);return e!==t&&(yl.set(t,e),Tf.set(e,t)),e}const bl=t=>Tf.get(t);function Sv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(tr(o.result),c.oldVersion,c.newVersion,tr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Sk=["get","getKey","getAll","getAllKeys","count"],Ck=["put","add","delete","clear"],wl=new Map;function rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ck.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sk.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return wl.set(e,s),s}Ik(t=>({...t,get:(e,n,r)=>rm(e,n)||t.get(e,n,r),has:(e,n)=>!!rm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ok(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ou="@firebase/app",im="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Ic("@firebase/app"),Dk="@firebase/app-compat",Rk="@firebase/analytics-compat",xk="@firebase/analytics",Nk="@firebase/app-check-compat",Pk="@firebase/app-check",Mk="@firebase/auth",Lk="@firebase/auth-compat",Fk="@firebase/database",$k="@firebase/database-compat",Uk="@firebase/functions",jk="@firebase/functions-compat",Bk="@firebase/installations",Vk="@firebase/installations-compat",qk="@firebase/messaging",Hk="@firebase/messaging-compat",Wk="@firebase/performance",zk="@firebase/performance-compat",Kk="@firebase/remote-config",Gk="@firebase/remote-config-compat",Yk="@firebase/storage",Qk="@firebase/storage-compat",Xk="@firebase/firestore",Jk="@firebase/firestore-compat",Zk="firebase",eS="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="[DEFAULT]",tS={[ou]:"fire-core",[Dk]:"fire-core-compat",[xk]:"fire-analytics",[Rk]:"fire-analytics-compat",[Pk]:"fire-app-check",[Nk]:"fire-app-check-compat",[Mk]:"fire-auth",[Lk]:"fire-auth-compat",[Fk]:"fire-rtdb",[$k]:"fire-rtdb-compat",[Uk]:"fire-fn",[jk]:"fire-fn-compat",[Bk]:"fire-iid",[Vk]:"fire-iid-compat",[qk]:"fire-fcm",[Hk]:"fire-fcm-compat",[Wk]:"fire-perf",[zk]:"fire-perf-compat",[Kk]:"fire-rc",[Gk]:"fire-rc-compat",[Yk]:"fire-gcs",[Qk]:"fire-gcs-compat",[Xk]:"fire-fst",[Jk]:"fire-fst-compat","fire-js":"fire-js",[Zk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=new Map,cu=new Map;function nS(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(cu.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;cu.set(e,t);for(const n of La.values())nS(n,t);return!0}function Kr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nr=new zr("app","Firebase",rS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=eS;function kf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:au,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nr.create("bad-app-name",{appName:String(i)});if(n||(n=QT()),!n)throw nr.create("no-options");const s=La.get(i);if(s){if(xs(n,s.options)&&xs(r,s.config))return s;throw nr.create("duplicate-app",{appName:i})}const o=new dk(i);for(const c of cu.values())o.addComponent(c);const a=new iS(n,r,o);return La.set(i,a),a}function Sf(t=au){const e=La.get(t);if(!e&&t===au)return kf();if(!e)throw nr.create("no-app",{appName:t});return e}function Mt(t,e,n){var r;let i=(r=tS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(a.join(" "));return}vn(new Xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="firebase-heartbeat-database",oS=1,Ns="firebase-heartbeat-store";let _l=null;function Cv(){return _l||(_l=Sv(sS,oS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ns)}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),_l}async function aS(t){try{return(await Cv()).transaction(Ns).objectStore(Ns).get(Av(t))}catch(e){if(e instanceof en)Lr.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(n.message)}}}async function sm(t,e){try{const r=(await Cv()).transaction(Ns,"readwrite");return await r.objectStore(Ns).put(e,Av(t)),r.done}catch(n){if(n instanceof en)Lr.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(r.message)}}}function Av(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=1024,lS=30*24*60*60*1e3;class uS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=om();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=om(),{heartbeatsToSend:n,unsentEntries:r}=fS(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function om(){return new Date().toISOString().substring(0,10)}function fS(t,e=cS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),am(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),am(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wv()?_v().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function am(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t){vn(new Xt("platform-logger",e=>new Ak(e),"PRIVATE")),vn(new Xt("heartbeat",e=>new uS(e),"PRIVATE")),Mt(ou,im,t),Mt(ou,im,"esm2017"),Mt("fire-js","")}dS("");var mS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,Cf=Cf||{},Z=mS||self;function Fa(){}function Tc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function co(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pS(t){return Object.prototype.hasOwnProperty.call(t,El)&&t[El]||(t[El]=++gS)}var El="closure_uid_"+(1e9*Math.random()>>>0),gS=0;function vS(t,e,n){return t.call.apply(t.bind,arguments)}function yS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=vS:ht=yS,ht.apply(null,arguments)}function qo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function hr(){this.s=this.s,this.o=this.o}var bS=0;hr.prototype.s=!1;hr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bS!=0)&&pS(this)};hr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ov=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Af(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function cm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Tc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var wS=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",Fa,e),Z.removeEventListener("test",Fa,e)}catch{}return t}();function $a(t){return/^[\s\xa0]*$/.test(t)}var lm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Il(t,e){return t<e?-1:t>e?1:0}function kc(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function ln(t){return kc().indexOf(t)!=-1}function Of(t){return Of[" "](t),t}Of[" "]=Fa;function _S(t){var e=TS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ES=ln("Opera"),Ri=ln("Trident")||ln("MSIE"),Dv=ln("Edge"),lu=Dv||Ri,Rv=ln("Gecko")&&!(kc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge"))&&!(ln("Trident")||ln("MSIE"))&&!ln("Edge"),IS=kc().toLowerCase().indexOf("webkit")!=-1&&!ln("Edge");function xv(){var t=Z.document;return t?t.documentMode:void 0}var Ua;e:{var Tl="",kl=function(){var t=kc();if(Rv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dv)return/Edge\/([\d\.]+)/.exec(t);if(Ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(IS)return/WebKit\/(\S+)/.exec(t);if(ES)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kl&&(Tl=kl?kl[1]:""),Ri){var Sl=xv();if(Sl!=null&&Sl>parseFloat(Tl)){Ua=String(Sl);break e}}Ua=Tl}var TS={};function kS(){return _S(function(){let t=0;const e=lm(String(Ua)).split("."),n=lm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Il(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Il(i[2].length==0,s[2].length==0)||Il(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var uu;if(Z.document&&Ri){var um=xv();uu=um||parseInt(Ua,10)||void 0}else uu=void 0;var SS=uu;function Ps(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Rv){e:{try{Of(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ps.X.h.call(this)}}ot(Ps,dt);var CS={2:"touch",3:"pen",4:"mouse"};Ps.prototype.h=function(){Ps.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lo="closure_listenable_"+(1e6*Math.random()|0),AS=0;function OS(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++AS,this.ba=this.ea=!1}function Sc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Df(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Nv(t){const e={};for(const n in t)e[n]=t[n];return e}const fm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fm.length;s++)n=fm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Cc(t){this.src=t,this.g={},this.h=0}Cc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hu(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new OS(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function fu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ov(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Sc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hu(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Rf="closure_lm_"+(1e6*Math.random()|0),Cl={};function Mv(t,e,n,r,i){if(r&&r.once)return Fv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mv(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[lo]?t.N(e,n,co(r)?!!r.capture:!!r,i):Lv(t,e,n,!1,r,i)}function Lv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=co(i)?!!i.capture:!!i,a=Nf(t);if(a||(t[Rf]=a=new Cc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Uv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DS(){function t(n){return e.call(t.src,t.listener,n)}const e=RS;return t}function Fv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Fv(t,e[s],n,r,i);return null}return n=Pf(n),t&&t[lo]?t.O(e,n,co(r)?!!r.capture:!!r,i):Lv(t,e,n,!0,r,i)}function $v(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$v(t,e[s],n,r,i);else r=co(r)?!!r.capture:!!r,n=Pf(n),t&&t[lo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hu(s,n,r,i),-1<n&&(Sc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hu(e,n,r,i)),(n=-1<t?e[t]:null)&&xf(n))}function xf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[lo])fu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Uv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Nf(e))?(fu(n,t),n.h==0&&(n.src=null,e[Rf]=null)):Sc(t)}}}function Uv(t){return t in Cl?Cl[t]:Cl[t]="on"+t}function RS(t,e){if(t.ba)t=!0;else{e=new Ps(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&xf(t),t=n.call(r,e)}return t}function Nf(t){return t=t[Rf],t instanceof Cc?t:null}var Al="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pf(t){return typeof t=="function"?t:(t[Al]||(t[Al]=function(e){return t.handleEvent(e)}),t[Al])}function et(){hr.call(this),this.i=new Cc(this),this.P=this,this.I=null}ot(et,hr);et.prototype[lo]=!0;et.prototype.removeEventListener=function(t,e,n,r){$v(this,t,e,n,r)};function st(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(r,t),Pv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ho(o,r,!0,e)&&i}if(o=e.g=t,i=Ho(o,r,!0,e)&&i,i=Ho(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ho(o,r,!1,e)&&i}et.prototype.M=function(){if(et.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Sc(n[r]);delete t.g[e],t.h--}}this.I=null};et.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&fu(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mf=Z.JSON.stringify;function xS(){var t=Vv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class NS{constructor(){this.h=this.g=null}add(e,n){const r=jv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new PS,t=>t.reset());class PS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MS(t){Z.setTimeout(()=>{throw t},0)}function Bv(t,e){du||LS(),mu||(du(),mu=!0),Vv.add(t,e)}var du;function LS(){var t=Z.Promise.resolve(void 0);du=function(){t.then(FS)}}var mu=!1,Vv=new NS;function FS(){for(var t;t=xS();){try{t.h.call(t.g)}catch(n){MS(n)}var e=jv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mu=!1}function Ac(t,e){et.call(this),this.h=t||1,this.g=e||Z,this.j=ht(this.lb,this),this.l=Date.now()}ot(Ac,et);H=Ac.prototype;H.ca=!1;H.R=null;H.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),st(this,"tick"),this.ca&&(Lf(this),this.start()))}};H.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}H.M=function(){Ac.X.M.call(this),Lf(this),delete this.g};function Ff(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function qv(t){t.g=Ff(()=>{t.g=null,t.i&&(t.i=!1,qv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $S extends hr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qv(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ms(t){hr.call(this),this.h=t,this.g={}}ot(Ms,hr);var hm=[];function Hv(t,e,n,r){Array.isArray(n)||(n&&(hm[0]=n.toString()),n=hm);for(var i=0;i<n.length;i++){var s=Mv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Wv(t){Df(t.g,function(e,n){this.g.hasOwnProperty(n)&&xf(e)},t),t.g={}}Ms.prototype.M=function(){Ms.X.M.call(this),Wv(this)};Ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oc(){this.g=!0}Oc.prototype.Aa=function(){this.g=!1};function US(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jS(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ai(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+VS(t,n)+(r?" "+r:"")})}function BS(t,e){t.info(function(){return"TIMEOUT: "+e})}Oc.prototype.info=function(){};function VS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mf(n)}catch{return e}}var Gr={},dm=null;function Dc(){return dm=dm||new et}Gr.Pa="serverreachability";function zv(t){dt.call(this,Gr.Pa,t)}ot(zv,dt);function Ls(t){const e=Dc();st(e,new zv(e))}Gr.STAT_EVENT="statevent";function Kv(t,e){dt.call(this,Gr.STAT_EVENT,t),this.stat=e}ot(Kv,dt);function vt(t){const e=Dc();st(e,new Kv(e,t))}Gr.Qa="timingevent";function Gv(t,e){dt.call(this,Gr.Qa,t),this.size=e}ot(Gv,dt);function uo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Rc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Yv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $f(){}$f.prototype.h=null;function mm(t){return t.h||(t.h=t.i())}function Qv(){}var fo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Uf(){dt.call(this,"d")}ot(Uf,dt);function jf(){dt.call(this,"c")}ot(jf,dt);var pu;function xc(){}ot(xc,$f);xc.prototype.g=function(){return new XMLHttpRequest};xc.prototype.i=function(){return{}};pu=new xc;function ho(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ms(this),this.O=qS,t=lu?125:void 0,this.T=new Ac(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Xv}function Xv(){this.i=null,this.g="",this.h=!1}var qS=45e3,gu={},ja={};H=ho.prototype;H.setTimeout=function(t){this.O=t};function vu(t,e,n){t.K=1,t.v=Pc(An(e)),t.s=n,t.P=!0,Jv(t,null)}function Jv(t,e){t.F=Date.now(),mo(t),t.A=An(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),oy(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Xv,t.g=Cy(t.l,n?e:null,!t.s),0<t.N&&(t.L=new $S(ht(t.La,t,t.g),t.N)),Hv(t.S,t.g,"readystatechange",t.ib),e=t.H?Nv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ls(),US(t.j,t.u,t.A,t.m,t.U,t.s)}H.ib=function(t){t=t.target;const e=this.L;e&&_n(t)==3?e.l():this.La(t)};H.La=function(t){try{if(t==this.g)e:{const u=_n(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||lu||this.g&&(this.h.h||this.g.fa()||ym(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Ls(3):Ls(2)),Nc(this);var n=this.g.aa();this.Y=n;t:if(Zv(this)){var r=ym(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),ps(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,jS(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$a(a)){var l=a;break t}}l=null}if(n=l)ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yu(this,n);else{this.i=!1,this.o=3,vt(12),Tr(this),ps(this);break e}}this.P?(ey(this,u,o),lu&&this.i&&u==3&&(Hv(this.S,this.T,"tick",this.hb),this.T.start())):(ai(this.j,this.m,o,null),yu(this,o)),u==4&&Tr(this),this.i&&!this.I&&(u==4?Iy(this.l,this):(this.i=!1,mo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,vt(12)):(this.o=0,vt(13)),Tr(this),ps(this)}}}catch{}finally{}};function Zv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ey(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=HS(t,n),i==ja){e==4&&(t.o=4,vt(14),r=!1),ai(t.j,t.m,null,"[Incomplete Response]");break}else if(i==gu){t.o=4,vt(15),ai(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ai(t.j,t.m,i,null),yu(t,i);Zv(t)&&i!=ja&&i!=gu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kf(e),e.K=!0,vt(11))):(ai(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),ps(t))}H.hb=function(){if(this.g){var t=_n(this.g),e=this.g.fa();this.C<e.length&&(Nc(this),ey(this,t,e),this.i&&t!=4&&mo(this))}};function HS(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ja:(n=Number(e.substring(n,r)),isNaN(n)?gu:(r+=1,r+n>e.length?ja:(e=e.substr(r,n),t.C=r+n,e)))}H.cancel=function(){this.I=!0,Tr(this)};function mo(t){t.V=Date.now()+t.O,ty(t,t.O)}function ty(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=uo(ht(t.gb,t),e)}function Nc(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}H.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(BS(this.j,this.A),this.K!=2&&(Ls(),vt(17)),Tr(this),this.o=2,ps(this)):ty(this,this.V-t)};function ps(t){t.l.G==0||t.I||Iy(t.l,t)}function Tr(t){Nc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Lf(t.T),Wv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||bu(n.h,t))){if(!t.J&&bu(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)qa(n),Fc(n);else break e;zf(n),vt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=uo(ht(n.cb,n),6e3));if(1>=ly(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else kr(n,11)}else if((t.J||n.g==t)&&qa(n),!$a(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bf(s,s.h),s.h=null))}if(r.D){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,Pe(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Sy(r,r.H?r.ka:null,r.V),o.J){uy(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Nc(a),mo(a)),r.g=o}else _y(r);0<n.i.length&&$c(n)}else l[0]!="stop"&&l[0]!="close"||kr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?kr(n,7):Wf(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Ls(4)}catch{}}function WS(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function zS(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ny(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zS(t),r=WS(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ry=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Nr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nr){this.h=e!==void 0?e:t.h,Ba(this,t.j),this.s=t.s,this.g=t.g,Va(this,t.m),this.l=t.l,e=t.i;var n=new Fs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pm(this,n),this.o=t.o}else t&&(n=String(t).match(ry))?(this.h=!!e,Ba(this,n[1]||"",!0),this.s=os(n[2]||""),this.g=os(n[3]||"",!0),Va(this,n[4]),this.l=os(n[5]||"",!0),pm(this,n[6]||"",!0),this.o=os(n[7]||"")):(this.h=!!e,this.i=new Fs(null,this.h))}Nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(as(e,gm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(as(e,gm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(as(n,n.charAt(0)=="/"?QS:YS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",as(n,JS)),t.join("")};function An(t){return new Nr(t)}function Ba(t,e,n){t.j=n?os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Va(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pm(t,e,n){e instanceof Fs?(t.i=e,ZS(t.i,t.h)):(n||(e=as(e,XS)),t.i=new Fs(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function Pc(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function as(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gm=/[#\/\?@]/g,YS=/[#\?:]/g,QS=/[#\?]/g,XS=/[#\?@]/g,JS=/#/g;function Fs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dr(t){t.g||(t.g=new Map,t.h=0,t.i&&KS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=Fs.prototype;H.add=function(t,e){dr(this),this.i=null,t=zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iy(t,e){dr(t),e=zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sy(t,e){return dr(t),e=zi(t,e),t.g.has(e)}H.forEach=function(t,e){dr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};H.oa=function(){dr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};H.W=function(t){dr(this);let e=[];if(typeof t=="string")sy(this,t)&&(e=e.concat(this.g.get(zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};H.set=function(t,e){return dr(this),this.i=null,t=zi(this,t),sy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function oy(t,e,n){iy(t,e),0<n.length&&(t.i=null,t.g.set(zi(t,e),Af(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZS(t,e){e&&!t.j&&(dr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(iy(this,r),oy(this,i,n))},t)),t.j=e}var eC=class{constructor(e,n){this.h=e,this.g=n}};function ay(t){this.l=t||tC,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tC=10;function cy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ly(t){return t.h?1:t.g?t.g.size:0}function bu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bf(t,e){t.g?t.g.add(e):t.h=e}function uy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ay.prototype.cancel=function(){if(this.i=fy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Af(t.i)}function Vf(){}Vf.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Vf.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function nC(){this.g=new Vf}function rC(t,e,n){const r=n||"";try{ny(t,function(i,s){let o=i;co(i)&&(o=Mf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iC(t,e){const n=new Oc;if(Z.Image){const r=new Image;r.onload=qo(Wo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=qo(Wo,n,r,"TestLoadImage: error",!1,e),r.onabort=qo(Wo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=qo(Wo,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function po(t){this.l=t.ac||null,this.j=t.jb||!1}ot(po,$f);po.prototype.g=function(){return new Mc(this.l,this.j)};po.prototype.i=function(t){return function(){return t}}({});function Mc(t,e){et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=qf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(Mc,et);var qf=0;H=Mc.prototype;H.open=function(t,e){if(this.readyState!=qf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$s(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=qf};H.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function hy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}H.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?go(this):$s(this),this.readyState==3&&hy(this)}};H.Va=function(t){this.g&&(this.response=this.responseText=t,go(this))};H.Ua=function(t){this.g&&(this.response=t,go(this))};H.ga=function(){this.g&&go(this)};function go(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$s(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $s(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sC=Z.JSON.parse;function je(t){et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=dy,this.K=this.L=!1}ot(je,et);var dy="",oC=/^https?$/i,aC=["POST","PUT"];H=je.prototype;H.Ka=function(t){this.L=t};H.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pu.g(),this.C=this.u?mm(this.u):mm(pu),this.g.onreadystatechange=ht(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){vm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=Ov(aC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gy(this),0<this.B&&((this.K=cC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.qa,this)):this.A=Ff(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vm(this,s)}};function cC(t){return Ri&&kS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}H.qa=function(){typeof Cf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function vm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,my(t),Lc(t)}function my(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),Lc(this))};H.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lc(this,!0)),je.X.M.call(this)};H.Ha=function(){this.s||(this.F||this.v||this.l?py(this):this.fb())};H.fb=function(){py(this)};function py(t){if(t.h&&typeof Cf<"u"&&(!t.C[1]||_n(t)!=4||t.aa()!=2)){if(t.v&&_n(t)==4)Ff(t.Ha,0,t);else if(st(t,"readystatechange"),_n(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(ry)[1]||null;if(!i&&Z.self&&Z.self.location){var s=Z.self.location.protocol;i=s.substr(0,s.length-1)}r=!oC.test(i?i.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<_n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",my(t)}}finally{Lc(t)}}}}function Lc(t,e){if(t.g){gy(t);const n=t.g,r=t.C[0]?Fa:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function gy(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function _n(t){return t.g?t.g.readyState:0}H.aa=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};H.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sC(e)}};function ym(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case dy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}H.Ea=function(){return this.m};H.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vy(t){let e="";return Df(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yy(t){this.Ca=0,this.i=[],this.j=new Oc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ns("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ns("baseRetryDelayMs",5e3,t),this.bb=ns("retryDelaySeedMs",1e4,t),this.$a=ns("forwardChannelMaxRetries",2,t),this.ta=ns("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ay(t&&t.concurrentRequestLimit),this.Fa=new nC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}H=yy.prototype;H.ma=8;H.G=1;function Wf(t){if(by(t),t.G==3){var e=t.U++,n=An(t.F);Pe(n,"SID",t.I),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),vo(t,n),e=new ho(t,t.j,e,void 0),e.K=2,e.v=Pc(An(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cy(e.l,null),e.g.da(e.v)),e.F=Date.now(),mo(e)}ky(t)}function Fc(t){t.g&&(Kf(t),t.g.cancel(),t.g=null)}function by(t){Fc(t),t.u&&(Z.clearTimeout(t.u),t.u=null),qa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function $c(t){cy(t.h)||t.m||(t.m=!0,Bv(t.Ja,t),t.C=0)}function lC(t,e){return ly(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=uo(ht(t.Ja,t,e),Ty(t,t.C)),t.C++,!0)}H.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new ho(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Nv(s),Pv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wy(this,i,e),n=An(this.F),Pe(n,"RID",t),Pe(n,"CVER",22),this.D&&Pe(n,"X-HTTP-Session-Id",this.D),vo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(vy(s)))+"&"+e:this.o&&Hf(n,this.o,s)),Bf(this.h,i),this.Ya&&Pe(n,"TYPE","init"),this.O?(Pe(n,"$req",e),Pe(n,"SID","null"),i.Z=!0,vu(i,n,null)):vu(i,n,e),this.G=2}}else this.G==3&&(t?bm(this,t):this.i.length==0||cy(this.h)||bm(this))};function bm(t,e){var n;e?n=e.m:n=t.U++;const r=An(t.F);Pe(r,"SID",t.I),Pe(r,"RID",n),Pe(r,"AID",t.T),vo(t,r),t.o&&t.s&&Hf(r,t.o,t.s),n=new ho(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=wy(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Bf(t.h,n),vu(n,r,e)}function vo(t,e){t.ia&&Df(t.ia,function(n,r){Pe(e,r,n)}),t.l&&ny({},function(n,r){Pe(e,r,n)})}function wy(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ht(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{rC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function _y(t){t.g||t.u||(t.Z=1,Bv(t.Ia,t),t.A=0)}function zf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=uo(ht(t.Ia,t),Ty(t,t.A)),t.A++,!0)}H.Ia=function(){if(this.u=null,Ey(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=uo(ht(this.eb,this),t)}};H.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,vt(10),Fc(this),Ey(this))};function Kf(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function Ey(t){t.g=new ho(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=An(t.sa);Pe(e,"RID","rpc"),Pe(e,"SID",t.I),Pe(e,"CI",t.L?"0":"1"),Pe(e,"AID",t.T),Pe(e,"TYPE","xmlhttp"),vo(t,e),t.o&&t.s&&Hf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Pc(An(e)),n.s=null,n.P=!0,Jv(n,t)}H.cb=function(){this.v!=null&&(this.v=null,Fc(this),zf(this),vt(19))};function qa(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function Iy(t,e){var n=null;if(t.g==e){qa(t),Kf(t),t.g=null;var r=2}else if(bu(t.h,e))n=e.D,uy(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Dc(),st(r,new Gv(r,n)),$c(t)}else _y(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&lC(t,e)||r==2&&zf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:kr(t,5);break;case 4:kr(t,10);break;case 3:kr(t,6);break;default:kr(t,2)}}}function Ty(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function kr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ht(t.kb,t);n||(n=new Nr("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Ba(n,"https"),Pc(n)),iC(n.toString(),r)}else vt(2);t.G=0,t.l&&t.l.va(e),ky(t),by(t)}H.kb=function(t){t?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ky(t){if(t.G=0,t.la=[],t.l){const e=fy(t.h);(e.length!=0||t.i.length!=0)&&(cm(t.la,e),cm(t.la,t.i),t.h.i.length=0,Af(t.i),t.i.length=0),t.l.ua()}}function Sy(t,e,n){var r=n instanceof Nr?An(n):new Nr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Va(r,r.m);else{var i=Z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Nr(null,void 0);r&&Ba(s,r),e&&(s.g=e),i&&Va(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ma),vo(t,r),r}function Cy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new po({jb:!0})):new je(t.ra),e.Ka(t.H),e}function Ay(){}H=Ay.prototype;H.xa=function(){};H.wa=function(){};H.va=function(){};H.ua=function(){};H.Ra=function(){};function Ha(){if(Ri&&!(10<=Number(SS)))throw Error("Environmental error: no available transport.")}Ha.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){et.call(this),this.g=new yy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$a(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$a(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ki(this)}ot(Rt,et);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Sy(t,null,t.V),$c(t)};Rt.prototype.close=function(){Wf(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mf(t),t=n);e.i.push(new eC(e.ab++,t)),e.G==3&&$c(e)};Rt.prototype.M=function(){this.g.l=null,delete this.j,Wf(this.g),delete this.g,Rt.X.M.call(this)};function Oy(t){Uf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(Oy,Uf);function Dy(){jf.call(this),this.status=1}ot(Dy,jf);function Ki(t){this.g=t}ot(Ki,Ay);Ki.prototype.xa=function(){st(this.g,"a")};Ki.prototype.wa=function(t){st(this.g,new Oy(t))};Ki.prototype.va=function(t){st(this.g,new Dy)};Ki.prototype.ua=function(){st(this.g,"b")};Ha.prototype.createWebChannel=Ha.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Rc.NO_ERROR=0;Rc.TIMEOUT=8;Rc.HTTP_ERROR=6;Yv.COMPLETE="complete";Qv.EventType=fo;fo.OPEN="a";fo.CLOSE="b";fo.ERROR="c";fo.MESSAGE="d";et.prototype.listen=et.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var uC=function(){return new Ha},fC=function(){return Dc()},Ol=Rc,hC=Yv,dC=Gr,wm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},mC=po,zo=Qv,pC=je;const _m="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Ic("@firebase/firestore");function Em(){return Fr.logLevel}function W(t,...e){if(Fr.logLevel<=ye.DEBUG){const n=e.map(Gf);Fr.debug(`Firestore (${Gi}): ${t}`,...n)}}function On(t,...e){if(Fr.logLevel<=ye.ERROR){const n=e.map(Gf);Fr.error(`Firestore (${Gi}): ${t}`,...n)}}function wu(t,...e){if(Fr.logLevel<=ye.WARN){const n=e.map(Gf);Fr.warn(`Firestore (${Gi}): ${t}`,...n)}}function Gf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function Ae(t,e){t||J()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends en{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class vC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yC{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Ry(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new at(e)}}class bC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=at.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new bC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EC{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.A=n.token,new _C(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new ze(0,0))}static max(){return new ne(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class xe extends Us{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const TC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Us{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return TC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(xe.fromString(e))}static fromName(e){return new K(xe.fromString(e).popFirst(5))}static empty(){return new K(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new xe(e.slice()))}}function kC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new or(i,K.empty(),e)}function SC(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(ne.min(),K.empty(),-1)}static max(){return new or(ne.max(),K.empty(),-1)}}function CC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==AC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Yf.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ny(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return t==null}function Wa(t){return t===0&&1/t==-1/0}function RC(t){return typeof t=="number"&&Number.isInteger(t)&&!Wa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new pt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const xC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=xC.exec(t);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ni(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function My(t){const e=t.mapValue.fields.__previous_value__;return Py(e)?My(e):e}function Bs(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Py(t)?4:NC(t)?9007199254740991:10:J()}function yn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bs(t).isEqual(Bs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ar(r.timestampValue),o=ar(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ni(r.bytesValue).isEqual(Ni(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return qe(r.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(r.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return qe(r.integerValue)===qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=qe(r.doubleValue),o=qe(i.doubleValue);return s===o?Wa(s)===Wa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return xi(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Im(s)!==Im(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!yn(s[a],o[a])))return!1;return!0}(t,e);default:return J()}}function Vs(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Pi(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=qe(i.integerValue||i.doubleValue),a=qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Tm(t.timestampValue,e.timestampValue);case 4:return Tm(Bs(t),Bs(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ni(i),a=Ni(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=we(o[c],a[c]);if(l!==0)return l}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=we(qe(i.latitude),qe(s.latitude));return o!==0?o:we(qe(i.longitude),qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Pi(o[c],a[c]);if(l)return l}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ko.mapValue&&s===Ko.mapValue)return 0;if(i===Ko.mapValue)return 1;if(s===Ko.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=we(a[u],l[u]);if(f!==0)return f;const h=Pi(o[a[u]],c[l[u]]);if(h!==0)return h}return we(a.length,l.length)}(t.mapValue,e.mapValue);default:throw J()}}function Tm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=ar(t),r=ar(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Mi(t){return _u(t)}function _u(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ar(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ni(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=_u(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${_u(r.fields[a])}`;return s+"}"}(t.mapValue):J();var e,n}function km(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eu(t){return!!t&&"integerValue"in t}function Qf(t){return!!t&&"arrayValue"in t}function Sm(t){return!!t&&"nullValue"in t}function Cm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ma(t){return!!t&&"mapValue"in t}function gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.position=e,this.inclusive=n}}function Am(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Pi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Om(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{}class He extends Ly{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LC(e,n,r):n==="array-contains"?new UC(e,r):n==="in"?new jC(e,r):n==="not-in"?new BC(e,r):n==="array-contains-any"?new VC(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FC(e,r):new $C(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pi(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jt extends Ly{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Jt(e,n)}matches(e){return Fy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Fy(t){return t.op==="and"}function PC(t){return MC(t)&&Fy(t)}function MC(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function $y(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Mi(t.value);{const e=t.filters.map(n=>$y(n)).join(",");return`${t.op}(${e})`}}function Uy(t,e){return t instanceof He?function(n,r){return r instanceof He&&n.op===r.op&&n.field.isEqual(r.field)&&yn(n.value,r.value)}(t,e):t instanceof Jt?function(n,r){return r instanceof Jt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Uy(s,r.filters[o]),!0):!1}(t,e):void J()}function jy(t){return t instanceof He?function(e){return`${e.field.canonicalString()} ${e.op} ${Mi(e.value)}`}(t):t instanceof Jt?function(e){return e.op.toString()+" {"+e.getFilters().map(jy).join(" ,")+"}"}(t):"Filter"}class LC extends He{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class FC extends He{constructor(e,n){super(e,"in",n),this.keys=By("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $C extends He{constructor(e,n){super(e,"not-in",n),this.keys=By("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function By(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class UC extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qf(n)&&Vs(n.arrayValue,this.value)}}class jC extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vs(this.value.arrayValue,n)}}class BC extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vs(this.value.arrayValue,n)}}class VC extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n="asc"){this.field=e,this.dir=n}}function qC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dm(this.data.getIterator())}getIteratorFrom(e){return new Dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new Ke(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(gs(this.value))}}function Vy(t){const e=[];return Yr(t.fields,(n,r)=>{const i=new ft([n]);if(ma(r)){const s=Vy(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,ne.min(),ne.min(),ne.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new lt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new lt(e,2,n,ne.min(),ne.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ne.min(),ne.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Rm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new HC(t,e,n,r,i,s,o)}function Xf(t){const e=ie(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$y(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mi(r)).join(",")),e.ft=n}return e.ft}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!qC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Uy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Om(t.startAt,e.startAt)&&Om(t.endAt,e.endAt)}function Iu(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function WC(t,e,n,r,i,s,o,a){return new Yi(t,e,n,r,i,s,o,a)}function qy(t){return new Yi(t)}function xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Hy(t){return t.collectionGroup!==null}function yi(t){const e=ie(t);if(e.dt===null){e.dt=[];const n=jc(e),r=Zf(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new vi(n)),e.dt.push(new vi(ft.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new vi(ft.keyField(),s))}}}return e.dt}function Dn(t){const e=ie(t);if(!e._t)if(e.limitType==="F")e._t=Rm(e.path,e.collectionGroup,yi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of yi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new vi(s.field,o))}const r=e.endAt?new za(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new za(e.startAt.position,e.startAt.inclusive):null;e._t=Rm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Tu(t,e){e.getFirstInequalityField(),jc(t);const n=t.filters.concat([e]);return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ku(t,e,n){return new Yi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return Jf(Dn(t),Dn(e))&&t.limitType===e.limitType}function Wy(t){return`${Xf(Dn(t))}|lt:${t.limitType}`}function Su(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>jy(r)).join(", ")}]`),Uc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mi(r)).join(",")),`Target(${n})`}(Dn(t))}; limitType=${t.limitType})`}function eh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of yi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Am(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,yi(n),r)||n.endAt&&!function(i,s,o){const a=Am(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,yi(n),r))}(t,e)}function zC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zy(t){return(e,n)=>{let r=!1;for(const i of yi(t)){const s=KC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?Pi(a,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wa(e)?"-0":e}}function Gy(t){return{integerValue:""+t}}function GC(t,e){return RC(e)?Gy(e):Ky(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this._=void 0}}function YC(t,e,n){return t instanceof Ka?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof qs?Qy(t,e):t instanceof Hs?Xy(t,e):function(r,i){const s=Yy(r,i),o=Nm(s)+Nm(r.gt);return Eu(s)&&Eu(r.gt)?Gy(o):Ky(r.yt,o)}(t,e)}function QC(t,e,n){return t instanceof qs?Qy(t,e):t instanceof Hs?Xy(t,e):n}function Yy(t,e){return t instanceof Ga?Eu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ka extends Vc{}class qs extends Vc{constructor(e){super(),this.elements=e}}function Qy(t,e){const n=Jy(e);for(const r of t.elements)n.some(i=>yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Hs extends Vc{constructor(e){super(),this.elements=e}}function Xy(t,e){let n=Jy(e);for(const r of t.elements)n=n.filter(i=>!yn(i,r));return{arrayValue:{values:n}}}class Ga extends Vc{constructor(e,n){super(),this.yt=e,this.gt=n}}function Nm(t){return qe(t.integerValue||t.doubleValue)}function Jy(t){return Qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function XC(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof qs&&r instanceof qs||n instanceof Hs&&r instanceof Hs?xi(n.elements,r.elements,yn):n instanceof Ga&&r instanceof Ga?yn(n.gt,r.gt):n instanceof Ka&&r instanceof Ka}(t.transform,e.transform)}class JC{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function Zy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tb(t.key,hn.none()):new wo(t.key,t.data,hn.none());{const n=t.data,r=Et.empty();let i=new Ke(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(t.key,r,new Lt(i.toArray()),hn.none())}}function ZC(t,e,n){t instanceof wo?function(r,i,s){const o=r.value.clone(),a=Mm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(r,i,s){if(!pa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Mm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(eb(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function vs(t,e,n,r){return t instanceof wo?function(i,s,o,a){if(!pa(i.precondition,s))return o;const c=i.value.clone(),l=Lm(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(i,s,o,a){if(!pa(i.precondition,s))return o;const c=Lm(i.fieldTransforms,a,s),l=s.data;return l.setAll(eb(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return pa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function eA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Yy(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function Pm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&xi(n,r,(i,s)=>XC(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends qc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends qc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Mm(t,e,n){const r=new Map;Ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,QC(o,a,n[i]))}return r}function Lm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YC(s,o,e))}return r}class tb extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tA extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ue;function rA(t){switch(t){default:return J();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function nb(t){if(t===void 0)return On("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ve.OK:return T.OK;case Ve.CANCELLED:return T.CANCELLED;case Ve.UNKNOWN:return T.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return T.INTERNAL;case Ve.UNAVAILABLE:return T.UNAVAILABLE;case Ve.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ve.NOT_FOUND:return T.NOT_FOUND;case Ve.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ve.ABORTED:return T.ABORTED;case Ve.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ve.DATA_LOSS:return T.DATA_LOSS;default:return J()}}(ue=Ve||(Ve={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ny(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new Ye(K.comparator);function Rn(){return iA}const rb=new Ye(K.comparator);function cs(...t){let e=rb;for(const n of t)e=e.insert(n.key,n);return e}function ib(t){let e=rb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return ys()}function sb(){return ys()}function ys(){return new Qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const sA=new Ye(K.comparator),oA=new Ke(K.comparator);function le(...t){let e=oA;for(const n of t)e=e.add(n);return e}const aA=new Ke(we);function ob(){return aA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,_o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hc(ne.min(),i,ob(),Rn(),le())}}class _o{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _o(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class ab{constructor(e,n){this.targetId=e,this.Et=n}}class cb{constructor(e,n,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Fm{constructor(){this.At=0,this.Rt=Um(),this.bt=pt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=le(),n=le(),r=le();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new _o(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Um()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class cA{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Rn(),this.qt=$m(),this.Ut=new Ke(we)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Iu(s))if(r===0){const o=new K(s.path);this.Qt(n,o,lt.newNoDocument(o,ne.min()))}else Ae(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Iu(a.target)){const c=new K(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,lt.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=le();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Hc(e,n,this.Ut,this.Lt,r);return this.Lt=Rn(),this.qt=$m(),this.Ut=new Ke(we),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Fm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ke(we),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Fm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function $m(){return new Ye(K.comparator)}function Um(){return new Ye(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),fA=(()=>({and:"AND",or:"OR"}))();class hA{constructor(e,n){this.databaseId=e,this.wt=n}}function Ya(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lb(t,e){return t.wt?e.toBase64():e.toUint8Array()}function dA(t,e){return Ya(t,e.toTimestamp())}function dn(t){return Ae(!!t),ne.fromTimestamp(function(e){const n=ar(e);return new ze(n.seconds,n.nanos)}(t))}function th(t,e){return function(n){return new xe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ub(t){const e=xe.fromString(t);return Ae(mb(e)),e}function Cu(t,e){return th(t.databaseId,e.path)}function Dl(t,e){const n=ub(e);if(n.get(1)!==t.databaseId.projectId)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(fb(n))}function Au(t,e){return th(t.databaseId,e)}function mA(t){const e=ub(t);return e.length===4?xe.emptyPath():fb(e)}function Ou(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fb(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jm(t,e,n){return{name:Cu(t,e),fields:n.value.mapValue.fields}}function pA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.wt?(Ae(l===void 0||typeof l=="string"),pt.fromBase64String(l||"")):(Ae(l===void 0||l instanceof Uint8Array),pt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?T.UNKNOWN:nb(c.code);return new j(l,c.message||"")}(o);n=new cb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dl(t,r.document.name),s=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):ne.min(),a=new Et({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ga(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dl(t,r.document),s=r.readTime?dn(r.readTime):ne.min(),o=lt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dl(t,r.document),s=r.removedTargetIds||[];n=new ga([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new nA(i),o=r.targetId;n=new ab(o,s)}}return n}function gA(t,e){let n;if(e instanceof wo)n={update:jm(t,e.key,e.value)};else if(e instanceof tb)n={delete:Cu(t,e.key)};else if(e instanceof mr)n={update:jm(t,e.key,e.data),updateMask:kA(e.fieldMask)};else{if(!(e instanceof tA))return J();n={verify:Cu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ka)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ga)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:dA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function vA(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?dn(r.updateTime):dn(i);return s.isEqual(ne.min())&&(s=dn(i)),new JC(s,r.transformResults||[])}(n,e))):[]}function yA(t,e){return{documents:[Au(t,e.path)]}}function bA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Au(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Au(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return db(Jt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:si(u.field),direction:EA(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.wt||Uc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function wA(t){let e=mA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const f=hb(u);return f instanceof Jt&&PC(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new vi(oi(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,Uc(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,h=u.values||[];return new za(h,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,h=u.values||[];return new za(h,f)}(n.endAt)),WC(e,i,o,s,a,"F",c,l)}function _A(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function hb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=oi(e.unaryFilter.field);return He.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=oi(e.unaryFilter.field);return He.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=oi(e.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=oi(e.unaryFilter.field);return He.create(s,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return He.create(oi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Jt.create(e.compositeFilter.filters.map(n=>hb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function EA(t){return lA[t]}function IA(t){return uA[t]}function TA(t){return fA[t]}function si(t){return{fieldPath:t.canonicalString()}}function oi(t){return ft.fromServerFormat(t.fieldPath)}function db(t){return t instanceof He?function(e){if(e.op==="=="){if(Cm(e.value))return{unaryFilter:{field:si(e.field),op:"IS_NAN"}};if(Sm(e.value))return{unaryFilter:{field:si(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Cm(e.value))return{unaryFilter:{field:si(e.field),op:"IS_NOT_NAN"}};if(Sm(e.value))return{unaryFilter:{field:si(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(e.field),op:IA(e.op),value:e.value}}}(t):t instanceof Jt?function(e){const n=e.getFilters().map(r=>db(r));return n.length===1?n[0]:{compositeFilter:{op:TA(e.op),filters:n}}}(t):J()}function kA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Zy(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&xi(this.mutations,e.mutations,(n,r)=>Pm(n,r))&&xi(this.baseMutations,e.baseMutations,(n,r)=>Pm(n,r))}}class nh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ae(e.mutations.length===r.length);let i=sA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new nh(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i,s=ne.min(),o=ne.min(),a=pt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.ie=e}}function OA(t){const e=wA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ku(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.Je=new RA}addToCollectionParentIndex(e,n){return this.Je.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(or.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class RA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(xe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Li(0)}static vn(){return new Li(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.changes=new Qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vs(r.mutation,i,Lt.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=cs();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Rn();const o=ys(),a=ys();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof mr)?s=s.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),vs(u.mutation,l,u.mutation.getFieldMask(),ze.now()))}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new NA(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ys();let i=new Ye((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Lt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const f=(i.get(a.batchId)||le()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=sb();u.forEach(h=>{if(!s.has(h)){const m=Zy(n.get(h),r.get(h));m!==null&&f.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Sr());let a=-1,c=s;return o.next(l=>A.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,le())).next(u=>({batchId:a,changes:ib(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=cs();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const c=function(l,u){return new Yi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,lt.newInvalidDocument(l)))});let o=cs();return i.forEach((a,c)=>{const l=s.get(a);l!==void 0&&vs(l.mutation,c,Lt.empty(),ze.now()),eh(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:dn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:OA(r.bundledQuery),readTime:dn(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.overlays=new Ye(K.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Sr(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ye((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=Sr(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Sr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return A.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CA(n,r));let s=this.es.get(n);s===void 0&&(s=le(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.ns=new Ke(Xe.ss),this.rs=new Ke(Xe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Xe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new K(new xe([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new K(new xe([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=le();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return K.comparator(e.key,n.key)||we(e._s,n._s)}static os(e,n){return we(e._s,n._s)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ke(Xe.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(we);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),A.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new K(s),0);let a=new Ke(we);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ae(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return A.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Xe(n,0),i=this.gs.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.Es=e,this.docs=new Ye(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=Rn();const s=new K(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||CC(SC(c),r)<=0||(i=i.insert(c.key,c.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){J()}As(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UA(this)}getSize(e){return A.resolve(this.size)}}class UA extends xA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.persistence=e,this.Rs=new Qi(n=>Xf(n),Jf),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.bs=0,this.Ps=new rh,this.targetCount=0,this.vs=Li.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Yf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new jA(this),this.indexManager=new DA,this.remoteDocumentCache=function(r){return new $A(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new AA(n),this.Ns=new MA(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new FA(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new VA(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return A.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class VA extends OC{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.Fs=new rh,this.$s=null}static Bs(e){return new ih(e)}get Ls(){if(this.$s)return this.$s;throw J()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,r=>{const i=K.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sh(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(xm(n))return A.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ku(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,ku(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,r,i){return xm(n)||i.isEqual(ne.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(Em()<=ye.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Su(n)),this.Bi(e,o,n,kC(i,-1)))})}Fi(e,n){let r=new Ke(zy(e));return n.forEach((i,s)=>{eh(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return Em()<=ye.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Su(n)),this.Ni.getDocumentsMatchingQuery(e,n,or.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ye(we),this.Ui=new Qi(s=>Xf(s),Jf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function WA(t,e,n,r){return new HA(t,e,n,r)}async function pb(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=le();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function zA(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let h=A.resolve();return f.forEach(m=>{h=h.next(()=>l.getEntry(a,m)).next(v=>{const w=c.docVersions.get(m);Ae(w!==null),v.version.compareTo(w)<0&&(u.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=le();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function gb(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function KA(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,f)=>{const h=i.get(f);if(!h)return;a.push(n.Cs.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(s,u.addedDocuments,f)));let m=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(pt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),i=i.insert(f,m),function(v,w,I){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,m,u)&&a.push(n.Cs.updateTargetData(s,m))});let c=Rn(),l=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(GA(s,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!r.isEqual(ne.min())){const u=n.Cs.getLastRemoteSnapshotVersion(s).next(f=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.qi=i,s))}function GA(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:i}})}function YA(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QA(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Pr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Du(t,e,n){const r=ie(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Bm(t,e,n){const r=ie(t);let i=ne.min(),s=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ie(a),f=u.Ui.get(l);return f!==void 0?A.resolve(u.qi.get(f)):u.Cs.getTargetData(c,l)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:le())).next(a=>(XA(r,zC(e),a),{documents:a,Hi:s})))}function XA(t,e,n){let r=t.Ki.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Vm{constructor(){this.activeTargetIds=ob()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JA{constructor(){this.Lr=new Vm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Vm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);W("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(c=>(W("RestConnection","Received: ",c),c),c=>{throw wu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=eO[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new pC;a.setWithCredentials(!0),a.listenOnce(hC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ol.NO_ERROR:const l=a.getResponseJson();W("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Ol.TIMEOUT:W("Connection",'RPC "'+e+'" timed out'),o(new j(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ol.HTTP_ERROR:const u=a.getStatus();if(W("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const h=f==null?void 0:f.error;if(h&&h.status&&h.message){const m=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(w)>=0?w:T.UNKNOWN}(h.status);o(new j(m,h.message))}else o(new j(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(T.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{W("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uC(),o=fC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new mC({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=i.join("");W("Connection","Creating WebChannel: "+c,a);const l=s.createWebChannel(c,a);let u=!1,f=!1;const h=new tO({Hr:v=>{f?W("Connection","Not sending because WebChannel is closed:",v):(u||(W("Connection","Opening WebChannel transport."),l.open(),u=!0),W("Connection","WebChannel sending:",v),l.send(v))},Jr:()=>l.close()}),m=(v,w,I)=>{v.listen(w,y=>{try{I(y)}catch(g){setTimeout(()=>{throw g},0)}})};return m(l,zo.EventType.OPEN,()=>{f||W("Connection","WebChannel transport opened.")}),m(l,zo.EventType.CLOSE,()=>{f||(f=!0,W("Connection","WebChannel transport closed"),h.io())}),m(l,zo.EventType.ERROR,v=>{f||(f=!0,wu("Connection","WebChannel transport errored:",v),h.io(new j(T.UNAVAILABLE,"The operation could not be completed")))}),m(l,zo.EventType.MESSAGE,v=>{var w;if(!f){const I=v.data[0];Ae(!!I);const y=I,g=y.error||((w=y[0])===null||w===void 0?void 0:w.error);if(g){W("Connection","WebChannel received error:",g);const b=g.status;let x=function(B){const U=Ve[B];if(U!==void 0)return nb(U)}(b),O=g.message;x===void 0&&(x=T.INTERNAL,O="Unknown error status: "+b+" with message "+g.message),f=!0,h.io(new j(x,O)),l.close()}else W("Connection","WebChannel received:",I),h.ro(I)}}),m(o,dC.STAT_EVENT,v=>{v.stat===wm.PROXY?W("Connection","Detected buffering proxy"):v.stat===wm.NOPROXY&&W("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function Rl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t){return new hA(t,!0)}class vb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n,r,i,s,o,a,c){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new vb(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new j(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rO extends yb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=pA(this.yt,e),r=function(i){if(!("targetChange"in i))return ne.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ne.min():s.readTime?dn(s.readTime):ne.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Ou(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=Iu(a)?{documents:yA(i,a)}:{query:bA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=lb(i,s.resumeToken):s.snapshotVersion.compareTo(ne.min())>0&&(o.readTime=Ya(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=_A(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Ou(this.yt),n.removeTarget=e,this.Bo(n)}}class iO extends yb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=vA(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.Zo(r,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ou(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gA(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class oO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(On(n),this.ou=!1):W("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ie(a);c._u.add(4),await Eo(c),c.gu.set("Unknown"),c._u.delete(4),await zc(c)}(this))})}),this.gu=new oO(r,i)}}async function zc(t){if(Qr(t))for(const e of t.wu)await e(!0)}async function Eo(t){for(const e of t.wu)await e(!1)}function bb(t,e){const n=ie(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ch(n)?ah(n):Xi(n).ko()&&oh(n,e))}function wb(t,e){const n=ie(t),r=Xi(n);n.du.delete(e),r.ko()&&_b(n,e),n.du.size===0&&(r.ko()?r.Fo():Qr(n)&&n.gu.set("Unknown"))}function oh(t,e){t.yu.Ot(e.targetId),Xi(t).zo(e)}function _b(t,e){t.yu.Ot(e),Xi(t).Ho(e)}function ah(t){t.yu=new cA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Xi(t).start(),t.gu.uu()}function ch(t){return Qr(t)&&!Xi(t).No()&&t.du.size>0}function Qr(t){return ie(t)._u.size===0}function Eb(t){t.yu=void 0}async function cO(t){t.du.forEach((e,n)=>{oh(t,e)})}async function lO(t,e){Eb(t),ch(t)?(t.gu.hu(e),ah(t)):t.gu.set("Unknown")}async function uO(t,e,n){if(t.gu.set("Online"),e instanceof cb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qa(t,r)}else if(e instanceof ga?t.yu.Kt(e):e instanceof ab?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ne.min()))try{const r=await gb(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(c);l&&i.du.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.du.get(a);if(!c)return;i.du.set(a,c.withResumeToken(pt.EMPTY_BYTE_STRING,c.snapshotVersion)),_b(i,a);const l=new Pr(c.target,a,1,c.sequenceNumber);oh(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Qa(t,r)}}async function Qa(t,e,n){if(!bo(e))throw e;t._u.add(1),await Eo(t),t.gu.set("Offline"),n||(n=()=>gb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await zc(t)})}function Ib(t,e){return e().catch(n=>Qa(t,n,e))}async function Kc(t){const e=ie(t),n=cr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;fO(e);)try{const i=await YA(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,hO(e,i)}catch(i){await Qa(e,i)}Tb(e)&&kb(e)}function fO(t){return Qr(t)&&t.fu.length<10}function hO(t,e){t.fu.push(e);const n=cr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Tb(t){return Qr(t)&&!cr(t).No()&&t.fu.length>0}function kb(t){cr(t).start()}async function dO(t){cr(t).eu()}async function mO(t){const e=cr(t);for(const n of t.fu)e.Xo(n.mutations)}async function pO(t,e,n){const r=t.fu.shift(),i=nh.from(r,e,n);await Ib(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kc(t)}async function gO(t,e){e&&cr(t).Yo&&await async function(n,r){if(i=r.code,rA(i)&&i!==T.ABORTED){const s=n.fu.shift();cr(n).Mo(),await Ib(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Kc(n)}var i}(t,e),Tb(t)&&kb(t)}async function Hm(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n._u.add(3),await Eo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await zc(n)}async function vO(t,e){const n=ie(t);e?(n._u.delete(2),await zc(n)):e||(n._u.add(2),await Eo(n),n.gu.set("Unknown"))}function Xi(t){return t.pu||(t.pu=function(e,n,r){const i=ie(e);return i.su(),new rO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:cO.bind(null,t),Zr:lO.bind(null,t),Wo:uO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),ch(t)?ah(t):t.gu.set("Unknown")):(await t.pu.stop(),Eb(t))})),t.pu}function cr(t){return t.Iu||(t.Iu=function(e,n,r){const i=ie(e);return i.su(),new iO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:dO.bind(null,t),Zr:gO.bind(null,t),tu:mO.bind(null,t),Zo:pO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Kc(t)):(await t.Iu.stop(),t.fu.length>0&&(W("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new lh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uh(t,e){if(On("AsyncQueue",`${e}: ${t}`),bo(t))return new j(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=cs(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.Tu=new Ye(K.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):J():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fi{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fi(e,n,bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.Au=void 0,this.listeners=[]}}class bO{constructor(){this.queries=new Qi(e=>Wy(e),Bc),this.onlineState="Unknown",this.Ru=new Set}}async function wO(t,e){const n=ie(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yO),i)try{s.Au=await n.onListen(r)}catch(o){const a=uh(o,`Initialization of query '${Su(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&fh(n)}async function _O(t,e){const n=ie(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function EO(t,e){const n=ie(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&fh(n)}function IO(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function fh(t){t.Ru.forEach(e=>{e.next()})}class TO{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.key=e}}class Cb{constructor(e){this.key=e}}class kO{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=le(),this.mutatedKeys=le(),this.Gu=zy(e),this.Qu=new bi(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Wm,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,f)=>{const h=i.get(u),m=eh(this.query,f)?f:null,v=!!h&&this.mutatedKeys.has(h.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;h&&m?h.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),I=!0):this.Hu(h,m)||(r.track({type:2,doc:m}),I=!0,(c&&this.Gu(m,c)>0||l&&this.Gu(m,l)<0)&&(a=!0)):!h&&m?(r.track({type:0,doc:m}),I=!0):h&&!m&&(r.track({type:1,doc:h}),I=!0,(c||l)&&(a=!0)),I&&(m?(o=o.add(m),s=w?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((l,u)=>function(f,h){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return m(f)-m(h)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,s.length!==0||c?{snapshot:new Fi(this.query,e.Qu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Wm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=le(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Cb(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Sb(r))}),n}tc(e){this.qu=e.Hi,this.Ku=le();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Fi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class SO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CO{constructor(e){this.key=e,this.nc=!1}}class AO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Qi(a=>Wy(a),Bc),this.rc=new Map,this.oc=new Set,this.uc=new Ye(K.comparator),this.cc=new Map,this.ac=new rh,this.hc={},this.lc=new Map,this.fc=Li.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function OO(t,e){const n=UO(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await QA(n.localStore,Dn(e));n.isPrimaryClient&&bb(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await DO(n,e,r,a==="current",o.resumeToken)}return i}async function DO(t,e,n,r,i){t._c=(f,h,m)=>async function(v,w,I,y){let g=w.view.Wu(I);g.$i&&(g=await Bm(v.localStore,w.query,!1).then(({documents:O})=>w.view.Wu(O,g)));const b=y&&y.targetChanges.get(w.targetId),x=w.view.applyChanges(g,v.isPrimaryClient,b);return Km(v,w.targetId,x.Xu),x.snapshot}(t,f,h,m);const s=await Bm(t.localStore,e,!0),o=new kO(e,s.Hi),a=o.Wu(s.documents),c=_o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);Km(t,n,l.Xu);const u=new SO(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function RO(t,e){const n=ie(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Bc(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Du(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),wb(n.remoteStore,r.targetId),Ru(n,r.targetId)}).catch(yo)):(Ru(n,r.targetId),await Du(n.localStore,r.targetId,!0))}async function xO(t,e,n){const r=jO(t);try{const i=await function(s,o){const a=ie(s),c=ze.now(),l=o.reduce((h,m)=>h.add(m.key),le());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let m=Rn(),v=le();return a.Gi.getEntries(h,l).next(w=>{m=w,m.forEach((I,y)=>{y.isValidDocument()||(v=v.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,m)).next(w=>{u=w;const I=[];for(const y of o){const g=eA(y,u.get(y.key).overlayedDocument);g!=null&&I.push(new mr(y.key,g,Vy(g.value.mapValue),hn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,I,o)}).next(w=>{f=w;const I=w.applyToLocalDocumentSet(u,v);return a.documentOverlayCache.saveOverlays(h,w.batchId,I)})}).then(()=>({batchId:f.batchId,changes:ib(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.hc[s.currentUser.toKey()];c||(c=new Ye(we)),c=c.insert(o,a),s.hc[s.currentUser.toKey()]=c}(r,i.batchId,n),await Io(r,i.changes),await Kc(r.remoteStore)}catch(i){const s=uh(i,"Failed to persist write");n.reject(s)}}async function Ab(t,e){const n=ie(t);try{const r=await KA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Ae(o.nc):i.removedDocuments.size>0&&(Ae(o.nc),o.nc=!1))}),await Io(n,r,e)}catch(r){await yo(r)}}function zm(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ie(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.bu(o)&&(c=!0)}),c&&fh(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NO(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ye(K.comparator);o=o.insert(s,lt.newNoDocument(s,ne.min()));const a=le().add(s),c=new Hc(ne.min(),new Map,new Ke(we),o,a);await Ab(r,c),r.uc=r.uc.remove(s),r.cc.delete(e),hh(r)}else await Du(r.localStore,e,!1).then(()=>Ru(r,e,n)).catch(yo)}async function PO(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await zA(n.localStore,e);Db(n,r,null),Ob(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Io(n,i)}catch(i){await yo(i)}}async function MO(t,e,n){const r=ie(t);try{const i=await function(s,o){const a=ie(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ae(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);Db(r,e,n),Ob(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Io(r,i)}catch(i){await yo(i)}}function Ob(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Db(t,e,n){const r=ie(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Rb(t,r)})}function Rb(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(wb(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),hh(t))}function Km(t,e,n){for(const r of n)r instanceof Sb?(t.ac.addReference(r.key,e),LO(t,r)):r instanceof Cb?(W("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Rb(t,r.key)):J()}function LO(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(W("SyncEngine","New document in limbo: "+n),t.oc.add(r),hh(t))}function hh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new K(xe.fromString(e)),r=t.fc.next();t.cc.set(r,new CO(n)),t.uc=t.uc.insert(n,r),bb(t.remoteStore,new Pr(Dn(qy(n.path)),r,2,Yf.at))}}async function Io(t,e,n){const r=ie(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=sh.Ci(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,c){const l=ie(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,f=>A.forEach(f.Si,h=>l.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>A.forEach(f.Di,h=>l.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!bo(u))throw u;W("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const h=l.qi.get(f),m=h.snapshotVersion,v=h.withLastLimboFreeSnapshotVersion(m);l.qi=l.qi.insert(f,v)}}}(r.localStore,s))}async function FO(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await pb(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new j(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Io(n,r.ji)}}function $O(t,e){const n=ie(t),r=n.cc.get(e);if(r&&r.nc)return le().add(r.key);{let i=le();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function UO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$O.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NO.bind(null,e),e.sc.Wo=EO.bind(null,e.eventManager),e.sc.wc=IO.bind(null,e.eventManager),e}function jO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MO.bind(null,e),e}class BO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return WA(this.persistence,new qA,e.initialUser,this.yt)}yc(e){return new BA(ih.Bs,this.yt)}gc(e){return new JA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FO.bind(null,this.syncEngine),await vO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bO}createDatastore(e){const n=Wc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new nO(i));var i;return function(s,o,a,c){return new sO(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>zm(this.syncEngine,a,0),o=qm.C()?new qm:new ZA,new aO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new AO(r,i,s,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ie(e);W("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Eo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t,e,n){if(!n)throw new j(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qO(t,e,n,r){if(e===!0&&r===!0)throw new j(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Gm(t){if(!K.isDocumentKey(t))throw new j(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ym(t){if(K.isDocumentKey(t))throw new j(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Ur(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new j(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Map;class Xm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,qO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gC;switch(n.type){case"gapi":const r=n.client;return new wC(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Qm.get(e);n&&(W("ComponentProvider","Removing Datastore"),Qm.delete(e),n.terminate())}(this),Promise.resolve()}}function HO(t,e,n,r={}){var i;const s=(t=Ur(t,Yc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&wu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=at.MOCK_USER;else{o=JT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new at(c)}t._authCredentials=new vC(new Ry(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class ir extends Xr{constructor(e,n,r){super(e,n,qy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new K(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Ws(t,e,...n){if(t=Ze(t),xb("collection","path",e),t instanceof Yc){const r=xe.fromString(e,...n);return Ym(r),new ir(t,null,r)}{if(!(t instanceof Tt||t instanceof ir))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Ym(r),new ir(t.firestore,null,r)}}function zs(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=xy.R()),xb("doc","path",e),t instanceof Yc){const r=xe.fromString(e,...n);return Gm(r),new Tt(t,null,new K(r))}{if(!(t instanceof Tt||t instanceof ir))throw new j(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return Gm(r),new Tt(t.firestore,t instanceof ir?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=xy.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function KO(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function GO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YO(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Hm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Hm(e.remoteStore,s)),t.onlineComponents=e}async function YO(t){return t.offlineComponents||(W("FirestoreClient","Using default OfflineComponentProvider"),await KO(t,new BO)),t.offlineComponents}async function Nb(t){return t.onlineComponents||(W("FirestoreClient","Using default OnlineComponentProvider"),await GO(t,new VO)),t.onlineComponents}function QO(t){return Nb(t).then(e=>e.syncEngine)}async function XO(t){const e=await Nb(t),n=e.eventManager;return n.onListen=OO.bind(null,e.syncEngine),n.onUnlisten=RO.bind(null,e.syncEngine),n}function JO(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new WO({next:f=>{s.enqueueAndForget(()=>_O(i,u)),f.fromCache&&a.source==="server"?c.reject(new j(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new TO(o,l,{includeMetadataChanges:!0,Nu:!0});return wO(i,u)}(await XO(t),t.asyncQueue,e,n,r)),r.promise}class ZO{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new vb(this,"async_queue_retry"),this.Wc=()=>{const n=Rl();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Rl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new rr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!bo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=lh.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&J()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Qc extends Yc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ZO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mb(this),this._firestoreClient.terminate()}}function To(t,e){const n=typeof t=="object"?t:Sf(),r=typeof t=="string"?t:e||"(default)",i=Kr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YT("firestore");s&&HO(i,...s)}return i}function Pb(t){return t._firestoreClient||Mb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Mb(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new DC(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zO(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $i(pt.fromBase64String(e))}catch(n){throw new j(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $i(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=/^__.*__$/;class tD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wo(e,this.data,n,this.fieldTransforms)}}class Lb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ph{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Xa(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Fb(this.sa)&&eD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class nD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Wc(e)}da(e,n,r,i=!1){return new ph({sa:e,methodName:n,fa:r,path:ft.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function gh(t){const e=t._freezeSettings(),n=Wc(t._databaseId);return new nD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);vh("Data must be an object, but it was:",o,r);const a=$b(r,o);let c,l;if(s.merge)c=new Lt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=xu(e,f,n);if(!o.contains(h))throw new j(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);jb(u,h)||u.push(h)}c=new Lt(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new tD(new Et(a),c,l)}class Jc extends dh{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}function iD(t,e,n,r){const i=t.da(1,e,n);vh("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();Yr(r,(c,l)=>{const u=yh(e,c,n);l=Ze(l);const f=i.ca(u);if(l instanceof Jc)s.push(u);else{const h=ko(l,f);h!=null&&(s.push(u),o.set(u,h))}});const a=new Lt(s);return new Lb(o,a,i.fieldTransforms)}function sD(t,e,n,r,i,s){const o=t.da(1,e,n),a=[xu(e,r,n)],c=[i];if(s.length%2!=0)throw new j(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(xu(e,s[h])),c.push(s[h+1]);const l=[],u=Et.empty();for(let h=a.length-1;h>=0;--h)if(!jb(l,a[h])){const m=a[h];let v=c[h];v=Ze(v);const w=o.ca(m);if(v instanceof Jc)l.push(m);else{const I=ko(v,w);I!=null&&(l.push(m),u.set(m,I))}}const f=new Lt(l);return new Lb(u,f,o.fieldTransforms)}function oD(t,e,n,r=!1){return ko(n,t.da(r?4:3,e))}function ko(t,e){if(Ub(t=Ze(t)))return vh("Unsupported field value:",e,t),$b(t,e);if(t instanceof dh)return function(n,r){if(!Fb(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ko(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return GC(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ze.fromDate(n);return{timestampValue:Ya(r.yt,i)}}if(n instanceof ze){const i=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ya(r.yt,i)}}if(n instanceof mh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $i)return{bytesValue:lb(r.yt,n._byteString)};if(n instanceof Tt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:th(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Gc(n)}`)}(t,e)}function $b(t,e){const n={};return Ny(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,i)=>{const s=ko(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ub(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof mh||t instanceof $i||t instanceof Tt||t instanceof dh)}function vh(t,e,n){if(!Ub(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Gc(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function xu(t,e,n){if((e=Ze(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return yh(t,e);throw Xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const aD=new RegExp("[~\\*/\\[\\]]");function yh(t,e,n){if(e.search(aD)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xc(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new j(T.INVALID_ARGUMENT,a+t+c)}function jb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cD extends Bb{data(){return super.data()}}function bh(t,e){return typeof e=="string"?yh(t,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wh{}class Vb extends wh{}function Ks(t,e,...n){let r=[];e instanceof wh&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Eh).length,o=i.filter(a=>a instanceof _h).length;if(s>1||s>0&&o>0)throw new j(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _h extends Vb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _h(e,n,r)}_apply(e){const n=this._parse(e);return qb(e._query,n),new Xr(e.firestore,e.converter,Tu(e._query,n))}_parse(e){const n=gh(e.firestore);return function(i,s,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new j(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Zm(u,l);const h=[];for(const m of u)h.push(Jm(a,i,m));f={arrayValue:{values:h}}}else f=Jm(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Zm(u,l),f=oD(o,s,u,l==="in"||l==="not-in");return He.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Eh extends wh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)qb(s,a),s=Tu(s,a)}(e._query,n),new Xr(e.firestore,e.converter,Tu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ih extends Vb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ih(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new j(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new j(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new vi(i,s);return function(a,c){if(Zf(a)===null){const l=jc(a);l!==null&&Hb(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new Xr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Yi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Th(t,e="asc"){const n=e,r=bh("orderBy",t);return Ih._create(r,n)}function Jm(t,e,n){if(typeof(n=Ze(n))=="string"){if(n==="")throw new j(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hy(e)&&n.indexOf("/")!==-1)throw new j(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(xe.fromString(n));if(!K.isDocumentKey(r))throw new j(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return km(t,new K(r))}if(n instanceof Tt)return km(t,n._key);throw new j(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gc(n)}.`)}function Zm(t,e){if(!Array.isArray(t)||t.length===0)throw new j(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new j(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function qb(t,e){if(e.isInequality()){const r=jc(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new j(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Zf(t);s!==null&&Hb(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Hb(t,e,n){if(!n.isEqual(e))throw new j(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class uD{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const r={};return Yr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mh(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=My(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bs(e));default:return null}}convertTimestamp(e){const n=ar(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);Ae(mb(r));const i=new js(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hD extends Bb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class va extends hD{data(e={}){return super.data(e)}}class dD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new va(this._firestore,this._userDataWriter,r.key,r,new Yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:mD(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class pD extends uD{constructor(e){super(),this.firestore=e}convertBytes(e){return new $i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function Gs(t){t=Ur(t,Xr);const e=Ur(t.firestore,Qc),n=Pb(e),r=new pD(e);return lD(t._query),JO(n,t._query).then(i=>new dD(e,r,t,i))}function Wb(t,e,n){t=Ur(t,Tt);const r=Ur(t.firestore,Qc),i=fD(t.converter,e,n);return zb(r,[rD(gh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function Nu(t,e,n,...r){t=Ur(t,Tt);const i=Ur(t.firestore,Qc),s=gh(i);let o;return o=typeof(e=Ze(e))=="string"||e instanceof Xc?sD(s,"updateDoc",t._key,e,n,r):iD(s,"updateDoc",t._key,e),zb(i,[o.toMutation(t._key,hn.exists(!0))])}function zb(t,e){return function(n,r){const i=new rr;return n.asyncQueue.enqueueAndForget(async()=>xO(await QO(n),r,i)),i.promise}(Pb(t),e)}(function(t,e=!0){(function(n){Gi=n})(ao),vn(new Xt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Qc(new yC(n.getProvider("auth-internal")),new EC(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new j(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new js(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Mt(_m,"3.8.0",t),Mt(_m,"3.8.0","esm2017")})();const gD=tt({name:"BookingDay",props:{todaysDate:String,date:String},emits:["onDateUpdate","onDateObj"],async setup(t,{emit:e}){const n=fe(null),r=fe(t.todaysDate),i=fe(t.todaysDate),s=Wi(),o=To();pf(()=>{u(t.todaysDate),s.editObject.date===t.date&&n.value!=null&&n.value.scrollIntoView({behavior:"smooth",inline:"center"}),t.todaysDate===t.date&&n.value!=null&&n.value.scrollIntoView({behavior:"smooth",inline:"center"})});const a=Ks(Ws(o,"calender"),Th("timeID")),l=(await Gs(a)).docs.map(h=>h.data());function u(h){i.value=h;const m=l.map(g=>g["07:00 till 11:00"]).filter(g=>g.date===i.value),v=l.map(g=>g["11:00 till 15:00"]).filter(g=>g.date===i.value),w=l.map(g=>g["15:00 till 19:00"]).filter(g=>g.date===i.value),I=l.map(g=>g["19:00 till 23:00"]).filter(g=>g.date===i.value),y=m.concat(v,w,I);e("onDateObj",y),e("onDateUpdate",i.value)}s.editObject.date?r.value=s.editObject.date:r.value=t.todaysDate;const f=Re(()=>`${r.value}`===t.date);return{input:n,activeDate:f,dateUpdate:u}}}),vD={class:"flex relative"},yD=["value","checked"],bD={class:"booking-day-item"};function wD(t,e,n,r,i,s){return be(),Fe("label",vD,[R("input",{class:"peer absolute invisible right-16 z-10",ref:"input",value:t.date,type:"radio",name:"day",checked:t.activeDate,onChange:e[0]||(e[0]=o=>t.dateUpdate(t.date))},null,40,yD),R("div",bD,fn(t.date),1)])}const Kb=$t(gD,[["render",wD]]),_D=tt({name:"BookingSlot",components:{BookingDate:Kb},emit:[],props:{dateObject:Object},async setup(t,{emit:e}){const n=Wi(),r=JSON.parse(sessionStorage.getItem("uid")||"{}"),i=fe();Rr(()=>t.dateObject,()=>{i.value=t.dateObject});function s(o){e("onTimeObj",o.target.value),console.log(o.target.value)}return pf(()=>{}),{timeUpdate:s,refDateObject:i,uid:r,userStore:n}}}),ED={className:"booking-time-grid"},ID={className:""},TD=["value","disabled"];function kD(t,e,n,r,i,s){return be(),Fe("div",ED,[(be(!0),Fe(ct,null,gf(t.dateObject,(o,a)=>(be(),Fe("div",{key:`dag_${a}`},[R("label",ID,[R("input",{required:"",value:o.time,type:"radio",class:"hidden peer",name:"time",onChange:e[0]||(e[0]=(...c)=>t.timeUpdate&&t.timeUpdate(...c)),disabled:o.userid!==null},null,40,TD),R("div",{class:ro(["booking-time-item",{"time-free":o.bookingid===null,"time-booked":o.bookingid!==null&&o.userid!==t.uid,"time-you":o.userid===t.uid,[`${o.bookingid} animate-pulse bg-warning`]:t.userStore.editObject.bookingid===o.bookingid}])},fn(o.time),3)])]))),128))])}const SD=$t(_D,[["render",kD]]);var CD={lessThanXSeconds:{one:"mindre än en sekund",other:"mindre än {{count}} sekunder"},xSeconds:{one:"en sekund",other:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{one:"mindre än en minut",other:"mindre än {{count}} minuter"},xMinutes:{one:"en minut",other:"{{count}} minuter"},aboutXHours:{one:"ungefär en timme",other:"ungefär {{count}} timmar"},xHours:{one:"en timme",other:"{{count}} timmar"},xDays:{one:"en dag",other:"{{count}} dagar"},aboutXWeeks:{one:"ungefär en vecka",other:"ungefär {{count}} vecka"},xWeeks:{one:"en vecka",other:"{{count}} vecka"},aboutXMonths:{one:"ungefär en månad",other:"ungefär {{count}} månader"},xMonths:{one:"en månad",other:"{{count}} månader"},aboutXYears:{one:"ungefär ett år",other:"ungefär {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"över ett år",other:"över {{count}} år"},almostXYears:{one:"nästan ett år",other:"nästan {{count}} år"}},AD=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"],OD=function(e,n,r){var i,s=CD[e];return typeof s=="string"?i=s:n===1?i=s.one:r&&r.onlyNumeric?i=s.other.replace("{{count}}",String(n)):i=s.other.replace("{{count}}",n<13?AD[n]:String(n)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"om "+i:i+" sedan":i};const DD=OD;var RD={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"y-MM-dd"},xD={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ND={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},PD={date:gi({formats:RD,defaultWidth:"full"}),time:gi({formats:xD,defaultWidth:"full"}),dateTime:gi({formats:ND,defaultWidth:"full"})};const MD=PD;var LD={lastWeek:"'i' EEEE's kl.' p",yesterday:"'igår kl.' p",today:"'idag kl.' p",tomorrow:"'imorgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},FD=function(e,n,r,i){return LD[e]};const $D=FD;var UD={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},jD={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},BD={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},VD={narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},qD={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},HD={narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},WD=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:case 2:return r+":a"}return r+":e"},zD={ordinalNumber:WD,era:an({values:UD,defaultWidth:"wide"}),quarter:an({values:jD,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:an({values:BD,defaultWidth:"wide"}),day:an({values:VD,defaultWidth:"wide"}),dayPeriod:an({values:qD,defaultWidth:"wide",formattingValues:HD,defaultFormattingWidth:"wide"})};const KD=zD;var GD=/^(\d+)(:a|:e)?/i,YD=/\d+/i,QD={narrow:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,abbreviated:/^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,wide:/^(före Kristus|före vår tid|efter Kristus|vår tid)/i},XD={any:[/^f/i,/^[ev]/i]},JD={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](:a|:e)? kvartalet/i},ZD={any:[/1/i,/2/i,/3/i,/4/i]},eR={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,wide:/^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i},tR={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},nR={narrow:/^[smtofl]/i,short:/^(sö|må|ti|on|to|fr|lö)/i,abbreviated:/^(sön|mån|tis|ons|tors|fre|lör)/i,wide:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},rR={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},iR={any:/^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i},sR={any:{am:/^f/i,pm:/^e/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/eftermiddag/i,evening:/kväll/i,night:/natt/i}},oR={ordinalNumber:mv({matchPattern:GD,parsePattern:YD,valueCallback:function(e){return parseInt(e,10)}}),era:cn({matchPatterns:QD,defaultMatchWidth:"wide",parsePatterns:XD,defaultParseWidth:"any"}),quarter:cn({matchPatterns:JD,defaultMatchWidth:"wide",parsePatterns:ZD,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:cn({matchPatterns:eR,defaultMatchWidth:"wide",parsePatterns:tR,defaultParseWidth:"any"}),day:cn({matchPatterns:nR,defaultMatchWidth:"wide",parsePatterns:rR,defaultParseWidth:"any"}),dayPeriod:cn({matchPatterns:iR,defaultMatchWidth:"any",parsePatterns:sR,defaultParseWidth:"any"})};const aR=oR;var cR={code:"sv",formatDistance:DD,formatLong:MD,formatRelative:$D,localize:KD,match:aR,options:{weekStartsOn:1,firstWeekContainsDate:4}};const sn=cR,lR=tt({name:"Menu-item",setup(){const t=Hi(),e=Wi(),n=fe(!1);function r(){sessionStorage.clear(),t.push({path:"/login"})}return{showMenu:n,SignOut:r,userStore:e}}}),uR=tt({name:"Booking-component",components:{BookingDate:Kb,BookingTime:SD,Meny:lR},async setup(){const t=Hi(),e=Wi(),n=To(),r=JSON.parse(sessionStorage.getItem("uid")||"{}"),i=fe(new Date).value,s=fe(rn(i,"eeee d MMMM",{locale:sn})).value,o=fe(!1),a=fe(!1),c=fe(""),l=fe(),u=fe(s),f=fe("Boka tid");e.editObject.date&&(u.value=e.editObject.date,c.value=e.editObject.time),e.editObject.date&&(o.value=!0,f.value="Ändra tid");const h=O=>{u.value=O},m=O=>{c.value=O},v=O=>{l.value=O},w=Ks(Ws(n,"calender"),Th("timeID")),y=(await Gs(w)).docs.map(O=>O.data());async function g(){const O=Ks(Ws(n,"calender"));(await Gs(O)).docs.map(oe=>oe.data()).filter(oe=>{if(oe.date===u.value)return oe}).map(oe=>oe[`${c.value}`].bookingid)[0]!=null?console.log("välj ett annat datum"):(a.value=!0,console.log("please confirm"))}async function b(){const O=zs(n,"calender",u.value);if(await Nu(O,{[`${c.value}`]:{userid:r,bookingid:$T(),time:c.value,date:u.value}}),console.log("you have booked"),a.value=!1,e.editObject.date){const B=zs(n,"calender",e.editObject.date);await Nu(B,{[e.editObject.time]:{userid:null,bookingid:null,time:e.editObject.time,date:e.editObject.date}})}o.value===!0&&t.push({path:"/user"})}function x(){e.$reset(),o.value=!1,f.value="Boka tid"}return{submitBooking:b,dateDocs:y,timeValue:c,dateValue:u,BookingDayData:h,handleEdit:o,readybook:a,handleConfirm:g,DateObj:v,dateObject:l,BookingTimeData:m,thisDayDate:s,btnMsg:f,abortEdit:x}}}),fR={class:"screen-col-standard"},hR={class:"hero"},dR=R("h1",null,"Tidsbokning",-1),mR=R("h4",null,"Välkommen",-1),pR={class:"booking-container"},gR={class:"p-6 text-2xl text-white"},vR={key:0},yR={key:1,class:"text-inherit"},bR={class:"flex flex-col items-center justify-center"},wR={id:"date",class:"booking-day"},_R={class:"booking-day-chevron-l"},ER={class:"booking-day-chevron-r"},IR=R("span",{class:"divider"},null,-1),TR={class:""},kR={class:"guide-container"},SR={class:"flex items-center"},CR=R("p",{class:"ml-2"},"Ledig tider",-1),AR={class:"flex items-center"},OR=R("p",{class:"ml-2"},"Bokat",-1),DR={class:"flex items-center"},RR=R("p",{class:"ml-2"},"Dina bokningar",-1),xR={class:"btn-container"},NR=["value","disabled"],PR={key:1,class:"btn-empty-lg"},MR={key:0,className:"booking-confirm-container "},LR={class:"flex flex-col self-start gap-1"},FR=R("h2",{class:"text-3xl"},"Bekräfta bokning",-1),$R=R("h3",null,"Vill du boka denna tid?",-1),UR=R("h5",null,null,-1),jR={class:"btn-container"},BR={class:"btn-clean-lg"};function VR(t,e,n,r,i,s){const o=It("font-awesome-icon"),a=It("BookingDate"),c=It("BookingTime"),l=It("fig");return be(),Fe("div",fR,[R("div",hR,[dR,mR,R("h4",null,fn(t.thisDayDate),1)]),R("div",pR,[R("div",gR,[t.handleEdit?(be(),Fe("h2",vR,"Ändra tid")):(be(),Fe("h2",yR,"Välj tid för att boka"))]),R("form",bR,[R("div",wR,[R("div",_R,[he(o,{icon:"fa-solid fa-chevron-left"})]),(be(),Si(Ca,null,{default:Wt(()=>[(be(!0),Fe(ct,null,gf(t.dateDocs,(u,f)=>(be(),Fe("div",{key:`dag_${f}`},[he(a,{todaysDate:t.dateValue,date:u.date,onOnDateUpdate:t.BookingDayData,onOnDateObj:t.DateObj},null,8,["todaysDate","date","onOnDateUpdate","onOnDateObj"])]))),128))]),_:1})),R("div",ER,[he(o,{icon:"fa-solid fa-chevron-right"})])]),IR,R("div",TR,[(be(),Si(Ca,null,{default:Wt(()=>[he(c,{onOnTimeObj:t.BookingTimeData,dateObject:t.dateObject},null,8,["onOnTimeObj","dateObject"])]),_:1}))]),R("div",kR,[R("div",SR,[he(l,{class:"guide-bullet border border-white border-opacity-50"}),CR]),R("div",AR,[he(l,{class:"guide-bullet bg-error"}),OR]),R("div",DR,[he(l,{class:"guide-bullet bg-success"}),RR])]),R("div",xR,[R("input",{type:"button",value:`${t.btnMsg}`,disabled:t.timeValue.length<1,class:ro([{"bg-gray-500 text-gray-600":t.timeValue.length<1,"bg-success":t.timeValue.length>1},"btn-primary-lg"]),onClick:e[0]||(e[0]=wf(u=>t.handleConfirm(),["prevent"]))},null,10,NR),t.handleEdit===!0?(be(),Fe("input",{key:0,type:"button",onClick:e[1]||(e[1]=(...u)=>t.abortEdit&&t.abortEdit(...u)),class:"btn-clean-lg text-white",value:"avbryt"})):fa("",!0),t.handleEdit===!1?(be(),Fe("div",PR)):fa("",!0)])]),t.readybook?(be(),Fe("div",MR,[R("div",LR,[FR,$R,R("h5",null,fn(t.timeValue)+" "+fn(t.dateValue),1),UR]),R("div",jR,[R("input",{type:"button",class:"btn-primary-lg",onClick:e[2]||(e[2]=u=>t.submitBooking()),value:"Ja, boka!"}),R("div",BR,[R("button",{onClick:e[3]||(e[3]=u=>t.readybook=!1)},"Avbryt")])])])):fa("",!0)])])}const qR=$t(uR,[["render",VR]]),HR=tt({components:{},name:"AddNewDay",setup(){const t=To(),e=fe(new Date).value;async function n(){const r=pv(e),i=qn(e,r),s=fe(rn(i,"eeee d MMM, Y",{locale:sn})).value,o=Ks(Ws(t,"calender"));if((await Gs(o)).docs.map(u=>u.data()).map(u=>u.date).includes(s)){console.log("already a day with same date");return}else console.log("lets add day"),await Wb(zs(t,"calender",`${s}`),{date:s,timeID:i.toISOString(),["07:00 till 11:00"]:{time:"07:00 till 11:00",userid:null,bookingid:null,date:s},["11:00 till 15:00"]:{time:"11:00 till 15:00",userid:null,bookingid:null,date:s},["15:00 till 19:00"]:{time:"15:00 till 19:00",userid:null,bookingid:null,date:s},["19:00 till 23:00"]:{time:"19:00 till 23:00",userid:null,bookingid:null,date:s}})}return setInterval(()=>{n()},864023523),{addNewDay:n}}});function WR(t,e,n,r,i,s){return be(),Fe("button",{onClick:e[0]||(e[0]=(...o)=>t.addNewDay&&t.addNewDay(...o))},"add new day")}const zR=$t(HR,[["render",WR]]),KR=tt({name:"Calender-s",async setup(){const t=To(),e=fe(new Date).value,n=rn(Gd(e),"eeee d MMMM",{locale:sn});console.log(n);async function r(){const i=pv(e),s=Gd(e);for(let o=0;o<i;o++){const a=fe(rn(qn(s,o),"eeee d MMMM",{locale:sn})).value,c=fe(qn(s,o)).value;await Wb(zs(t,"calender",`${a}`),{date:rn(qn(s,o),"eeee d MMMM",{locale:sn}),timeID:c.toISOString(),["07:00 till 11:00"]:{time:"07:00 till 11:00",userid:null,bookingid:null,date:rn(qn(s,o),"eeee d MMMM",{locale:sn})},["11:00 till 15:00"]:{time:"11:00 till 15:00",userid:null,bookingid:null,date:rn(qn(s,o),"eeee d MMMM",{locale:sn})},["15:00 till 19:00"]:{time:"15:00 till 19:00",userid:null,bookingid:null,date:rn(qn(s,o),"eeee d MMMM",{locale:sn})},["19:00 till 23:00"]:{time:"19:00 till 23:00",userid:null,bookingid:null,date:rn(qn(s,o),"eeee d MMMM",{locale:sn})}})}}return{createDate:r}},components:{AddNewDay:zR}});function GR(t,e,n,r,i,s){const o=It("AddNewDay");return be(),Fe(ct,null,[he(o),R("button",{onClick:e[0]||(e[0]=(...a)=>t.createDate&&t.createDate(...a))},"createDate (warning!)")],64)}const YR=$t(KR,[["render",GR]]),QR=tt({name:"UserPage",async setup(){const t=fe(new Date).value,e=fe(rn(t,"eeee d MMMM",{locale:sn})).value,n=Hi(),r=To(),i=JSON.parse(sessionStorage.getItem("uid")||""),s=Wi(),{BookingObject:o}=aE(s),a=fe();s.$reset();const c=Ks(Ws(r,"calender"),Th("timeID")),u=(await Gs(c)).docs.map(b=>b.data()),f=u.map(b=>b["07:00 till 11:00"]).filter(b=>b.userid===i),h=u.map(b=>b["11:00 till 15:00"]).filter(b=>b.userid===i),m=u.map(b=>b["15:00 till 19:00"]).filter(b=>b.userid===i),v=u.map(b=>b["19:00 till 23:00"]).filter(b=>b.userid===i),w=f.concat(h,m,v);console.log(w);const I=b=>{const x=fe(b.target.id).value,O=Object(w.filter(B=>B.bookingid===x));a.value=O[0],s.addBookingObj(O[0])};async function y(){console.log(a.value.date);const b=zs(r,"calender",a.value.date);await Nu(b,{[a.value.time]:{userid:null,bookingid:null,time:a.value.time,date:a.value.date}}),s.$reset(),n.push({path:"/home"})}function g(){console.log(s.editObject.date),s.editObject.date&&n.push({path:"/home"})}return{findBookings:w,handleActiveBooking:I,handleRemove:y,handleEdit:g,BookingObject:o,thisDayDate:e}},components:{}}),XR={class:"screen-col-standard"},JR={class:"hero"},ZR=R("h1",null,"Mina tvättider",-1),ex=R("h4",null,"Här finns dina tvättider",-1),tx={class:"booking-container w-screen"},nx=R("div",{class:"p-6 text-2xl text-white"},[R("h2",null,"Dina senaste bokningar")],-1),rx={class:"userPage-item-container"},ix=["id"],sx={class:"userPage-item"},ox={class:"btn-container items-center"};function ax(t,e,n,r,i,s){return be(),Fe("div",XR,[R("div",JR,[ZR,ex,R("h4",null,fn(t.thisDayDate),1)]),R("div",tx,[nx,R("div",rx,[(be(!0),Fe(ct,null,gf(t.findBookings,o=>(be(),Fe("div",{onClick:e[0]||(e[0]=(...a)=>t.handleActiveBooking&&t.handleActiveBooking(...a)),class:""},[R("label",null,[R("input",{name:"user",type:"radio",class:"hidden peer",id:o.bookingid},null,8,ix),R("div",sx,fn(o.date)+" "+fn(o.time),1)])]))),256))]),R("div",ox,[R("button",{class:"btn-primary-lg",onClick:e[1]||(e[1]=(...o)=>t.handleEdit&&t.handleEdit(...o))},"Ändra"),R("button",{class:"btn-remove-lg",onClick:e[2]||(e[2]=(...o)=>t.handleRemove&&t.handleRemove(...o))},"Avboka")])])])}const cx=$t(QR,[["render",ax]]),lx=tt({name:"User",setup(){},components:{UserPage:cx,Meny:Ef}});function ux(t,e,n,r,i,s){const o=It("Meny"),a=It("UserPage");return be(),Fe(ct,null,[he(o),(be(),Si(Ca,null,{default:Wt(()=>[he(a)]),_:1}))],64)}const Gb=$t(lx,[["render",ux]]),fx=tt({name:"Home",setup(){const t=Hi();return JSON.parse(sessionStorage.getItem("uid")||"{}")||t.push({path:"/login"}),{}},components:{Meny:Ef,Calender:YR,Booking:qR,User:Gb}});function hx(t,e,n,r,i,s){const o=It("Meny"),a=It("Booking");return be(),Fe(ct,null,[he(o),(be(),Si(Ca,null,{default:Wt(()=>[he(a)]),_:1}))],64)}const dx=$t(fx,[["render",hx]]);function kh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Yb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mx=Yb,Qb=new zr("auth","Firebase",Yb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new Ic("@firebase/auth");function ya(t,...e){ep.logLevel<=ye.ERROR&&ep.error(`Auth (${ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw Sh(t,...e)}function mn(t,...e){return Sh(t,...e)}function px(t,e,n){const r=Object.assign(Object.assign({},mx()),{[e]:n});return new zr("auth","Firebase",r).create(e,{appName:t.name})}function Sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qb.create(t,...e)}function X(t,e,...n){if(!t)throw Sh(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ya(e),new Error(e)}function xn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=new Map;function In(t){xn(t instanceof Function,"Expected a class definition");let e=tp.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t,e){const n=Kr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xs(s,e??{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function vx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yx(){return np()==="http:"||np()==="https:"}function np(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yx()||bv()||"connection"in navigator)?navigator.onLine:!0}function wx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=BT()||VT()}get(){return bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex=new So(3e4,6e4);function Co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ao(t,e,n,r,i={}){return Jb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Xb.fetch()(Zb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Jb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_x),e);try{const i=new Ix(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw px(t,u,l);Zt(t,u)}}catch(i){if(i instanceof en)throw i;Zt(t,"network-request-failed")}}async function Oo(t,e,n,r,i={}){const s=await Ao(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Zb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ch(t.config,i):`${t.config.apiScheme}://${i}`}class Ix{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),Ex.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e){return Ao(t,"POST","/v1/accounts:delete",e)}async function kx(t,e){return Ao(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sx(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),i=Ah(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(xl(i.auth_time)),issuedAtTime:bs(xl(i.iat)),expirationTime:bs(xl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xl(t){return Number(t)*1e3}function Ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ya("JWT malformed, contained fewer than 3 sections"),null;try{const i=yv(n);return i?JSON.parse(i):(ya("Failed to decode base64 JWT payload"),null)}catch(i){return ya("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Cx(t){const e=Ah(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof en&&Ax(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ax({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ys(t,kx(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xx(s.providerUserInfo):[],a=Rx(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new e0(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Dx(t){const e=Ze(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xx(t){return t.map(e=>{var{providerId:n}=e,r=kh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(t,e){const n=await Jb(t,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Zb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Nx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new e0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sx(this,e)}reload(){return Dx(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ys(this,Tx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:x,isAnonymous:O,providerData:B,stsTokenManager:U}=n;X(b&&U,e,"internal-error");const G=Qs.fromJSON(this.name,U);X(typeof b=="string",e,"internal-error"),Bn(f,e.name),Bn(h,e.name),X(typeof x=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),Bn(m,e.name),Bn(v,e.name),Bn(w,e.name),Bn(I,e.name),Bn(y,e.name),Bn(g,e.name);const se=new Mr({uid:b,auth:e,email:h,emailVerified:x,displayName:f,isAnonymous:O,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:G,createdAt:y,lastLoginAt:g});return B&&Array.isArray(B)&&(se.providerData=B.map(oe=>Object.assign({},oe))),I&&(se._redirectEventId=I),se}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qs;i.updateFromServerResponse(n);const s=new Mr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ja(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}t0.type="NONE";const rp=t0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e,n){return`firebase:${t}:${e}:${n}`}class wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ba(this.userKey,i.apiKey,s),this.fullPersistenceKey=ba("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new wi(In(rp),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||In(rp);const o=ba(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Mr._fromJSON(e,u);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new wi(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new wi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(n0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o0(e))return"Blackberry";if(a0(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||r0(e))&&!e.includes("edge/"))return"Chrome";if(s0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function n0(t=mt()){return/firefox\//i.test(t)}function Oh(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r0(t=mt()){return/crios\//i.test(t)}function i0(t=mt()){return/iemobile/i.test(t)}function s0(t=mt()){return/android/i.test(t)}function o0(t=mt()){return/blackberry/i.test(t)}function a0(t=mt()){return/webos/i.test(t)}function Zc(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Px(t=mt()){var e;return Zc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mx(){return qT()&&document.documentMode===10}function c0(t=mt()){return Zc(t)||s0(t)||a0(t)||o0(t)||/windows phone/i.test(t)||i0(t)}function Lx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e=[]){let n;switch(t){case"Browser":n=ip(mt());break;case"Worker":n=`${ip(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ao}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new Fx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qb,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=l0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Do(t){return Ze(t)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=rk(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ux(t,e,n){const r=Do(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=u0(e),{host:o,port:a}=jx(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Bx()}function u0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jx(t){const e=u0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:op(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:op(o)}}}function op(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function Vx(t,e){return Ao(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qx(t,e){return Oo(t,"POST","/v1/accounts:signInWithPassword",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}async function Wx(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Dh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hx(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vx(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wx(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return Oo(t,"POST","/v1/accounts:signInWithIdp",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="http://localhost";class jr extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:zx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gx(t){const e=is(ss(t)).link,n=e?is(ss(e)).deep_link_id:null,r=is(ss(t)).deep_link_id;return(r?is(ss(r)).link:null)||r||n||e||t}class Rh{constructor(e){var n,r,i,s,o,a;const c=is(ss(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Kx((i=c.mode)!==null&&i!==void 0?i:null);X(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Gx(e);try{return new Rh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return Xs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rh.parseLink(n);return X(r,"argument-error"),Xs._fromEmailAndCode(e,r.code,r.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends f0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Ro{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ro{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Ro{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(t,e){return Oo(t,"POST","/v1/accounts:signUp",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mr._fromIdTokenResponse(e,r,i),o=ap(r);return new Br({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ap(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends en{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Za(e,n,r,i)}}function h0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Za._fromErrorAndOperation(t,s,e,r):s})}async function Qx(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ys(t,h0(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=Ah(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),Br._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e,n=!1){const r="signIn",i=await h0(t,r,e),s=await Br._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Jx(t,e){return d0(Do(t),e)}async function Zx(t,e,n){const r=Do(t),i=await Yx(r,{returnSecureToken:!0,email:e,password:n}),s=await Br._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function eN(t,e,n){return Jx(Ze(t),Ji.credential(e,n))}function tN(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function nN(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}const ec="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ec,"1"),this.storage.removeItem(ec),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(){const t=mt();return Oh(t)||Zc(t)}const iN=1e3,sN=10;class p0 extends m0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rN()&&Lx(),this.fallbackToPolling=c0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Mx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p0.type="LOCAL";const oN=p0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0 extends m0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g0.type="SESSION";const v0=g0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new el(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await aN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}el.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=xh("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function lN(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function uN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hN(){return y0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="firebaseLocalStorageDb",dN=1,tc="firebaseLocalStorage",w0="fbase_key";class xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tl(t,e){return t.transaction([tc],e?"readwrite":"readonly").objectStore(tc)}function mN(){const t=indexedDB.deleteDatabase(b0);return new xo(t).toPromise()}function Mu(){const t=indexedDB.open(b0,dN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tc,{keyPath:w0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tc)?e(r):(r.close(),await mN(),e(await Mu()))})})}async function cp(t,e,n){const r=tl(t,!0).put({[w0]:e,value:n});return new xo(r).toPromise()}async function pN(t,e){const n=tl(t,!1).get(e),r=await new xo(n).toPromise();return r===void 0?null:r.value}function lp(t,e){const n=tl(t,!0).delete(e);return new xo(n).toPromise()}const gN=800,vN=3;class _0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=el._getInstance(hN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uN(),!this.activeServiceWorker)return;this.sender=new cN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mu();return await cp(e,ec,"1"),await lp(e,ec),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tl(i,!1).getAll();return new xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_0.type="LOCAL";const yN=_0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bN().appendChild(r)})}function _N(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new So(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t,e){return e?In(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IN(t){return d0(t.auth,new Nh(t),t.bypassAuthState)}function TN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Xx(n,new Nh(t),t.bypassAuthState)}async function kN(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Qx(n,new Nh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IN;case"linkViaPopup":case"linkViaRedirect":return kN;case"reauthViaPopup":case"reauthViaRedirect":return TN;default:Zt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=new So(2e3,1e4);class ci extends E0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,SN.get())};e()}}ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="pendingRedirect",wa=new Map;class AN extends E0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wa.get(this.auth._key());if(!e){try{const r=await ON(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wa.set(this.auth._key(),e)}return this.bypassAuthState||wa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ON(t,e){const n=xN(e),r=RN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DN(t,e){wa.set(t._key(),e)}function RN(t){return In(t._redirectPersistence)}function xN(t){return ba(CN,t.config.apiKey,t.name)}async function NN(t,e,n=!1){const r=Do(t),i=EN(r,e),o=await new AN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=10*60*1e3;class MN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PN&&this.cachedEventUids.clear(),this.cachedEventUids.has(up(e))}saveEventToCache(e){this.cachedEventUids.add(up(e)),this.lastProcessedEventTime=Date.now()}}function up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e={}){return Ao(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UN=/^https?/;async function jN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FN(t);for(const n of e)try{if(BN(n))return}catch{}Zt(t,"unauthorized-domain")}function BN(t){const e=Pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UN.test(n))return!1;if($N.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=new So(3e4,6e4);function fp(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qN(t){return new Promise((e,n)=>{var r,i,s;function o(){fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fp(),n(mn(t,"network-request-failed"))},timeout:VN.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const a=_N("iframefcb");return pn()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},wN(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _a=null,e})}let _a=null;function HN(t){return _a=_a||qN(t),_a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new So(5e3,15e3),zN="__/auth/iframe",KN="emulator/auth/iframe",GN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QN(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ch(e,KN):`https://${t.config.authDomain}/${zN}`,r={apiKey:e.apiKey,appName:t.name,v:ao},i=YN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oo(r).slice(1)}`}async function XN(t){const e=await HN(t),n=pn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:QN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=pn().setTimeout(()=>{s(o)},WN.get());function c(){pn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZN=500,eP=600,tP="_blank",nP="http://localhost";class hp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rP(t,e,n,r=ZN,i=eP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JN),{width:r.toString(),height:i.toString(),top:s,left:o}),l=mt().toLowerCase();n&&(a=r0(l)?tP:n),n0(l)&&(e=e||nP,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(Px(l)&&a!=="_self")return iP(e||"",a),new hp(null);const f=window.open(e||"",a,u);X(f,t,"popup-blocked");try{f.focus()}catch{}return new hp(f)}function iP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP="__/auth/handler",oP="emulator/auth/handler";function dp(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ao,eventId:i};if(e instanceof f0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Ro){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${aP(t)}?${oo(a).slice(1)}`}function aP({config:t}){return t.emulator?Ch(t,oP):`https://${t.authDomain}/${sP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="webStorageSupport";class cP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=NN,this._overrideRedirectResult=DN}async _openPopup(e,n,r,i){var s;xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=dp(e,n,r,Pu(),i);return rP(e,o,xh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),lN(dp(e,n,r,Pu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XN(e),r=new MN(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nl,{type:Nl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nl];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return c0()||Oh()||Zc()}}const lP=cP;var mp="@firebase/auth",pp="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hP(t){vn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{X(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:l0(t)},u=new $x(a,c,l);return vx(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new Xt("auth-internal",e=>{const n=Do(e.getProvider("auth").getImmediate());return(r=>new uP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(mp,pp,fP(t)),Mt(mp,pp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=5*60,mP=Iv("authIdTokenMaxAge")||dP;let gp=null;const pP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mP)return;const i=n==null?void 0:n.token;gp!==i&&(gp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function T0(t=Sf()){const e=Kr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gx(t,{popupRedirectResolver:lP,persistence:[yN,oN,v0]}),r=Iv("authTokenSyncURL");if(r){const s=pP(r);nN(n,s,()=>s(n.currentUser)),tN(n,o=>s(o))}const i=Ev("auth");return i&&Ux(n,`http://${i}`),n}hP("Browser");const gP=tt({name:"Login",setup(){const t=Hi(),e=fe(""),n=fe(""),r=T0(),i=fe("");function s(){eN(r,e.value,n.value).then(o=>{const a=o.user;a&&(console.log("lets go"),console.log(a.email),console.log(a.uid),sessionStorage.setItem("uid",JSON.stringify(a.uid)),t.push({path:"/home"}))}).catch(o=>{const a=o.code;console.log(a),o.code==="auth/wrong-password"&&(i.value="Felaktigt användarnamn eller lösenord."),o.code==="auth/user-not-found"&&(i.value="Felaktigt användarnamn eller lösenord."),o.code==="auth/invalid-email"&&(i.value="Felaktigt användarnamn eller lösenord."),o.code})}return{email:e,password:n,LoginSubmit:s,displayErrors:i}},components:{}}),k0="/HSB-3/assets/HSB_logo-a0e9359f.svg",vP={class:"screen-col-standard"},yP={class:"flex flex-col justify-center items-center"},bP=R("img",{class:"mt-8 mb-6",src:k0,alt:""},null,-1),wP=R("h1",null,"Välkommen!",-1),_P=R("h4",null,"Logga in för att boka en tvättid",-1),EP={class:"login-form-container"},IP={class:"error-input"},TP={class:"btn-container"},kP={class:"btn-clean-lg"},SP=R("span",{class:"font-normal"},"Inget Konto? ",-1);function CP(t,e,n,r,i,s){const o=It("RouterLink");return be(),Fe("form",vP,[R("div",yP,[bP,wP,_P,R("div",EP,[Aa(R("input",{required:"",class:"input-form","onUpdate:modelValue":e[0]||(e[0]=a=>t.email=a),type:"email",placeholder:"E-post"},null,512),[[Ra,t.email]]),Aa(R("input",{required:"",class:"input-form","onUpdate:modelValue":e[1]||(e[1]=a=>t.password=a),type:"password",placeholder:"Lösenord"},null,512),[[Ra,t.password]]),R("p",IP,fn(t.displayErrors),1)])]),R("div",TP,[R("button",{class:"btn-primary-lg",onClick:e[2]||(e[2]=wf(a=>t.LoginSubmit(),["prevent"]))}," Logga in "),R("div",kP,[he(o,{to:"/register"},{default:Wt(()=>[SP,Jn("Skapa konto här!")]),_:1})])])])}const AP=$t(gP,[["render",CP]]),OP=tt({name:"Register",setup(){const t=fe(""),e=fe(""),n=fe(""),r=fe(""),i=fe(""),s=T0();function o(){Zx(s,t.value,e.value).then(a=>{const c=a.user;console.log(c),S0.push({path:"/login"})}).catch(a=>{const c=a.code;console.log(c),a.code==="auth/wrong-password"&&(n.value="Ditt lösenord är felaktigt."),a.code==="auth/internal-error"&&(r.value="Din epost-adress är felaktig."),a.code==="auth/invalid-email"&&(r.value="Ange korrekt epost-adress"),a.code==="auth/missing-email"&&(r.value="Ange epost-adress")})}return{email:t,password:e,displayErrors:i,RegisterSubmit:o}},components:{}}),DP={class:"screen-col-standard"},RP={class:"flex flex-col justify-center items-center"},xP=R("img",{class:"mt-8 mb-6",src:k0,alt:""},null,-1),NP=R("h1",null,"Välkommen!",-1),PP=R("h4",null,"Registrera ny användare",-1),MP={class:"login-form-container"},LP={class:"error-input"},FP={class:"btn-container"},$P={class:"btn-clean-lg"};function UP(t,e,n,r,i,s){const o=It("RouterLink");return be(),Fe("form",DP,[R("div",RP,[xP,NP,PP,R("div",MP,[Aa(R("input",{required:"",class:"input-form","onUpdate:modelValue":e[0]||(e[0]=a=>t.email=a),type:"email",placeholder:"E-post"},null,512),[[Ra,t.email]]),Aa(R("input",{required:"",class:"input-form","onUpdate:modelValue":e[1]||(e[1]=a=>t.password=a),type:"password",placeholder:"Lösenord"},null,512),[[Ra,t.password]]),R("p",LP,fn(t.displayErrors),1)])]),R("div",FP,[R("button",{class:"btn-primary-lg bg-yellow-500",onClick:e[2]||(e[2]=wf(a=>t.RegisterSubmit(),["prevent"]))}," Registrera "),R("div",$P,[he(o,{to:"/login"},{default:Wt(()=>[Jn("Tillbaka")]),_:1})])])])}const jP=$t(OP,[["render",UP]]),S0=lI({history:kE("/HSB-3/"),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:AP},{path:"/register",name:"Register",component:jP},{path:"/home",name:"Home",component:dx},{path:"/user",name:"User",component:Gb}]});var BP="firebase",VP="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt(BP,VP,"app");const C0="@firebase/installations",Ph="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=1e4,O0=`w:${Ph}`,D0="FIS_v2",qP="https://firebaseinstallations.googleapis.com/v1",HP=60*60*1e3,WP="installations",zP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Vr=new zr(WP,zP,KP);function R0(t){return t instanceof en&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0({projectId:t}){return`${qP}/projects/${t}/installations`}function N0(t){return{token:t.token,requestStatus:2,expiresIn:YP(t.expiresIn),creationTime:Date.now()}}async function P0(t,e){const r=(await e.json()).error;return Vr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function M0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function GP(t,{refreshToken:e}){const n=M0(t);return n.append("Authorization",QP(e)),n}async function L0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YP(t){return Number(t.replace("s","000"))}function QP(t){return`${D0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=x0(t),i=M0(t),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:D0,appId:t.appId,sdkVersion:O0},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await L0(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:N0(l.authToken)}}else throw await P0("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=/^[cdef][\w-]{21}$/,Lu="";function eM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tM(t);return ZP.test(n)?n:Lu}catch{return Lu}}function tM(t){return JP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0=new Map;function U0(t,e){const n=nl(t);j0(n,e),nM(n,e)}function j0(t,e){const n=$0.get(t);if(n)for(const r of n)r(e)}function nM(t,e){const n=rM();n&&n.postMessage({key:t,fid:e}),iM()}let Cr=null;function rM(){return!Cr&&"BroadcastChannel"in self&&(Cr=new BroadcastChannel("[Firebase] FID Change"),Cr.onmessage=t=>{j0(t.data.key,t.data.fid)}),Cr}function iM(){$0.size===0&&Cr&&(Cr.close(),Cr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM="firebase-installations-database",oM=1,qr="firebase-installations-store";let Pl=null;function Mh(){return Pl||(Pl=Sv(sM,oM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qr)}}})),Pl}async function nc(t,e){const n=nl(t),i=(await Mh()).transaction(qr,"readwrite"),s=i.objectStore(qr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&U0(t,e.fid),e}async function B0(t){const e=nl(t),r=(await Mh()).transaction(qr,"readwrite");await r.objectStore(qr).delete(e),await r.done}async function rl(t,e){const n=nl(t),i=(await Mh()).transaction(qr,"readwrite"),s=i.objectStore(qr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&U0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t){let e;const n=await rl(t.appConfig,r=>{const i=aM(r),s=cM(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Lu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function aM(t){const e=t||{fid:eM(),registrationStatus:0};return V0(e)}function cM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Vr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uM(t)}:{installationEntry:e}}async function lM(t,e){try{const n=await XP(t,e);return nc(t.appConfig,n)}catch(n){throw R0(n)&&n.customData.serverCode===409?await B0(t.appConfig):await nc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uM(t){let e=await vp(t.appConfig);for(;e.registrationStatus===1;)await F0(100),e=await vp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lh(t);return r||n}return e}function vp(t){return rl(t,e=>{if(!e)throw Vr.create("installation-not-found");return V0(e)})}function V0(t){return fM(t)?{fid:t.fid,registrationStatus:0}:t}function fM(t){return t.registrationStatus===1&&t.registrationTime+A0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM({appConfig:t,heartbeatServiceProvider:e},n){const r=dM(t,n),i=GP(t,n),s=e.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:O0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await L0(()=>fetch(r,a));if(c.ok){const l=await c.json();return N0(l)}else throw await P0("Generate Auth Token",c)}function dM(t,{fid:e}){return`${x0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(t,e=!1){let n;const r=await rl(t.appConfig,s=>{if(!q0(s))throw Vr.create("not-registered");const o=s.authToken;if(!e&&gM(o))return s;if(o.requestStatus===1)return n=mM(t,e),s;{if(!navigator.onLine)throw Vr.create("app-offline");const a=yM(s);return n=pM(t,a),a}});return n?await n:r.authToken}async function mM(t,e){let n=await yp(t.appConfig);for(;n.authToken.requestStatus===1;)await F0(100),n=await yp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fh(t,e):r}function yp(t){return rl(t,e=>{if(!q0(e))throw Vr.create("not-registered");const n=e.authToken;return bM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function pM(t,e){try{const n=await hM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await nc(t.appConfig,r),n}catch(n){if(R0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await B0(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await nc(t.appConfig,r)}throw n}}function q0(t){return t!==void 0&&t.registrationStatus===2}function gM(t){return t.requestStatus===2&&!vM(t)}function vM(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HP}function yM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function bM(t){return t.requestStatus===1&&t.requestTime+A0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lh(e);return r?r.catch(console.error):Fh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _M(t,e=!1){const n=t;return await EM(n),(await Fh(n,e)).token}async function EM(t){const{registrationPromise:e}=await Lh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(t){if(!t||!t.options)throw Ml("App Configuration");if(!t.name)throw Ml("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ml(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ml(t){return Vr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="installations",TM="installations-internal",kM=t=>{const e=t.getProvider("app").getImmediate(),n=IM(e),r=Kr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},SM=t=>{const e=t.getProvider("app").getImmediate(),n=Kr(e,H0).getImmediate();return{getId:()=>wM(n),getToken:i=>_M(n,i)}};function CM(){vn(new Xt(H0,kM,"PUBLIC")),vn(new Xt(TM,SM,"PRIVATE"))}CM();Mt(C0,Ph);Mt(C0,Ph,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="analytics",AM="firebase_id",OM="origin",DM=60*1e3,RM="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",W0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Ic("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function xM(t,e){const n=document.createElement("script");n.src=`${W0}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function NM(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function PM(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await z0(n)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(a){Ot.error(a)}t("config",i,s)}async function MM(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await z0(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&e[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ot.error(s)}}function LM(t,e,n,r){async function i(s,o,a){try{s==="event"?await MM(t,e,n,o,a):s==="config"?await PM(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(c){Ot.error(c)}}return i}function FM(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=LM(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function $M(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(W0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ft=new zr("analytics","Analytics",UM);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=30,BM=1e3;class VM{constructor(e={},n=BM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const K0=new VM;function qM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:qM(r)},s=RM.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function WM(t,e=K0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ft.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new GM;return setTimeout(async()=>{a.abort()},n!==void 0?n:DM),G0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function G0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=K0){var s;const{appId:o,measurementId:a}=t;try{await zM(r,e)}catch(c){if(a)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await HM(t);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!KM(l)){if(i.deleteThrottleMetadata(o),a)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?em(n,i.intervalMillis,jM):em(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,f),Ot.debug(`Calling attemptFetch again in ${u} millis`),G0(t,f,r,i)}}function zM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function KM(t){if(!(t instanceof en)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class GM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function YM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QM(){if(wv())try{await _v()}catch(t){return Ot.warn(Ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ot.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XM(t,e,n,r,i,s,o){var a;const c=WM(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ot.error(m)),e.push(c);const l=QM().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);$M(s)||xM(s,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[OM]="firebase",h.update=!0,f!=null&&(h[AM]=f),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e){this.app=e}_delete(){return delete ws[this.app.options.appId],Promise.resolve()}}let ws={},bp=[];const wp={};let Ll="dataLayer",ZM="gtag",_p,Y0,Ep=!1;function eL(){const t=[];if(bv()&&t.push("This is a browser extension environment."),HT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function tL(t,e,n){eL();const r=t.options.appId;if(!r)throw Ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(ws[r]!=null)throw Ft.create("already-exists",{id:r});if(!Ep){NM(Ll);const{wrappedGtag:s,gtagCore:o}=FM(ws,bp,wp,Ll,ZM);Y0=s,_p=o,Ep=!0}return ws[r]=XM(t,bp,wp,e,_p,Ll,n),new JM(t)}function nL(t=Sf()){t=Ze(t);const e=Kr(t,rc);return e.isInitialized()?e.getImmediate():rL(t)}function rL(t,e={}){const n=Kr(t,rc);if(n.isInitialized()){const i=n.getImmediate();if(xs(e,n.getOptions()))return i;throw Ft.create("already-initialized")}return n.initialize({options:e})}function iL(t,e,n,r){t=Ze(t),YM(Y0,ws[t.app.options.appId],e,n,r).catch(i=>Ot.error(i))}const Ip="@firebase/analytics",Tp="0.9.0";function sL(){vn(new Xt(rc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tL(r,i,n)},"PUBLIC")),vn(new Xt("analytics-internal",t,"PRIVATE")),Mt(Ip,Tp),Mt(Ip,Tp,"esm2017");function t(e){try{const n=e.getProvider(rc).getImmediate();return{logEvent:(r,i,s)=>iL(n,r,i,s)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}sL();const Q0={apiKey:"AIzaSyBdOZEJcUOWI9Rhan-ABvDQD6gOSResSus",authDomain:"hsb-3-vue.firebaseapp.com",projectId:"hsb-3-vue",storageBucket:"hsb-3-vue.appspot.com",messagingSenderId:"84393067844",appId:"1:84393067844:web:db6701898106675c6b4311",measurementId:"G-BX9RDH50FQ"},oL=kf(Q0);nL(oL);function kp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kp(Object(n),!0).forEach(function(r){Qe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ic(t){return ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ic(t)}function aL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Sp(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function cL(t,e,n){return e&&Sp(t.prototype,e),n&&Sp(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Qe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $h(t,e){return uL(t)||hL(t,e)||X0(t,e)||mL()}function No(t){return lL(t)||fL(t)||X0(t)||dL()}function lL(t){if(Array.isArray(t))return Fu(t)}function uL(t){if(Array.isArray(t))return t}function fL(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hL(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function X0(t,e){if(t){if(typeof t=="string")return Fu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fu(t,e)}}function Fu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mL(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cp=function(){},Uh={},J0={},Z0=null,ew={mark:Cp,measure:Cp};try{typeof window<"u"&&(Uh=window),typeof document<"u"&&(J0=document),typeof MutationObserver<"u"&&(Z0=MutationObserver),typeof performance<"u"&&(ew=performance)}catch{}var pL=Uh.navigator||{},Ap=pL.userAgent,Op=Ap===void 0?"":Ap,lr=Uh,Ne=J0,Dp=Z0,Xo=ew;lr.document;var Fn=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",tw=~Op.indexOf("MSIE")||~Op.indexOf("Trident/"),Jo,Zo,ea,ta,na,Nn="___FONT_AWESOME___",$u=16,nw="fa",rw="svg-inline--fa",Hr="data-fa-i2svg",Uu="data-fa-pseudo-element",gL="data-fa-pseudo-element-pending",jh="data-prefix",Bh="data-icon",Rp="fontawesome-i2svg",vL="async",yL=["HTML","HEAD","STYLE","SCRIPT"],iw=function(){try{return!0}catch{return!1}}(),De="classic",$e="sharp",Vh=[De,$e];function Po(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[De]}})}var Js=Po((Jo={},Qe(Jo,De,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Qe(Jo,$e,{fa:"solid",fass:"solid","fa-solid":"solid"}),Jo)),Zs=Po((Zo={},Qe(Zo,De,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Qe(Zo,$e,{solid:"fass"}),Zo)),eo=Po((ea={},Qe(ea,De,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Qe(ea,$e,{fass:"fa-solid"}),ea)),bL=Po((ta={},Qe(ta,De,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Qe(ta,$e,{"fa-solid":"fass"}),ta)),wL=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,sw="fa-layers-text",_L=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,EL=Po((na={},Qe(na,De,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Qe(na,$e,{900:"fass"}),na)),ow=[1,2,3,4,5,6,7,8,9,10],IL=ow.concat([11,12,13,14,15,16,17,18,19,20]),TL=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ar={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},to=new Set;Object.keys(Zs[De]).map(to.add.bind(to));Object.keys(Zs[$e]).map(to.add.bind(to));var kL=[].concat(Vh,No(to),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ar.GROUP,Ar.SWAP_OPACITY,Ar.PRIMARY,Ar.SECONDARY]).concat(ow.map(function(t){return"".concat(t,"x")})).concat(IL.map(function(t){return"w-".concat(t)})),_s=lr.FontAwesomeConfig||{};function SL(t){var e=Ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function CL(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ne&&typeof Ne.querySelector=="function"){var AL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];AL.forEach(function(t){var e=$h(t,2),n=e[0],r=e[1],i=CL(SL(n));i!=null&&(_s[r]=i)})}var aw={styleDefault:"solid",familyDefault:"classic",cssPrefix:nw,replacementClass:rw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_s.familyPrefix&&(_s.cssPrefix=_s.familyPrefix);var Ui=$($({},aw),_s);Ui.autoReplaceSvg||(Ui.observeMutations=!1);var q={};Object.keys(aw).forEach(function(t){Object.defineProperty(q,t,{enumerable:!0,set:function(n){Ui[t]=n,Es.forEach(function(r){return r(q)})},get:function(){return Ui[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){Ui.cssPrefix=e,Es.forEach(function(n){return n(q)})},get:function(){return Ui.cssPrefix}});lr.FontAwesomeConfig=q;var Es=[];function OL(t){return Es.push(t),function(){Es.splice(Es.indexOf(t),1)}}var Vn=$u,un={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function DL(t){if(!(!t||!Fn)){var e=Ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ne.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ne.head.insertBefore(e,r),t}}var RL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function no(){for(var t=12,e="";t-- >0;)e+=RL[Math.random()*62|0];return e}function Zi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function qh(t){return t.classList?Zi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(cw(t[n]),'" ')},"").trim()}function il(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Hh(t){return t.size!==un.size||t.x!==un.x||t.y!==un.y||t.rotate!==un.rotate||t.flipX||t.flipY}function NL(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function PL(t){var e=t.transform,n=t.width,r=n===void 0?$u:n,i=t.height,s=i===void 0?$u:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&tw?c+="translate(".concat(e.x/Vn-r/2,"em, ").concat(e.y/Vn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Vn,"em), calc(-50% + ").concat(e.y/Vn,"em)) "):c+="translate(".concat(e.x/Vn,"em, ").concat(e.y/Vn,"em) "),c+="scale(".concat(e.size/Vn*(e.flipX?-1:1),", ").concat(e.size/Vn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var ML=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function lw(){var t=nw,e=rw,n=q.cssPrefix,r=q.replacementClass,i=ML;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var xp=!1;function Fl(){q.autoAddCss&&!xp&&(DL(lw()),xp=!0)}var LL={mixout:function(){return{dom:{css:lw,insertCss:Fl}}},hooks:function(){return{beforeDOMElementCreation:function(){Fl()},beforeI2svg:function(){Fl()}}}},Pn=lr||{};Pn[Nn]||(Pn[Nn]={});Pn[Nn].styles||(Pn[Nn].styles={});Pn[Nn].hooks||(Pn[Nn].hooks={});Pn[Nn].shims||(Pn[Nn].shims=[]);var zt=Pn[Nn],uw=[],FL=function t(){Ne.removeEventListener("DOMContentLoaded",t),sc=1,uw.map(function(e){return e()})},sc=!1;Fn&&(sc=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),sc||Ne.addEventListener("DOMContentLoaded",FL));function $L(t){Fn&&(sc?setTimeout(t,0):uw.push(t))}function Mo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?cw(t):"<".concat(e," ").concat(xL(r),">").concat(s.map(Mo).join(""),"</").concat(e,">")}function Np(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var UL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},$l=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?UL(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function jL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ju(t){var e=jL(t);return e.length===1?e[0].toString(16):null}function BL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Pp(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Bu(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Pp(e);typeof zt.hooks.addPack=="function"&&!i?zt.hooks.addPack(t,Pp(e)):zt.styles[t]=$($({},zt.styles[t]||{}),s),t==="fas"&&Bu("fa",e)}var ra,ia,sa,li=zt.styles,VL=zt.shims,qL=(ra={},Qe(ra,De,Object.values(eo[De])),Qe(ra,$e,Object.values(eo[$e])),ra),Wh=null,fw={},hw={},dw={},mw={},pw={},HL=(ia={},Qe(ia,De,Object.keys(Js[De])),Qe(ia,$e,Object.keys(Js[$e])),ia);function WL(t){return~kL.indexOf(t)}function zL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!WL(i)?i:null}var gw=function(){var e=function(s){return $l(li,function(o,a,c){return o[c]=$l(a,s,{}),o},{})};fw=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),hw=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),pw=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in li||q.autoFetchSvg,r=$l(VL,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});dw=r.names,mw=r.unicodes,Wh=sl(q.styleDefault,{family:q.familyDefault})};OL(function(t){Wh=sl(t.styleDefault,{family:q.familyDefault})});gw();function zh(t,e){return(fw[t]||{})[e]}function KL(t,e){return(hw[t]||{})[e]}function Or(t,e){return(pw[t]||{})[e]}function vw(t){return dw[t]||{prefix:null,iconName:null}}function GL(t){var e=mw[t],n=zh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ur(){return Wh}var Kh=function(){return{prefix:null,iconName:null,rest:[]}};function sl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?De:n,i=Js[r][t],s=Zs[r][t]||Zs[r][i],o=t in zt.styles?t:null;return s||o||null}var Mp=(sa={},Qe(sa,De,Object.keys(eo[De])),Qe(sa,$e,Object.keys(eo[$e])),sa);function ol(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Qe(e,De,"".concat(q.cssPrefix,"-").concat(De)),Qe(e,$e,"".concat(q.cssPrefix,"-").concat($e)),e),o=null,a=De;(t.includes(s[De])||t.some(function(l){return Mp[De].includes(l)}))&&(a=De),(t.includes(s[$e])||t.some(function(l){return Mp[$e].includes(l)}))&&(a=$e);var c=t.reduce(function(l,u){var f=zL(q.cssPrefix,u);if(li[u]?(u=qL[a].includes(u)?bL[a][u]:u,o=u,l.prefix=u):HL[a].indexOf(u)>-1?(o=u,l.prefix=sl(u,{family:a})):f?l.iconName=f:u!==q.replacementClass&&u!==s[De]&&u!==s[$e]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=o==="fa"?vw(l.iconName):{},m=Or(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||m||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!li.far&&li.fas&&!q.autoFetchSvg&&(l.prefix="fas")}return l},Kh());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===$e&&(li.fass||q.autoFetchSvg)&&(c.prefix="fass",c.iconName=Or(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=ur()||"fas"),c}var YL=function(){function t(){aL(this,t),this.definitions={}}return cL(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=$($({},n.definitions[a]||{}),o[a]),Bu(a,o[a]);var c=eo[De][a];c&&Bu(c,o[a]),gw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=l)}),n[a][c]=l}),n}}]),t}(),Lp=[],ui={},Ei={},QL=Object.keys(Ei);function XL(t,e){var n=e.mixoutsTo;return Lp=t,ui={},Object.keys(Ei).forEach(function(r){QL.indexOf(r)===-1&&delete Ei[r]}),Lp.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ic(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){ui[o]||(ui[o]=[]),ui[o].push(s[o])})}r.provides&&r.provides(Ei)}),n}function Vu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=ui[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Wr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=ui[t]||[];i.forEach(function(s){s.apply(null,n)})}function Mn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ei[t]?Ei[t].apply(null,e):void 0}function qu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ur();if(e)return e=Or(n,e)||e,Np(yw.definitions,n,e)||Np(zt.styles,n,e)}var yw=new YL,JL=function(){q.autoReplaceSvg=!1,q.observeMutations=!1,Wr("noAuto")},ZL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Fn?(Wr("beforeI2svg",e),Mn("pseudoElements2svg",e),Mn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,$L(function(){t2({autoReplaceSvgRoot:n}),Wr("watch",e)})}},e2={icon:function(e){if(e===null)return null;if(ic(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Or(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=sl(e[0]);return{prefix:r,iconName:Or(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(q.cssPrefix,"-"))>-1||e.match(wL))){var i=ol(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ur(),iconName:Or(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ur();return{prefix:s,iconName:Or(s,e)||e}}}},Nt={noAuto:JL,config:q,dom:ZL,parse:e2,library:yw,findIconDefinition:qu,toHtml:Mo},t2=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ne:n;(Object.keys(zt.styles).length>0||q.autoFetchSvg)&&Fn&&q.autoReplaceSvg&&Nt.dom.i2svg({node:r})};function al(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Mo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Fn){var r=Ne.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function n2(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Hh(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=il($($({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function r2(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:o}),children:r}]}]}function Gh(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,m=h===void 0?!1:h,v=r.found?r:n,w=v.width,I=v.height,y=i==="fak",g=[q.replacementClass,s?"".concat(q.cssPrefix,"-").concat(s):""].filter(function(se){return f.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(f.classes).join(" "),b={children:[],attributes:$($({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:g,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(I)})},x=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/I*16*.0625,"em")}:{};m&&(b.attributes[Hr]=""),c&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||no())},children:[c]}),delete b.attributes.title);var O=$($({},b),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:$($({},x),f.styles)}),B=r.found&&n.found?Mn("generateAbstractMask",O)||{children:[],attributes:{}}:Mn("generateAbstractIcon",O)||{children:[],attributes:{}},U=B.children,G=B.attributes;return O.children=U,O.attributes=G,a?r2(O):n2(O)}function Fp(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=$($($({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[Hr]="");var u=$({},o.styles);Hh(i)&&(u.transform=PL({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=il(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function i2(t){var e=t.content,n=t.title,r=t.extra,i=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=il(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ul=zt.styles;function Hu(t){var e=t[0],n=t[1],r=t.slice(4),i=$h(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ar.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ar.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Ar.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var s2={found:!1,width:512,height:512};function o2(t,e){!iw&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wu(t,e){var n=e;return e==="fa"&&q.styleDefault!==null&&(e=ur()),new Promise(function(r,i){if(Mn("missingIconAbstract"),n==="fa"){var s=vw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Ul[e]&&Ul[e][t]){var o=Ul[e][t];return r(Hu(o))}o2(t,e),r($($({},s2),{},{icon:q.showMissingIcons&&t?Mn("missingIconAbstract")||{}:{}}))})}var $p=function(){},zu=q.measurePerformance&&Xo&&Xo.mark&&Xo.measure?Xo:{mark:$p,measure:$p},ls='FA "6.2.1"',a2=function(e){return zu.mark("".concat(ls," ").concat(e," begins")),function(){return bw(e)}},bw=function(e){zu.mark("".concat(ls," ").concat(e," ends")),zu.measure("".concat(ls," ").concat(e),"".concat(ls," ").concat(e," begins"),"".concat(ls," ").concat(e," ends"))},Yh={begin:a2,end:bw},Ea=function(){};function Up(t){var e=t.getAttribute?t.getAttribute(Hr):null;return typeof e=="string"}function c2(t){var e=t.getAttribute?t.getAttribute(jh):null,n=t.getAttribute?t.getAttribute(Bh):null;return e&&n}function l2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function u2(){if(q.autoReplaceSvg===!0)return Ia.replace;var t=Ia[q.autoReplaceSvg];return t||Ia.replace}function f2(t){return Ne.createElementNS("http://www.w3.org/2000/svg",t)}function h2(t){return Ne.createElement(t)}function ww(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?f2:h2:n;if(typeof t=="string")return Ne.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(ww(o,{ceFn:r}))}),i}function d2(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ia={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ww(i),n)}),n.getAttribute(Hr)===null&&q.keepOriginalSource){var r=Ne.createComment(d2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~qh(n).indexOf(q.replacementClass))return Ia.replace(e);var i=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===q.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Mo(a)}).join(`
`);n.setAttribute(Hr,""),n.innerHTML=o}};function jp(t){t()}function _w(t,e){var n=typeof e=="function"?e:Ea;if(t.length===0)n();else{var r=jp;q.mutateApproach===vL&&(r=lr.requestAnimationFrame||jp),r(function(){var i=u2(),s=Yh.begin("mutate");t.map(i),s(),n()})}}var Qh=!1;function Ew(){Qh=!0}function Ku(){Qh=!1}var oc=null;function Bp(t){if(Dp&&q.observeMutations){var e=t.treeCallback,n=e===void 0?Ea:e,r=t.nodeCallback,i=r===void 0?Ea:r,s=t.pseudoElementsCallback,o=s===void 0?Ea:s,a=t.observeMutationsRoot,c=a===void 0?Ne:a;oc=new Dp(function(l){if(!Qh){var u=ur();Zi(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Up(f.addedNodes[0])&&(q.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&q.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Up(f.target)&&~TL.indexOf(f.attributeName))if(f.attributeName==="class"&&c2(f.target)){var h=ol(qh(f.target)),m=h.prefix,v=h.iconName;f.target.setAttribute(jh,m||u),v&&f.target.setAttribute(Bh,v)}else l2(f.target)&&i(f.target)})}}),Fn&&oc.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function m2(){oc&&oc.disconnect()}function p2(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function g2(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ol(qh(t));return i.prefix||(i.prefix=ur()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=KL(i.prefix,t.innerText)||zh(i.prefix,ju(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function v2(t){var e=Zi(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||no()):(e["aria-hidden"]="true",e.focusable="false")),e}function y2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:un,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Vp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=g2(t),r=n.iconName,i=n.prefix,s=n.rest,o=v2(t),a=Vu("parseNodeAttributes",{},t),c=e.styleParser?p2(t):[];return $({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:un,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var b2=zt.styles;function Iw(t){var e=q.autoReplaceSvg==="nest"?Vp(t,{styleParser:!1}):Vp(t);return~e.extra.classes.indexOf(sw)?Mn("generateLayersText",t,e):Mn("generateSvgReplacementMutation",t,e)}var fr=new Set;Vh.map(function(t){fr.add("fa-".concat(t))});Object.keys(Js[De]).map(fr.add.bind(fr));Object.keys(Js[$e]).map(fr.add.bind(fr));fr=No(fr);function qp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Fn)return Promise.resolve();var n=Ne.documentElement.classList,r=function(f){return n.add("".concat(Rp,"-").concat(f))},i=function(f){return n.remove("".concat(Rp,"-").concat(f))},s=q.autoFetchSvg?fr:Vh.map(function(u){return"fa-".concat(u)}).concat(Object.keys(b2));s.includes("fa")||s.push("fa");var o=[".".concat(sw,":not([").concat(Hr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Hr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Zi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Yh.begin("onTree"),l=a.reduce(function(u,f){try{var h=Iw(f);h&&u.push(h)}catch(m){iw||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){_w(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(h){c(),f(h)})})}function w2(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Iw(t).then(function(n){n&&_w([n],e)})}function _2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qu(i||{})),t(r,$($({},n),{},{mask:i}))}}var E2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?un:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,m=n.titleId,v=m===void 0?null:m,w=n.classes,I=w===void 0?[]:w,y=n.attributes,g=y===void 0?{}:y,b=n.styles,x=b===void 0?{}:b;if(e){var O=e.prefix,B=e.iconName,U=e.icon;return al($({type:"icon"},e),function(){return Wr("beforeDOMElementCreation",{iconDefinition:e,params:n}),q.autoA11y&&(h?g["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(v||no()):(g["aria-hidden"]="true",g.focusable="false")),Gh({icons:{main:Hu(U),mask:c?Hu(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:B,transform:$($({},un),i),symbol:o,title:h,maskId:u,titleId:v,extra:{attributes:g,styles:x,classes:I}})})}},I2={mixout:function(){return{icon:_2(E2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qp,n.nodeCallback=w2,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ne:r,s=n.callback,o=s===void 0?function(){}:s;return qp(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(m,v){Promise.all([Wu(i,a),u.iconName?Wu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var I=$h(w,2),y=I[0],g=I[1];m([n,Gh({icons:{main:y,mask:g},prefix:a,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=il(a);c.length>0&&(i.style=c);var l;return Hh(o)&&(l=Mn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},T2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return al({type:"layer"},function(){Wr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers")].concat(No(s)).join(" ")},children:o}]})}}}},k2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return al({type:"counter",content:n},function(){return Wr("beforeDOMElementCreation",{content:n,params:r}),i2({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(q.cssPrefix,"-layers-counter")].concat(No(a))}})})}}}},S2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?un:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,m=h===void 0?{}:h;return al({type:"text",content:n},function(){return Wr("beforeDOMElementCreation",{content:n,params:r}),Fp({content:n,transform:$($({},un),s),title:a,extra:{attributes:f,styles:m,classes:["".concat(q.cssPrefix,"-layers-text")].concat(No(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(tw){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return q.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fp({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},C2=new RegExp('"',"ug"),Hp=[1105920,1112319];function A2(t){var e=t.replace(C2,""),n=BL(e,0),r=n>=Hp[0]&&n<=Hp[1],i=e.length===2?e[0]===e[1]:!1;return{value:ju(i?e[0]:e),isSecondary:r||i}}function Wp(t,e){var n="".concat(gL).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Zi(t.children),o=s.filter(function(U){return U.getAttribute(Uu)===e})[0],a=lr.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(_L),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?$e:De,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Zs[h][c[2].toLowerCase()]:EL[h][l],v=A2(f),w=v.value,I=v.isSecondary,y=c[0].startsWith("FontAwesome"),g=zh(m,w),b=g;if(y){var x=GL(w);x.iconName&&x.prefix&&(g=x.iconName,m=x.prefix)}if(g&&!I&&(!o||o.getAttribute(jh)!==m||o.getAttribute(Bh)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var O=y2(),B=O.extra;B.attributes[Uu]=e,Wu(g,m).then(function(U){var G=Gh($($({},O),{},{icons:{main:U,mask:Kh()},prefix:m,iconName:b,extra:B,watchable:!0})),se=Ne.createElement("svg");e==="::before"?t.insertBefore(se,t.firstChild):t.appendChild(se),se.outerHTML=G.map(function(oe){return Mo(oe)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function O2(t){return Promise.all([Wp(t,"::before"),Wp(t,"::after")])}function D2(t){return t.parentNode!==document.head&&!~yL.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Uu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zp(t){if(Fn)return new Promise(function(e,n){var r=Zi(t.querySelectorAll("*")).filter(D2).map(O2),i=Yh.begin("searchPseudoElements");Ew(),Promise.all(r).then(function(){i(),Ku(),e()}).catch(function(){i(),Ku(),n()})})}var R2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zp,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ne:r;q.searchPseudoElements&&zp(i)}}},Kp=!1,x2={mixout:function(){return{dom:{unwatch:function(){Ew(),Kp=!0}}}},hooks:function(){return{bootstrap:function(){Bp(Vu("mutationObserverCallbacks",{}))},noAuto:function(){m2()},watch:function(n){var r=n.observeMutationsRoot;Kp?Ku():Bp(Vu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gp=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},N2={mixout:function(){return{parse:{transform:function(n){return Gp(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Gp(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:f,path:h};return{tag:"g",attributes:$({},m.outer),children:[{tag:"g",attributes:$({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),m.path)}]}]}}}},jl={x:0,y:0,width:"100%",height:"100%"};function Yp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function P2(t){return t.tag==="g"?t.children:[t]}var M2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ol(i.split(" ").map(function(o){return o.trim()})):Kh();return s.prefix||(s.prefix=ur()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,f=o.width,h=o.icon,m=NL({transform:c,containerWidth:f,iconWidth:l}),v={tag:"rect",attributes:$($({},jl),{},{fill:"white"})},w=u.children?{children:u.children.map(Yp)}:{},I={tag:"g",attributes:$({},m.inner),children:[Yp($({tag:u.tag,attributes:$($({},u.attributes),m.path)},w))]},y={tag:"g",attributes:$({},m.outer),children:[I]},g="mask-".concat(a||no()),b="clip-".concat(a||no()),x={tag:"mask",attributes:$($({},jl),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:P2(h)},x]};return r.push(O,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},jl)}),{children:r,attributes:i}}}},L2={provides:function(e){var n=!1;lr.matchMedia&&(n=lr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:$($({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},F2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},$2=[LL,I2,T2,k2,S2,R2,x2,N2,M2,L2,F2];XL($2,{mixoutsTo:Nt});Nt.noAuto;var Tw=Nt.config,U2=Nt.library;Nt.dom;var ac=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var j2=Nt.icon;Nt.layer;var B2=Nt.text;Nt.counter;function Qp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ht(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qp(Object(n),!0).forEach(function(r){wt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qp(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cc(t){return cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cc(t)}function wt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function q2(t,e){if(t==null)return{};var n=V2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Gu(t){return H2(t)||W2(t)||z2(t)||K2()}function H2(t){if(Array.isArray(t))return Yu(t)}function W2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function z2(t,e){if(t){if(typeof t=="string")return Yu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yu(t,e)}}function Yu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function K2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var G2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kw={exports:{}};(function(t){(function(e){var n=function(y,g,b){if(!l(g)||f(g)||h(g)||m(g)||c(g))return g;var x,O=0,B=0;if(u(g))for(x=[],B=g.length;O<B;O++)x.push(n(y,g[O],b));else{x={};for(var U in g)Object.prototype.hasOwnProperty.call(g,U)&&(x[y(U,b)]=n(y,g[U],b))}return x},r=function(y,g){g=g||{};var b=g.separator||"_",x=g.split||/(?=[A-Z])/;return y.split(x).join(b)},i=function(y){return v(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(g,b){return b?b.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},s=function(y){var g=i(y);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(y,g){return r(y,g).toLowerCase()},a=Object.prototype.toString,c=function(y){return typeof y=="function"},l=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},f=function(y){return a.call(y)=="[object Date]"},h=function(y){return a.call(y)=="[object RegExp]"},m=function(y){return a.call(y)=="[object Boolean]"},v=function(y){return y=y-0,y===y},w=function(y,g){var b=g&&"process"in g?g.process:g;return typeof b!="function"?y:function(x,O){return b(x,y,O)}},I={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(y,g){return n(w(i,g),y)},decamelizeKeys:function(y,g){return n(w(o,g),y,g)},pascalizeKeys:function(y,g){return n(w(s,g),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(G2)})(kw);var Y2=kw.exports,Q2=["class","style"];function X2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Y2.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function J2(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Xh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Xh(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=J2(u);break;case"style":c.style=X2(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=q2(n,Q2);return bc(t.tag,Ht(Ht(Ht({},e),{},{class:i.class,style:Ht(Ht({},i.style),o)},i.attrs),a),r)}var Sw=!1;try{Sw=!0}catch{}function Z2(){if(!Sw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Is(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?wt({},t,e):{}}function eF(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},wt(e,"fa-".concat(t.size),t.size!==null),wt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),wt(e,"fa-pull-".concat(t.pull),t.pull!==null),wt(e,"fa-swap-opacity",t.swapOpacity),wt(e,"fa-bounce",t.bounce),wt(e,"fa-shake",t.shake),wt(e,"fa-beat",t.beat),wt(e,"fa-fade",t.fade),wt(e,"fa-beat-fade",t.beatFade),wt(e,"fa-flash",t.flash),wt(e,"fa-spin-pulse",t.spinPulse),wt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Xp(t){if(t&&cc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ac.icon)return ac.icon(t);if(t===null)return null;if(cc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var tF=tt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=Re(function(){return Xp(e.icon)}),s=Re(function(){return Is("classes",eF(e))}),o=Re(function(){return Is("transform",typeof e.transform=="string"?ac.transform(e.transform):e.transform)}),a=Re(function(){return Is("mask",Xp(e.mask))}),c=Re(function(){return j2(i.value,Ht(Ht(Ht(Ht({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});Rr(c,function(u){if(!u)return Z2("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=Re(function(){return c.value?Xh(c.value.abstract[0],{},r):null});return function(){return l.value}}});tt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=Tw.familyPrefix,s=Re(function(){return["".concat(i,"-layers")].concat(Gu(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return bc("div",{class:s.value},r.default?r.default():[])}}});tt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=Tw.familyPrefix,s=Re(function(){return Is("classes",[].concat(Gu(e.counter?["".concat(i,"-layers-counter")]:[]),Gu(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=Re(function(){return Is("transform",typeof e.transform=="string"?ac.transform(e.transform):e.transform)}),a=Re(function(){var l=B2(e.value.toString(),Ht(Ht({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Re(function(){return Xh(a.value,{},r)});return function(){return c.value}}});var nF={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},rF={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.7 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},iF={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},sF={prefix:"fas",iconName:"chevron-left",icon:[384,512,[9001],"f053","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},oF={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};U2.add(rF,nF,iF,sF,oF);kf(Q0);const Jh=J1(II).component("font-awesome-icon",tF);Jh.use(tE());Jh.use(S0);Jh.mount("#app");
