!function(){var e=document.createElement("style");e.innerHTML=".context-menu{position:fixed;top:0;left:0;z-index:200;display:block;width:156px;margin:0;list-style:none;background-color:#151515;border:1px solid rgba(0,0,0,.08);border-radius:.25rem;box-shadow:0 2px 2px #00000024,0 3px 1px -2px #0000001a,0 1px 5px #0000000f;background-clip:padding-box;user-select:none}.context-menu__item{margin:0!important}.context-menu li{display:inline-block;width:100%;height:42px!important;margin:0!important;line-height:42px!important}.context-menu li span{line-height:42px!important}.context-menu li>div{margin:0!important}.context-menu li:not(.ant-menu-item-disabled):hover{color:#c9d1d9;background-color:#f5f5f5}.context-menu .ant-divider,.context-menu__popup .ant-divider{margin:0}.context-menu__popup li{display:inline-block;width:100%;height:42px!important;margin:0!important;line-height:42px!important}.context-menu__popup li span{line-height:42px!important}.context-menu__popup li>div{margin:0!important}.context-menu__popup li:not(.ant-menu-item-disabled):hover{color:#c9d1d9;background-color:#f5f5f5}.context-menu .ant-menu-submenu-title,.context-menu .ant-menu-item{padding:0!important}\n",document.head.appendChild(e),System.register(["./index-legacy.7f0fae95.js","./index-legacy.a4d9ac17.js","./index-legacy.6b23422c.js","./dynamic-table-legacy.0fdc63c8.js","./hero-legacy.52996b7d.js","./useFormModal-legacy.7b5df972.js","./index-legacy.79471afc.js","./schema-form-legacy.cc2bdb3d.js","./index-legacy.4860ff97.js","./VerticalRightOutlined-legacy.63372f8f.js"],(function(e){"use strict";var t,n,o,l,a,i,c,r,s,d,u,p,m,x,f,y,b,h,v,g,k,_,j,w,I,C,O,L,T,E,M,$,S;return{setters:[function(e){t=e.c,n=e.aG,o=e.b3,l=e.ab,a=e.cJ,i=e.d,c=e.k,r=e.p,s=e.o,d=e.n,u=e.m,p=e.$,m=e.M,x=e.bJ,f=e.ak,y=e.cK,b=e.cL,h=e.cM,v=e.aB,g=e.a1,k=e.Y,_=e.N,j=e.O,w=e.a7,I=e.cy,C=e.a8},function(e){O=e.A},function(e){L=e.I,T=e.a,E=e.j},function(e){M=e.u},function(e){$=e.g},function(e){S=e.u},function(){},function(){},function(){},function(){}],execute:function(){const P=[{title:"头像",align:"center",width:100,hideInSearch:!0,dataIndex:"avatar",bodyCell:({record:e})=>t(L,{src:e.avatar,preview:{src:e.posters},key:e.avatar},null)},{title:"英雄名称",align:"center",dataIndex:"title"},{title:"英雄称号",align:"center",dataIndex:"name"},{title:"定位",align:"center",dataIndex:"roles",bodyCell:({record:e})=>{var a;return t(l,null,[null===(a=e.roles)||void 0===a?void 0:a.map((e=>{return t(n,{color:"blue",key:e},"function"==typeof(l=e)||"[object Object]"===Object.prototype.toString.call(l)&&!o(l)?e:{default:()=>[e]});var l}))])}},{title:"操作",align:"center",width:120,dataIndex:"$action",actions:({record:e})=>[{label:"查看详情",onClick:()=>a.push({name:"demos-table-lol-info",params:{id:e.heroId}})}]}];const A="context-menu",N={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},q=e=>{const{item:n}=e;return t("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,n)},[e.showIcon&&n.icon&&t(f,{class:"mr-2",type:n.icon},null),t("span",null,[n.label])])};var D=i({name:"ContextMenu",props:N,setup(e){const n=c(null),a=c(!1),i=r((()=>{const{axis:t,items:n,styles:o,width:l}=e,{x:a,y:i}=t||{x:0,y:0},c=40*(n||[]).length,r=l,s=document.body;return{...o,position:"absolute",width:`${l}px`,left:`${(s.clientWidth<a+r?a-r:a)+1}px`,top:`${(s.clientHeight<i+c?i-c:i)+1}px`}}));function f(e,t){const{handler:n,disabled:o}=e;o||(a.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function y(n){return n.map((n=>{const{disabled:o,label:i,children:c,divider:r=!1}=n,s={item:n,handler:f,showIcon:e.showIcon};return c&&0!==c.length?p(a)?t(m.SubMenu,{key:i,disabled:o,popupClassName:"context-menu__popup"},{title:()=>t(q,s,null),default:()=>y(c)}):null:t(l,null,[t(m.Item,{disabled:o,class:"context-menu__item",key:i},{default:()=>[t(q,s,null)]}),r?t(x,{key:`d-${i}`},null):null])}))}return s((()=>{d((()=>a.value=!0))})),u((()=>{const e=p(n);e&&document.body.removeChild(e)})),()=>{let l;if(!p(a))return null;const{items:c}=e;return t("div",{class:A},[t(m,{inlineIndent:12,mode:"vertical",ref:n,style:p(i)},(r=l=y(c),"function"==typeof r||"[object Object]"===Object.prototype.toString.call(r)&&!o(r)?l:{default:()=>[l]}))]);var r}}});const z={domList:[],resolve:()=>({})},B=function(e){const{event:n}=e||{};if(n&&(null==n||n.preventDefault()),y)return new Promise((o=>{const l=document.body,a=document.createElement("div"),i={};e.styles&&(i.styles=e.styles),e.items&&(i.items=e.items),e.event&&(i.customEvent=n,i.axis={x:n.clientX,y:n.clientY});const c=t(D,i);b(c,a);const r=function(){z.resolve("")};z.domList.push(a);const s=function(){z.domList.forEach((e=>{try{e&&l.removeChild(e)}catch(t){console.error(t)}})),l.removeEventListener("click",r),l.removeEventListener("scroll",r)};z.resolve=function(e){s(),o(e)},s(),l.appendChild(a),l.addEventListener("click",r),l.addEventListener("scroll",r)}))},F=function(){z&&(z.resolve(""),z.domList=[])};function H(e=!0){return h()&&e&&u((()=>{F()})),[B,F]}const J=e=>[{field:"filename",component:"Input",label:e("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:e("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}],V=C(" 英雄联盟 -- 根据数组格式的数据进行导出 "),W=C("表格自带导出"),Y=C(" 数组格式导出 "),G=C(" 自定义导出格式 ");e("default",i({name:"DemosTablesLolTable",setup(e){const[n]=M(),o=g(),[l]=H(),a=(()=>{const{t:e}=v(),[t]=S();return{openModal:({onOk:n})=>{t({modalProps:{title:e("component.excel.exportModalTitle"),onFinish:async e=>{const{filename:t,bookType:o}=e;n({filename:`${t.split(".").shift()}.${o}`,bookType:o})}},formProps:{labelWidth:100,schemas:J(e)}})}}})();let i=[];const c=()=>{const e=P.filter((e=>"$action"!==e.dataIndex)),t=e.map((e=>e.dataIndex));T({data:i.map((e=>t.reduce(((t,n)=>(t[n]=Array.isArray(e[n])?e[n].toString():e[n],t)),{}))).map((e=>Object.values(e))),header:e.map((e=>e.title)),filename:"二维数组方式导出excel.xlsx"})},r=()=>{a.openModal({onOk:({filename:e,bookType:t})=>{E({data:i,filename:e,write2excelOpts:{bookType:t}})}})},s=async e=>{const{data:t}=await $(e);return i=t.list,t},d=e=>({onContextmenu:t=>{l({event:t,items:[{label:"查看",handler:()=>{console.log("record",e),o.push({name:"demos-table-lol-info",params:{id:e.heroId}})}},{label:"编辑",handler:()=>{console.log("record",e)}}]})}});return(e,o)=>{const l=k("a-button");return _(),j("div",null,[t(p(O),{message:"游戏介绍",type:"info","show-icon":""},{description:w((()=>[V])),_:1}),t(p(I),{title:"英雄列表mock数据",style:{"margin-top":"20px"}},{default:w((()=>[t(p(n),{size:"small",bordered:"","data-request":s,columns:p(P),"row-key":"heroid","export-file-name":"表格自带导出","custom-row":d},{"export-button":w((()=>[t(l,{type:"primary"},{default:w((()=>[W])),_:1})])),toolbar:w((()=>[t(l,{type:"primary",onClick:c},{default:w((()=>[Y])),_:1}),t(l,{type:"primary",onClick:r},{default:w((()=>[G])),_:1})])),_:1},8,["columns"])])),_:1})])}}}))}}}))}();