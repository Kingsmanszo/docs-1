"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5895],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=d(t),p=a,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||s;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const s={},o="Sending ERC-721 (NFT) Tokens",i={unversionedId:"build-with-sequence/send-erc721",id:"build-with-sequence/send-erc721",title:"Sending ERC-721 (NFT) Tokens",description:"Sending an ERC-721 NFT is similar to sending an ERC-20 token.",source:"@site/docs/build-with-sequence/08-send-erc721.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/send-erc721",permalink:"/build-with-sequence/send-erc721",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/08-send-erc721.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"sidebar",previous:{title:"Sending ERC-20 Tokens",permalink:"/build-with-sequence/send-erc20"},next:{title:"Sending ERC-1155 (Collectible) Tokens",permalink:"/build-with-sequence/send-erc1155"}},c={},d=[],l={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-erc-721-nft-tokens"},"Sending ERC-721 (NFT) Tokens"),(0,a.kt)("p",null,"Sending an ERC-721 NFT is similar to sending an ERC-20 token.\nThe only notable difference is in the contract standard itself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\n// Encode the transfer of the NFT tokenId to recipient\nconst address = await wallet.getAddress()\nconst data = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipientAddress, tokenId]\n)\n\nconst transaction = {\n  to: erc721TokenAddress,\n  data\n}\n\nconst signer = wallet.getSigner()\nconst txnResponse = await signer.sendTransaction(transaction)\nconsole.log(txnResponse)\n\n// wait for the transaction to be mined\nawait txnResponse.wait()\n")),(0,a.kt)("p",null,"With batching functionality, you can send multiple token transfers in a single native transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const erc721Interface = new ethers.utils.Interface([\n  'function safeTransferFrom(address _from, address _to, uint256 _tokenId)'\n])\n\n// Encode two different ERC-721 token transfers\nconst data1 = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipient1Address, amount1]\n)\nconst data2 = erc721Interface.encodeFunctionData(\n  'safeTransferFrom', [address, recipient2Address, amount2]\n)\n\nconst transaction1 = {\n  to: erc721ContractAddress,\n  data: data1\n}\n\nconst transaction2 = {\n  to: erc721ContractAddress,\n  data: data2\n}\n\n// Send a multiple transactions as a single bundle which is executed as one transaction on chain.\nconst signer = wallet.getSigner()\nconst txnResponse = await signer.sendTransactionBatch([transaction1, transaction2])\nconsole.log(txnResponse)\n\n// Wait for the batched transaction to be mined\nawait txnResponse.wait()\n")))}u.isMDXComponent=!0}}]);