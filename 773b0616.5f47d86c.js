(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{1086:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),f=n,d=l["".concat(i,".").concat(f)]||l[f]||b[f]||o;return t?a.a.createElement(d,c(c({ref:r},p),{},{components:t})):a.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},526:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(1086)),i={id:"flusheventargs",title:"Interface: FlushEventArgs",sidebar_label:"FlushEventArgs"},c={unversionedId:"api/interfaces/flusheventargs",id:"version-4.3/api/interfaces/flusheventargs",isDocsHomePage:!1,title:"Interface: FlushEventArgs",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/interfaces/flusheventargs.md",slug:"/api/interfaces/flusheventargs",permalink:"/docs/api/interfaces/flusheventargs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/interfaces/flusheventargs.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1609161290,sidebar_label:"FlushEventArgs",sidebar:"version-4.3/API",previous:{title:"Interface: FlatQueryOrderMap",permalink:"/docs/api/interfaces/flatqueryordermap"},next:{title:"Interface: ForeignKey",permalink:"/docs/api/interfaces/foreignkey"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"uow",id:"uow",children:[]}]}],p={rightToc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"{}"),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"FlushEventArgs")))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"uow"},"uow"),Object(o.b)("p",null,"\u2022  ",Object(o.b)("strong",{parentName:"p"},"uow"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/classes/unitofwork"}),"UnitOfWork")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/events/EventSubscriber.ts#L12"}),"packages/core/src/events/EventSubscriber.ts:12"))))}u.isMDXComponent=!0}}]);