(this["webpackJsonphackernews-tut"]=this["webpackJsonphackernews-tut"]||[]).push([[0],{25:function(n,t,e){n.exports=e(48)},48:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(21),i=e(6),c=e(4),s=e.n(c),u=e(7),l=e(8),f=e.n(l),d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.id,e=n.by,r=n.url,o=n.time,a=n.title;return{id:t,by:e,url:r,time:o,title:a}},h="https://hacker-news.firebaseio.com/v0/",b="".concat(h,"newstories.json"),p="".concat(h,"item/"),m=function(){var n=Object(u.a)(s.a.mark((function n(t){var e;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get("".concat(p+t,".json")).then((function(n){var t=n.data;return t&&d(t)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=Object(u.a)(s.a.mark((function n(){var t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get(b).then((function(n){return n.data}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=e(2),w=e(3);function y(){var n=Object(v.a)(["\n    font-weight; bold;\n    color: ",";\n"]);return y=function(){return n},n}function x(){var n=Object(v.a)(["\n font-style: italic;\n\n>span:first-child {\n    margin-right: 10px;\n }\n \n> span:not(:first-child): before {\n    content: '\u25cb'\n    margin: 0 7px;\n}\n\n.story__meta-bold {\n    font-wieght: bold;\n}\n "]);return x=function(){return n},n}function k(){var n=Object(v.a)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  line-height: 1.8;\n  margin: 0;\n  text-decoration: none;\n\n  a {\n    color: #2e2e2c;\n    background-color: #00ffff;\n    text-decoration: none;\n  }\n"]);return k=function(){return n},n}function j(){var n=Object(v.a)(["\n  padding-top: 10px;\n  margin-bottom: 20px;\n  border-top: 1px solid #cccccc;\n\n  &:first-of-type {\n    border-top: 0;\n  }\n\n  &:last-of-type {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n"]);return j=function(){return n},n}var E=w.b.section(j()),O=w.b.h1(k()),M=w.b.div(x()),W=w.b.span(y(),(function(n){return n.color||"blue"})),S=function(n){var t=n.storyId,e=Object(r.useState)({}),a=Object(i.a)(e,2),c=a[0],s=a[1];return Object(r.useEffect)((function(){m(t).then((function(n){return n&&n.url&&s(n)}))})),c&&c.url?o.a.createElement(E,{"data-testid":"story"},o.a.createElement(O,null,o.a.createElement("a",{href:c.url},c.title)),o.a.createElement(M,null,o.a.createElement("span",{"data-testid":"story-by"},o.a.createElement(W,{color:"000"},"By:")," ",c.by),o.a.createElement("span",{"data-testid":"story-time"},o.a.createElement(W,{color:"000"},"Posted:"),function(n){var t=Math.floor((new Date-1e3*n)/1e3),e=Math.floor(t/31536e3);return e>1?"".concat(e," years"):(e=Math.floor(t/2592e3))>1?"".concat(e," months"):(e=Math.floor(t/86400))>1?"".concat(e," days"):(e=Math.floor(t/3600))>1?"".concat(e," hours"):(e=Math.floor(t/60))>1?"".concat(e," min"):(e=Math.floor(t),"".concat(Math.floor(t)," seconds"))}(c.time)))):null};function z(){var n=Object(v.a)(["\n\n max-width: 1140px;\n padding: 20px 15px;\n margin: auto;\n "]);return z=function(){return n},n}function A(){var n=Object(v.a)(["\n\nhtml {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n*, *:before, *:after {\n    -webkit-box-sizing: inherit;\n            box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n    color: #202020;\n    background-color: #fafafe;\n    font-family: Arial, Helvectia, sans-serif;\n    font-size: 16px;\n}\n\nul {\n    display:table\n    margin: 0;\n    padding; 0;\n}\n"]);return A=function(){return n},n}var B=Object(w.a)(A()),C=w.b.main(z()),I=function(){var n=Object(r.useState)([]),t=Object(i.a)(n,2),e=t[0],a=t[1];return Object(r.useEffect)((function(){g().then((function(n){return a(n)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null),o.a.createElement(C,{"data-test-id":"stories-container"},o.a.createElement("h1",null,"Hacker News Stories"),e.map((function(n){return o.a.createElement(S,{key:n,storyId:n})}))))},N=function(){return o.a.createElement(I,null)},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(n,t){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(n)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}Object(a.render)(o.a.createElement(N,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/hackernews-tut",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hackernews-tut","/service-worker.js");P?(!function(n,t){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(e){var r=e.headers.get("content-type");404===e.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):R(n,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,n)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.01577ca9.chunk.js.map