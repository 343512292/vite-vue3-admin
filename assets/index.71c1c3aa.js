var C=Object.defineProperty,P=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var d=(e,l,o)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,p=(e,l)=>{for(var o in l||(l={}))k.call(l,o)&&d(e,o,l[o]);if(c)for(var o of c(l))S.call(l,o)&&d(e,o,l[o]);return e},B=(e,l)=>P(e,y(l));import{J as w,d as g,k as A,Y as r,N as x,O as N,c as a,$ as m,U as D,a7 as t,al as W,a8 as i,ai as E}from"./index.fdec921d.js";import{A as V}from"./index.3261c3f9.js";import{_ as q}from"./schema-form.49d8ecaf.js";import"./index.b644e54e.js";const L=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},vShow:({formModel:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},vShow:({formModel:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({formModel:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({formModel:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},componentProps:({formInstance:e})=>({onChange(l){requestIdleCallback(()=>{l?e==null||e.validateFields():e==null||e.clearValidate()})}}),labelWidth:200}];const O={class:"mb-4"},$=i(" \u66F4\u6539\u5B57\u6BB53label "),J=i(" \u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label "),M=i(" \u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510 "),R=i(" \u5220\u9664\u5B57\u6BB511 "),T={name:"DemosFormDynamicForm"},U=g(B(p({},T),{setup(e){const l=A(),o={schemas:L,labelWidth:120,actionColOptions:{span:24}};function f(){var u,s;(u=l.value)==null||u.formModel,(s=l.value)==null||s.validate().then(()=>E.success("\u9A8C\u8BC1\u901A\u8FC7\uFF01"))}function _(){var u;(u=l.value)==null||u.updateSchema({field:"field3",label:"\u5B57\u6BB53 New"})}function b(){var u;(u=l.value)==null||u.updateSchema([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function h(){var u;(u=l.value)==null||u.appendSchemaByField({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function F(){var u;(u=l.value)==null||u.removeSchemaByFiled("field11")}return(u,s)=>{const n=r("a-button"),v=r("a-card");return x(),N("div",null,[a(m(V),{message:"\u52A8\u6001\u8868\u5355\u793A\u4F8B",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),D("div",O,[a(n,{class:"mr-2",onClick:_},{default:t(()=>[$]),_:1}),a(n,{class:"mr-2",onClick:b},{default:t(()=>[J]),_:1}),a(n,{class:"mr-2",onClick:h},{default:t(()=>[M]),_:1}),a(n,{class:"mr-2",onClick:F},{default:t(()=>[R]),_:1})]),a(v,null,{default:t(()=>[a(m(q),W({ref_key:"dynamicForm",ref:l},o,{onSubmit:f}),null,16)]),_:1})])}}}));var K=w(U,[["__scopeId","data-v-13460c60"]]);export{K as default};