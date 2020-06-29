import Vue from 'vue';
import vuex from 'vuex';

import loginUser from './loginUser.js';//引入用户登录信息配置

//1.安装
Vue.use(vuex);

//2.创建vuex的状态管理对象
let store=new vuex.Store({//配置
	modules:{
		loginUser,
	}
});

//3.导出配置，在main.js注入到vue实例中
export default store;
