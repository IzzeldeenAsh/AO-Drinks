
let productItemsDOM= document.querySelector('.product-items');
let noProducts=document.querySelector('.noProducts')

function ProductsCartDraw(drinks =[]){
  if ( JSON.parse(localStorage.getItem('drinksInCart')).length ===0) {
 noProducts.innerHTML='There is no items'
  }


  let products= JSON.parse(localStorage.getItem('drinksInCart')) || drinks
    let productsUi = products.map((item)=>{
        return`<div class="product-item">
        <div class="product-img">
          <img src="${item.imageUr}" alt="drink-1">
          <div class="product-overlay">
         
            <ul class="icon-list">
              <li><a href="#products"><i class="fa-solid fa-circle-xmark add-item-btn" onclick="removeFromCart(${item.id})"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="product-desc">
         
          <span></span>${item.title} x ${item.qty}</span>
          
          <span class="price">${item.price}JD</span>
        </div>
        
      </div>`
    }).join('')

    productItemsDOM.innerHTML=productsUi
};

ProductsCartDraw()

function removeFromCart(id){
  let drinksInCart =localStorage.getItem('drinksInCart')
     if(drinksInCart){
      console.log(id);
      let items = JSON.parse(drinksInCart);
      let cartDrinks = items.filter((e)=> e.id !== id)
      ProductsCartDraw(cartDrinks)
      localStorage.setItem('drinksInCart',JSON.stringify(cartDrinks))
      ProductsCartDraw(cartDrinks)
     } else{

     }

}