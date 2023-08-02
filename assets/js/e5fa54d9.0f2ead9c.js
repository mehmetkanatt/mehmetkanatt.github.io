"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[8244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,k=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return n?r.createElement(k,i(i({ref:t},h),{},{components:n})):r.createElement(k,i({ref:t},h))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<c;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const c={tags:["technical","elasticsearch"]},i="Single Node Elasticsearch with Docker",s={unversionedId:"technical/elasticsearch/single-node-elasticsearch-with-docker",id:"technical/elasticsearch/single-node-elasticsearch-with-docker",title:"Single Node Elasticsearch with Docker",description:"Run Elasticsearch With Authentication",source:"@site/docs/technical/elasticsearch/single-node-elasticsearch-with-docker.md",sourceDirName:"technical/elasticsearch",slug:"/technical/elasticsearch/single-node-elasticsearch-with-docker",permalink:"/technical/elasticsearch/single-node-elasticsearch-with-docker",draft:!1,editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/elasticsearch/single-node-elasticsearch-with-docker.md",tags:[{label:"technical",permalink:"/tags/technical"},{label:"elasticsearch",permalink:"/tags/elasticsearch"}],version:"current",frontMatter:{tags:["technical","elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"elasticsearch",permalink:"/category/elasticsearch"},next:{title:"notes",permalink:"/technical/elasticsearch/uncategorized"}},l={},o=[{value:"Run Elasticsearch With Authentication",id:"run-elasticsearch-with-authentication",level:2},{value:"Run Elasticsearch Without Authentication:",id:"run-elasticsearch-without-authentication",level:2},{value:"Add Plugin",id:"add-plugin",level:2}],h={toc:o},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"single-node-elasticsearch-with-docker"},"Single Node Elasticsearch with Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'version: \'3\'  \nservices:  \n  elasticsearch:  \n    image: elasticsearch:8.3.2  \n    restart: always  \n    environment:  \n      discovery.type: single-node  \n    container_name: elasticsearch  \n    ports:  \n      - "9200:9200"  \n      - "9300:9300"  \n')),(0,a.kt)("h2",{id:"run-elasticsearch-with-authentication"},"Run Elasticsearch With Authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker cp elasticsearch:/usr/share/elasticsearch/config/certs/http_ca.crt .  \ndocker cp http_ca.crt destination-container:/var  \ndocker exec -it elasticsearch bin/elasticsearch-reset-password -u elastic  \n")),(0,a.kt)("p",null,"get the 'elastic' user's password"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$client = ClientBuilder::create()  \n    ->setHosts(['https://es-host:9200'])  \n    ->setBasicAuthentication('elastic', 'password')  \n    ->setCABundle('/var/http_ca.crt-file-path')  \n    ->build();  \n")),(0,a.kt)("h2",{id:"run-elasticsearch-without-authentication"},"Run Elasticsearch Without Authentication:"),(0,a.kt)("p",null,"If you add this line to elasticsearch service environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"xpack.security.enabled: false")," like below",(0,a.kt)("br",{parentName:"p"}),"\n","then you don't need to use password and certificate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    environment:  \n      discovery.type: single-node  \n      xpack.security.enabled: false  \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$client = ClientBuilder::create()  \n    ->setHosts(['http://es-host:9200'])  \n    ->build();  \n")),(0,a.kt)("h2",{id:"add-plugin"},"Add Plugin"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker exec elasticsearch bin/elasticsearch-plugin install analysis-icu  \ndocker restart elasticsearch  \n")),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://elk-docker.readthedocs.io/#installing-elasticsearch-plugins"},"https://elk-docker.readthedocs.io/#installing-elasticsearch-plugins")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},">_ Unknown")," (2022-08-13 20:59:25)"),(0,a.kt)("p",null,"tags: technical, elasticsearch"))}u.isMDXComponent=!0}}]);