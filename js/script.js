
// define objects;

let productItemsDOM= document.querySelector('.product-items');
let CartIcon=document.querySelector('.cart');
let cartsItems=document.querySelector('.cart-products div');
let itemNumbers=document.querySelector('.item-numbers');
let cartProductsDrop=document.querySelector('.cart-products')
let redCart=document.querySelector('.red-cart')

let products= JSON.parse(localStorage.getItem('products'))
let productsDraw;
(productsDraw = function ProductsDraw(products=[]){
    let productsUi = products.map((item)=>{
        return`<div class="product-item">
        <div class="product-img">
          <img src="${item.imageUr}" alt="drink-1">
          <div class="product-overlay">
          
            <ul class="icon-list">
              <li><a><i class="fa-solid fa-heart" onclick="addToFav(${item.id})"></i></a></li>
              <li><a><i class="fa-solid fa-angles-right"></i></a></li>
              <li><a><i class="fa-solid fa-cart-shopping add-item-btn" onclick="addItem(${item.id})"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="product-desc">
         
        <a onclick="saveItemData(${item.id})"><span><span class="heart" style="display:${item.liked==true ? "inline-block" : "none"}"><i class="fa-solid fa-heart"></i><span class="red-cart"></span></span>${item.title}</span><a>
          
          <span class="price">${item.price}JD</span>
        </div>
        
      </div>`
    }).join('')

    productItemsDOM.innerHTML=productsUi
})(products)



let drinkList=localStorage.getItem('drinksInCart') ? JSON.parse(localStorage.getItem('drinksInCart')): [];
let allitems=[];
function addItem(id){
if(usernameStor){
    let pickedItem = products.find((item)=> item.id === id);
    let itemCounts=document.querySelectorAll('.cart-products div p');
    let item= allitems.find((e)=>e.id === pickedItem.id)
    if(item){
        pickedItem.qty +=1
    } else {
        allitems.push(pickedItem)
    };

    cartsItems.innerHTML = ""
    allitems.forEach((item)=>{ cartsItems.innerHTML +=`<p>${item.title} x <span class="how-many"> ${item.qty}</span></p>`;})

    drinkList =[...drinkList , pickedItem ]
    let UniqProducts =getUniqArr(drinkList, "id")
    localStorage.setItem('drinksInCart', JSON.stringify(UniqProducts))
    itemNumbers.style.display='block';
    itemNumbers.innerHTML=itemCounts.length+1;
    CartIcon.addEventListener('click',function(){
        if(cartProductsDrop!= ''){
            if(cartProductsDrop.style.display=='block'){
                cartProductsDrop.style.display='none'
            } else {
                cartProductsDrop.style.display='block'
            }
        }
    })

} else {
    window.location='login.html'
}
};
function getUniqArr(arr,filterType){
    let uniq = arr
    .map((item)=>item[filterType])
    .map((item,i,final)=>final.indexOf(item) === i && i )
    .filter((item)=>arr[item])
    .map((item)=>arr[item])

    return uniq
}

function saveItemData(id){
    localStorage.setItem("productId",id);
    window.location= 'cartDetails.html';
}

//Search

let inputSerch=document.querySelector('.search_bar');

inputSerch.addEventListener('keyup',function(e){
  
       search(e.target.value,products)
     
    if(e.target.value.trim() ===''){
        productsDraw(products)
    }
})

function search(title,mahArray){
    let arr=mahArray.filter( item => item.title.indexOf(title) !== -1)
 productsDraw(arr)

}


// Add Fav 

let favItem=localStorage.getItem('favItem') ? JSON.parse(localStorage.getItem('favItem')): [];
function addToFav(id){
    if(usernameStor){
        let pickedItem = products.find((item)=> item.id === id);
        favItem =[...favItem , pickedItem ]
        let UniqProducts =getUniqArr(favItem, "id")
        localStorage.setItem('favItem',JSON.stringify(UniqProducts))
        products.map((item)=>{
            if(item.id === pickedItem.id){
                item.liked = true;
            } 
        })
       localStorage.setItem('products',JSON.stringify(products))
       productsDraw(products)
        localStorage.setItem('favItem', JSON.stringify(UniqProducts))
    } else {
        window.location='login.html'
    }
    };