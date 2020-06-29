import Vue from "vue";					//引入Vue
import VueRouter from "vue-router";		//引入vue-router

import store from "../store";

//1.安装
Vue.use(VueRouter);

//2.创建路由对象
let router=new VueRouter({//相关配置
	mode:"history",//路由模式
	routes:[
		{
			name:"Example1",
			path:"/",				
			component:()=>import('@/views/Example1.vue'),
		},
		{
			name:"Example2",
			path:"/example2",				
			component:()=>import('@/views/Example2.vue'),
		},
		{
			name:"Example3",
			path:"/example3",				
			component:()=>import('@/views/Example3.vue'),
		},
		{
			name:"Login",								//页面自定义名称
			path:"/login",									//页面路径
			component:()=>import('@/views/Login.vue')	//导入页面
		},
		{
			name:"Auth",//登录验证页面
			path:"/auth",
			component:()=>import ('@/views/Auth.vue'),
		},
		{
			name:"Personal",
			path:"/personal",				
			component:()=>import('@/views/Personal.vue'),
			meta:{//需要验证登录的页面
				auth:true
			}
		},
		{
			name:"404",
			path:"*",//匹配所有路径
			component:()=>import ('@/views/NotFound.vue')
		}
	]
});

router.beforeEach(function(to,from,next){//导航守卫，验证登录
	if(to.meta.auth){
		if(store.state.loginUser.isLogin){
			next({
				name:'Auth',
				query:{
					nextUrl:to.fullPath
				}
			});
		}else if(store.state.loginUser.data){
			next();
		}else{
			next({name:'Login'});
		}
	}else{
		next();
	}
});

//3.导出配置，在main.js配置路由到vue实例中
export default router;