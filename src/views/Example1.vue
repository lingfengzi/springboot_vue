<template>
	<div class="content">
		<div class="content-title">three.js案例一 -- 模拟下雨</div>
		<div id="myCanvas">
			
		</div>
	</div>
</template>

<script>
	import * as THREE from "three";
	import {WEBGL} from "three/examples/jsm/WebGL.js";
	import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
	import Stats from "three/examples/jsm/libs/stats.module.js";
	import {GUI} from "three/examples/jsm/libs/dat.gui.module.js";
	
	export default{
		data(){
			return{
				container:null,
				scene:null,
				renderer:null,
				camera:null,
				orbit:null,
				stats:null,
				axes:null,
				settings:null
			}
		},
		mounted() {
			if(WEBGL.isWebGLAvailable()){
				console.log("THREE.WebGLRenderer",THREE.REVISION);
				this.init();
				this.initModel();
				this.initGui();
				this.animate();
				
			}else{
				document.body.appendChild(WEBGL.getWebGLErrorMessage());
			}
		},
		methods:{
			init(){
				this.container=document.getElementById("myCanvas");
				
				this.scene=new THREE.Scene();
				
				this.renderer=new THREE.WebGLRenderer({
					antialias:true
				});
				this.renderer.setSize(this.container.clientWidth,this.container.clientHeight);
				this.renderer.setPixelRatio(window.devicePixelRatio);
				this.container.appendChild(this.renderer.domElement);
				
				this.camera=new THREE.PerspectiveCamera(60,this.container.clientWidth/this.container.clientHeight,1,1000);
				this.camera.position.set(0,20,50);
				this.camera.lookAt(this.scene.position);
				
				this.orbit=new OrbitControls(this.camera,this.renderer.domElement);
				this.orbit.enableDamping=true;
				this.orbit.minDistance=1;
				this.orbit.maxDistance=500;
				
				this.stats=new Stats();
				this.stats.domElement.style.top = "unset";
				this.stats.domElement.style.left = "unset";
				this.stats.domElement.style.right = "20px";
				this.stats.domElement.style.bottom = "10px";
				this.container.appendChild(this.stats.domElement);
				
				this.scene.add(new THREE.AmbientLight(0xffffff));
			},
			initModel(){
				this.axes=new THREE.AxesHelper(30);
				this.axes.visible=false;
				this.scene.add(this.axes);
			},
			initGui(){
				this.settings={
					axesVisible:false
				};
				let gui=new GUI();
				gui.domElement.style.position="fixed";
				gui.domElement.style.top="60px";
				
				gui.add(this.settings,"axesVisible").name("坐标轴").onChange(e=>{
					this.axes.visible=e;
				});
			},
			onWindowResize(){
				this.camera.aspect=this.container.clientWidth/this.container.clientHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize(this.container.clientWidth,this.container.clientHeight);
			},
			render(){
				this.renderer.render(this.scene,this.camera);
			},
			animate(){
				this.render();
				this.stats.update();
				this.orbit.update();
				window.onresize=this.onWindowResize();
				requestAnimationFrame(this.animate);
			}
		}
	}
</script>

<style scoped="scoped">
	.content{
		position: relative;
		width: 100%;
		padding-top: 60px;
		height: calc(100% - 61px);
	}
	.content-title{
		position: absolute;
		width: 100%;
		text-align: center;
		line-height: 30px;
	}
	#myCanvas{	
		height: 100%;
		width: 100%;
	}
</style>
