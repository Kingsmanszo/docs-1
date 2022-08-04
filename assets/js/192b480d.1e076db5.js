"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8517],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),o=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=o(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=o(t),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||l;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73837:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=t(87462),a=(t(67294),t(3905));const l={id:"sequence.relayer.RpcRelayerProto.Page",title:"Interface: Page",sidebar_label:"Page",custom_edit_url:null},i=void 0,p={unversionedId:"api/interfaces/sequence.relayer.RpcRelayerProto.Page",id:"api/interfaces/sequence.relayer.RpcRelayerProto.Page",title:"Interface: Page",description:"relayer.RpcRelayerProto.Page",source:"@site/docs/api/interfaces/sequence.relayer.RpcRelayerProto.Page.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.relayer.RpcRelayerProto.Page",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.Page",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.relayer.RpcRelayerProto.Page",title:"Interface: Page",sidebar_label:"Page",custom_edit_url:null},sidebar:"sidebar",previous:{title:"MetaTxnReceiptLog",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.MetaTxnReceiptLog"},next:{title:"PendingTransactionsArgs",permalink:"/api/interfaces/sequence.relayer.RpcRelayerProto.PendingTransactionsArgs"}},c={},o=[{value:"Properties",id:"properties",level:2},{value:"after",id:"after",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"before",id:"before",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"column",id:"column",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"page",id:"page",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"pageSize",id:"pagesize",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"sort",id:"sort",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"totalRecords",id:"totalrecords",level:3},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:o};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer"},"relayer"),".",(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.relayer.RpcRelayerProto"},"RpcRelayerProto"),".Page"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"after"},"after"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"after"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L214"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:214")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"before"},"before"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"before"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L213"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:213")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"column"},"column"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"column"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L212"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:212")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"page"},"page"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"page"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L210"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:210")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pagesize"},"pageSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"pageSize"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L209"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:209")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sort"},"sort"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"sort"),": ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.relayer.RpcRelayerProto.SortBy"},(0,a.kt)("inlineCode",{parentName:"a"},"SortBy")),"[]"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L215"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:215")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"totalrecords"},"totalRecords"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"totalRecords"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/relayer/src/rpc-relayer/relayer.gen.ts#L211"},"sequence.js/packages/relayer/src/rpc-relayer/relayer.gen.ts:211")))}u.isMDXComponent=!0}}]);