"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[2130],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const r={tags:["aws","elasticbeanstalk","httpd","newrelic","phpfpm"]},s="Elasticbeanstalk PHP Environment",i={unversionedId:"technical/aws/elasticbeanstalk-php-env",id:"technical/aws/elasticbeanstalk-php-env",title:"Elasticbeanstalk PHP Environment",description:"Use exist security group",source:"@site/docs/technical/aws/elasticbeanstalk-php-env.md",sourceDirName:"technical/aws",slug:"/technical/aws/elasticbeanstalk-php-env",permalink:"/technical/aws/elasticbeanstalk-php-env",draft:!1,editUrl:"https://github.com/mehmetkanatt/notebook/blob/master/docs/technical/aws/elasticbeanstalk-php-env.md",tags:[{label:"aws",permalink:"/tags/aws"},{label:"elasticbeanstalk",permalink:"/tags/elasticbeanstalk"},{label:"httpd",permalink:"/tags/httpd"},{label:"newrelic",permalink:"/tags/newrelic"},{label:"phpfpm",permalink:"/tags/phpfpm"}],version:"current",frontMatter:{tags:["aws","elasticbeanstalk","httpd","newrelic","phpfpm"]},sidebar:"tutorialSidebar",previous:{title:"Send Docker Images to AWS ECR",permalink:"/technical/aws/ecr-push-image"},next:{title:"Accessing RDS from Lambda",permalink:"/technical/aws/lambda-accessing-rds"}},o={},c=[{value:"Use exist security group",id:"use-exist-security-group",level:2},{value:"Customize PHP-FPM settings",id:"customize-php-fpm-settings",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Create custom folder",id:"create-custom-folder",level:2},{value:"Install custom packages",id:"install-custom-packages",level:2},{value:"Install PHP extensions with PECL",id:"install-php-extensions-with-pecl",level:2},{value:"Set Auto Scaling Rules",id:"set-auto-scaling-rules",level:2},{value:"Set Deployment Type",id:"set-deployment-type",level:2},{value:"Add HTTPs Listener to ALB",id:"add-https-listener-to-alb",level:2},{value:"Add Custom Health Path",id:"add-custom-health-path",level:2},{value:"Cloudwatch Configurations",id:"cloudwatch-configurations",level:2},{value:"Install New Relic APM Agent",id:"install-new-relic-apm-agent",level:2},{value:"Install New Relic Infrastructure Agent",id:"install-new-relic-infrastructure-agent",level:2},{value:"Customizing httpd conf",id:"customizing-httpd-conf",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"elasticbeanstalk-php-environment"},"Elasticbeanstalk PHP Environment"),(0,l.kt)("h2",{id:"use-exist-security-group"},"Use exist security group"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"option_settings:  \n  aws:autoscaling:launchconfiguration    \n    SecurityGroups: securitygroup-name    \n")),(0,l.kt)("h2",{id:"customize-php-fpm-settings"},"Customize PHP-FPM settings"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'option_settings:  \n  aws:elasticbeanstalk:environment:proxy:  \n    ProxyServer: apache\n\nfiles:  \n  "/etc/php-fpm.d/z-99-custom.conf":  \n    mode: "000755"  \n    owner: root  \n    group: root  \n    content: |  \n      [www]  \n      pm=ondemand  \n      pm.max_children=50  \n      pm.start_servers=5  \n      pm.min_spare_servers=5  \n      pm.max_spare_servers=25\n\n  "/tmp/calc-php-fpm.sh":  \n    mode: "000755"  \n    owner: root  \n    group: root  \n    content: |  \n      #!/usr/bin/env bash\n\n      MAX_CHILDREN=$(free -m | awk \'FNR == 2 {print int(($2-350)/18 / 5) * 5}\')  \n      MIN_SPARE=$(($MAX_CHILDREN/5*1))  \n      MAX_SPARE=$(($MAX_CHILDREN/5*2))  \n      START=$(($MIN_SPARE + ($MAX_SPARE - $MIN_SPARE) / 2))\n\n      cat <<EOT > /etc/php-fpm.d/z-99-custom.conf  \n      [www]  \n      pm=dynamic  \n      pm.max_children=$MAX_CHILDREN  \n      pm.start_servers=$START  \n      pm.min_spare_servers=$MIN_SPARE  \n      pm.max_spare_servers=$MAX_SPARE  \n      EOT\n\ncommands:  \n  configure_www_conf:  \n    command: bash /tmp/calc-php-fpm.sh  \n')),(0,l.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"option_settings:  \n  aws:elasticbeanstalk:application:environment:  \n    DB_HOST: rds-host  \n    DB_USER: username  \n    DB_PASSWORD: password  \n    DB_DATABASE: database  \n")),(0,l.kt)("h2",{id:"create-custom-folder"},"Create custom folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'container_commands:  \n  01_create_tmp_folder:  \n    command: "mkdir /var/tmp && chown -R webapp:webapp /var/tmp"  \n    ignoreErrors: true  \n')),(0,l.kt)("h2",{id:"install-custom-packages"},"Install custom packages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:  \n  yum:  \n    packageName: [ ]  \n")),(0,l.kt)("h2",{id:"install-php-extensions-with-pecl"},"Install PHP extensions with PECL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"commands:  \n  install_mongo_driver_command:  \n    command: pecl install mongodb  \n    ignoreErrors: true  \n")),(0,l.kt)("h2",{id:"set-auto-scaling-rules"},"Set Auto Scaling Rules"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'option_settings:  \n  aws:autoscaling:asg:  \n    Availability Zones: Any  \n    MaxSize: "4"  \n    MinSize: "2"  \n')),(0,l.kt)("h2",{id:"set-deployment-type"},"Set Deployment Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"option_settings:  \n  aws:elasticbeanstalk:command:  \n    DeploymentPolicy: RollingWithAdditionalBatch  \n    BatchSizeType: Fixed  \n    BatchSize: 2  \n    IgnoreHealthCheck: true  \n")),(0,l.kt)("h2",{id:"add-https-listener-to-alb"},"Add HTTPs Listener to ALB"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"option_settings:  \n  aws:elbv2:listener:443:  \n    ListenerEnabled: 'true'  \n    Protocol: HTTPS  \n    SSLCertificateArns: certificate-arn  \n")),(0,l.kt)("h2",{id:"add-custom-health-path"},"Add Custom Health Path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"option_settings:  \n  aws:elasticbeanstalk:environment:process:default:  \n    HealthCheckPath: /health-check-route  \n")),(0,l.kt)("h2",{id:"cloudwatch-configurations"},"Cloudwatch Configurations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"option_settings:  \n  aws:elasticbeanstalk:cloudwatch:logs  \n    StreamLogs: true  \n  aws:elasticbeanstalk:cloudwatch:logs:health  \n    HealthStreamingEnabled: false  \n  aws:elasticbeanstalk:cloudwatch:logs:health  \n    DeleteOnTerminate: true  \n  aws:elasticbeanstalk:cloudwatch:logs:health  \n    RetentionInDays: 7  \n")),(0,l.kt)("h2",{id:"install-new-relic-apm-agent"},"Install New Relic APM Agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:  \n  yum:  \n    newrelic-php5: [ ]  \n  rpm:  \n    newrelic: http://yum.newrelic.com/pub/newrelic/el5/x86_64/newrelic-repo-5-3.noarch.rpm  \ncommands:  \n  configure_new_relic:  \n    command: newrelic-install install  \n    env:  \n      NR_INSTALL_SILENT: true  \n      NR_INSTALL_KEY: newrelic-key  \n")),(0,l.kt)("h2",{id:"install-new-relic-infrastructure-agent"},"Install New Relic Infrastructure Agent"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'files:  \n  "/etc/newrelic-infra.yml":  \n    mode: "000644"  \n    owner: root  \n    group: root  \n    content: |  \n      license_key: licence_key\n\ncommands:  \n  "01-agent-repository":  \n    command: sudo curl -o /etc/yum.repos.d/newrelic-infra.repo https://download.newrelic.com/infrastructure_agent/linux/yum/amazonlinux/2/x86_64/newrelic-infra.repo\n\n  "02-update-yum-cache":  \n    command: yum -q makecache -y --disablerepo=\'*\' --enablerepo=\'newrelic-infra\'\n\n  "03-run-installation-script":  \n    command: sudo yum install newrelic-infra -y  \n')),(0,l.kt)("h2",{id:"customizing-httpd-conf"},"Customizing httpd conf"),(0,l.kt)("p",null,".platform/httpd/conf.d/x.conf:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'CustomLog logs/access_log "%{X-Forwarded-For}i %l %u %t \\"%r\\" %>s %b \\"%{Referer}i\\" \\"%{User-Agent}i\\" [%T/%D]"  \n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 20:54:16)",(0,l.kt)("br",{parentName:"p"}),"\n","#aws #elasticbeanstalk #httpd #newrelic #phpfpm")))}u.isMDXComponent=!0}}]);