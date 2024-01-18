let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let loginBtn = document.getElementById('loginBtn');
let alertMessage = document.getElementById('alertMessage');
let userContainer = [];

if (localStorage.getItem('users') != null) {
    userContainer = JSON.parse(localStorage.getItem('users'));
}

function logIn(){
   let data = {
     emil: emailInput.value ,
     password: passwordInput.value ,
   }
   if (checkInputsEmpty() == true) {
    getAlertMessage('All Inputs Required' , 'red');
   }else{
    if (checkEmailPassword() == true) {
        window.location.href = 'home.html';
    }else{
        getAlertMessage('Email or Password notCorrect','red');
    }
   } 
}
// Clear
function clearForm(){
    emailInput.value = "" ;
    passwordInput.value = "" ;
}

function getAlertMessage(text , color){
    alertMessage.classList.replace('d-none' , 'd-block');
    alertMessage.innerHTML = text ;
    alertMessage.style.color = color ;
}

function checkInputsEmpty(){
    if (emailInput.value == '' || passwordInput.value == '') {
        return true ;
    } else {
        return false;
    }
}

function checkEmailPassword(){
for(let index=0 ; index<userContainer.length ; index++){
    if (userContainer[index].emil == emailInput.value && userContainer[index].password == passwordInput.value) {
        localStorage.setItem('userName' , userContainer[index].userName)
        return true ;
    }
}
}

loginBtn.addEventListener('click' , logIn);

function validationEmail(){
    let messageEmail = document.getElementById('messageEmail');
    let text = emailInput.value;
    let regexEamil =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regexEamil.test(text)) {
        emailInput.classList.add('is-valid');
        emailInput.classList.remove('is-invalid');
        messageEmail.classList.add('d-none');
        return true;
    }else{
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
        messageEmail.classList.remove('d-none');
        return false;
    }
}
function validationPassword(){
    let messagePassword = document.getElementById('messagePassword');
    let text = passwordInput.value;
    let regexPassword =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regexPassword.test(text)) {
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        messagePassword.classList.add('d-none');
        return true;
    }else{
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
        messagePassword.classList.remove('d-none');
        return false;
    }
}