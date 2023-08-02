"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={tags:["technical","mysql"]},c="notes",o={unversionedId:"technical/mysql/uncategorized",id:"technical/mysql/uncategorized",title:"notes",description:"_ Unknown (2022-08-13 2150)",source:"@site/docs/technical/mysql/uncategorized.md",sourceDirName:"technical/mysql",slug:"/technical/mysql/uncategorized",permalink:"/technical/mysql/uncategorized",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/mysql/uncategorized.md",tags:[{label:"technical",permalink:"/tags/technical"},{label:"mysql",permalink:"/tags/mysql"}],version:"current",frontMatter:{tags:["technical","mysql"]},sidebar:"tutorialSidebar",previous:{title:"mysql",permalink:"/category/mysql"},next:{title:"nextjs",permalink:"/category/nextjs"}},i={},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notes"},"notes"),(0,a.kt)("h1",{id:"copy-with-indexes-and-triggers"},"Copy with indexes and triggers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE newtable LIKE oldtable;  \nINSERT INTO newtable SELECT * FROM oldtable;  \n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:04:50)"),(0,a.kt)("p",null,"tags: technical, mysql"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"fulltext-search-with-where-match--against-"},'Fulltext Search with "WHERE MATCH ... AGAINST ..."'),(0,a.kt)("p",null,"Add fulltext search index that you want to search columns:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"FULLTEXT KEY `fti_product` (`product`)  \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cves c  \nINNER JOIN cve_configurations cc  \nON c.id = cc.cve_id  \nWHERE MATCH(cc.product) AGAINST(:libraryName)  \n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:05:01)"),(0,a.kt)("p",null,"tags: technical, mysql"))}m.isMDXComponent=!0}}]);