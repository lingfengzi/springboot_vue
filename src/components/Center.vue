<template>
	<div class="center">
		<!-- 插槽：可以在其中添加任意内容 -->
		<slot>默认插槽</slot>
	</div>
</template>

<script>
	export default{
		name:'Center'
	}
</script>

<style scoped="scoped">
	.center{
		position: fixed;
		left: 50%;
		top: 35%;
		transform: translate(-50%,-50%);
		padding: 5px;
	}
</style>
