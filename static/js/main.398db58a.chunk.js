(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(4),c=t.n(n),i=t(5),r=t(6),s=t(8),l=t(7),o=t(1),j=t.n(o),h=(t(13),t(2)),p=t.n(h),g=t(0),u=function(e){var a=e.total,t=e.perPage,n=e.page,c=e.withInfo,i=e.handleClick,r=Math.ceil(a/t),s=t*(n-1)+1,l=t*n>a?a:t*n;return Object(g.jsxs)("section",{children:[c&&Object(g.jsx)("p",{className:"info",children:"".concat(s," - ").concat(l," of ").concat(a)}),Object(g.jsx)("nav",{"aria-label":"Page navigation example",children:Object(g.jsxs)("ul",{className:"pagination",children:[Object(g.jsx)("li",{className:p()("page-item",{disabled:1===n}),children:Object(g.jsx)("a",{className:"page-link",href:"/",onClick:function(e){return i(e,n-1)},children:"Previous"})}),Array.from(Array(r).keys()).map((function(e){return Object(g.jsx)("li",{className:p()("page-item",{active:n-1===e}),children:Object(g.jsx)("a",{className:"page-link",href:"/",onClick:function(a){return i(a,e+1)},children:e+1})},e)})),Object(g.jsx)("li",{className:p()("page-item",{disabled:n===r}),children:Object(g.jsx)("a",{className:"page-link",href:"/",onClick:function(e){return i(e,n+1)},children:"Next"})})]})})]})},b=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={total:42,perPage:5,page:1},e.onPageChange=function(a,t){a.preventDefault(),e.setState({page:t})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.total,t=e.perPage,n=e.page;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Pagination"}),Object(g.jsx)(u,{total:a,perPage:t,page:n,withInfo:!0,handleClick:this.onPageChange})]})}}]),t}(j.a.Component);c.a.render(Object(g.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.398db58a.chunk.js.map