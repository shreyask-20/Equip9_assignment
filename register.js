var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
var number = document.getElementById('number');
btnLogin.onclick = function(){
  idLogin.innerHTML = `<p>You are now registered. </p><h1>${username.value}</h1>`;
}