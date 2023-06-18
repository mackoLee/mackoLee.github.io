import{Q as R}from"./use-tick-aaff329c.js";import{c as y,u as I,a as T,b as B,d as E,e as $,h as F,f as K}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-eced746c.js";import{u as N,o as U,a as G,b as H,c as J,d as W,e as X,Q as Y}from"./QCheckbox-a8664cd0.js";import{h as n,i as Q,r as Z,e as i,j as C,s as S,a as w,o as z,c as L,w as V,f as x,g as f,t as g}from"./index-f9ae0e08.js";import{_ as p}from"./TestsLayout.vue_vue_type_script_setup_true_lang-bf3cc672.js";import"./QTabs-223a708c.js";const ee=n("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[n("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),n("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]),ae=y({name:"QRadio",props:{...I,...T,...N,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:o,emit:t}){const{proxy:r}=Q(),u=B(e,r.$q),s=E(e,U),v=Z(null),{refocusTargetEl:m,refocusTarget:k}=G(e,v),c=i(()=>C(e.modelValue)===C(e.val)),a=i(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(u.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),b=i(()=>{const l=e.color!==void 0&&(e.keepColor===!0||c.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${c.value===!0?"truthy":"falsy"}${l}`}),d=i(()=>(c.value===!0?e.checkedIcon:e.uncheckedIcon)||null),P=i(()=>e.disable===!0?-1:e.tabindex||0),A=i(()=>{const l={type:"radio"};return e.name!==void 0&&Object.assign(l,{".checked":c.value===!0,"^checked":c.value===!0?"checked":void 0,name:e.name,value:e.val}),l}),D=H(A);function h(l){l!==void 0&&(S(l),k(l)),e.disable!==!0&&c.value!==!0&&t("update:modelValue",e.val,l)}function M(l){(l.keyCode===13||l.keyCode===32)&&S(l)}function O(l){(l.keyCode===13||l.keyCode===32)&&h(l)}return Object.assign(r,{set:h}),()=>{const l=d.value!==null?[n("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[n($,{class:"q-radio__icon",name:d.value})])]:[ee];e.disable!==!0&&D(l,"unshift"," q-radio__native q-ma-none q-pa-none");const _=[n("div",{class:b.value,style:s.value,"aria-hidden":"true"},l)];m.value!==null&&_.push(m.value);const q=e.label!==void 0?F(o.default,[e.label]):K(o.default);return q!==void 0&&_.push(n("div",{class:"q-radio__label q-anchor--skip"},q)),n("div",{ref:v,class:a.value,tabindex:P.value,role:"radio","aria-label":e.label,"aria-checked":c.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:h,onKeydown:M,onKeyup:O},_)}}}),le=y({name:"QToggle",props:{...J,icon:String,iconColor:String},emits:W,setup(e){function o(t,r){const u=i(()=>(t.value===!0?e.checkedIcon:r.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),s=i(()=>t.value===!0?e.iconColor:null);return()=>[n("div",{class:"q-toggle__track"}),n("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},u.value!==void 0?[n($,{name:u.value,color:s.value})]:void 0)]}return X("toggle",o)}}),j={radio:ae,checkbox:Y,toggle:le},oe=Object.keys(j),ne=y({name:"QOptionGroup",props:{...I,modelValue:{required:!0},options:{type:Array,validator:e=>e.every(o=>"value"in o&&"label"in o)},name:String,type:{default:"radio",validator:e=>oe.includes(e)},color:String,keepColor:Boolean,dense:Boolean,size:String,leftLabel:Boolean,inline:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{emit:o,slots:t}){const{proxy:{$q:r}}=Q(),u=Array.isArray(e.modelValue);e.type==="radio"?u===!0&&console.error("q-option-group: model should not be array"):u===!1&&console.error("q-option-group: model should be array in your case");const s=B(e,r),v=i(()=>j[e.type]),m=i(()=>"q-option-group q-gutter-x-sm"+(e.inline===!0?" q-option-group--inline":"")),k=i(()=>{const a={role:"group"};return e.type==="radio"&&(a.role="radiogroup",e.disable===!0&&(a["aria-disabled"]="true")),a});function c(a){o("update:modelValue",a)}return()=>n("div",{class:m.value,...k.value},e.options.map((a,b)=>{const d=t["label-"+b]!==void 0?()=>t["label-"+b](a):t.label!==void 0?()=>t.label(a):void 0;return n("div",[n(v.value,{modelValue:e.modelValue,val:a.value,name:a.name===void 0?e.name:a.name,disable:e.disable||a.disable,label:d===void 0?a.label:null,leftLabel:a.leftLabel===void 0?e.leftLabel:a.leftLabel,color:a.color===void 0?e.color:a.color,checkedIcon:a.checkedIcon,uncheckedIcon:a.uncheckedIcon,dark:a.dark||s.value,size:a.size===void 0?e.size:a.size,dense:e.dense,keepColor:a.keepColor===void 0?e.keepColor:a.keepColor,"onUpdate:modelValue":c},d)])}))}}),te=w({__name:"LocaleSelect",setup(e){const o=[{label:"English",value:"en"},{label:"Korean",value:"ko"}];return(t,r)=>(z(),L(ne,{modelValue:t.$i18n.locale,"onUpdate:modelValue":r[0]||(r[0]=u=>t.$i18n.locale=u),type:"radio",options:o,label:"Select a locale"},null,8,["modelValue"]))}}),ve=w({__name:"index",setup(e){return(o,t)=>(z(),L(p,null,{default:V(()=>[x(R,null,{default:V(()=>[f("h3",null," Locale: "+g(o.$i18n.locale)+" "+g(o.$t("message.hello")),1),f("h4",null,[x(te)]),f("div",null,g(o.$tc("message.n_apples",1)),1),f("div",null,g(o.$tc("message.n_apples",2)),1)]),_:1})]),_:1}))}});export{ve as default};