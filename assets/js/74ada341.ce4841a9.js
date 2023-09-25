"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={tags:["amazonlinux","aws","ec2","monitoring","nodeexporter","prometheus"]},l="Install node_exporter on Amazon Linux",i={unversionedId:"technical/monitoring/install-nodeexporter-aws-ec2",id:"technical/monitoring/install-nodeexporter-aws-ec2",title:"Install node_exporter on Amazon Linux",description:"Install node_exporter",source:"@site/docs/technical/monitoring/install-nodeexporter-aws-ec2.md",sourceDirName:"technical/monitoring",slug:"/technical/monitoring/install-nodeexporter-aws-ec2",permalink:"/technical/monitoring/install-nodeexporter-aws-ec2",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/monitoring/install-nodeexporter-aws-ec2.md",tags:[{label:"amazonlinux",permalink:"/tags/amazonlinux"},{label:"aws",permalink:"/tags/aws"},{label:"ec2",permalink:"/tags/ec-2"},{label:"monitoring",permalink:"/tags/monitoring"},{label:"nodeexporter",permalink:"/tags/nodeexporter"},{label:"prometheus",permalink:"/tags/prometheus"}],version:"current",frontMatter:{tags:["amazonlinux","aws","ec2","monitoring","nodeexporter","prometheus"]},sidebar:"tutorialSidebar",previous:{title:"monitoring",permalink:"/category/monitoring"},next:{title:"mysql",permalink:"/technical/mysql"}},s={},c=[{value:"Install node_exporter",id:"install-node_exporter",level:2},{value:"Create a Service",id:"create-a-service",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-node_exporter-on-amazon-linux"},"Install node_exporter on Amazon Linux"),(0,o.kt)("h2",{id:"install-node_exporter"},"Install node_exporter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# for graviton  \nsudo wget https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-arm64.tar.gz  \nsudo tar xf node_exporter-1.6.1.linux-arm64.tar.gz  \nsudo mv node_exporter-1.6.1.linux-arm64 node_exporter  \ncd node_exporter  \nsudo cp node_exporter /usr/local/bin  \n")),(0,o.kt)("h2",{id:"create-a-service"},"Create a Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo useradd node_exporter --no-create-home --shell /bin/false  \nsudo chown node_exporter:node_exporter /usr/local/bin/node_exporter  \nsudo vi /etc/systemd/system/node_exporter.service  \n")),(0,o.kt)("p",null,"Add following to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/node_exporter.service")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-editorconfig"},"[Unit]  \nDescription = Node Exporter  \nWants = network-online.target  \nAfter = network-online.target\n\n[Service]  \nUser = node_exporter  \nGroup = node_exporter  \nType = simple  \nExecStart = /usr/local/bin/node_exporter\n\n[Install]  \nWantedBy = multi-user.target  \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl daemon-reload  \nsudo systemctl start node_exporter  \nsudo systemctl enable node_exporter  \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unknown (2023-09-19 21:37:13)",(0,o.kt)("br",{parentName:"p"}),"\n","#amazonlinux #aws #ec2 #monitoring #nodeexporter #prometheus")))}d.isMDXComponent=!0}}]);