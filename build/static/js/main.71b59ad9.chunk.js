(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t(15),r=t.n(c),i=t(3),o=t(0),u=function(e){return Object(o.jsx)("input",{value:e.value,onChange:e.onChange})},s=function(e){return Object(o.jsxs)("form",{onSubmit:e.addName,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:e.newName,onChange:e.handleNameChange}),"number:"," ",Object(o.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.deleteperson;return Object(o.jsx)(o.Fragment,{children:n.map((function(e){return Object(o.jsxs)("li",{children:[e.name," ",e.number,Object(o.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))})},l=(t(6),function(e){var n=e.notification;return null===n?null:Object(o.jsx)("div",{className:n.type,children:n.message})}),j=t(4),b=t.n(j),h="https://fullstackopen-2021.herokuapp.com/api/persons",f=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),j=Object(i.a)(r,2),f=j[0],m=j[1],O=Object(a.useState)(""),p=Object(i.a)(O,2),v=p[0],x=p[1],g=Object(a.useState)(""),w=Object(i.a)(g,2),C=w[0],N=w[1],y=Object(a.useState)(null),k=Object(i.a)(y,2),S=k[0],L=k[1];Object(a.useEffect)((function(){b.a.get(h).then((function(e){c(e.data)}))}),[]);var D=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";L({message:e,type:n}),setTimeout((function(){L(null)}),5e3)},E=0===C.length?t:t.filter((function(e){return e.name.toLowerCase().indexOf(C.toLowerCase())>-1}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(l,{notification:S}),"filter shown wiht a :",Object(o.jsx)(u,{value:C,onChange:function(e){var n=e.target.value;N(n.toLowerCase())}}),Object(o.jsx)("h3",{children:"Add a new"}),Object(o.jsx)(s,{addName:function(e){e.preventDefault();var n,a,r=t.find((function(e){return e.name.toLowerCase()===f.toLowerCase()})),i={name:f,number:v};r?window.confirm("The name ".concat(f," is alredy registered want to update?"))&&(n=r.id,a=i,b.a.put("".concat(h,"/").concat(n),a)).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e.data}))),m(""),x("")})).catch((function(){D("".concat(r.name," has already been eliminated"),"error")})):function(e){return b.a.post(h,e)}(i).then((function(e){c(t.concat(e.data)),D("".concat(f," created"),"success"),m(""),x("")}));m(""),x("")},newName:f,newNumber:v,handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){x(e.target.value)}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)("ul",{children:Object(o.jsx)(d,{persons:E,deleteperson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&function(e){return b.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))}(n.id).then((function(a){c(t.filter((function(n){return n.id!==e}))),D("".concat(n.name," eliminated"))})).catch((function(){c(t.filter((function(n){return n.id!==e}))),D("".concat(n.name," has already been eliminated"),"error")}))}})})]})};r.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))},6:function(e,n,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.71b59ad9.chunk.js.map