<template>
	<Center>
		<h2>登录页面Login.vue</h2>
		<form class="login-container" @submit.prevent="handleSubmit()">
			<div class="form-item">
				<div class="input">
					<label>账号：</label>
					<input type="text" v-model="userInfo.username" @input="validateEmpty('username','请输入用户名')"/>
				</div>
				<FormError :msg="errorInfo.username"></FormError>
			</div>
			<div class="form-item">
				<div class="input">
					<label>密码：</label>
					<input type="password" v-model="userInfo.password" @input="validateEmpty('password','请输入密码')"/>
				</div>
				<FormError :msg="errorInfo.password"></FormError>
			</div>
			<div class="form-item">
				<div class="input">
					<label></label>
					<button>{{$store.state.loginUser.isLogin ? '登陆中...' : '登录'}}</button>
				</div>
				<FormError :msg="errorInfo.server" :isCenter="true"></FormError>
			</div>
		</form>
	</Center>
</template>

<script>
	import Center from '../components/Center.vue';
	import FormError from '../components/FormError.vue';
	
	import axios from 'axios';
	
	export default{
		name:'Login',
		components:{
			Center,
			FormError
		},
		data(){
			return{
				userInfo:{
					username:"",
					password:""
				},
				errorInfo:{
					username:"",
					password:"",
					server:""
				}
			}
		},
		methods:{
			validateEmpty(field,msg){//输入非空验证，field元素名，msg错误信息
				if(this.userInfo[field]){
					this.errorInfo[field]="";
					return true;
				}else{
					this.errorInfo[field]=msg;
					return false;
				}
			},
			async handleSubmit(){
				if(
					this.validateEmpty('username','请输入用户名')
				&&	this.validateEmpty('password','请输入密码')
				){
					let result=await this.$store.dispatch('loginUser/login',this.userInfo);
					if(result){
						alert("登录成功！");
						this.$router.push({name:"Personal"})
					}else{
						this.errorInfo.server="用户名或密码错误";
					}								
				}				
			}
		}
	}
</script>

<style scoped="scoped">
	.login-container{
		margin-top: 50px;
		width: 400px;
	}
	.input{
		display: flex;
	}
	label{
		width: 56px;
		display: inline-block;
		font-size: 18px;
		line-height: 40px;
	}
	input,button{
		border: 1px solid #ccc;
		flex-grow: 1;
		border-radius: 5px;
	}
	button{
		font-size:16px;
		background-color: #409EFF;
		color:#FFFFFF;
		line-height: 40px;		
	}
</style>
