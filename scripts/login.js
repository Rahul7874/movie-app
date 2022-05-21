document.querySelector('form').addEventListener('submit', loginFun);
var loginData = JSON.parse(localStorage.getItem('signdata')) || [];
function loginFun(){
    event.preventDefault();
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    loginAuth(email.value, password.value);
    // console.log(email.value, password.value);
}

function loginAuth(email,password){
    var flag = false;
    for(var i=0; i<loginData.length; i++){
        if(loginData[i].email === email && loginData[i].password === password){
            flag = true;
            break;
        }
    }
    if(flag){
        alert('Login successfull');
        window.location.href = 'index.html';
    }
    else{
        alert('invalid Credentials');
    }
}