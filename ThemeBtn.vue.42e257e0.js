import Ft from"./Icon.7f271688.js";import{_ as ye,f as ne,o as m,c as be,j as J,r as R,m as Z,k as x,w as he,a as Dt,P as Rt,l as Ut,q as zt,s as O,h as Gt,i as T,v as Ht,x as Kt,y as oe,z as ie,t as qt,A as Yt,B as Wt}from"./entry.ea3ea75c.js";import{_ as ot}from"./nuxt-link.9fb42404.js";const Xt=ne({props:{name:{type:String,required:!0}}});function Jt(e,t,n,r,a,o){return m(),be("span",{class:J(e.name)},null,2)}const it=ye(Xt,[["render",Jt]]);var Zt=typeof global=="object"&&global&&global.Object===Object&&global;const st=Zt;var Qt=typeof self=="object"&&self&&self.Object===Object&&self,Vt=st||Qt||Function("return this")();const A=Vt;var kt=A.Symbol;const $=kt;var ut=Object.prototype,en=ut.hasOwnProperty,tn=ut.toString,D=$?$.toStringTag:void 0;function nn(e){var t=en.call(e,D),n=e[D];try{e[D]=void 0;var r=!0}catch{}var a=tn.call(e);return r&&(t?e[D]=n:delete e[D]),a}var rn=Object.prototype,an=rn.toString;function on(e){return an.call(e)}var sn="[object Null]",un="[object Undefined]",Ee=$?$.toStringTag:void 0;function L(e){return e==null?e===void 0?un:sn:Ee&&Ee in Object(e)?nn(e):on(e)}function S(e){return e!=null&&typeof e=="object"}var ln="[object Symbol]";function ve(e){return typeof e=="symbol"||S(e)&&L(e)==ln}function lt(e,t){for(var n=-1,r=e==null?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}var cn=Array.isArray;const j=cn;var fn=1/0,xe=$?$.prototype:void 0,Me=xe?xe.toString:void 0;function ct(e){if(typeof e=="string")return e;if(j(e))return lt(e,ct)+"";if(ve(e))return Me?Me.call(e):"";var t=e+"";return t=="0"&&1/e==-fn?"-0":t}function K(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function dn(e){return e}var gn="[object AsyncFunction]",pn="[object Function]",yn="[object GeneratorFunction]",bn="[object Proxy]";function ft(e){if(!K(e))return!1;var t=L(e);return t==pn||t==yn||t==gn||t==bn}var hn=A["__core-js_shared__"];const se=hn;var Le=function(){var e=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function vn(e){return!!Le&&Le in e}var _n=Function.prototype,$n=_n.toString;function B(e){if(e!=null){try{return $n.call(e)}catch{}try{return e+""}catch{}}return""}var Tn=/[\\^$.*+?()[\]{}|]/g,mn=/^\[object .+?Constructor\]$/,An=Function.prototype,On=Object.prototype,wn=An.toString,Sn=On.hasOwnProperty,jn=RegExp("^"+wn.call(Sn).replace(Tn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Pn(e){if(!K(e)||vn(e))return!1;var t=ft(e)?jn:mn;return t.test(B(e))}function Cn(e,t){return e==null?void 0:e[t]}function N(e,t){var n=Cn(e,t);return Pn(n)?n:void 0}var In=N(A,"WeakMap");const ce=In;var Be=Object.create,En=function(){function e(){}return function(t){if(!K(t))return{};if(Be)return Be(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const xn=En;function Mn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ln(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var Bn=800,Nn=16,Fn=Date.now;function Dn(e){var t=0,n=0;return function(){var r=Fn(),a=Nn-(r-n);if(n=r,a>0){if(++t>=Bn)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function Rn(e){return function(){return e}}var Un=function(){try{var e=N(Object,"defineProperty");return e({},"",{}),e}catch{}}();const V=Un;var zn=V?function(e,t){return V(e,"toString",{configurable:!0,enumerable:!1,value:Rn(t),writable:!0})}:dn;const Gn=zn;var Hn=Dn(Gn);const Kn=Hn;function qn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var Yn=9007199254740991,Wn=/^(?:0|[1-9]\d*)$/;function Xn(e,t){var n=typeof e;return t=t??Yn,!!t&&(n=="number"||n!="symbol"&&Wn.test(e))&&e>-1&&e%1==0&&e<t}function dt(e,t,n){t=="__proto__"&&V?V(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function _e(e,t){return e===t||e!==e&&t!==t}var Jn=Object.prototype,Zn=Jn.hasOwnProperty;function gt(e,t,n){var r=e[t];(!(Zn.call(e,t)&&_e(r,n))||n===void 0&&!(t in e))&&dt(e,t,n)}function q(e,t,n,r){var a=!n;n||(n={});for(var o=-1,i=t.length;++o<i;){var s=t[o],u=r?r(n[s],e[s],s,n,e):void 0;u===void 0&&(u=e[s]),a?dt(n,s,u):gt(n,s,u)}return n}var Ne=Math.max;function Qn(e,t,n){return t=Ne(t===void 0?e.length-1:t,0),function(){for(var r=arguments,a=-1,o=Ne(r.length-t,0),i=Array(o);++a<o;)i[a]=r[t+a];a=-1;for(var s=Array(t+1);++a<t;)s[a]=r[a];return s[t]=n(i),Mn(e,this,s)}}var Vn=9007199254740991;function pt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Vn}function yt(e){return e!=null&&pt(e.length)&&!ft(e)}var kn=Object.prototype;function $e(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||kn;return e===n}function er(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var tr="[object Arguments]";function Fe(e){return S(e)&&L(e)==tr}var bt=Object.prototype,nr=bt.hasOwnProperty,rr=bt.propertyIsEnumerable,ar=Fe(function(){return arguments}())?Fe:function(e){return S(e)&&nr.call(e,"callee")&&!rr.call(e,"callee")};const ht=ar;function or(){return!1}var vt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,De=vt&&typeof module=="object"&&module&&!module.nodeType&&module,ir=De&&De.exports===vt,Re=ir?A.Buffer:void 0,sr=Re?Re.isBuffer:void 0,ur=sr||or;const k=ur;var lr="[object Arguments]",cr="[object Array]",fr="[object Boolean]",dr="[object Date]",gr="[object Error]",pr="[object Function]",yr="[object Map]",br="[object Number]",hr="[object Object]",vr="[object RegExp]",_r="[object Set]",$r="[object String]",Tr="[object WeakMap]",mr="[object ArrayBuffer]",Ar="[object DataView]",Or="[object Float32Array]",wr="[object Float64Array]",Sr="[object Int8Array]",jr="[object Int16Array]",Pr="[object Int32Array]",Cr="[object Uint8Array]",Ir="[object Uint8ClampedArray]",Er="[object Uint16Array]",xr="[object Uint32Array]",d={};d[Or]=d[wr]=d[Sr]=d[jr]=d[Pr]=d[Cr]=d[Ir]=d[Er]=d[xr]=!0;d[lr]=d[cr]=d[mr]=d[fr]=d[Ar]=d[dr]=d[gr]=d[pr]=d[yr]=d[br]=d[hr]=d[vr]=d[_r]=d[$r]=d[Tr]=!1;function Mr(e){return S(e)&&pt(e.length)&&!!d[L(e)]}function Te(e){return function(t){return e(t)}}var _t=typeof exports=="object"&&exports&&!exports.nodeType&&exports,U=_t&&typeof module=="object"&&module&&!module.nodeType&&module,Lr=U&&U.exports===_t,ue=Lr&&st.process,Br=function(){try{var e=U&&U.require&&U.require("util").types;return e||ue&&ue.binding&&ue.binding("util")}catch{}}();const F=Br;var Ue=F&&F.isTypedArray,Nr=Ue?Te(Ue):Mr;const $t=Nr;var Fr=Object.prototype,Dr=Fr.hasOwnProperty;function Tt(e,t){var n=j(e),r=!n&&ht(e),a=!n&&!r&&k(e),o=!n&&!r&&!a&&$t(e),i=n||r||a||o,s=i?er(e.length,String):[],u=s.length;for(var l in e)(t||Dr.call(e,l))&&!(i&&(l=="length"||a&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Xn(l,u)))&&s.push(l);return s}function mt(e,t){return function(n){return e(t(n))}}var Rr=mt(Object.keys,Object);const Ur=Rr;var zr=Object.prototype,Gr=zr.hasOwnProperty;function Hr(e){if(!$e(e))return Ur(e);var t=[];for(var n in Object(e))Gr.call(e,n)&&n!="constructor"&&t.push(n);return t}function me(e){return yt(e)?Tt(e):Hr(e)}function Kr(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var qr=Object.prototype,Yr=qr.hasOwnProperty;function Wr(e){if(!K(e))return Kr(e);var t=$e(e),n=[];for(var r in e)r=="constructor"&&(t||!Yr.call(e,r))||n.push(r);return n}function Ae(e){return yt(e)?Tt(e,!0):Wr(e)}var Xr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jr=/^\w*$/;function Zr(e,t){if(j(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||ve(e)?!0:Jr.test(e)||!Xr.test(e)||t!=null&&e in Object(t)}var Qr=N(Object,"create");const z=Qr;function Vr(){this.__data__=z?z(null):{},this.size=0}function kr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ea="__lodash_hash_undefined__",ta=Object.prototype,na=ta.hasOwnProperty;function ra(e){var t=this.__data__;if(z){var n=t[e];return n===ea?void 0:n}return na.call(t,e)?t[e]:void 0}var aa=Object.prototype,oa=aa.hasOwnProperty;function ia(e){var t=this.__data__;return z?t[e]!==void 0:oa.call(t,e)}var sa="__lodash_hash_undefined__";function ua(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=z&&t===void 0?sa:t,this}function M(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}M.prototype.clear=Vr;M.prototype.delete=kr;M.prototype.get=ra;M.prototype.has=ia;M.prototype.set=ua;function la(){this.__data__=[],this.size=0}function re(e,t){for(var n=e.length;n--;)if(_e(e[n][0],t))return n;return-1}var ca=Array.prototype,fa=ca.splice;function da(e){var t=this.__data__,n=re(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():fa.call(t,n,1),--this.size,!0}function ga(e){var t=this.__data__,n=re(t,e);return n<0?void 0:t[n][1]}function pa(e){return re(this.__data__,e)>-1}function ya(e,t){var n=this.__data__,r=re(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function P(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}P.prototype.clear=la;P.prototype.delete=da;P.prototype.get=ga;P.prototype.has=pa;P.prototype.set=ya;var ba=N(A,"Map");const G=ba;function ha(){this.size=0,this.__data__={hash:new M,map:new(G||P),string:new M}}function va(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ae(e,t){var n=e.__data__;return va(t)?n[typeof t=="string"?"string":"hash"]:n.map}function _a(e){var t=ae(this,e).delete(e);return this.size-=t?1:0,t}function $a(e){return ae(this,e).get(e)}function Ta(e){return ae(this,e).has(e)}function ma(e,t){var n=ae(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function C(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}C.prototype.clear=ha;C.prototype.delete=_a;C.prototype.get=$a;C.prototype.has=Ta;C.prototype.set=ma;var Aa="Expected a function";function Oe(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Aa);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(Oe.Cache||C),n}Oe.Cache=C;var Oa=500;function wa(e){var t=Oe(e,function(r){return n.size===Oa&&n.clear(),r}),n=t.cache;return t}var Sa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ja=/\\(\\)?/g,Pa=wa(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Sa,function(n,r,a,o){t.push(a?o.replace(ja,"$1"):r||n)}),t});const Ca=Pa;function Ia(e){return e==null?"":ct(e)}function we(e,t){return j(e)?e:Zr(e,t)?[e]:Ca(Ia(e))}var Ea=1/0;function At(e){if(typeof e=="string"||ve(e))return e;var t=e+"";return t=="0"&&1/e==-Ea?"-0":t}function xa(e,t){t=we(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[At(t[n++])];return n&&n==r?e:void 0}function Se(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}var ze=$?$.isConcatSpreadable:void 0;function Ma(e){return j(e)||ht(e)||!!(ze&&e&&e[ze])}function Ot(e,t,n,r,a){var o=-1,i=e.length;for(n||(n=Ma),a||(a=[]);++o<i;){var s=e[o];t>0&&n(s)?t>1?Ot(s,t-1,n,r,a):Se(a,s):r||(a[a.length]=s)}return a}function La(e){var t=e==null?0:e.length;return t?Ot(e,1):[]}function Ba(e){return Kn(Qn(e,void 0,La),e+"")}var Na=mt(Object.getPrototypeOf,Object);const je=Na;var Fa="[object Object]",Da=Function.prototype,Ra=Object.prototype,wt=Da.toString,Ua=Ra.hasOwnProperty,za=wt.call(Object);function Ga(e){if(!S(e)||L(e)!=Fa)return!1;var t=je(e);if(t===null)return!0;var n=Ua.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&wt.call(n)==za}function Ha(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+t];return o}function Ka(){this.__data__=new P,this.size=0}function qa(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Ya(e){return this.__data__.get(e)}function Wa(e){return this.__data__.has(e)}var Xa=200;function Ja(e,t){var n=this.__data__;if(n instanceof P){var r=n.__data__;if(!G||r.length<Xa-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new C(r)}return n.set(e,t),this.size=n.size,this}function w(e){var t=this.__data__=new P(e);this.size=t.size}w.prototype.clear=Ka;w.prototype.delete=qa;w.prototype.get=Ya;w.prototype.has=Wa;w.prototype.set=Ja;function Za(e,t){return e&&q(t,me(t),e)}function Qa(e,t){return e&&q(t,Ae(t),e)}var St=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ge=St&&typeof module=="object"&&module&&!module.nodeType&&module,Va=Ge&&Ge.exports===St,He=Va?A.Buffer:void 0,Ke=He?He.allocUnsafe:void 0;function ka(e,t){if(t)return e.slice();var n=e.length,r=Ke?Ke(n):new e.constructor(n);return e.copy(r),r}function eo(e,t){for(var n=-1,r=e==null?0:e.length,a=0,o=[];++n<r;){var i=e[n];t(i,n,e)&&(o[a++]=i)}return o}function jt(){return[]}var to=Object.prototype,no=to.propertyIsEnumerable,qe=Object.getOwnPropertySymbols,ro=qe?function(e){return e==null?[]:(e=Object(e),eo(qe(e),function(t){return no.call(e,t)}))}:jt;const Pe=ro;function ao(e,t){return q(e,Pe(e),t)}var oo=Object.getOwnPropertySymbols,io=oo?function(e){for(var t=[];e;)Se(t,Pe(e)),e=je(e);return t}:jt;const Pt=io;function so(e,t){return q(e,Pt(e),t)}function Ct(e,t,n){var r=t(e);return j(e)?r:Se(r,n(e))}function fe(e){return Ct(e,me,Pe)}function It(e){return Ct(e,Ae,Pt)}var uo=N(A,"DataView");const de=uo;var lo=N(A,"Promise");const ge=lo;var co=N(A,"Set");const pe=co;var Ye="[object Map]",fo="[object Object]",We="[object Promise]",Xe="[object Set]",Je="[object WeakMap]",Ze="[object DataView]",go=B(de),po=B(G),yo=B(ge),bo=B(pe),ho=B(ce),E=L;(de&&E(new de(new ArrayBuffer(1)))!=Ze||G&&E(new G)!=Ye||ge&&E(ge.resolve())!=We||pe&&E(new pe)!=Xe||ce&&E(new ce)!=Je)&&(E=function(e){var t=L(e),n=t==fo?e.constructor:void 0,r=n?B(n):"";if(r)switch(r){case go:return Ze;case po:return Ye;case yo:return We;case bo:return Xe;case ho:return Je}return t});const H=E;var vo=Object.prototype,_o=vo.hasOwnProperty;function $o(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&_o.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var To=A.Uint8Array;const ee=To;function Ce(e){var t=new e.constructor(e.byteLength);return new ee(t).set(new ee(e)),t}function mo(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Ao=/\w*$/;function Oo(e){var t=new e.constructor(e.source,Ao.exec(e));return t.lastIndex=e.lastIndex,t}var Qe=$?$.prototype:void 0,Ve=Qe?Qe.valueOf:void 0;function wo(e){return Ve?Object(Ve.call(e)):{}}function So(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var jo="[object Boolean]",Po="[object Date]",Co="[object Map]",Io="[object Number]",Eo="[object RegExp]",xo="[object Set]",Mo="[object String]",Lo="[object Symbol]",Bo="[object ArrayBuffer]",No="[object DataView]",Fo="[object Float32Array]",Do="[object Float64Array]",Ro="[object Int8Array]",Uo="[object Int16Array]",zo="[object Int32Array]",Go="[object Uint8Array]",Ho="[object Uint8ClampedArray]",Ko="[object Uint16Array]",qo="[object Uint32Array]";function Yo(e,t,n){var r=e.constructor;switch(t){case Bo:return Ce(e);case jo:case Po:return new r(+e);case No:return mo(e,n);case Fo:case Do:case Ro:case Uo:case zo:case Go:case Ho:case Ko:case qo:return So(e,n);case Co:return new r;case Io:case Mo:return new r(e);case Eo:return Oo(e);case xo:return new r;case Lo:return wo(e)}}function Wo(e){return typeof e.constructor=="function"&&!$e(e)?xn(je(e)):{}}var Xo="[object Map]";function Jo(e){return S(e)&&H(e)==Xo}var ke=F&&F.isMap,Zo=ke?Te(ke):Jo;const Qo=Zo;var Vo="[object Set]";function ko(e){return S(e)&&H(e)==Vo}var et=F&&F.isSet,ei=et?Te(et):ko;const ti=ei;var ni=1,ri=2,ai=4,Et="[object Arguments]",oi="[object Array]",ii="[object Boolean]",si="[object Date]",ui="[object Error]",xt="[object Function]",li="[object GeneratorFunction]",ci="[object Map]",fi="[object Number]",Mt="[object Object]",di="[object RegExp]",gi="[object Set]",pi="[object String]",yi="[object Symbol]",bi="[object WeakMap]",hi="[object ArrayBuffer]",vi="[object DataView]",_i="[object Float32Array]",$i="[object Float64Array]",Ti="[object Int8Array]",mi="[object Int16Array]",Ai="[object Int32Array]",Oi="[object Uint8Array]",wi="[object Uint8ClampedArray]",Si="[object Uint16Array]",ji="[object Uint32Array]",c={};c[Et]=c[oi]=c[hi]=c[vi]=c[ii]=c[si]=c[_i]=c[$i]=c[Ti]=c[mi]=c[Ai]=c[ci]=c[fi]=c[Mt]=c[di]=c[gi]=c[pi]=c[yi]=c[Oi]=c[wi]=c[Si]=c[ji]=!0;c[ui]=c[xt]=c[bi]=!1;function Q(e,t,n,r,a,o){var i,s=t&ni,u=t&ri,l=t&ai;if(n&&(i=a?n(e,r,a,o):n(e)),i!==void 0)return i;if(!K(e))return e;var h=j(e);if(h){if(i=$o(e),!s)return Ln(e,i)}else{var g=H(e),f=g==xt||g==li;if(k(e))return ka(e,s);if(g==Mt||g==Et||f&&!a){if(i=u||f?{}:Wo(e),!s)return u?so(e,Qa(i,e)):ao(e,Za(i,e))}else{if(!c[g])return a?e:{};i=Yo(e,g,s)}}o||(o=new w);var p=o.get(e);if(p)return p;o.set(e,i),ti(e)?e.forEach(function(v){i.add(Q(v,t,n,v,e,o))}):Qo(e)&&e.forEach(function(v,_){i.set(_,Q(v,t,n,_,e,o))});var y=l?u?It:fe:u?Ae:me,b=h?void 0:y(e);return qn(b||e,function(v,_){b&&(_=v,v=e[_]),gt(i,_,Q(v,t,n,_,e,o))}),i}var Pi="__lodash_hash_undefined__";function Ci(e){return this.__data__.set(e,Pi),this}function Ii(e){return this.__data__.has(e)}function te(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new C;++t<n;)this.add(e[t])}te.prototype.add=te.prototype.push=Ci;te.prototype.has=Ii;function Ei(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function xi(e,t){return e.has(t)}var Mi=1,Li=2;function Lt(e,t,n,r,a,o){var i=n&Mi,s=e.length,u=t.length;if(s!=u&&!(i&&u>s))return!1;var l=o.get(e),h=o.get(t);if(l&&h)return l==t&&h==e;var g=-1,f=!0,p=n&Li?new te:void 0;for(o.set(e,t),o.set(t,e);++g<s;){var y=e[g],b=t[g];if(r)var v=i?r(b,y,g,t,e,o):r(y,b,g,e,t,o);if(v!==void 0){if(v)continue;f=!1;break}if(p){if(!Ei(t,function(_,I){if(!xi(p,I)&&(y===_||a(y,_,n,r,o)))return p.push(I)})){f=!1;break}}else if(!(y===b||a(y,b,n,r,o))){f=!1;break}}return o.delete(e),o.delete(t),f}function Bi(e){var t=-1,n=Array(e.size);return e.forEach(function(r,a){n[++t]=[a,r]}),n}function Ni(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Fi=1,Di=2,Ri="[object Boolean]",Ui="[object Date]",zi="[object Error]",Gi="[object Map]",Hi="[object Number]",Ki="[object RegExp]",qi="[object Set]",Yi="[object String]",Wi="[object Symbol]",Xi="[object ArrayBuffer]",Ji="[object DataView]",tt=$?$.prototype:void 0,le=tt?tt.valueOf:void 0;function Zi(e,t,n,r,a,o,i){switch(n){case Ji:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Xi:return!(e.byteLength!=t.byteLength||!o(new ee(e),new ee(t)));case Ri:case Ui:case Hi:return _e(+e,+t);case zi:return e.name==t.name&&e.message==t.message;case Ki:case Yi:return e==t+"";case Gi:var s=Bi;case qi:var u=r&Fi;if(s||(s=Ni),e.size!=t.size&&!u)return!1;var l=i.get(e);if(l)return l==t;r|=Di,i.set(e,t);var h=Lt(s(e),s(t),r,a,o,i);return i.delete(e),h;case Wi:if(le)return le.call(e)==le.call(t)}return!1}var Qi=1,Vi=Object.prototype,ki=Vi.hasOwnProperty;function es(e,t,n,r,a,o){var i=n&Qi,s=fe(e),u=s.length,l=fe(t),h=l.length;if(u!=h&&!i)return!1;for(var g=u;g--;){var f=s[g];if(!(i?f in t:ki.call(t,f)))return!1}var p=o.get(e),y=o.get(t);if(p&&y)return p==t&&y==e;var b=!0;o.set(e,t),o.set(t,e);for(var v=i;++g<u;){f=s[g];var _=e[f],I=t[f];if(r)var Ie=i?r(I,_,f,t,e,o):r(_,I,f,e,t,o);if(!(Ie===void 0?_===I||a(_,I,n,r,o):Ie)){b=!1;break}v||(v=f=="constructor")}if(b&&!v){var Y=e.constructor,W=t.constructor;Y!=W&&"constructor"in e&&"constructor"in t&&!(typeof Y=="function"&&Y instanceof Y&&typeof W=="function"&&W instanceof W)&&(b=!1)}return o.delete(e),o.delete(t),b}var ts=1,nt="[object Arguments]",rt="[object Array]",X="[object Object]",ns=Object.prototype,at=ns.hasOwnProperty;function rs(e,t,n,r,a,o){var i=j(e),s=j(t),u=i?rt:H(e),l=s?rt:H(t);u=u==nt?X:u,l=l==nt?X:l;var h=u==X,g=l==X,f=u==l;if(f&&k(e)){if(!k(t))return!1;i=!0,h=!1}if(f&&!h)return o||(o=new w),i||$t(e)?Lt(e,t,n,r,a,o):Zi(e,t,u,n,r,a,o);if(!(n&ts)){var p=h&&at.call(e,"__wrapped__"),y=g&&at.call(t,"__wrapped__");if(p||y){var b=p?e.value():e,v=y?t.value():t;return o||(o=new w),a(b,v,n,r,o)}}return f?(o||(o=new w),es(e,t,n,r,a,o)):!1}function Bt(e,t,n,r,a){return e===t?!0:e==null||t==null||!S(e)&&!S(t)?e!==e&&t!==t:rs(e,t,n,r,Bt,a)}function as(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}function os(e,t){return t.length<2?e:xa(e,Ha(t,0,-1))}function is(e,t){return Bt(e,t)}function ss(e,t){return t=we(t,e),e=os(e,t),e==null||delete e[At(as(t))]}function us(e){return Ga(e)?void 0:e}var ls=1,cs=2,fs=4,ds=Ba(function(e,t){var n={};if(e==null)return n;var r=!1;t=lt(t,function(o){return o=we(o,e),r||(r=o.length>1),o}),q(e,It(e),n),r&&(n=Q(n,ls|cs|fs,us));for(var a=t.length;a--;)ss(n,t[a]);return n});const gs=ds,ps=ne({inheritAttrs:!1,props:{...ot.props,type:{type:String,default:null},disabled:{type:Boolean,default:null},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function t(n,r,{isActive:a,isExactActive:o}){return e.exactQuery&&!is(n.query,r.query)||e.exactHash&&n.hash!==r.hash?e.inactiveClass:e.exact&&o||!e.exact&&a?e.activeClass:e.inactiveClass}return{resolveLinkClass:t}}}),ys=["type","disabled"],bs=["href","aria-disabled","role","rel","target","onClick"];function hs(e,t,n,r,a,o){const i=ot;return e.to?(m(),x(i,Z({key:1},e.$props,{custom:""}),{default:he(({route:s,href:u,target:l,rel:h,navigate:g,isActive:f,isExactActive:p,isExternal:y})=>[Dt("a",Z(e.$attrs,{href:e.disabled?void 0:u,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:h,target:l,class:e.resolveLinkClass(s,e._.provides[Rt]||e.$route,{isActive:f,isExactActive:p}),onClick:b=>!y&&g(b)}),[R(e.$slots,"default",Ut(zt({isActive:e.exact?p:f})))],16,bs)]),_:3},16)):(m(),be("button",Z({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),[R(e.$slots,"default")],16,ys))}const Nt=ye(ps,[["render",hs]]),vs=ne({components:{UIcon:it,ULink:Nt},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>O.ui.button.default.size,validator(e){return Object.keys(O.ui.button.size).includes(e)}},color:{type:String,default:()=>O.ui.button.default.color,validator(e){return[...O.ui.colors,...Object.keys(O.ui.button.color)].includes(e)}},variant:{type:String,default:()=>O.ui.button.default.variant,validator(e){return[...Object.keys(O.ui.button.variant),...Object.values(O.ui.button.color).flatMap(t=>Object.keys(t))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>O.ui.button.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},ui:{type:Object,default:()=>({})}},setup(e,{attrs:t,slots:n}){const r=Gt(),a=T(()=>Ht({},e.ui,r.ui.button)),o=T(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),i=T(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),s=T(()=>e.square||!n.default&&!e.label),u=T(()=>{var y,b;const p=((b=(y=a.value.color)==null?void 0:y[e.color])==null?void 0:b[e.variant])||a.value.variant[e.variant];return Kt(oe(a.value.base,a.value.font,a.value.rounded,a.value.size[e.size],a.value.gap[e.size],e.padded&&a.value[s.value?"square":"padding"][e.size],p==null?void 0:p.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),t.class)}),l=T(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),h=T(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),g=T(()=>oe(a.value.icon.base,a.value.icon.size[e.size],e.loading&&"animate-spin")),f=T(()=>oe(a.value.icon.base,a.value.icon.size[e.size],e.loading&&!o.value&&"animate-spin"));return{attrs:gs(t,["class"]),isLeading:o,isTrailing:i,isSquare:s,buttonClass:u,leadingIconName:l,trailingIconName:h,leadingIconClass:g,trailingIconClass:f}}});function _s(e,t,n,r,a,o){const i=it,s=Nt;return m(),x(s,Z({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:he(()=>[R(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(m(),x(i,{key:0,name:e.leadingIconName,class:J(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):ie("",!0)]),R(e.$slots,"default",{},()=>[e.label?(m(),be("span",{key:0,class:J([e.truncate?"text-left break-all line-clamp-1":""])},qt(e.label),3)):ie("",!0)]),R(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(m(),x(i,{key:0,name:e.trailingIconName,class:J(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):ie("",!0)])]),_:3},16,["type","disabled","class"])}const $s=ye(vs,[["render",_s]]),Ts=()=>Yt("color-mode").value,ws=ne({__name:"ThemeBtn",props:{size:{type:Number,default:20}},setup(e){const t=e,n=Ts(),r=T(()=>n.value==="dark"),a=()=>{n.preference=n.value==="dark"?"light":"dark"};return(o,i)=>{const s=Ft,u=$s;return m(),x(u,{color:"gray",ui:{rounded:"rounded-full",padding:{sm:"p-2"}},onClick:a},{default:he(()=>[Wt(r)?(m(),x(s,{key:0,name:"line-md:sunny-outline-to-moon-alt-loop-transition",height:`${t.size}`,width:`${t.size}`},null,8,["height","width"])):(m(),x(s,{key:1,name:"line-md:moon-alt-to-sunny-outline-loop-transition",size:`${t.size}`},null,8,["size"]))]),_:1})}}});export{ws as _};
