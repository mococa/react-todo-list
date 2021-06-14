(this["webpackJsonpreact-tasks-todos"]=this["webpackJsonpreact-tasks-todos"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),i=c(10),s=c.n(i),r=(c(16),c(3)),a=c(9),d=c(1),l=o.a.createContext({}),j=function(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),o=c[0],i=c[1],s=Object(n.useState)(-1),j=Object(r.a)(s,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("todos");i(e&&"[]"!==e?JSON.parse(e):[])}),[]),Object(d.jsx)(l.Provider,{value:{todos:o,todoIndex:u,setTodos:i,setTodoIndex:b,addTodo:function(e){return e.topic?e.description?(i([].concat(Object(a.a)(o),[e])),void localStorage.setItem("todos",JSON.stringify([].concat(Object(a.a)(o),[e])))):alert("Description field missing"):alert("Topic field missing")},removeTodo:function(e){confirm("Do you really want to remove this ".concat(o[e].topic," task from your list?"))&&i(o.filter((function(t,c){return c!==e}))),localStorage.setItem("todos",JSON.stringify(o))},editTodo:function(e,t){if(!e.topic)return alert("Topic field missing");if(!e.description)return alert("Description field missing");var c=o;c[t]=e,i(c),localStorage.setItem("todos",JSON.stringify(c))}},children:e.children})},u=c(4),b=c(6);var f=function(e){var t=e.close,c=e.index,i=o.a.useContext(l),s=i.addTodo,a=i.editTodo,j=i.todos,f=(i.setTodoIndex,["#ff5555","#ffc155","#ffff2a","#5e55ff","#55ff6f","#ff55cf","#3d3d3d"]),O=function(e,t){return{width:"20px",height:"20px",backgroundColor:e,borderRadius:"5px",cursor:"pointer",border:t===p?"3px solid #1d1d1d":"none"}},x=Object(n.useState)([-1,void 0].includes(c)?0:f.indexOf(j[c].color)),h=Object(r.a)(x,2),p=h[0],v=h[1],m=Object(n.useState)({topic:[-1,void 0].includes(c)?"":j[c].topic,description:[-1,void 0].includes(c)?"":j[c].description,color:f[p]}),g=Object(r.a)(m,2),k=g[0],T=g[1];return function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keyup";Object(n.useEffect)((function(){function n(c){[e].includes(c.key)&&t()}return window.addEventListener(c,n),function(){return window.removeEventListener(c,n)}}),[])}("Escape",(function(){t()})),Object(d.jsxs)("div",{className:"modal",children:[Object(d.jsxs)("div",{className:"top",children:[Object(d.jsx)("span",{children:[-1,void 0].includes(c)?"New Task":"Edit Task"}),Object(d.jsx)(b.a,{size:16,className:"clickable",onClick:t})]}),Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)("label",{children:"Topic:"}),Object(d.jsx)("input",{type:"text",defaultValue:[-1,void 0].includes(c)?"":k.topic,onChange:function(e){return T(Object(u.a)(Object(u.a)({},k),{},{topic:e.target.value}))}}),Object(d.jsx)("label",{children:"Description:"}),Object(d.jsx)("textarea",{defaultValue:[-1,void 0].includes(c)?"":k.description,onChange:function(e){return T(Object(u.a)(Object(u.a)({},k),{},{description:e.target.value}))}}),Object(d.jsxs)("label",{children:["Color:",Object(d.jsx)("div",{style:{display:"flex",gap:"5px"},children:f.map((function(e,t){return Object(d.jsx)("div",{onClick:function(){return function(e){void 0!==e&&(v(e),T(Object(u.a)(Object(u.a)({},k),{},{color:f[e]})))}(t)},style:O(e,t)},t)}))})]}),Object(d.jsx)("button",{className:"clickable",onClick:function(){[-1,void 0].includes(c)?s(k):a(k,c),t()},children:[-1,void 0].includes(c)?"Add Todo":"Edit Todo"})]})]})};var O=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],s=o.a.useContext(l).setTodoIndex;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Todo List"}),Object(d.jsx)("button",{className:"clickable",onClick:function(){s(-1),i(!0)},children:"Create Task"})]}),c&&Object(d.jsx)(f,{close:function(){return i(!1)}})]})};var x=function(e){var t=e.data,c=e.index,n=o.a.useContext(l),i=n.removeTodo,s=n.setTodoIndex;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card",style:{borderTop:"4px solid ".concat(t.color)},children:[Object(d.jsx)("span",{className:"topic",style:{backgroundColor:t.color},children:t.topic}),Object(d.jsx)("span",{style:{height:"100%",margin:"0 5px"},children:t.description}),Object(d.jsxs)("footer",{children:[Object(d.jsx)(b.c,{className:"clickable",size:24,fill:t.color,strokeWidth:.15,onClick:function(){s(c)}}),Object(d.jsx)(b.b,{className:"clickable",size:24,fill:t.color,strokeWidth:.15,onClick:function(){return i(c)}})]})]})})};var h=function(){var e=o.a.useContext(l),t=e.todos,c=e.todoIndex,i=e.setTodoIndex,s=Object(n.useState)(!1),a=Object(r.a)(s,2),j=a[0],u=a[1];return Object(n.useEffect)((function(){c<0||u(!0)}),[c]),Object(d.jsxs)("main",{children:[t.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{style:{fontWeight:300},children:"All Tasks"}),Object(d.jsx)("section",{className:"card-container",children:t.map((function(e,t){return Object(d.jsx)(x,{data:e,index:t},t)}))})]}):Object(d.jsx)("p",{children:"Oops! It seems empty here... Try adding a new task."}),j&&Object(d.jsx)(f,{close:function(){i(-1),u(!1)},index:c})]})},p=c(11);var v=function(){return Object(d.jsx)("footer",{children:Object(d.jsx)("a",{href:"https://github.com/mococa",target:"_blank",rel:"noreferrer",children:Object(d.jsxs)("h3",{children:[Object(d.jsx)(p.a,{style:{width:"50px",height:"100%"}})," Made by Luiz Felipe Moureau"]})})})};var m=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(h,{}),Object(d.jsx)(v,{})]})};c(18);s.a.render(Object(d.jsxs)(o.a.StrictMode,{children:[Object(d.jsx)(j,{children:Object(d.jsx)(m,{})})," "]}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.86189cd3.chunk.js.map