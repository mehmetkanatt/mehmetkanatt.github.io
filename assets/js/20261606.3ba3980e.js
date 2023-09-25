"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9073],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},x=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),x=a,f=u["".concat(c,".").concat(x)]||u[x]||d[x]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=x;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}x.displayName="MDXCreateElement"},5352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={tags:["amazonlinux","linux","xfce","xrdp"]},l="Installing xRDP and xfce Desktop on Amazon Linux",i={unversionedId:"technical/how-to/install-xrdp-and-xfce",id:"technical/how-to/install-xrdp-and-xfce",title:"Installing xRDP and xfce Desktop on Amazon Linux",description:"Install xRDP",source:"@site/docs/technical/how-to/install-xrdp-and-xfce.md",sourceDirName:"technical/how-to",slug:"/technical/how-to/install-xrdp-and-xfce",permalink:"/technical/how-to/install-xrdp-and-xfce",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/how-to/install-xrdp-and-xfce.md",tags:[{label:"amazonlinux",permalink:"/tags/amazonlinux"},{label:"linux",permalink:"/tags/linux"},{label:"xfce",permalink:"/tags/xfce"},{label:"xrdp",permalink:"/tags/xrdp"}],version:"current",frontMatter:{tags:["amazonlinux","linux","xfce","xrdp"]},sidebar:"tutorialSidebar",previous:{title:"Install Terraform on Mac",permalink:"/technical/how-to/install-terraform"},next:{title:"Installing VNC Server and Gnome Desktop",permalink:"/technical/how-to/installing-vncserver-and-gnome"}},c={},s=[{value:"Install xRDP",id:"install-xrdp",level:2},{value:"Configure xRDP",id:"configure-xrdp",level:3},{value:"Install xfce Desktop",id:"install-xfce-desktop",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-xrdp-and-xfce-desktop-on-amazon-linux"},"Installing xRDP and xfce Desktop on Amazon Linux"),(0,a.kt)("h2",{id:"install-xrdp"},"Install xRDP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo yum update -y\n# amazon-linux-extras removed on Amazon Linux 2023  \nsudo amazon-linux-extras install epel  \nsudo yum install -y xrdp  \nsudo systemctl enable xrdp  \n")),(0,a.kt)("h3",{id:"configure-xrdp"},"Configure xRDP"),(0,a.kt)("p",null,"Disable copy-paste bidirectional: /etc/xrdp/xrdp.ini has cliprdr setting. Just set it to false"),(0,a.kt)("h2",{id:"install-xfce-desktop"},"Install xfce Desktop"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sudo yum groupinstall -y xfce  \nsudo reboot  \necho "xfce4-session" > ~/.Xclients  \nchmod a+x .Xclients  \n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-09-25 15:18:26)",(0,a.kt)("br",{parentName:"p"}),"\n","#amazonlinux #linux #xfce #xrdp")))}d.isMDXComponent=!0}}]);