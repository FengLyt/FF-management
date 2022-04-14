import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from "element-ui";
import axios from "axios";
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

//配置axios
axios.defaults.baseURL="http://localhost:8080/";
Vue.prototype.$http=axios;
//axios 请求拦截
axios.interceptors.request.use(config =>{
//为请求头对象，添加 Token 验证的 token 字段
  config.headers.token = window.sessionStorage.getItem('token');
  return config;
})
// 添加响应拦截器
axios.interceptors.response.use((res) =>{
  console.log(res);
  if(res.headers.code==201){
    alert("身份信息过期，请重新登录")
    router.push("/login");
  }
  return res;
});


Vue.use(router)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
