import{c as d,f as p,D as f}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-8f99b0d2.js";import{i as c,x as r,a0 as a,ab as h,ac as y,e as i,h as m,H as v,B as C,G as x}from"./index-8e1311ba.js";const k=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:s}){const{proxy:{$q:n}}=c(),e=r(h,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(r(y,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const u=i(()=>{const o=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const g=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(o,g)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),l=i(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:l.value,style:u.value},p(s.default))}});function P(){let t;const s=c();function n(){t=void 0}return v(n),C(n),{removeTick:n,registerTick(e){t=e,x(()=>{t===e&&(f(s)===!1&&t(),t=void 0)})}}}export{k as Q,P as u};
