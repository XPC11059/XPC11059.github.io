(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-036788d4"],{2017:function(e,t,n){"use strict";var s=n("3b76"),o=n.n(s);o.a},"3b76":function(e,t,n){},"41ba":function(e,t,n){"use strict";var s=n("851f"),o=n.n(s);o.a},"851f":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"logo"},[n("h2",{staticClass:"zh"},[e._v("宁海城市管理统一集成平台")]),e._v(" "),n("div",{staticClass:"en"},[e._v("Ninghai city management unified integration platform")])]),e._v(" "),n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("用户登录")])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"account"}})],1),e._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"pwd"}})],1),e._v(" "),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),n("div",{staticStyle:{margin:"20px 0"}},[n("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")])],1),e._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px",height:"50px","font-size":"18px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)},o=[],a=n("61f7"),r={name:"Login",data:function(){var e=function(e,t,n){Object(a["b"])(t)?n():n(new Error("Please enter the correct user name"))},t=function(e,t,n){t.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0,checked:!0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1}).catch(function(){e.loading=!1})})}}},i=r,l=(n("2017"),n("41ba"),n("2877")),c=Object(l["a"])(i,s,o,!1,null,"294517cf",null);t["default"]=c.exports}}]);