"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2783],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3854:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Request body structure",sidebar_position:4.5},p=void 0,c={unversionedId:"api/openapi/request-body",id:"api/openapi/request-body",isDocsHomePage:!1,title:"Request body structure",description:"RequestBody",source:"@site/docs/api/openapi/request-body.md",sourceDirName:"api/openapi",slug:"/api/openapi/request-body",permalink:"/docs/api/openapi/request-body",tags:[],version:"current",sidebarPosition:4.5,frontMatter:{title:"Request body structure",sidebar_position:4.5},sidebar:"api",previous:{title:"Responses data structure",permalink:"/docs/api/openapi/responses"},next:{title:"Tags usage",permalink:"/docs/api/openapi/tags"}},u=[{value:"RequestBody",id:"requestbody",children:[]}],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requestbody"},"RequestBody"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@RequestBody")," decorator allows you to add a description for the data structure passed in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"post"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"put"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," methods."),(0,a.kt)("p",null,"The decorator takes an argument that has the interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface OpenApiRequestBody {\n  description: string; //\n  contentType?: string; // content type, default: application/json\n  schema: SchemaObject | ThisRefContainer | Function | any; // OAS-specified shema object\n}\n")),(0,a.kt)("p",null,"Applies exclusively to the route endpoint."),(0,a.kt)("p",null,"Usage example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// define class describing auth form fields\nclass AuthForm extends toJSONSchema {\n  @IsString()\n  @JSONSchema({\n    description: "auth login value",\n    example: "user127",\n  })\n  login: string;\n\n  @IsString()\n  @JSONSchema({\n    description: "auth password value",\n    format: "password",\n  })\n  password: string;\n}\nclass Auth {\n  @Summary("User authentication")\n  @Description("Accept login/password. Returns token")\n  @RequestBody({ description: "Authentication data", schema: AuthForm })\n  @Responses({ status: 200, description: "Authorization bearer token", schema: models.Tokens })\n  @Post()\n  static Login(@Body() { login, password }) {\n    // ... login process\n  }\n}\n')),(0,a.kt)("p",null,"When uploading files, use the correct ",(0,a.kt)("inlineCode",{parentName:"p"},"contentType")," describing the expected data fields."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'class Files {\n  @Post("/upload")\n  @RequestBody({\n    description: "uploading file",\n    contentType: "multipart/form-data",\n    schema: {\n      properties: {\n        file: {\n          type: "string",\n          format: "binary",\n        },\n      },\n    },\n  })\n  @Summary("File upload")\n  @Responses({ status: 200, description: "Uploaded file info", schema: models.Files })\n  static Upload(@Files("file") file: File) {\n    // ...\n  }\n}\n')))}d.isMDXComponent=!0}}]);