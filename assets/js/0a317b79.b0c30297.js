"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const c={tags:["mysql","technical"]},l="uncategorized",o={unversionedId:"technical/mysql/uncategorized",id:"technical/mysql/uncategorized",title:"uncategorized",description:"_ Unknown (2022-08-13 2150)",source:"@site/docs/technical/mysql/uncategorized.md",sourceDirName:"technical/mysql",slug:"/technical/mysql/uncategorized",permalink:"/technical/mysql/uncategorized",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/mysql/uncategorized.md",tags:[{label:"mysql",permalink:"/tags/mysql"},{label:"technical",permalink:"/tags/technical"}],version:"current",frontMatter:{tags:["mysql","technical"]},sidebar:"tutorialSidebar",previous:{title:"mysql",permalink:"/category/mysql"},next:{title:"nextjs",permalink:"/category/nextjs"}},i={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uncategorized"},"uncategorized"),(0,a.kt)("h1",{id:"copy-with-indexes-and-triggers"},"Copy with indexes and triggers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE newtable LIKE oldtable;  \nINSERT INTO newtable SELECT * FROM oldtable;  \n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:04:50)"),(0,a.kt)("p",null,"tags: mysql, technical"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"fulltext-search-with-where-match--against-"},'Fulltext Search with "WHERE MATCH ... AGAINST ..."'),(0,a.kt)("p",null,"Add fulltext search index that you want to search columns:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"FULLTEXT KEY `fti_product` (`product`)  \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cves c  \nINNER JOIN cve_configurations cc  \nON c.id = cc.cve_id  \nWHERE MATCH(cc.product) AGAINST(:libraryName)  \n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:05:01)"),(0,a.kt)("p",null,"tags: mysql, technical"))}m.isMDXComponent=!0}}]);