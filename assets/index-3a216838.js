import{Q as l,_ as p}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-602e5d7e.js";import{d,r as f,a as c,o,c as r,w as s,b as a,u,e as x,t as C,f as i,g as S}from"./index-631e4ae9.js";const _=d("counter",()=>{const e=f(0);return{count:e,increment:()=>{e.value++},decrement:()=>{e.value--}}}),h=c({__name:"_IncrementButton",setup(e){const t=_();return(n,m)=>(o(),r(l,{color:"primary",onClick:u(t).increment},{default:s(()=>[a(" Increment! ")]),_:1},8,["onClick"]))}}),k=c({__name:"_DecrementButton",setup(e){const t=_();return(n,m)=>(o(),r(l,{color:"primary",onClick:u(t).decrement},{default:s(()=>[a(" Decrement! ")]),_:1},8,["onClick"]))}}),B=S("h3",null," Pinia Store Test ",-1),V=c({__name:"index",setup(e){const t=_(),n=x(()=>t.count);return(m,y)=>(o(),r(p,null,{default:s(()=>[B,a(" counter state count: "+C(u(n))+" ",1),i(h),i(k)]),_:1}))}});export{V as default};