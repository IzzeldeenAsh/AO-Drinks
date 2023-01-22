
let productItemsDOM= document.querySelector('.product-items');
let noProducts=document.querySelector('.noProducts')

function ProductsFavCartDraw(drinks =[]){
  if ( JSON.parse(localStorage.getItem('favItem')).length ===0) {
 noProducts.innerHTML='There is no items'
  }


  let products= JSON.parse(localStorage.getItem('favItem')) || drinks
    let productsUi = products.map((item)=>{
        return`<div class="product-item">
        <div class="product-img">
          <img src="${item.imageUr}" alt="drink-1">
          <div class="product-overlay">
         
            <ul class="icon-list">
              <li><a href="#products"><i class="fa-solid fa-circle-xmark add-item-btn" onclick="removeFromFav(${item.id})"></i></a></li>
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

ProductsFavCartDraw()

function removeFromFav(id){
  let favItem =localStorage.getItem('favItem')
     if(favItem){
      console.log(id);
      let items = JSON.parse(favItem );
      let cartDrinks = items.filter((e)=> e.id !== id)
      ProductsFavCartDraw(cartDrinks)
      localStorage.setItem('favItem',JSON.stringify(cartDrinks))
      ProductsFavCartDraw(cartDrinks)
     } else{

     }

}