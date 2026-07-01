// =========================
// METAL CAFE V2
// SCRIPT PART 1
// =========================

let cartCount = 0;

const cart = document.getElementById("cart-count");

const buttons = document.querySelectorAll(".menu-card button");

buttons.forEach(button => {

button.addEventListener("click", () => {

cartCount++;

if(cart){

cart.textContent = cartCount;

}

alert("Item Added To Cart ✅");

});

});

// =========================
// SCRIPT PART 2
// Pizza Price System
// =========================

const selects = document.querySelectorAll(".menu-card select");

selects.forEach(select => {

    select.addEventListener("change", function () {

        const price = this.value;

        const card = this.parentElement;

        let priceTag = card.querySelector(".selected-price");

        if (!priceTag) {

            priceTag = document.createElement("p");

            priceTag.classList.add("selected-price");

            card.insertBefore(priceTag, this.nextSibling);

        }

        priceTag.innerHTML = "<b>Selected: " + price + "</b>";

    });

});

// =========================
// SCRIPT PART 3
// Checkout Validation
// =========================

const orderButtons = document.querySelectorAll(".menu-card button");

orderButtons.forEach(btn => {

btn.addEventListener("click", function(){

console.log("Item added successfully.");

});

});

// Smooth Welcome

window.onload = function(){

console.log("Metal Cafe V2 Loaded Successfully");

};

// =========================
// SCRIPT PART 4
// REAL CART SYSTEM
// =========================

let cartItems = [];

const menuButtons = document.querySelectorAll(".menu-card button");

menuButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = this.parentElement;

        const itemName = card.querySelector("h3").innerText;

        let itemPrice = "";

        const select = card.querySelector("select");

        if (select) {
            itemPrice = select.value;
        } else {
            itemPrice = card.querySelector("p").innerText;
        }

        cartItems.push({
            name: itemName,
            price: itemPrice,
            qty: 1
        });

          localStorage.setItem("cart", JSON.stringify(cartItems));

        calulateTotal();
        console.log(cartItems);

        alert(itemName + " Added To Cart 🛒");

    });

});

// =========================
// SCRIPT PART 5
// TOTAL BILL
// =========================

function calculateTotal() {

let total = 0;

cartItems.forEach(item => {

let price = item.price.replace(/[^\d]/g,"");

total += Number(price);

});

console.log("Total Bill = Rs. " + total);

}

// =========================
// CUSTOMER REVIEWS
// =========================

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

const reviewsContainer = document.getElementById("reviewsContainer");
const submitReview = document.getElementById("submitReview");

function loadReviews(){

    if(!reviewsContainer) return;

    reviewsContainer.innerHTML = "";

    reviews.forEach(review=>{

        reviewsContainer.innerHTML += `
        <div class="review-card">
            <h3>${review.name}</h3>
            <p>⭐⭐⭐⭐⭐</p>
            <p>${review.text}</p>
        </div>
        `;

    });

}

if(submitReview){

submitReview.addEventListener("click",()=>{

let name = document.getElementById("reviewName").value;
let text = document.getElementById("reviewText").value;

if(name==="" || text===""){

alert("Please fill all fields");

return;

}

reviews.push({
name:name,
text:text
});

localStorage.setItem("reviews",JSON.stringify(reviews));

loadReviews();

document.getElementById("reviewName").value="";
document.getElementById("reviewText").value="";

alert("Thank you for your review!");

});

}

loadReviews();

// =========================
// ADVANCED SEARCH
// =========================

const search = document.getElementById("searchInput");

if (search) {

search.addEventListener("keyup", function () {

let value = search.value.toLowerCase();

const sections = document.querySelectorAll(".menu-section");

sections.forEach(section => {

let text = section.innerText.toLowerCase();

if (value === "") {

section.style.display = "block";

} else if (text.includes(value)) {

section.style.display = "block";

} else {

section.style.display = "none";

}

});

});

}

// =========================
// WISHLIST
// =========================

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach((btn) => {

btn.addEventListener("click", function () {

let product = this.parentElement.querySelector("h3").innerText;

if (!wishlist.includes(product)) {

wishlist.push(product);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

alert(product + " added to Wishlist ❤️");

} else {

alert("Already in Wishlist ❤️");

}

});

});

// =========================
// PAGE LOADER
// =========================

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},600);

},4000);

});