"use strict";(self["webpackChunkgame_web"]=self["webpackChunkgame_web"]||[]).push([[889],{5889:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var s=function(){var e=this,r=e._self._c;return r("div",{staticClass:"registerBox"},[r("div",{staticClass:"LoginBox"},[r("el-form",{ref:"loginRef",attrs:{model:e.loginForm,rules:e.loginRules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.loginInfo}},[e._v("登录")])],1)],1)],1)])},n=[],o=(t(7658),t(586)),a=t(3822),i={name:"MyLogin",data(){return{loginForm:{username:"lkx123",password:"123456"},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,10}$/,message:"用户名必须是1-10的大小写字母数字",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15的非空字符",trigger:"blur"}]}}},methods:{...(0,a.OI)(["updateToken"]),async loginInfo(){this.$refs.loginRef.validate((async e=>{if(!e)return;const{data:r}=await(0,o.UO)(this.loginForm);if(0!==r.code)return this.$message.error(r.message);this.$message.success(r.message),this.updateToken(r.token),this.$router.push("/loginHtml")}))}}},u=i,l=t(1001),m=(0,l.Z)(u,s,n,!1,null,"66c73f3a",null),c=m.exports},586:function(e,r,t){t.d(r,{I2:function(){return c},UO:function(){return m}});var s=t(7467),n=t.n(s),o=t(4239);const a="http://big-event-vue-api-t.itheima.net",i=n().create({baseURL:a}),u=["/one","/gameset","/conreq","/about"];i.interceptors.request.use((function(e){return u.includes(e.url)||(e.headers.Authorization=o.Z.state.token),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&o.Z.commit("undataToken",""),Promise.reject(e)}));var l=i;const m=({username:e,password:r})=>l({url:"/api/login",method:"post",data:{username:e,password:r}}),c=()=>l({url:"/my/cate/list"})}}]);
//# sourceMappingURL=889.e4de8fb9.js.map