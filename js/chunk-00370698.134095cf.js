(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00370698"],{"2bc5":function(t,e,s){"use strict";s("c6e2");var i=s("0d01"),a=s("58df");function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var r=Object(a["a"])(i["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"}},computed:{classes:function(){return n({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(this.classes),s=e.tag,i=e.data;return t("li",[t(s,i,this.$slots.default)])}}),c=s("80d2"),o=Object(c["c"])("v-breadcrumbs__divider","li"),u=s("6a18"),d=s("d9bd"),l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};e["a"]=Object(a["a"])(u["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean,justifyCenter:Boolean,justifyEnd:Boolean},computed:{classes:function(){return l({"v-breadcrumbs--large":this.large,"justify-center":this.justifyCenter,"justify-end":this.justifyEnd},this.themeClasses)}},mounted:function(){this.justifyCenter&&Object(d["c"])("justify-center",'class="justify-center"',this),this.justifyEnd&&Object(d["c"])("justify-end",'class="justify-end"',this),this.$slots.default&&Object(d["c"])("default slot",':items and scoped slot "item"',this)},methods:{genChildren:function(){if(this.$slots.default){for(var t=[],e=!1,s=0;s<this.$slots.default.length;s++){var i=this.$slots.default[s];i.componentOptions&&"v-breadcrumbs-item"===i.componentOptions.Ctor.options.name?(e&&t.push(this.genDivider()),t.push(i),e=!0):t.push(i)}return t}},genDivider:function(){return this.$createElement(o,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,s=0;s<this.items.length;s++){var i=this.items[s];e?t.push(this.$scopedSlots.item({item:i})):t.push(this.$createElement(r,{key:i.text,props:i},[i.text])),s<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default?this.genChildren():this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},b8fa:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Contact")},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",[s("v-flex",[s("v-card",{staticClass:"pl-2 pr-2"},[s("v-breadcrumbs",{attrs:{items:t.itemsBc},scopedSlots:t._u([{key:"divider",fn:function(){return[s("v-icon",[t._v("chevron_right")])]},proxy:!0}])})],1),s("br"),s("v-layout",{attrs:{"text-xs-justify":""}},[s("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[s("h1",{staticClass:"primary--text",attrs:{"display-4":""}},[t._v("Contact Us")]),s("h2",{attrs:{"display-3":""}},[t._v("Location: ")]),s("div",{staticClass:"subheading"},[t._v("\n            Faculty of Mathematics and Natural Sciences Education,\n            "),s("br"),s("b",[t._v("UNIVERSITAS PENDIDIKAN INDONESIA")]),s("br"),t._v("2nd Floor of FPMIPA A (JICA) Building\n            "),s("br"),t._v("Jl. Setiabudhi, No. 229, Bandung, West Java, Indonesia\n            "),s("br"),s("b",[t._v("Mail us:")]),t._v(" \n            "),s("a",{attrs:{href:"mailto:msceis@upi.edu"}},[t._v("msceis@upi.edu")]),s("br"),s("b",[t._v("Contact Person:")]),t._v(" Eka Cahya Prima\n            "),s("br"),s("b",[t._v("Phone: ")]),t._v("(+62) 857-9324-5289\n          ")])]),s("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[s("h2",{staticClass:"mb-2",attrs:{"display-3":""}},[t._v("Location:")]),s("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.239976720483!2d107.5877168141811!3d-6.861817595041293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6bb891ffe73%3A0xcf17e168e0ad1c63!2sGedung+JICA+%2F+FPMIPA+A+UPI!5e0!3m2!1sid!2sid!4v1565923205305!5m2!1sid!2sid",width:"400",height:"300",frameborder:"0",allowfullscreen:""}})])],1)],1)],1)],1)},r=[],c={data:function(){return{itemsBc:[{text:"Home",disable:!1,to:"/"},{text:"Contact",disable:!0,to:"/contact"}]}}},o=c,u=s("2877"),d=s("6544"),l=s.n(d),f=s("2bc5"),m=s("b0af"),h=s("a523"),b=s("0e8f"),v=s("132d"),p=s("a722"),y=Object(u["a"])(o,n,r,!1,null,null,null),g=y.exports;l()(y,{VBreadcrumbs:f["a"],VCard:m["a"],VContainer:h["a"],VFlex:b["a"],VIcon:v["a"],VLayout:p["a"]});var _={components:{Contact:g}},j=_,C=Object(u["a"])(j,i,a,!1,null,null,null);e["default"]=C.exports},c6e2:function(t,e,s){}}]);
//# sourceMappingURL=chunk-00370698.134095cf.js.map