const myslide = document.querySelectorAll('.banner-item');
const dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


// let mySlide= document.querySelectorAll('.banner-item');
// let dots= document.querySelectorAll('.dot');
// let prev=document.querySelector('.prev');
// let next=document.querySelector('.next');
// let counter =1;
// sliding(counter);

// let timer=setInterval(autoSlide,8000);


// function autoSlide(){
// 	counter+=1;
// 	sliding(counter)
// }

// function plusSlides(n){
// 	counter +=n;
// 	sliding(counter);
// 	resetTimer();
// }

// function currentSlide(n){
// 	counter +=n;
// 	sliding(counter);
// 	resetTimer();
// }

// function resetTimer(){
// 	clearInterval(timer);
// 	timer = setInterval(autoSlide,8000)
// }

// function sliding(n){
// for(let i=0; i<mySlide.length ; i++){
// 	mySlide[i].style.display='none';
// }
// for(let i=0;i<mySlide.length;i++){
// 	dots[i].classList.remove('active');
// }
// if(n>mySlide.length){
// 	counter=1
// }if(n<1){
// 	counter=mySlide.length
// }
// console.log(counter)
// mySlide[counter-1].style.display='block';
// dots[counter-1].classList.add('active');
// }
