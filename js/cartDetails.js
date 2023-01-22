let products=JSON.parse(localStorage.getItem("products"));

let productID = localStorage.getItem('productId');

let productDetails= products.find((item)=> item.id == productID);

let ItemDOM= document.querySelector('.item-details');

ItemDOM.innerHTML = ` <div class="item-details">
<img src="${productDetails.imageUr}" alt="">
<h2>${productDetails.title}</h2>
<span>${productDetails.price} JD</span>
</div>`

