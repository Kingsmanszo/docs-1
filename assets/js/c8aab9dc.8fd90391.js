"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),c=n(7094),i=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:k,groupId:h,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==x&&!y.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,c.U)(),[N,C]=(0,r.useState)(x),q=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=h){const e=v[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,n=q.indexOf(t),a=y[n].value;a!==N&&(w(t),C(a),null!=h&&T(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=q.indexOf(e.currentTarget)+1;n=null!=(a=q[t])?a:q[0];break}case"ArrowLeft":{var r;const t=q.indexOf(e.currentTarget)-1;n=null!=(r=q[t])?r:q[q.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>q.push(e),onKeyDown:E,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},3448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={sidebar_label:"All unique tokens in a contract"},c="Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies",i={unversionedId:"indexer/guides/unique-tokens",id:"indexer/guides/unique-tokens",title:"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies",description:"Fetches token supplies and metadata for any ERC20, ERC721, ERC1155 contract.",source:"@site/docs/04-indexer/03-guides/04-unique-tokens.mdx",sourceDirName:"04-indexer/03-guides",slug:"/indexer/guides/unique-tokens",permalink:"/indexer/guides/unique-tokens",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/03-guides/04-unique-tokens.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"All unique tokens in a contract"},sidebar:"sidebar",previous:{title:"Wallet transaction history",permalink:"/indexer/guides/transaction-history"},next:{title:"Token contract transaction history",permalink:"/indexer/guides/transation-history-token-contract"}},u={},p=[{value:"Fetch the transaction history for any token contract address",id:"fetch-the-transaction-history-for-any-token-contract-address",level:2},{value:"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)",id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc",level:2},{value:"Fetch the chain ID",id:"fetch-the-chain-id",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fetch-all-unique-tokens-in-a-particular-erc207211155-contract-including-total-supplies"},"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetches token supplies and metadata for any ERC20, ERC721, ERC1155 contract.")),(0,r.kt)("p",null,"This query is helpful to render all tokens in a token contract, or to query the total token supplies.\nIn this example, we use the Skyweaver token contract address 0x631998e91476DA5B870D741192fc5Cbc55F5a52E\non the Polygon network. You may query any contract address on any of the supported networks (but make\nsure to query the indexer of the corresponding network)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetTokenSupplies")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTokenSupplies"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- a ERC20 / ERC721 / ERC1155 contract address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetTokenSupplies")," of Skyweaver contract on Polygon")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetTokenSupplies -d \'{ "contractAddress": "0x631998e91476DA5B870D741192fc5Cbc55F5a52E", "includeMetadata": true }\'\n'))),(0,r.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// here we query the Skyweaver contract address, but you can use any\nconst contractAddress = '0x631998e91476DA5B870D741192fc5Cbc55F5a52E'\n\n// query Sequence Indexer for all token details / supplies\nconst tokenDetails = await indexer.getTokenSupplies({\n    contractAddress: contractAddress,\n    includeMetadata: true\n})\nconsole.log('token details of contract:', tokenDetails)\n"))),(0,r.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTokenSupplies(contractAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    filter := &indexer.TransactionHistoryFilter{\n        ContractAddress: &contractAddress,\n    }\n    includeMetadata := true\n\n    _, tokenDetails, err := seqIndexer.GetTokenSupplies(context.Background(), filter, nil, &includeMetadata)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("token details:", tokenDetails)\n}\n'))),(0,r.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"fetch-the-transaction-history-for-any-token-contract-address"},"Fetch the transaction history for any token contract address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract.")),(0,r.kt)("p",null,"This query is helpful to track transaction history of a particular token contract.\nIn this example, we use the Skyweaver token contract address 0x631998e91476DA5B870D741192fc5Cbc55F5a52E\non the Polygon network. You may query any contract address on any of the supported networks (but make\nsure to query the indexer of the corresponding network)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetBalanceUpdates")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetBalanceUpdates"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- a ERC20 / ERC721 / ERC1155 contract address")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetBalanceUpdates")," of Skyweaver contract on Polygon")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetBalanceUpdates -d \'{ "contractAddress": "0x631998e91476DA5B870D741192fc5Cbc55F5a52E" }\'\n'))),(0,r.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// here we query the Skyweaver contract address, but you can use any\nconst contractAddress = '0x631998e91476DA5B870D741192fc5Cbc55F5a52E'\n\n// query Sequence Indexer for all token details / supplies\n// NOTE: you can also pass the page object for paginated results. As well, pass the lastUpdateID\n// to query since the last update.\nconst history = await indexer.getBalanceUpdates({\n    contractAddress: contractAddress\n})\nconsole.log('token history of contract:', history)\n"))),(0,r.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetBalanceUpdates(contractAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    // NOTE: you can also pass the page object for paginated results. As well, pass the lastUpdateID\n    // to query since the last update.\n    _, history, err := seqIndexer.GetBalanceUpdates(context.Background(), contractAddress, 0, nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("token token of contract:", history)\n}\n'))),(0,r.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc"},"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetEtherBalance")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetEtherBalance"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accountAddress")," (string) -- the wallet account address")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetEtherBalance")," MATIC balance of a wallet account address on Polygon")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetEtherBalance -d \'{ "accountAddress": "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9" }\'\n'))),(0,r.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// try any account address you'd like :)\nconst accountAddress = '0xabc...'\n\n// query Sequence Indexer for all token balances of the account on Polygon\nconst tokenBalances = await indexer.getTokenBalances({\n    accountAddress: accountAddress,\n    includeMetadata: true\n})\nconsole.log('tokens in your account:', tokenBalances)\n"))),(0,r.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTokenBalances(accountAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    includeMetadata := true\n\n    tokenBalances, _, err := seqIndexer.GetTokenBalances(context.Background(), &accountAddress, nil, &includeMetadata, nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("tokenBalances:", tokenBalances)\n}\n'))),(0,r.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"fetch-the-chain-id"},"Fetch the chain ID"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetChainID")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetChainID"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json")),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://mainnet-indexer.sequence.app/rpc/Indexer/GetChainID\n'))),(0,r.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://mainnet-indexer.sequence.app')\n\nconst { chainID } = await indexer.getChainID()\nconsole.log(chainID) // 1\n"))),(0,r.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetChainID() {\n    seqIndexer := indexer.NewIndexerClient("https://mainnet-indexer.sequence.app", http.DefaultClient)\n\n    chainID, err := seqIndexer.GetChainID(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("chainID:", chainID)\n}\n'))),(0,r.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}m.isMDXComponent=!0}}]);