"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[876],{8876:function(n,t,r){r.r(t);var e=r(4165),a=r(1413),u=r(5861),c=r(9439),s=r(2791),o=r(7689),i=r(1087),p=r(6555),f=r(184);t.default=function(){var n,t=(0,o.UO)().id,r=(0,o.s0)(),l=(0,s.useState)({item:{},loading:!1,error:null}),d=(0,c.Z)(l,2),v=d[0],h=d[1],Z=(null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)||"/posts";(0,s.useEffect)((function(){var n=function(){var n=(0,u.Z)((0,e.Z)().mark((function n(){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h((function(n){return(0,a.Z)((0,a.Z)({},n),{},{loading:!0,error:null})})),n.next=4,(0,p.JF)(t);case 4:r=n.sent,h((function(n){return(0,a.Z)((0,a.Z)({},n),{},{item:r})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h((function(t){return(0,a.Z)((0,a.Z)({},t),{},{error:n.t0})}));case 11:return n.prev=11,h((function(n){return(0,a.Z)((0,a.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[h,t]);var m=v.item,x=m.title,w=m.body;return(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("button",{onClick:function(){return r(Z)},children:"Go Back"}),(0,f.jsx)("h2",{children:x}),(0,f.jsx)("p",{children:w}),(0,f.jsx)(i.rU,{state:{from:Z},to:"/posts/".concat(t,"/comments"),children:"Comments"}),(0,f.jsx)(o.j3,{})]})}},6555:function(n,t,r){r.d(t,{JF:function(){return s},Jq:function(){return c},cl:function(){return o},w8:function(){return i}});var e=r(4165),a=r(5861),u=r(2388).Z.create({baseURL:"https://jsonplaceholder.typicode.com/posts",params:{_limit:12}}),c=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var t,r,a,c=arguments;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,n.next=3,u.get("/",{params:{_page:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/".concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a,c,s=arguments;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,u("/",{params:{q:t,_page:r}});case 3:return a=n.sent,c=a.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/".concat(t,"/comments"));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=876.494be6bc.chunk.js.map