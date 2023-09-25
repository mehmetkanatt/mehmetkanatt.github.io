"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[7182],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return r?a.createElement(y,o(o({ref:t},u),{},{components:r})):a.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={tags:["linux","systemd"]},o="Create a Systemd Service",i={unversionedId:"technical/how-to/create-systemd-service",id:"technical/how-to/create-systemd-service",title:"Create a Systemd Service",description:"Create .service File",source:"@site/docs/technical/how-to/create-systemd-service.md",sourceDirName:"technical/how-to",slug:"/technical/how-to/create-systemd-service",permalink:"/technical/how-to/create-systemd-service",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/how-to/create-systemd-service.md",tags:[{label:"linux",permalink:"/tags/linux"},{label:"systemd",permalink:"/tags/systemd"}],version:"current",frontMatter:{tags:["linux","systemd"]},sidebar:"tutorialSidebar",previous:{title:"how-to",permalink:"/category/how-to"},next:{title:"Install Docker Compose",permalink:"/technical/how-to/install-docker-compose"}},l={},c=[{value:"Create .service File",id:"create-service-file",level:2},{value:"Service Actions",id:"service-actions",level:2},{value:"Start/Stop/Restart",id:"startstoprestart",level:3},{value:"Automatically start on boot",id:"automatically-start-on-boot",level:3},{value:"Directives",id:"directives",level:2},{value:"After",id:"after",level:3},{value:"Restart",id:"restart",level:3},{value:"Source",id:"source",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-systemd-service"},"Create a Systemd Service"),(0,n.kt)("h2",{id:"create-service-file"},"Create .service File"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Set "User" and "Group"'),(0,n.kt)("li",{parentName:"ul"},'Set executable\'s path to "ExecStart"'),(0,n.kt)("li",{parentName:"ul"},'Change your executable\'s ownership to "User" and "Group" you set.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo vi /etc/systemd/system/servicename.service\n\n[Unit]  \nDescription=Service Name Description  \nWants=network-online.target  \nAfter=network-online.target\n\n[Service]  \nUser=user  \nGroup=group  \nType=simple  \nExecStart=exec-path\n\n[Install]  \nWantedBy=multi-user.target  \n")),(0,n.kt)("h2",{id:"service-actions"},"Service Actions"),(0,n.kt)("h3",{id:"startstoprestart"},"Start/Stop/Restart"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"systemctl start/stop/restart servicename  \n")),(0,n.kt)("h3",{id:"automatically-start-on-boot"},"Automatically start on boot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"systemctl enable servicename  \n")),(0,n.kt)("h2",{id:"directives"},"Directives"),(0,n.kt)("h3",{id:"after"},"After"),(0,n.kt)("p",null,'"After" directive means that your service must be started after the given-keyword is ready. ',"[1]"),(0,n.kt)("p",null,"After= ensures that the listed unit is fully started up before the configured unit is started. ","[1]"),(0,n.kt)("h3",{id:"restart"},"Restart"),(0,n.kt)("p",null,"By default, systemd does not restart your service if the program exits for whatever reason"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Restart=always  \nRestart=on-failure  \n")),(0,n.kt)("p",null,"You could also use on-failure to only restart if the exit status is not 0."),(0,n.kt)("p",null,"By default, systemd attempts a restart after 100ms. You can specify the number of seconds to wait before attempting a restart, using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"RestartSec=1  \n")),(0,n.kt)("p",null,"By default, when you configure ",(0,n.kt)("inlineCode",{parentName:"p"},"Restart=always")," as we did, systemd gives up restarting your service if it fails to start more than 5 times within a 10 seconds interval. Forever."),(0,n.kt)("p",null,"If you set it to restart after 3 seconds, then you can never reach 5 failed retries within 10 seconds."),(0,n.kt)("p",null,"The simple fix that always works is to set ",(0,n.kt)("inlineCode",{parentName:"p"},"StartLimitIntervalSec=0"),". This way, systemd will attempt to restart your service forever. ","[2]"),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[1]"," ",(0,n.kt)("a",{parentName:"li",href:"https://systemd.io"},"https://systemd.io")),(0,n.kt)("li",{parentName:"ul"},"[2]"," ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6"},"https://medium.com/@benmorel/creating-a-linux-service-with-systemd-611b5c8b91d6")),(0,n.kt)("li",{parentName:"ul"},"[3]"," ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@mehmetodabashi/how-to-install-prometheus-node-exporter-on-a-aws-ec2-instance-ce1bf8a72160"},"https://medium.com/@mehmetodabashi/how-to-install-prometheus-node-exporter-on-a-aws-ec2-instance-ce1bf8a72160")),(0,n.kt)("li",{parentName:"ul"},"[4]"," ",(0,n.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html"},"https://www.freedesktop.org/software/systemd/man/systemd.unit.html"),"  ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unknown (2023-09-13 14:01:18)",(0,n.kt)("br",{parentName:"p"}),"\n","#linux #systemd")))}m.isMDXComponent=!0}}]);