webpackJsonp([0,2],{20:function(t,s,e){function o(t){e(72)}var i=e(1)(e(70),e(73),o,"data-v-2718c941",null);t.exports=i.exports},21:function(t,s,e){function o(t){e(83)}var i=e(1)(e(74),e(88),o,null,null);t.exports=i.exports},70:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o;s.default={name:"google-map",props:["name"],data:function(){return{mapName:this.name+"-map",markerCoordinates:[],markerCoordinates2:[],map:null,bounds:null,markers:[],map_arr:[],obj_map:{latitude:"",longitude:"",h:"",i:"",n:""},live_obj:{latitude:"",longitude:"",h:"",i:"",n:""}}},methods:{map_q:function(t,s,e,o,i){var r=this;this.$http.get("loc_lat_lng/"+t[0]+"/"+t[1]+".json").then(function(t){return t.json()}).then(function(n){console.log(n),r.obj_map={longitude:n[1],latitude:n[0],h:t[0],i:t[1]},r.markerCoordinates.push(r.obj_map),s(e,n,o,i),console.log(r.markerCoordinates)})},addInfoWindow:function(t,s,e){var i="";this.$http.get("ALL_LOC_INDEX/"+e.h+"/"+e.i+".json").then(function(t){return t.json()}).then(function(t){console.log(t),i=t}),console.log(t.id),google.maps.event.addListener(t,"click",function(){o&&o.close(),o=new google.maps.InfoWindow({content:" "+i}),o.open(this.map,t)})},last:function(t,s,e,o){var i=this;this.bounds=new google.maps.LatLngBounds;var r=document.getElementById(this.mapName),n=this.markerCoordinates[0],a={center:new google.maps.LatLng(n.latitude,n.longitude),disableDefaultUI:!0,zoomControl:!0};this.map=new google.maps.Map(r,a),o.forEach(function(t){var s=new google.maps.LatLng(t.latitude,t.longitude);console.log("coor test ===> "+t.latitude+" "+t.longitude);var o=new google.maps.Marker({position:s,map:i.map,icon:{url:"/static/img/icons/bus.png"},id:e});i.markers.push(o),i.map.fitBounds(i.bounds.extend(s))}),this.markerCoordinates.forEach(function(s){var o,r=new google.maps.LatLng(s.latitude,s.longitude);o=i.$store.state.src_h==s.h&&i.$store.state.src_i==s.i?new google.maps.Marker({position:r,map:i.map,icon:{url:"/static/img/icons/source.png"},id:e}):i.$store.state.dest_h==s.h&&i.$store.state.dest_i==s.i?new google.maps.Marker({position:r,map:i.map,icon:{url:"/static/img/icons/destination.png"},id:e}):i.$store.state.sel_wp_h==s.h&&i.$store.state.sel_wp_i==s.i?new google.maps.Marker({position:r,map:i.map,icon:{url:"/static/img/icons/wp.png"},id:e}):new google.maps.Marker({position:r,map:i.map,icon:{url:"/static/img/icons/else.png"},id:e}),i.markers.push(o),i.map.fitBounds(i.bounds.extend(r)),o.addListener("click",function(){console.log("clicking at "+s.latitude+"  "+s.latitude+" "+s.h+" "+s.i),t(o,this.markers,s)}),console.log("wo first")})},q_route:function(t,s,e){var o=this;this.map_arr=[];var i=0;this.$http.get("bus_route/"+this.$store.state.sel_b_h+"/"+this.$store.state.sel_b_i2+".json").then(function(t){return t.json()}).then(function(r){console.log(r),o.$http.get("live/"+o.$store.state.sel_b_h+"/"+o.$store.state.sel_b_i2+".json").then(function(t){return t.json()}).then(function(t){console.log("live: "+t[0]+" "+t[1]),o.live_obj={longitude:t[1],latitude:t[0],h:o.$store.state.sel_b_h,i:o.$store.state.sel_b_i2,n:o.$store.state.sel_b_n},o.markerCoordinates2.push(o.live_obj),console.log("pehle kon")});for(var n in r)i++,t(r[n],s,e,i,o.markerCoordinates2);console.log("map_Arr"+o.map_arr)})}},beforeMount:function(){this.q_route(this.map_q,this.last,this.addInfoWindow)}}},71:function(t,s,e){s=t.exports=e(68)(!0),s.push([t.i,".google-map[data-v-2718c941]{height:400px}","",{version:3,sources:["C:/Users/Shivam Singh/Desktop/projects-2017/___Vue____Vuex______Firebase/bhaap - Copy/src/components/map.vue"],names:[],mappings:"AACA,6BAEE,YAAc,CAGf",file:"map.vue",sourcesContent:["\n.google-map[data-v-2718c941] {\r\n/*  width: 800px;*/\r\n  height: 400px;\r\n  /*margin: 0 auto;\r\n  background: gray;*/\n}\r\n"],sourceRoot:""}])},72:function(t,s,e){var o=e(71);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(69)("2ec958aa",o,!0)},73:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"google-map",attrs:{id:t.mapName}})])},staticRenderFns:[]}},74:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e(19),i=e.n(o),r=e(0),n=e(20),a=e.n(n);s.default={data:function(){return{nonet:"",f_r:-1,time_arr:[],offset_str:"",route_str:"",loc_arr_print:[],markerCoordinates:[],obj_lat_lng:{latitude:"",longitude:""},new_src:"",new_src_h:-1,new_src_i:-1,new_dest:"",new_dest_h:-1,new_dest_i:-1,new_wp:"",new_wp_h:-1,new_wp_i:-1}},components:{google_map:a.a},methods:i()({},e.i(r.b)([]),{bckbut:function(){this.$router.go(-1)},myFunction:function(){var t=document.getElementById("snackbar");t.className="show",setTimeout(function(){t.className=t.className.replace("show","")},3e3)},d_or_id:function(t){this.nonet=" ",console.log("wp :"+this.$store.state.sel_wp_n+" "+this.$store.state.sel_wp_h+" "+this.$store.state.sel_wp_i),this.new_src="",this.new_src_h=-1,this.new_src_i=-1,this.new_dest="",this.new_dest_h=-1,this.new_dest_i=-1,1==this.$store.state.bus_detail_main_flg?(this.new_src=this.$store.state.src,this.new_src_h=this.$store.state.src_h,this.new_src_i=this.$store.state.src_i,this.new_dest=this.$store.state.dest,this.new_dest_h=this.$store.state.dest_h,this.new_dest_i=this.$store.state.dest_i):2==this.$store.state.bus_detail_main_flg?(this.new_src=this.$store.state.src,this.new_src_h=this.$store.state.src_h,this.new_src_i=this.$store.state.src_i,this.new_dest=this.$store.state.sel_wp_n,this.new_dest_h=this.$store.state.sel_wp_h,this.new_dest_i=this.$store.state.sel_wp_i,console.log("src_Dest"+this.new_src+" "+this.new_dest),console.log("src_Dest_h"+this.new_src_h+" "+this.new_dest_h),console.log("src_Dest_i"+this.new_src_i+" "+this.new_dest_i)):3==this.$store.state.bus_detail_main_flg?(this.new_src=this.$store.state.sel_wp_n,this.new_src_h=this.$store.state.sel_wp_h,this.new_src_i=this.$store.state.sel_wp_i,this.new_dest=this.$store.state.dest,this.new_dest_h=this.$store.state.dest_h,this.new_dest_i=this.$store.state.dest_i,console.log("srcdest"+this.new_src+" "+this.new_dest)):this.$store.state.bus_detail_main_flg,t()},src_to_dest_chck:function(){var t=this;if(this.f_r=-1,this.$store.state.d_in_r=-1,this.$store.state.s_in_r=-1,this.$store.state.rf,this.$store.state.rf,this.time_arr=[],this.offset_str="",this.route_str="bus_route -> ",this.loc_arr_print=[],this.markerCoordinates=[],console.log("bus: "+this.$store.state.sel_b_h+" "+this.$store.state.sel_b_i2),navigator.onLine)this.$http.get("bus_route/"+this.$store.state.sel_b_h+"/"+this.$store.state.sel_b_i2+".json").then(function(t){return t.json()}).then(function(s){for(var e in s)if(console.log("route : "+s[e][0]+" "+s[e][1]),console.log(t.new_src_h+" "+t.new_src_i),s[e][0]==t.new_src_h&&s[e][1]==t.new_src_i&&(t.$store.state.s_in_r=e,console.log("s:"+t.$store.state.s_in_r)),s[e][0]==t.new_dest_h&&s[e][1]==t.new_dest_i&&(t.$store.state.d_in_r=e,console.log("d:"+t.$store.state.d_in_r)),t.$store.state.s_in_r<t.$store.state.d_in_r&&-1!=t.$store.state.s_in_r&&-1!=t.$store.state.d_in_r?(t.$store.state.rf=!0,t.$store.state.rb=!1,console.log("rf"+t.$store.state.s_in_r+" "+t.$store.state.d_in_r)):t.$store.state.s_in_r>t.$store.state.d_in_r&&-1!=t.$store.state.s_in_r&&-1!=t.$store.state.d_in_r&&(t.$store.state.rf=!1,t.$store.state.rb=!0,console.log("rb"+t.$store.state.s_in_r+" "+t.$store.state.d_in_r)),-1!=t.$store.state.s_in_r&&-1!=t.$store.state.d_in_r)return 1==t.$store.state.rf&&0==t.$store.state.rb?t.$http.get("time_1/"+t.$store.state.sel_b_h+"/"+t.$store.state.sel_b_i2+".json").then(function(t){return t.json()},function(t){console.log(t)}).then(function(s){for(var e in s)console.log(s[e]),t.time_arr.push(s[e])}):0==t.$store.state.rf&&1==t.$store.state.rb&&t.$http.get("time_2/"+t.$store.state.sel_b_h+"/"+t.$store.state.sel_b_i2+".json").then(function(t){return t.json()}).then(function(s){for(var e in s)console.log(s[e]),t.time_arr.push(s[e])}),void(1==t.$store.state.rf&&0==t.$store.state.rb?t.$http.get("time_offset_1/"+t.$store.state.sel_b_h+"/"+t.$store.state.sel_b_i2+"/"+t.$store.state.s_in_r+".json").then(function(t){return t.json()}).then(function(s){console.log(s),t.offset_str="It takes "+s+" HOURS to reach at your source bus stop ->  "+t.new_src+" from the above metioned time(s) "}):0==t.$store.state.rf&&1==t.$store.state.rb&&t.$http.get("time_offset_2/"+t.$store.state.sel_b_h+"/"+t.$store.state.sel_b_i2+"/"+t.$store.state.s_in_r+".json").then(function(t){return t.json()}).then(function(s){console.log(s),t.offset_str="It takes "+s+" HOURS to reach at your source bus stop  "+t.new_src+" from the above metioned time "}))});else{this.nonet="Connect to Internet to view all the bus stops of the bus & Locate Bus Live on the Map";var s=this.$store.state.x.bus_route[this.$store.state.sel_b_h][this.$store.state.sel_b_i2];console.log(s);for(var e in s)if(console.log("route : "+s[e][0]+" "+s[e][1]),console.log(this.new_src_h+" "+this.new_src_i),s[e][0]==this.new_src_h&&s[e][1]==this.new_src_i&&(this.$store.state.s_in_r=e,console.log("s:"+this.$store.state.s_in_r)),s[e][0]==this.new_dest_h&&s[e][1]==this.new_dest_i&&(this.$store.state.d_in_r=e,console.log("d:"+this.$store.state.d_in_r)),this.$store.state.s_in_r<this.$store.state.d_in_r&&-1!=this.$store.state.s_in_r&&-1!=this.$store.state.d_in_r?(this.$store.state.rf=!0,this.$store.state.rb=!1,console.log("rf"+this.$store.state.s_in_r+" "+this.$store.state.d_in_r)):this.$store.state.s_in_r>this.$store.state.d_in_r&&-1!=this.$store.state.s_in_r&&-1!=this.$store.state.d_in_r&&(this.$store.state.rf=!1,this.$store.state.rb=!0,console.log("rb"+this.$store.state.s_in_r+" "+this.$store.state.d_in_r)),-1!=this.$store.state.s_in_r&&-1!=this.$store.state.d_in_r){if(1==this.$store.state.rf&&0==this.$store.state.rb){var o=this.$store.state.x.time_1[this.$store.state.sel_b_h][this.$store.state.sel_b_i2];for(var i in o)console.log(o[i]),this.time_arr.push(o[i])}else if(0==this.$store.state.rf&&1==this.$store.state.rb){var r=this.$store.state.x.time_2[this.$store.state.sel_b_h][this.$store.state.sel_b_i2];for(var n in r)console.log(r[n]),this.time_arr.push(r[n])}if(1==this.$store.state.rf&&0==this.$store.state.rb){this.$http.get("time_offset_1/"+this.$store.state.sel_b_h+"/"+this.$store.state.sel_b_i2+"/"+this.$store.state.s_in_r+".json");var a=this.$store.state.x.time_offset_1[this.$store.state.sel_b_h][this.$store.state.sel_b_i2][this.$store.state.s_in_r];console.log(a),this.offset_str="It takes "+a+" HOURS to reach at your source bus stop ->  "+this.new_src+" from the above metioned time "}else if(0==this.$store.state.rf&&1==this.$store.state.rb){var _=this.$store.state.x.time_offset_2[this.$store.state.sel_b_h][this.$store.state.sel_b_i2][this.$store.state.s_in_r];console.log(_),this.offset_str="It takes "+_+" HOURS to reach at your source bus stop  "+this.new_src+" from the above metioned time "}return}}}}),computed:i()({},e.i(r.c)(["g_b_n","g_b_h","g_b_i","bus_detail_main_flg"])),beforeMount:function(){this.d_or_id(this.src_to_dest_chck)}}},79:function(t,s,e){s=t.exports=e(68)(!0),s.push([t.i,".card-4{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}#txt{font-size:16px;font-family:serif}","",{version:3,sources:["C:/Users/Shivam Singh/Desktop/projects-2017/___Vue____Vuex______Firebase/bhaap - Copy/src/components/bus_detail.vue"],names:[],mappings:"AACA,QACA,8DAAmE,CAClE,AACD,KAEE,eAAiB,AACjB,iBAAqB,CACtB",file:"bus_detail.vue",sourcesContent:["\n.card-4 {\r\nbox-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n#txt{\r\n\r\n  font-size : 16px;\r\n  font-family : serif ;\n}\n#chi{\n}\r\n"],sourceRoot:""}])},83:function(t,s,e){var o=e(79);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(69)("d977396c",o,!0)},88:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"demo-blog mdl-layout mdl-js-layout has-drawer is-upgraded",staticStyle:{"margin-top":"-10%"}},[e("main",{staticClass:"mdl-layout__content"},[e("div",{staticClass:"demo-back",on:{click:t.bckbut}},[t._m(0)]),t._v(" "),e("div",{staticClass:"demo-blog__posts mdl-grid"},[e("div",{staticClass:"mdl-card something-else  mdl-cell mdl-cell--12-col"},[e("div",[e("div",{staticClass:"card card-4"},[e("google_map")],1)]),t._v(" "),e("button",{staticClass:"mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--brown"},[e("div",[e("i",{staticClass:"material-icons",staticStyle:{color:"#fff"},on:{click:function(s){t.myFunction()}}},[t._v("assistant_photo")])])]),t._v(" "),e("div",{staticClass:"mdl-color-text--grey-600 mdl-card__supporting-text",staticStyle:{"background-color":"#fff"}},t._l(t.time_arr,function(s){return e("span",{staticClass:"mdl-chip",staticStyle:{padding:"0px 20px 0px 20px","margin-right":"5px","margin-left":"5px","margin-top":"3px"},attrs:{id:"chi"}},[e("span",{staticClass:"mdl-chip__text",staticStyle:{"font-size":"18px"}},[t._v(" "+t._s(s)+" ")])])})),t._v(" "),e("div",{staticClass:"mdl-card__supporting-text meta mdl-color-text--grey-600",staticStyle:{"background-color":"#fff"}},[e("div",{staticClass:"minilogo"}),t._v(" "),e("div",[e("strong",[e("p",{attrs:{id:"txt"}},[t._v(t._s(t.offset_str))])])])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"mdl-layout__obfuscator"})])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon",staticStyle:{"margin-top":"-10%","margin-left":"2%"},attrs:{href:"#",title:"go back",role:"button"}},[e("i",{staticClass:"material-icons",staticStyle:{color:"#fff"},attrs:{role:"presentation"}},[t._v("arrow_back")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"snackbar"}},[e("p",[e("b",[t._v("Green")]),t._v(" - "),e("i",[t._v("Source")])]),t._v(" "),e("p",[e("b",[t._v("Red")]),t._v(" - "),e("i",[t._v("Destination")])]),t._v(" "),e("p",[e("b",[t._v("Blue")]),t._v(" - Selected "),e("i",[t._v("Waypoint")])]),t._v(" "),e("p",[e("b",[t._v("Yellow")]),t._v(" - "),e("i",[t._v("Bus Stops")]),t._v(" of choosen Bus ")]),t._v(" "),e("p",[e("b",[t._v("Click")]),t._v(" on "),e("b",[t._v("markers")]),t._v(" to know "),e("i",[t._v("name ")]),t._v(" of "),e("i",[t._v("Bus Stops")])]),t._v(" "),e("p",[e("i",[t._v("Map doesnot")]),t._v(" have "),e("i",[t._v("Offline")]),t._v(" Support")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"mdl-mini-footer"},[e("div",{staticClass:"mdl-mini-footer--left-section"},[e("button",{staticClass:"mdl-mini-footer--social-btn social-btn social-btn__twitter"},[e("span",{staticClass:"visuallyhidden"},[t._v("Twitter")])]),t._v(" "),e("button",{staticClass:"mdl-mini-footer--social-btn social-btn social-btn__blogger"},[e("span",{staticClass:"visuallyhidden"},[t._v("Facebook")])]),t._v(" "),e("button",{staticClass:"mdl-mini-footer--social-btn social-btn social-btn__gplus"},[e("span",{staticClass:"visuallyhidden"},[t._v("Google Plus")])])]),t._v(" "),e("div",{staticClass:"mdl-mini-footer--right-section"},[e("button",{staticClass:"mdl-mini-footer--social-btn social-btn__share"},[e("i",{staticClass:"material-icons",attrs:{role:"presentation"}},[t._v("share")]),t._v(" "),e("span",{staticClass:"visuallyhidden"},[t._v("share")])])])])}]}}});
//# sourceMappingURL=0.a3874d094f449311b84f.js.map