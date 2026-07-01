const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

let username = document.getElementById("username").value.trim();
let password = document.getElementById("password").value.trim();
let message = document.getElementById("loginMessage");

if (username === "admin" && password === "12345") {

localStorage.setItem("adminLoggedIn", "true");

window.location.href = "dashboard.html";

} else {

message.innerText = "Invalid Username or Password";

}

});

