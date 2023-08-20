import{_ as p,o as l,c as i,w as n,f as e,a as d,l as A,m as f,p as j,n as S,g as o,r as y,Q as u,b as B,q as E,i as h,s as k,F as $,j as Q,v as R,x as G,u as q,y as H,z as T,A as z,t as F,B as b,C as K,D as U,E as X,e as w,G as D,H as Y}from"./index-03001949.js";import{Q as J}from"./QPage-7be416d9.js";import{_ as W}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-42203451.js";import{Q as Z,a as ee}from"./QTabs-0a28c4d0.js";import{Q as te}from"./QSpace-d4575d90.js";const se={};function oe(t,s){return l(),i(ee,{align:"left"},{default:n(()=>[e(Z,{to:"/web/projects/coupon",label:"coupon"})]),_:1})}const ne=p(se,[["render",oe]]),ae=d({__name:"ProjectsLayout",setup(t){return(s,a)=>(l(),i(W,null,{"header-tabs":n(()=>[e(ne)]),default:n(()=>[A(s.$slots,"default",{},void 0,!0)]),_:3}))}});const ce=p(ae,[["__scopeId","data-v-f6ff4049"]]),le=t=>(j("data-v-eac6504e"),t=t(),S(),t),re={key:0,class:"stamped-circle"},_e=le(()=>o("svg",{class:"stamped-circle-svg",width:"200",height:"200",viewBox:"0 0 200 200"},[o("circle",{cx:"100",cy:"100",r:"100",fill:"#e00512"}),o("text",{x:"50%",y:"55%","text-anchor":"middle","alignment-baseline":"middle","font-size":"100","font-family":"Arial",fill:"#FFFFFF"}," 😃 ")],-1)),ie=[_e],ue={key:1,class:"rounded-circle"},de=d({__name:"CircleStamp",props:{stamped:{type:Boolean,default:!1}},setup(t){return(s,a)=>t.stamped?(l(),f("div",re,ie)):(l(),f("div",ue))}});const L=p(de,[["__scopeId","data-v-eac6504e"]]),P=t=>(j("data-v-69b944d9"),t=t(),S(),t),pe={class:"row full-width"},me=P(()=>o("div",{class:"col-auto left-coupon-header"},[o("span",{class:"text-h5"}," Coupon ")],-1)),fe=P(()=>o("div",{class:"col"},null,-1)),he={key:0,class:"col-auto right-coupon-header"},ve=P(()=>o("span",{class:"q-ml-sm"},null,-1)),ge={class:"row q-gutter-md"},ye={class:"col"},xe={class:"row q-gutter-md"},$e={class:"col"},be=d({__name:"CouponCard",props:{test:{type:Boolean,default:!1}},setup(t){const s=y(0);return(a,r)=>(l(),i(Q,{class:"coupon-card"},{default:n(()=>[e(h,null,{default:n(()=>[o("div",pe,[me,fe,t.test?(l(),f("div",he,[e(u,{outline:"",onClick:r[0]||(r[0]=c=>s.value++)},{default:n(()=>[B(" + ")]),_:1}),ve,e(u,{outline:"",onClick:r[1]||(r[1]=c=>s.value=s.value>0?s.value-1:0)},{default:n(()=>[B(" - ")]),_:1})])):E("",!0)])]),_:1}),e(h,null,{default:n(()=>[o("div",ge,[(l(),f($,null,k(5,c=>o("div",ye,[e(L,{stamped:c<=s.value},null,8,["stamped"])])),64))]),e(te,{class:"q-mt-md"}),o("div",xe,[(l(),f($,null,k(5,c=>o("div",$e,[e(L,{stamped:c+5<=s.value},null,8,["stamped"])])),64))])]),_:1})]),_:1}))}});const Ce=p(be,[["__scopeId","data-v-69b944d9"]]),we={},ke=o("div",{class:"text-h5 text-bold text-grey-14"}," 안녕하세요! ",-1),qe=o("div",{class:"text-subtitle1"}," Macko Cafe 입니다. ",-1),je=[ke,qe];function Se(t,s){return l(),f("div",null,je)}const N=p(we,[["render",Se]]);function I(){return R(G)}const Qe=d({__name:"FullScreenBtn",setup(t){const s=I(),a=r=>{let c=document.getElementById("full-screen-wrap")||void 0;s.fullscreen.toggle(c).then(()=>{}).catch(m=>{alert(m)})};return(r,c)=>(l(),i(u,{flat:"",color:"secondary",icon:q(s).fullscreen.isActive?"fullscreen_exit":"fullscreen",label:q(s).fullscreen.isActive?"Exit Fullscreen":"Go Fullscreen",onClick:a},null,8,["icon","label"]))}}),Pe=()=>!0;function Ie(t){const s={};return t.forEach(a=>{s[a]=Pe}),s}function C(){const{emit:t,proxy:s}=H(),a=y(null);function r(){a.value.show()}function c(){a.value.hide()}function m(v){t("ok",v),c()}function _(){t("hide")}return Object.assign(s,{show:r,hide:c}),{dialogRef:a,onDialogHide:_,onDialogOK:m,onDialogCancel:c}}const M=["ok","hide"];C.emits=M;C.emitsObject=Ie(M);const Be=t=>(j("data-v-da1e85f1"),t=t(),S(),t),Fe=Be(()=>o("div",{class:"text-h6"}," Pin 번호를 입력해주세요. ",-1)),De={style:{"letter-spacing":"4px"}},Le={class:"row q-col-gutter-lg",style:{width:"250px"}},Ne={class:"col-4"},Ve={class:"col-4"},Me={class:"col-4"},Oe=d({__name:"PinNumberModal",emits:[...C.emits],setup(t,{emit:s}){const{dialogRef:a,onDialogHide:r,onDialogOK:c,onDialogCancel:m}=C(),_=y("");return T(_,v=>{v.length===6&&(c(v),_.value="")}),(v,x)=>(l(),i(z,{ref_key:"dialogRef",ref:a,onHide:q(r)},{default:n(()=>[e(Q,null,{default:n(()=>[e(h,null,{default:n(()=>[Fe]),_:1}),e(h,{class:"q-pt-none text-center text-bold"},{default:n(()=>[o("span",De,F("*".repeat(_.value.length))+F("-".repeat(6-_.value.length)),1)]),_:1}),e(h,null,{default:n(()=>[o("div",Le,[(l(),f($,null,k(9,g=>o("div",{key:g,class:"col-4"},[e(u,{class:"number-btn",color:"primary",label:g,onClick:nt=>_.value+=g},null,8,["label","onClick"])])),64)),o("div",Ne,[e(u,{class:"number-btn",color:"primary"},{default:n(()=>[e(b,{name:""})]),_:1})]),o("div",Ve,[e(u,{class:"number-btn col-4",color:"primary",label:"0",onClick:x[0]||(x[0]=g=>_.value+="0")})]),o("div",Me,[e(u,{class:"number-btn col-4",color:"primary",onClick:x[1]||(x[1]=g=>_.value=_.value.slice(0,-1))},{default:n(()=>[e(b,{name:"backspace"})]),_:1})])])]),_:1})]),_:1})]),_:1},8,["onHide"]))}});const O=p(Oe,[["__scopeId","data-v-da1e85f1"]]),Ae=o("div",{class:"text-h6"}," 도장 수량을 입력해주세요. ",-1),Ee=d({__name:"NumberOfCouponSelect",setup(t){const s=I(),a=()=>{s.dialog({component:O}).onOk(c=>{console.log("ok",c)})},r=y(0);return(c,m)=>(l(),i(Q,null,{default:n(()=>[e(h,null,{default:n(()=>[Ae]),_:1}),e(h,{class:"q-pt-none"},{default:n(()=>[e(K,{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=_=>r.value=_),label:"도장 수량",type:"number",rules:[_=>_>0||"1개 이상 입력해주세요.",_=>_<=10||"10개 이하로 입력해주세요."]},null,8,["modelValue","rules"])]),_:1}),e(U,null,{default:n(()=>[e(u,{class:"full-width",color:"primary",label:"도장 주기",onClick:a})]),_:1})]),_:1}))}}),V=d({__name:"MainModeAdminLayout",setup(t){return(s,a)=>(l(),f($,null,[e(Ee),e(O)],64))}}),Re={};function Ge(t,s){return" 서치 화면입니다. "}const He=p(Re,[["render",Ge]]),Te={};function ze(t,s){return" 서치 화면입니다. "}const Ke=p(Te,[["render",ze]]),Ue=o("span",{class:"q-ml-sm"},"기획",-1),Xe=d({__name:"GoPresentationBtn",setup(t){X();const s=()=>{window.open("https://docs.google.com/presentation/d/10VzjN6X-O7ntR9cr-bpjErelVCFsr5GvF_GnYg0VfB8/edit?usp=sharing","_blank")};return(a,r)=>(l(),i(u,{class:"q-ma-sm",color:"primary",outline:"",onClick:s},{default:n(()=>[e(b,{name:"fa-solid fa-person-chalkboard"}),Ue]),_:1}))}}),Ye=o("span",{class:"q-ml-sm"},"프로젝트",-1),Je=d({__name:"GoProjectPageBtn",setup(t){function s(){window.open("https://stamp-note.github.io/nuxt/","_blank")}return(a,r)=>(l(),i(u,{color:"primary",onClick:s},{default:n(()=>[e(b,{name:"fa-solid fa-external-link-alt"}),Ye]),_:1}))}}),We={class:"col"},Ze={id:"full-screen-wrap",class:"row justify-center q-px-xl full-height bg-brown-2"},et={class:"absolute-top-right q-mr-md q-mt-md"},tt={class:"col-6 q-my-auto row justify-center"},st={class:"col-6 q-my-auto row justify-center"},ot=d({__name:"index",setup(t){const s=I(),a=y("main-mode"),r=w(()=>{switch(a.value){case"main-mode":return N;case"user-search":return Ke}return N}),c=w(()=>{switch(a.value){case"main-mode":return V;case"user-search":return He}return V});return w(()=>s.fullscreen.isActive),(m,_)=>(l(),i(ce,null,{default:n(()=>[e(J,{class:"row"},{default:n(()=>[o("div",We,[o("div",Ze,[o("div",et,[e(Je),e(Xe),e(Qe)]),o("div",tt,[(l(),i(D(r.value))),e(Ce,{test:""})]),e(Y,{vertical:"",class:"absolute full-height"}),o("div",st,[(l(),i(D(c.value)))])])])]),_:1})]),_:1}))}});const it=p(ot,[["__scopeId","data-v-e6c3870c"]]);export{it as default};
