import {login,logout,getUserInfo} from '../service/userService.js';

export default{
	namespaced:true,//开启命名空间
	state:{
		isLogin:false,//是否正在登录
		data:null//登录用户信息		
	},
	mutations:{
		setData(state,payload){
			state.data=payload;
		},
		setIsLogin(state,payload){
			state.isLogin=payload;
		}
	},
	actions:{
		async login(context,payload){
			context.commit('setIsLogin',true);
			let resp=await login(payload);
			let result=false;
			if(resp.code===0){//登录成功
				context.commit('setData',resp.data);
				result=true;
			}
			context.commit('setIsLogin',false);
			return result;
		},
		logout(context){
			logout();
			context.commit('setData',null);
		},
		async getUserInfo(context){
			context.commit('setIsLogin',true);
			let resp=await getUserInfo();
			context.commit('setData',resp);
			context.commit('setIsLogin',false);
		}
	}
}