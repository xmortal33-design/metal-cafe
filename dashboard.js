// =========================
// DASHBOARD PART 4C
// =========================

function logout(){

alert("Logged Out Successfully!");

window.location.href="admin.html";

}

document.getElementById("totalOrders").innerText="0";
document.getElementById("totalSales").innerText="Rs.0";
document.getElementById("totalProducts").innerText="8";let products = JSON.parse(localStorage.getItem("products")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
console.log("Dashboard Orders:", orders);

document.getElementById("totalProducts").innerText = products.length;
document.getElementById("totalOrders").innerText = orders.length;

// Recent Orders

if (orders.length > 0) {

let recent = "";

orders.slice(-5).reverse().forEach((order, index) => {

recent += `
<div style="padding:10px;border-bottom:1px solid #444;">
<strong>${order.name}</strong><br>
${order.phone}<br>
${order.total  || "Rs.0"}
</div>
`;

});

document.getElementById("recentOrders").innerHTML = recent;

}
