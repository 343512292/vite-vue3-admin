!function(){var t=document.createElement("style");t.innerHTML='.ant-descriptions-header{display:flex;align-items:center;margin-bottom:20px}.ant-descriptions-title{flex:auto;overflow:hidden;color:#000000d9;font-weight:700;font-size:16px;line-height:1.5715;white-space:nowrap;text-overflow:ellipsis}.ant-descriptions-extra{margin-left:auto;color:#000000d9;font-size:14px}.ant-descriptions-view{width:100%;border-radius:2px}.ant-descriptions-view table{width:100%;table-layout:fixed}.ant-descriptions-row>th,.ant-descriptions-row>td{padding-bottom:16px}.ant-descriptions-row:last-child{border-bottom:none}.ant-descriptions-item-label{color:#000000d9;font-weight:400;font-size:14px;line-height:1.5715;text-align:start}.ant-descriptions-item-label:after{content:":";position:relative;top:-.5px;margin:0 8px 0 2px}.ant-descriptions-item-label.ant-descriptions-item-no-colon:after{content:" "}.ant-descriptions-item-no-label:after{margin:0;content:""}.ant-descriptions-item-content{display:table-cell;flex:1;color:#000000d9;font-size:14px;line-height:1.5715;word-break:break-word;overflow-wrap:break-word}.ant-descriptions-item{padding-bottom:0;vertical-align:top}.ant-descriptions-item-container{display:flex}.ant-descriptions-item-container .ant-descriptions-item-label,.ant-descriptions-item-container .ant-descriptions-item-content{display:inline-flex;align-items:baseline}.ant-descriptions-middle .ant-descriptions-row>th,.ant-descriptions-middle .ant-descriptions-row>td{padding-bottom:12px}.ant-descriptions-small .ant-descriptions-row>th,.ant-descriptions-small .ant-descriptions-row>td{padding-bottom:8px}.ant-descriptions-bordered .ant-descriptions-view{border:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-view>table{table-layout:auto;border-collapse:collapse}.ant-descriptions-bordered .ant-descriptions-item-label,.ant-descriptions-bordered .ant-descriptions-item-content{padding:16px 24px;border-right:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-item-label:last-child,.ant-descriptions-bordered .ant-descriptions-item-content:last-child{border-right:none}.ant-descriptions-bordered .ant-descriptions-item-label{background-color:#fafafa}.ant-descriptions-bordered .ant-descriptions-item-label:after{display:none}.ant-descriptions-bordered .ant-descriptions-row{border-bottom:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-row:last-child{border-bottom:none}.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content{padding:12px 24px}.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content{padding:8px 16px}.ant-descriptions-rtl{direction:rtl}.ant-descriptions-rtl .ant-descriptions-item-label:after{margin:0 2px 0 8px}.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content{border-right:none;border-left:1px solid #f0f0f0}.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label:last-child,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content:last-child{border-left:none}\n',document.head.appendChild(t),System.register(["./index-legacy.7f0fae95.js"],(function(t){"use strict";var e,n,o,i,l,a,r,s,c,d,p,u,b,f,m,v,y,x,h,w,S,g,C;return{setters:[function(t){e=t.c,n=t.h,o=t.C,i=t.k,l=t.aS,a=t.aT,r=t.aU,s=t.j,c=t.ab,d=t.P,p=t.d,u=t.u,b=t.aV,f=t.aW,m=t.b,v=t.I,y=t.F,x=t.aX,h=t.p,w=t.aY,S=t.f,g=t.aZ,C=t.w}],execute:function(){function k(t){return null!=t}var j=function(t){var o,i=t.itemPrefixCls,l=t.component,a=t.span,r=t.labelStyle,s=t.contentStyle,c=t.bordered,d=t.label,p=t.content,u=t.colon,b=l;return c?e(b,{class:[(o={},n(o,"".concat(i,"-item-label"),k(d)),n(o,"".concat(i,"-item-content"),k(p)),o)],colSpan:a},{default:function(){return[k(d)&&e("span",{style:r},[d]),k(p)&&e("span",{style:s},[p])]}}):e(b,{class:["".concat(i,"-item")],colSpan:a},{default:function(){return[e("div",{class:"".concat(i,"-item-container")},[d&&e("span",{class:["".concat(i,"-item-label"),n({},"".concat(i,"-item-no-colon"),!u)],style:r},[d]),p&&e("span",{class:"".concat(i,"-item-content"),style:s},[p])])]}})},z=function(t){var n=function(t,n,o){var i=n.colon,c=n.prefixCls,d=n.bordered,p=o.component,u=o.type,b=o.showLabel,f=o.showContent,m=o.labelStyle,v=o.contentStyle;return t.map((function(t,n){var o,y,x=t.props||{},h=x.prefixCls,w=void 0===h?c:h,S=x.span,g=void 0===S?1:S,C=x.labelStyle,k=x.contentStyle,z=x.label,D=void 0===z?null===(y=null===(o=t.children)||void 0===o?void 0:o.label)||void 0===y?void 0:y.call(o):z,I=l(t),O=a(t),P=r(t),L=t.key;return"string"==typeof p?e(j,{key:"".concat(u,"-").concat(String(L)||n),class:O,style:P,labelStyle:s(s({},m.value),C),contentStyle:s(s({},v.value),k),span:g,colon:i,component:p,itemPrefixCls:w,bordered:d,label:b?D:null,content:f?I:null},null):[e(j,{key:"label-".concat(String(L)||n),class:O,style:s(s(s({},m.value),P),C),span:1,colon:i,component:p[0],itemPrefixCls:w,bordered:d,label:D},null),e(j,{key:"content-".concat(String(L)||n),class:O,style:s(s(s({},v.value),P),k),span:2*g-1,component:p[1],itemPrefixCls:w,bordered:d,content:I},null)]}))},d=t.prefixCls,p=t.vertical,u=t.row,b=t.index,f=t.bordered,m=o(P,{labelStyle:i({}),contentStyle:i({})}),v=m.labelStyle,y=m.contentStyle;return p?e(c,null,[e("tr",{key:"label-".concat(b),class:"".concat(d,"-row")},[n(u,t,{component:"th",type:"label",showLabel:!0,labelStyle:v,contentStyle:y})]),e("tr",{key:"content-".concat(b),class:"".concat(d,"-row")},[n(u,t,{component:"td",type:"content",showContent:!0,labelStyle:v,contentStyle:y})])]):e("tr",{key:b,class:"".concat(d,"-row")},[n(u,t,{component:f?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:v,contentStyle:y})])};d.any;var D=p({name:"ADescriptionsItem",props:{prefixCls:String,label:d.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}},slots:["label"],setup:function(t,e){var n=e.slots;return function(){var t;return null===(t=n.default)||void 0===t?void 0:t.call(n)}}}),I={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function O(t,e,n){var o=t;return(void 0===e||e>n)&&(o=g(t,{span:n}),C(void 0===e,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}var P=Symbol("descriptionsContext"),L=p({name:"ADescriptions",props:{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:d.any,extra:d.any,column:{type:[Number,Object],default:function(){return I}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}},slots:["title","extra"],Item:D,setup:function(t,o){var l,a=o.slots,r=u("descriptions",t),s=r.prefixCls,c=r.direction,d=i({});b((function(){l=f.subscribe((function(e){"object"===m(t.column)&&(d.value=e)}))})),v((function(){f.unsubscribe(l)})),y(P,{labelStyle:x(t,"labelStyle"),contentStyle:x(t,"contentStyle")});var p=h((function(){return function(t,e){if("number"==typeof t)return t;if("object"===m(t))for(var n=0;n<w.length;n++){var o=w[n];if(e[o]&&void 0!==t[o])return t[o]||I[o]}return 3}(t.column,d.value)}));return function(){var o,i,l,r,d=t.size,u=t.bordered,b=void 0!==u&&u,f=t.layout,m=void 0===f?"horizontal":f,v=t.colon,y=void 0===v||v,x=t.title,h=void 0===x?null===(i=a.title)||void 0===i?void 0:i.call(a):x,w=t.extra,g=void 0===w?null===(l=a.extra)||void 0===l?void 0:l.call(a):w,C=function(t,e){var n=S(t),o=[],i=[],l=e;return n.forEach((function(t,a){var r,s=null===(r=t.props)||void 0===r?void 0:r.span,c=s||1;if(a===n.length-1)return i.push(O(t,s,l)),void o.push(i);c<l?(l-=c,i.push(t)):(i.push(O(t,c,l)),o.push(i),l=e,i=[])})),o}(null===(r=a.default)||void 0===r?void 0:r.call(a),p.value);return e("div",{class:[s.value,(o={},n(o,"".concat(s.value,"-").concat(d),"default"!==d),n(o,"".concat(s.value,"-bordered"),!!b),n(o,"".concat(s.value,"-rtl"),"rtl"===c.value),o)]},[(h||g)&&e("div",{class:"".concat(s.value,"-header")},[h&&e("div",{class:"".concat(s.value,"-title")},[h]),g&&e("div",{class:"".concat(s.value,"-extra")},[g])]),e("div",{class:"".concat(s.value,"-view")},[e("table",null,[e("tbody",null,[C.map((function(t,n){return e(z,{key:n,index:n,colon:y,prefixCls:s.value,vertical:"vertical"===m,bordered:b,row:t},null)}))])])])])}}});L.install=function(t){return t.component(L.name,L),t.component(L.Item.name,L.Item),t};t("D",L)}}}))}();