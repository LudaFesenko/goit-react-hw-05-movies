"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[112],{9396:function(n,e,t){t.d(e,{HF:function(){return p},Hx:function(){return m},Tg:function(){return c},Y5:function(){return l},xc:function(){return v}});var r=t(5861),a=t(7757),u=t.n(a),i=t(1243),o="ece71aad9171ec15880a13ae16940cc4";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/trending/movie/day",{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/search/movie",{signal:t.signal,params:{api_key:o,query:e,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(e),{signal:t.signal,params:{api_key:o}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(e,"/credits"),{params:{api_key:o}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/3/movie/".concat(e,"/reviews"),{params:{api_key:o}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/"},3174:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a,u=t(7689),i=t(168),o=t(1087),c=t(6444),s=c.ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n"]))),p=(0,c.ZP)(o.OL)(a||(a=(0,i.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 18px;\n  text-decoration: underline;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n\n  &:hover {\n    color: red;\n  }\n"]))),f=t(184),l=function(n){var e=n.movies,t=(0,u.TH)();return(0,f.jsx)(s,{children:e&&e.map((function(n){var e=n.id,r=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"/movies/".concat(e),state:{from:t},children:(0,f.jsx)("p",{children:r})})},e)}))})}},5112:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,u,i=t(5861),o=t(9439),c=t(7757),s=t.n(c),p=t(2791),f=t(1087),l=t(1243),d=t(1686),v=t(3174),h=t(7013),m=t(168),x=t(6444),Z=x.ZP.form(r||(r=(0,m.Z)(["\n  padding: 16px;\n"]))),g=x.ZP.input(a||(a=(0,m.Z)(["\n  padding: 8px;\n"]))),y=x.ZP.button(u||(u=(0,m.Z)(["\n  padding: 8px;\n"]))),b=t(184),k=function(n){var e,t=n.onSubmit,r=n.submitting,a=(0,f.lr)(),u=null!==(e=(0,o.Z)(a,1)[0].get("query"))&&void 0!==e?e:"",i=(0,p.useState)(u),c=(0,o.Z)(i,2),s=c[0],l=c[1];return(0,b.jsx)("div",{children:(0,b.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),s.trim()?t(s):d.Notify.failure("Please enter movie")},children:[(0,b.jsx)(g,{name:"search",type:"text",value:s,autoComplete:"off",autoFocus:!0,onChange:function(n){return l(n.target.value.toLowerCase())},disabled:r}),(0,b.jsx)(y,{type:"submit",children:r?"Loading...":"Search"})]})})},w=t(9396),j=function(){var n,e=(0,p.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1],u=(0,p.useState)(!1),c=(0,o.Z)(u,2),m=c[0],x=c[1],Z=(0,f.lr)(),g=(0,o.Z)(Z,2),y=g[0],j=g[1],_=null!==(n=y.get("query"))&&void 0!==n?n:"";(0,p.useEffect)((function(){var n=new AbortController;if(_){var e=function(){var e=(0,i.Z)(s().mark((function e(){var t,r,u,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,e.next=4,(0,w.HF)(_,n);case 4:t=e.sent,a(t.results),t.results.length||d.Notify.failure("Please write correct movie"),e.next=15;break;case 9:if(e.prev=9,e.t0=e.catch(1),!l.Z.isCancel(e.t0)){e.next=13;break}return e.abrupt("return");case 13:i=null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(u=r.data)||void 0===u?void 0:u.status_message,d.Notify.failure(i||"Write correct movie");case 15:return e.prev=15,x(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,9,15,18]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}}),[_]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k,{onSubmit:function(n){m||j({query:n})},submitting:m}),m&&(0,b.jsx)(h.Z,{}),r&&(0,b.jsx)(v.Z,{movies:r})]})}}}]);
//# sourceMappingURL=112.c4142cee.chunk.js.map