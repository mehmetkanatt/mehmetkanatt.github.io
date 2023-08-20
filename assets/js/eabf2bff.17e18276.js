"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={tags:["linux","technical"]},i="uncategorized",o={unversionedId:"technical/linux/uncategorized",id:"technical/linux/uncategorized",title:"uncategorized",description:"User's UID:",source:"@site/docs/technical/linux/uncategorized.md",sourceDirName:"technical/linux",slug:"/technical/linux/uncategorized",permalink:"/technical/linux/uncategorized",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/linux/uncategorized.md",tags:[{label:"linux",permalink:"/tags/linux"},{label:"technical",permalink:"/tags/technical"}],version:"current",frontMatter:{tags:["linux","technical"]},sidebar:"tutorialSidebar",previous:{title:"linux",permalink:"/category/linux"},next:{title:"mkdocs",permalink:"/category/mkdocs"}},c={},u=[],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uncategorized"},"uncategorized"),(0,a.kt)("p",null,"User's UID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id -u username  \n")),(0,a.kt)("p",null,"User's GID:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id -g username  \n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kb.iu.edu/d/adwf"},"https://kb.iu.edu/d/adwf")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2023-08-14 16:29:07)"),(0,a.kt)("p",null,"tags: linux, technical"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"multiple-ssh-keys"},"Multiple SSH Keys"),(0,a.kt)("p",null,"Using more than one ssh key, add below lines to this file: ~/.ssh/config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IdentityFile ~/Desktop/.ssh/id_rsa  \nIdentityFile ~/.ssh/id_rsa  \n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:09:20)"),(0,a.kt)("p",null,"tags: linux, technical"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"change-ssh-port"},"Change SSH port"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Find "# Listen 22" line and remove sharp in this file: /etc/ssh/sshd_config'),(0,a.kt)("li",{parentName:"ul"},"Then change port number"),(0,a.kt)("li",{parentName:"ul"},"Restart sshd service, logout, login")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/"},"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:09:32)"),(0,a.kt)("p",null,"tags: linux, technical"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To not keep track command history, write commands start with whitespace"),(0,a.kt)("li",{parentName:"ul"},"Find duplicate lines in a file",(0,a.kt)("inlineCode",{parentName:"li"},"cat data.txt | sort | uniq -d ")),(0,a.kt)("li",{parentName:"ul"},'Write command(s) into "rc.local" to execute on boot'),(0,a.kt)("li",{parentName:"ul"},"Delete history: ",(0,a.kt)("inlineCode",{parentName:"li"},"history -c")),(0,a.kt)("li",{parentName:"ul"},"Find anything: ",(0,a.kt)("inlineCode",{parentName:"li"},'find / -iname "*.err\u201d')),(0,a.kt)("li",{parentName:"ul"},"Extract .rar files: ",(0,a.kt)("inlineCode",{parentName:"li"},"unrar x -y [path]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"netstat -ant")," -> Active Internet connections (including servers)"),(0,a.kt)("li",{parentName:"ul"},"Delete files inside of a directory: ",(0,a.kt)("inlineCode",{parentName:"li"},"rm -f dirName/*")),(0,a.kt)("li",{parentName:"ul"},"Search a keyword and show 2 lines before/after ",(0,a.kt)("inlineCode",{parentName:"li"},"grep -B 2 -A 2 keyword README.txt")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"watch -n 5 date")," run any command at regular intervals"),(0,a.kt)("li",{parentName:"ul"},'$ echo \'{"a":42, "b": {"x": 127}}\' | python -mjson.tool'),(0,a.kt)("li",{parentName:"ul"},"Detailed ls: ls -R"),(0,a.kt)("li",{parentName:"ul"},"List whole files with relative paths: find /home/sample -type f"),(0,a.kt)("li",{parentName:"ul"},"Website accessible? scutil -r web-site-name"),(0,a.kt)("li",{parentName:"ul"},"Zip a file with password: zip -e destination.zip source-to-zip.txt"),(0,a.kt)("li",{parentName:"ul"},"Find duplicates in a folder: fdupes -r ."),(0,a.kt)("li",{parentName:"ul"},"exiftool -all:all file.pdf")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:04:29)"),(0,a.kt)("p",null,"tags: linux, technical"))}m.isMDXComponent=!0}}]);