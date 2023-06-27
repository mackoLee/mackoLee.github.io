import{ap as ot,aq as lt,ad as U,ar as Ce,as as rt,a9 as Z,at as me,a7 as Oe,au as ge,av as _e,aa as ye,N as ut,V as R,af as st,aw as ct,ah as dt,y as A,ax as ft,Z as vt,v as oe,H,an as Y,r as x,e as f,aj as ht,ay as mt,z as S,K as X,a8 as ne,J as F,L as gt,M as _,az as Pe,a2 as K,aA as yt,$ as De,ao as bt,al as wt,ab as qe,aB as pt,aC as St,aD as ze,ae as be,aE as ee,a3 as _t,S as Fe,am as qt,aF as Ct,aG as zt,a as Te,aH as Tt,o as le,c as re,w as L,b as ae,t as xt,l as I,_ as Ae,f as B,aI as kt,Q as $t,B as Lt}from"./index-cd7c2bc7.js";const xe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Bt=Object.keys(xe);xe.all=!0;function Ee(e){const n={};for(const i of Bt)e[i]===!0&&(n[i]=!0);return Object.keys(n).length===0?xe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Ot=["INPUT","TEXTAREA"];function Ve(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Ot.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Pt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ot.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function we(e,n,i){const r=_e(e);let t,a=r.left-n.event.x,s=r.top-n.event.y,v=Math.abs(a),c=Math.abs(s);const u=n.direction;u.horizontal===!0&&u.vertical!==!0?t=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?t=s<0?"up":"down":u.up===!0&&s<0?(t="up",v>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.down===!0&&s>0?(t="down",v>c&&(u.left===!0&&a<0?t="left":u.right===!0&&a>0&&(t="right"))):u.left===!0&&a<0?(t="left",v<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down"))):u.right===!0&&a>0&&(t="right",v<c&&(u.up===!0&&s<0?t="up":u.down===!0&&s>0&&(t="down")));let l=!1;if(t===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,l=!0,t==="left"||t==="right"?(r.left-=a,v=0,a=0):(r.top-=s,c=0,s=0)}return{synthetic:l,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:r,direction:t,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:v,y:c},offset:{x:a,y:s},delta:{x:r.left-n.event.lastX,y:r.top-n.event.lastY}}}}let Et=0;const pe=lt({name:"touch-pan",beforeMount(e,{value:n,modifiers:i}){if(i.mouse!==!0&&U.has.touch!==!0)return;function r(a,s){i.mouse===!0&&s===!0?ut(a):(i.stop===!0&&ge(a),i.prevent===!0&&Oe(a))}const t={uid:"qvtp_"+Et++,handler:n,modifiers:i,direction:Ee(i),noop:Ce,mouseStart(a){Ve(a,t)&&rt(a)&&(Z(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ve(a,t)){const s=a.target;Z(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(U.is.firefox===!0&&me(e,!0),t.lastEvt=a,s===!0||i.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Oe(u),a.cancelBubble===!0&&ge(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:u}}ge(a)}const{left:v,top:c}=_e(a);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const s=_e(a),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const u=t.event.mouse===!0,l=()=>{r(a,u);let m;i.preserveCursor!==!0&&i.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Pt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),u===!0){const k=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{k(),g()},50):k()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:m,synthetic:g}=we(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=g===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||u===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(a);return}const q=Math.abs(v),C=Math.abs(c);q!==C&&(t.direction.horizontal===!0&&q>C||t.direction.vertical===!0&&q<C||t.direction.up===!0&&q<C&&c<0||t.direction.down===!0&&q<C&&c>0||t.direction.left===!0&&q>C&&v<0||t.direction.right===!0&&q>C&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(ye(t,"temp"),U.is.firefox===!0&&me(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(we(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=we(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";Z(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}U.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=Ee(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),ye(n,"main"),ye(n,"temp"),U.is.firefox===!0&&me(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function te(e,n,i){return i<=n?n:Math.min(i,Math.max(n,e))}const He=150,Me=R({name:"QDrawer",inheritAttrs:!1,props:{...st,...ct,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...dt,"onLayout","miniState"],setup(e,{slots:n,emit:i,attrs:r}){const t=A(),{proxy:{$q:a}}=t,s=ft(e,a),{preventBodyScroll:v}=yt(),{registerTimeout:c,removeTimeout:u}=vt(),l=oe(Y,H);if(l===H)return console.error("QDrawer needs to be child of QLayout"),H;let q,C=null,m;const g=x(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),k=f(()=>e.mini===!0&&g.value!==!0),T=f(()=>k.value===!0?e.miniWidth:e.width),p=x(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),h=f(()=>e.persistent!==!0&&(g.value===!0||Ie.value===!0));function $(o,w){if(M(),o!==!1&&l.animate(),V(0),g.value===!0){const P=l.instances[G.value];P!==void 0&&P.belowBreakpoint===!0&&P.hide(!1),Q(1),l.isContainer.value!==!0&&v(!0)}else Q(0),o!==!1&&fe(!1);c(()=>{o!==!1&&fe(!0),w!==!0&&i("show",o)},He)}function y(o,w){b(),o!==!1&&l.animate(),Q(0),V(N.value*T.value),ve(),w!==!0?c(()=>{i("hide",o)},He):u()}const{show:d,hide:z}=ht({showing:p,hideOnRouteChange:h,handleShow:$,handleHide:y}),{addToHistory:M,removeFromHistory:b}=mt(p,z,h),E={belowBreakpoint:g,hide:z},O=f(()=>e.side==="right"),N=f(()=>(a.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),ke=x(0),W=x(!1),ue=x(!1),$e=x(T.value*N.value),G=f(()=>O.value===!0?"left":"right"),se=f(()=>p.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),ce=f(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(O.value?"R":"L")>-1||a.platform.is.ios===!0&&l.isContainer.value===!0),j=f(()=>e.overlay===!1&&p.value===!0&&g.value===!1),Ie=f(()=>e.overlay===!0&&p.value===!0&&g.value===!1),je=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&W.value===!1?" hidden":"")),Ue=f(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),Le=f(()=>O.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Xe=f(()=>O.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Ye=f(()=>{const o={};return l.header.space===!0&&Le.value===!1&&(ce.value===!0?o.top=`${l.header.offset}px`:l.header.space===!0&&(o.top=`${l.header.size}px`)),l.footer.space===!0&&Xe.value===!1&&(ce.value===!0?o.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(o.bottom=`${l.footer.size}px`)),o}),Ke=f(()=>{const o={width:`${T.value}px`,transform:`translateX(${$e.value}px)`};return g.value===!0?o:Object.assign(o,Ye.value)}),Ge=f(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Je=f(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${k.value===!0?"mini":"standard"}`+(ce.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),Ze=f(()=>{const o=a.lang.rtl===!0?e.side:G.value;return[[pe,nt,void 0,{[o]:!0,mouse:!0}]]}),et=f(()=>{const o=a.lang.rtl===!0?G.value:e.side;return[[pe,Be,void 0,{[o]:!0,mouse:!0}]]}),tt=f(()=>{const o=a.lang.rtl===!0?G.value:e.side;return[[pe,Be,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){it(g,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}S(g,o=>{o===!0?(q=p.value,p.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(p.value===!0?(V(0),Q(0),ve()):d(!1))}),S(()=>e.side,(o,w)=>{l.instances[w]===E&&(l.instances[w]=void 0,l[w].space=!1,l[w].offset=0),l.instances[o]=E,l[o].size=T.value,l[o].space=j.value,l[o].offset=se.value}),S(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),S(()=>e.behavior+e.breakpoint,de),S(l.isContainer,o=>{p.value===!0&&v(o!==!0),o===!0&&de()}),S(l.scrollbarWidth,()=>{V(p.value===!0?0:void 0)}),S(se,o=>{D("offset",o)}),S(j,o=>{i("onLayout",o),D("space",o)}),S(O,()=>{V()}),S(T,o=>{V(),he(e.miniToOverlay,o)}),S(()=>e.miniToOverlay,o=>{he(o,T.value)}),S(()=>a.lang.rtl,()=>{V()}),S(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(at(),l.animate())}),S(k,o=>{i("miniState",o)});function V(o){o===void 0?ne(()=>{o=p.value===!0?0:T.value,V(N.value*o)}):(l.isContainer.value===!0&&O.value===!0&&(g.value===!0||Math.abs(o)===T.value)&&(o+=N.value*l.scrollbarWidth.value),$e.value=o)}function Q(o){ke.value=o}function fe(o){const w=o===!0?"remove":l.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function at(){C!==null&&clearTimeout(C),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,C=setTimeout(()=>{C=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function nt(o){if(p.value!==!1)return;const w=T.value,P=te(o.distance.x,0,w);if(o.isFinal===!0){P>=Math.min(75,w)===!0?d():(l.animate(),Q(0),V(N.value*w)),W.value=!1;return}V((a.lang.rtl===!0?O.value!==!0:O.value)?Math.max(w-P,0):Math.min(0,P-w)),Q(te(P/w,0,1)),o.isFirst===!0&&(W.value=!0)}function Be(o){if(p.value!==!0)return;const w=T.value,P=o.direction===e.side,J=(a.lang.rtl===!0?P!==!0:P)?te(o.distance.x,0,w):0;if(o.isFinal===!0){Math.abs(J)<Math.min(75,w)===!0?(l.animate(),Q(1),V(0)):z(),W.value=!1;return}V(N.value*J),Q(te(1-J/w,0,1)),o.isFirst===!0&&(W.value=!0)}function ve(){v(!1),fe(!0)}function D(o,w){l.update(e.side,o,w)}function it(o,w){o.value!==w&&(o.value=w)}function he(o,w){D("size",o===!0?e.miniWidth:w)}return l.instances[e.side]=E,he(e.miniToOverlay,T.value),D("space",j.value),D("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),X(()=>{i("onLayout",j.value),i("miniState",k.value),q=e.showIfAbove===!0;const o=()=>{(p.value===!0?$:y)(!1,!0)};if(l.totalWidth.value!==0){ne(o);return}m=S(l.totalWidth,()=>{m(),m=void 0,p.value===!1&&e.showIfAbove===!0&&g.value===!1?d(!1):o()})}),F(()=>{m!==void 0&&m(),C!==null&&(clearTimeout(C),C=null),p.value===!0&&ve(),l.instances[e.side]===E&&(l.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const o=[];g.value===!0&&(e.noSwipeOpen===!1&&o.push(gt(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ze.value)),o.push(Pe("div",{ref:"backdrop",class:je.value,style:Ue.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>tt.value)));const w=k.value===!0&&n.mini!==void 0,P=[_("div",{...r,key:""+w,class:[Ge.value,r.class]},w===!0?n.mini():K(n.default))];return e.elevated===!0&&p.value===!0&&P.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Pe("aside",{ref:"content",class:Je.value,style:Ke.value},P,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>et.value)),_("div",{class:"q-drawer-container"},o)}}}),Vt=R({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:i}}=A(),r=oe(Y,H);if(r===H)return console.error("QPageContainer needs to be child of QLayout"),H;De(bt,!0);const t=f(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>_("div",{class:"q-page-container",style:t.value},K(n.default))}}),{passive:Re}=qe,Ht=["both","horizontal","vertical"],Mt=R({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ht.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const i={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,a;S(()=>e.scrollTarget,()=>{c(),v()});function s(){r!==null&&r();const q=Math.max(0,pt(t)),C=St(t),m={top:q-i.position.top,left:C-i.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const g=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";i.position={top:q,left:C},i.directionChanged=i.direction!==g,i.delta=m,i.directionChanged===!0&&(i.direction=g,i.inflectionPoint=i.position),n("scroll",{...i})}function v(){t=wt(a,e.scrollTarget),t.addEventListener("scroll",u,Re),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,Re),t=void 0)}function u(q){if(q===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[C,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{m(C),r=null}}}const{proxy:l}=A();return S(()=>l.$q.lang.rtl,s),X(()=>{a=l.$el.parentNode,v()}),F(()=>{r!==null&&r(),c()}),Object.assign(l,{trigger:u,getPosition:()=>i}),Ce}});function Rt(){const e=x(!ze.value);return e.value===!1&&X(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver<"u",Qe=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},ie=R({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let i=null,r,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==t.width||u!==t.height)&&(t={width:c,height:u},n("resize",t))}}const{proxy:v}=A();if(Ne===!0){let c;const u=l=>{r=v.$el.parentNode,r?(c=new ResizeObserver(a),c.observe(r),s()):l!==!0&&ne(()=>{u(!0)})};return X(()=>{u()}),F(()=>{i!==null&&clearTimeout(i),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),Ce}else{let l=function(){i!==null&&(clearTimeout(i),i=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",a,qe.passive),u=void 0)},q=function(){l(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",a,qe.passive),s())};const c=Rt();let u;return X(()=>{ne(()=>{r=v.$el,r&&q()})}),F(l),v.trigger=a,()=>{if(c.value===!0)return _("object",{style:Qe.style,tabindex:-1,type:"text/html",data:Qe.url,"aria-hidden":"true",onLoad:q})}}}}),Qt=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=A(),t=x(null),a=x(r.screen.height),s=x(e.container===!0?0:r.screen.width),v=x({position:0,direction:"down",inflectionPoint:0}),c=x(0),u=x(ze.value===!0?0:be()),l=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=f(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),C=f(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=f(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function g(y){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};v.value=d,e.onScroll!==void 0&&i("scroll",d)}}function k(y){const{height:d,width:z}=y;let M=!1;a.value!==d&&(M=!0,a.value=d,e.onScrollHeight!==void 0&&i("scrollHeight",d),p()),s.value!==z&&(M=!0,s.value=z),M===!0&&e.onResize!==void 0&&i("resize",y)}function T({height:y}){c.value!==y&&(c.value=y,p())}function p(){if(e.container===!0){const y=a.value>c.value?be():0;u.value!==y&&(u.value=y)}}let h=null;const $={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:u,totalWidth:f(()=>s.value+u.value),rows:f(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ee({size:0,offset:0,space:!1}),right:ee({size:300,offset:0,space:!1}),footer:ee({size:0,offset:0,space:!1}),left:ee({size:300,offset:0,space:!1}),scroll:v,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,d,z){$[y][d]=z}};if(De(Y,$),be()>0){let z=function(){y=null,d.classList.remove("hide-scrollbar")},M=function(){if(y===null){if(d.scrollHeight>r.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(z,300)},b=function(E){y!==null&&E==="remove"&&(clearTimeout(y),z()),window[`${E}EventListener`]("resize",M)},y=null;const d=document.body;S(()=>e.container!==!0?"add":"remove",b),e.container!==!0&&b("add"),_t(()=>{b("remove")})}return()=>{const y=Fe(n.default,[_(Mt,{onScroll:g}),_(ie,{onResize:k})]),d=_("div",{class:l.value,style:q.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(ie,{onResize:T}),_("div",{class:"absolute-full",style:C.value},[_("div",{class:"scroll",style:m.value},[d])])]):d}}}),Dt={ratio:[String,Number]};function Ft(e,n){return f(()=>{const i=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const At=16/9,Nt=R({name:"QImg",props:{...Dt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:At},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:i}){const r=x(e.initialRatio),t=Ft(e,r);let a=null,s=!1;const v=[x(null),x(T())],c=x(0),u=x(!1),l=x(!1),q=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),C=f(()=>({width:e.width,height:e.height})),m=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),g=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));S(()=>k(),p);function k(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function T(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function p(b){a!==null&&(clearTimeout(a),a=null),l.value=!1,b===null?(u.value=!1,v[c.value^1].value=T()):u.value=!0,v[c.value].value=b}function h({target:b}){s!==!0&&(a!==null&&(clearTimeout(a),a=null),r.value=b.naturalHeight===0?.5:b.naturalWidth/b.naturalHeight,$(b,1))}function $(b,E){s===!0||E===1e3||(b.complete===!0?y(b):a=setTimeout(()=>{a=null,$(b,E+1)},50))}function y(b){s!==!0&&(c.value=c.value^1,v[c.value].value=null,u.value=!1,l.value=!1,i("load",b.currentSrc||b.src))}function d(b){a!==null&&(clearTimeout(a),a=null),u.value=!1,l.value=!0,v[c.value].value=null,v[c.value^1].value=T(),i("error",b)}function z(b){const E=v[b].value,O={key:"img_"+b,class:m.value,style:g.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...E};return c.value===b?(O.class+=" q-img__image--waiting",Object.assign(O,{onLoad:h,onError:d})):O.class+=" q-img__image--loaded",_("div",{class:"q-img__container absolute-full",key:"img"+b},_("img",O))}function M(){return u.value!==!0?_("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(n[l.value===!0?"error":"default"])):_("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[_(Ct,{color:e.spinnerColor,size:e.spinnerSize})])}return p(k()),F(()=>{s=!0,a!==null&&(clearTimeout(a),a=null)}),()=>{const b=[];return t.value!==null&&b.push(_("div",{key:"filler",style:t.value})),l.value!==!0&&(v[0].value!==null&&b.push(z(0)),v[1].value!==null&&b.push(z(1))),b.push(_(qt,{name:"q-transition--fade"},M)),_("div",{class:q.value,style:C.value,role:"img","aria-label":e.alt},b)}}}),Wt=R({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const i=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:i.value},K(n.default))}}),We=R({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const i=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:i.value,role:"toolbar"},K(n.default))}}),It=R({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=A(),t=oe(Y,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const a=x(parseInt(e.heightHint,10)),s=x(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?a.value:0;const h=a.value-t.scroll.value.position;return h>0?h:0}),u=f(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),l=f(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=f(()=>{const h=t.rows.value.top,$={};return h[0]==="l"&&t.left.space===!0&&($[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&($[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),$});function m(h,$){t.update("header",h,$)}function g(h,$){h.value!==$&&(h.value=$)}function k({height:h}){g(a,h),m("size",h)}function T(h){l.value===!0&&g(s,!0),i("focusin",h)}S(()=>e.modelValue,h=>{m("space",h),g(s,!0),t.animate()}),S(c,h=>{m("offset",h)}),S(()=>e.reveal,h=>{h===!1&&g(s,e.modelValue)}),S(s,h=>{t.animate(),i("reveal",h)}),S(t.scroll,h=>{e.reveal===!0&&g(s,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",c.value),F(()=>{t.instances.header===p&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const h=zt(n.default,[]);return e.elevated===!0&&h.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(_(ie,{debounce:0,onResize:k})),_("header",{class:q.value,style:C.value,onFocusin:T},h)}}}),jt="/assets/logo-7921ddd2.png",Ut=Te({__name:"HeaderLink",props:{to:{type:[String,Object],required:!0},label:{type:String,default:""}},setup(e){const n=e,i=f(()=>n.to),r=f(()=>n.label);return(t,a)=>{const s=Tt("router-link");return le(),re(s,{class:"mk-link",to:i.value},{default:L(()=>[ae(xt(r.value),1),I(t.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}}});const Se=Ae(Ut,[["__scopeId","data-v-c6f71b9f"]]),Xt=Te({__name:"MainHeader",setup(e){return(n,i)=>(le(),re(It,{class:"bg-white text-black border-bottom"},{default:L(()=>[B(We,null,{default:L(()=>[B(Wt,{class:"row items-center"},{default:L(()=>[B(kt,{square:""},{default:L(()=>[B(Nt,{src:jt,class:"q-mr-xs"})]),_:1}),B(Se,{to:"/web/introduction"},{default:L(()=>[ae(" Introduction ")]),_:1}),B(Se,{to:"/web/projects"},{default:L(()=>[ae(" Projects ")]),_:1}),B(Se,{to:"/web/tests"},{default:L(()=>[ae(" Tests ")]),_:1})]),_:1})]),_:1}),I(n.$slots,"header-tabs")]),_:3}))}}),Yt=R({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=A(),t=oe(Y,H);if(t===H)return console.error("QFooter needs to be child of QLayout"),H;const a=x(parseInt(e.heightHint,10)),s=x(!0),v=x(ze.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||r.platform.is.ios&&t.isContainer.value===!0),u=f(()=>t.isContainer.value===!0?t.containerHeight.value:v.value),l=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return s.value===!0?a.value:0;const d=t.scroll.value.position+u.value+a.value-t.height.value;return d>0?d:0}),q=f(()=>e.modelValue!==!0||c.value===!0&&s.value!==!0),C=f(()=>e.modelValue===!0&&q.value===!0&&e.reveal===!0),m=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(q.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),g=f(()=>{const d=t.rows.value.bottom,z={};return d[0]==="l"&&t.left.space===!0&&(z[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(z[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function k(d,z){t.update("footer",d,z)}function T(d,z){d.value!==z&&(d.value=z)}function p({height:d}){T(a,d),k("size",d)}function h(){if(e.reveal!==!0)return;const{direction:d,position:z,inflectionPoint:M}=t.scroll.value;T(s,d==="up"||z-M<100||t.height.value-u.value-z-a.value<300)}function $(d){C.value===!0&&T(s,!0),i("focusin",d)}S(()=>e.modelValue,d=>{k("space",d),T(s,!0),t.animate()}),S(l,d=>{k("offset",d)}),S(()=>e.reveal,d=>{d===!1&&T(s,e.modelValue)}),S(s,d=>{t.animate(),i("reveal",d)}),S([a,t.scroll,t.height],h),S(()=>r.screen.height,d=>{t.isContainer.value!==!0&&T(v,d)});const y={};return t.instances.footer=y,e.modelValue===!0&&k("size",a.value),k("space",e.modelValue),k("offset",l.value),F(()=>{t.instances.footer===y&&(t.instances.footer=void 0,k("size",0),k("offset",0),k("space",!1))}),()=>{const d=Fe(n.default,[_(ie,{debounce:0,onResize:p})]);return e.elevated===!0&&d.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),_("footer",{class:m.value,style:g.value,onFocusin:$},d)}}}),Kt={};function Gt(e,n){return le(),re(Yt,{class:"bg-dark"},{default:L(()=>[B(We,{class:"flex-center"},{default:L(()=>[B($t,{flat:"",round:"",dense:"",class:"text-white",href:"https://github.com/mackolee"},{default:L(()=>[B(Lt,{name:"fab fa-github",size:"2rem"})]),_:1})]),_:1})]),_:1})}const Jt=Ae(Kt,[["render",Gt]]),ta=Te({__name:"DefaultLayout",setup(e){const n=x(!1),i=x(!1);return(r,t)=>(le(),re(Qt,{view:"hhh LpR fff"},{default:L(()=>[B(Xt,null,{"header-tabs":L(()=>[I(r.$slots,"header-tabs")]),_:3}),B(Me,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=a=>n.value=a),side:"left",bordered:""},{default:L(()=>[I(r.$slots,"left-drawer")]),_:3},8,["modelValue"]),B(Me,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=a=>i.value=a),side:"right",bordered:""},{default:L(()=>[I(r.$slots,"right-drawer")]),_:3},8,["modelValue"]),B(Vt,null,{default:L(()=>[I(r.$slots,"default")]),_:3}),B(Jt)]),_:3}))}});export{ie as Q,pe as T,ta as _,Pt as c};
