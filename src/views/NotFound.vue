<template>
	<Center>
		<img src="../assets/img/404.gif"/>
		<h3>抱歉，页面不存在...</h3>
	</Center>
</template>

<script>
	import Center from '../components/Center.vue';
	export default{
		name:'NotFound',
		components:{
			Center
		}
	}
</script>

<style scoped="scoped">
	img{
		width: 600px;
		height: 400px;
		margin-top: 50px;
	}
	h3{
		text-align: center;
	}
</style>
