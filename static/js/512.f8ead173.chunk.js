"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[512],{512:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r="container_container__hbpDN",o="container_title__yXjoA",a=n(184),i=function(e){var t=e.title,n=e.children;return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("h2",{className:o,children:t}),n]})},c=n(4942),l=n(1413),s=n(9439),u=n(2791),h=function(e){var t=e.initialState,n=e.onSubmit,r=(0,u.useState)((0,l.Z)({},t)),o=(0,s.Z)(r,2),a=o[0],i=o[1];return{state:a,setState:i,handleChange:function(e){var t=e.target,n=t.name,r=t.value,o=t.type,a=t.checked;console.log("type:",o),console.log("checked:",a);var s="checkbox"===o?a:r;i((function(e){return(0,l.Z)((0,l.Z)({},e),{},(0,c.Z)({},n,s))}))},handleSubmit:function(e){e.preventDefault(),n((0,l.Z)({},a)),i((0,l.Z)({},t))}}},b="form-add-book_group__h2qZ5",d="form-add-book_label__lhOuF",f="form-add-book_input__kI5LD",m="form-add-book_btn__m-af9",p={title:"",author:"",favorite:!1},j=function(e){var t=e.onSubmit,n=h({initialState:p,onSubmit:t}),r=n.state,o=n.handleChange,i=n.handleSubmit,c=r.title,l=r.author,s=r.favorite;return(0,a.jsxs)("form",{action:"",onSubmit:i,children:[(0,a.jsxs)("div",{className:b,children:[(0,a.jsx)("label",{className:d,htmlFor:"",children:"Title:"}),(0,a.jsx)("input",{value:c,name:"title",onChange:o,className:f,type:"text",placeholder:"Title of book"})]}),(0,a.jsxs)("div",{className:b,children:[(0,a.jsx)("label",{className:d,htmlFor:"",children:"Author:"}),(0,a.jsx)("input",{value:l,name:"author",onChange:o,className:f,type:"text",placeholder:"Author of book"})]}),(0,a.jsxs)("div",{className:b,children:[(0,a.jsx)("label",{className:d,htmlFor:"",children:"Favorite:"}),(0,a.jsx)("input",{value:l,name:"favorite",onChange:o,type:"checkbox",checked:s})]}),(0,a.jsx)("div",{className:b,children:(0,a.jsx)("button",{className:m,type:"submit",children:"Add book"})})]})},v="book-list_item__-wOGI",k="book-list_btn__I4W30",x=function(e){var t=e.books,n=e.removeBook,r=t.map((function(e){var t=e.id,r=e.title,o=e.author;return(0,a.jsxs)("li",{className:v,children:[r,". Author: ",o,".",(0,a.jsx)("button",{type:"button",className:k,onClick:function(){return n(t)},children:"Delete"})]},t)}));return(0,a.jsx)("ul",{children:r})},_="my-books_books__JQoYc",y=n(9434),O=function(){var e=(0,y.v9)((function(e){return e.books}));return(0,a.jsxs)("div",{className:_,children:[(0,a.jsx)(i,{title:"Add book",children:(0,a.jsx)(j,{})}),(0,a.jsxs)(i,{title:"List of books",children:[(0,a.jsx)("input",{name:"filter",type:"text",placeholder:"Enter name of book"}),(0,a.jsx)(x,{books:e})]})]})},g=function(){return(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(O,{})})}},4942:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9142);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=512.f8ead173.chunk.js.map