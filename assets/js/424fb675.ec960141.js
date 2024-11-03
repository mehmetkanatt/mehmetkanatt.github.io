"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[222],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>x});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),k=a,x=p["".concat(i,".").concat(k)]||p[k]||m[k]||r;return o?n.createElement(x,l(l({ref:t},u),{},{components:o})):n.createElement(x,l({ref:t},u))}));function x(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},330:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const r={tags:["aws","basicauth","cron","curl","elasticsearch","exif","foxyproxy","how-to","linux","socksproxy","sonarqube","stress","sysctl"]},l=void 0,s={unversionedId:"technical/how-to/uncategorized",id:"technical/how-to/uncategorized",title:"uncategorized",description:"Install stress for Amazon Linux 2",source:"@site/docs/technical/how-to/uncategorized.md",sourceDirName:"technical/how-to",slug:"/technical/how-to/uncategorized",permalink:"/technical/how-to/uncategorized",draft:!1,editUrl:"https://github.com/mehmetkanatt/notebook/blob/master/docs/technical/how-to/uncategorized.md",tags:[{label:"aws",permalink:"/tags/aws"},{label:"basicauth",permalink:"/tags/basicauth"},{label:"cron",permalink:"/tags/cron"},{label:"curl",permalink:"/tags/curl"},{label:"elasticsearch",permalink:"/tags/elasticsearch"},{label:"exif",permalink:"/tags/exif"},{label:"foxyproxy",permalink:"/tags/foxyproxy"},{label:"how-to",permalink:"/tags/how-to"},{label:"linux",permalink:"/tags/linux"},{label:"socksproxy",permalink:"/tags/socksproxy"},{label:"sonarqube",permalink:"/tags/sonarqube"},{label:"stress",permalink:"/tags/stress"},{label:"sysctl",permalink:"/tags/sysctl"}],version:"current",frontMatter:{tags:["aws","basicauth","cron","curl","elasticsearch","exif","foxyproxy","how-to","linux","socksproxy","sonarqube","stress","sysctl"]},sidebar:"tutorialSidebar",previous:{title:"SSH Tunnel on Windows 10 w/PuTTY and Burp Suite",permalink:"/technical/how-to/ssh-tunnel"},next:{title:"linux",permalink:"/technical/linux"}},i={},c=[{value:"Install stress for Amazon Linux 2",id:"install-stress-for-amazon-linux-2",level:2},{value:"Remove EXIF Metadata with exiftool",id:"remove-exif-metadata-with-exiftool",level:2},{value:"FoxyProxy SOCKS Proxy Configurations",id:"foxyproxy-socks-proxy-configurations",level:2},{value:"Fix &quot;vm.max_map_count is too low&quot;",id:"fix-vmmax_map_count-is-too-low",level:2},{value:"Basic Auth with cURL",id:"basic-auth-with-curl",level:2},{value:"Install cron Amazon Linux 2023",id:"install-cron-amazon-linux-2023",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-stress-for-amazon-linux-2"},"Install stress for Amazon Linux 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo amazon-linux-extras install epel -y  \nsudo yum install stress -y  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-11-20 22:46:11)",(0,a.kt)("br",{parentName:"p"}),"\n","#aws #linux #stress")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"remove-exif-metadata-with-exiftool"},"Remove EXIF Metadata with exiftool"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"exiftool -all= FileName  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-07-31 21:58:59)",(0,a.kt)("br",{parentName:"p"}),"\n","#exif #how-to")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"foxyproxy-socks-proxy-configurations"},"FoxyProxy SOCKS Proxy Configurations"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"foxy-proxy-socks-proxy-conf",src:o(4834).Z,width:"2500",height:"1062"}),"  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:02:59)",(0,a.kt)("br",{parentName:"p"}),"\n","#foxyproxy #how-to #socksproxy")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"fix-vmmax_map_count-is-too-low"},'Fix "vm.max_map_count is too low"'),(0,a.kt)("p",null,'To solve #sonarqube #elasticsearch max memory: "max virtual memory areas vm.max_map_count ',"[65530]"," is too low, increase to at least ","[262144]",'" error:'),(0,a.kt)("p",null,"Temporary solution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sysctl -w vm.max_map_count=262144  \n")),(0,a.kt)("p",null,"Permanent solution:"),(0,a.kt)("p",null,"Add this line to /etc/sysctl.conf file  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vm.max_map_count=262144  \n")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/51445846/elasticsearch-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-inc"},"https://stackoverflow.com/questions/51445846/elasticsearch-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-inc"),"  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:06:39)",(0,a.kt)("br",{parentName:"p"}),"\n","#elasticsearch #how-to #sonarqube #sysctl")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"basic-auth-with-curl"},"Basic Auth with cURL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl user:pass@host ...  \ncurl -u user:pass ...  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-07-31 22:00:14)",(0,a.kt)("br",{parentName:"p"}),"\n","#basicauth #curl #how-to")),(0,a.kt)("p",null,"--"),(0,a.kt)("h2",{id:"install-cron-amazon-linux-2023"},"Install cron Amazon Linux 2023"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo yum install cronie -y  \nsudo systemctl enable crond.service  \nsudo systemctl start crond.service  \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Unknown (2023-08-31 17:45:56)",(0,a.kt)("br",{parentName:"p"}),"\n","#aws #cron #linux")))}m.isMDXComponent=!0},4834:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/foxy-proxy-socks-proxy-conf-9247336b33ab7bb53325ef62282260e8.png"}}]);