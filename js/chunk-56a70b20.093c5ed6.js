(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a70b20"],{"1f4f":function(t,e,n){"use strict";n("a9e3");var a=n("5530"),i=(n("8b37"),n("80d2")),s=n("7560"),r=n("58df");e["a"]=Object(r["a"])(s["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["d"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"4bb5":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("2fe1"),i=n("2f62"),s=l("computed",i["e"]),r=l("computed",i["c"]),c=l("methods",i["b"]),o=l("methods",i["d"]);function u(t,e){function n(e){function n(n,a){if("string"===typeof a){var i=a,s=n;return e(i,{namespace:t})(s,i)}var r=n,c=h(a||{},{namespace:t});return e(r,c)}return n}return e?(console.warn("[vuex-class] passing the 2nd argument to `namespace` function is deprecated. pass only namespace string instead."),n(e)):{State:n(s),Getter:n(r),Mutation:n(o),Action:n(c)}}function l(t,e){function n(n,i){return Object(a["a"])((function(a,s){a[t]||(a[t]={});var r,c=(r={},r[s]=n,r);a[t][s]=void 0!==i?e(i,c)[s]:e(c)[s]}))}function i(t,e){if("string"===typeof e){var a=e,i=t;return n(a,void 0)(i,a)}var s=d(e),r=t;return n(r,s)}return i}function d(t){var e=t&&t.namespace;if("string"===typeof e)return"/"!==e[e.length-1]?e+"/":e}function h(t,e){var n={};return[t,e].forEach((function(t){Object.keys(t).forEach((function(e){n[e]=t[e]}))})),n}},"58c2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{"back-button":{show:!0,to:"Home"}}}),t.typeSwitcherEnabled?n("v-btn",{attrs:{outlined:""},on:{click:function(e){return e.preventDefault(),t.changeType(e)}}},[t._v(t._s(t.types[t.type]))]):t._e(),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("tbody",t._l(t.categories,(function(e){return n("tr",{key:e.id},[n("td",[n("i",{staticClass:"material-icons mr-1"},[t._v(t._s(e.icon))]),n("span",{staticStyle:{"vertical-align":"super"}},[t._v(t._s(e.name))])]),n("td",{staticClass:"text-right"},[n("router-link",{staticClass:"material-icons",attrs:{to:{name:"CategoriesUpdate",params:{id:e.id}},tag:"i"}},[t._v("create")]),t.sortedById.find((function(t){return t.categoryId===e.id}))?t._e():n("i",{staticClass:"material-icons",on:{click:function(n){return n.preventDefault(),t.deleteHandler(e.id)}}},[t._v("delete")])],1)])})),0)]},proxy:!0}])}),n("v-btn",{attrs:{outlined:"",to:{name:"CategoriesCreate"}}},[n("i",{staticClass:"material-icons"},[t._v("add")]),t._v(" "+t._s(t.$t("categories.create"))+" ")])],1)},i=[],s=n("d4ec"),r=n("bee2"),c=n("262e"),o=n("2caf"),u=n("9ab4"),l=n("60a3"),d=n("4bb5"),h=n("125c"),p=n("8336"),f=n("1f4f"),b=Object(d["a"])("Categories"),v=Object(d["a"])("Expenses"),m=function(t){Object(c["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.type=1,t.types={1:"Income",2:"Outcome"},t}return Object(r["a"])(n,[{key:"mounted",value:function(){this.checkLengths()}},{key:"changeType",value:function(){1!==this.type?this.type=1:this.type=2}},{key:"deleteHandler",value:function(t){this.deleteCategory(t),this.checkLengths()}},{key:"checkLengths",value:function(){0===this.incomes.length&&(this.type=2),0===this.outcomes.length&&(this.type=1)}},{key:"categories",get:function(){return 1===this.type?this.incomes:this.outcomes}},{key:"typeSwitcherEnabled",get:function(){return this.incomes.length>0&&this.outcomes.length>0}}]),n}(l["d"]);Object(u["a"])([v.Getter],m.prototype,"sortedById",void 0),Object(u["a"])([b.Getter],m.prototype,"incomes",void 0),Object(u["a"])([b.Getter],m.prototype,"outcomes",void 0),Object(u["a"])([b.Action],m.prototype,"deleteCategory",void 0),m=Object(u["a"])([Object(l["a"])({components:{NavBar:h["a"],VBtn:p["a"],VSimpleTable:f["a"]}})],m);var y=m,g=y,k=n("2877"),O=n("6544"),_=n.n(O),j=Object(k["a"])(g,a,i,!1,null,null,null);e["default"]=j.exports;_()(j,{VBtn:p["a"],VSimpleTable:f["a"]})},"8b37":function(t,e,n){}}]);
//# sourceMappingURL=chunk-56a70b20.093c5ed6.js.map