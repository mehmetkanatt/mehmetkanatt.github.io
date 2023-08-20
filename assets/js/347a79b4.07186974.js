"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[2178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={tags:["aws","elasticbeanstalk","httpd","technical"]},o="uncategorized",i={unversionedId:"technical/aws/uncategorized",id:"technical/aws/uncategorized",title:"uncategorized",description:"Add new SSH public key to AWS EC2 Instance:",source:"@site/docs/technical/aws/uncategorized.md",sourceDirName:"technical/aws",slug:"/technical/aws/uncategorized",permalink:"/technical/aws/uncategorized",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/aws/uncategorized.md",tags:[{label:"aws",permalink:"/tags/aws"},{label:"elasticbeanstalk",permalink:"/tags/elasticbeanstalk"},{label:"httpd",permalink:"/tags/httpd"},{label:"technical",permalink:"/tags/technical"}],version:"current",frontMatter:{tags:["aws","elasticbeanstalk","httpd","technical"]},sidebar:"tutorialSidebar",previous:{title:"Customizing Lambda with Docker Image",permalink:"/technical/aws/lambda-docker-image"},next:{title:"docker",permalink:"/category/docker"}},s={},u=[{value:"Difference of AWS Public-Private Subnet",id:"difference-of-aws-public-private-subnet",level:2},{value:"Extend EC2 Instance Volume",id:"extend-ec2-instance-volume",level:2},{value:"If you cannot delete Elasticbeanstalk environment",id:"if-you-cannot-delete-elasticbeanstalk-environment",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uncategorized"},"uncategorized"),(0,r.kt)("p",null,"Add new SSH public key to AWS EC2 Instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create new Key-Pair on AWS Console (private key will be downloaded automatically.)"),(0,r.kt)("li",{parentName:"ul"},"Change permissions of private key: ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod 600 private-key.pem")),(0,r.kt)("li",{parentName:"ul"},"Generate public key from private key: ",(0,r.kt)("inlineCode",{parentName:"li"},"ssh-keygen -y -f private-key.pem")),(0,r.kt)("li",{parentName:"ul"},"SSH into destination server"),(0,r.kt)("li",{parentName:"ul"},'Add public key to "~/.ssh/authorized_keys" file',(0,r.kt)("br",{parentName:"li"}),"Done \\m/")),(0,r.kt)("p",null,"You can use more than one public key to ssh if you want or delete old ones"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-key-pair.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replacing-key-pair.html")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2023-08-17 17:31:35)"),(0,r.kt)("p",null,"tags: aws, technical"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Get EC2 Instance Type inside of instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl http://169.254.169.254/latest/meta-data/instance-type  \n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2023-08-17 17:03:50)"),(0,r.kt)("p",null,"tags: aws, technical"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"AWS ElasticBeanstalk PHP 7.4 Environment httpd.conf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...  \n<IfModule worker.c>  \nStartServers        10  \nMinSpareThreads     240  \nMaxSpareThreads     240  \nServerLimit         10  \nMaxRequestWorkers          250  \nMaxConnectionsPerChild 1000000  \n</IfModule>  \n...  \n")),(0,r.kt)("p",null,"Same for t4g.micro and t4g.xlarge."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2023-08-04 23:22:46)"),(0,r.kt)("p",null,"tags: aws, elasticbeanstalk, httpd, technical"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"extending-ec2-volume-size"},"Extending EC2 Volume Size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"lsblk # find root volume name\n\nNAME          MAJ:MIN RM SIZE RO TYPE MOUNTPOINT  \nnvme0n1       259:0    0  64G  0 disk  \n|-nvme0n1p1   259:1    0  64G  0 part /  \n`-nvme0n1p128 259:2    0   1M  0 part  \n")),(0,r.kt)("p",null,"Volume Name: nvme0n1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'df -hT # find volume type, should be "xfs" \n\nFilesystem     Type      Size  Used Avail Use% Mounted on  \ndevtmpfs       devtmpfs  3.9G     0  3.9G   0% /dev  \ntmpfs          tmpfs     3.9G     0  3.9G   0% /dev/shm  \ntmpfs          tmpfs     3.9G  460K  3.9G   1% /run  \ntmpfs          tmpfs     3.9G     0  3.9G   0% /sys/fs/cgroup  \n/dev/nvme0n1p1 xfs        64G   15G   50G  24% /  \ntmpfs          tmpfs     784M     0  784M   0% /run/user/1000  \n')),(0,r.kt)("p",null,"Volume type: xfs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo growpart /dev/nvme0n1 1  \nsudo xfs_growfs -d /  \n")),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recognize-expanded-volume-linux.html")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2023-07-31 21:52:51)"),(0,r.kt)("p",null,"tags: aws, technical"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"difference-of-aws-public-private-subnet"},"Difference of AWS Public-Private Subnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://serverfault.com/questions/556363/what-is-the-difference-between-a-public-and-private-subnet-in-a-amazon-vpc"},"https://serverfault.com/questions/556363/what-is-the-difference-between-a-public-and-private-subnet-in-a-amazon-vpc")),(0,r.kt)("li",{parentName:"ul"},"PUBLIC SUBNET: If a subnet's traffic is routed to an internet gateway, the subnet is known as a public subnet."),(0,r.kt)("li",{parentName:"ul"},"PRIVATE SUBNET: If a subnet doesn't have a route to the internet gateway, the subnet is known as a private subnet.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:10:25)"),(0,r.kt)("p",null,"tags: aws, technical"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extend-ec2-instance-volume"},"Extend EC2 Instance Volume"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extending OS file system. After you finish modifying volume, you need to extend OS file system in order to see your",(0,r.kt)("br",{parentName:"li"}),"increased volume size. The example below is the command I used for Ubuntu OS."),(0,r.kt)("li",{parentName:"ul"},"SSH into your instance."),(0,r.kt)("li",{parentName:"ul"},'Type "lsblk" -> Your increased volume will be shown just above your current volume, e.g. xvda1 is your current volume',(0,r.kt)("br",{parentName:"li"}),"with 30GB size and xvda with 40GB size."),(0,r.kt)("li",{parentName:"ul"},'Extend the partition by typing "sudo growpart /dev/xvda1" (Note that dev/xvda is the partition name and 1 is the',(0,r.kt)("br",{parentName:"li"}),"partition number.)"),(0,r.kt)("li",{parentName:"ul"},"Extend the volume by typing -> sudo resize2fs /dev/xvda1")),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@m.yunan.helmy/increase-the-size-of-ebs-volume-in-your-ec2-instance-3859e4be6cb7"},"https://medium.com/@m.yunan.helmy/increase-the-size-of-ebs-volume-in-your-ec2-instance-3859e4be6cb7")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 21:10:06)"),(0,r.kt)("p",null,"tags: aws, technical"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"if-you-cannot-delete-elasticbeanstalk-environment"},"If you cannot delete Elasticbeanstalk environment"),(0,r.kt)("p",null,"You need to go to your CloudFormation console and retry deletion of the CloudFormation stack which the Beanstalk",(0,r.kt)("br",{parentName:"p"}),"\n","environment used. The deletion may fail, but after retrying it will prompt you if you want to skip the",(0,r.kt)("br",{parentName:"p"}),"\n",'"AWSEBRDSDatabase" resource that failed to delete. You can just confirm that you want to skip deletion (since you have',(0,r.kt)("br",{parentName:"p"}),"\n","actually already deleted it). This should remove the CloudFormation stack. Then you can retry deletion of the Beanstalk",(0,r.kt)("br",{parentName:"p"}),"\n","environment from the Beanstalk console."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 20:56:36)"),(0,r.kt)("p",null,"tags: aws, technical"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aws api gateway uses token bucket algorithm for rate limiting"),(0,r.kt)("li",{parentName:"ul"},"s3 bucket name best practices: images.domain.com")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 20:56:20)"),(0,r.kt)("p",null,"tags: aws, technical"))}m.isMDXComponent=!0}}]);