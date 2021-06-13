(this["webpackJsonpreact-tasks-todos"]=this["webpackJsonpreact-tasks-todos"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),i=c(9),r=c.n(i),s=(c(16),c(4)),a=c(1);var d=function(e){var t=e.fn;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"Todo List"}),Object(a.jsx)("button",{className:"clickable",onClick:t,children:"Create Task"})]})},l=c(7);var j=function(e){var t=e.data,c=e.fn,n=e.index;return Object(a.jsxs)("div",{className:"card",style:{borderTop:"4px solid ".concat(t.color)},children:[Object(a.jsx)("span",{className:"topic",style:{backgroundColor:t.color},children:t.topic}),Object(a.jsx)("span",{style:{height:"100%",margin:"0 5px"},children:t.description}),Object(a.jsx)("footer",{children:Object(a.jsx)(l.b,{className:"clickable",size:24,fill:t.color,strokeWidth:.15,onClick:function(){return c.deleteTask(n)}})})]})};var b=function(e){var t=e.todos,c=e.fn;return Object(a.jsxs)("main",{children:[Object(a.jsx)("h3",{style:{fontWeight:300},children:"All Tasks"}),Object(a.jsx)("section",{className:"card-container",children:t.map((function(e,t){return Object(a.jsx)(j,{data:e,fn:c,index:t},t)}))})]})},u=c(10);var f=function(){return Object(a.jsx)("footer",{children:Object(a.jsx)("a",{href:"https://github.com/mococa",target:"_blank",rel:"noreferrer",children:Object(a.jsxs)("h3",{children:[Object(a.jsx)(u.a,{style:{width:"50px",height:"100%"}})," Made by Luiz Felipe Moureau"]})})})},h=c(3),O=c(11);var x=function(e){var t=e.todos,c=e.fn,o=e.todo,i=e.index,r=["#ff5555","#ffc155","#ffff2a","#5e55ff","#55ff6f","#ff55cf","#3d3d3d"],d=function(e,t){return{width:"20px",height:"20px",backgroundColor:e,borderRadius:"5px",cursor:"pointer",border:t===u?"3px solid #1d1d1d":"none"}},j=Object(n.useState)(0),b=Object(s.a)(j,2),u=b[0],f=b[1];k();var x=Object(n.useState)({topic:void 0===o?"":o.topic,description:void 0===o?"":o.description,color:r[u]}),p=Object(s.a)(x,2),v=p[0],m=p[1];function k(e){void 0!==o&&f(r.findIndex((function(e){return o.color}))),void 0!==e&&(f(e),m(Object(h.a)(Object(h.a)({},v),{},{color:r[e]})))}return Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsxs)("div",{className:"top",children:[Object(a.jsx)("span",{children:void 0===o?"New Task":"Edit Task"}),Object(a.jsx)(l.a,{size:16,className:"clickable",onClick:function(){return c.setShowModal(!1)}})]}),Object(a.jsxs)("div",{className:"body",children:[Object(a.jsx)("label",{children:"Topic:"}),Object(a.jsx)("input",{type:"text",defaultValue:void 0===o?"":v.topic,onChange:function(e){return m(Object(h.a)(Object(h.a)({},v),{},{topic:e.target.value}))}}),Object(a.jsx)("label",{children:"Description:"}),Object(a.jsx)("textarea",{defaultValue:void 0===o?"":v.description,onChange:function(e){return m(Object(h.a)(Object(h.a)({},v),{},{description:e.target.value}))}}),Object(a.jsxs)("label",{children:["Color:",Object(a.jsx)("div",{style:{display:"flex",gap:"5px"},children:r.map((function(e,t){return Object(a.jsx)("div",{onClick:function(){return k(t)},style:d(e,t)},t)}))})]}),Object(a.jsx)("button",{className:"clickable",onClick:function(){if(void 0===o){if(!v.topic)return alert("Topic field missing");if(!v.description)return alert("Description field missing");c.setTodos([].concat(Object(O.a)(t),[v])),c.setShowModal(!1)}else c.editTodo(i,v)},children:void 0===o?"Add Todo":"Edit Todo"})]})]})};var p=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],o=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),l=r[0],j=r[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{fn:function(){return o(!0)}}),c&&Object(a.jsx)(x,{todos:l,fn:{setTodos:j,setShowModal:o}}),l.length?Object(a.jsx)(b,{todos:l,fn:{deleteTask:function(e){confirm("Do you really want to remove this ".concat(l[e].topic," task from your list?"))&&j(l.filter((function(t,c){return c!==e})))}}}):Object(a.jsx)("main",{children:Object(a.jsx)("p",{children:"Oops! It seems empty here... Try adding a new task."})}),Object(a.jsx)(f,{})]})};c(18);r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e1b71a27.chunk.js.map