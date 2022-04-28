"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[52],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6148:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="Vim",c={unversionedId:"vim",id:"vim",title:"Vim",description:'- This command will ng whitespace. To not delete lines containialso delete lines containing only whitespace, you can use \\W, which means "zero or more whitespace characters."g/^\\W$/d',source:"@site/docs/vim.md",sourceDirName:".",slug:"/vim",permalink:"/vim",editUrl:"https://github.com/mehmetka/notebook/blob/master/docs/vim.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uncategorized",permalink:"/uncategorized"}},m={},u=[],s={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vim"},"Vim"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This command will ng whitespace. To not delete lines containialso delete lines containing only whitespace, you can use \\W",(0,i.kt)("em",{parentName:"p"},', which means "zero or more whitespace characters.": :g/^\\W'),"$/d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This command deletes any line containing only zero or more whitespace characters. Lines that contain any other type of character are not deleted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"^, $, *, and \\W are special metacharacters used in regular expressions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Add every beginning of lines "//" ',(0,i.kt)("inlineCode",{parentName:"p"},":%s!^!//!"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"V select current line")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"d cut")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"y copy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Paste before cursor: P; paste after cursor: p")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"H, 0 start of line")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"gg start of document")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"G end of document")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"$ end of line")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},":syntax off")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},":set number")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sort and remote duplicate lines: :sort u")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Write commands in this file to run on each time: home/${whoami}/.vimrc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},":,666d -> delete lines from current 666th line.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://vim.fandom.com/wiki/Delete_all_lines_containing_a_pattern"},"https://vim.fandom.com/wiki/Delete_all_lines_containing_a_pattern"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://vim.fandom.com/wiki/Search_and_replace"},"https://vim.fandom.com/wiki/Search_and_replace"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/253380/how-to-insert-text-at-beginning-of-a-multi-line-selection-in-vi-vim"},"https://stackoverflow.com/questions/253380/how-to-insert-text-at-beginning-of-a-multi-line-selection-in-vi-vim"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the entire file 'g', search(/) for lines containing only the beginning '^' and ending '$' of a line, and delete 'd' those lines: "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":g/^$/d\n")))}f.isMDXComponent=!0}}]);