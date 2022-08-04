"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5719],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),o=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=o(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56036:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=t(87462),a=(t(67294),t(3905));const i={id:"sequence.api.SmartRampGetOrderArgs",title:"Interface: SmartRampGetOrderArgs",sidebar_label:"SmartRampGetOrderArgs",custom_edit_url:null},p=void 0,s={unversionedId:"api/interfaces/sequence.api.SmartRampGetOrderArgs",id:"api/interfaces/sequence.api.SmartRampGetOrderArgs",title:"Interface: SmartRampGetOrderArgs",description:"sequence.api.SmartRampGetOrderArgs",source:"@site/docs/api/interfaces/sequence.api.SmartRampGetOrderArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.api.SmartRampGetOrderArgs",permalink:"/api/interfaces/sequence.api.SmartRampGetOrderArgs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.api.SmartRampGetOrderArgs",title:"Interface: SmartRampGetOrderArgs",sidebar_label:"SmartRampGetOrderArgs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"SmartRampCheckCardAuthorizationReturn",permalink:"/api/interfaces/sequence.api.SmartRampCheckCardAuthorizationReturn"},next:{title:"SmartRampGetOrderReturn",permalink:"/api/interfaces/sequence.api.SmartRampGetOrderReturn"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"orderId",id:"orderid",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:o};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence"},"sequence"),".",(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.api"},"api"),".SmartRampGetOrderArgs"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/api/src/api.gen.ts#L602"},"sequence.js/packages/api/src/api.gen.ts:602")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"orderid"},"orderId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"orderId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/api/src/api.gen.ts#L601"},"sequence.js/packages/api/src/api.gen.ts:601")))}u.isMDXComponent=!0}}]);