import{Q as Be}from"./QPage-7be416d9.js";import{c as ae,T as Re,_ as Ve}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-42203451.js";import{r as h,e as f,L as b,a4 as z,a as L,o as w,m as $,l as D,_ as C,a5 as W,d as je,g as x,u as O,k as ue,p as ce,n as de,W as ke,N as _,a6 as Ke,c as R,a7 as Qe,f as y,y as Ce,P as Ue,a8 as _e,a9 as Xe,aa as K,z as A,K as Q,ab as ne,ac as oe,ad as ye,ae as Fe,af as Ge,ag as Je,ah as Ye,ai as Ze,Z as et,$ as tt,aj as at,ak as nt,al as ot,am as lt,an as st,a3 as it,O as rt,M as ut,w as I,b as ct,j as dt,B as j,s as vt,F as mt}from"./index-03001949.js";import{Q as ht}from"./QSpace-d4575d90.js";const T={LEFT:1,RIGHT:2,UP:4,DOWN:8},M=h(0),ft=f(()=>M.value&T.UP),pt=f(()=>M.value&T.DOWN),gt=f(()=>M.value&T.LEFT),_t=f(()=>M.value&T.RIGHT),be=e=>{switch(e.key){case"ArrowLeft":M.value|=T.LEFT;break;case"ArrowRight":M.value|=T.RIGHT;break;case"ArrowUp":M.value|=T.UP;break;case"ArrowDown":M.value|=T.DOWN;break}},xe=e=>{switch(e.key){case"ArrowLeft":M.value&=~T.LEFT;break;case"ArrowRight":M.value&=~T.RIGHT;break;case"ArrowUp":M.value&=~T.UP;break;case"ArrowDown":M.value&=~T.DOWN}},yt=()=>{b(()=>{window.addEventListener("keydown",be),window.addEventListener("keyup",xe)}),z(()=>{window.removeEventListener("keydown",be),window.removeEventListener("keyup",xe)})},bt=()=>({pressedArrowKeys:M,isUp:ft,isDown:pt,isLeft:gt,isRight:_t}),xt={class:"earth-space"},wt=L({__name:"EarthSpace",setup(e){return yt(),(t,a)=>(w(),$("div",xt,[D(t.$slots,"default",{},void 0,!0)]))}});const Mt=C(wt,[["__scopeId","data-v-f68077ae"]]);const St={},Tt={class:"sky-space"};function $t(e,t){return w(),$("div",Tt,[D(e.$slots,"default",{},void 0,!0)])}const Lt=C(St,[["render",$t],["__scopeId","data-v-b4d9adcc"]]),B=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,kt=(e,t)=>{const a=le(e),n=se(e),o=le(t),r=se(t);return ie(a+o,n+r)},le=e=>e.value*Math.cos(e.angle),se=e=>e.value*Math.sin(e.angle),ie=(e,t)=>{const a=Math.atan2(t,e);return{value:Math.sqrt(e*e+t*t),angle:a}},Ct=()=>({getWidth:()=>window.innerWidth,getHeight:()=>window.innerHeight}),Ht=L({__name:"DefaultCloud",props:{top:{type:Number,default:0},left:{type:Number,default:0},rotate:{type:Number,default:0}},setup(e){const t=e,{getWidth:a}=Ct(),n=h(0),o=()=>{n.value=B(50,100)};b(()=>{o()});const r=h(120),l=()=>{r.value=B(120,300)};b(()=>{l()});const i=h(50),c=()=>{i.value=B(r.value/4,r.value/2)};b(()=>{c()});const u=h(0),d=()=>{u.value=B(-r.value,a()-2)};b(()=>{d()});const m=h(10),g=()=>{m.value=B(10,50)};b(()=>{g()});const s=h({}),v=(H,V,J,S,Y,E)=>{s.value={...s.value,transition:E},setTimeout(()=>{s.value={top:H+"px",left:V+"px",width:J+"px",height:S+"px",transform:`rotate(${Y}deg)`,transition:E}},1)};b(()=>{s.value={top:n.value+"px",left:u.value+"px",width:r.value+"px",height:i.value+"px",transform:`rotate(${t.rotate}deg)`,transition:"none"}});const k=()=>{setTimeout(()=>{let H=(a()-u.value+1)/m.value;v(n.value,a(),r.value,i.value,t.rotate,`all ${H}s linear`)},2)},F=()=>{o(),l(),c(),u.value=-r.value,g(),s.value={top:n.value+"px",left:u.value+"px",width:r.value+"px",height:i.value+"px",transform:`rotate(${t.rotate}deg)`,transition:"none"}};b(()=>{k()});const G=()=>{F(),k()};return(H,V)=>(w(),$("div",{class:"default-cloud",style:W(s.value),onTransitionend:G},[D(H.$slots,"default",{},void 0,!0)],36))}});const Et=C(Ht,[["__scopeId","data-v-b0bf92f1"]]);const It={},Pt={class:"sea-space"};function Wt(e,t){return w(),$("div",Pt,[D(e.$slots,"default",{},void 0,!0)])}const qt=C(It,[["render",Wt],["__scopeId","data-v-0fff43b6"]]),ve=je("ship",{state:()=>({maxSpeed:10,acceleration:2.2,deceleration:2,location:{x:50,y:50},movement:{speed:0,angle:0}}),actions:{setMaxSpeed(e){this.maxSpeed=e},setAcceleration(e){this.acceleration=e},setDeceleration(e){this.deceleration=e},setShipLocationX(e){e=Math.max(e,0),e=Math.min(e,100),this.location.x=e},setShipLocationY(e){e=Math.max(e,0),e=Math.min(e,100),this.location.y=e},accelerate(e,t=1){const a=kt({value:this.movement.speed,angle:this.movement.angle},{value:this.acceleration*t,angle:e});this.movement.speed=a.value,this.movement.angle=a.angle,this.movement.speed=Math.min(this.movement.speed,this.maxSpeed)},decelerate(){this.movement.speed-=this.deceleration,this.movement.speed=Math.max(this.movement.speed,0)},move(){const e=this.movement.speed*Math.cos(this.movement.angle),t=this.movement.speed*Math.sin(this.movement.angle);this.setShipLocationX(this.location.x+e),this.setShipLocationY(this.location.y+t),this.decelerate()}}}),He=e=>(ce("data-v-46452bb5"),e=e(),de(),e),zt=He(()=>x("g",{class:"ship-motor"},[x("rect",{x:"-10",y:"0",width:"15",height:"15",fill:"#000"})],-1)),At=He(()=>x("g",{class:"ship-body"},[x("path",{d:"M 0 10 L 0 30 L 75 30 L 100 0 Z",fill:"#fff",stroke:"black"})],-1)),Dt=[zt,At],Ot=150,Nt=L({__name:"DefaultShip",setup(e){const t=ue(),a=ve(),{isUp:n,isDown:o,isLeft:r,isRight:l}=bt(),i=f(()=>a.location),c=f(()=>a.movement.angle);b(()=>{setInterval(()=>{a.move()},100)});const u=()=>{n.value&&l.value?a.accelerate(Math.PI*7/4):l.value&&o.value?a.accelerate(Math.PI/4):o.value&&r.value?a.accelerate(Math.PI*3/4):r.value&&n.value?a.accelerate(Math.PI*5/4):n.value?a.accelerate(Math.PI*3/2):l.value?a.accelerate(0):o.value?a.accelerate(Math.PI/2):r.value&&a.accelerate(Math.PI)};let d=-1;b(()=>{d=setInterval(u,100)}),z(()=>{clearInterval(d)});const m=f(()=>Math.PI/2<=c.value||c.value<=-Math.PI/2),g=f(()=>.5+i.value.y/100);return(s,v)=>(w(),$("div",{class:"ship-wrap",style:W({left:i.value.x+"%",top:i.value.y+"%",width:Ot+"px",transform:`scale(${g.value})`})},[D(s.$slots,"ship-shape",{},()=>[(w(),$("svg",{class:"ship",viewBox:"-10 0 110 30",style:W({transform:m.value?"scaleX(-1)":"scaleX(1)"}),onMouseover:v[0]||(v[0]=k=>O(t).emit("mouseoverMe")),onMouseout:v[1]||(v[1]=k=>O(t).emit("mouseoutMe"))},Dt,36))],!0),x("div",{class:"ship-inner",style:W({right:m.value?"15%":"auto",left:m.value?"auto":"15%"})},[D(s.$slots,"default",{},void 0,!0)],4)],4))}});const Bt=C(Nt,[["__scopeId","data-v-46452bb5"]]),Rt=ke({name:"QChatMessage",props:{sent:Boolean,label:String,bgColor:String,textColor:String,name:String,avatar:String,text:Array,stamp:String,size:String,labelHtml:Boolean,nameHtml:Boolean,textHtml:Boolean,stampHtml:Boolean},setup(e,{slots:t}){const a=f(()=>e.sent===!0?"sent":"received"),n=f(()=>`q-message-text-content q-message-text-content--${a.value}`+(e.textColor!==void 0?` text-${e.textColor}`:"")),o=f(()=>`q-message-text q-message-text--${a.value}`+(e.bgColor!==void 0?` text-${e.bgColor}`:"")),r=f(()=>"q-message-container row items-end no-wrap"+(e.sent===!0?" reverse":"")),l=f(()=>e.size!==void 0?`col-${e.size}`:""),i=f(()=>({msg:e.textHtml===!0?"innerHTML":"textContent",stamp:e.stampHtml===!0?"innerHTML":"textContent",name:e.nameHtml===!0?"innerHTML":"textContent",label:e.labelHtml===!0?"innerHTML":"textContent"}));function c(d){return t.stamp!==void 0?[d,_("div",{class:"q-message-stamp"},t.stamp())]:e.stamp?[d,_("div",{class:"q-message-stamp",[i.value.stamp]:e.stamp})]:[d]}function u(d,m){const g=m===!0?d.length>1?s=>s:s=>_("div",[s]):s=>_("div",{[i.value.msg]:s});return d.map((s,v)=>_("div",{key:v,class:o.value},[_("div",{class:n.value},c(g(s)))]))}return()=>{const d=[];t.avatar!==void 0?d.push(t.avatar()):e.avatar!==void 0&&d.push(_("img",{class:`q-message-avatar q-message-avatar--${a.value}`,src:e.avatar,"aria-hidden":"true"}));const m=[];t.name!==void 0?m.push(_("div",{class:`q-message-name q-message-name--${a.value}`},t.name())):e.name!==void 0&&m.push(_("div",{class:`q-message-name q-message-name--${a.value}`,[i.value.name]:e.name})),t.default!==void 0?m.push(u(Ke(t.default()),!0)):e.text!==void 0&&m.push(u(e.text)),d.push(_("div",{class:l.value},m));const g=[];return t.label!==void 0?g.push(_("div",{class:"q-message-label"},t.label())):e.label!==void 0&&g.push(_("div",{class:"q-message-label",[i.value.label]:e.label})),g.push(_("div",{class:r.value},d)),_("div",{class:`q-message q-message-${a.value}`},g)}}}),Vt=L({__name:"MyMessage",setup(e){const t=ue(),a=h(!1);return t.on("mouseoverMe",()=>{a.value=!0}),t.on("mouseoutMe",()=>{a.value=!1}),(n,o)=>(w(),R(Rt,{class:"absolute message",text:[a.value?"안녕하세요. 알고리즘에 특화된 개발자 이윤건 입니다. 개발자를 준비하면서 시작한 알고리즘을 계속 풀며, 백준에서는 700문제가 넘는 문제를 해결하여 상위 2000등 대를 프로그래머스에서는 419문제를 풀어 100등 이내의 순위를 유지하고 있습니다. Python, C++, Java 그리고 Javascript 등 언어를 가리지 않고 풀며, 프로그래밍 언어에 넓은 지식을 가지고 있습니다.<br/><br/>알고리즘 문제와 실제 개발의 상관관계는 레이싱게임과 실제 운전 능력이라고 생각하고 있습니다. 게임을 통해 많은 문제를 겪고 해결하는 과정을 겪었기에 실제 운전을 배우는데 더욱 빠르게 습득할수 있다고 자신합니다.<br/><br/>뿐만아니라 실무에서 배운 시행착오, 반면교사, 좋은코드를 보면서 회사에서 필요한 인재로 거듭나고 있습니다.<br/><br/>감사합니다.":"  ..."],"text-html":"","bg-color":"amber-7"},null,8,["text"]))}});const jt=C(Vt,[["__scopeId","data-v-f16a1dff"]]),Kt=L({__name:"me",setup(e){const t=ue(),a=h(!1);return t.on("mouseoverMe",()=>{a.value=!0}),t.on("mouseoutMe",()=>{a.value=!1}),(n,o)=>(w(),$("div",{onMouseover:o[0]||(o[0]=r=>O(t).emit("mouseoverMe")),onMouseleave:o[1]||(o[1]=r=>O(t).emit("mouseoutMe"))},[x("i",{class:Qe(["fas fa-child me",{hover:a.value}])},null,2),y(jt)],32))}});const Qt=C(Kt,[["__scopeId","data-v-ad1cfb68"]]),Ut={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Xt({showing:e,avoidEmit:t,configureAnchorEl:a}){const{props:n,proxy:o,emit:r}=Ce(),l=h(null);let i=null;function c(s){return l.value===null?!1:s===void 0||s.touches===void 0||s.touches.length<=1}const u={};a===void 0&&(Object.assign(u,{hide(s){o.hide(s)},toggle(s){o.toggle(s),s.qAnchorHandled=!0},toggleKey(s){Ue(s,13)===!0&&u.toggle(s)},contextClick(s){o.hide(s),_e(s),Xe(()=>{o.show(s),s.qAnchorHandled=!0})},prevent:_e,mobileTouch(s){if(u.mobileCleanup(s),c(s)!==!0)return;o.hide(s),l.value.classList.add("non-selectable");const v=s.target;K(u,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),i=setTimeout(()=>{i=null,o.show(s),s.qAnchorHandled=!0},300)},mobileCleanup(s){l.value.classList.remove("non-selectable"),i!==null&&(clearTimeout(i),i=null),e.value===!0&&s!==void 0&&ae()}}),a=function(s=n.contextMenu){if(n.noParentEvent===!0||l.value===null)return;let v;s===!0?o.$q.platform.is.mobile===!0?v=[[l.value,"touchstart","mobileTouch","passive"]]:v=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:v=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],K(u,"anchor",v)});function d(){ne(u,"anchor")}function m(s){for(l.value=s;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;a()}function g(){if(n.target===!1||n.target===""||o.$el.parentNode===null)l.value=null;else if(n.target===!0)m(o.$el.parentNode);else{let s=n.target;if(typeof n.target=="string")try{s=document.querySelector(n.target)}catch{s=void 0}s!=null?(l.value=s.$el||s,a()):(l.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return A(()=>n.contextMenu,s=>{l.value!==null&&(d(),a(s))}),A(()=>n.target,()=>{l.value!==null&&d(),g()}),A(()=>n.noParentEvent,s=>{l.value!==null&&(s===!0?d():a())}),b(()=>{g(),t!==!0&&n.modelValue===!0&&l.value===null&&r("update:modelValue",!1)}),Q(()=>{i!==null&&clearTimeout(i),d()}),{anchorEl:l,canShow:c,anchorEvents:u}}function Ft(e,t){const a=h(null);let n;function o(i,c){const u=`${c!==void 0?"add":"remove"}EventListener`,d=c!==void 0?c:n;i!==window&&i[u]("scroll",d,oe.passive),window[u]("scroll",d,oe.passive),n=c}function r(){a.value!==null&&(o(a.value),a.value=null)}const l=A(()=>e.noParentEvent,()=>{a.value!==null&&(r(),t())});return Q(l),{localScrollTarget:a,unconfigureScrollTarget:r,changeScrollEvent:o}}const{notPassiveCapture:U}=oe,q=[];function X(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let a=ye.length-1;for(;a>=0;){const n=ye[a].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;a--}for(let n=q.length-1;n>=0;n--){const o=q[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Gt(e){q.push(e),q.length===1&&(document.addEventListener("mousedown",X,U),document.addEventListener("touchstart",X,U))}function we(e){const t=q.findIndex(a=>a===e);t>-1&&(q.splice(t,1),q.length===0&&(document.removeEventListener("mousedown",X,U),document.removeEventListener("touchstart",X,U)))}let Me,Se;function Te(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Jt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const re={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{re[`${e}#ltr`]=e,re[`${e}#rtl`]=e});function $e(e,t){const a=e.split(" ");return{vertical:a[0],horizontal:re[`${a[1]}#${t===!0?"rtl":"ltr"}`]}}function Yt(e,t){let{top:a,left:n,right:o,bottom:r,width:l,height:i}=e.getBoundingClientRect();return t!==void 0&&(a-=t[1],n-=t[0],r+=t[1],o+=t[0],l+=t[0],i+=t[1]),{top:a,bottom:r,height:i,left:n,right:o,width:l,middle:n+(o-n)/2,center:a+(r-a)/2}}function Zt(e,t,a){let{top:n,left:o}=e.getBoundingClientRect();return n+=t.top,o+=t.left,a!==void 0&&(n+=a[1],o+=a[0]),{top:n,bottom:n+1,height:1,left:o,right:o+1,width:1,middle:o,center:n}}function ea(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Le(e,t,a){return{top:e[a.anchorOrigin.vertical]-t[a.selfOrigin.vertical],left:e[a.anchorOrigin.horizontal]-t[a.selfOrigin.horizontal]}}function ta(e){if(Fe.is.ios===!0&&window.visualViewport!==void 0){const i=document.body.style,{offsetLeft:c,offsetTop:u}=window.visualViewport;c!==Me&&(i.setProperty("--q-pe-left",c+"px"),Me=c),u!==Se&&(i.setProperty("--q-pe-top",u+"px"),Se=u)}const{scrollLeft:t,scrollTop:a}=e.el,n=e.absoluteOffset===void 0?Yt(e.anchorEl,e.cover===!0?[0,0]:e.offset):Zt(e.anchorEl,e.absoluteOffset,e.offset);let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=n.width+"px",e.cover===!0&&(o.minHeight=n.height+"px")),Object.assign(e.el.style,o);const r=ea(e.el);let l=Le(n,r,e);if(e.absoluteOffset===void 0||e.offset===void 0)te(l,n,r,e.anchorOrigin,e.selfOrigin);else{const{top:i,left:c}=l;te(l,n,r,e.anchorOrigin,e.selfOrigin);let u=!1;if(l.top!==i){u=!0;const d=2*e.offset[1];n.center=n.top-=d,n.bottom-=d+2}if(l.left!==c){u=!0;const d=2*e.offset[0];n.middle=n.left-=d,n.right-=d+2}u===!0&&(l=Le(n,r,e),te(l,n,r,e.anchorOrigin,e.selfOrigin))}o={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(o.maxHeight=l.maxHeight+"px",n.height>l.maxHeight&&(o.minHeight=o.maxHeight)),l.maxWidth!==void 0&&(o.maxWidth=l.maxWidth+"px",n.width>l.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==a&&(e.el.scrollTop=a),e.el.scrollLeft!==t&&(e.el.scrollLeft=t)}function te(e,t,a,n,o){const r=a.bottom,l=a.right,i=Ge(),c=window.innerHeight-i,u=document.body.clientWidth;if(e.top<0||e.top+r>c)if(o.vertical==="center")e.top=t[n.vertical]>c/2?Math.max(0,c-r):0,e.maxHeight=Math.min(r,c);else if(t[n.vertical]>c/2){const d=Math.min(c,n.vertical==="center"?t.center:n.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(r,d),e.top=Math.max(0,d-r)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(r,c-e.top);if(e.left<0||e.left+l>u)if(e.maxWidth=Math.min(l,u),o.horizontal==="middle")e.left=t[n.horizontal]>u/2?Math.max(0,u-l):0;else if(t[n.horizontal]>u/2){const d=Math.min(u,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(l,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(l,u-e.left)}const aa=ke({name:"QTooltip",inheritAttrs:!1,props:{...Ut,...Je,...Ye,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Te},self:{type:String,default:"top middle",validator:Te},offset:{type:Array,default:()=>[14,14],validator:Jt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Ze],setup(e,{slots:t,emit:a,attrs:n}){let o,r;const l=Ce(),{proxy:{$q:i}}=l,c=h(null),u=h(!1),d=f(()=>$e(e.anchor,i.lang.rtl)),m=f(()=>$e(e.self,i.lang.rtl)),g=f(()=>e.persistent!==!0),{registerTick:s,removeTick:v}=et(),{registerTimeout:k}=tt(),{transitionProps:F,transitionStyle:G}=at(e),{localScrollTarget:H,changeScrollEvent:V,unconfigureScrollTarget:J}=Ft(e,pe),{anchorEl:S,canShow:Y,anchorEvents:E}=Xt({showing:u,configureAnchorEl:De}),{show:Ie,hide:Z}=nt({showing:u,canShow:Y,handleShow:We,handleHide:qe,hideOnRouteChange:g,processOnMount:!0});Object.assign(E,{delayShow:ze,delayHide:Ae});const{showPortal:me,hidePortal:he,renderPortal:Pe}=ot(l,c,Ne,"tooltip");if(i.platform.is.mobile===!0){const p={anchorEl:S,innerRef:c,onClickOutside(P){return Z(P),P.target.classList.contains("q-dialog__backdrop")&&rt(P),!0}},ee=f(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);A(ee,P=>{(P===!0?Gt:we)(p)}),Q(()=>{we(p)})}function We(p){me(),s(()=>{r=new MutationObserver(()=>N()),r.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),N(),pe()}),o===void 0&&(o=A(()=>i.screen.width+"|"+i.screen.height+"|"+e.self+"|"+e.anchor+"|"+i.lang.rtl,N)),k(()=>{me(!0),a("show",p)},e.transitionDuration)}function qe(p){v(),he(),fe(),k(()=>{he(!0),a("hide",p)},e.transitionDuration)}function fe(){r!==void 0&&(r.disconnect(),r=void 0),o!==void 0&&(o(),o=void 0),J(),ne(E,"tooltipTemp")}function N(){const p=c.value;S.value===null||!p||ta({el:p,offset:e.offset,anchorEl:S.value,anchorOrigin:d.value,selfOrigin:m.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ze(p){if(i.platform.is.mobile===!0){ae(),document.body.classList.add("non-selectable");const ee=S.value,P=["touchmove","touchcancel","touchend","click"].map(ge=>[ee,ge,"delayHide","passiveCapture"]);K(E,"tooltipTemp",P)}k(()=>{Ie(p)},e.delay)}function Ae(p){i.platform.is.mobile===!0&&(ne(E,"tooltipTemp"),ae(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),k(()=>{Z(p)},e.hideDelay)}function De(){if(e.noParentEvent===!0||S.value===null)return;const p=i.platform.is.mobile===!0?[[S.value,"touchstart","delayShow","passive"]]:[[S.value,"mouseenter","delayShow","passive"],[S.value,"mouseleave","delayHide","passive"]];K(E,"anchor",p)}function pe(){if(S.value!==null||e.scrollTarget!==void 0){H.value=lt(S.value,e.scrollTarget);const p=e.noParentEvent===!0?N:Z;V(H.value,p)}}function Oe(){return u.value===!0?_("div",{...n,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",n.class],style:[n.style,G.value],role:"tooltip"},it(t.default)):null}function Ne(){return _(st,F.value,Oe)}return Q(fe),Object.assign(l.proxy,{updatePosition:N}),Pe}}),na=e=>(ce("data-v-44b2c8d7"),e=e(),de(),e),oa=na(()=>x("div",{class:"joystick__base"},null,-1)),la=L({__name:"JoyStick",props:{left:{type:String,default:"0"},bottom:{type:String,default:"0"},size:{type:Number,default:120}},emits:["move"],setup(e,{emit:t}){const a=e,n=h({value:0,angle:50}),o=i=>{const c=Math.min(Math.max(i.value,0),a.size),u=i.angle;n.value={value:c,angle:u};const d={angle:u,value:c/a.size};t("move",d)},r=i=>{const c=i.offset,u=i.delta,d=ie(c.x-u.x,c.y-u.y);o(d)},l=()=>{setTimeout(()=>{o(ie(0,0))},100)};return b(()=>{window.addEventListener("mouseup",l),window.addEventListener("touchend",l)}),z(()=>{window.removeEventListener("mouseup",l),window.removeEventListener("touchend",l)}),(i,c)=>(w(),$("div",{class:"joystick",style:W({left:a.left+"px",bottom:a.bottom+"px"})},[oa,ut((w(),R(dt,{class:"joystick__stick",style:W({transform:`translateX(${O(le)(n.value)-50}%) translateY(${O(se)(n.value)-50}%)`})},{default:I(()=>[y(aa,null,{default:I(()=>[ct(" Please reload page if it don't activate. ")]),_:1})]),_:1},8,["style"])),[[Re,r,void 0,{prevent:!0,mouse:!0}]])],4))}});const sa=C(la,[["__scopeId","data-v-44b2c8d7"]]),ia=L({__name:"MyJoyStick",setup(e){const t=ve(),a=h({angle:0,value:0});a.value;let n=null;b(()=>{n=setInterval(()=>{a.value=o.value,t.accelerate(a.value.angle,a.value.value)},100)}),z(()=>{clearInterval(n)});const o=h({value:0,angle:0}),r=l=>{o.value=l};return(l,i)=>(w(),R(sa,{style:{"z-index":"100"},left:"30",bottom:"30",onMove:r}))}}),Ee=e=>(ce("data-v-90f38dd2"),e=e(),de(),e),ra={class:"row q-gutter-sm"},ua=Ee(()=>x("div",{class:"col"},null,-1)),ca={class:"col keypad"},da=Ee(()=>x("div",{class:"col"},null,-1)),va={class:"row q-gutter-sm"},ma={class:"col-4 keypad"},ha={class:"col-4 keypad"},fa={class:"col-4 keypad"},pa=L({__name:"Keyboard",props:{bottom:{type:String,default:"30"},right:{type:String,default:"30"}},emits:["move"],setup(e,{emit:t}){const a=function(n){t("move",{angle:0,value:0})};return b(()=>{document.addEventListener("touchend",a),document.addEventListener("mouseup",a)}),z(()=>{document.removeEventListener("touchend",a),document.removeEventListener("mouseup",a)}),(n,o)=>(w(),$("div",{class:"keypads",style:W({bottom:e.bottom+"px",right:e.right+"px"})},[x("div",ra,[ua,x("div",ca,[y(j,{name:"fas fa-caret-up",onMousedown:o[0]||(o[0]=()=>n.$emit("move",{angle:Math.PI*3/2,value:1})),onTouchstart:o[1]||(o[1]=()=>n.$emit("move",{angle:Math.PI*3/2,value:1}))})]),da]),y(ht,{class:"q-mt-sm"}),x("div",va,[x("div",ma,[y(j,{name:"fa-solid fa-caret-left",onMousedown:o[2]||(o[2]=()=>n.$emit("move",{angle:Math.PI,value:1})),onTouchstart:o[3]||(o[3]=()=>n.$emit("move",{angle:Math.PI,value:1}))})]),x("div",ha,[y(j,{name:"fas fa-caret-down",onMousedown:o[4]||(o[4]=()=>n.$emit("move",{angle:Math.PI/2,value:1})),onTouchstart:o[5]||(o[5]=()=>n.$emit("move",{angle:Math.PI/2,value:1}))})]),x("div",fa,[y(j,{name:"fas fa-caret-right",onMousedown:o[6]||(o[6]=()=>n.$emit("move",{angle:0,value:1})),onTouchstart:o[7]||(o[7]=()=>n.$emit("move",{angle:0,value:1}))})])])],4))}});const ga=C(pa,[["__scopeId","data-v-90f38dd2"]]),_a=L({__name:"MyKeyboard",setup(e){const t=ve(),a=h({angle:0,value:0});a.value;let n=null;b(()=>{n=setInterval(()=>{a.value=o.value,t.accelerate(a.value.angle,a.value.value)},100)}),z(()=>{clearInterval(n)});const o=h({value:0,angle:0}),r=l=>{o.value=l};return(l,i)=>(w(),R(ga,{style:{"z-index":"100"},right:"30",bottom:"30",onMove:r}))}}),Ma=L({__name:"index",setup(e){const t=function(a){a.preventDefault()};return b(()=>{document.addEventListener("contextmenu",t)}),z(()=>{document.removeEventListener("contextmenu",t)}),(a,n)=>(w(),R(Ve,null,{default:I(()=>[y(Be,null,{default:I(()=>[y(Mt,null,{default:I(()=>[y(Lt,null,{default:I(()=>[(w(),$(mt,null,vt(10,o=>y(Et)),64))]),_:1}),y(qt,null,{default:I(()=>[y(Bt,null,{default:I(()=>[y(Qt)]),_:1})]),_:1})]),_:1}),y(ia),y(_a)]),_:1})]),_:1}))}});export{Ma as default};
