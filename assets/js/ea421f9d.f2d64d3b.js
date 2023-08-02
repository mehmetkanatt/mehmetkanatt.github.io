"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[4215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={tags:["technical","how-to"]},l="Install Docker",c={unversionedId:"technical/how-to/install-docker",id:"technical/how-to/install-docker",title:"Install Docker",description:"Ubuntu",source:"@site/docs/technical/how-to/install-docker.md",sourceDirName:"technical/how-to",slug:"/technical/how-to/install-docker",permalink:"/technical/how-to/install-docker",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/how-to/install-docker.md",tags:[{label:"technical",permalink:"/tags/technical"},{label:"how-to",permalink:"/tags/how-to"}],version:"current",frontMatter:{tags:["technical","how-to"]},sidebar:"tutorialSidebar",previous:{title:"Install Docker Compose",permalink:"/technical/how-to/install-docker-compose"},next:{title:"Install Terraform on Mac",permalink:"/technical/how-to/install-terraform"}},i={},s=[{value:"Ubuntu",id:"ubuntu",level:2},{value:"Amazon Linux 2",id:"amazon-linux-2",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-docker"},"Install Docker"),(0,o.kt)("h2",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install docker.io  \nsudo usermod -a -G docker ubuntu  \n")),(0,o.kt)("h2",{id:"amazon-linux-2"},"Amazon Linux 2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum update -y\n# sudo amazon-linux-extras install docker # removed amazon-linux-extras on Amazon Linux 2023  \nsudo yum install -y docker  \nsudo service docker start  \nsudo systemctl enable docker  \nsudo usermod -a -G docker ec2-user  \n")),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-container-image.html#create-container-image-install-docker"},"https://docs.aws.amazon.com/AmazonECS/latest/userguide/create-container-image.html#create-container-image-install-docker")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:03:18)"),(0,o.kt)("p",null,"tags: technical, how-to"))}m.isMDXComponent=!0}}]);