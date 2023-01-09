"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={},o="Get Wallet Account Address",i={unversionedId:"unity-sdk/wallet/get-address",id:"unity-sdk/wallet/get-address",title:"Get Wallet Account Address",description:"Ask for the account address",source:"@site/docs/09-unity-sdk/23-wallet/03-get-address.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/get-address",permalink:"/unity-sdk/wallet/get-address",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/03-get-address.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Connect Wallet",permalink:"/unity-sdk/wallet/connect-wallet"},next:{title:"Escape Hatch (executing sequence.js code)",permalink:"/unity-sdk/wallet/escape-hatch"}},c={},l=[{value:"Ask for the account address",id:"ask-for-the-account-address",level:2},{value:"Authenticate the account address",id:"authenticate-the-account-address",level:2},{value:"Authenticate the account address server-side",id:"authenticate-the-account-address-server-side",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-wallet-account-address"},"Get Wallet Account Address"),(0,r.kt)("h2",{id:"ask-for-the-account-address"},"Ask for the account address"),(0,r.kt)("p",null,"To get the user's Sequence wallet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const address = await wallet.GetAddress();\nDebug.Log(address);\n")),(0,r.kt)("h2",{id:"authenticate-the-account-address"},"Authenticate the account address"),(0,r.kt)("p",null,"In many cases, you'll want your users to connect and then verify their account address. Many dapps do this by asking the user\nto sign a message, and then verify the signature from the user to ensure it's integrity."),(0,r.kt)("p",null,"As this is such a common workflow, Sequence can automatically authenticate the account address at the same time\nwhile the user is prompt to connect their wallet to your dapp. This allows the user experience to be simpler and\nmore seamless, with less confusion and clicks -- it's a subtle thing, but makes a big difference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'\nconst connectDetails = await wallet.Connect(new ConnectOptions {\n  app = "Your Dapp name",\n  authorize = true // <---<<< this will automatically sign+verify a EIP712 message when user clicks "Connect"\n});\n')),(0,r.kt)("p",null,"In the above example, we pass ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize =  true")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect()")," function, which will automatically have the user\nsign a EIP712 signed message to prove their identity. This allows you to then easily authenticate the connected\nwallet address with absolutely certainty."),(0,r.kt)("p",null,"FYI, you can find the signed message proof returned in ",(0,r.kt)("inlineCode",{parentName:"p"},"connectDetails.proof"),", which is an EIP712 signed object using\na simple a convention from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/ethauth.js"},"ethauth"),". NOTE: EIP712 is just like a normal\nsigned message, but it allows you to use an actual object for signing instead of just a plain-text string."),(0,r.kt)("h2",{id:"authenticate-the-account-address-server-side"},"Authenticate the account address server-side"),(0,r.kt)("p",null,"The above example demonstrates how to connect and verify the user's identity in your dapp on the client-side,\nbut if you'd like to authenticate the Sequence authorization proof on your server, then you can do by following the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/wallet/guides/get-address#authenticate-the-account-address-server-side"},"instructions in the Sequence.js section"),"\nAs always, if you have any questions or require help, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/sequence"},"Discord"),"."))}d.isMDXComponent=!0}}]);