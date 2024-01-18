let welcomeMessage = document.getElementById('welcomeMessage');
let logoutBtn = document.getElementById('logoutBtn');

if (localStorage.getItem('userName') != null) {
    welcomeMessage.innerHTML = `Welcome ${localStorage.getItem('userName')}`
}

function logOut(){

    window.location.href = 'login.html';
    localStorage.removeItem('userName');
}

logoutBtn.addEventListener('click' , logOut);