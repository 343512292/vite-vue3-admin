!function(){var e=document.createElement("style");e.innerHTML=".btn-rows button[data-v-13460c60]{margin-right:12px}\n",document.head.appendChild(e),System.register(["./index-legacy.7f0fae95.js","./index-legacy.a4d9ac17.js","./schema-form-legacy.cc2bdb3d.js","./index-legacy.4860ff97.js"],(function(e){"use strict";var l,n,a,o,i,c,d,t,s,f,r,u,m,p,b;return{setters:[function(e){l=e.J,n=e.d,a=e.k,o=e.Y,i=e.N,c=e.O,d=e.c,t=e.$,s=e.U,f=e.a7,r=e.al,u=e.a8,m=e.ai},function(e){p=e.A},function(e){b=e._},function(){}],execute:function(){const v=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},vShow:({formModel:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},vShow:({formModel:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({formModel:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({formModel:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},componentProps:({formInstance:e})=>({onChange(l){requestIdleCallback((()=>{l?null==e||e.validateFields():null==e||e.clearValidate()}))}}),labelWidth:200}];const h={class:"mb-4"},y=u(" 更改字段3label "),P=u(" 同时更改字段3,4label "),S=u(" 往字段3后面插入字段10 "),g=u(" 删除字段11 ");e("default",l(n({name:"DemosFormDynamicForm",setup(e){const l=a(),n={schemas:v,labelWidth:120,actionColOptions:{span:24}};function u(){var e,n;console.log("dynamicForm.value",null===(e=l.value)||void 0===e?void 0:e.formModel),null===(n=l.value)||void 0===n||n.validate().then((()=>m.success("验证通过！")))}function k(){var e;null===(e=l.value)||void 0===e||e.updateSchema({field:"field3",label:"字段3 New"})}function w(){var e;null===(e=l.value)||void 0===e||e.updateSchema([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])}function _(){var e;null===(e=l.value)||void 0===e||e.appendSchemaByField({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")}function C(){var e;null===(e=l.value)||void 0===e||e.removeSchemaByFiled("field11")}return(e,a)=>{const m=o("a-button"),v=o("a-card");return i(),c("div",null,[d(t(p),{message:"动态表单示例",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),s("div",h,[d(m,{class:"mr-2",onClick:k},{default:f((()=>[y])),_:1}),d(m,{class:"mr-2",onClick:w},{default:f((()=>[P])),_:1}),d(m,{class:"mr-2",onClick:_},{default:f((()=>[S])),_:1}),d(m,{class:"mr-2",onClick:C},{default:f((()=>[g])),_:1})]),d(v,null,{default:f((()=>[d(t(b),r({ref_key:"dynamicForm",ref:l},n,{onSubmit:u}),null,16)])),_:1})])}}}),[["__scopeId","data-v-13460c60"]]))}}}))}();