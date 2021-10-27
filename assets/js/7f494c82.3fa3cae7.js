"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6090],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},555:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],s={title:"Routes inheritance",sidebar_position:5},l=void 0,c={unversionedId:"api/koa/inherits",id:"api/koa/inherits",isDocsHomePage:!1,title:"Routes inheritance",description:"Inheritance logic",source:"@site/docs/api/koa/inherits.md",sourceDirName:"api/koa",slug:"/api/koa/inherits",permalink:"/docs/api/koa/inherits",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Routes inheritance",sidebar_position:5},sidebar:"api",previous:{title:"Parameters decorators",permalink:"/docs/api/koa/parameters"},next:{title:"OpenAPI support",permalink:"/docs/api/openapi/index"}},d=[{value:"Inheritance logic",id:"inheritance-logic",children:[]},{value:"Using <code>ThisRef</code>",id:"using-thisref",children:[]}],u={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"inheritance-logic"},"Inheritance logic"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aom")," supports the mechanics of data inheritance, which allows you to create generic route nodes,\nthe logic of which extends to common cases."),(0,r.kt)("p",null,"Inheritance is done in a standard JavaScript way: using the ",(0,r.kt)("inlineCode",{parentName:"p"},"extends")," operator."),(0,r.kt)("p",null,"When inheriting for a child class, it is necessary to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Controller")," class decorator,\nsince it is in it that the actions for the correct transfer of routes, endpoints, middleware\nand used arguments are performed."),(0,r.kt)("p",null,"If the child class has its own static methods that overload the values of the parent class, then\nthey will remain unchanged. Similarly, if ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge")," constructions with addresses\nand methods similar to the parent ones exist in the child class, then they will not be affected\nby inheritance. In that case, when assembling the route map, notifications will be shown about which\nelements were skipped during their inheritance."),(0,r.kt)("p",null,"Inheritance also carries information from the decorators of the OpenApi documentation. An important\npoint in this case will be the use of the context of the data schemas of the child class. To access\nthis data, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThisRef")," function, which returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor")," value of the current\ncursor as an argument to the passed function. More on this in the ",(0,r.kt)("a",{parentName:"p",href:"#thisref"},"relevant section"),"."),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// CatalogsBase.ts\n// initiate a common parent class\n\n// using `ThisRef` define filters that will be applied to search queries\nconst CatalogsQuery = ThisRef(<T extends typeof CatalogsBase>({ model }: T) => $SafeQuery(model));\n// using `ThisRef` define filters that will be applied to incoming data\nconst CatalogsBody = ThisRef(<T extends typeof CatalogsBase>({ model }: T) => $SafeBody(model));\n// using `ThisRef` define the data schema that will be used in the OpenApi documentation\nconst CatalogsSchema = ThisRef(<T extends typeof CatalogsBase>({ model }: T) => model);\n\n// we describe the route node that the child classes will inherit\n@Controller()\nclass CatalogsBase {\n  // we indicate what type of documents will be used in the context of class instances\n  document: models.Categories | models.Brands;\n  // we indicate in the static property of the class the admissible data models\n  static model: typeof models.Categories | typeof models.Brands;\n  // parent route nodes can use parameters\n  static id = "id";\n\n  static toString() {\n    return `:${this.id}(.{24})`;\n  }\n\n  // define an endpoint to get a list of data\n  @Get()\n  @Summary("Data list")\n  @Responses({\n    status: 200,\n    isArray: true,\n    // use the `ThisRef` wrapper to get the context value of a specific model at the time of assembling routes\n    schema: CatalogsSchema,\n  })\n  // a previously defined function is used for filtering\n  static Index(@Query(CatalogsQuery) query) {\n    return this.model.find({ ...query });\n  }\n\n  // define an endpoint to add an element\n  @Post()\n  @Summary("Add value")\n  @RequestBody({\n    schema: CatalogsSchema,\n  })\n  @Responses({\n    status: 200,\n    schema: CatalogsSchema,\n  })\n  static Add(@Body(CatalogsBody) body) {\n    return this.model.create({ ...body });\n  }\n\n  // define a middleware to check for the existence of a value\n  @Middleware()\n  @PathParameters({\n    [`${CatalogsBase}`]: {\n      name: CatalogsBase.id,\n      schema: { type: "string", pattern: "^[0-9,a-f,A-F]{24}$" },\n      description: "\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440",\n    },\n  })\n  @Responses({\n    status: 404,\n    schema: NotFoundError,\n  })\n  static async Check(\n    @This() catalog: CatalogsBase,\n    @Params(CatalogsBase.id) id,\n    @Next() next,\n    @Err() err\n  ) {\n    catalog.document = await this.model.findById(id);\n    if (catalog.document) {\n      return next();\n    }\n    return err("document not found", 404);\n  }\n\n  // define a parametric endpoint to edit the value\n  @Patch(`${CatalogsBase}`)\n  @Summary("Edit value")\n  @Use(CatalogsBase.Check)\n  @RequestBody({\n    schema: CatalogsSchema,\n  })\n  @Responses({\n    status: 200,\n    schema: CatalogsSchema,\n  })\n  static async Update(@This() { document }: CatalogsBase, @Body(CatalogsBody) body) {\n    Object.assign(document, { ...body });\n    await document.save();\n    return document;\n  }\n\n  // define a parametric endpoint to remove the value\n  @Delete(`${CatalogsBase}`)\n  @Summary("Remove value")\n  @Use(CatalogsBase.Check)\n  @Responses({\n    status: 200,\n    schema: MessageResponse,\n  })\n  static async Delete(@This() { document }: CatalogsBase, @Body(CatalogsBody) body) {\n    await document.remove();\n    return { message: "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0443\u0434\u0430\u043b\u0435\u043d", document };\n  }\n}\n\n// create a route node `Categories` inherited from the parent class\n@Controller()\n@AddTag("Categories")\n@Use(Categories.Prepare)\nclass Categories extends CatalogsBase {\n  static model = models.Categories;\n\n  @UseTag(Categories)\n  @Middleware()\n  static Prepare(@Next() next) {\n    return next();\n  }\n}\n\n// create a route node `Categories` inherited from the parent class\n@Controller()\n@AddTag("Brands")\n@Use(Brands.Prepare)\nclass Brands extends CatalogsBase {\n  static model = models.Brands;\n\n  @UseTag(Brands)\n  @Middleware()\n  static Prepare(@Next() next) {\n    return next();\n  }\n}\n\n// use created route nodes\n@Bridge("/categories", Categories)\n@Bridge("/brands", Brands)\n@AddTag("Catalogs processing")\n@Use(Catalogs.Init)\nclass Catalogs {\n  //..\n  @UseTag(Catalogs)\n  @MergeNextTags()\n  @Middleware()\n  static Init(@Next() next) {\n    return next();\n  }\n}\n')),(0,r.kt)("p",null,"As a result of this code, two route nodes ",(0,r.kt)("inlineCode",{parentName:"p"},"Categories")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Brands")," will be created, which will\ninherit all ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"middleware"),", including the documentation decorators, providing a\nvalid context transfer when using the decorators ",(0,r.kt)("inlineCode",{parentName:"p"},"@This"),", as well as when using the values of\n",(0,r.kt)("inlineCode",{parentName:"p"},"this")," in static methods of the class."),(0,r.kt)("p",null,"Inheritance in ",(0,r.kt)("inlineCode",{parentName:"p"},"aom")," allows ",(0,r.kt)("inlineCode",{parentName:"p"},"bridge")," constructs to be applied to child route nodes as well.\nHowever, the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Bridge"),' decorator implies the use of strictly defined route nodes,\nwhich will be accessed "as is" to the child classes, without performing complex cascading\ninheritance procedures.'),(0,r.kt)("a",{name:"thisref"}),(0,r.kt)("h2",{id:"using-thisref"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"ThisRef")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ThisRef")," function creates a wrapper container to access a child class that inherits the\nspecific decorators of the parent class."),(0,r.kt)("p",null,"Accepts as its only argument another function, in which the argument is placed the value of\n",(0,r.kt)("inlineCode",{parentName:"p"},"constructor")," from the current cursor, which in general is a direct inheritor of the class for\nwhich this construct is applied."),(0,r.kt)("p",null,"The function can be used in the following decorators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Body")," as a function argument, must return a validation function for incoming data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")," as a function argument, must return a validation function for incoming data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Responses")," for the value ",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),", must return the JSON schema of the document"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@RequestBody")," for the value ",(0,r.kt)("inlineCode",{parentName:"li"},"schema"),", must return the JSON schema of the document")),(0,r.kt)("p",null,"If the parent class is used as a self-contained routing node, then ",(0,r.kt)("inlineCode",{parentName:"p"},"ThisRef")," will return its\nown value from the parent class, and will work correctly in this situation."))}p.isMDXComponent=!0}}]);