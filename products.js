// =========================
// PRODUCTS PART 3
// =========================

let products = JSON.parse(localStorage.getItem("products")) || [];

const productsList = document.getElementById("productsList");

function loadProducts(){

productsList.innerHTML="";

products.forEach((product,index)=>{

productsList.innerHTML += `
<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<button onclick="editProduct(${index})">✏️ Edit</button>

<button onclick="deleteProduct(${index})">🗑 Delete</button>

</div>
`;

});

}

function deleteProduct(index){

products.splice(index,1);

localStorage.setItem("products",JSON.stringify(products));

loadProducts();

}

function editProduct(index){

    let product = products[index];

document.getElementById("productName").value = product.name;
document.getElementById("productPrice").value = product.price;
document.getElementById("productImage").value = product.image;

            products.splice(index, 1);

localStorage.setItem("products", JSON.stringify(products));

loadProducts();

alert("Edit Product feature will be added in next part.");

}

loadProducts();

function saveProduct(){

let name=document.getElementById("productName").value;

let price=document.getElementById("productPrice").value;

let image=document.getElementById("productImage").value;

if(name==="" || price==="" || image===""){

alert("Please fill all fields.");

return;

}

products.push({

name:name,

price:price,

image:image

});

localStorage.setItem("products",JSON.stringify(products));

loadProducts();

document.getElementById("productName").value="";
document.getElementById("productPrice").value="";
document.getElementById("productImage").value="";

document.getElementById("productForm").style.display="none";

}