(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(23)),i=n(14),u=n(6),j=n.n(u),d=n(10),l=n(9),b=n(2),h=n(1),p=function(e){var t=e.color,n=e.text,r=e.onAdd;return Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};p.defaultProps={color:"grey"};var f=p,O=function(e){var t=e.onAdd,n=e.showAdd,r=e.title,c=Object(b.e)();return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("h1",{children:["AO: ",r]}),"/"===c.pathname&&Object(h.jsx)(f,{onAdd:t,color:n?"red":"green",text:n?"Close":"Add"})]})};O.defaultProps={title:"Task Tracker"};var x=O,m=n(11),k=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"Copyright \xa9 2021"}),Object(h.jsx)(m.b,{to:"/about",children:"About"})]})},v=n(22),y=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text," ",Object(h.jsx)(v.a,{style:{color:"red"},onClick:function(){n(t.id)}})]}),Object(h.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(y,{task:e,onToggle:r,onDelete:n},e.id)}))})},A=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(l.a)(o,2),u=i[0],j=i[1],d=Object(r.useState)(!1),b=Object(l.a)(d,2),p=b[0],f=b[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:p}),s(""),j(""),f(!1)):alert("Please add text")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Day & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set Reminder"}),Object(h.jsx)("input",{type:"checkbox",checked:p,value:p,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0"}),Object(h.jsx)(m.b,{to:"/",children:"Back"})]})},T=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(l.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Delete!",t),e.next=3,fetch("http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks/".concat(t),{method:"DELETE"});case 3:p(u.filter((function(e){return e.id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Toggle Reminder!",t),e.next=3,O(t);case 3:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=7,fetch("http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 7:return c=e.sent,e.next=10,c.json();case 10:a=e.sent,p(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://my-json-server.typicode.com/AustinOlig/react-task-tracker/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(o.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(m.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{onAdd:function(){return c(!n)},showAdd:n}),Object(h.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)(A,{onAdd:T}),u.length>0?Object(h.jsx)(g,{tasks:u,onToggle:y,onDelete:v}):"Please add a task"]})}}),Object(h.jsx)(b.a,{path:"/about",component:w}),Object(h.jsx)(k,{})]})})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.451cb276.chunk.js.map