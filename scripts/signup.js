document.querySelector('form').addEventListener('submit', signupFun);
var signupData = JSON.parse(localStorage.getItem('signdata')) || [];
function signObj(name,contact,email,password){
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.password =password;
}


function signupFun(){
    event.preventDefault()
    var name = document.querySelector('#name');
    var contact = document.querySelector('#contact');
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var sData = new signObj(name.value,contact.value,email.value,password.value);
    // console.log(sData);
    signupData.push(sData);
    localStorage.setItem('signdata', JSON.stringify(signupData));
    alert('Signup successfull...');
    name.value = null;
    contact.value = null;
    email.value = null;
    password.value = null;
    window.location.href = 'login.html';
}