// =========================
// ORDERS PART 3
// =========================

console.log("JSON.parse(localStorage.getItem('orders'))", JSON.parse(localStorage.getItem('orders')));

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const ordersList = document.getElementById("ordersList");

function loadOrders(){

ordersList.innerHTML="";

if(orders.length===0){

ordersList.innerHTML="<p>No Orders Yet</p>";

return;

}

orders.forEach((order, index) => {

ordersList.innerHTML += `
<div class="order-card">

<h3>${order.name}</h3>

<p><strong>Phone:</strong> ${order.phone}</p>

<p><strong>Address:</strong> ${order.address}</p>

<p><strong>Total:</strong> ${order.total}</p>

<button onclick="deleteOrder(${index})">
Delete Order
</button>

</div>
`;

});

}

console.log("Order Lenght:", orders.length);

loadOrders();

function deleteOrder(index){

if(confirm("Delete this order?")){

orders.splice(index,1);

localStorage.setItem("orders", JSON.stringify(orders));

loadOrders();

}

}
