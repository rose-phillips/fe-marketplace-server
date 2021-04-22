(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(98)),i={id:"post-item-to-basket",title:"POST /api/users/:user_id/basket",sidebar_position:2},s={unversionedId:"Basket/post-item-to-basket",id:"Basket/post-item-to-basket",isDocsHomePage:!1,title:"POST /api/users/:user_id/basket",description:"Adds the item to the users basket.",source:"@site/docs/Basket/post-item-to-basket.md",sourceDirName:"Basket",slug:"/Basket/post-item-to-basket",permalink:"/docs/Basket/post-item-to-basket",version:"current",sidebarPosition:2,frontMatter:{id:"post-item-to-basket",title:"POST /api/users/:user_id/basket",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"GET /api/users/:user_id/basket",permalink:"/docs/Basket/get-basket"},next:{title:"DELETE /api/users/:username/basket/:item_id",permalink:"/docs/Basket/delete-item-from-basket"}},c=[{value:"Request Body",id:"request-body",children:[]},{value:"Example Response",id:"example-response",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Adds the item to the users basket."),Object(o.b)("h2",{id:"request-body"},"Request Body"),Object(o.b)("p",null,"Accepts the following keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"item_id: Integer ",Object(o.b)("strong",{parentName:"li"},"required"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "item_id": 1\n}\n')),Object(o.b)("h2",{id:"example-response"},"Example Response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "item": {\n    "item_id": 1,\n    "item_name": "The Holy Grail",\n    "description": "Defo the real deal and not a prop from Indiana Jones",\n    "img_url": "https://test.com/The Holy Grail.jpg",\n    "price": 5000,\n    "category_name": "Relics"\n  }\n}\n')))}u.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||o;return r?a.a.createElement(m,s(s({ref:t},p),{},{components:r})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);