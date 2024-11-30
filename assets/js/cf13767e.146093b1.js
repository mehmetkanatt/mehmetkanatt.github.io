"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7593],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={tags:["security"]},a="Secure Coding",i={unversionedId:"technical/security/securecoding",id:"technical/security/securecoding",title:"Secure Coding",description:"A data that comes from untrusted source enters to a program and the adventure begins...",source:"@site/docs/technical/security/securecoding.md",sourceDirName:"technical/security",slug:"/technical/security/securecoding",permalink:"/technical/security/securecoding",draft:!1,editUrl:"https://github.com/mehmetkanatt/notebook/blob/master/docs/technical/security/securecoding.md",tags:[{label:"security",permalink:"/tags/security"}],version:"current",frontMatter:{tags:["security"]},sidebar:"tutorialSidebar",previous:{title:"OWASP Testing Guide v4.0",permalink:"/technical/security/owasp-testing-guide-checklist"},next:{title:"terraform",permalink:"/category/terraform"}},u={},s=[],l={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secure-coding"},"Secure Coding"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A data that comes from untrusted source enters to a program and the adventure begins...")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Security Misconfiguration: DO NOT USE ANY DEFAULT THINGS"),(0,o.kt)("li",{parentName:"ul"},'Preventing LDAP Injection in PHP: Do not let users to use these characters in LDAP operations: \\ # + < > , ; " ='),(0,o.kt)("li",{parentName:"ul"},"Do not use credentials in source code (Password management: Password In Comment, Password Management: Empty Password In Configuration File)  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:06:21)",(0,o.kt)("br",{parentName:"p"}),"\n","#security")))}m.isMDXComponent=!0}}]);