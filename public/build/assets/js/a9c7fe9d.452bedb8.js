(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"get-basket",title:"GET /api/users/:user_id/basket",sidebar_position:1},s={unversionedId:"Basket/get-basket",id:"Basket/get-basket",isDocsHomePage:!1,title:"GET /api/users/:user_id/basket",description:"Lists all items currently in the users basket.",source:"@site/docs/Basket/get-basket.md",sourceDirName:"Basket",slug:"/Basket/get-basket",permalink:"/docs/Basket/get-basket",version:"current",sidebarPosition:1,frontMatter:{id:"get-basket",title:"GET /api/users/:user_id/basket",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"API Reference",permalink:"/docs/api-ref"},next:{title:"POST /api/users/:user_id/basket",permalink:"/docs/Basket/post-item-to-basket"}},c=[{value:"Example Response",id:"example-response",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Lists all items currently in the users basket."),Object(o.b)("h2",{id:"example-response"},"Example Response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "items": [\n    {\n      "item_id": 3,\n      "item_name": "1990s Gameboy",\n      "description": "But mom I want one!",\n      "img_url": "https://test.com/1990s-Gameboy.jpg",\n      "price": 1599,\n      "category_name": "Electronics"\n    },\n    {\n      "item_id": 4,\n      "item_name": "New iMac",\n      "description": "Good lord is it pretty",\n      "img_url": "https://test.com/New-iMac.jpg",\n      "price": 100000000,\n      "category_name": "Electronics"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,d=l["".concat(i,".").concat(b)]||l[b]||m[b]||o;return n?a.a.createElement(d,s(s({ref:t},p),{},{components:n})):a.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);