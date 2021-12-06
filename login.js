let username = document.querySelector('#username');
let pass = document.querySelector('#password');

function authenticate(form){
    if(username.value=="nishant" && pass.value=="popli"){
        location.href = "welcomepage.html";
    }
}