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

			}
		},
		mounted() {
			if(WEBGL.isWebGLAvailable()){
				console.log("THREE.WebGLRenderer",THREE.REVISION);
				this.initThree();
			}else{
				document.body.appendChild(WEBGL.getWebGLErrorMessage());
			}
		},
		methods:{
			initThree(){
				let scene,renderer,camera,orbit,stats;
				let axes,settings;
				
				let container=document.getElementById("myCanvas");
				
				init();
				initModel();
				initGui();
				animate();
							
				function init(){
					scene=new THREE.Scene();
								
					renderer=new THREE.WebGLRenderer({
						antialias:true
					});
					renderer.setSize(container.clientWidth,container.clientHeight);
					renderer.setPixelRatio(window.devicePixelRatio);
					container.appendChild(renderer.domElement);
								
					camera=new THREE.PerspectiveCamera(60,container.clientWidth/container.clientHeight,1,1000);
					camera.position.set(0,20,50);
					camera.lookAt(scene.position);
								
					orbit=new OrbitControls(camera,renderer.domElement);
					orbit.enableDamping=true;
					orbit.minDistance=1;
					orbit.maxDistance=500;
					
					stats=new Stats();
					stats.domElement.style.top = "unset";
					stats.domElement.style.left = "unset";
					stats.domElement.style.right = "20px";
					stats.domElement.style.bottom = "10px";
					container.appendChild(stats.domElement);
					
					scene.add(new THREE.AmbientLight(0xffffff));
				}
				
				function initModel(){
					axes=new THREE.AxesHelper(30);
					axes.visible=false;
					scene.add(axes);
				}
				
				function initGui(){
					settings={
						axesVisible:false
					};
					let gui=new GUI();
					gui.domElement.style.position="fixed";
					gui.domElement.style.top="60px";
					
					gui.add(settings,"axesVisible").name("坐标轴").onChange(e=>{
						axes.visible=e;
					});
				}
				
				function onWindowResize(){
					camera.aspect=container.clientWidth/container.clientHeight;
					camera.updateProjectionMatrix();
					renderer.setSize(container.clientWidth,container.clientHeight);
				}
				
				function render(){
					renderer.render(scene,camera);
				}
				
				function animate(){
					render();
					stats.update();
					orbit.update();
					window.onresize=onWindowResize();
					requestAnimationFrame(animate);
				}
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
