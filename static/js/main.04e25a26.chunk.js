(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,a,t){e.exports=t(20)},18:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),c=t.n(l),o=(t(18),t(11)),i=t(6),m=(t(8),t(19),t(21));var s=function(e){var a=e.avail,t=e.deleteItem;return console.log(a),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null,"Available Positions"),r.a.createElement("br",null),r.a.createElement("br",null),a.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"col-sm-4"},e),r.a.createElement(m.a,{variant:"danger",className:"col-sm-4",onClick:function(){return t(e)}},"Delete")),r.a.createElement("hr",null))})))};var u=function(){var e=Object(n.useState)(["C","Java","Python","C++","Perl","react"]),a=Object(i.a)(e,2),t=a[0],l=(a[1],Object(n.useState)(["react"])),c=Object(i.a)(l,2),u=c[0],v=c[1];return r.a.createElement("div",{className:"row body"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h1",null,"All Positions"),r.a.createElement("br",null),r.a.createElement("br",null),t.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"col-sm-4"},e),r.a.createElement(m.a,{variant:"primary",className:"col-sm-4",onClick:function(){return function(e){var a;for(a=0;a<u.length&&u[a]!=e;a++);a==u.length&&v([].concat(Object(o.a)(u),[e]))}(e)}},"Add")),r.a.createElement("hr",null))}))),r.a.createElement(s,{avail:u,deleteItem:function(e){var a=u.filter((function(a){return a!=e}));v(a)}}),";")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.04e25a26.chunk.js.map