"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={tags:["php","technical"]},c="uncategorized",l={unversionedId:"technical/php/uncategorized",id:"technical/php/uncategorized",title:"uncategorized",description:"Modifying PHP-FPM Access Log Format",source:"@site/docs/technical/php/uncategorized.md",sourceDirName:"technical/php",slug:"/technical/php/uncategorized",permalink:"/technical/php/uncategorized",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/php/uncategorized.md",tags:[{label:"php",permalink:"/tags/php"},{label:"technical",permalink:"/tags/technical"}],version:"current",frontMatter:{tags:["php","technical"]},sidebar:"tutorialSidebar",previous:{title:"Log Fatal Errors to Different Log File",permalink:"/technical/php/log-fatal-errors"},next:{title:"security",permalink:"/category/security"}},p={},i=[{value:"Run composer commands on disposable Docker container",id:"run-composer-commands-on-disposable-docker-container",level:2}],s={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uncategorized"},"uncategorized"),(0,o.kt)("p",null,"Modifying PHP-FPM Access Log Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'access.format = "[%t] %m %{REQUEST_SCHEME}e://%{HTTP_HOST}e%{REQUEST_URI}e pid:%p took:%ds mem:%{mega}Mmb cpu:%C%% status:%s {%{REMOTE_ADDR}e|%{HTTP_USER_AGENT}e}"  \n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2023-08-15 22:11:48)"),(0,o.kt)("p",null,"tags: php, technical"),(0,o.kt)("hr",null),(0,o.kt)("p",null,'Fix: PHP7.1-FPM + Apache "Gateway Timeout"'),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"Timeout 600")," this statement to global conf."),(0,o.kt)("p",null,'Fix: PHP7.4-FPM + Apache "Gateway Timeout 504"'),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"timeout=600")," this statement to end of ProxyPassMatch line's"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2023-08-17 17:11:26)"),(0,o.kt)("p",null,"tags: php, technical"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Using getenv() and putenv() is strongly discouraged due to the fact that these functions are not thread safe, however it is still possible to instruct PHP dotenv to use these functions."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:08:33)"),(0,o.kt)("p",null,"tags: php, technical"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"run-composer-commands-on-disposable-docker-container"},"Run composer commands on disposable Docker container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm --interactive --tty --volume $PWD:/app composer  \n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:05:33)"),(0,o.kt)("p",null,"tags: php, technical"))}m.isMDXComponent=!0}}]);