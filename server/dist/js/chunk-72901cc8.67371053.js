(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72901cc8"],{"3fd1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("body",[a("main",[a("div",{staticClass:"circle"}),a("div",{staticClass:"register-form-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.sendData.apply(null,arguments)}}},[a("h1",{staticClass:"form-title"},[e._v(" Registration ")]),a("div",{staticClass:"form-fields"},[a("div",{staticClass:"form-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Name",required:"",minlength:"3",pattern:"[A-Za-z]+",title:"The name can contain only Latin letters."},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:"",minlength:"8",maxlength:"128"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._m(0)])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-buttons"},[a("input",{staticClass:"button",attrs:{type:"submit",value:"Send"}})])}],r=a("1da1"),i=(a("96cf"),a("b0c0"),a("fadb")),o=a("bc3a"),l=a.n(o),m={name:"home",data:function(){return{name:"",email:"",password:""}},methods:{sendData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a;case 2:i["a"].post("users",{},{data:{name:e.name,email:e.email,password:e.password}}).then((function(t){localStorage.setItem("token",t.data.token),localStorage.setItem("name",e.name),e.$router.push("/")}));case 3:case"end":return t.stop()}}),t)})))()}}},c=m,u=(a("7f3e"),a("2877")),d=Object(u["a"])(c,n,s,!1,null,"0f13444a",null);t["default"]=d.exports},"47e6":function(e,t,a){},"7f3e":function(e,t,a){"use strict";a("47e6")}}]);
//# sourceMappingURL=chunk-72901cc8.67371053.js.map