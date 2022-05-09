!function(){var t=document.createElement("style");t.innerHTML='.ant-alert{box-sizing:border-box;margin:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;display:flex;align-items:center;padding:8px 15px;word-wrap:break-word;border-radius:2px}.ant-alert-content{flex:1;min-width:0}.ant-alert-icon{margin-right:8px}.ant-alert-description{display:none;font-size:14px;line-height:22px}.ant-alert-success{background-color:#f6ffed;border:1px solid #b7eb8f}.ant-alert-success .ant-alert-icon{color:#52c41a}.ant-alert-info{background-color:#e6f7ff;border:1px solid #91d5ff}.ant-alert-info .ant-alert-icon{color:#1890ff}.ant-alert-warning{background-color:#fffbe6;border:1px solid #ffe58f}.ant-alert-warning .ant-alert-icon{color:#faad14}.ant-alert-error{background-color:#fff2f0;border:1px solid #ffccc7}.ant-alert-error .ant-alert-icon{color:#ff4d4f}.ant-alert-error .ant-alert-description>pre{margin:0;padding:0}.ant-alert-action{margin-left:8px}.ant-alert-close-icon{margin-left:8px;padding:0;overflow:hidden;font-size:12px;line-height:12px;background-color:transparent;border:none;outline:none;cursor:pointer}.ant-alert-close-icon .anticon-close{color:#00000073;transition:color .3s}.ant-alert-close-icon .anticon-close:hover{color:#000000bf}.ant-alert-close-text{color:#00000073;transition:color .3s}.ant-alert-close-text:hover{color:#000000bf}.ant-alert-with-description{align-items:flex-start;padding:15px 15px 15px 24px}.ant-alert-with-description.ant-alert-no-icon{padding:15px}.ant-alert-with-description .ant-alert-icon{margin-right:15px;font-size:24px}.ant-alert-with-description .ant-alert-message{display:block;margin-bottom:4px;color:#000000d9;font-size:16px}.ant-alert-message{color:#000000d9}.ant-alert-with-description .ant-alert-description{display:block}.ant-alert.ant-alert-motion-leave{overflow:hidden;opacity:1;transition:max-height .3s cubic-bezier(.78,.14,.15,.86),opacity .3s cubic-bezier(.78,.14,.15,.86),padding-top .3s cubic-bezier(.78,.14,.15,.86),padding-bottom .3s cubic-bezier(.78,.14,.15,.86),margin-bottom .3s cubic-bezier(.78,.14,.15,.86)}.ant-alert.ant-alert-motion-leave-active{max-height:0;margin-bottom:0!important;padding-top:0;padding-bottom:0;opacity:0}.ant-alert-banner{margin-bottom:0;border:0;border-radius:0}.ant-alert.ant-alert-rtl{direction:rtl}.ant-alert-rtl .ant-alert-icon{margin-right:auto;margin-left:8px}.ant-alert-rtl .ant-alert-action,.ant-alert-rtl .ant-alert-close-icon{margin-right:8px;margin-left:auto}.ant-alert-rtl.ant-alert-with-description{padding-right:24px;padding-left:15px}.ant-alert-rtl.ant-alert-with-description .ant-alert-icon{margin-right:auto;margin-left:15px}\n',document.head.appendChild(t),System.register(["./index-legacy.7f0fae95.js"],(function(t){"use strict";var n,e,a,o,r,i,l,c,s,d,p,f,u,g,b,x,v,m,h,y,w,z,k,C,H,A;return{setters:[function(t){n=t.z,e=t.B,a=t.d,o=t.P,r=t.u,i=t.k,l=t.g,c=t.s,s=t.h,d=t.c,p=t.G,f=t.ba,u=t.aZ,g=t.bb,b=t.Q,x=t.T,v=t._,m=t.bc,h=t.bd,y=t.be,w=t.bf,z=t.bg,k=t.bh,C=t.bi,H=t.bj,A=t.b9}],execute:function(){var B={success:h,info:y,error:w,warning:z},I={success:k,info:C,error:H,warning:A},L=e("success","info","warning","error"),T=a({name:"AAlert",inheritAttrs:!1,props:{type:o.oneOf(L),closable:{type:Boolean,default:void 0},closeText:o.any,message:o.any,description:o.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:o.any,closeIcon:o.any,onClose:Function},setup:function(t,n){var e=n.slots,a=n.emit,o=n.attrs,h=n.expose,y=r("alert",t),w=y.prefixCls,z=y.direction,k=i(!1),C=i(!1),H=i(),A=function(t){t.preventDefault();var n=H.value;n.style.height="".concat(n.offsetHeight,"px"),n.style.height="".concat(n.offsetHeight,"px"),k.value=!0,a("close",t)},L=function(){var n;k.value=!1,C.value=!0,null===(n=t.afterClose)||void 0===n||n.call(t)};h({animationEnd:L});var T=i({});return function(){var n,a,r=t.banner,i=t.closeIcon,h=void 0===i?null===(a=e.closeIcon)||void 0===a?void 0:a.call(e):i,y=t.closable,j=t.type,E=t.showIcon,F=l(e,t,"closeText"),S=l(e,t,"description"),D=l(e,t,"message"),G=l(e,t,"icon");E=!(!r||void 0!==E)||E;var M=(S?I:B)[j=r&&void 0===j?"warning":j||"info"]||null;F&&(y=!0);var O=w.value,P=c(O,(s(n={},"".concat(O,"-").concat(j),!0),s(n,"".concat(O,"-closing"),k.value),s(n,"".concat(O,"-with-description"),!!S),s(n,"".concat(O,"-no-icon"),!E),s(n,"".concat(O,"-banner"),!!r),s(n,"".concat(O,"-closable"),y),s(n,"".concat(O,"-rtl"),"rtl"===z.value),n)),Q=y?d("button",{type:"button",onClick:A,class:"".concat(O,"-close-icon"),tabindex:0},[F?d("span",{class:"".concat(O,"-close-text")},[F]):void 0===h?d(p,null,null):h]):null,Z=G&&(f(G)?u(G,{class:"".concat(O,"-icon")}):d("span",{class:"".concat(O,"-icon")},[G]))||d(M,{class:"".concat(O,"-icon")},null),_=g("".concat(O,"-motion"),{appear:!1,css:!0,onAfterLeave:L,onBeforeLeave:function(t){t.style.maxHeight="".concat(t.offsetHeight,"px")},onLeave:function(t){t.style.maxHeight="0px"}});return C.value?null:d(m,_,{default:function(){return[b(d("div",v(v({role:"alert"},o),{},{style:[o.style,T.value],class:[o.class,P],"data-show":!k.value,ref:H}),[E?Z:null,d("div",{class:"".concat(O,"-content")},[D?d("div",{class:"".concat(O,"-message")},[D]):null,S?d("div",{class:"".concat(O,"-description")},[S]):null]),Q]),[[x,!k.value]])]}})}}});t("A",n(T))}}}))}();