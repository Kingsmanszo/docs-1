"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o="Why smart contracts wallets?",s={unversionedId:"wallet-contracts/why",id:"wallet-contracts/why",title:"Why smart contracts wallets?",description:"Ethereum wallets may take two different forms, Externally owned accounts (EOAs) or Smart Contract Wallets.",source:"@site/docs/wallet-contracts/01-why.mdx",sourceDirName:"wallet-contracts",slug:"/wallet-contracts/why",permalink:"/wallet-contracts/why",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/wallet-contracts/01-why.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"MDX Syntax Features",permalink:"/misc/writing-docs/markdown-features"},next:{title:"Universal Deployer",permalink:"/wallet-contracts/universal-deployer"}},i={},c=[{value:"External owned accounts",id:"external-owned-accounts",level:2},{value:"Pros",id:"pros",level:3},{value:"Popular examples",id:"popular-examples",level:3},{value:"Smart contract wallets",id:"smart-contract-wallets",level:2},{value:"Pros",id:"pros-1",level:3},{value:"Examples",id:"examples",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"why-smart-contracts-wallets"},"Why smart contracts wallets?"),(0,n.kt)("p",null,"Ethereum wallets may take two different forms, Externally owned accounts (EOAs) or Smart Contract Wallets.\nThe Sequence wallet is implemented as a smart contract, which allows the system to provide additional security and functionality."),(0,n.kt)("h2",{id:"external-owned-accounts"},"External owned accounts"),(0,n.kt)("p",null,"Externally owned accounts are the most primitive form of wallet on Ethereum; EOAs are accounts composed of a single ECDSA key pair."),(0,n.kt)("h3",{id:"pros"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Simple to implement"),(0,n.kt)("li",{parentName:"ul"},"Cheap to use (in some scenarios)"),(0,n.kt)("li",{parentName:"ul"},"Easy to backup")),(0,n.kt)("h3",{id:"popular-examples"},"Popular examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/"},"MetaMask")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rainbow.me/"},"Rainbow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.myetherwallet.com/"},"MyEtherWallet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://trustwallet.com/"},"Trust"))),(0,n.kt)("h2",{id:"smart-contract-wallets"},"Smart contract wallets"),(0,n.kt)("p",null,"Smart contract wallets are wallets that are implemented as smart contracts; it allows the wallets to implement arbitrary logic within the bounds of what's supported by the underlying virtual machine.\nBecause of this, these contracts can implement functionality that's not available for EOAs, and can also be upgraded if they are prepared to do so."),(0,n.kt)("h3",{id:"pros-1"},"Pros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multiple keys"),(0,n.kt)("li",{parentName:"ul"},"Key rotation"),(0,n.kt)("li",{parentName:"ul"},"Pay fees using ERC20 tokens (e.g. USDC)"),(0,n.kt)("li",{parentName:"ul"},"Upgradeability"),(0,n.kt)("li",{parentName:"ul"},"Social recovery support"),(0,n.kt)("li",{parentName:"ul"},"Meta-transactions"),(0,n.kt)("li",{parentName:"ul"},"More flexible design space")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sequence.app/"},"Sequence")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gnosis-safe.io/"},"Gnosis Safe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.argent.xyz/"},"Argent"))))}u.isMDXComponent=!0}}]);