System.register(["./index-legacy.7f0fae95.js"],(function(e){"use strict";var t,n,a,u,s,l,o,r,d,i,m,c,f,v,y,b,p;return{setters:[function(e){t=e.d,n=e.a1,a=e.a0,u=e.k,s=e.l,l=e.Y,o=e.N,r=e.O,d=e.c,i=e.a7,m=e.ab,c=e.ac,f=e.$,v=e.ad,y=e.Z,b=e.af,p=e.ae}],execute:function(){e("default",t({name:"demos-nested-routes",setup(e){const t=n(),K=a(),g=[{title:"路由一",name:"demos-nested-routes-one"},{title:"路由二",name:"demos-nested-routes-two"},{title:"路由三",name:"demos-nested-routes-three"}],h=u(K.name||g[0].name);return s(h,(e=>{t.push({name:e})})),(e,t)=>{const n=l("router-view");return o(),r("div",null,[d(f(v),{activeKey:h.value,"onUpdate:activeKey":t[0]||(t[0]=e=>h.value=e)},{default:i((()=>[(o(),r(m,null,c(g,(e=>d(f(v).TabPane,{key:e.name,tab:e.title},null,8,["tab"]))),64))])),_:1},8,["activeKey"]),d(n,null,{default:i((({Component:e})=>[(o(),y(p,null,[(o(),y(b(e)))],1024))])),_:1})])}}}))}}}));