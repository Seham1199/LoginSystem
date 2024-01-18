let userNameInput = document.getElementById('userNameInput');
let emailInput = document.getElementById('emailInput');
let passwordInput = document.getElementById('passwordInput');
let signUpBtn = document.getElementById('signUpBtn');
let alertMessage = document.getElementById('alertMessage');
let userContainer = [];

if (localStorage.getItem('users') != null) {
    userContainer = JSON.parse(localStorage.getItem('users'));
}

function signUp(){
   let data = {
     userName: userNameInput.value ,
     emil: emailInput.value ,
     password: passwordInput.value ,
   }
   if (checkInputsEmpty() == true) {
    getAlertMessage('All Inputs Required' , 'red');
   }else{
    if (checkExistEmail() == true) {
        getAlertMessage('Email Already Exist' , 'red');
    }else{
        userContainer.push(data);
        localStorage.setItem('users' , JSON.stringify(userContainer)); 
        clearForm();
        getAlertMessage('Success' , 'green') ;  
    }
   } 
}
// Clear
function clearForm(){
    userNameInput.value = "" ;
    emailInput.value = "" ;
    passwordInput.value = "" ;
}

function getAlertMessage(text , color){
    alertMessage.classList.replace('d-none' , 'd-block');
    alertMessage.innerHTML = text ;
    alertMessage.style.color = color ;
}

function checkInputsEmpty(){
    if (userNameInput.value =='' || emailInput.value == '' || passwordInput.value == '') {
        return true ;
    } else {
        return false;
    }
}

function checkExistEmail(){
for(let i=0 ; i<userContainer.length ; i++){
    if (userContainer[i].emil == emailInput.value) {
        return true ;
    }
}
}

signUpBtn.addEventListener('click' , signUp);

function validationName(){
    let messageName = document.getElementById('messageName');
    let text = userNameInput.value;
    let regexName = /^[A-z]{3,10}$/; 
    if (regexName.test(text)) {
        userNameInput.classList.add('is-valid');
        userNameInput.classList.remove('is-invalid');
        messageName.classList.add('d-none');
        return true;
    }else{
        userNameInput.classList.remove('is-valid');
        userNameInput.classList.add('is-invalid');
        messageName.classList.remove('d-none');
        return false;
    }
}

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