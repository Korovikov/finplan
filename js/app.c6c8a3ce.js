(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-11cc5a1b":"9ee6c366","chunk-4814e02a":"15d4be3a","chunk-258c5f77":"7f924869","chunk-4dac2182":"406fe418","chunk-2d21605e":"4dff6e06","chunk-9955282c":"f32b4508","chunk-69041f5a":"1a6b9547","chunk-56a4743d":"fc257332","chunk-56a70b20":"915cd2dc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-11cc5a1b":1,"chunk-4814e02a":1,"chunk-258c5f77":1,"chunk-4dac2182":1,"chunk-69041f5a":1,"chunk-56a4743d":1,"chunk-56a70b20":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-11cc5a1b":"1f74ea8e","chunk-4814e02a":"76874681","chunk-258c5f77":"4e0c3e61","chunk-4dac2182":"46ff84dd","chunk-2d21605e":"31d6cfe0","chunk-9955282c":"31d6cfe0","chunk-69041f5a":"79090cd5","chunk-56a4743d":"527573be","chunk-56a70b20":"527573be"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/finplan/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"7b93":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("d4ec"),a=n("bee2"),c=function(){function e(t,n,a,c){Object(r["a"])(this,e),this.id=t,this.sum=n,this.categoryId=a,this.createdAt=c}return Object(a["a"])(e,[{key:"getId",value:function(){return this.id}},{key:"getSum",value:function(){return this.sum}},{key:"getCategoryId",value:function(){return this.categoryId}},{key:"getCreatedAt",value:function(){return this.createdAt}}]),e}()},"9c0c":function(e,t,n){},b34c:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("b0c0");var r=n("d4ec"),a=n("bee2"),c=function(){function e(t,n,a,c){Object(r["a"])(this,e),this.id=t,this.name=n,this.type=a,this.icon=c}return Object(a["a"])(e,[{key:"getId",value:function(){return this.id}},{key:"getType",value:function(){return this.type}}]),e}()},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("public-layout",[n("router-view")],1)],1)],1)},c=[],o=n("d4ec"),i=n("262e"),u=n("2caf"),s=n("9ab4"),l=n("60a3"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("nav-bar"),n("v-main",[n("v-container",{attrs:{fluid:""}},[e._t("default")],2)],1),n("v-bottom-navigation",{attrs:{app:"",ansolute:"",grow:""}},[n("v-btn",{attrs:{to:{name:"History"},height:"56px"}},[n("span",[e._v("History")]),n("v-icon",[e._v("mdi-history")])],1),n("v-btn",{attrs:{exact:"",to:{name:"Home"},height:"56px"}},[n("span",[e._v("Home")]),n("v-icon",[e._v("mdi-home")])],1),n("v-btn",{attrs:{to:{name:"Categories"},height:"56px"}},[n("span",[e._v("Categories")]),n("v-icon",[e._v("mdi-table-of-contents")])],1),n("v-btn",{attrs:{to:{name:"Settings"},height:"56px"}},[n("span",[e._v("Setings")]),n("v-icon",[e._v("mdi-cog")])],1)],1)],1)},f=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{dark:"",app:""}},[n("v-toolbar-title",[e._v("Finplan")])],1)},h=[],g=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(l["c"]);g=Object(s["a"])([l["a"]],g);var b=g,v=b,y=n("2877"),m=n("6544"),k=n.n(m),O=n("40dc"),j=n("2a7f"),x=Object(y["a"])(v,d,h,!1,null,null,null),C=x.exports;k()(x,{VAppBar:O["a"],VToolbarTitle:j["a"]});var w=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(l["c"]);w=Object(s["a"])([Object(l["a"])({components:{NavBar:C}})],w);var I=w,S=I,_=n("b81c"),E=n("8336"),A=n("a523"),P=n("132d"),N=n("f6c4"),B=Object(y["a"])(S,p,f,!1,null,null,null),T=B.exports;k()(B,{VBottomNavigation:_["a"],VBtn:E["a"],VContainer:A["a"],VIcon:P["a"],VMain:N["a"]});var V=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(l["c"]);V=Object(s["a"])([Object(l["a"])({components:{PublicLayout:T}})],V);var H=V,J=H,L=(n("5c0b"),n("7496")),M=Object(y["a"])(J,a,c,!1,null,null,null),F=M.exports;k()(M,{VApp:L["a"]});var $=n("9483");Object($["a"])("".concat("/finplan/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var q=n("8c4f");r["a"].use(q["a"]);var D=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-258c5f77"),n.e("chunk-69041f5a")]).then(n.bind(null,"bb51"))}},{path:"/history",name:"History",component:function(){return n.e("chunk-56a4743d").then(n.bind(null,"e4bb"))}},{path:"/categories",name:"Categories",component:function(){return n.e("chunk-56a70b20").then(n.bind(null,"58c2"))}},{path:"/categories/create",name:"CategoriesCreate",component:function(){return Promise.all([n.e("chunk-258c5f77"),n.e("chunk-11cc5a1b"),n.e("chunk-4dac2182"),n.e("chunk-2d21605e")]).then(n.bind(null,"c160"))}},{path:"/categories/:id/update",name:"CategoriesUpdate",component:function(){return Promise.all([n.e("chunk-258c5f77"),n.e("chunk-11cc5a1b"),n.e("chunk-4dac2182"),n.e("chunk-9955282c")]).then(n.bind(null,"e85c"))},props:!0},{path:"/settings",name:"Settings",component:function(){return Promise.all([n.e("chunk-11cc5a1b"),n.e("chunk-4814e02a")]).then(n.bind(null,"26d3"))},props:!0}],U=new q["a"]({mode:"history",base:"/finplan/",routes:D}),K=U,z=n("2f62"),G=(n("c740"),n("a434"),n("2909")),Q=n("bee2"),R=n("6fc5"),W=(n("d81d"),n("b0c0"),n("7b93")),X=n("b34c"),Y=function(){function e(){Object(o["a"])(this,e)}return Object(Q["a"])(e,[{key:"getExpenses",value:function(){return localStorage.expenses?JSON.parse(localStorage.expenses).map((function(e){return new W["a"](e.id,e.sum,e.categoryId,e.createdAt)})):[]}},{key:"syncExpenses",value:function(e){localStorage.setItem("expenses",JSON.stringify(e))}},{key:"getCategories",value:function(){return localStorage.categories?JSON.parse(localStorage.categories).map((function(e){return new X["a"](e.id,e.name,e.type,e.icon)})):[]}},{key:"syncCategories",value:function(e){localStorage.setItem("categories",JSON.stringify(e))}}]),e}(),Z=new Y,ee=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.expenses=Z.getExpenses(),e}return Object(Q["a"])(n,[{key:"push",value:function(e){this.expenses.push(e)}},{key:"delete",value:function(e){var t=this.expenses.findIndex((function(t){return t.getId()===e}));this.expenses.splice(t,1)}},{key:"saveExpense",value:function(e){this.context.commit("push",e),Z.syncExpenses(this.expenses)}},{key:"deleteExpense",value:function(e){this.context.commit("delete",e),Z.syncExpenses(this.expenses)}},{key:"sortedByCreatedAt",get:function(){return Object(G["a"])(this.expenses).sort((function(e,t){return e.getCreatedAt===t.getCreatedAt?0:e.getCreatedAt>t.getCreatedAt?-1:1}))}},{key:"sortedById",get:function(){return Object(G["a"])(this.expenses).sort((function(e,t){return e.getId===t.getId?0:e.getId>t.getId?-1:1}))}}]),n}(R["d"]);Object(s["a"])([R["c"]],ee.prototype,"push",null),Object(s["a"])([R["c"]],ee.prototype,"delete",null),Object(s["a"])([R["a"]],ee.prototype,"saveExpense",null),Object(s["a"])([R["a"]],ee.prototype,"deleteExpense",null),ee=Object(s["a"])([Object(R["b"])({namespaced:!0})],ee);var te=ee,ne=(n("4de4"),n("7db0"),new Y),re=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.categories=ne.getCategories(),e}return Object(Q["a"])(n,[{key:"push",value:function(e){this.categories.push(e)}},{key:"update",value:function(e,t){var n=this.categories.findIndex((function(t){return t.getId()===e}));this.categories[n]=t}},{key:"delete",value:function(e){var t=this.categories.findIndex((function(t){return t.getId()===e}));this.categories.splice(t,1)}},{key:"createCategory",value:function(e){this.context.commit("push",e),ne.syncCategories(this.categories)}},{key:"updateCategory",value:function(e,t){this.context.commit("update",{id:e,category:t}),ne.syncCategories(this.categories)}},{key:"deleteCategory",value:function(e){this.context.commit("delete",e),ne.syncCategories(this.categories)}},{key:"findById",value:function(e){return this.categories.find((function(t){return t.getId()===e}))}},{key:"sortedById",get:function(){return Object(G["a"])(this.categories).sort((function(e,t){return e.getId===t.getId?0:e.getId>t.getId?-1:1}))}},{key:"incomes",get:function(){return Object(G["a"])(this.categories).filter((function(e){return 1===e.getType()}))}},{key:"outcomes",get:function(){return Object(G["a"])(this.categories).filter((function(e){return 2===e.getType()}))}}]),n}(R["d"]);Object(s["a"])([R["c"]],re.prototype,"push",null),Object(s["a"])([R["c"]],re.prototype,"update",null),Object(s["a"])([R["c"]],re.prototype,"delete",null),Object(s["a"])([R["a"]],re.prototype,"createCategory",null),Object(s["a"])([R["a"]],re.prototype,"updateCategory",null),Object(s["a"])([R["a"]],re.prototype,"deleteCategory",null),Object(s["a"])([R["a"]],re.prototype,"findById",null),re=Object(s["a"])([Object(R["b"])({namespaced:!0})],re);var ae=re;r["a"].use(z["a"]);var ce=new z["a"].Store({state:{},mutations:{},actions:{},modules:{Expenses:te,Categories:ae}}),oe=n("f309");r["a"].use(oe["a"]);var ie=new oe["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:K,store:ce,vuetify:ie,render:function(e){return e(F)}}).$mount("#app")}});
//# sourceMappingURL=app.c6c8a3ce.js.map