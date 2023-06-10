import{c as ve,f as Ee,g as Ge,i as le,j as Ue,k as Ke,l as Xe,m as Je,n as Ye,o as Ze,p as et,T as tt,_ as at}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-ceaf0c7c.js";import{i as me,l as xe,m as z,n as nt,p as ot,e as v,h as p,r as g,q as y,v as J,a as P,o as b,x as C,y as N,_ as E,z as A,d as lt,k as he,g as W,u as M,A as qe,B as Ie,c as Y,C as st,f as $,D as it,E as be,F as rt,G as V,H as D,I as G,J as se,K as ie,L as we,M as ut,T as ct,N as dt,O as vt,s as mt,P as ht,w as k,b as ft,Q as pt,R as gt}from"./index-d3241fcd.js";import{Q as _t}from"./QCard-1b6b07b6.js";const yt=ve({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:n}}=me(),a=xe(nt,z);if(a===z)return console.error("QPage needs to be a deep child of QLayout"),z;if(xe(ot,z)===z)return console.error("QPage needs to be child of QPageContainer"),z;const r=v(()=>{const s=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const c=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(s,c)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-s+"px":n.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":n.screen.height-s+"px"}}),l=v(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:l.value,style:r.value},Ee(t.default))}}),T={LEFT:1,RIGHT:2,UP:4,DOWN:8},x=g(0),xt=v(()=>x.value&T.UP),bt=v(()=>x.value&T.DOWN),wt=v(()=>x.value&T.LEFT),St=v(()=>x.value&T.RIGHT),Se=e=>{switch(e.key){case"ArrowLeft":x.value|=T.LEFT;break;case"ArrowRight":x.value|=T.RIGHT;break;case"ArrowUp":x.value|=T.UP;break;case"ArrowDown":x.value|=T.DOWN;break}},Me=e=>{switch(e.key){case"ArrowLeft":x.value&=~T.LEFT;break;case"ArrowRight":x.value&=~T.RIGHT;break;case"ArrowUp":x.value&=~T.UP;break;case"ArrowDown":x.value&=~T.DOWN}},Mt=()=>{y(()=>{window.addEventListener("keydown",Se),window.addEventListener("keyup",Me)}),J(()=>{window.removeEventListener("keydown",Se),window.removeEventListener("keyup",Me)})},Tt=()=>({pressedArrowKeys:x,isUp:xt,isDown:bt,isLeft:wt,isRight:St}),$t={class:"earth-space"},Ct=P({__name:"EarthSpace",setup(e){return Mt(),(t,n)=>(b(),C("div",$t,[N(t.$slots,"default",{},void 0,!0)]))}});const Lt=E(Ct,[["__scopeId","data-v-828146c3"]]);const Ht={},kt={class:"sky-space"};function Pt(e,t){return b(),C("div",kt,[N(e.$slots,"default",{},void 0,!0)])}const Et=E(Ht,[["render",Pt],["__scopeId","data-v-715558b7"]]),B=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,qt=(e,t)=>{const n=re(e),a=ue(e),o=re(t),r=ue(t);return ce(n+o,a+r)},re=e=>e.value*Math.cos(e.angle),ue=e=>e.value*Math.sin(e.angle),ce=(e,t)=>{const n=Math.atan2(t,e);return{value:Math.sqrt(e*e+t*t),angle:n}},It=()=>({getWidth:()=>window.innerWidth,getHeight:()=>window.innerHeight}),Wt=P({__name:"DefaultCloud",props:{top:{type:Number,default:0},left:{type:Number,default:0},rotate:{type:Number,default:0}},setup(e){const t=e,{getWidth:n}=It(),a=g(0),o=()=>{a.value=B(50,100)};y(()=>{o()});const r=g(120),l=()=>{r.value=B(120,300)};y(()=>{l()});const s=g(50),c=()=>{s.value=B(r.value/4,r.value/2)};y(()=>{c()});const u=g(0),d=()=>{u.value=B(-r.value,n()-2)};y(()=>{d()});const m=g(10),h=()=>{m.value=B(10,50)};y(()=>{h()});const i=g({}),f=(L,Q,ee,S,te,H)=>{i.value={...i.value,transition:H},setTimeout(()=>{i.value={top:L+"px",left:Q+"px",width:ee+"px",height:S+"px",transform:`rotate(${te}deg)`,transition:H}},1)};y(()=>{i.value={top:a.value+"px",left:u.value+"px",width:r.value+"px",height:s.value+"px",transform:`rotate(${t.rotate}deg)`,transition:"none"}});const w=()=>{setTimeout(()=>{let L=(n()-u.value+1)/m.value;f(a.value,n(),r.value,s.value,t.rotate,`all ${L}s linear`)},2)},O=()=>{o(),l(),c(),u.value=-r.value,h(),i.value={top:a.value+"px",left:u.value+"px",width:r.value+"px",height:s.value+"px",transform:`rotate(${t.rotate}deg)`,transition:"none"}};y(()=>{w()});const Z=()=>{O(),w()};return(L,Q)=>(b(),C("div",{class:"default-cloud",style:A(i.value),onTransitionend:Z},[N(L.$slots,"default",{},void 0,!0)],36))}});const zt=E(Wt,[["__scopeId","data-v-81ec0ebc"]]);const At={},Dt={class:"sea-space"};function Nt(e,t){return b(),C("div",Dt,[N(e.$slots,"default",{},void 0,!0)])}const Ot=E(At,[["render",Nt],["__scopeId","data-v-dd64a2d6"]]),We=lt("ship",{state:()=>({maxSpeed:10,acceleration:2.2,deceleration:2,location:{x:50,y:50},movement:{speed:0,angle:0}}),actions:{setMaxSpeed(e){this.maxSpeed=e},setAcceleration(e){this.acceleration=e},setDeceleration(e){this.deceleration=e},setShipLocationX(e){e=Math.max(e,0),e=Math.min(e,100),this.location.x=e},setShipLocationY(e){e=Math.max(e,0),e=Math.min(e,100),this.location.y=e},accelerate(e,t=1){const n=qt({value:this.movement.speed,angle:this.movement.angle},{value:this.acceleration*t,angle:e});this.movement.speed=n.value,this.movement.angle=n.angle,this.movement.speed=Math.min(this.movement.speed,this.maxSpeed)},decelerate(){this.movement.speed-=this.deceleration,this.movement.speed=Math.max(this.movement.speed,0)},move(){const e=this.movement.speed*Math.cos(this.movement.angle),t=this.movement.speed*Math.sin(this.movement.angle);this.setShipLocationX(this.location.x+e),this.setShipLocationY(this.location.y+t),this.decelerate()}}}),ze=e=>(qe("data-v-5a1c6d1e"),e=e(),Ie(),e),Ft=ze(()=>W("g",{class:"ship-motor"},[W("rect",{x:"-10",y:"0",width:"15",height:"15",fill:"#000"})],-1)),Bt=ze(()=>W("g",{class:"ship-body"},[W("path",{d:"M 0 10 L 0 30 L 75 30 L 100 0 Z",fill:"#fff",stroke:"black"})],-1)),Rt=[Ft,Bt],Qt=P({__name:"DefaultShip",setup(e){const{emitter:t}=he(),n=We(),{isUp:a,isDown:o,isLeft:r,isRight:l}=Tt(),s=150,c=v(()=>n.location),u=v(()=>n.movement.angle);y(()=>{setInterval(()=>{n.move()},100)});const d=()=>{a.value&&l.value?n.accelerate(Math.PI*7/4):l.value&&o.value?n.accelerate(Math.PI/4):o.value&&r.value?n.accelerate(Math.PI*3/4):r.value&&a.value?n.accelerate(Math.PI*5/4):a.value?n.accelerate(Math.PI*3/2):l.value?n.accelerate(0):o.value?n.accelerate(Math.PI/2):r.value&&n.accelerate(Math.PI)};let m=-1;y(()=>{m=setInterval(d,100)}),J(()=>{clearInterval(m)});const h=v(()=>Math.PI/2<=u.value||u.value<=-Math.PI/2),i=v(()=>.5+c.value.y/100);return(f,w)=>(b(),C("div",{class:"ship-wrap",style:A({left:M(c).x+"%",top:M(c).y+"%",width:s+"px",transform:`scale(${M(i)})`})},[N(f.$slots,"ship-shape",{},()=>[(b(),C("svg",{class:"ship",viewBox:"-10 0 110 30",style:A({transform:M(h)?"scaleX(-1)":"scaleX(1)"}),onMouseover:w[0]||(w[0]=O=>M(t).emit("mouseoverMe")),onMouseout:w[1]||(w[1]=O=>M(t).emit("mouseoutMe"))},Rt,36))],!0),W("div",{class:"ship-inner",style:A({right:M(h)?"15%":"auto",left:M(h)?"auto":"15%"})},[N(f.$slots,"default",{},void 0,!0)],4)],4))}});const jt=E(Qt,[["__scopeId","data-v-5a1c6d1e"]]),Vt=ve({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:t}){const n=v(()=>e.sent===!0?"sent":"received"),a=v(()=>`q-message-text-content q-message-text-content--${n.value}`+(e.textColor!==void 0?` text-${e.textColor}`:"")),o=v(()=>`q-message-text q-message-text--${n.value}`+(e.bgColor!==void 0?` text-${e.bgColor}`:"")),r=v(()=>"q-message-container row items-end no-wrap"+(e.sent===!0?" reverse":"")),l=v(()=>e.size!==void 0?`col-${e.size}`:""),s=v(()=>({msg:e.textHtml===!0?"innerHTML":"textContent",stamp:e.stampHtml===!0?"innerHTML":"textContent",name:e.nameHtml===!0?"innerHTML":"textContent",label:e.labelHtml===!0?"innerHTML":"textContent"}));function c(d){return t.stamp!==void 0?[d,p("div",{class:"q-message-stamp"},t.stamp())]:e.stamp?[d,p("div",{class:"q-message-stamp",[s.value.stamp]:e.stamp})]:[d]}function u(d,m){const h=m===!0?d.length>1?i=>i:i=>p("div",[i]):i=>p("div",{[s.value.msg]:i});return d.map((i,f)=>p("div",{key:f,class:o.value},[p("div",{class:a.value},c(h(i)))]))}return()=>{const d=[];t.avatar!==void 0?d.push(t.avatar()):e.avatar!==void 0&&d.push(p("img",{class:`q-message-avatar q-message-avatar--${n.value}`,src:e.avatar,"aria-hidden":"true"}));const m=[];t.name!==void 0?m.push(p("div",{class:`q-message-name q-message-name--${n.value}`},t.name())):e.name!==void 0&&m.push(p("div",{class:`q-message-name q-message-name--${n.value}`,[s.value.name]:e.name})),t.default!==void 0?m.push(u(Ge(t.default()),!0)):e.text!==void 0&&m.push(u(e.text)),d.push(p("div",{class:l.value},m));const h=[];return t.label!==void 0?h.push(p("div",{class:"q-message-label"},t.label())):e.label!==void 0&&h.push(p("div",{class:"q-message-label",[s.value.label]:e.label})),h.push(p("div",{class:r.value},d)),p("div",{class:`q-message q-message-${n.value}`},h)}}}),Gt=P({__name:"MyMessage",setup(e){const{emitter:t}=he(),n=g(!1);return t.on("mouseoverMe",()=>{n.value=!0}),t.on("mouseoutMe",()=>{n.value=!1}),(a,o)=>(b(),Y(Vt,{class:"absolute message",text:[n.value?"안녕하세요. 알고리즘에 특화된 개발자 이윤건 입니다. 개발자를 준비하면서 시작한 알고리즘을 계속 풀며, 백준에서는 700문제가 넘는 문제를 해결하여 상위 2000등 대를 프로그래머스에서는 419문제를 풀어 100등 이내의 순위를 유지하고 있습니다. Python, C++, Java 그리고 Javascript 등 언어를 가리지 않고 풀며, 프로그래밍 언어에 넓은 지식을 가지고 있습니다.<br/><br/>알고리즘 문제와 실제 개발의 상관관계는 레이싱게임과 실제 운전 능력이라고 생각하고 있습니다. 게임을 통해 많은 문제를 겪고 해결하는 과정을 겪었기에 실제 운전을 배우는데 더욱 빠르게 습득할수 있다고 자신합니다.<br/><br/>뿐만아니라 실무에서 배운 시행착오, 반면교사, 좋은코드를 보면서 회사에서 필요한 인재로 거듭나고 있습니다.<br/><br/>감사합니다.":"  ..."],"text-html":"","bg-color":"amber-7"},null,8,["text"]))}});const Ut=E(Gt,[["__scopeId","data-v-b151e4b1"]]),Kt=P({__name:"me",setup(e){const{emitter:t}=he(),n=g(!1);return t.on("mouseoverMe",()=>{n.value=!0}),t.on("mouseoutMe",()=>{n.value=!1}),(a,o)=>(b(),C("div",{onMouseover:o[0]||(o[0]=r=>M(t).emit("mouseoverMe")),onMouseleave:o[1]||(o[1]=r=>M(t).emit("mouseoutMe"))},[W("i",{class:st(["fas fa-child me",{hover:n.value}])},null,2),$(Ut)],32))}});const Xt=E(Kt,[["__scopeId","data-v-8480fb2c"]]),Jt={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Yt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:a,proxy:o,emit:r}=me(),l=g(null);let s=null;function c(i){return l.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(i){o.hide(i)},toggle(i){o.toggle(i),i.qAnchorHandled=!0},toggleKey(i){it(i,13)===!0&&u.toggle(i)},contextClick(i){o.hide(i),be(i),rt(()=>{o.show(i),i.qAnchorHandled=!0})},prevent:be,mobileTouch(i){if(u.mobileCleanup(i),c(i)!==!0)return;o.hide(i),l.value.classList.add("non-selectable");const f=i.target;V(u,"anchor",[[f,"touchmove","mobileCleanup","passive"],[f,"touchend","mobileCleanup","passive"],[f,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),s=setTimeout(()=>{s=null,o.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){l.value.classList.remove("non-selectable"),s!==null&&(clearTimeout(s),s=null),e.value===!0&&i!==void 0&&le()}}),n=function(i=a.contextMenu){if(a.noParentEvent===!0||l.value===null)return;let f;i===!0?o.$q.platform.is.mobile===!0?f=[[l.value,"touchstart","mobileTouch","passive"]]:f=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:f=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],V(u,"anchor",f)});function d(){se(u,"anchor")}function m(i){for(l.value=i;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;n()}function h(){if(a.target===!1||a.target===""||o.$el.parentNode===null)l.value=null;else if(a.target===!0)m(o.$el.parentNode);else{let i=a.target;if(typeof a.target=="string")try{i=document.querySelector(a.target)}catch{i=void 0}i!=null?(l.value=i.$el||i,n()):(l.value=null,console.error(`Anchor: target "${a.target}" not found`))}}return D(()=>a.contextMenu,i=>{l.value!==null&&(d(),n(i))}),D(()=>a.target,()=>{l.value!==null&&d(),h()}),D(()=>a.noParentEvent,i=>{l.value!==null&&(i===!0?d():n())}),y(()=>{h(),t!==!0&&a.modelValue===!0&&l.value===null&&r("update:modelValue",!1)}),G(()=>{s!==null&&clearTimeout(s),d()}),{anchorEl:l,canShow:c,anchorEvents:u}}function Zt(e,t){const n=g(null);let a;function o(s,c){const u=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:a;s!==window&&s[u]("scroll",d,ie.passive),window[u]("scroll",d,ie.passive),a=c}function r(){n.value!==null&&(o(n.value),n.value=null)}const l=D(()=>e.noParentEvent,()=>{n.value!==null&&(r(),t())});return G(l),{localScrollTarget:n,unconfigureScrollTarget:r,changeScrollEvent:o}}let j=[],U=[];function Ae(e){U=U.filter(t=>t!==e)}function ea(e){Ae(e),U.push(e)}function Te(e){Ae(e),U.length===0&&j.length>0&&(j[j.length-1](),j=[])}let ta=1,aa=document.body;function na(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${ta++}`:e,we.globalNodes!==void 0){const a=we.globalNodes.class;a!==void 0&&(n.className=a)}return aa.appendChild(n),n}function oa(e){e.remove()}const R=[];function la(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function sa(e,t,n,a){const o=g(!1),r=g(!1);let l=null;const s={},c=a==="dialog"&&la(e);function u(m){if(m===!0){Te(s),r.value=!0;return}r.value=!1,o.value===!1&&(c===!1&&l===null&&(l=na(!1,a)),o.value=!0,R.push(e.proxy),ea(s))}function d(m){if(r.value=!1,m!==!0)return;Te(s),o.value=!1;const h=R.indexOf(e.proxy);h!==-1&&R.splice(h,1),l!==null&&(oa(l),l=null)}return J(()=>{d(!0)}),e.proxy.__qPortal=!0,ut(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:d,portalIsActive:o,portalIsAccessible:r,renderPortal:()=>c===!0?n():o.value===!0?[p(ct,{to:l},n())]:void 0}}const ia={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ra(e,t=()=>{},n=()=>{}){return{transitionProps:v(()=>{const a=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${a}-enter-from`,enterActiveClass:`${a}-enter-active`,enterToClass:`${a}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:v(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const{notPassiveCapture:K}=ie,I=[];function X(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=R.length-1;for(;n>=0;){const a=R[n].$;if(a.type.name!=="QDialog")break;if(a.props.seamless!==!0)return;n--}for(let a=I.length-1;a>=0;a--){const o=I[a];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function ua(e){I.push(e),I.length===1&&(document.addEventListener("mousedown",X,K),document.addEventListener("touchstart",X,K))}function $e(e){const t=I.findIndex(n=>n===e);t>-1&&(I.splice(t,1),I.length===0&&(document.removeEventListener("mousedown",X,K),document.removeEventListener("touchstart",X,K)))}let Ce,Le;function He(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ca(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const de={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{de[`${e}#ltr`]=e,de[`${e}#rtl`]=e});function ke(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:de[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function da(e,t){let{top:n,left:a,right:o,bottom:r,width:l,height:s}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],a-=t[0],r+=t[1],o+=t[0],l+=t[0],s+=t[1]),{top:n,bottom:r,height:s,left:a,right:o,width:l,middle:a+(o-a)/2,center:n+(r-n)/2}}function va(e,t,n){let{top:a,left:o}=e.getBoundingClientRect();return a+=t.top,o+=t.left,n!==void 0&&(a+=n[1],o+=n[0]),{top:a,bottom:a+1,height:1,left:o,right:o+1,width:1,middle:o,center:a}}function ma(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Pe(e,t,n){return{top:e[n.anchorOrigin.vertical]-t[n.selfOrigin.vertical],left:e[n.anchorOrigin.horizontal]-t[n.selfOrigin.horizontal]}}function ha(e){if(dt.is.ios===!0&&window.visualViewport!==void 0){const s=document.body.style,{offsetLeft:c,offsetTop:u}=window.visualViewport;c!==Ce&&(s.setProperty("--q-pe-left",c+"px"),Ce=c),u!==Le&&(s.setProperty("--q-pe-top",u+"px"),Le=u)}const{scrollLeft:t,scrollTop:n}=e.el,a=e.absoluteOffset===void 0?da(e.anchorEl,e.cover===!0?[0,0]:e.offset):va(e.anchorEl,e.absoluteOffset,e.offset);let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=a.width+"px",e.cover===!0&&(o.minHeight=a.height+"px")),Object.assign(e.el.style,o);const r=ma(e.el);let l=Pe(a,r,e);if(e.absoluteOffset===void 0||e.offset===void 0)oe(l,a,r,e.anchorOrigin,e.selfOrigin);else{const{top:s,left:c}=l;oe(l,a,r,e.anchorOrigin,e.selfOrigin);let u=!1;if(l.top!==s){u=!0;const d=2*e.offset[1];a.center=a.top-=d,a.bottom-=d+2}if(l.left!==c){u=!0;const d=2*e.offset[0];a.middle=a.left-=d,a.right-=d+2}u===!0&&(l=Pe(a,r,e),oe(l,a,r,e.anchorOrigin,e.selfOrigin))}o={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(o.maxHeight=l.maxHeight+"px",a.height>l.maxHeight&&(o.minHeight=o.maxHeight)),l.maxWidth!==void 0&&(o.maxWidth=l.maxWidth+"px",a.width>l.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function oe(e,t,n,a,o){const r=n.bottom,l=n.right,s=Ue(),c=window.innerHeight-s,u=document.body.clientWidth;if(e.top<0||e.top+r>c)if(o.vertical==="center")e.top=t[a.vertical]>c/2?Math.max(0,c-r):0,e.maxHeight=Math.min(r,c);else if(t[a.vertical]>c/2){const d=Math.min(c,a.vertical==="center"?t.center:a.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,d),e.top=Math.max(0,d-r)}else e.top=Math.max(0,a.vertical==="center"?t.center:a.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,c-e.top);if(e.left<0||e.left+l>u)if(e.maxWidth=Math.min(l,u),o.horizontal==="middle")e.left=t[a.horizontal]>u/2?Math.max(0,u-l):0;else if(t[a.horizontal]>u/2){const d=Math.min(u,a.horizontal==="middle"?t.middle:a.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(l,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,a.horizontal==="middle"?t.middle:a.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(l,u-e.left)}const fa=ve({name:"QTooltip",inheritAttrs:!1,props:{...Jt,...Ke,...ia,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:He},self:{type:String,default:"top middle",validator:He},offset:{type:Array,default:()=>[14,14],validator:ca},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Xe],setup(e,{slots:t,emit:n,attrs:a}){let o,r;const l=me(),{proxy:{$q:s}}=l,c=g(null),u=g(!1),d=v(()=>ke(e.anchor,s.lang.rtl)),m=v(()=>ke(e.self,s.lang.rtl)),h=v(()=>e.persistent!==!0),{registerTick:i,removeTick:f}=Je(),{registerTimeout:w}=Ye(),{transitionProps:O,transitionStyle:Z}=ra(e),{localScrollTarget:L,changeScrollEvent:Q,unconfigureScrollTarget:ee}=Zt(e,_e),{anchorEl:S,canShow:te,anchorEvents:H}=Yt({showing:u,configureAnchorEl:Qe}),{show:De,hide:ae}=Ze({showing:u,canShow:te,handleShow:Oe,handleHide:Fe,hideOnRouteChange:h,processOnMount:!0});Object.assign(H,{delayShow:Be,delayHide:Re});const{showPortal:fe,hidePortal:pe,renderPortal:Ne}=sa(l,c,Ve,"tooltip");if(s.platform.is.mobile===!0){const _={anchorEl:S,innerRef:c,onClickOutside(q){return ae(q),q.target.classList.contains("q-dialog__backdrop")&&mt(q),!0}},ne=v(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);D(ne,q=>{(q===!0?ua:$e)(_)}),G(()=>{$e(_)})}function Oe(_){fe(),i(()=>{r=new MutationObserver(()=>F()),r.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),F(),_e()}),o===void 0&&(o=D(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,F)),w(()=>{fe(!0),n("show",_)},e.transitionDuration)}function Fe(_){f(),pe(),ge(),w(()=>{pe(!0),n("hide",_)},e.transitionDuration)}function ge(){r!==void 0&&(r.disconnect(),r=void 0),o!==void 0&&(o(),o=void 0),ee(),se(H,"tooltipTemp")}function F(){const _=c.value;S.value===null||!_||ha({el:_,offset:e.offset,anchorEl:S.value,anchorOrigin:d.value,selfOrigin:m.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Be(_){if(s.platform.is.mobile===!0){le(),document.body.classList.add("non-selectable");const ne=S.value,q=["touchmove","touchcancel","touchend","click"].map(ye=>[ne,ye,"delayHide","passiveCapture"]);V(H,"tooltipTemp",q)}w(()=>{De(_)},e.delay)}function Re(_){s.platform.is.mobile===!0&&(se(H,"tooltipTemp"),le(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),w(()=>{ae(_)},e.hideDelay)}function Qe(){if(e.noParentEvent===!0||S.value===null)return;const _=s.platform.is.mobile===!0?[[S.value,"touchstart","delayShow","passive"]]:[[S.value,"mouseenter","delayShow","passive"],[S.value,"mouseleave","delayHide","passive"]];V(H,"anchor",_)}function _e(){if(S.value!==null||e.scrollTarget!==void 0){L.value=et(S.value,e.scrollTarget);const _=e.noParentEvent===!0?F:ae;Q(L.value,_)}}function je(){return u.value===!0?p("div",{...a,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,Z.value],role:"tooltip"},Ee(t.default)):null}function Ve(){return p(vt,O.value,je)}return G(ge),Object.assign(l.proxy,{updatePosition:F}),Ne}}),pa=e=>(qe("data-v-4241d519"),e=e(),Ie(),e),ga=pa(()=>W("div",{class:"joystick__base"},null,-1)),_a=P({__name:"JoyStick",props:{x:{type:Number,default:0},y:{type:Number,default:0},size:{type:Number,default:120}},emits:["move"],setup(e,{emit:t}){const n=e,a=g({value:0,angle:50}),o=s=>{const c=Math.min(Math.max(s.value,0),n.size),u=s.angle;a.value={value:c,angle:u};const d={angle:u,value:c/n.size};t("move",d)},r=s=>{const c=s.offset,u=s.delta,d=ce(c.x-u.x,c.y-u.y);o(d)},l=()=>{setTimeout(()=>{o(ce(0,0))},100)};return y(()=>{window.addEventListener("mouseup",l),window.addEventListener("touchend",l)}),J(()=>{window.removeEventListener("mouseup",l),window.removeEventListener("touchend",l)}),(s,c)=>(b(),C("div",{class:"joystick",style:A({left:n.x+"px",bottom:n.y+"px"})},[ga,ht((b(),Y(_t,{class:"joystick__stick",style:A({transform:`translateX(${M(re)(a.value)-50}%) translateY(${M(ue)(a.value)-50}%)`})},{default:k(()=>[$(fa,null,{default:k(()=>[ft(" Please reload page if it don't activate. ")]),_:1})]),_:1},8,["style"])),[[tt,r,void 0,{prevent:!0,mouse:!0}]])],4))}});const ya=E(_a,[["__scopeId","data-v-4241d519"]]),xa=P({__name:"MyJoyStick",setup(e){const t=We(),n=g({angle:0,value:0});n.value,y(()=>{setInterval(()=>{n.value=a.value,t.accelerate(n.value.angle,n.value.value)},100)});const a=g({value:0,angle:0}),o=r=>{a.value=r};return(r,l)=>(b(),Y(ya,{style:{"z-index":"100"},x:30,y:30,onMove:o}))}}),Ma=P({__name:"index",setup(e){return(t,n)=>(b(),Y(at,null,{default:k(()=>[$(yt,null,{default:k(()=>[$(Lt,null,{default:k(()=>[$(Et,null,{default:k(()=>[(b(),C(gt,null,pt(10,a=>$(zt)),64))]),_:1}),$(Ot,null,{default:k(()=>[$(jt,null,{default:k(()=>[$(Xt)]),_:1})]),_:1})]),_:1}),$(xa)]),_:1})]),_:1}))}});export{Ma as default};
