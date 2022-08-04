"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7328],{3905:(e,r,t)=>{t.d(r,{Zo:()=>o,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},o=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=c(t),y=n,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||l;return t?a.createElement(f,i(i({ref:r},o),{},{components:t})):a.createElement(f,i({ref:r},o))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},79201:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const l={id:"sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs",title:"Interface: UpdateMetaTxnGasLimitsArgs",sidebar_label:"UpdateMetaTxnGasLimitsArgs",custom_edit_url:null},i=void 0,s={unversionedId:"api/interfaces/sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs",id:"api/interfaces/sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs",title:"Interface: UpdateMetaTxnGasLimitsArgs",description:"relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs",source:"@site/docs/api/interfaces/sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsArgs",title:"Interface: UpdateMetaTxnGasLimitsArgs",sidebar_label:"UpdateMetaTxnGasLimitsArgs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"TxnLogUser",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.TxnLogUser"},next:{title:"UpdateMetaTxnGasLimitsReturn",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.UpdateMetaTxnGasLimitsReturn"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"payload",id:"payload",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"walletAddress",id:"walletaddress",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"walletConfig",id:"walletconfig",level:3},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:c};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer"},"relayer"),".",(0,n.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer.RpcRelayerProto"},"RpcRelayerProto"),".UpdateMetaTxnGasLimitsArgs"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"payload"},"payload"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"payload"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L301"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:301")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"walletaddress"},"walletAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"walletAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L299"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:299")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"walletconfig"},"walletConfig"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"walletConfig"),": ",(0,n.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.relayer.RpcRelayerProto.WalletConfig"},(0,n.kt)("inlineCode",{parentName:"a"},"WalletConfig"))),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L300"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:300")))}d.isMDXComponent=!0}}]);