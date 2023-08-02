"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),b=a,m=s["".concat(l,".").concat(b)]||s[b]||g[b]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={tags:["technical","gitlab"]},i="notes",c={unversionedId:"technical/gitlab/uncategorized",id:"technical/gitlab/uncategorized",title:"notes",description:"(Gitlab) You can create access key and use it while doing git operations:",source:"@site/docs/technical/gitlab/uncategorized.md",sourceDirName:"technical/gitlab",slug:"/technical/gitlab/uncategorized",permalink:"/technical/gitlab/uncategorized",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/gitlab/uncategorized.md",tags:[{label:"technical",permalink:"/tags/technical"},{label:"gitlab",permalink:"/tags/gitlab"}],version:"current",frontMatter:{tags:["technical","gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Install Gitlab Runner",permalink:"/technical/gitlab/install-gitlab-runner"},next:{title:"golang",permalink:"/category/golang"}},l={},u=[],p={toc:u},s="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notes"},"notes"),(0,a.kt)("p",null,"(Gitlab) You can create access key and use it while doing git operations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://oauth2:access_key@gitlab.yourdomain.com/username/reponame.git  \n")),(0,a.kt)("p",null,"NOT RECOMMENDED, USE DEPLOY KEYS"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:09:02)"),(0,a.kt)("p",null,"tags: technical, gitlab"))}g.isMDXComponent=!0}}]);