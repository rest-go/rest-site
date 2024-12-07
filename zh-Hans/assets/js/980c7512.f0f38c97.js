"use strict";(self.webpackChunkrest_docs=self.webpackChunkrest_docs||[]).push([[67],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),p=n(7094),s=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:i,values:c,groupId:m,className:k}=e,N=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??N.find((e=>e.props.default))?.props.value??N[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:T}=(0,p.U)(),[f,E]=(0,l.useState)(b),y=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=m){const e=v[m];null!=e&&e!==f&&g.some((t=>t.value===e))&&E(e)}const L=e=>{const t=e.currentTarget,n=y.indexOf(t),a=g[n].value;a!==f&&(O(t),E(a),null!=m&&T(m,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":L(e);break;case"ArrowRight":{const n=y.indexOf(e.currentTarget)+1;t=y[n]??y[0];break}case"ArrowLeft":{const n=y.indexOf(e.currentTarget)-1;t=y[n]??y[y.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},k)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,key:t,ref:e=>y.push(e),onKeyDown:C,onClick:L},i,{className:(0,r.Z)("tabs__item",d,i?.className,{"tabs__item--active":f===t})}),n??t)}))),t?(0,l.cloneElement)(N.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}function m(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},6719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={sidebar_position:1},p="API",s={unversionedId:"guides/api",id:"guides/api",title:"API",description:"\u793a\u4f8b\u8868",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/guides/api.mdx",sourceDirName:"guides",slug:"/guides/api",permalink:"/zh-Hans/docs/guides/api",draft:!1,editUrl:"https://github.com/rest-go/rest-site/edit/main/docs/guides/api.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/zh-Hans/docs/category/guides"},next:{title:"\u9a8c\u8bc1\u548c\u6388\u6743",permalink:"/zh-Hans/docs/guides/auth"}},u={},d=[{value:"\u793a\u4f8b\u8868",id:"\u793a\u4f8b\u8868",level:2},{value:"\u8fc7\u6ee4",id:"\u8fc7\u6ee4",level:2},{value:"\u64cd\u4f5c\u7b26",id:"\u64cd\u4f5c\u7b26",level:2},{value:"\u5355\u6570\u548c\u590d\u6570",id:"\u5355\u6570\u548c\u590d\u6570",level:2},{value:"\u4e3b\u952e",id:"\u4e3b\u952e",level:2},{value:"\u6307\u5b9a\u8fd4\u56de\u5217",id:"\u6307\u5b9a\u8fd4\u56de\u5217",level:2},{value:"JSON \u5217",id:"json-\u5217",level:2},{value:"\u9009\u62e9JSON\u5217",id:"\u9009\u62e9json\u5217",level:3},{value:"\u67e5\u8be2JSON\u5217",id:"\u67e5\u8be2json\u5217",level:3},{value:"\u8d44\u6e90\u5185\u5d4c",id:"\u8d44\u6e90\u5185\u5d4c",level:2},{value:"\u884c\u6570",id:"\u884c\u6570",level:2},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:2},{value:"\u5206\u9875",id:"\u5206\u9875",level:2},{value:"\u63d2\u5165",id:"\u63d2\u5165",level:2},{value:"\u6279\u91cf\u63d2\u5165",id:"\u6279\u91cf\u63d2\u5165",level:3},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api"},"API"),(0,l.kt)("h2",{id:"\u793a\u4f8b\u8868"},"\u793a\u4f8b\u8868"),(0,l.kt)("p",null,"\u4e3a\u4e86\u6f14\u793a\u6240\u6709API\u7528\u6cd5\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e0b\u8868\u5b9a\u4e49\u4f5c\u4e3a\u793a\u4f8b\u3002\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u8868\u90fd\u66b4\u9732\u5728\u4e00\u7ea7\u8def\u7531\u4e2d\u3002\u4f8b\u5982\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"/products")," \u4f1a\u8fd4\u56de\u8868 ",(0,l.kt)("inlineCode",{parentName:"p"},"products")," \u7684\u5168\u90e8\u5185\u5bb9\uff0c\u5728\u8868\u4e3a\u7a7a\u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"pg",label:"PG",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE products (\n    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\n    name VARCHAR(128) NOT NULL,\n    description TEXT NOT NULL,\n    level INTEGER NOT NULL,\n    price DECIMAL(10,2) NOT NULL,\n    hidden BOOL NOT NULL DEFAULT false,\n    json_data JSON\n)\n"))),(0,l.kt)(i.Z,{value:"my",label:"MySQL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE products (\n    id INTEGER PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(128) NOT NULL,\n    description TEXT NOT NULL,\n    level INTEGER NOT NULL,\n    price DECIMAL(10,2) NOT NULL,\n    hidden BOOL NOT NULL DEFAULT false,\n    json_data JSON\n)\n"))),(0,l.kt)(i.Z,{value:"sqlite",label:"SQLite",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE products (\n    id INTEGER PRIMARY KEY,\n    name VARCHAR(128) NOT NULL,\n    description TEXT NOT NULL,\n    level INTEGER NOT NULL,\n    price DECIMAL(10,2) NOT NULL,\n    hidden BOOL NOT NULL DEFAULT false,\n    json_data JSON\n)\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products"\n\n[]\n')),(0,l.kt)("h2",{id:"\u8fc7\u6ee4"},"\u8fc7\u6ee4"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u5217\u540d\u5230HTTP\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u4e2d\u6765\u8fc7\u6ee4\u5339\u914d\u7684\u6570\u636e\uff0c\u4f8b\u5982, \u8981\u8fd4\u56de\u6240\u6709level\u5c0f\u4e8e2\u7684products:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?level=lt.2"\n')),(0,l.kt)("p",null,"\u591a\u4e2a\u6761\u4ef6\u53ef\u4ee5\u4e00\u8d77\u4f7f\u7528. \u4f8b\u5982, \u8981\u8fd4\u56de\u6240\u6709level\u5c0f\u4e8e2\u5e76\u4e14hidden\u65f6false\u7684products:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?level=lt.2&hidden=is.false"\n')),(0,l.kt)("h2",{id:"\u64cd\u4f5c\u7b26"},"\u64cd\u4f5c\u7b26"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u64cd\u4f5c\u7b26\u6709\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7f29\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"SQL"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eq"),(0,l.kt)("td",{parentName:"tr",align:null},"="),(0,l.kt)("td",{parentName:"tr",align:null},"\u76f8\u7b49, \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"?id=eq.1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ne"),(0,l.kt)("td",{parentName:"tr",align:null},"<",">"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u76f8\u7b49, , \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"?id=ne.1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gt"),(0,l.kt)("td",{parentName:"tr",align:null},">"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5927\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gte"),(0,l.kt)("td",{parentName:"tr",align:null},">="),(0,l.kt)("td",{parentName:"tr",align:null},"\u5927\u4e8e\u7b49\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lt"),(0,l.kt)("td",{parentName:"tr",align:null},"<"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lte"),(0,l.kt)("td",{parentName:"tr",align:null},"<="),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c0f\u4e8e\u7b49\u4e8e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"like"),(0,l.kt)("td",{parentName:"tr",align:null},"LIKE"),(0,l.kt)("td",{parentName:"tr",align:null},"LIKE \u64cd\u4f5c\u7b26 (\u4f7f\u7528 ","*"," \u6765\u4ee3\u66ff %\uff0c\u6bd4\u5982URL\u8f6c\u4e49\u95ee\u9898), \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"?name=like.a*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ilike"),(0,l.kt)("td",{parentName:"tr",align:null},"ILIKE"),(0,l.kt)("td",{parentName:"tr",align:null},"ILIKE \u64cd\u4f5c\u7b26 (\u4f7f\u7528 ","*"," \u6765\u4ee3\u66ff %\uff0c\u6bd4\u5982URL\u8f6c\u4e49\u95ee\u9898), \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"?name=ilike.a*"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"in"),(0,l.kt)("td",{parentName:"tr",align:null},"IN"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u5217\u8868\u4e2d, \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"?id=in.(1,2,3)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is"),(0,l.kt)("td",{parentName:"tr",align:null},"IS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5null,true,false, \u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"?hidden=is.true"))))),(0,l.kt)("h2",{id:"\u5355\u6570\u548c\u590d\u6570"},"\u5355\u6570\u548c\u590d\u6570"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709JSON\u7ed3\u679c\u90fd\u5728\u4e00\u4e2a\u6570\u7ec4\u4e2d\u8fd4\u56de\uff0c\u5373\u4f7f\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u4e5f\u662f\u5982\u6b64\u3002\u5982\u679c\u8981\u60f3\u5c06\u7b2c\u4e00\u4e2a\u7ed3\u679c\u4f5c\u4e3a\u672a\u5305\u542b\u5728\u6570\u7ec4\u4e2d\u7684\u5bf9\u8c61\u8fd4\u56de\uff0c\u53ef\u4ee5\u4f7f\u7528\n",(0,l.kt)("inlineCode",{parentName:"p"},"singular")," \u67e5\u8be2\u53c2\u6570\u3002"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"singular")," \u4f1a\u68c0\u67e5\u6570\u636e\u5e93\u4e2d\u662f\u5426\u53ea\u6709\u4e00\u884c\u5339\u914d\uff0c\u5982\u679c\u591a\u884c\u5339\u914d\u5219\u8fd4\u56de\u9519\u8bef\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?id=eq.1&singular"\n')),(0,l.kt)("h2",{id:"\u4e3b\u952e"},"\u4e3b\u952e"),(0,l.kt)("p",null,"\u5982\u679c\u8868\u4e0a\u5b9a\u4e49\u4e86\u4e3b\u952e\uff08\u901a\u5e38\u662f\u4e00\u4e2a\u597d\u7684\u5b9e\u8df5\uff09\uff0c\u5219\u53ef\u4ee5\u76f4\u63a5\u5728URL\u4e2d\u4f7f\u7528\u4e3b\u952e\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5728URL\u4e2d\u4f7f\u7528\u4e3b\u952e\u7684\u503c\u53ef\u4ee5\u770b\u4f5c\u662f\u683c\u5f0f",(0,l.kt)("inlineCode",{parentName:"p"},"?id=eq.1&singular"),"\u7684\u8bed\u6cd5\u7cd6\uff0c\u4e3b\u952e\u662f\u52a8\u6001\u4ece\u8868\u4e2d\u83b7\u53d6\u7684\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u662f",(0,l.kt)("strong",{parentName:"p"},"id"),"\u4ee5\u5916\u7684\u540d\u79f0\uff0c\u4f46\u53ea\u80fd\n",(0,l.kt)("strong",{parentName:"p"},"\u5355\u5217")," \u7684\u4e3b\u952e\uff0c\u4e0d\u652f\u6301\u590d\u5408\u7684\u5217\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products/1"\n')),(0,l.kt)("h2",{id:"\u6307\u5b9a\u8fd4\u56de\u5217"},"\u6307\u5b9a\u8fd4\u56de\u5217"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"select")," \u53c2\u6570\u6307\u5b9a\u8981\u8fd4\u56de\u7684\u5217\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?select=name,description"\n')),(0,l.kt)("h2",{id:"json-\u5217"},"JSON \u5217"),(0,l.kt)("p",null,"\u67e5\u8be2JSON\u5217\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u7bad\u5934\u8fd0\u7b97\u7b26\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"->")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"->>"),"\uff09\u6765\u6307\u5b9a\u8def\u5f84\u3002\u4e0d\u540c\u7684\u6570\u636e\u5e93\u6709\u4e0d\u540c\u7684\u8bed\u6cd5\uff0cRest\u4f7f\u7528\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/functions-json.html"},"PostgreSQL \u6587\u6863"),"\u76f8\u540c\u7684\u8bed\u6cd5\uff0c\u5e76\u81ea\u52a8\u5c06\u8bed\u6cd5\u8f6c\u6362\u4e3a\u4e0d\u540c\u7684\u9a71\u52a8\u7a0b\u5e8f\n\u4ee5\u907f\u514d\u975e\u6cd5\u7684URL\u5b57\u7b26\u3002"),(0,l.kt)("h3",{id:"\u9009\u62e9json\u5217"},"\u9009\u62e9JSON\u5217"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl "localhost:3000/products?select=name,json_data->a,json_data->c->1"\n')),(0,l.kt)("h3",{id:"\u67e5\u8be2json\u5217"},"\u67e5\u8be2JSON\u5217"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl "localhost:3000/products?select=name&json_data->>c->1=eq.2"\n')),(0,l.kt)("h2",{id:"\u8d44\u6e90\u5185\u5d4c"},"\u8d44\u6e90\u5185\u5d4c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"[\u5c1a\u4e0d\u652f\u6301\uff0cWIP]")," \u81ea\u52a8\u83b7\u53d6\u4e00\u5bf9\u4e00\u3001\u4e00\u5bf9\u591a\u5173\u7cfb\u7684\u76f8\u5173\u8bb0\u5f55\u3002"),(0,l.kt)("h2",{id:"\u884c\u6570"},"\u884c\u6570"),(0,l.kt)("p",null,"\u5728\u67e5\u8be2\u53c2\u6570\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"count")," \u8fd4\u56de\u8868\u7684\u884c\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?count"\n')),(0,l.kt)("h2",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),(0,l.kt)("p",null,"\u5728\u67e5\u8be2\u53c2\u6570\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"order")," \u6765\u6307\u5b9aSQL order by\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?order=id.desc,name.asc"\n')),(0,l.kt)("h2",{id:"\u5206\u9875"},"\u5206\u9875"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"page_size")," \u6765\u63a7\u5236\u5206\u9875\u7ed3\u679c\u3002\u9ed8\u8ba4page\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"1"),"\uff0c\u9ed8\u8ba4page_size\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"100"),"\u3002\u53ef\u4ee5\n\u6839\u636e\u9700\u6c42\u66f4\u6539\u5b83\u4eec\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?page=2&page_size=1"\n')),(0,l.kt)("p",null,"\u5206\u9875\u64cd\u4f5c\u662f\u4f7f\u7528SQL\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"OFFSET")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," \u5b9e\u73b0\u7684\uff0c\u5728\u5c1d\u8bd5\u83b7\u53d6\u5f88\u5927\u9875\u7801\u65f6\u53ef\u80fd\u4f1a\u5f88\u6162\uff0c\u4e00\u822c\u63a8\u8350\n\u4f7f\u7528\u663e\u5f0f\u6392\u5e8f\uff0c\u5e76\u6839\u636e\u5f53\u524d\u9875\u9762\u7684\u6700\u5927\u503c\u83b7\u53d6\u4e0b\u4e00\u9875\u7ed3\u679c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl "localhost:3000/products?order=id&id=gt.100"\n')),(0,l.kt)("h2",{id:"\u63d2\u5165"},"\u63d2\u5165"),(0,l.kt)("p",null,"\u8981\u5728\u6570\u636e\u5e93\u8868\u4e2d\u63d2\u5165\u4e00\u884c\uff0c\u4f7f\u7528HTTP POST\u65b9\u6cd5\u4f20\u9012\u4e00\u4e2aJSON\u5bf9\u8c61\uff0c\u5176\u952e\u662f\u8981\u63d2\u5165\u7684\u5217\u7684\u540d\u79f0\u3002\u7f3a\u5c11\u7684\u5c5e\u6027\u5c06\u5728\u9002\u7528\u65f6\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "localhost:3000/products" -d \'{"name":"n3", "description":"d3", "level":2, "price":10.24, "json_data":"{}"}\'\n\ncurl -XPOST "localhost:3000/products" -d \'{"name":"n4", "description":"d4", "level":3, "price":20.48, "json_data":"{\\"a\\":\\"b\\", \\"b\\":1, \\"c\\":[1,2,3], \\"d\\":{\\"a\\":\\"b\\"}}"}\'\n')),(0,l.kt)("h3",{id:"\u6279\u91cf\u63d2\u5165"},"\u6279\u91cf\u63d2\u5165"),(0,l.kt)("p",null,"\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u5305\u542b",(0,l.kt)("strong",{parentName:"p"},"\u76f8\u540c\u952e"),"\u7684JSON\u6570\u7ec4\u6765\u6279\u91cf\u63d2\u5165\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "localhost:3000/products" -d \'[{"name":"n5", "description":"d5", "level":1, "price":1}, {"name":"n6", "description":"d5", "level":1, "price":1}]\'\n')),(0,l.kt)("h2",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,l.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," \u65b9\u6cd5\u4f20\u9012\u8981\u4fee\u6539\u7684\u90e8\u5206\u5217\u6765\u66f4\u65b0\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -XPUT "localhost:3000/products/1" -d \'{"name":"n6"}\'\n')),(0,l.kt)("h2",{id:"\u5220\u9664"},"\u5220\u9664"),(0,l.kt)("p",null,"\u4f7f\u7528 HTTP ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE")," \u65b9\u6cd5\u5220\u9664\u5339\u914d\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -XDELETE "localhost:3000/products/1"\n')))}m.isMDXComponent=!0}}]);