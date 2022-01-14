"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[535],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7228:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:6},s="Sending a Transaction",l={unversionedId:"build-with-sequence/send_transaction",id:"build-with-sequence/send_transaction",title:"Sending a Transaction",description:"Signing a transaction will only retrieve the signed payload.",source:"@site/docs/build-with-sequence/6_send_transaction.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/send_transaction",permalink:"/build-with-sequence/send_transaction",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/6_send_transaction.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Signing & Verifying Transactions",permalink:"/build-with-sequence/sign_transaction"},next:{title:"Sending a Batch of Transactions",permalink:"/build-with-sequence/send_batch_transactions"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-a-transaction"},"Sending a Transaction"),(0,i.kt)("p",null,"Signing a transaction will only retrieve the signed payload.\nIf you want the wallet to actually dispatch the transaction to the network as well, that requires only a small modification to the previous example (note the change from ",(0,i.kt)("inlineCode",{parentName:"p"},"signTransactions")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const transaction = {\n  to: daiContractAddress,\n  value: 1000000000000000000,\n  data: '0x',\n  gasLimit: 0,\n  delegateCall: false,\n  revertOnError: false\n}\n\nconst response = await wallet.sendTransaction(transaction)\nconsole.log(response)\n")))}d.isMDXComponent=!0}}]);