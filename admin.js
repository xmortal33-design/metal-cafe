function login(){

let username=document.getElementById("username").value;

let password=document.getElementById("password").value;

if(username==="admin" && password==="1234"){

window.location.href="dashboard.html";

}else{

document.getElementById("error").innerText="Invalid Username or Password";

}

}