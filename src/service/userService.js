import axios from 'axios';

//登录
async function login(userInfo){
	//post方法获取登录信息
	let resp=await axios.post('http://127.0.0.1:8089/springboot_vue/loginCheck',userInfo);
	console.log(resp);
	//获取服务器授权码
	let token=resp.headers.authorization;
	if(token){
		localStorage.setItem("token",token);
	}
	return resp.data;
}

//注销
function logout(){
	localStorage.removeItem("token");
}

//使用保存的令牌从服务器获取登录信息
async function getUserInfo(){
	let token=localStorage.getItem("token");
	if(token){
		let resp=await axios.get("http://127.0.0.1:8089/springboot_vue/getUserInfo",{
			headers:{
				authorization:`${token}`
			}
		});
		return resp.data.data;
	}else{
		return null;
	}
}

export {
	login,
	logout,
	getUserInfo
}