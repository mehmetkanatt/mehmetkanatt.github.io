"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[178],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,b=f["".concat(u,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,c(c({ref:t},l),{},{components:r})):n.createElement(b,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9021:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},u="Create S3 Bucket",s={unversionedId:"terraform/create-s3-bucket",id:"terraform/create-s3-bucket",title:"Create S3 Bucket",description:'If you set \'acl = "public-read"\', your buckets give "list" permission to anybody, by default.',source:"@site/docs/terraform/create-s3-bucket.md",sourceDirName:"terraform",slug:"/terraform/create-s3-bucket",permalink:"/terraform/create-s3-bucket",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/terraform/create-s3-bucket.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create EC2 Instance with PHP 7.4 and apache2 Installations",permalink:"/terraform/create-ec2-instance"},next:{title:"Install Terraform on Mac:",permalink:"/terraform/install"}},l={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-s3-bucket"},"Create S3 Bucket"),(0,a.kt)("p",null,'If you set \'acl = "public-read"\', your buckets give "list" permission to anybody, by default.\nWhen a bucket gives "list" permission to public, anybody can list all contents of bucket.\nThat\'s why, acl must be set as "private"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 3.27"\n    }\n  }\n\n  required_version = ">= 0.14.9"\n}\n\nprovider "aws" {\n  profile = "default"\n  region  = "eu-central-1"\n}\n\nresource "aws_s3_bucket" "b" {\n  bucket = "unique-bucket-name"\n  acl    = "private"\n\n  cors_rule {\n    allowed_headers = ["*"]\n    allowed_methods = ["GET"]\n    allowed_origins = ["*"]\n  }\n  tags = {\n    Name = "bucket-tag"\n  }\n  policy = <<POLICY\n  {\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Statement1",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": "s3:GetObject",\n            "Resource": "arn:aws:s3:::unique-bucket-name/*"\n        }\n    ]\n}\n  POLICY\n}\n')))}m.isMDXComponent=!0}}]);