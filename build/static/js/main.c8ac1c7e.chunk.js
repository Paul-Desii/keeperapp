(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{34:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(4),r=n.n(c),u=n(30),o=n(16),i=n(26),m=n.n(i);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null),"Keeper"))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},p=n(28),s=n.n(p);var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(s.a,null)))},v=n(19),b=n(24),h=n(29),j=n.n(h),O=n(58),g=n(59);var k=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)({title:"",content:""}),i=Object(o.a)(u,2),m=i[0],E=i[1];function f(e){var t=e.target,n=t.name,a=t.value;E((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(v.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:f,value:m.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:f,value:m.content,placeholder:"Take a note...",rows:c?3:1}),l.a.createElement(g.a,{in:c},l.a.createElement(O.a,{onClick:function(t){e.onAdd(m),E({title:"",content:""}),t.preventDefault()}},l.a.createElement(j.a,null)))))};var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];function r(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(k,{onAdd:function(e){c((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:r})})),l.a.createElement(f,null))};r.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c8ac1c7e.chunk.js.map