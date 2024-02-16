// Obtendo Input de Senha
// Obtendo Botão de ver senha
var see_password_button = document.getElementById("see_password_button");
var password_input = document.getElementById("password_input");

function See_Password_Icon(){
    see_password_button.style.display = "inline";
}
function See_password(){
    password_input.setAttribute("type", "text");
    see_password_button.setAttribute("onclick", "Hide_password()");
    see_password_button.innerHTML = "visibility_off";
}
function Hide_password(){
    password_input.setAttribute("type", "password");
    see_password_button.setAttribute("onclick", "See_password()");
    see_password_button.innerHTML = "visibility";
}
