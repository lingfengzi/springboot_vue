<template>
  <div id="app">
	  <header>
		  <div class="container">
			  <div class="title">
				  SpingBoot+Vue+Three.js
			  </div>
			  <ul class="nav">
				  <li v-for="item of nav" :key="item.id">
					  <!-- 命名导航-->
					<router-link :to="{name:item.url}">{{item.name}}</router-link>				  
				  </li>
			  </ul>
			  <div class="user">
				  <template v-if="userInfo">
					  <router-link :to="{name:'Personal'}" class="a-link">用户:{{userInfo.username}}</router-link>
					  <a href="" @click.prevent="logout()" class="a-link">注销</a>
				  </template>
				  <template v-else>
					  <router-link :to="{name:'Login'}" class="a-link">登录</router-link>
				  </template>			  
			  </div>			  
		  </div>
	  </header>

	  <!-- 路由的出入口，该标签会根据不同的访问路径，渲染不同的组件-->
		<router-view></router-view>
  </div>
</template>

<script>
import {mapState} from 	'vuex';
	
export default {
  name: 'App',
  components: {

  },
  data(){
	  return{
		  nav:[
			  {
				  id:"001",
				  name:"three.js案例一",
				  url:"Example1"
			  },
			  {
				  id:"002",
				  name:"three.js案例二",
				  url:"Example2"
				  
			  },
			  {
				  id:"003",
				  name:"three.js案例三",
				  url:"Example3"
			  },
		  ]
	  }
  },
  computed:mapState("loginUser",{
	  userInfo:'data'
  }),
  methods:{
	  logout(){
		  this.$store.dispatch("loginUser/logout");
		  this.$router.push({name:'Login'});
	  }
  }
}
</script>

<style scoped="scoped">
	#app{
		height: 100%;
		width: 100%;
	}
	header{
		height: 60px;
		background: #000;
		color:#fff;
		position: fixed;
		z-index: 100;
		width: 100%;
		border-bottom: 1px solid #fff;
		display: flex;
		justify-content: center;
	}
	.container{
		display: flex;
		width: 80%;
	}
	.title{
		display: flex;
		height: 100%;
		align-items: center;
		font-size: 25px;
	}
	.nav{
		display: flex;
		align-items: center;
		margin: 0 60px;
		width: 700px;
		list-style: none;
	}
	.nav li{
		padding: 0 30px;
	}
	.router-link-exact-active{
		color: #fcb85f;
	}
	.a-link{
		margin-left: 10px;
		color:#fff;
		font-size: 13px;
	}
	.user{
		display: flex;
		align-items: center;
	}

</style>
