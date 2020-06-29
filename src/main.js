import Vue from 'vue';
import App from './App.vue';

import './assets/css/global.css';

import router from "./router/index.js";		//引入路由
import store from "./store/index.js";		//引入状态管理

Vue.config.productionTip = false;

//获取登录数据
store.dispatch("loginUser/getUserInfo");

new Vue({
  render: h => h(App),
  router,		
  store 		
}).$mount('#app');
