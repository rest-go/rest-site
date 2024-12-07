"use strict";(self.webpackChunkrest_docs=self.webpackChunkrest_docs||[]).push([[677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3},i="\u914d\u7f6e",o={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"\u914d\u7f6e",description:"Rest\u4e2d\u7684\u914d\u7f6e\u53ea\u6709\u6570\u636e\u5e93\u7684\u8fde\u63a5\u662f\u5fc5\u987b\u7684\uff0c\u53ea\u6709\u8fde\u63a5\u5230\u4e86\u6570\u636e\u5e93\u624d\u80fd\u5904\u7406\u8bf7\u6c42\u3002Rest\u4f7f\u7528\u4e86\u7edf\u4e00\u7684\u683c\u5f0f\u6765\u8fde\u63a5\u6570\u636e\u5e93\uff0c\u652f\u6301\u7684\u683c\u5f0f\u53ef\u4ee5\u53c2\u89c1\u4e0b\u9762\u7684 \u6570\u636e\u5e93\u914d\u7f6e \u4e00\u8282\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/zh-Hans/docs/getting-started/configuration",draft:!1,editUrl:"https://github.com/rest-go/rest-site/edit/main/docs/getting-started/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh-Hans/docs/getting-started/installation"},next:{title:"Guides",permalink:"/zh-Hans/docs/category/guides"}},p={},u=[{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"config.yml \u793a\u4f8b",id:"configyml-\u793a\u4f8b",level:4},{value:"\u6570\u636e\u5e93\u914d\u7f6e",id:"\u6570\u636e\u5e93\u914d\u7f6e",level:2},{value:"\u7528\u6237\u9a8c\u8bc1\u914d\u7f6e",id:"\u7528\u6237\u9a8c\u8bc1\u914d\u7f6e",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"Rest\u4e2d\u7684\u914d\u7f6e\u53ea\u6709\u6570\u636e\u5e93\u7684\u8fde\u63a5\u662f\u5fc5\u987b\u7684\uff0c\u53ea\u6709\u8fde\u63a5\u5230\u4e86\u6570\u636e\u5e93\u624d\u80fd\u5904\u7406\u8bf7\u6c42\u3002Rest\u4f7f\u7528\u4e86\u7edf\u4e00\u7684\u683c\u5f0f\u6765\u8fde\u63a5\u6570\u636e\u5e93\uff0c\u652f\u6301\u7684\u683c\u5f0f\u53ef\u4ee5\u53c2\u89c1\u4e0b\u9762\u7684 ",(0,a.kt)("a",{parentName:"p",href:"#%E6%95%B0%E6%8D%AE%E5%BA%93%E9%85%8D%E7%BD%AE"},"\u6570\u636e\u5e93\u914d\u7f6e")," \u4e00\u8282\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u53c2\u6570\u4f1a\u4ee5\u4ee5\u4e0b\u987a\u5e8f\u8bfb\u53d6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bfb\u53d6"),(0,a.kt)("li",{parentName:"ol"},"\u4ece\u547d\u4ee4\u884c\u53c2\u6570\u4e2d\u8bfb\u53d6, \u8986\u76d6\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u76f8\u540c\u7684\u53c2\u6570")),(0,a.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("p",null,"\u5e38\u89c1\u7684\u53c2\u6570\u53ef\u4ee5\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rest -addr :3000 -db.url sqlite://chinook.db\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-addr <ip:port>")),(0,a.kt)("p",null,"\u6307\u5b9a\u670d\u52a1\u5668\u7684\u76d1\u542c\u5730\u5740"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-db.url <dsn>")),(0,a.kt)("p",null,"\u6307\u5b9a\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-config <path>")),(0,a.kt)("p",null,"\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-help")),(0,a.kt)("p",null,"\u8f93\u51fa\u5e2e\u52a9\u4fe1\u606f"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"Rest \u53ef\u4ee5\u8bfb\u53d6\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0c\u6ca1\u6709\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u5982\u679c\u8981\u7528\u914d\u7f6e\u6587\u4ef6\uff0c\u9700\u8981\u624b\u52a8\u6307\u5b9a\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ rest -config config.yml\n")),(0,a.kt)("h4",{id:"configyml-\u793a\u4f8b"},"config.yml \u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# server listen addr\naddr: :3000\n\n# db config\ndb:\n  url: sqlite://chinook.db\n\n# auth config\nauth:\n  enabled: true\n  secret: [replace-this-to-your-own-secret]\n")),(0,a.kt)("h2",{id:"\u6570\u636e\u5e93\u914d\u7f6e"},"\u6570\u636e\u5e93\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"url")),(0,a.kt)("p",null,"\u6307\u5b9a\u8981\u8fde\u63a5\u7684\u6570\u636e\u5e93\u5730\u5740\uff0c\u7531\u652f\u6301\u7684\u6570\u636e\u5e93\u9a71\u52a8\u540d\u548c\u5b9e\u9645\u5730\u5740\u7ec4\u6210\uff0c\u4e0b\u9762\u662f\u5f53\u524d\u652f\u6301\u7684\u6570\u636e\u5e93\u548c\u5bf9\u5e94\u7684\u683c\u5f0f\u793a\u4f8b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u5e93"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5730\u5740\u683c\u5f0f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,a.kt)("td",{parentName:"tr",align:null},"postgres://user:passwd@localhost:5432/db_name?search_path=schema_name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,a.kt)("td",{parentName:"tr",align:null},"mysql://user:passwd@tcp(127.0.0.1:3306)/db_name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SQLite"),(0,a.kt)("td",{parentName:"tr",align:null},"sqlite:///path/to/my.db")))),(0,a.kt)("h2",{id:"\u7528\u6237\u9a8c\u8bc1\u914d\u7f6e"},"\u7528\u6237\u9a8c\u8bc1\u914d\u7f6e"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7684Rest\u63a5\u53e3\u90fd\u662f\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\uff0c\u4e0d\u9700\u8981\u4efb\u4f55\u9a8c\u8bc1\u4fe1\u606f\u7684\uff0c\u6bd4\u8f83\u9002\u5408\u4f5c\u4e3a\u4e00\u4e2a\u5185\u90e8\u670d\u52a1\uff0c\u6216\u8005\u653e\u5728\u5176\u4ed6\u65b9\u5411\u4ee3\u7406\u6bd4\u5982Nginx\u7684\u540e\u9762\u3002\u5982\u679c\u4f60\u60f3\u8981\u9a8c\u8bc1\u7528\u6237\uff0c\u53ef\u4ee5\u6253\u5f00\u7528\u6237\u9a8c\u8bc1\u914d\u7f6e\u3002\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"../guides/auth"},"\u9a8c\u8bc1\u548c\u6388\u6743")," \u9875\u9762\u4e86\u89e3\u5b83\u662f\u600e\u4e48\u5de5\u4f5c\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enabled")),(0,a.kt)("p",null,"\u662f\u5426\u8981\u6c42\u9a8c\u8bc1\uff0c\u9ed8\u8ba4\u662f\u5426"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"secret")),(0,a.kt)("p",null,"JWT \u5bc6\u94a5\uff0c\u7528\u6765\u7b7e\u540d\u548c\u89e3\u6790JWT token"))}c.isMDXComponent=!0}}]);