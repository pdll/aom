"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3671],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2558:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Koa",sidebar_position:1},p="aom/koa",d={unversionedId:"api/koa/index",id:"api/koa/index",isDocsHomePage:!1,title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Koa",description:"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/api/koa/index.md",sourceDirName:"api/koa",slug:"/api/koa/index",permalink:"/ru/docs/api/koa/index",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Koa",sidebar_position:1},sidebar:"api",previous:{title:"\u0412\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435",permalink:"/ru/docs/api/intro"},next:{title:"\u041a\u043e\u043d\u0435\u0447\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438",permalink:"/ru/docs/api/koa/endpoints"}},u=[{value:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442",children:[]}],s={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aomkoa"},"aom/koa"),(0,o.kt)("p",null,"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/koa"},(0,o.kt)("inlineCode",{parentName:"a"},"koa@2")),"."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u043d\u0430\u0431\u043e\u0440\u0430 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u0432, \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u043f\u043e \u0442\u0438\u043f\u0430\u043c:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Controller")," - \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 \u043a\u043b\u0430\u0441\u0441\u0430, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u0443\u0437\u0435\u043b \u0438 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441 \u0434\u0435\u043a\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445\n\u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"endpoints")," - \u0434\u043b\u044f \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0445 \u0442\u043e\u0447\u0435\u043a \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430. \u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b:\n",(0,o.kt)("inlineCode",{parentName:"li"},"Endpoint"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Get"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Post"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Patch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Put"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Options"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Delete"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"All")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"middlewares"),' - \u0434\u043b\u044f \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f middleware-\u0444\u0443\u043d\u043a\u0446\u0438\u0439, "\u043c\u043e\u0441\u0442\u043e\u0432" \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430. \u0421\u043f\u0438\u0441\u043e\u043a \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442\n\u0432 \u0441\u0435\u0431\u044f: ',(0,o.kt)("inlineCode",{parentName:"li"},"Middleware"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Use"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Bridge"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Marker")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"UseNext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parameters")," - \u0434\u043b\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432\u044b\u0445 \u0438\u043b\u0438\n\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"middleware"),"- \u0438\u043b\u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"endpoint"),"-\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445. \u0421\u043f\u0438\u0441\u043e\u043a \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f, \u043d\u043e\n\u043d\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u044d\u0442\u0438\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438: ",(0,o.kt)("inlineCode",{parentName:"li"},"Args"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Ctx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Body"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Query"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Session"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"State"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"Headers"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Param"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Files"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Next"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Req"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Res"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Route"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Cursor"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"StateMap"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"This"),".\n\u0422\u0430\u043a\u0436\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043b\u043e\u0433\u0438\u043a.")),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430 \u0441 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"aom/koa"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Bridge("/auth", Auth)\n@Bridge("/shop", Shop)\n@Bridge("/account", Account)\n@Controller()\nclass Root {\n  @Get()\n  static Index() {\n    return models.Settings.findOne({ enabled: true });\n  }\n}\n\n// ...\n@Controller()\nclass Auth {\n  user: models.Users;\n  login: models.UserLogins;\n  token: models.AuthTokens;\n\n  @Middleware()\n  static async Required(\n    @Headers("authorization") token,\n    @This() _this: Auth,\n    @Next() next,\n    @Err() err\n  ) {\n    const authToken = await models.AuthTokens.checkToken(token);\n    if (authData) {\n      _this.token = authToken;\n      _this.user = await models.Users.findById(authToken.userId);\n      _this.login = await models.UserLogins.findById(authToken.loginId);\n      return next();\n    } else {\n      return err("access denied", 403);\n    }\n  }\n\n  @Post()\n  static async Login(@Body() { login, password }, @Err() err) {\n    const authLogin = await models.UserLogins.authLogin(login, password);\n    if (checkLogin) {\n      return models.AuthTokens.generateToken(authLogin);\n    } else {\n      return err("wrong login", 403);\n    }\n  }\n}\n\n// ...\n@Controller()\nclass Shop {\n  @Get()\n  static Index(@Query() query) {\n    return models.Products.find({ ...query });\n  }\n\n  @Get("/categories")\n  static Categories(@Query() query) {\n    return models.Categories.find({ ...query });\n  }\n\n  @Get("/brands")\n  static Brands(@Query() query) {\n    return models.Brands.find({ ...query });\n  }\n\n  @Post("/add_to_cart")\n  @Use(Auth.Required)\n  static AddToCart(@Body() { productId, quantity }, @StateMap(Auth) { user }: Auth) {\n    const addUserCart = await user.addProductToCart(productId, quantity);\n    return user.getProductsCart();\n  }\n}\n\n// ...\n@Use(Auth.Required)\n@Controller()\nclass Account {\n  @Get()\n  static async Index(@StateMap(Auth) { user, login }: Auth) {\n    const orders = await user.getOrders();\n    return { user, login, orders };\n  }\n\n  @Post("/logout")\n  static async Logout(@StateMap(Auth) { token }: Auth) {\n    await token.remove();\n    return { message: "success logout" };\n  }\n}\n')),(0,o.kt)("p",null,'\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0448\u0435 \u043a\u043e\u0434 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0435\u043d\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432 "\u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e"\n\u0432\u0438\u0434\u0430 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 middleware (\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\n\u0442\u043e\u043b\u044c\u043a\u043e ',(0,o.kt)("inlineCode",{parentName:"p"},"async (ctx, next)=>{...}"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'router.get("/", Root.Index);\nrouter.post("/auth", Auth.Login);\nrouter.get("/shop", Shop.Index);\nrouter.get("/shop/categories", Shop.Categories);\nrouter.get("/shop/brands", Shop.Brands);\nrouter.post("/shop/add_to_cart", Auth.Required, Shop.AddToCart);\nrouter.get("/account", Auth.Required, Account.Index);\nrouter.post("/account/logout", Auth.Required, Account.Logout);\n')),(0,o.kt)("p",null,"\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043b\u044e\u0441\u044b \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0432 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435\n\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,o.kt)("a",{parentName:"p",href:"#../openapi/intro"},(0,o.kt)("inlineCode",{parentName:"a"},"OpenApi")),", \u0438 \u0432 \u0446\u0435\u043b\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u043e\u043b\u0435\u0435\n\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043d\u044b\u043c \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u043c, \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0434\u043b\u044f \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445."),(0,o.kt)("h2",{id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"},"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442"),(0,o.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u0443\u0437\u0435\u043b - \u044d\u0442\u043e \u043a\u043b\u0430\u0441\u0441, \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0438\u0439 \u0437\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b. \u0412\u0441\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0433\u043e\n\u0443\u0437\u043b\u0430 \u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043f\u043e\u0441\u043b\u0435 \u0435\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u0443\u0437\u043b\u0443."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Controller"),". \u0412 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c,\n\u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u0443\u0437\u0435\u043b, \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u044f \u0435\u0433\u043e \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0433\u043e \u0443\u0437\u043b\u0430.\n\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e\u0431 \u044d\u0442\u043e\u043c \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,o.kt)("a",{parentName:"p",href:"./inherits"},(0,o.kt)("inlineCode",{parentName:"a"},"\u041d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435")),"."),(0,o.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0441\u0431\u043e\u0440\u043a\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0435 \u0443\u0437\u043b\u044b \u0440\u0430\u0437\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware"),"-\u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0438 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f\n\u0432\u044b\u0437\u043e\u0432\u043e\u043c \u0444\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint"),"-\u0430, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043f\u043e\u043b\u043d\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0432\u0441\u0435\u0445 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 \u0432\u0441\u0435\n\u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0432 \u0443\u0437\u043b\u0430\u0445 \u0441\u0432\u044f\u0437\u0438."),(0,o.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0435 \u0443\u0437\u043b\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b\n\u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0434\u0440\u0443\u0433\u043e\u0433\u043e api-\u0441\u0435\u0440\u0432\u0438\u0441\u0430."),(0,o.kt)("p",null,"\u0412\u0441\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint"),"-, ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware"),"- \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge"),"-\u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043d\u0430\u0434 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438 \u043a\u043b\u0430\u0441\u0441\u0430, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f\n\u043a\u0430\u043a \u043c\u0435\u0442\u043e\u0434\u044b \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u044b\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u0434\u043e\u0441\u0442\u0443\u043f\n\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 ",(0,o.kt)("a",{parentName:"p",href:"#statemap"},(0,o.kt)("inlineCode",{parentName:"a"},"StateMap"))," \u0438 ",(0,o.kt)("a",{parentName:"p",href:"#this"},(0,o.kt)("inlineCode",{parentName:"a"},"This")),"."),(0,o.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u0443\u0437\u0435\u043b \u043d\u0435 \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0430\u0434\u0440\u0435\u0441\u043e\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d \u043a \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443\n\u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u043e\u0441\u0442\u044b ",(0,o.kt)("inlineCode",{parentName:"p"},"@Bridge")),(0,o.kt)("p",null,"\u0421\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u0443\u0437\u043b\u043e\u0432 \u0438 \u0441\u0432\u044f\u0437\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438 \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u0443\u044e \u043a\u0430\u0440\u0442\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u0438\u043a\u043e\u043c \u0438\u043b\u0438\n\u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u0430\u0440\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043a ",(0,o.kt)("inlineCode",{parentName:"p"},"koa-router"),"-\u0443 (\u0438\u043b\u0438 \u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437 \u0435\u0433\u043e \u0440\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0435\u0439), \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432\n\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"koa")," \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432."),(0,o.kt)("p",null,"\u0412\u0441\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0442 \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0446\u0435\u043f\u043e\u0447\u043a\u0438 \u0432\u044b\u0437\u043e\u0432\u043e\u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"(ctx, next)=>{...}"),", \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f\n\u0434\u0430\u043d\u043d\u044b\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445. \u041c\u043e\u0436\u043d\u043e \u0441\u043a\u0430\u0437\u0430\u0442\u044c, \u0447\u0442\u043e \u0432 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f\n\u0446\u0435\u043f\u043e\u0447\u043a\u0438, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0435 \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware"),", \u0438 \u043e\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0435\u0441\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"endpoint"),"-\u043e\u043c, \u0432\u0438\u0434\u0430:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router[method](url, ...[Route1.Middleware1, Route2.Middleware2, Route3.Bridge, Route4.Endpoint]);\n")),(0,o.kt)("p",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0445 \u0443\u0437\u043b\u043e\u0432 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"koa")," \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import koa from "koa";\nimport koaRouter from "koa-router";\nimport { $ } from "aom"; // \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u044b\nimport Index from "./routes"; // \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043d\u044b\u0439 \u0443\u0437\u0435\u043b\n\nconst app = new koa();\nconst router = new router();\n\n// \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u0443\u0435\u043c \u0441\u0431\u043e\u0440\u043a\u0443 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432: \u043f\u0435\u0440\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 - \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0439 \u0443\u0437\u0435\u043b, \u0432\u0442\u043e\u0440\u043e\u0439 - \u043f\u0440\u0435\u0444\u0438\u043a\u0441\n// \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0433\u043e \u0443\u0437\u043b\u0430 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e \u0432\u0437\u044f\u0442\u044b\u0439 \u0443\u0437\u0435\u043b\n// \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0431\u0443\u0434\u0443\u0442 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0441\u0432\u044f\u0437\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0441 \u043d\u0438\u043c\n// \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u043d\u0430 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0435,\n// \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 `/v1` \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u043e\u043d\u043d\u043e\u0441\u0442\u0438 API, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e `/`,\nexport const $aom = new $(Index, "/");\n\n// \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u043c\u0443 \u0440\u043e\u0443\u0442\u0435\u0440\u0443\n// \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043c \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: method, path, middlewares\n$aom.routes.forEach(({ method, path, middlewares }) => {\n  router[method](path, ...middlewares);\n});\n\n// \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\n$aom.eachRoute(({ method, path, middlewares }) => {\n  router[method](path, ...middlewares);\n});\n\n// \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u0440\u043e\u0443\u0442\u0435\u0440\u0430 \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\napp.use(router.routes()).use(router.allowedMethods());\n\n// \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u043c \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043f\u043e\u0440\u0442\u0443\napp.listen(3000);\n')),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0441\u0442\u0435\u043a\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"koa"),", \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u043d\u0443\u0436\u043d\u044b\u0435 middleware \u043f\u0435\u0440\u0435\u0434\n\u0438\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u043e\u0432 \u043d\u0430 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u0430\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"aom/koa"),"."))}m.isMDXComponent=!0}}]);