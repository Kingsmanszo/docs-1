"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5366],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=p(t),d=a,f=y["".concat(o,".").concat(d)]||y[d]||u[d]||l;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},92777:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const l={id:"sequence.relayer.RpcRelayerProto.WalletSigner",title:"Interface: WalletSigner",sidebar_label:"WalletSigner",custom_edit_url:null},i=void 0,c={unversionedId:"api/interfaces/sequence.relayer.RpcRelayerProto.WalletSigner",id:"api/interfaces/sequence.relayer.RpcRelayerProto.WalletSigner",title:"Interface: WalletSigner",description:"relayer.RpcRelayerProto.WalletSigner",source:"@site/docs/api/interfaces/sequence.relayer.RpcRelayerProto.WalletSigner.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.relayer.RpcRelayerProto.WalletSigner",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.WalletSigner",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.relayer.RpcRelayerProto.WalletSigner",title:"Interface: WalletSigner",sidebar_label:"WalletSigner",custom_edit_url:null},sidebar:"sidebar",previous:{title:"WalletConfig",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.WalletConfig"},next:{title:"WebRPCError",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.WebRPCError"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"weight",id:"weight",level:3},{value:"Defined in",id:"defined-in-1",level:4}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer"},"relayer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer.RpcRelayerProto"},"RpcRelayerProto"),".WalletSigner"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"address"},"address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L91"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:91")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"weight"},"weight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"weight"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L92"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:92")))}u.isMDXComponent=!0}}]);