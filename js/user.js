

let user = document.querySelector('#user');
let loginIcon=document.querySelector('.login-a')
let regiIcon=document.querySelector('.register-a')
let usernameStor=localStorage.getItem('username');
const logoutBtnn=document.querySelector('#logout_btn');
function logout(){
   
    localStorage.clear();
    setTimeout(function(){window.location='register.html'},1500)
}



if(usernameStor){
    loginIcon.remove()
    regiIcon.remove()
   user.innerHTML=usernameStor;
}

