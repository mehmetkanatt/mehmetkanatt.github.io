"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[9077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,y=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={tags:["gitlab"]},l="Deploy with Gitlab Runner",o={unversionedId:"technical/gitlab/deploy-with-gitlab-ci",id:"technical/gitlab/deploy-with-gitlab-ci",title:"Deploy with Gitlab Runner",description:"Define these variables on Gitlab as CI/CD variables",source:"@site/docs/technical/gitlab/deploy-with-gitlab-ci.md",sourceDirName:"technical/gitlab",slug:"/technical/gitlab/deploy-with-gitlab-ci",permalink:"/technical/gitlab/deploy-with-gitlab-ci",draft:!1,editUrl:"https://github.com/mehmetkanatt/notebook/blob/master/docs/technical/gitlab/deploy-with-gitlab-ci.md",tags:[{label:"gitlab",permalink:"/tags/gitlab"}],version:"current",frontMatter:{tags:["gitlab"]},sidebar:"tutorialSidebar",previous:{title:"gitlab",permalink:"/category/gitlab"},next:{title:"Install Gitlab Runner",permalink:"/technical/gitlab/install-gitlab-runner"}},c={},s=[{value:"Define these variables on Gitlab as CI/CD variables",id:"define-these-variables-on-gitlab-as-cicd-variables",level:2},{value:"By Running Commands Directly",id:"by-running-commands-directly",level:2},{value:"By Running Script",id:"by-running-script",level:2},{value:"Runner Script",id:"runner-script",level:2},{value:"Deploy Script (Runs on server connected with SSH)",id:"deploy-script-runs-on-server-connected-with-ssh",level:2}],p={toc:s},u="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-with-gitlab-runner"},"Deploy with Gitlab Runner"),(0,i.kt)("h2",{id:"define-these-variables-on-gitlab-as-cicd-variables"},"Define these variables on Gitlab as CI/CD variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PRIVATE_KEY"),(0,i.kt)("li",{parentName:"ul"},"SERVER_IP")),(0,i.kt)("h2",{id:"by-running-commands-directly"},"By Running Commands Directly"),(0,i.kt)("p",null,".gitlab-ci.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'before_script:  \n  - echo "$PRIVATE_KEY" > ~/generic.pem  \n  - chmod 600 ~/generic.pem  \n  - \'echo -e "Host *\\n\\tStrictHostKeyChecking no\\n\\n" > ~/.ssh/config\'\n\nstages:  \n  - deploy\n\ndeploy:  \n  only:  \n    - master  \n  stage: deploy  \n  script:  \n    - ssh -i ~/generic.pem ec2-user@$SERVER_IP "do deployment stuff"  \n    - rm ~/generic.pem  \n  tags:  \n    - cd  \n')),(0,i.kt)("h2",{id:"by-running-script"},"By Running Script"),(0,i.kt)("p",null,".gitlab-ci.yml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"before_script:  \n  - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'\n\nstages:  \n  - deploy\n\ndeploy-to-test:  \n  only:  \n    - master  \n  stage: deploy  \n  script:  \n    - bash runner-script.sh # shell script that will run on \"deploy\" runner  \n  tags:  \n    - deploy # run on a specific runner  \n")),(0,i.kt)("h2",{id:"runner-script"},"Runner Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\n\neval $(ssh-agent -s)  \necho \"$PRIVATE_KEY\" | tr -d '\\r' | ssh-add - > /dev/null\n\nmkdir -p ~/.ssh  \ntouch ~/.ssh/config  \necho -e \"Host *\\n\\tStrictHostKeyChecking no\\n\\n\" >> ~/.ssh/config\n\nssh username@$SERVER_IP 'bash -s' < deploy-script.sh  \n")),(0,i.kt)("h2",{id:"deploy-script-runs-on-server-connected-with-ssh"},"Deploy Script (Runs on server connected with SSH)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/bin/bash\n\n# deployment steps  \n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unknown (2022-08-13 21:01:56)",(0,i.kt)("br",{parentName:"p"}),"\n","#gitlab")))}b.isMDXComponent=!0}}]);