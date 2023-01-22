let username=document.querySelector('#username');
let password=document.querySelector('#password');
let signInBtn=document.querySelector('#sign_in_btn');

let getUser=localStorage.getItem('username');
let passwordUser=localStorage.getItem('password');

signInBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(username.value == '' || password.value =='' ){
        alert('Please fill data.')
    }else{
       if(
        getUser && 
        getUser.trim() ===username.value.trim()&&
        passwordUser &&
        passwordUser==password.value){
setTimeout(function(){window.location='index.html'},1500)
       } else {
        console.log('Username or password is wrong');
       }
    }
})