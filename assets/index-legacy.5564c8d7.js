!function(){var e=document.createElement("style");e.innerHTML='.ant-progress{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";display:inline-block}.ant-progress-line{position:relative;width:100%;font-size:14px}.ant-progress-steps{display:inline-block}.ant-progress-steps-outer{display:flex;flex-direction:row;align-items:center}.ant-progress-steps-item{flex-shrink:0;min-width:2px;margin-right:2px;background:#f3f3f3;transition:all .3s}.ant-progress-steps-item-active{background:#1890ff}.ant-progress-small.ant-progress-line,.ant-progress-small.ant-progress-line .ant-progress-text .anticon{font-size:12px}.ant-progress-outer{display:inline-block;width:100%;margin-right:0;padding-right:0}.ant-progress-show-info .ant-progress-outer{margin-right:calc(-2em - 8px);padding-right:calc(2em + 8px)}.ant-progress-inner{position:relative;display:inline-block;width:100%;overflow:hidden;vertical-align:middle;background-color:#f5f5f5;border-radius:100px}.ant-progress-circle-trail{stroke:#f5f5f5}.ant-progress-circle-path{animation:ant-progress-appear .3s}.ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path{stroke:#1890ff}.ant-progress-success-bg,.ant-progress-bg{position:relative;background-color:#1890ff;border-radius:100px;transition:all .4s cubic-bezier(.08,.82,.17,1) 0s}.ant-progress-success-bg{position:absolute;top:0;left:0;background-color:#52c41a}.ant-progress-text{display:inline-block;width:2em;margin-left:8px;color:#000000d9;font-size:1em;line-height:1;white-space:nowrap;text-align:left;vertical-align:middle;word-break:normal}.ant-progress-text .anticon{font-size:14px}.ant-progress-status-active .ant-progress-bg:before{position:absolute;top:0;right:0;bottom:0;left:0;background:#fff;border-radius:10px;opacity:0;animation:ant-progress-active 2.4s cubic-bezier(.23,1,.32,1) infinite;content:""}.ant-progress-status-exception .ant-progress-bg{background-color:#ff4d4f}.ant-progress-status-exception .ant-progress-text{color:#ff4d4f}.ant-progress-status-exception .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path{stroke:#ff4d4f}.ant-progress-status-success .ant-progress-bg{background-color:#52c41a}.ant-progress-status-success .ant-progress-text{color:#52c41a}.ant-progress-status-success .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path{stroke:#52c41a}.ant-progress-circle .ant-progress-inner{position:relative;line-height:1;background-color:transparent}.ant-progress-circle .ant-progress-text{position:absolute;top:50%;left:50%;width:100%;margin:0;padding:0;color:#000000d9;font-size:1em;line-height:1;white-space:normal;text-align:center;transform:translate(-50%,-50%)}.ant-progress-circle .ant-progress-text .anticon{font-size:1.16666667em}.ant-progress-circle.ant-progress-status-exception .ant-progress-text{color:#ff4d4f}.ant-progress-circle.ant-progress-status-success .ant-progress-text{color:#52c41a}@keyframes ant-progress-active{0%{transform:translate(-100%) scaleX(0);opacity:.1}20%{transform:translate(-100%) scaleX(0);opacity:.5}to{transform:translate(0) scaleX(1);opacity:0}}.ant-progress-rtl{direction:rtl}.ant-progress-rtl.ant-progress-show-info .ant-progress-outer{margin-right:0;margin-left:calc(-2em - 8px);padding-right:0;padding-left:calc(2em + 8px)}.ant-progress-rtl .ant-progress-success-bg{right:0;left:auto}.ant-progress-rtl.ant-progress-line .ant-progress-text,.ant-progress-rtl.ant-progress-steps .ant-progress-text{margin-right:8px;margin-left:0;text-align:right}.sys-server-stat-container[data-v-11512892]{padding:20px;column-count:2;column-gap:10px}.sys-server-stat-container .stat-card[data-v-11512892]{margin-bottom:10px;break-inside:avoid;transform:translateZ(0)}.sys-server-stat-container .stat-card .disk-info[data-v-11512892]{width:100%;display:flex;flex-direction:row}.sys-server-stat-container .stat-card .disk-info--item[data-v-11512892]{width:50%}\n',document.head.appendChild(e),System.register(["./index-legacy.7f0fae95.js","./index-legacy.7a40aaec.js","./index-legacy.4860ff97.js"],(function(e){"use strict";var t,r,a,o,n,s,i,l,c,u,p,d,f,g,v,b,m,h,k,y,x,C,w,S,O,I,_,j,z,P,L,D,N,W,M,A,E,$,T,V,G,B,F,R;return{setters:[function(e){t=e.B,r=e.P,a=e.E,o=e.d,n=e.p,s=e.c,i=e.ab,l=e.j,c=e.ct,u=e.k,p=e.cu,d=e.x,f=e.cv,g=e.bn,v=e._,b=e.h,m=e.u,h=e.bf,k=e.G,y=e.bd,x=e.cw,C=e.z,w=e.b5,S=e.cx,O=e.N,I=e.Z,_=e.bQ,j=e.bR,z=e.$,P=e.J,L=e.r,D=e.c0,N=e.o,W=e.I,M=e.O,A=e.a7,E=e.a8,$=e.a9,T=e.aG,V=e.cy,G=e.ac,B=e.U},function(e){F=e.D},function(e){R=e.f}],execute:function(){var X=t("normal","exception","active","success"),q=t("line","circle","dashboard"),H=t("default","small"),U=function(){return{prefixCls:String,type:r.oneOf(q),percent:Number,format:{type:Function},status:r.oneOf(X),showInfo:{type:Boolean,default:void 0},strokeWidth:Number,strokeLinecap:String,strokeColor:{type:[String,Object],default:void 0},trailColor:String,width:Number,success:{type:Object,default:function(){return{}}},gapDegree:Number,gapPosition:String,size:r.oneOf(H),steps:Number,successPercent:Number,title:String}};function Z(e){return!e||e<0?0:e>100?100:e}function J(e){var t=e.success,r=e.successPercent;return t&&"progress"in t&&(a(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),r=t.progress),t&&"percent"in t&&(r=t.percent),r}var Q=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r},K=function(e,t){var r,a,o=e.from,n=void 0===o?c.blue:o,s=e.to,i=void 0===s?c.blue:s,l=e.direction,u=void 0===l?"rtl"===t?"to left":"to right":l,p=Q(e,["from","to","direction"]);if(0!==Object.keys(p).length){var d=(r=p,a=[],Object.keys(r).forEach((function(e){var t=parseFloat(e.replace(/%/g,""));isNaN(t)||a.push({key:t,value:r[e]})})),(a=a.sort((function(e,t){return e.key-t.key}))).map((function(e){var t=e.key,r=e.value;return"".concat(r," ").concat(t,"%")})).join(", "));return{backgroundImage:"linear-gradient(".concat(u,", ").concat(d,")")}}return{backgroundImage:"linear-gradient(".concat(u,", ").concat(n,", ").concat(i,")")}},Y=o({name:"Line",props:l(l({},U()),{prefixCls:String,direction:{type:String}}),setup:function(e,t){var r=t.slots,a=n((function(){var t=e.strokeColor,r=e.direction;return t&&"string"!=typeof t?K(t,r):{background:t}})),o=n((function(){return e.trailColor?{backgroundColor:e.trailColor}:void 0})),c=n((function(){var t=e.percent,r=e.strokeWidth,o=e.strokeLinecap,n=e.size;return l({width:"".concat(Z(t),"%"),height:"".concat(r||("small"===n?6:8),"px"),borderRadius:"square"===o?0:""},a.value)})),u=n((function(){return J(e)})),p=n((function(){var t=e.strokeWidth,r=e.size,a=e.strokeLinecap,o=e.success;return{width:"".concat(Z(u.value),"%"),height:"".concat(t||("small"===r?6:8),"px"),borderRadius:"square"===a?0:"",backgroundColor:null==o?void 0:o.strokeColor}}));return function(){var t;return s(i,null,[s("div",{class:"".concat(e.prefixCls,"-outer")},[s("div",{class:"".concat(e.prefixCls,"-inner"),style:o.value},[s("div",{class:"".concat(e.prefixCls,"-bg"),style:c.value},null),void 0!==u.value?s("div",{class:"".concat(e.prefixCls,"-success-bg"),style:p.value},null):null])]),null===(t=r.default)||void 0===t?void 0:t.call(r)])}}}),ee={gapDegree:Number,gapPosition:{type:String},percent:{type:[Array,Number]},prefixCls:String,strokeColor:{type:[Object,String,Array]},strokeLinecap:{type:String},strokeWidth:Number,trailColor:String,trailWidth:Number,transition:String},te=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r},re=0;function ae(e){return+e.replace("%","")}function oe(e){return Array.isArray(e)?e:[e]}function ne(e,t,r,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,n=arguments.length>5?arguments[5]:void 0,s=50-a/2,i=0,l=-s,c=0,u=-2*s;switch(n){case"left":i=-s,l=0,c=2*s,u=0;break;case"right":i=s,l=0,c=-2*s,u=0;break;case"bottom":l=s,u=2*s}var p="M 50,50 m ".concat(i,",").concat(l,"\n   a ").concat(s,",").concat(s," 0 1 1 ").concat(c,",").concat(-u,"\n   a ").concat(s,",").concat(s," 0 1 1 ").concat(-c,",").concat(u),d=2*Math.PI*s,f={stroke:r,strokeDasharray:"".concat(t/100*(d-o),"px ").concat(d,"px"),strokeDashoffset:"-".concat(o/2+e/100*(d-o),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:p,pathStyle:f}}var se=o({name:"VCCircle",props:d(ee,{percent:0,prefixCls:"vc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1}),setup:function(e){var t=u(re+=1),r=n((function(){return oe(e.percent)})),a=n((function(){return oe(e.strokeColor)})),o=f(),i=g(o,2),l=i[0];!function(e){var t=u(null);p((function(){var r=Date.now(),a=!1;e.value.forEach((function(e){var o,n=(null===(o=e)||void 0===o?void 0:o.$el)||e;if(n){a=!0;var s=n.style;s.transitionDuration=".3s, .3s, .3s, .06s",t.value&&r-t.value<100&&(s.transitionDuration="0s, 0s")}})),a&&(t.value=Date.now())}))}(i[1]);var c=function(){var o=e.prefixCls,n=e.strokeWidth,i=e.strokeLinecap,c=e.gapDegree,u=e.gapPosition,p=0;return r.value.map((function(e,r){var d=a.value[r]||a.value[a.value.length-1],f="[object Object]"===Object.prototype.toString.call(d)?"url(#".concat(o,"-gradient-").concat(t.value,")"):"",g=ne(p,e,d,n,c,u),b=g.pathString,m=g.pathStyle;p+=e;var h={key:r,d:b,stroke:f,"stroke-linecap":i,"stroke-width":n,opacity:0===e?0:1,"fill-opacity":"0",class:"".concat(o,"-circle-path"),style:m};return s("path",v({ref:l(r)},h),null)}))};return function(){var r=e.prefixCls,o=e.strokeWidth,n=e.trailWidth,i=e.gapDegree,l=e.gapPosition,u=e.trailColor,p=e.strokeLinecap;e.strokeColor;var d=te(e,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"]),f=ne(0,100,u,o,i,l),g=f.pathString,b=f.pathStyle;delete d.percent;var m=a.value.find((function(e){return"[object Object]"===Object.prototype.toString.call(e)})),h={d:g,stroke:u,"stroke-linecap":p,"stroke-width":n||o,"fill-opacity":"0",class:"".concat(r,"-circle-trail"),style:b};return s("svg",v({class:"".concat(r,"-circle"),viewBox:"0 0 100 100"},d),[m&&s("defs",null,[s("linearGradient",{id:"".concat(r,"-gradient-").concat(t.value),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(m).sort((function(e,t){return ae(e)-ae(t)})).map((function(e,t){return s("stop",{key:t,offset:e,"stop-color":m[e]},null)}))])]),s("path",h,null),c().reverse()])}}});var ie=o({name:"Circle",inheritAttrs:!1,props:U(),setup:function(e,t){var r=t.slots,a=n((function(){return e.gapDegree||0===e.gapDegree?e.gapDegree:"dashboard"===e.type?75:void 0})),o=n((function(){var t=e.width||120;return{width:"number"==typeof t?"".concat(t,"px"):t,height:"number"==typeof t?"".concat(t,"px"):t,fontSize:"".concat(.15*t+6,"px")}})),i=n((function(){return e.strokeWidth||6})),l=n((function(){return e.gapPosition||"dashboard"===e.type&&"bottom"||"top"})),u=n((function(){return function(e){var t=e.percent,r=Z(J({success:e.success,successPercent:e.successPercent}));return[r,Z(Z(t)-r)]}(e)})),p=n((function(){return"[object Object]"===Object.prototype.toString.call(e.strokeColor)})),d=n((function(){return function(e){var t=e.success,r=void 0===t?{}:t,a=e.strokeColor;return[r.strokeColor||c.green,a||null]}({success:e.success,strokeColor:e.strokeColor})})),f=n((function(){var t;return b(t={},"".concat(e.prefixCls,"-inner"),!0),b(t,"".concat(e.prefixCls,"-circle-gradient"),p.value),t}));return function(){var t;return s("div",{class:f.value,style:o.value},[s(se,{percent:u.value,strokeWidth:i.value,trailWidth:i.value,strokeColor:d.value,strokeLinecap:e.strokeLinecap,trailColor:e.trailColor,prefixCls:e.prefixCls,gapDegree:a.value,gapPosition:l.value},null),null===(t=r.default)||void 0===t?void 0:t.call(r)])}}}),le=o({name:"Steps",props:l(l({},U()),{steps:Number,size:{type:String},strokeColor:String,trailColor:String}),setup:function(e,t){var r=t.slots,a=n((function(){return Math.round(e.steps*((e.percent||0)/100))})),o=n((function(){return"small"===e.size?2:14})),i=n((function(){for(var t=e.steps,r=e.strokeWidth,n=void 0===r?8:r,i=e.strokeColor,l=e.trailColor,c=e.prefixCls,u=[],p=0;p<t;p+=1){var d,f=(b(d={},"".concat(c,"-steps-item"),!0),b(d,"".concat(c,"-steps-item-active"),p<=a.value-1),d);u.push(s("div",{key:p,class:f,style:{backgroundColor:p<=a.value-1?i:l,width:"".concat(o.value,"px"),height:"".concat(n,"px")}},null))}return u}));return function(){var t;return s("div",{class:"".concat(e.prefixCls,"-steps-outer")},[i.value,null===(t=r.default)||void 0===t?void 0:t.call(r)])}}}),ce=o({name:"AProgress",props:d(U(),{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",strokeLinecap:"round"}),slots:["format"],setup:function(e,t){var r=t.slots,o=m("progress",e),i=o.prefixCls,c=o.direction;a(null==e.successPercent,"Progress","`successPercent` is deprecated. Please use `success.percent` instead.");var u=n((function(){var t,r=e.type,a=e.showInfo,o=e.size,n=i.value;return b(t={},n,!0),b(t,"".concat(n,"-").concat("dashboard"===r?"circle":r),!0),b(t,"".concat(n,"-show-info"),a),b(t,"".concat(n,"-").concat(o),o),b(t,"".concat(n,"-rtl"),"rtl"===c.value),t})),p=n((function(){var t=e.percent,r=void 0===t?0:t,a=J(e);return parseInt(void 0!==a?a.toString():r.toString(),10)})),d=n((function(){var t=e.status;return X.indexOf(t)<0&&p.value>=100?"success":t||"normal"}));return function(){var t,a=e.type,o=e.steps,n=e.strokeColor,c=e.title,p=function(){var t,a=e.showInfo,o=e.format,n=e.type,l=e.percent,c=e.title,u=J(e);if(!a)return null;var p=o||(null==r?void 0:r.format)||function(e){return"".concat(e,"%")},f="line"===n;return o||(null==r?void 0:r.format)||"exception"!==d.value&&"success"!==d.value?t=p(Z(l),Z(u)):"exception"===d.value?t=s(f?h:k,null,null):"success"===d.value&&(t=s(f?y:x,null,null)),s("span",{class:"".concat(i.value,"-text"),title:void 0===c&&"string"==typeof t?t:void 0},[t])}();"line"===a?t=o?s(le,v(v({},e),{},{strokeColor:"string"==typeof n?n:void 0,prefixCls:i.value,steps:o}),{default:function(){return[p]}}):s(Y,v(v({},e),{},{prefixCls:i.value}),{default:function(){return[p]}}):"circle"!==a&&"dashboard"!==a||(t=s(ie,v(v({},e),{},{prefixCls:i.value}),{default:function(){return[p]}}));var f=l(l({},u.value),b({},"".concat(i.value,"-status-").concat(d.value),!0));return s("div",{class:f,title:c},[t])}}}),ue=C(ce);const pe=o({props:{...U(),strokeColor:{type:[String,Object,Function]}},setup(e){const t=e,r=n((()=>"function"==typeof t.strokeColor?{...t,strokeColor:t.strokeColor(t.percent)}:{...t,strokeColor:t.strokeColor}));return(e,t)=>(O(),I(z(ue),_(j(z(r))),null,16))}});const de={class:"sys-server-stat-container"},fe={class:"disk-info"},ge={class:"disk-info--item"},ve={class:"disk-info"},be={class:"disk-info--item"},me=o({name:"SystemMonitorServe",setup(e){let t;const r=L({runtime:{os:"",arch:"",nodeVersion:"",npmVersion:""},disk:{size:0,used:0,available:0},memory:{total:0,available:0},cpu:{manufacturer:"",brand:"",physicalCores:0,model:"",speed:0,rawCurrentLoad:0,rawCurrentLoadIdle:0,coresLoad:[]}}),{runtime:a,disk:o,memory:l,cpu:c}=D(r),u=n((()=>({size:R(o.value.size),used:R(o.value.used),available:R(o.value.available)}))),p=n((()=>({total:R(l.value.total),free:R(l.value.available),used:R(l.value.total-l.value.available)}))),d=n((()=>o.value.size<=0?0:Math.floor(o.value.used/o.value.size*100))),f=n((()=>l.value.total<=0?0:Math.floor((l.value.total-l.value.available)/l.value.total*100))),g=n((()=>`${c.value.manufacturer} ${c.value.brand} @ ${c.value.speed}GHz`)),v=async()=>{const e=await w({url:S.stat,method:"get"});a.value=e.runtime,o.value=e.disk,l.value=e.memory,c.value=e.cpu};v();const b=e=>e<30?"#5cb87a":e<70?"#e6a23c":"#f53f3f",m=(e,t)=>t<=0?0:Math.floor(e/t*100);return N((()=>{t=setInterval(v,1e4)})),W((()=>{clearInterval(t)})),(e,t)=>(O(),M("div",de,[s(z(V),{class:"stat-card",title:"运行环境"},{default:A((()=>[s(z(F),{column:1,"label-style":{width:"50%"}},{default:A((()=>[s(z(F).Item,{label:"操作系统"},{default:A((()=>[E($(z(a).os),1)])),_:1}),s(z(F).Item,{label:"系统架构"},{default:A((()=>[E($(z(a).arch),1)])),_:1}),s(z(F).Item,{label:"Node版本"},{default:A((()=>[s(z(T),{color:"processing",size:"small"},{default:A((()=>[E("v"+$(z(a).nodeVersion),1)])),_:1})])),_:1}),s(z(F).Item,{label:"NPM版本"},{default:A((()=>[s(z(T),{color:"processing",size:"small"},{default:A((()=>[E("v"+$(z(a).npmVersion),1)])),_:1})])),_:1})])),_:1})])),_:1}),s(z(V),{class:"stat-card",title:"CPU"},{default:A((()=>[s(z(F),{column:1,"label-style":{width:"50%"},"content-style":{width:"50%"}},{default:A((()=>[s(z(F).Item,{label:"详细"},{default:A((()=>[E($(z(g)),1)])),_:1}),s(z(F).Item,{label:"负载"},{default:A((()=>[s(pe,{percent:m(z(c).rawCurrentLoad,z(c).rawCurrentLoadIdle+z(c).rawCurrentLoad),"stroke-color":b},null,8,["percent"])])),_:1}),(O(!0),M(i,null,G(z(c).coresLoad,((e,t)=>(O(),I(z(F).Item,{key:t,label:`核心${t+1} 负载`},{default:A((()=>[s(pe,{percent:m(e.rawLoad,e.rawLoad+e.rawLoadIdle),"stroke-color":b},null,8,["percent"])])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),s(z(V),{class:"stat-card",title:"磁盘"},{default:A((()=>[B("div",fe,[s(z(F),{class:"disk-info--item",column:1},{default:A((()=>[s(z(F).Item,{label:"总空间"},{default:A((()=>[E($(z(u).size),1)])),_:1}),s(z(F).Item,{label:"已用空间"},{default:A((()=>[E($(z(u).used),1)])),_:1}),s(z(F).Item,{label:"可用空间"},{default:A((()=>[E($(z(u).available),1)])),_:1})])),_:1}),B("div",ge,[s(pe,{type:"dashboard",percent:z(d),width:100,"stroke-color":b},null,8,["percent"])])])])),_:1}),s(z(V),{class:"stat-card",title:"内存"},{default:A((()=>[B("div",ve,[s(z(F),{class:"disk-info--item",column:1},{default:A((()=>[s(z(F).Item,{label:"总内存"},{default:A((()=>[E($(z(p).total),1)])),_:1}),s(z(F).Item,{label:"已用内存"},{default:A((()=>[E($(z(p).used),1)])),_:1}),s(z(F).Item,{label:"可用内存"},{default:A((()=>[E($(z(p).free),1)])),_:1})])),_:1}),B("div",be,[s(pe,{type:"dashboard",percent:z(f),width:100,"stroke-color":b},null,8,["percent"])])])])),_:1})]))}});e("default",P(me,[["__scopeId","data-v-11512892"]]))}}}))}();