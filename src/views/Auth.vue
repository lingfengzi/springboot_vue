<template>
	<Center>
		<h1>登录验证中...</h1>
	</Center>
</template>

<script>
	import Center from "../components/Center.vue";
	import {mapState} from "vuex";
	
	export default{
			components:{
				Center
			},
			computed:mapState("loginUser",["data","isLogin"]),
			methods:{
				handleLogin(){
					if(this.isLogin){
						return;
					}
					if(this.data){
						if(this.$route.query.nextUrl){
							this.$router.push(this.$route.query.nextUrl);
						}else{
							this.$router.push({name:"Personal"});
						}
					}else{
						this.$router.push({name:"Login"});
					}
				}
			},
			watch:{
				isLogin:{
					immediate:true,
					handler(){
						this.handleLogin();
					}
				},
			}
		}
</script>

<style>
</style>
