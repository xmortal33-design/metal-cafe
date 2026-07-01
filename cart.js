// =========================
// METAL CAFE CART
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const subtotal = document.getElementById("subtotal");
const grandTotal = document.getElementById("grandtotal");

function loadCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        subtotal.innerText = "Rs.0";
        grandTotal.innerText = "Rs.150";

        return;
    }

    cart.forEach((item, index) => {

        let div = document.createElement("div");

        div.innerHTML = `
<div class="cart-item">

<h3>${item.name}</h3>

<p>${item.price}</p>

<div class="qty">

<button onclick="decreaseQty(${index})">-</button>

<span>${item.qty || 1}</span>

<button onclick="increaseQty(${index})">+</button>

</div>

<button onclick="removeItem(${index})">

🗑 Remove

</button>

<hr>

</div>
`;

        cartItems.appendChild(div);

        let price = Number(item.price.replace(/[^\d]/g, ""));
        let qty = item.qty || 1;

        total += price * qty;

    });

    subtotal.innerText = "Rs." + total;
    grandTotal.innerText = "Rs." + (total + 150);
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

function increaseQty(index){
cart[index].qty = (cart[index].qty || 1) + 1;

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();
}

function decreaseQty(index){
if((cart[index].qty || 1) > 1){
cart[index].qty--;
}else{
cart.splice(index,1);
}

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();
}

loadCart();

function increaseQty(index){

if(!cart[index].qty){

cart[index].qty=1;

}

cart[index].qty++;

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}

const continuePaymentBtn =
document.getElementById("continuePaymentBtn");

if(continuePaymentBtn){

continuePaymentBtn.addEventListener("click",()=>{

if(cart.length===0){

alert("Your cart is empty!");

return;

}

window.location.href="checkout.html";

});

}