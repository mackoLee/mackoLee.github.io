import{g as l,q as _,s as m,v as o,o as d,c as f,x,_ as S}from"./entry.57d90270.js";const g=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;_(e=>({"17e81e26":u.value}));const s=m(),p=o(()=>{var e;return((((e=s.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,c,i;if(!n.size&&typeof((t=s.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=s.nuxtIcon)!=null&&c.size))return;const e=n.size||((i=s.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(d(),f("span",{style:x({width:a.value,height:a.value})},null,4))}});const z=S(g,[["__scopeId","data-v-2717c442"]]);export{z as default};
