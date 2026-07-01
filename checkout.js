// =========================
// METAL CAFE CHECKOUT.JS
// PART 1
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems = document.getElementById("checkoutItems");
const checkoutTotal = document.getElementById("checkoutTotal");

function loadCheckout() {

checkoutItems.innerHTML = "";

let total = 0;

cart.forEach(item => {

let qty = item.qty || 1;

let price = Number(String(item.price).replace(/[^\d]/g,""));

total += price * qty;

checkoutItems.innerHTML += `
<div class="checkout-item">

<span>${item.name} × ${qty}</span>

<span>Rs.${price * qty}</span>

</div>
`;

});

checkoutTotal.innerText = "Rs." + total;

}

loadCheckout();

// =========================
// PART 2
// CONTINUE TO PAYMENT
// =========================

const continuePaymentBtn =
document.getElementById("continuePaymentBtn");

const paymentSection =
document.getElementById("paymentSection");

const paymentMethod =
document.getElementById("paymentMethod");

const paymentDetails =
document.getElementById("paymentDetails");

const paymentInfo =
document.getElementById("paymentInfo");

continuePaymentBtn.addEventListener("click", function(){

let name =
document.getElementById("customerName").value.trim();

let phone =
document.getElementById("customerPhone").value.trim();

let address =
document.getElementById("customerAddress").value.trim();

if(name==="" || phone==="" || address===""){

alert("Please fill all fields.");

return;

}

paymentSection.style.display="block";

continuePaymentBtn.style.display="none";

});

// =========================
// PART 3
// PAYMENT METHOD
// =========================

paymentMethod.addEventListener("change", function(){

paymentDetails.style.display = "block";

if(paymentMethod.value === "EasyPaisa"){

paymentInfo.innerHTML = `
<b>EasyPaisa Number</b><br>
03123456789
`;

}

else if(paymentMethod.value === "JazzCash"){

paymentInfo.innerHTML = `
<b>JazzCash Number</b><br>
03123456789
`;

}

else if(paymentMethod.value === "Cash on Delivery"){

paymentInfo.innerHTML = `
<b>Cash on Delivery Selected</b><br>
Pay when your order arrives.
`;

paymentDetails.style.display = "none";

}

else{

paymentInfo.innerHTML = "";

paymentDetails.style.display = "none";

}

});

// =========================
// PART 4
// CONFIRM ORDER
// =========================

const confirmPaymentBtn =
document.getElementById("confirmPaymentBtn");

confirmPaymentBtn.addEventListener("click", function(){

let name =
document.getElementById("customerName").value.trim();

let phone =
document.getElementById("customerPhone").value.trim();

let address =
document.getElementById("customerAddress").value.trim();

let payment =
document.getElementById("paymentMethod").value;

if(payment===""){

alert("Please Select Payment Method");

return;

}

let order={

name:name,

phone:phone,

address:address,

payment:payment,

total:checkoutTotal.innerText,

items:cart,

date:new Date().toLocaleString()

};

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));

console.log("Order Saved:", order);

alert("Order Length: " + orders.length);

alert("✅ Order Saved Successfully!");

});