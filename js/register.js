let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let RegBtn= document.getElementById('register-Btn');

RegBtn.addEventListener('click',register);

function register (e){
        e.preventDefault()
        if(username.value == '' || email.value=='' || password.value =='' ){
            alert('You must enter correct data')
        }else{
            localStorage.setItem('username', username.value)
            localStorage.setItem('email', email.value)
            localStorage.setItem('password', password.value)
           setTimeout(function(){
            window.location='login.html'
           },1000)
        }
};