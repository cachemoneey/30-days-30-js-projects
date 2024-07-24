let password = document.getElementById("password");
let hidePassword = document.getElementById("hide-pw");

hidePassword.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        hidePassword.src = "images/eye-open.png";
    }else {
        password.type = "password";
        hidePassword.src = "images/eye-close.png";
    }
}
