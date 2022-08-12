"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[129],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,f=h["".concat(o,".").concat(d)]||h[d]||p[d]||c;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1610:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),i=["components"],s={},o="Notes",l={unversionedId:"technical/elasticsearch/notes",id:"technical/elasticsearch/notes",title:"Notes",description:"Run Elasticsearch With Authentication",source:"@site/docs/technical/elasticsearch/notes.md",sourceDirName:"technical/elasticsearch",slug:"/technical/elasticsearch/notes",permalink:"/technical/elasticsearch/notes",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/technical/elasticsearch/notes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notes",permalink:"/technical/docker/notes"},next:{title:"Notes",permalink:"/technical/git/notes"}},u={},p=[{value:"Run Elasticsearch With Authentication",id:"run-elasticsearch-with-authentication",level:2},{value:"Run Elasticsearch Without Authentication:",id:"run-elasticsearch-without-authentication",level:2},{value:"Add Plugin",id:"add-plugin",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"notes"},"Notes"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-dockerfile"},'version: \'3\'\nservices:\n  elasticsearch:\n    image: elasticsearch:8.3.2\n    restart: always\n    environment:\n      discovery.type: single-node\n    container_name: elasticsearch\n    ports:\n      - "9200:9200"\n      - "9300:9300"\n')),(0,c.kt)("h2",{id:"run-elasticsearch-with-authentication"},"Run Elasticsearch With Authentication"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker cp elasticsearch:/usr/share/elasticsearch/config/certs/http_ca.crt .\ndocker cp http_ca.crt destination-container:/var\ndocker exec -it elasticsearch bin/elasticsearch-reset-password -u elastic\n")),(0,c.kt)("p",null,"get the 'elastic' user's password"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-php"},"$client = ClientBuilder::create()\n    ->setHosts(['https://es-host:9200'])\n    ->setBasicAuthentication('elastic', 'password')\n    ->setCABundle('/var/http_ca.crt-file-path')\n    ->build();\n")),(0,c.kt)("h2",{id:"run-elasticsearch-without-authentication"},"Run Elasticsearch Without Authentication:"),(0,c.kt)("p",null,"If you add this line to elasticsearch service environment variables ",(0,c.kt)("inlineCode",{parentName:"p"},"xpack.security.enabled: false"),"\nthen you don't need to use password and certificate"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-php"},"$client = ClientBuilder::create()\n    ->setHosts(['http://es-host:9200'])\n    ->build();\n")),(0,c.kt)("h2",{id:"add-plugin"},"Add Plugin"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec elasticsearch bin/elasticsearch-plugin install analysis-icu\ndocker restart elasticsearch\n")),(0,c.kt)("p",null,"Source: ",(0,c.kt)("a",{parentName:"p",href:"https://elk-docker.readthedocs.io/#installing-elasticsearch-plugins"},"https://elk-docker.readthedocs.io/#installing-elasticsearch-plugins")))}d.isMDXComponent=!0}}]);