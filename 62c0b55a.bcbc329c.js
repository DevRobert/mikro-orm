(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var r=a(0),c=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var o=c.a.createContext({}),p=function(e){var t=c.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},l=function(e){var t=p(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),l=p(a),d=r,O=l["".concat(s,".").concat(d)]||l[d]||m[d]||n;return a?c.a.createElement(O,b(b({ref:t},o),{},{components:a})):c.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,s[1]=b;for(var o=2;o<n;o++)s[o]=a[o];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},439:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),c=a(7),n=(a(0),a(1086)),s={id:"databaseobjectexistsexception",title:"Class: DatabaseObjectExistsException",sidebar_label:"DatabaseObjectExistsException"},b={unversionedId:"api/classes/databaseobjectexistsexception",id:"version-4.2/api/classes/databaseobjectexistsexception",isDocsHomePage:!1,title:"Class: DatabaseObjectExistsException",description:"Base class for all already existing database object related errors detected in the driver.",source:"@site/versioned_docs/version-4.2/api/classes/databaseobjectexistsexception.md",slug:"/api/classes/databaseobjectexistsexception",permalink:"/docs/4.2/api/classes/databaseobjectexistsexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/databaseobjectexistsexception.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608313583,sidebar_label:"DatabaseObjectExistsException",sidebar:"version-4.2/API",previous:{title:"Class: DatabaseDriver<C>",permalink:"/docs/4.2/api/classes/databasedriver"},next:{title:"Class: DatabaseObjectNotFoundException",permalink:"/docs/4.2/api/classes/databaseobjectnotfoundexception"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Base class for all already existing database object related errors detected in the driver."),Object(n.b)("p",null,"A database object is considered any asset that can be created in a database\nsuch as schemas, tables, views, sequences, triggers,  constraints, indexes,\nfunctions, stored procedures etc."),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/serverexception"}),"ServerException")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"DatabaseObjectExistsException")),Object(n.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/tableexistsexception"}),"TableExistsException")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new DatabaseObjectExistsException"),"(",Object(n.b)("inlineCode",{parentName:"p"},"previous"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error"),"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databaseobjectexistsexception"}),"DatabaseObjectExistsException")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#constructor"}),"constructor"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"previous")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/4.2/api/classes/driverexception#error"}),"Error"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.2/api/classes/databaseobjectexistsexception"}),"DatabaseObjectExistsException")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"code"},"code"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"code"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#code"}),"code"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errmsg"},"errmsg"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errmsg"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#errmsg"}),"errmsg"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errno"},"errno"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errno"),": number"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#errno"}),"errno"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"message"},"message"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"message"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#message"}),"message"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:974")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"name"},"name"),Object(n.b)("p",null,"\u2022  ",Object(n.b)("strong",{parentName:"p"},"name"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#name"}),"name"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:973")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlMessage"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#sqlmessage"}),"sqlMessage"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlstate"},"sqlState"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlState"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#sqlstate"}),"sqlState"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"stack"},"stack"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"stack"),": string"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception"}),"DriverException"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.2/api/classes/driverexception#stack"}),"stack"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in node_modules/typescript/lib/lib.es5.d.ts:975")))}p.isMDXComponent=!0}}]);