import{v as $e,I as Z,J as ve,y as de,r as T,e as v,K as fe,L as Ae,M as Be,R as Me,N as h,O as se,P as Ee,S as De,B as N,T as Qe,U as We,V as Fe,W as be,X as je,Y as Oe,z as Q,Z as p,$ as ce,a0 as Ke,a1 as Ve,a2 as ze,a3 as Ne}from"./index-309c853f.js";import{Q as He}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-12a05a3b.js";let Ue=0;const Xe=["click","keydown"],Ge={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ue++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Je(e,y,C,u){const r=$e(ve,Z);if(r===Z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Z;const{proxy:M}=de(),E=T(null),W=T(null),F=T(null),H=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),x=v(()=>r.currentModel.value===e.name),U=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(x.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),P=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=v(()=>e.disable===!0||r.hasFocus.value===!0||x.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function q(l,b){if(b!==!0&&E.value!==null&&E.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&se(l);return}if(u===void 0){r.updateModel({name:e.name}),C("click",l);return}if(u.hasRouterLink.value===!0){const m=(d={})=>{let w;const R=d.to===void 0||We(d.to,e.to)===!0?r.avoidRouteWatcher=Fe():null;return u.navigateToRouterLink(l,{...d,returnRouterError:!0}).catch(I=>{w=I}).then(I=>{if(R===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,w===void 0&&(I===void 0||I.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),d.returnRouterError===!0)return w!==void 0?Promise.reject(w):I})};C("click",l,m),l.defaultPrevented!==!0&&m();return}C("click",l)}function L(l){Ee(l,[13,32])?q(l,!0):De(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,M.$el)===!0&&se(l),C("keydown",l)}function D(){const l=r.tabProps.value.narrowIndicator,b=[],m=h("div",{ref:F,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(h(N,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?h(N,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&b.push(m);const d=[h("div",{class:"q-focus-helper",tabindex:-1,ref:E}),h("div",{class:P.value},Qe(y.default,b))];return l===!1&&d.push(m),d}const $={name:v(()=>e.name),rootRef:W,tabIndicatorRef:F,routeData:u};fe(()=>{r.unregisterTab($)}),Ae(()=>{r.registerTab($)});function j(l,b){const m={ref:W,class:U.value,tabindex:g.value,role:"tab","aria-selected":x.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:L,...b};return Be(h(l,m,D()),[[Me,H.value]])}return{renderTab:j,$tabs:r}}const tt=be({name:"QRouteTab",props:{...je,...Ge},emits:Xe,setup(e,{slots:y,emit:C}){const u=Oe({useDisableForRouterLinkProps:!1}),{renderTab:r,$tabs:M}=Je(e,y,C,{exact:v(()=>e.exact),...u});return Q(()=>`${e.name} | ${e.exact} | ${(u.resolvedLink.value||{}).href}`,()=>{M.verifyRouteModel()}),()=>r(u.linkTag.value,u.linkAttrs.value)}});let he=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const y=document.createElement("div");Object.assign(y.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(y),e.scrollLeft=-1e3,he=e.scrollLeft>=0,e.remove()}function Ye(e,y,C){const u=C===!0?["left","right"]:["top","bottom"];return`absolute-${y===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const Ze=["left","center","right","justify"],at=be({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ze.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:y,emit:C}){const{proxy:u}=de(),{$q:r}=u,{registerTick:M}=p(),{registerTick:E}=p(),{registerTick:W}=p(),{registerTimeout:F,removeTimeout:H}=ce(),{registerTimeout:x,removeTimeout:U}=ce(),P=T(null),g=T(null),q=T(e.modelValue),L=T(!1),D=T(!0),$=T(!1),j=T(!1),l=[],b=T(0),m=T(!1);let d=null,w=null,R;const I=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ye(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ge=v(()=>{const t=b.value,a=q.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),me=v(()=>`q-tabs__content--align-${L.value===!0?"left":j.value===!0?"justify":e.align}`),Te=v(()=>`q-tabs row no-wrap items-center q-tabs--${L.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),we=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+me.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),O=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=v(()=>e.vertical!==!0&&r.lang.rtl===!0),X=v(()=>he===!1&&K.value===!0);Q(K,B),Q(()=>e.modelValue,t=>{G({name:t,setCurrent:!0,skipEmit:!0})}),Q(()=>e.outsideArrows,V);function G({name:t,setCurrent:a,skipEmit:n}){q.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(ye(q.value,t),q.value=t))}function V(){M(()=>{ee({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function ee(t){if(O.value===void 0||g.value===null)return;const a=t[O.value.container],n=Math.min(g.value[O.value.scroll],Array.prototype.reduce.call(g.value.children,(c,i)=>c+(i[O.value.content]||0),0)),s=a>0&&n>a;L.value=s,s===!0&&E(B),j.value=a<parseInt(e.breakpoint,10)}function ye(t,a){const n=t!=null&&t!==""?l.find(c=>c.name.value===t):null,s=a!=null&&a!==""?l.find(c=>c.name.value===a):null;if(n&&s){const c=n.tabIndicatorRef.value,i=s.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),c.style.transition="none",c.style.transform="none",i.style.transition="none",i.style.transform="none";const o=c.getBoundingClientRect(),f=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-f.top}px,0) scale3d(1,${f.height?o.height/f.height:1},1)`:`translate3d(${o.left-f.left}px,0,0) scale3d(${f.width?o.width/f.width:1},1,1)`,W(()=>{d=setTimeout(()=>{d=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}s&&L.value===!0&&A(s.rootRef.value)}function A(t){const{left:a,width:n,top:s,height:c}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let o=e.vertical===!0?i.top-s:i.left-a;if(o<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),B();return}o+=e.vertical===!0?i.height-c:i.width-n,o>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),B())}function B(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);K.value===!0?(D.value=Math.ceil(n+a.width)<t.scrollWidth-1,$.value=n>0):(D.value=n>0,$.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function te(t){w!==null&&clearInterval(w),w=setInterval(()=>{Re(t)===!0&&_()},5)}function ae(){te(X.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(X.value===!0?0:Number.MAX_SAFE_INTEGER)}function _(){w!==null&&(clearInterval(w),w=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,f=>f===a||f.matches&&f.matches(".q-tab.q-focusable")===!0),s=n.length;if(s===0)return;if(t===36)return A(n[0]),n[0].focus(),!0;if(t===35)return A(n[s-1]),n[s-1].focus(),!0;const c=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),o=c===!0?-1:i===!0?1:void 0;if(o!==void 0){const f=K.value===!0?-1:1,k=n.indexOf(a)+o*f;return k>=0&&k<s&&(A(n[k]),n[k].focus({preventScroll:!0})),!0}}const qe=v(()=>X.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Re(t){const a=g.value,{get:n,set:s}=qe.value;let c=!1,i=n(a);const o=t<i?-1:1;return i+=o*5,i<0?(c=!0,i=0):(o===-1&&i<=t||o===1&&i>=t)&&(c=!0,i=t),s(a,i),B(),c}function le(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function ke(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:s,query:c}=u.$route,i=Object.keys(c).length;for(const o of n){const f=o.routeData.exact.value===!0;if(o.routeData[f===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:k,query:J,matched:Ie,href:xe}=o.routeData.resolvedLink.value,Y=Object.keys(J).length;if(f===!0){if(k!==s||Y!==i||le(c,J)===!1)continue;t=o.name.value;break}if(k!==""&&k!==s||Y!==0&&le(J,c)===!1)continue;const S={matchedLen:Ie.length,queryDiff:i-Y,hrefLen:xe.length-k.length};if(S.matchedLen>a.matchedLen){t=o.name.value,a=S;continue}else if(S.matchedLen!==a.matchedLen)continue;if(S.queryDiff<a.queryDiff)t=o.name.value,a=S;else if(S.queryDiff!==a.queryDiff)continue;S.hrefLen>a.hrefLen&&(t=o.name.value,a=S)}t===null&&l.some(o=>o.routeData===void 0&&o.name.value===q.value)===!0||G({name:t,setCurrent:!0})}function Le(t){if(H(),m.value!==!0&&P.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&P.value.contains(a)===!0&&(m.value=!0,L.value===!0&&A(a))}}function _e(){F(()=>{m.value=!1},30)}function z(){re.avoidRouteWatcher===!1?x(ke):U()}function oe(){if(R===void 0){const t=Q(()=>u.$route.fullPath,z);R=()=>{t(),R=void 0}}}function Se(t){l.push(t),b.value++,V(),t.routeData===void 0||u.$route===void 0?x(()=>{if(L.value===!0){const a=q.value,n=a!=null&&a!==""?l.find(s=>s.name.value===a):null;n&&A(n.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&z())}function Pe(t){l.splice(l.indexOf(t),1),b.value--,V(),R!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&R(),z())}const re={currentModel:q,tabProps:I,hasFocus:m,hasActiveTab:ge,registerTab:Se,unregisterTab:Pe,verifyRouteModel:z,updateModel:G,onKbdNavigate:Ce,avoidRouteWatcher:!1};Ke(ve,re);function ie(){d!==null&&clearTimeout(d),_(),R!==void 0&&R()}let ue;return fe(ie),Ve(()=>{ue=R!==void 0,ie()}),ze(()=>{ue===!0&&oe(),V()}),()=>h("div",{ref:P,class:Te.value,role:"tablist",onFocusin:Le,onFocusout:_e},[h(He,{onResize:ee}),h("div",{ref:g,class:we.value,onScroll:B},Ne(y.default)),h(N,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:_,onMouseleavePassive:_,onTouchendPassive:_}),h(N,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+($.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:_,onMouseleavePassive:_,onTouchendPassive:_})])}});export{tt as Q,at as a};
