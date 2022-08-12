"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[951],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={},s="notes",u={unversionedId:"technical/notes",id:"technical/notes",title:"notes",description:"000",source:"@site/docs/technical/notes.md",sourceDirName:"technical",slug:"/technical/notes",permalink:"/technical/notes",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/notes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"notes",permalink:"/technical/mysql/notes"},next:{title:"Log Fatal Errors to Different Log File",permalink:"/technical/php/log-fatal-errors"}},c={},p=[{value:"000",id:"000",level:2},{value:"001",id:"001",level:2},{value:"002",id:"002",level:2},{value:"003",id:"003",level:2},{value:"004",id:"004",level:2},{value:"005",id:"005",level:2},{value:"006",id:"006",level:2},{value:"Source",id:"source",level:3},{value:"007",id:"007",level:2},{value:"008 - Extend EC2 Instance Volume",id:"008---extend-ec2-instance-volume",level:2},{value:"009 Difference of AWS Public-Private Subnet",id:"009-difference-of-aws-public-private-subnet",level:2},{value:"010",id:"010",level:2},{value:"011",id:"011",level:2},{value:"013",id:"013",level:2},{value:"014",id:"014",level:2},{value:"016 - Using mkdocs",id:"016---using-mkdocs",level:2},{value:"017 - Create Profile on iTerm2 to automate ops",id:"017---create-profile-on-iterm2-to-automate-ops",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"notes"},"notes"),(0,r.kt)("h2",{id:"000"},"000"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iCloud path: /Users/username/Library/Mobile Documents/com~apple~CloudDocs"),(0,r.kt)("li",{parentName:"ul"},"Browser does not allow to use autocomplete on values which access by AJAX request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<noscript>")," is for browsers which block javascript"),(0,r.kt)("li",{parentName:"ul"},"Practical basic auth usage: ",(0,r.kt)("inlineCode",{parentName:"li"},"curl user:pass@host")),(0,r.kt)("li",{parentName:"ul"},"Remove EXIF Metadata with exiftool: ",(0,r.kt)("inlineCode",{parentName:"li"},"exiftool -all= FileName"))),(0,r.kt)("h2",{id:"001"},"001"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using getenv() and putenv() is strongly discouraged due to the fact that these functions are not thread safe, however\nit is still possible to instruct PHP dotenv to use these functions.")),(0,r.kt)("h2",{id:"002"},"002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block anything except zip files in .htaccess file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},'Deny from all\n\n<FilesMatch "\\.(zip)$">\nOrder Deny,Allow\n   Allow from all\n</FilesMatch>\n')),(0,r.kt)("h2",{id:"003"},"003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build for linux on macos")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GOOS=linux GOARCH=amd64 go build -o notification\n")),(0,r.kt)("h2",{id:"004"},"004"),(0,r.kt)("p",null,"(Gitlab) You can create access key and use it while doing git operations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://oauth2:access_key@gitlab.yourdomain.com/username/reponame.git\n")),(0,r.kt)("p",null,"But instead of this, use deploy keys."),(0,r.kt)("h2",{id:"005"},"005"),(0,r.kt)("p",null,"Using more than one ssh key, add below lines to this file: ~/.ssh/config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"IdentityFile ~/Desktop/.ssh/id_rsa\nIdentityFile ~/.ssh/id_rsa\n")),(0,r.kt)("h2",{id:"006"},"006"),(0,r.kt)("p",null,"Change SSH port:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Find "# Listen 22" line and remove sharp in this file: /etc/ssh/sshd_config'),(0,r.kt)("li",{parentName:"ul"},"Then change port number"),(0,r.kt)("li",{parentName:"ul"},"Restart sshd service, logout, login")),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/"},"https://www.howtoforge.com/how-to-install-gitlab-server-with-docker-on-ubuntu-1804/"))),(0,r.kt)("h2",{id:"007"},"007"),(0,r.kt)("p",null,"Udemy API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unarchived:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.udemy.com/api-2.0/users/me/subscribed-courses/?fields%5Bcourse%5D=%40min%2Cvisible_instructors%2Cimage_240x135%2Cfavorite_time%2Carchive_time%2Ccompletion_ratio%2Clast_accessed_time%2Cenrollment_time%2Cis_practice_test_course%2Cfeatures%2Cnum_collections%2Cpublished_title%2Cis_private%2Cis_published%2Cbuyable_object_type&fields%5Buser%5D=%40min%2Cjob_title&is_archived=false&ordering=-last_accessed&page_size=32"},"https://www.udemy.com/api-2.0/users/me/subscribed-courses/?fields%5Bcourse%5D=%40min%2Cvisible_instructors%2Cimage_240x135%2Cfavorite_time%2Carchive_time%2Ccompletion_ratio%2Clast_accessed_time%2Cenrollment_time%2Cis_practice_test_course%2Cfeatures%2Cnum_collections%2Cpublished_title%2Cis_private%2Cis_published%2Cbuyable_object_type&fields%5Buser%5D=%40min%2Cjob_title&is_archived=false&ordering=-last_accessed&page_size=32"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All\n",(0,r.kt)("a",{parentName:"p",href:"https://www.udemy.com/api-2.0/users/me/subscribed-courses/?page_size=132"},"https://www.udemy.com/api-2.0/users/me/subscribed-courses/?page_size=132")))),(0,r.kt)("h2",{id:"008---extend-ec2-instance-volume"},"008 - Extend EC2 Instance Volume"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extending OS file system. After you finish modifying volume, you need to extend OS file system in order to see your\nincreased volume size. The example below is the command I used for Ubuntu OS."),(0,r.kt)("li",{parentName:"ul"},"SSH into your instance."),(0,r.kt)("li",{parentName:"ul"},'Type "lsblk" -> Your increased volume will be shown just above your current volume, e.g. xvda1 is your current volume\nwith 30GB size and xvda with 40GB size.'),(0,r.kt)("li",{parentName:"ul"},'Extend the partition by typing "sudo growpart /dev/xvda1" (Note that dev/xvda is the partition name and 1 is the\npartition number.)'),(0,r.kt)("li",{parentName:"ul"},"Extend the volume by typing -> sudo resize2fs /dev/xvda1")),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@m.yunan.helmy/increase-the-size-of-ebs-volume-in-your-ec2-instance-3859e4be6cb7"},"https://medium.com/@m.yunan.helmy/increase-the-size-of-ebs-volume-in-your-ec2-instance-3859e4be6cb7")),(0,r.kt)("h2",{id:"009-difference-of-aws-public-private-subnet"},"009 Difference of AWS Public-Private Subnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/556363/what-is-the-difference-between-a-public-and-private-subnet-in-a-amazon-vpc"},"https://serverfault.com/questions/556363/what-is-the-difference-between-a-public-and-private-subnet-in-a-amazon-vpc")),(0,r.kt)("li",{parentName:"ul"},"PUBLIC SUBNET: If a subnet's traffic is routed to an internet gateway, the subnet is known as a public subnet."),(0,r.kt)("li",{parentName:"ul"},"PRIVATE SUBNET: If a subnet doesn't have a route to the internet gateway, the subnet is known as a private subnet.")),(0,r.kt)("h2",{id:"010"},"010"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'When you get "sh: Operation not permitted" error while trying to run shell script on\ncron ',(0,r.kt)("a",{parentName:"li",href:"https://osxdaily.com/2020/04/27/fix-cron-permissions-macos-full-disk-access/"},"https://osxdaily.com/2020/04/27/fix-cron-permissions-macos-full-disk-access/")),(0,r.kt)("li",{parentName:"ul"},'sonarqube elasticsearch max memory: "max virtual memory areas vm.max_map_count ',"[65530]"," is too low, increase to at\nleast ","[262144]",'"\nerror: ',(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/51445846/elasticsearch-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-inc"},"https://stackoverflow.com/questions/51445846/elasticsearch-max-virtual-memory-areas-vm-max-map-count-65530-is-too-low-inc"),(0,r.kt)("inlineCode",{parentName:"li"},"sysctl -w vm.max_map_count=262144"))),(0,r.kt)("h2",{id:"011"},"011"),(0,r.kt)("p",null,"Error Message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"configure: error: Unable to detect ICU prefix or no failed. Please verify ICU install prefix and make sure icu-config works\n")),(0,r.kt)("p",null,"Solution:",(0,r.kt)("br",{parentName:"p"}),"\n","Install ",(0,r.kt)("inlineCode",{parentName:"p"},"libicu-dev"),' package for "php:5.6.40-apache-jessie" image.'),(0,r.kt)("h2",{id:"013"},"013"),(0,r.kt)("p",null,"Error Message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"... es no alive nodes found in your cluster elasticsearch ...\n")),(0,r.kt)("p",null,"Solution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ setsebool httpd_can_network_connect 1\n")),(0,r.kt)("h2",{id:"014"},"014"),(0,r.kt)("p",null,"Keyword: ERR_OSSL_EVP_UNSUPPORTED",(0,r.kt)("br",{parentName:"p"}),"\n","Solution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NODE_OPTIONS=--openssl-legacy-provider next build && next export\n")),(0,r.kt)("h2",{id:"016---using-mkdocs"},"016 - Using mkdocs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install mkdocs\nmkdocs build\nmkdocs serve\n")),(0,r.kt)("p",null,"mkdocs.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"docs_dir: mdfiles # documents\nsite_dir: docs # build output\nsite_name: sitename\nsite_url: https://example.com\nnav:\n  - Home: 'index.md'\ntheme: readthedocs\n")),(0,r.kt)("h2",{id:"017---create-profile-on-iterm2-to-automate-ops"},"017 - Create Profile on iTerm2 to automate ops"),(0,r.kt)("p",null,"iterm'de profil olusturmak\n",(0,r.kt)("a",{parentName:"p",href:"https://iterm2.com/"},"https://iterm2.com/")),(0,r.kt)("p",null,'Profiles > Open Profiles > Edit profiles > +\'ya basip yeni profil ekle > Name\'i yaz or: "Testshopier SSH" > "Applications in terminal may change the title" kutucugu deselect > Title dropdown list\'inde "Profile Name" sec > "send text at start" input\'ina ssh yapilacak komutu yaz. or: "ssh -i shopiertestOpenssh ',(0,r.kt)("a",{parentName:"p",href:"mailto:ubuntu@18.195.102.98"},"ubuntu@18.195.102.98"),"\" (key file'in full path'i verilmeli) > done"),(0,r.kt)("p",null,'Bu islemler yapildiktan sonra en yukaridaki "Profiles" butonuna tiklandiginda olusturdugumuz profili gorecegiz ve tikladigimizda direkt ilgili makineye restart yapabilecek.\\n---\\nOOP muhabbeti sonrasi boyle bir diyalog gecti:'))}d.isMDXComponent=!0}}]);