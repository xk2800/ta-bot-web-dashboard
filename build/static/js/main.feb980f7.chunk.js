(this["webpackJsonpta-bot-web-dashboard"]=this["webpackJsonpta-bot-web-dashboard"]||[]).push([[0],{15:function(n,e){n.exports.Colors={Primary:"#BC2B29",White:"#FFFFFF",Black:"#000000",Blue:"#0F3856"}},39:function(n,e,t){},40:function(n,e,t){},69:function(n,e,t){"use strict";t.r(e);var a,r,o,c,i,s,l,d,b=t(1),j=t.n(b),x=t(31),h=t.n(x),p=(t(39),t(11)),O=t(2),m=(t(40),t(5)),u=t(6),f=Object(u.a)(a||(a=Object(m.a)(["\n\n    :root{\n        --maxWidth: 1280px;\n        --fontUltraBig: 3.5rem;\n        --fontSuperBig: 2.5rem;\n        --fontBig: 1.5rem;\n        --fontMed: 1.2rem;\n        --fontSmall: 1rem;\n        --white: #ffff;\n        --redColor: #BC2B29;\n        --blueColor: #0C1F2D\n    }\n\n    *{\n\n        background: var(--blueColor);\n        box-sizing: border-box;\n        font-family: 'Sora', san-sarif;\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        color: #ffff;\n    }\n\n"]))),g=t.p+"static/media/talogo.54692e9b.jpg",v=u.b.div(r||(r=Object(m.a)(["\n    padding: 20px;\n    position: relative;\n    align-items: center;\n    border-bottom: 1px solid #f2f2f2;\n    margin: 0 auto;\n\n    h1{\n        display: right;\n        color: #ffff;\n    }\n\n    .links{\n        margin-left: auto;\n    }\n\n    a{\n        margin-left: 16px;\n        text-decoration: none;\n        padding: 6px;\n        color: #ffff;\n    }\n\n    a:hover{\n        color: grey;\n    }\n\n"]))),C=u.b.div(o||(o=Object(m.a)(["\n    .navbar{\n        /* display: flex; */\n        /* max-width: 600px; */\n    }\n"]))),w=u.b.img(c||(c=Object(m.a)(["\n    height: 100px;\n\n"]))),y=t(0),k=function(){return Object(y.jsx)(v,{children:Object(y.jsx)(C,{children:Object(y.jsx)("nav",{className:"navbar",children:Object(y.jsxs)("div",{className:"links",children:[Object(y.jsx)(p.b,{to:"/",children:Object(y.jsx)(w,{src:g,alt:"Takeaway Table Logo"})}),Object(y.jsx)("h1",{children:"Takeaway Bot"}),Object(y.jsx)("br",{}),Object(y.jsx)(p.b,{to:"/all",children:"All"}),Object(y.jsx)(p.b,{to:"/general",children:"General"}),Object(y.jsx)(p.b,{to:"/live_stats",children:"Live Stats"})]})})})})},B=t(10),S=function(n){var e=Object(b.useState)(null),t=Object(B.a)(e,2),a=t[0],r=t[1],o=Object(b.useState)(null),c=Object(B.a)(o,2),i=c[0],s=c[1],l=Object(b.useState)(null),d=Object(B.a)(l,2),j=d[0],x=d[1];return Object(b.useEffect)((function(){var e=new AbortController;return fetch(n,{signal:e.signal}).then((function(n){if(console.log(n),!n.ok)throw Error("There was an issue with getting the data. Try again later.");return n.json()})).then((function(n){r(n),s(!1),x(null)})).catch((function(n){"AbortError"===n.name?console.log("User Abort Fetch"):(x(n.message),s(!1),console.log(n.message))})),function(){return e.abort()}}),[n]),{data:a,isLoading:i,error:j}},F=t(15),N=u.b.div(i||(i=Object(m.a)(["\n  /* max-width: 1280px; */\n  padding: 10px 16px;\n  margin: 20px 500px;\n  border: 1px solid #fafafa;\n  text-align: left;\n\n  h3 {\n    font-size: 20px;\n    color: ",";\n    margin-bottom: 8px;\n  }\n\n  .short_text {\n    color: ",";\n    font-weight: 100;\n  }\n\n  code {\n    font-size: 20px;\n    color: ",";\n    margin-bottom: 8px;\n  }\n"])),F.Colors.Primary,F.Colors.White,F.Colors.Primary),T=u.b.div(s||(s=Object(m.a)(["\n  color: var(--white);\n\n  p {\n    margin: 10px 0;\n  }\n\n  .code {\n    background: ",";\n    padding: 5px 0;\n    padding-left: 5px;\n    border-radius: 10px;\n  }\n"])),F.Colors.Blue),z=function(n){var e=n.commands,t=n.head,a=e.commands;return a.length<0?Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)("p",{children:"No Commands"})," "]}):Object(y.jsxs)("div",{className:"command-list",children:[Object(y.jsx)("h2",{children:t}),a.map((function(n){return Object(y.jsx)(N,{children:Object(y.jsxs)("div",{className:"command-listed",children:[Object(y.jsxs)("h3",{children:[Object(y.jsx)("code",{children:n.command})," ",Object(y.jsxs)("span",{className:"short_text",children:[" - ",n.shorttext]})]}),Object(y.jsxs)(T,{children:[Object(y.jsx)("p",{children:"Usage:"}),Object(y.jsx)("p",{children:n.explanation}),Object(y.jsx)("code",{children:Object(y.jsx)("p",{className:"code",children:n.example})})]})]},n.id)})}))]})},A=function(){var n=S("https://ta-bot-web-api.herokuapp.com/commands/v1"),e=n.data;n.isLoading,n.error;return Object(y.jsx)("div",{className:"home",children:e&&Object(y.jsx)(z,{commands:e,title:"title"})})},E=u.b.div(l||(l=Object(m.a)(["\n    color: #ffff;\n    padding: 20px 0;\n    \n\n    h2, p, a{\n        margin: 20px 0;\n    }\n\n    h2{\n        font-size: var(--fontUltraBig);\n    }\n\n    p{\n        font-size: var(--fontSuperBig);\n    }\n\n    a, a:link{\n        font-size: var(--fontBig);\n        color: #ffff;\n        border: 1px solid red;\n        padding: 10px 15px;\n        border-radius: 25px;\n        text-decoration: none;\n        background-color: #BC2B29;\n    }\n\n    a:hover{\n        background-color: #752827;\n        border-color: #752827;\n        color: #bfbfbf;\n    }\n"]))),D=function(){return Object(y.jsx)("div",{className:"not-found",children:Object(y.jsxs)(E,{children:[Object(y.jsx)("h2",{children:"Sorry"}),Object(y.jsx)("p",{children:"That page cannot be found"}),Object(y.jsx)("br",{}),Object(y.jsx)(p.b,{to:"/",children:"Back to Home"})]})})},q=(t(51),u.b.div(d||(d=Object(m.a)(["\n    max-width: 400px;\n    margin: 0 auto;\n    text-align: center;\n\n    label {\n        text-align: left;\n        display: block;\n    }\n\n    h2 {\n        font-size: 20px;\n        color: #f1356d;\n        margin-bottom: 30px;\n    }\n\n    input, textarea {\n        width: 100%;\n        padding: 6px 10px;\n        margin: 10px 0;\n        border: 1px solid #ddd;\n        box-sizing: border-box;\n        display: block;\n    }\n\n    button {\n        background: var(--redColor);\n        color: #fff;\n        border: 0;\n        padding: 8px;\n        border-radius: 8px;\n        cursor: pointer;\n    }\n"])))),L=function(){var n=Object(b.useState)(""),e=Object(B.a)(n,2),t=e[0],a=e[1],r=Object(b.useState)(""),o=Object(B.a)(r,2),c=o[0],i=o[1],s=Object(b.useState)(""),l=Object(B.a)(s,2),d=l[0],j=l[1],x=Object(b.useState)(""),h=Object(B.a)(x,2),p=h[0],O=h[1],m=Object(b.useState)(""),u=Object(B.a)(m,2),f=u[0],g=u[1],v=Object(b.useState)(!1),C=Object(B.a)(v,2),w=(C[0],C[1]);return Object(y.jsxs)("div",{className:"add",children:[Object(y.jsx)("h2",{children:"Add New Command To Dashboard"}),Object(y.jsx)("h6",{children:"*Note: This only adds command list to web dashboard, not Discord Bot"}),Object(y.jsx)("br",{}),Object(y.jsx)(q,{children:Object(y.jsxs)("form",{children:[Object(y.jsx)("label",{htmlFor:"commands",children:"Command:"}),Object(y.jsx)("input",{type:"text",required:!0,id:"commands",value:t,onChange:function(n){return a(n.target.value)}}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"shorttext",children:"Short text/Description:"}),Object(y.jsx)("input",{type:"text",required:!0,id:"shorttext",value:c,onChange:function(n){return i(n.target.value)}}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"explanation",children:"Command explanation:"}),Object(y.jsx)("textarea",{required:!0,id:"explanation",value:d,onChange:function(n){return j(n.target.value)}}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"example",children:"Code Example:"}),Object(y.jsx)("input",{type:"text",required:!0,id:"example",value:p,onChange:function(n){return O(n.target.value)}}),Object(y.jsx)("br",{}),Object(y.jsx)("label",{htmlFor:"example",children:"Code Example 2:"}),Object(y.jsx)("input",{type:"text",id:"example",value:f,onChange:function(n){return g(n.target.value)}}),Object(y.jsx)("br",{}),Object(y.jsx)("button",{onClick:function(n){n.preventDefault(),function(n){var e={command:t,shorttext:c,explanation:d,example:p,exampleTwo:f};w(!0),console.log(e),fetch("http://localhost:5000/3/add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){w(!1),console.log("new command added")})).catch((function(n){console.log(n)}))}()},children:"Add Command"})]})})]})};var P=function(){return Object(y.jsx)(p.a,{children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsxs)(O.c,{children:[Object(y.jsxs)(O.a,{exact:!0,path:"/",children:[Object(y.jsx)(k,{}),Object(y.jsx)(A,{})]}),Object(y.jsxs)(O.a,{path:"/all",children:[Object(y.jsx)(k,{}),Object(y.jsx)(A,{})]}),Object(y.jsx)(O.a,{path:"/general",children:Object(y.jsx)(k,{})}),Object(y.jsx)(O.a,{path:"/live_stats",children:Object(y.jsx)(k,{})}),Object(y.jsxs)(O.a,{path:"/newcmd",children:[Object(y.jsx)(k,{}),Object(y.jsx)("br",{}),Object(y.jsx)(L,{})]}),Object(y.jsx)(O.a,{path:"*",children:Object(y.jsx)(D,{})})]}),Object(y.jsx)(f,{})]})})};h.a.render(Object(y.jsx)(j.a.StrictMode,{children:Object(y.jsx)(P,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.feb980f7.chunk.js.map