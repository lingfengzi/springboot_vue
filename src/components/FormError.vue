<template>
	<div class="error"
	:class="{'txt-center':isCenter}"
	:style="{visibility:msg ? 'visible' : 'hidden'}">
		{{msg}}
	</div>
</template>

<script>
	export default{
		props:{
			msg:{//错误消息
				type:String,
				default:""
			},
			isCenter:{//是否居中
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style>
	.txt-center{
		text-align: center;
	}
	.error{
		font-size: 14px;
		color: #a44242;
		padding-left: 56px;
		height: 30px;
		line-height: 30px;
	}	
</style>
