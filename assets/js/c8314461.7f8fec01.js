"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[1672],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={tags:["linux"]},i=void 0,o={unversionedId:"technical/linux",id:"technical/linux",title:"linux",description:"File System",source:"@site/docs/technical/linux.md",sourceDirName:"technical",slug:"/technical/linux",permalink:"/technical/linux",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/linux.md",tags:[{label:"linux",permalink:"/tags/linux"}],version:"current",frontMatter:{tags:["linux"]},sidebar:"tutorialSidebar",previous:{title:"uncategorized",permalink:"/technical/how-to/uncategorized"},next:{title:"monitoring",permalink:"/category/monitoring"}},p={},s=[{value:"File System",id:"file-system",level:2},{value:"Reverse order by time",id:"reverse-order-by-time",level:2},{value:"Kill all firefox processes",id:"kill-all-firefox-processes",level:2},{value:"Delete user and home its home folder",id:"delete-user-and-home-its-home-folder",level:2},{value:"User&#39;s UID",id:"users-uid",level:2},{value:"User&#39;s GID",id:"users-gid",level:2},{value:"Multiple SSH Keys",id:"multiple-ssh-keys",level:2},{value:"Change SSH port",id:"change-ssh-port",level:2}],u={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"file-system"},"File System"),(0,a.kt)("p",null,"Essential command binaries: /bin",(0,a.kt)("br",{parentName:"p"}),"\n","System boot loader files: /boot",(0,a.kt)("br",{parentName:"p"}),"\n","Device files: /dev",(0,a.kt)("br",{parentName:"p"}),"\n","Host-specific system-wide configuration files: /etc",(0,a.kt)("br",{parentName:"p"}),"\n","User home directory: /home",(0,a.kt)("br",{parentName:"p"}),"\n","Shared library modules: /lib",(0,a.kt)("br",{parentName:"p"}),"\n","Media file such as CD-ROM: /media",(0,a.kt)("br",{parentName:"p"}),"\n","Temporary mounted filesystems: /mnt",(0,a.kt)("br",{parentName:"p"}),"\n","Add-on application software packages",(0,a.kt)("br",{parentName:"p"}),"\n","Automatically generated file system: /proc",(0,a.kt)("br",{parentName:"p"}),"\n","Home directory for root user: /root",(0,a.kt)("br",{parentName:"p"}),"\n","Run-time program data: /run",(0,a.kt)("br",{parentName:"p"}),"\n","System binaries: /sbin",(0,a.kt)("br",{parentName:"p"}),"\n","Site-specific data served by this system: /srv",(0,a.kt)("br",{parentName:"p"}),"\n","Virtual directory providing information about the system: /sys",(0,a.kt)("br",{parentName:"p"}),"\n","Temporary files: /tmp",(0,a.kt)("br",{parentName:"p"}),"\n","Read-only user files: /usr",(0,a.kt)("br",{parentName:"p"}),"\n","File that is expected to continuously change: /var  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cloudairy (2023-09-16 13:06:08)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"reverse-order-by-time"},"Reverse order by time"),(0,a.kt)("p",null,"a -> all",(0,a.kt)("br",{parentName:"p"}),"\n","h -> human readable size",(0,a.kt)("br",{parentName:"p"}),"\n","r -> reverse",(0,a.kt)("br",{parentName:"p"}),"\n","t -> order by time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls -lahrt  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-09-07 12:12:55)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"kill-all-firefox-processes"},"Kill all firefox processes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pkill -f firefox  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-27 22:21:55)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"delete-user-and-home-its-home-folder"},"Delete user and home its home folder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo userdel -r userName  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-27 22:21:12)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"users-uid"},"User's UID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id -u username  \n")),(0,a.kt)("h2",{id:"users-gid"},"User's GID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id -g username  \n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kb.iu.edu/d/adwf"},"https://kb.iu.edu/d/adwf"),"  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-14 16:29:07)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"multiple-ssh-keys"},"Multiple SSH Keys"),(0,a.kt)("p",null,"Using more than one ssh key, add below lines to this file: ~/.ssh/config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"IdentityFile ~/Desktop/.ssh/id_rsa  \nIdentityFile ~/.ssh/id_rsa  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:09:20)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"change-ssh-port"},"Change SSH port"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Find "# Listen 22" line and remove sharp in this file: /etc/ssh/sshd_config'),(0,a.kt)("li",{parentName:"ul"},"Then change port number"),(0,a.kt)("li",{parentName:"ul"},"Restart sshd service, logout, login")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/"},"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/"),"  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:09:32)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")),(0,a.kt)("p",null,"--"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To not keep track command history, write commands start with whitespace"),(0,a.kt)("li",{parentName:"ul"},"Find duplicate lines in a file",(0,a.kt)("inlineCode",{parentName:"li"},"cat data.txt | sort | uniq -d ")),(0,a.kt)("li",{parentName:"ul"},'Write command(s) into "rc.local" to execute on boot'),(0,a.kt)("li",{parentName:"ul"},"Delete history: ",(0,a.kt)("inlineCode",{parentName:"li"},"history -c")),(0,a.kt)("li",{parentName:"ul"},"Find anything: ",(0,a.kt)("inlineCode",{parentName:"li"},'find / -iname "*.err\u201d')),(0,a.kt)("li",{parentName:"ul"},"Extract .rar files: ",(0,a.kt)("inlineCode",{parentName:"li"},"unrar x -y [path]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"netstat -ant")," -> Active Internet connections (including servers)"),(0,a.kt)("li",{parentName:"ul"},"Delete files inside of a directory: ",(0,a.kt)("inlineCode",{parentName:"li"},"rm -f dirName/*")),(0,a.kt)("li",{parentName:"ul"},"Search a keyword and show 2 lines before/after ",(0,a.kt)("inlineCode",{parentName:"li"},"grep -B 2 -A 2 keyword README.txt")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"watch -n 5 date")," run any command at regular intervals"),(0,a.kt)("li",{parentName:"ul"},'$ echo \'{"a":42, "b": {"x": 127}}\' | python -mjson.tool'),(0,a.kt)("li",{parentName:"ul"},"Detailed ls: ls -R"),(0,a.kt)("li",{parentName:"ul"},"List whole files with relative paths: find /home/sample -type f"),(0,a.kt)("li",{parentName:"ul"},"Website accessible? scutil -r web-site-name"),(0,a.kt)("li",{parentName:"ul"},"Zip a file with password: zip -e destination.zip source-to-zip.txt"),(0,a.kt)("li",{parentName:"ul"},"Find duplicates in a folder: fdupes -r ."),(0,a.kt)("li",{parentName:"ul"},"exiftool -all:all file.pdf  ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:04:29)",(0,a.kt)("br",{parentName:"p"}),"\n","#linux")))}c.isMDXComponent=!0}}]);