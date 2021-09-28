"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5791],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7127:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Introduction",sidebar_position:1},l="AOM: API Over Models",p={unversionedId:"api/intro",id:"api/intro",isDocsHomePage:!1,title:"Introduction",description:"aom - it is meta-framework made of typescript-decorators, which allows to fast and comfortable",source:"@site/docs/api/intro.md",sourceDirName:"api",slug:"/api/intro",permalink:"/docs/api/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"api",next:{title:"Working with Koa",permalink:"/docs/api/koa/index"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Concept",id:"concept",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aom-api-over-models"},"AOM: API Over Models"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aom")," - it is meta-framework made of typescript-decorators, which allows to fast and comfortable\ncreate safe api-services, using the principle of accumulation data layers, enriched with abstractions."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -s aom\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add aom\n")),(0,i.kt)("h2",{id:"concept"},"Concept"),(0,i.kt)("p",null,'The main idea sounds like: "don\'t duplicate the code, link the code". ',(0,i.kt)("inlineCode",{parentName:"p"},"aom")," allows to use data\nproccessing, made to cover most cases you need. At the same time ",(0,i.kt)("inlineCode",{parentName:"p"},"aom")," do not limit the developer\nin frames of the only framework, but gives the ability to use third-party libraries and packages."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aom"),' is not a "thing in itself "- a framework that operates exclusively on its own codebase and only\nworks in its own environment. Its important feature is the ability to combine with the "classic" code\non ',(0,i.kt)("inlineCode",{parentName:"p"},"koa"),", which makes it useful when migrating functionality already existing projects."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aom")," does not run code in an isolated environment, but generates structures that are compatible with\npopular libraries: ",(0,i.kt)("inlineCode",{parentName:"p"},"koa-router"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"koa-session")," and others, which allows, if necessary,\nkeep the existing code-stack, and comfortably extend it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"aom")," +",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," methodology."))}d.isMDXComponent=!0}}]);