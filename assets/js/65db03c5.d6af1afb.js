"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7502],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>y});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},o={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),y=a,m=d["".concat(s,".").concat(y)]||d[y]||o[y]||l;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99439:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const l={id:"sequence.relayer.RpcRelayerProto.ETHTxnStatus",title:"Enumeration: ETHTxnStatus",sidebar_label:"ETHTxnStatus",custom_edit_url:null},i=void 0,p={unversionedId:"api/enums/sequence.relayer.RpcRelayerProto.ETHTxnStatus",id:"api/enums/sequence.relayer.RpcRelayerProto.ETHTxnStatus",title:"Enumeration: ETHTxnStatus",description:"relayer.RpcRelayerProto.ETHTxnStatus",source:"@site/docs/api/enums/sequence.relayer.RpcRelayerProto.ETHTxnStatus.md",sourceDirName:"api/enums",slug:"/api/enums/sequence.relayer.RpcRelayerProto.ETHTxnStatus",permalink:"/api/enums/sequence.relayer.RpcRelayerProto.ETHTxnStatus",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.relayer.RpcRelayerProto.ETHTxnStatus",title:"Enumeration: ETHTxnStatus",sidebar_label:"ETHTxnStatus",custom_edit_url:null},sidebar:"sidebar",previous:{title:"OpenState",permalink:"/api/enums/sequence.provider.OpenState"},next:{title:"FeeTokenType",permalink:"/api/enums/sequence.relayer.RpcRelayerProto.FeeTokenType"}},s={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"DROPPED",id:"dropped",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"FAILED",id:"failed",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"PARTIALLY_FAILED",id:"partially_failed",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"QUEUED",id:"queued",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"SENT",id:"sent",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"SUCCEEDED",id:"succeeded",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"UNKNOWN",id:"unknown",level:3},{value:"Defined in",id:"defined-in-6",level:4}],u={toc:c};function o(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer"},"relayer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer.RpcRelayerProto"},"RpcRelayerProto"),".ETHTxnStatus"),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"dropped"},"DROPPED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"DROPPED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"DROPPED"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L21"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"failed"},"FAILED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"FAILED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"FAILED"')),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L26"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"partially_failed"},"PARTIALLY","_","FAILED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"PARTIALLY","_","FAILED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"PARTIALLY_FAILED"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L25"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"queued"},"QUEUED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"QUEUED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"QUEUED"')),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L22"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sent"},"SENT"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SENT")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"SENT"')),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L23"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"succeeded"},"SUCCEEDED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"SUCCEEDED")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"SUCCEEDED"')),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L24"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unknown"},"UNKNOWN"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"UNKNOWN")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"UNKNOWN"')),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L20"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:20")))}o.isMDXComponent=!0}}]);