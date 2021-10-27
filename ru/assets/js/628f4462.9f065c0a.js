"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5127],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},293:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],s={title:"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432",sidebar_position:5},l=void 0,d={unversionedId:"api/koa/inherits",id:"api/koa/inherits",isDocsHomePage:!1,title:"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432",description:"\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/api/koa/inherits.md",sourceDirName:"api/koa",slug:"/api/koa/inherits",permalink:"/ru/docs/api/koa/inherits",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432",sidebar_position:5},sidebar:"api",previous:{title:"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432",permalink:"/ru/docs/api/koa/parameters"},next:{title:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 OpenAPI",permalink:"/ru/docs/api/openapi/index"}},p=[{value:"\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430-\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 <code>ThisRef</code>",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-thisref",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430-\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f"},"\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"aom")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0443 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0431\u043e\u0431\u0449\u0435\u043d\u043d\u044b\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0435 \u0443\u0437\u043b\u044b,\n\u043b\u043e\u0433\u0438\u043a\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0447\u0430\u0441\u0442\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438."),(0,o.kt)("p",null,"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b\u043c \u0434\u043b\u044f JavaScript \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c: \u0437\u0430 \u0441\u0447\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"extends"),"."),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0438 \u0434\u043b\u044f \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Controller"),", \u0442\u0430\u043a \u043a\u0430\u043a\n\u0438\u043c\u0435\u043d\u043d\u043e \u0432 \u043d\u0435\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043f\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u043c\u0443 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0443 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432, \u0442\u043e\u0447\u0435\u043a \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f,\nmiddleware \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u043c \u043a\u043b\u0430\u0441\u0441\u0435 \u0435\u0441\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u044b, \u043f\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0430\u044e\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430, \u0442\u043e\n\u043e\u043d\u0438 \u043e\u0441\u0442\u0430\u043d\u0443\u0442\u0441\u044f \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439. \u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e, \u0435\u0441\u043b\u0438 \u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u043c \u043a\u043b\u0430\u0441\u0441\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint"),"-\u044b\n\u0438\u043b\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge"),"-\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u0438\u043c\u0435\u044e\u0449\u0438\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u043c\u0435\u0442\u043e\u0434\u044b, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c, \u0442\u043e \u043f\u0440\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u043d\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442\n\u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u044b. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043f\u0440\u0438 \u0441\u0431\u043e\u0440\u043a\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u044b \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b\n\u0431\u044b\u043b\u0438 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u044b \u043f\u0440\u0438 \u0438\u0445 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0438."),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0438 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u0442\u0430\u043a\u0436\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u0432 OpenApi-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438. \u0412\u0430\u0436\u043d\u044b\u043c \u043c\u043e\u043c\u0435\u043d\u0442\u043e\u043c \u043f\u0440\u0438 \u044d\u0442\u043e\u043c\n\u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0441\u0445\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430. \u0414\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u044d\u0442\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f\n\u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"ThisRef"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0430\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438.\n\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u0432 ",(0,o.kt)("a",{parentName:"p",href:"#thisref"},"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// CatalogsBase.ts\n// \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u0443\u0435\u043c \u043e\u0431\u0449\u0438\u0439 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043b\u0430\u0441\u0441\n\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f `ThisRef` \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0444\u0438\u043b\u044c\u0442\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b \u043a \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\nconst CatalogsQuery = ThisRef(<T extends typeof CatalogsBase>({ model }: T) => $SafeQuery(model));\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f `ThisRef` \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0444\u0438\u043b\u044c\u0442\u0440\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b \u043a \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u043c\nconst CatalogsBody = ThisRef(<T extends typeof CatalogsBase>({ model }: T) => $SafeBody(model));\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f `ThisRef` \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u0441\u0445\u0435\u043c\u0443 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438 OpenApi\nconst CatalogsSchema = ThisRef(<T extends typeof CatalogsBase>({ model }: T) => model);\n\n// \u043e\u043f\u0438\u0448\u0435\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u044b\n@Controller()\nclass CatalogsBase {\n  // \u0443\u043a\u0430\u0436\u0435\u043c, \u043a\u0430\u043a\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 \u043a\u043b\u0430\u0441\u0441\u0430\n  document: models.Categories | models.Brands;\n  // \u0443\u043a\u0430\u0436\u0435\u043c \u0432 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u043c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0445\n  static model: typeof models.Categories | typeof models.Brands;\n  // \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\n  static id = "id";\n\n  static toString() {\n    return `:${this.id}(.{24})`;\n  }\n\n  // \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c endpoint \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445\n  @Get()\n  @Summary("\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445")\n  @Responses({\n    status: 200,\n    isArray: true,\n    // \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c `ThisRef` \u043e\u0431\u0435\u0440\u0442\u043a\u0443 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0441\u0431\u043e\u0440\u043a\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432\n    schema: CatalogsSchema,\n  })\n  // \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u043d\u0435\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f\n  static Index(@Query(CatalogsQuery) query) {\n    return this.model.find({ ...query });\n  }\n\n  // \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c endpoint \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\n  @Post()\n  @Summary("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")\n  @RequestBody({\n    schema: CatalogsSchema,\n  })\n  @Responses({\n    status: 200,\n    schema: CatalogsSchema,\n  })\n  static Add(@Body(CatalogsBody) body) {\n    return this.model.create({ ...body });\n  }\n\n  // \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c middleware \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\n  @Middleware()\n  @PathParameters({\n    [`${CatalogsBase}`]: {\n      name: CatalogsBase.id,\n      schema: { type: "string", pattern: "^[0-9,a-f,A-F]{24}$" },\n      description: "\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440",\n    },\n  })\n  @Responses({\n    status: 404,\n    schema: NotFoundError,\n  })\n  static async Check(\n    @This() catalog: CatalogsBase,\n    @Params(CatalogsBase.id) id,\n    @Next() next,\n    @Err() err\n  ) {\n    catalog.document = await this.model.findById(id);\n    if (catalog.document) {\n      return next();\n    }\n    return err("document not found", 404);\n  }\n\n  // \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 endpoint \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\n  @Patch(`${CatalogsBase}`)\n  @Summary("\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")\n  @Use(CatalogsBase.Check)\n  @RequestBody({\n    schema: CatalogsSchema,\n  })\n  @Responses({\n    status: 200,\n    schema: CatalogsSchema,\n  })\n  static async Update(@This() { document }: CatalogsBase, @Body(CatalogsBody) body) {\n    Object.assign(document, { ...body });\n    await document.save();\n    return document;\n  }\n\n  // \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 endpoint \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\n  @Delete(`${CatalogsBase}`)\n  @Summary("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445")\n  @Use(CatalogsBase.Check)\n  @Responses({\n    status: 200,\n    schema: MessageResponse,\n  })\n  static async Delete(@This() { document }: CatalogsBase, @Body(CatalogsBody) body) {\n    await document.remove();\n    return { message: "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0443\u0434\u0430\u043b\u0435\u043d", document };\n  }\n}\n\n// \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u0443\u0437\u0435\u043b `Categories`, \u0443\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043e\u0442 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430\n@Controller()\n@AddTag("\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432")\n@Use(Categories.Prepare)\nclass Categories extends CatalogsBase {\n  static model = models.Categories;\n\n  @UseTag(Categories)\n  @Middleware()\n  static Prepare(@Next() next) {\n    return next();\n  }\n}\n\n// \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u0443\u0437\u0435\u043b `Brands`, \u0443\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043e\u0442 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430\n@Controller()\n@AddTag("\u0411\u0440\u0435\u043d\u0434\u044b \u0442\u043e\u0432\u0430\u0440\u043e\u0432")\n@Use(Brands.Prepare)\nclass Brands extends CatalogsBase {\n  static model = models.Brands;\n\n  @UseTag(Brands)\n  @Middleware()\n  static Prepare(@Next() next) {\n    return next();\n  }\n}\n\n// \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0435 \u0443\u0437\u043b\u044b\n@Bridge("/categories", Categories)\n@Bridge("/brands", Brands)\n@AddTag("\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u043c")\n@Use(Catalogs.Init)\nclass Catalogs {\n  //..\n  @UseTag(Catalogs)\n  @MergeNextTags()\n  @Middleware()\n  static Init(@Next() next) {\n    return next();\n  }\n}\n')),(0,o.kt)("p",null,"\u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0434\u0432\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u0443\u0437\u043b\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"Categories")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"Brands"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044e\u0442\n\u0432\u0441\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint"),"-\u044b \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware"),", \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430\n\u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"@This"),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," \u0432 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u0430\u0445 \u043a\u043b\u0430\u0441\u0441\u0430."),(0,o.kt)("p",null,"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"aom")," \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge"),"-\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0430\u043a\u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u044b \u043a \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u043c\n\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u043c \u0443\u0437\u043b\u0430\u043c. \u041e\u0434\u043d\u0430\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Bridge"),' \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u043e\u0433\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445\n\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432, \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d "\u043a\u0430\u043a \u0435\u0441\u0442\u044c" \u043d\u0430 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u044b, \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0436\u043d\u044b\u0445\n\u043a\u0430\u0441\u043a\u0430\u0434\u043d\u044b\u0445 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f.'),(0,o.kt)("a",{name:"thisref"}),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-thisref"},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"h2"},"ThisRef")),(0,o.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"ThisRef")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043e\u0431\u0435\u0440\u0442\u043a\u0443-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u043e\u0447\u0435\u0440\u043d\u0435\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\n\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430."),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u044b\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u0434\u0440\u0443\u0433\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor"),"\n\u0438\u0437 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043a\u0443\u0440\u0441\u043e\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0432 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u044f\u043c\u043e\u0439 \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a \u043a\u043b\u0430\u0441\u0441\u0430, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f\n\u0434\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f."),(0,o.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u0430\u0445:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@Body")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@Query")," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@Responses")," \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"li"},"schema"),", \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c JSON-\u0441\u0445\u0435\u043c\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@RequestBody")," \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"li"},"schema"),", \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c JSON-\u0441\u0445\u0435\u043c\u0443 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430")),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u043b\u0430\u0441\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0430\u043c\u043e\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0433\u043e \u0443\u0437\u043b\u0430, \u0442\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"ThisRef"),"\n\u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430, \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0432 \u044d\u0442\u043e\u0439\n\u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438."))}u.isMDXComponent=!0}}]);