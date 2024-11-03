"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[3306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=l(a),d=r,b=s["".concat(p,".").concat(d)]||s[d]||u[d]||o;return a?n.createElement(b,c(c({ref:t},m),{},{components:a})):n.createElement(b,c({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={tags:["aws","docker","lambda","php"]},c="Lambda Function Container Image: PHP",i={unversionedId:"technical/aws/lambda-func-container-image-php",id:"technical/aws/lambda-func-container-image-php",title:"Lambda Function Container Image: PHP",description:"Complete guide is here//github.com/aws-samples/php-examples-for-aws-lambda/tree/master/0.7-PHP-Lambda-functions-with-Docker-container-images",source:"@site/docs/technical/aws/lambda-func-container-image-php.md",sourceDirName:"technical/aws",slug:"/technical/aws/lambda-func-container-image-php",permalink:"/technical/aws/lambda-func-container-image-php",draft:!1,editUrl:"https://github.com/mehmetkanatt/notebook/blob/master/docs/technical/aws/lambda-func-container-image-php.md",tags:[{label:"aws",permalink:"/tags/aws"},{label:"docker",permalink:"/tags/docker"},{label:"lambda",permalink:"/tags/lambda"},{label:"php",permalink:"/tags/php"}],version:"current",frontMatter:{tags:["aws","docker","lambda","php"]},sidebar:"tutorialSidebar",previous:{title:"Accessing RDS from Lambda",permalink:"/technical/aws/lambda-accessing-rds"},next:{title:"Lambda Function Container Image: Python",permalink:"/technical/aws/lambda-func-container-image-python"}},p={},l=[],m={toc:l},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lambda-function-container-image-php"},"Lambda Function Container Image: PHP"),(0,r.kt)("p",null,"Complete guide is here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/php-examples-for-aws-lambda/tree/master/0.7-PHP-Lambda-functions-with-Docker-container-images"},"https://github.com/aws-samples/php-examples-for-aws-lambda/tree/master/0.7-PHP-Lambda-functions-with-Docker-container-images")),(0,r.kt)("p",null,"I wrote steps and forked the repository in case of the source deleted: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mehmetka/php-examples-for-aws-lambda"},"https://github.com/mehmetka/php-examples-for-aws-lambda")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'docker build -t php-lambda .\n# Run container  \ndocker run -p 9000:8080 -v $PWD:/var/task php-lambda:latest\n# Trig lambda function locally  \ncurl "http://localhost:9000/2015-03-31/functions/function/invocations" -d \'{"queryStringParameters": {"name":"Ben"}}\'  \n')),(0,r.kt)("p",null,"You can use this image ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/amazon/aws-lambda-provided"},"https://hub.docker.com/r/amazon/aws-lambda-provided")," instead of public.ecr.aws/lambda/provided if you get authorization problem."),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/compute/building-php-lambda-functions-with-docker-container-images"},"https://aws.amazon.com/blogs/compute/building-php-lambda-functions-with-docker-container-images"),"  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unknown (2023-09-25 16:22:58)",(0,r.kt)("br",{parentName:"p"}),"\n","#aws #docker #lambda #php")))}u.isMDXComponent=!0}}]);