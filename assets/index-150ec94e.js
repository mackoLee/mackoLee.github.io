import{Q as l}from"./QBtn-e115616b.js";import{d as p,r as d,a as o,o as r,c,w as s,b as a,u,e as f,t as x,f as i,g as C}from"./index-eed11b81.js";import{_ as S}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-43fb1103.js";const _=p("counter",()=>{const e=d(0);return{count:e,increment:()=>{e.value++},decrement:()=>{e.value--}}}),h=o({__name:"_IncrementButton",setup(e){const t=_();return(n,m)=>(r(),c(l,{color:"primary",onClick:u(t).increment},{default:s(()=>[a(" Increment! ")]),_:1},8,["onClick"]))}}),k=o({__name:"_DecrementButton",setup(e){const t=_();return(n,m)=>(r(),c(l,{color:"primary",onClick:u(t).decrement},{default:s(()=>[a(" Decrement! ")]),_:1},8,["onClick"]))}}),B=C("h3",null," Pinia Store Test ",-1),$=o({__name:"index",setup(e){const t=_(),n=f(()=>t.count);return(m,y)=>(r(),c(S,null,{default:s(()=>[B,a(" counter state count: "+x(u(n))+" ",1),i(h),i(k)]),_:1}))}});export{$ as default};
