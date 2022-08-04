"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=d(n),m=r,k=f["".concat(p,".").concat(m)]||f[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"sequence.config.ConfigFinder",title:"Class: ConfigFinder",sidebar_label:"ConfigFinder",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/sequence.config.ConfigFinder",id:"api/classes/sequence.config.ConfigFinder",title:"Class: ConfigFinder",description:"sequence.config.ConfigFinder",source:"@site/docs/api/classes/sequence.config.ConfigFinder.md",sourceDirName:"api/classes",slug:"/api/classes/sequence.config.ConfigFinder",permalink:"/api/classes/sequence.config.ConfigFinder",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.config.ConfigFinder",title:"Class: ConfigFinder",sidebar_label:"ConfigFinder",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Session",permalink:"/api/classes/sequence.auth.Session"},next:{title:"SequenceUtilsFinder",permalink:"/api/classes/sequence.config.SequenceUtilsFinder"}},p={},d=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"findCurrentConfig",id:"findcurrentconfig",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"findLastWalletOfInitialSigner",id:"findlastwalletofinitialsigner",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/namespaces/sequence"},"sequence"),".",(0,r.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.config"},"config"),".ConfigFinder"),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/classes/sequence.config.SequenceUtilsFinder"},(0,r.kt)("inlineCode",{parentName:"a"},"SequenceUtilsFinder")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ConfigFinder"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"findcurrentconfig"},"findCurrentConfig"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"findCurrentConfig"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.network.WalletContext"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletContext"))," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"knownConfigs?"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.config.WalletConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletConfig")),"[] ; ",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider"),"  }) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.config.WalletConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletConfig")),"  }",">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.config.WalletConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletConfig")),"  }",">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.network.WalletContext"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletContext")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.knownConfigs?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.config.WalletConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletConfig")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.provider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Provider"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.config.WalletConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletConfig")),"  }",">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/config/src/finder/config-finder.ts#L6"},"sequence.js/packages/config/src/finder/config-finder.ts:6")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"findlastwalletofinitialsigner"},"findLastWalletOfInitialSigner"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"findLastWalletOfInitialSigner"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"args"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.network.WalletContext"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletContext"))," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"signer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }) => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.context")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.network.WalletContext"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletContext")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.provider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Provider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"args.signer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/config/src/finder/config-finder.ts#L12"},"sequence.js/packages/config/src/finder/config-finder.ts:12")))}c.isMDXComponent=!0}}]);