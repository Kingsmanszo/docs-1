"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||g[d]||s;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),s=n(6010),l=n(2389),i=n(7392),o=n(7094),u=n(2466);const c="tabList__CuJ",g="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:d,values:m,groupId:b,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:C}=(0,o.U)(),[E,O]=(0,r.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==E&&v.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=S.indexOf(t),a=v[n].value;a!==E&&(T(t),O(a),null!=b&&C(b,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=S.indexOf(e.currentTarget)+1;n=null!=(a=S[t])?a:S[0];break}case"ArrowLeft":{var r;const t=S.indexOf(e.currentTarget)-1;n=null!=(r=S[t])?r:S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>S.push(e),onKeyDown:N,onFocus:x,onClick:x},l,{className:(0,s.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(y.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},3064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const s={},l="Signing & Verifying Messages",i={unversionedId:"unity-sdk/wallet/sign-message",id:"unity-sdk/wallet/sign-message",title:"Signing & Verifying Messages",description:"Signing Messages",source:"@site/docs/09-unity-sdk/23-wallet/05-sign-message.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/sign-message",permalink:"/unity-sdk/wallet/sign-message",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/05-sign-message.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Escape Hatch (executing sequence.js code)",permalink:"/unity-sdk/wallet/escape-hatch"},next:{title:"Sending Transactions",permalink:"/unity-sdk/wallet/send-transaction"}},o={},u=[{value:"Signing Messages",id:"signing-messages",level:2},{value:"Verifying Message Signatures",id:"verifying-message-signatures",level:2}],c={toc:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signing--verifying-messages"},"Signing & Verifying Messages"),(0,r.kt)("h2",{id:"signing-messages"},"Signing Messages"),(0,r.kt)("p",null,"Sequence wallets are able to sign arbitrary messages. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To request a user's signature of a simple message:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var signature = await wallet.ExecuteSequenceJS(@\"\n  const signer = seq.getWallet().getSigner()\n  const message = 'Hello World!'\n\n  const signature = await signer.signMessage(message)\n  return signature\n\");\nDebug.Log(signature);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To request a user's signature of a typed-data (",(0,r.kt)("a",{parentName:"strong",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP712"),") message:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var signature = await wallet.ExecuteSequenceJS(@\"\n  const typedData = {\n    domain: {\n      name: 'Ether Mail',\n      version: '1',\n      chainId: await wallet.getChainId(),\n      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'\n    },\n    types: {\n      Person: [\n        { name: 'name', type: 'string' },\n        { name: 'wallet', type: 'address' }\n      ]\n    },\n    message: {\n      name: 'Bob',\n      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'\n    }\n  }\n\n  const signer = seq.getWallet().getSigner()\n\n  const signature = await signer.signTypedData(typedData.domain, typedData.types, typedData.message)\n\n  return signature\n\");\nDebug.Log(signature);\n")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"verifying-message-signatures"},"Verifying Message Signatures"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/wallet/guides/sign-message"},"the sequence.js docs"),"."))}g.isMDXComponent=!0}}]);