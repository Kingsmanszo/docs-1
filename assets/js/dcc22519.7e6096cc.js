"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5598],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),d=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},o={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),f=n,C=u["".concat(s,".").concat(f)]||u[f]||o[f]||i;return t?a.createElement(C,p(p({ref:r},l),{},{components:t})):a.createElement(C,p({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var d=2;d<i;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92507:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(87462),n=(t(67294),t(3905));const i={id:"sequence.api.UpdatePayCardCVCArgs",title:"Interface: UpdatePayCardCVCArgs",sidebar_label:"UpdatePayCardCVCArgs",custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/sequence.api.UpdatePayCardCVCArgs",id:"api/interfaces/sequence.api.UpdatePayCardCVCArgs",title:"Interface: UpdatePayCardCVCArgs",description:"sequence.api.UpdatePayCardCVCArgs",source:"@site/docs/api/interfaces/sequence.api.UpdatePayCardCVCArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.api.UpdatePayCardCVCArgs",permalink:"/api/interfaces/sequence.api.UpdatePayCardCVCArgs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.api.UpdatePayCardCVCArgs",title:"Interface: UpdatePayCardCVCArgs",sidebar_label:"UpdatePayCardCVCArgs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"UpdateFriendNicknameReturn",permalink:"/api/interfaces/sequence.api.UpdateFriendNicknameReturn"},next:{title:"UpdatePayCardCVCReturn",permalink:"/api/interfaces/sequence.api.UpdatePayCardCVCReturn"}},s={},d=[{value:"Properties",id:"properties",level:2},{value:"payCardCVC",id:"paycardcvc",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"payCardId",id:"paycardid",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:d};function o(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/namespaces/sequence"},"sequence"),".",(0,n.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.api"},"api"),".UpdatePayCardCVCArgs"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"paycardcvc"},"payCardCVC"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"payCardCVC"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/api/src/api.gen.ts#L561"},"sequence.js/packages/api/src/api.gen.ts:561")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"paycardid"},"payCardId"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"payCardId"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/api/src/api.gen.ts#L560"},"sequence.js/packages/api/src/api.gen.ts:560")))}o.isMDXComponent=!0}}]);