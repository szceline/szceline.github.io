webpackJsonp([3],{Q5FS:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("teIl"),i=n("ldOZ"),s={name:"cinemaList",data:function(){return{cinemaList:[],pullDownMsg:"",isLoading:!0}},mounted:function(){var t=this;this.$axios.get("/api/cinemaList?cityId=10").then(function(a){"ok"===a.data.msg&&(t.isLoading=!1,t.cinemaList=a.data.data.cinemas)})},filters:{formatCard:function(t){for(var a=[{key:"allowRefund",value:"改签"},{key:"endorse",value:"退"},{key:"sell",value:"折扣卡"},{key:"snack",value:"小吃"}],n=0;n<a.length;n++)if(a[n].key==t)return a[n].value;return""},classCard:function(t){for(var a=[{key:"allowRefund",value:"bl"},{key:"endorse",value:"bl"},{key:"sell",value:"or"},{key:"snack",value:"or"}],n=0;n<a.length;n++)if(a[n].key==t)return a[n].value;return""}},methods:{handleToScroll:function(t){t.y>30&&(this.pullDownMsg="正在更新中")},handleToTouchEnd:function(t){var a=this;t.y>30&&this.$axios.get("/api/cinemaList?cityId=10").then(function(t){"ok"===t.data.msg&&(a.pullDownMsg="更新成功",setTimeout(function(){a.cinemaList=t.data.data.cinemas,a.pullDownMsg=""},1e3))})}}},l={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"cinema_body"},[t.isLoading?n("Loading"):n("Scroller",{attrs:{handleToScroll:t.handleToScroll,handleToTouchEnd:t.handleToTouchEnd}},[n("ul",[n("li",{staticClass:"pullDown"},[t._v(t._s(t.pullDownMsg))]),t._v(" "),t._l(t.cinemaList,function(a){return n("li",{key:a.id},[n("div",[n("span",[t._v(t._s(a.nm))]),t._v(" "),n("span",{staticClass:"q"},[n("span",{staticClass:"price"},[t._v(t._s(a.sellPrice))]),t._v(" 元起")])]),t._v(" "),n("div",{staticClass:"address"},[n("span",[t._v(t._s(a.addr))]),t._v(" "),n("span",[t._v(t._s(a.distance))])]),t._v(" "),n("div",{staticClass:"card"},t._l(a.tag,function(a,e){return 1===a?n("div",{key:e,class:t._f("classCard")(e)},[t._v(t._s(t._f("formatCard")(e)))]):t._e()}),0)])})],2)])],1)},staticRenderFns:[]};var c=n("VU/8")(s,l,!1,function(t){n("V9tn")},"data-v-789fac53",null).exports,r={name:"Cinema",components:{Header:e.a,TabBar:i.a,CinemaList:c}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"main"}},[a("Header",{attrs:{title:"恒星计划影院"}}),this._v(" "),a("div",{attrs:{id:"content"}},[this._m(0),this._v(" "),a("CinemaList")],1),this._v(" "),a("TabBar")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"cinema_menu"},[a("div",{staticClass:"city_switch"},[this._v("\n                全城 "),a("i",{staticClass:"iconfont icon-lower-triangle"})]),this._v(" "),a("div",{staticClass:"brand_swtich"},[this._v("\n                品牌 "),a("i",{staticClass:"iconfont icon-lower-triangle"})]),this._v(" "),a("div",{staticClass:"feature_switch"},[this._v("\n                特色 "),a("i",{staticClass:"iconfont icon-lower-triangle"})])])}]};var d=n("VU/8")(r,o,!1,function(t){n("WhI6")},"data-v-ddad6e54",null);a.default=d.exports},V9tn:function(t,a){},WhI6:function(t,a){}});
//# sourceMappingURL=3.df302e2fcc85d284f2c7.js.map