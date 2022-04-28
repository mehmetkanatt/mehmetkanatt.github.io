"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[220],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=c(n),d=i,f=b["".concat(s,".").concat(d)]||b[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},s="Deploy with Gitlab Runner",c={unversionedId:"gitlab/gitlab-ci",id:"gitlab/gitlab-ci",title:"Deploy with Gitlab Runner",description:"Define these variables on Gitlab as CI/CD variables",source:"@site/docs/gitlab/gitlab-ci.md",sourceDirName:"gitlab",slug:"/gitlab/gitlab-ci",permalink:"/gitlab/gitlab-ci",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/gitlab/gitlab-ci.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/rdbms/mysql-notes"},next:{title:"Notes",permalink:"/git/notes"}},u={},p=[{value:"Define these variables on Gitlab as CI/CD variables",id:"define-these-variables-on-gitlab-as-cicd-variables",level:2},{value:".gitlab-ci.yml File",id:"gitlab-ciyml-file",level:2},{value:"Runner Script",id:"runner-script",level:2},{value:"Deploy Script (Runs on server connected with SSH)",id:"deploy-script-runs-on-server-connected-with-ssh",level:2}],b={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-with-gitlab-runner"},"Deploy with Gitlab Runner"),(0,a.kt)("h2",{id:"define-these-variables-on-gitlab-as-cicd-variables"},"Define these variables on Gitlab as CI/CD variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PUBLIC_KEY"),(0,a.kt)("li",{parentName:"ul"},"DEPLOY_TO")),(0,a.kt)("h2",{id:"gitlab-ciyml-file"},".gitlab-ci.yml File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"before_script:\n  - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'\n\nstages:\n  - deploy-to-test\n\ndeploy-to-test:\n  only:\n    - master\n  stage: deploy-to-test\n  script:\n    - bash runner-script.sh # shell script that will run on \"deploy\" runner\n  tags:\n    - deploy # run on a specific runner\n")),(0,a.kt)("h2",{id:"runner-script"},"Runner Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n\neval $(ssh-agent -s)\necho \"$PUBLIC_KEY\" | tr -d '\\r' | ssh-add - > /dev/null\n\nmkdir -p ~/.ssh\ntouch ~/.ssh/config\necho -e \"Host *\\n\\tStrictHostKeyChecking no\\n\\n\" >> ~/.ssh/config\n\nssh username@$DEPLOY_TO 'bash -s' < deploy-script.sh\n")),(0,a.kt)("h2",{id:"deploy-script-runs-on-server-connected-with-ssh"},"Deploy Script (Runs on server connected with SSH)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n\n# deployment steps\n")))}d.isMDXComponent=!0}}]);