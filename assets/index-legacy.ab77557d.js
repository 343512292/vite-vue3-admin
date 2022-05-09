System.register(["./index-legacy.9d499239.js","./index-legacy.ecdd1e3f.js","./index-legacy.7f0fae95.js","./dynamic-table-legacy.0fdc63c8.js","./useFormModal-legacy.7b5df972.js","./utils-legacy.76523550.js","./VerticalRightOutlined-legacy.63372f8f.js","./schema-form-legacy.cc2bdb3d.js","./index-legacy.4860ff97.js"],(function(e){"use strict";var t,n,l,a,d,o,i,r,s,c,u,p,f,m,h,y,b,g,x;return{setters:[function(e){t=e.b,n=e.e,l=e.f,a=e.a,d=e.h,o=e.i},function(e){i=e.g},function(e){r=e.d,s=e.Y,c=e.N,u=e.O,p=e.c,f=e.a7,m=e.$,h=e.a8},function(e){y=e.u},function(e){b=e.u},function(e){g=e.b,x=e.a},function(){},function(){},function(){}],execute:function(){const I=[{title:"#",dataIndex:"id",width:55,align:"center",hideInSearch:!0},{title:"名称",width:200,align:"center",dataIndex:"name"},{title:"标识",width:80,align:"center",dataIndex:"label"},{title:"备注",dataIndex:"remark",align:"center"},{title:"创建时间",dataIndex:"createdAt",align:"center",hideInSearch:!0},{title:"更新时间",align:"center",dataIndex:"updatedAt",hideInSearch:!0}],k=[{field:"name",component:"Input",label:"名称",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"label",component:"Input",label:"标识",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"menus",component:"Tree",label:"菜单权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}},{field:"depts",component:"Tree",label:"部门权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}}],v=h(" 新增 ");e("default",r({name:"SystemPermissionRole",setup(e){const[r,h]=y(),[w]=b(),P=(e,t,n=[])=>t.reduce(((t,l)=>{var a;return null!==(a=l.children)&&void 0!==a&&a.length?P(e,l.children,n):e.includes(l.value)&&t.push(l.value),t}),n),j=async e=>{const[t]=await w({modalProps:{title:(e.id?"编辑":"新增")+"角色",width:"50%",onFinish:async a=>{var d,o;e.id&&(a.roleId=e.id);const i=null==t||null===(d=t.compRefs)||void 0===d?void 0:d.menus,r=null==t||null===(o=t.compRefs)||void 0===o?void 0:o.depts,s={...a,menus:[...i.halfCheckedKeys,...i.checkedKeys],depts:[...r.halfCheckedKeys,...r.checkedKeys]};console.log("新增/编辑角色",s),await(e.id?n:l)(s),null==h||h.reload()}},formProps:{labelWidth:100,schemas:k}}),[o,r]=await Promise.all([a(),i()]),s=g(r),c=x(o);if(null==t||t.updateSchema([{field:"menus",componentProps:{treeData:s}},{field:"depts",componentProps:{treeData:c}}]),e.id){const n=await d({roleId:e.id}),l=n.menus.map((e=>e.menuId)),a=n.depts.map((e=>e.departmentId));null==t||t.setFieldsValue({...e,name:n.roleInfo.name,label:n.roleInfo.label,remark:n.roleInfo.remark,menus:P(l,s),depts:P(a,c)})}},K=[...I,{title:"操作",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"sys.role.update",effect:"disable"},onClick:()=>j(e)},{label:"删除",auth:"sys.role.delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>(async e=>{await o({roleIds:[e.id]}),null==h||h.reload()})(e)}}]}];return(e,n)=>{const l=s("a-button");return c(),u("div",null,[p(m(r),{"row-key":"id","header-title":"角色管理","data-request":m(t),columns:K,bordered:"",size:"small"},{toolbar:f((()=>[p(l,{type:"primary",disabled:!e.$auth("sys.role.add"),onClick:n[0]||(n[0]=e=>j({}))},{default:f((()=>[v])),_:1},8,["disabled"])])),_:1},8,["data-request"])])}}}))}}}));