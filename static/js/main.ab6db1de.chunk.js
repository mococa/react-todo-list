(this["webpackJsonpreact-tasks-todos"]=this["webpackJsonpreact-tasks-todos"]||[]).push([[0],{17:function(e,t,o){},18:function(e,t,o){},20:function(e,t,o){},21:function(e,t,o){"use strict";o.r(t);var c=o(2),n=o.n(c),r=o(10),i=o.n(r),a=(o(17),o(18),o(3)),s=o(9),l=o(1),d=n.a.createContext({}),u=function(e){var t=Object(c.useState)([]),o=Object(a.a)(t,2),n=o[0],r=o[1],i=Object(c.useState)(-1),u=Object(a.a)(i,2),b=u[0],j=u[1];return Array.prototype.sorted=function(e){return this.sort((function(t,o){return t[e]<o[e]?-1:t[e]>o[e]?1:0}))},Object(c.useEffect)((function(){var e=localStorage.getItem("todos");r(e&&"[]"!==e?JSON.parse(e).sorted("topic"):[])}),[]),Object(l.jsx)(d.Provider,{value:{todos:n,todoIndex:b,setTodos:r,setTodoIndex:j,addTodo:function(e){return e.topic?e.description?(r([].concat(Object(s.a)(n),[e]).sorted("topic")),void localStorage.setItem("todos",JSON.stringify([].concat(Object(s.a)(n),[e])))):alert("Description field missing"):alert("Topic field missing")},removeTodo:function(e){var t=n.filter((function(t,o){return o!==e}));confirm("Do you really want to remove this ".concat(n[e].topic," task from your list?"))&&r(t),localStorage.setItem("todos",JSON.stringify(t))},editTodo:function(e,t){if(!e.topic)return alert("Topic field missing");if(!e.description)return alert("Description field missing");var o=n;o[t]=e,r(o.sorted("topic")),localStorage.setItem("todos",JSON.stringify(o))}},children:e.children})},b=o(4),j=o(6);function f(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keyup";Object(c.useEffect)((function(){function c(o){[e].includes(o.key)&&t()}return window.addEventListener(o,c),function(){return window.removeEventListener(o,c)}}),[])}var h=function(e){var t=e.close,o=e.index,r=n.a.useContext(d),i=r.addTodo,s=r.editTodo,u=r.todos,h=(r.setTodoIndex,Object(c.useRef)()),O=["#ff5555","#ffc155","#ffff2a","#5e55ff","#55ff6f","#ff55cf","#3d3d3d"],x=function(e,t){return{width:"20px",height:"20px",backgroundColor:e,borderRadius:"5px",cursor:"pointer",border:t===m?"3px solid #1d1d1d":"none"}},g=Object(c.useState)([-1,void 0].includes(o)?0:O.indexOf(u[o].color)),p=Object(a.a)(g,2),m=p[0],k=p[1],v=Object(c.useState)({topic:[-1,void 0].includes(o)?"":u[o].topic,description:[-1,void 0].includes(o)?"":u[o].description,color:O[m]}),y=Object(a.a)(v,2),T=y[0],C=y[1];return f("Escape",(function(){t()})),f("Enter",(function(){document.activeElement===h.current&&(h.current.value+="  - ")})),Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("span",{children:[-1,void 0].includes(o)?"New Task":"Edit Task"}),Object(l.jsx)(j.a,{size:16,className:"clickable",onClick:t})]}),Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)("label",{children:"Topic:"}),Object(l.jsx)("input",{type:"text",defaultValue:[-1,void 0].includes(o)?"":T.topic,onChange:function(e){return C(Object(b.a)(Object(b.a)({},T),{},{topic:e.target.value}))}}),Object(l.jsx)("label",{children:"Description:"}),Object(l.jsx)("textarea",{rows:"5",ref:h,onFocus:function(){[-1,void 0].includes(o)&&""===h.current.value&&(h.current.value="  - ")},defaultValue:[-1,void 0].includes(o)?"":T.description,onChange:function(e){return C(Object(b.a)(Object(b.a)({},T),{},{description:e.target.value}))}}),Object(l.jsxs)("label",{children:["Color:",Object(l.jsx)("div",{style:{display:"flex",gap:"5px"},children:O.map((function(e,t){return Object(l.jsx)("div",{onClick:function(){return function(e){void 0!==e&&(k(e),C(Object(b.a)(Object(b.a)({},T),{},{color:O[e]})))}(t)},style:x(e,t)},t)}))})]}),Object(l.jsx)("button",{className:"clickable",onClick:function(){[-1,void 0].includes(o)?i(T):s(T,o),t()},children:[-1,void 0].includes(o)?"Add Todo":"Edit Todo"})]})]})},O=o(11),x=n.a.createContext({}),g=function(e){var t=Object(c.useState)(void 0),o=Object(a.a)(t,2),n=o[0],r=o[1],i={light:{body:{background:"#f5f5f5",color:"black",p:"black"},header:{background:"#ebebff",color:"black"},title:{color:"black"},card:{background:"white",color:"black",topic:"black"},footer:{background:"#1d1d1d",color:"white"}},dark:{body:{background:"#212121",color:"black",p:"white"},header:{background:"#050505",color:"white"},title:{color:"white"},card:{background:"#101010",color:"white",topic:"black"},footer:{background:"#050505",color:"white"}}},s=function(){var e=localStorage.getItem("theme");e?"light"===e||"dark"===e?r(e):(r("light"),localStorage.setItem("theme","light")):(localStorage.setItem("theme","light"),r("light"))};Object(c.useEffect)((function(){s()}),[]);return Object(l.jsx)(x.Provider,{value:{saveTheme:s,getTheme:function(){return i[localStorage.getItem("theme")]},theme:n,setTheme:r,invertTheme:function(){"light"===n?(r("dark"),localStorage.setItem("theme","dark")):(r("light"),localStorage.setItem("theme","light"))}},children:e.children})};var p=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),o=t[0],r=t[1],i=n.a.useContext(d).setTodoIndex,s=n.a.useContext(x),u=s.invertTheme,b=s.saveTheme,j=s.getTheme;b();var f=j().header;return console.log(f),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{className:"header",style:{backgroundColor:f.background,color:f.color},children:[Object(l.jsx)("h1",{children:"Todo List"}),Object(l.jsx)("button",{className:"clickable",onClick:function(){i(-1),r(!0)},children:"Create Task"}),Object(l.jsxs)("h5",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},onClick:u,children:[Object(l.jsx)(O.a,{}),"Change theme"]})]}),o&&Object(l.jsx)(h,{close:function(){return r(!1)}})]})};var m=function(e){var t=e.data,o=e.index,r=n.a.useContext(d),i=r.removeTodo,s=r.setTodoIndex,u=r.editTodo,f=n.a.useContext(x).getTheme,h=Object(c.useState)(t.checked||!1),O=Object(a.a)(h,2),g=O[0],p=O[1],m=f().card;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card ".concat(g&&"done"),style:{borderTop:"4px solid ".concat(t.color),backgroundColor:m.background,color:m.color},onClick:function(e){return function(e){e.target.closest("svg")||(p(!g),u(Object(b.a)(Object(b.a)({},t),{},{checked:!g}),o),console.log(Object(b.a)(Object(b.a)({},t),{},{checked:!g})))}(e)},children:[Object(l.jsx)("span",{className:"topic",style:{backgroundColor:t.color,color:m.topic},children:t.topic}),Object(l.jsx)("span",{style:{flex:"1",margin:"10px",whiteSpace:"pre-line",overflow:"hidden auto"},children:t.description}),Object(l.jsxs)("footer",{children:[Object(l.jsx)(j.c,{className:"clickable",size:24,fill:t.color,strokeWidth:.15,onClick:function(){s(o)}}),Object(l.jsx)(j.b,{className:"clickable",size:24,fill:t.color,strokeWidth:.15,onClick:function(){i(o)}})]})]})})};var k=function(){var e=n.a.useContext(d),t=e.todos,o=e.todoIndex,r=e.setTodoIndex,i=Object(c.useState)(!1),s=Object(a.a)(i,2),u=s[0],b=s[1],j=(0,n.a.useContext(x).getTheme)().body;return Object(c.useEffect)((function(){o<0||b(!0)}),[o]),document.body.style.backgroundColor=j.background,document.body.style.color=j.color,Object(l.jsxs)("main",{children:[t.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{style:{fontWeight:300,color:j.p},children:"All Tasks"}),Object(l.jsx)("section",{className:"card-container",children:t.map((function(e,t){return Object(l.jsx)(m,{data:e,index:t},t)}))})]}):Object(l.jsx)("p",{style:{color:j.p},children:"Oops! It seems empty here... Try adding a new task."}),u&&Object(l.jsx)(h,{close:function(){r(-1),b(!1)},index:o})]})},v=o(12);var y=function(){var e=(0,n.a.useContext(x).getTheme)().footer;return Object(l.jsx)("footer",{style:{backgroundColor:e.background,color:e.color},children:Object(l.jsx)("a",{href:"https://github.com/mococa",target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("h3",{children:[Object(l.jsx)(v.a,{style:{width:"50px",height:"100%"}})," Made by Luiz Felipe Moureau"]})})})};var T=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{}),Object(l.jsx)(k,{}),Object(l.jsx)(y,{})]})};o(20);i.a.render(Object(l.jsxs)(n.a.StrictMode,{children:[Object(l.jsxs)(g,{children:[Object(l.jsx)(u,{children:Object(l.jsx)(T,{})})," "]})," "]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.ab6db1de.chunk.js.map