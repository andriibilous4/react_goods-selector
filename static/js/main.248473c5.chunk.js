(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(4),o=c(1),l=c.n(o),r=(c(9),c(10),c(0)),i=function(e){var t=e.selectedGood,c=e.setSelectedGood,n=e.name,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c(e)};return Object(r.jsxs)("tr",{"data-cy":"Good",className:t===n?"has-background-success-light":"",children:[Object(r.jsx)("td",{children:t===n?Object(r.jsx)("button",{"aria-label":"Remove","data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return a("")},children:"-"}):Object(r.jsx)("button",{"aria-label":"Add","data-cy":"AddButton",type:"button",className:"button",onClick:function(){return a(n)},children:"+"})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:n})]})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var e=l.a.useState("Jam"),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(r.jsxs)("main",{className:"section container",children:[Object(r.jsxs)("h1",{className:" title is-flex is-align-items-center has-background-success-light",children:[c.length>0?"".concat(c," is selected"):"No goods selected",c&&Object(r.jsx)("button",{"aria-label":"Clear","data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return n("")}})]}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:d.map((function(e){return Object(r.jsx)(i,{name:e,selectedGood:c,setSelectedGood:n},e)}))})})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.248473c5.chunk.js.map