"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,f=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"sequence.network.WalletContext",title:"Interface: WalletContext",sidebar_label:"WalletContext",custom_edit_url:null},l=void 0,o={unversionedId:"api/interfaces/sequence.network.WalletContext",id:"api/interfaces/sequence.network.WalletContext",title:"Interface: WalletContext",description:"sequence.network.WalletContext",source:"@site/docs/api/interfaces/sequence.network.WalletContext.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.network.WalletContext",permalink:"/api/interfaces/sequence.network.WalletContext",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.network.WalletContext",title:"Interface: WalletContext",sidebar_label:"WalletContext",custom_edit_url:null},sidebar:"sidebar",previous:{title:"NetworkConfig",permalink:"/api/interfaces/sequence.network.NetworkConfig"},next:{title:"ConnectDetails",permalink:"/api/interfaces/sequence.provider.ConnectDetails"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"factory",id:"factory",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"guestModule",id:"guestmodule",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"libs",id:"libs",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"mainModule",id:"mainmodule",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"mainModuleUpgradable",id:"mainmoduleupgradable",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"nonStrict",id:"nonstrict",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"sequenceUtils",id:"sequenceutils",level:3},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence"},"sequence"),".",(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.network"},"network"),".WalletContext"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"factory"},"factory"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"factory"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/network/src/context.ts#L4"},"sequence.js/packages/network/src/context.ts:4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"guestmodule"},"guestModule"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"guestModule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/network/src/context.ts#L7"},"sequence.js/packages/network/src/context.ts:7")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"libs"},"libs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"libs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"requireFreshSigner?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/network/src/context.ts#L10"},"sequence.js/packages/network/src/context.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mainmodule"},"mainModule"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"mainModule"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/network/src/context.ts#L5"},"sequence.js/packages/network/src/context.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mainmoduleupgradable"},"mainModuleUpgradable"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"mainModuleUpgradable"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/network/src/context.ts#L6"},"sequence.js/packages/network/src/context.ts:6")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nonstrict"},"nonStrict"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nonStrict"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/network/src/context.ts#L14"},"sequence.js/packages/network/src/context.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sequenceutils"},"sequenceUtils"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"sequenceUtils"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/network/src/context.ts#L8"},"sequence.js/packages/network/src/context.ts:8")))}u.isMDXComponent=!0}}]);