(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cf6db6b"],{"0b24":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{attrs:{src:e.petsArr.photo_medium,alt:e.small}}),r("span",[r("h1",[e._v(e._s(e.petsArr.name))]),r("h2",[e._v(e._s(e.petsArr.breeds)+" • "+e._s(e.petsArr.location)+", "+e._s(e.petsArr.country))])]),r("hr"),r("span",[r("h2",[e._v(e._s(e.petsArr.age)+" • ")]),r("h2",[e._v(e._s(e.petsArr.gender)+" • ")]),r("h2",[e._v(e._s(e.petsArr.size))]),r("h1",[e._v("About")]),r("p",[e._v(e._s(e.petsArr.describe))]),r("hr"),e.auth?r("h1",[e._v("Contact")]):e._e(),r("h2",[e._v(" Number")]),r("h2",[e._v("📞")]),e.auth?e._e():r("h2",[e._v(": To receive such information, you must register")]),r("h2",[e._v(e._s(e.petsArr.number))]),r("div"),r("h2",[e._v("Address")]),r("h2",[e._v("📓")]),e.auth?e._e():r("h2",[e._v(": To receive such information, you must register")]),r("h2",[e._v(e._s(e.petsArr.address))]),r("div"),r("h2",[e._v("Shelter")]),r("h2",[e._v("🐾")]),e.auth?e._e():r("h2",[e._v(": To receive such information, you must register")]),r("h2",[e._v(e._s(e.petsArr.organization_id))])])])},n=[],a=r("1da1"),o=(r("96cf"),r("fadb")),i=r("bc3a"),u=r.n(i),c={props:["pet_id"],data:function(){return{petsArr:[],auth:""}},mounted:function(){this.fetchPetRequest(),localStorage.getItem("token")&&localStorage.getItem("name")&&(this.auth=!0)},methods:{fetchPetRequest:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,u.a;case 3:o["a"].get("pets/"+e.pet_id,{headers:{"content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){e.loading=!1,e.petsArr=t.data.requestAuthData}));case 4:case"end":return t.stop()}}),t)})))()}}},h=c,_=(r("8257"),r("2877")),p=Object(_["a"])(h,s,n,!1,null,"774cc384",null);t["default"]=p.exports},8257:function(e,t,r){"use strict";r("ce5e")},ce5e:function(e,t,r){}}]);
//# sourceMappingURL=chunk-6cf6db6b.0925a097.js.map