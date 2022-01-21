"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[855],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3295:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:3},c="Wallet Factory",s={unversionedId:"wallet-contracts/wallet_factory",id:"wallet-contracts/wallet_factory",title:"Wallet Factory",description:'Sequence Wallets are created using the Factory contract, when called it creates child MinimalUpgradeableProxies contracts, which are in essense the "boot" code of all Sequence wallets.',source:"@site/docs/wallet-contracts/3_wallet_factory.mdx",sourceDirName:"wallet-contracts",slug:"/wallet-contracts/wallet_factory",permalink:"/wallet-contracts/wallet_factory",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/wallet-contracts/3_wallet_factory.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Universal Deployer",permalink:"/wallet-contracts/universal_deployer"},next:{title:"MainModule & counter-factual configuration",permalink:"/wallet-contracts/main_module"}},p=[{value:"Factory API",id:"factory-api",children:[{value:"deploy",id:"deploy",children:[],level:3}],level:2},{value:"Counter factual addresses",id:"counter-factual-addresses",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wallet-factory"},"Wallet Factory"),(0,l.kt)("p",null,"Sequence Wallets are created using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/wallet-contracts/blob/b084e731315582f6494bc169292bb89f379815ea/src/contracts/Factory.sol"},"Factory")," contract, when called it creates child ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/wallet-contracts/blob/b084e731315582f6494bc169292bb89f379815ea/src/contracts/Wallet.sol"},"MinimalUpgradeableProxies"),' contracts, which are in essense the "boot" code of all Sequence wallets.'),(0,l.kt)("h2",{id:"factory-api"},"Factory API"),(0,l.kt)("h3",{id:"deploy"},"deploy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deploy(\n    address _mainModule,\n    bytes32 _salt\n  ) public payable returns (address _contract)\n")),(0,l.kt)("p",null,"Creates a child MinimalUpgradeableProxy using ",(0,l.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1014"},"CREATE2"),", the proxy initially points to the provided ",(0,l.kt)("inlineCode",{parentName:"p"},"_mainModule"),".\nNo initialize code is executed."),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_mainModule"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial implementation for the new proxy contract, expected to point to a valid Sequence wallet implementation with support for counter-factual initialization.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_salt"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:null},"Arbitrary value to be used as ",(0,l.kt)("inlineCode",{parentName:"td"},"create2")," salt. Sequence's ",(0,l.kt)("inlineCode",{parentName:"td"},"mainModule")," uses the salt to obtain a hash with the initial configuration for the wallet (See ",(0,l.kt)("a",{parentName:"td",href:"#"},"ImageHash"),").")))),(0,l.kt)("p",null,"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_contract"),(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of the created proxy contract.")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Unsanitized input")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The Factory contract ",(0,l.kt)("strong",{parentName:"p"},"does not")," check if the provided ",(0,l.kt)("inlineCode",{parentName:"p"},"_mainModule")," is a valid Sequence wallet implementation, or if ",(0,l.kt)("inlineCode",{parentName:"p"},"_salt")," is a valid Sequence configuration."),(0,l.kt)("p",{parentName:"div"},"Using invalid parameters will result on a proxy contract that ",(0,l.kt)("strong",{parentName:"p"},"may not")," be usable, and could result in loss of funds."))),(0,l.kt)("h2",{id:"counter-factual-addresses"},"Counter factual addresses"),(0,l.kt)("p",null,"Sequence wallets are counter-factual by design, this means that the wallet's address can be known before the wallet is deployed; any two combinations of the ",(0,l.kt)("inlineCode",{parentName:"p"},"mainModule")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"salt")," values will result in the same wallet address."),(0,l.kt)("p",null,"This property alongside the use of ",(0,l.kt)("a",{parentName:"p",href:"/wallet-contracts/universal_deployer"},"UniversalDeployer")," is the reason why Sequence wallets can obtain the same address on multiple chains."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Gas-free wallet creation")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Sequence wallets are ",(0,l.kt)("strong",{parentName:"p"},"100% counterfactual"),", meaning that funds can be safely transferred to the wallet's address without the need for calling the ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," function."),(0,l.kt)("p",{parentName:"div"},"Deploying the wallet is only required before the first transaction is sent ",(0,l.kt)("strong",{parentName:"p"},"from")," the wallet."))))}u.isMDXComponent=!0}}]);