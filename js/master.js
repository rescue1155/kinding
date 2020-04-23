
var signup_buttons = document.getElementsByClassName("signup-button");
for (var i = 0; i < signup_buttons.length; i++) {
    signup_buttons[i].addEventListener("click", () => {
        window.location.href = "/html/signup.html";
    });
}

var login_buttons = document.getElementsByClassName("login-button");
console.log(login_buttons);
for (var i = 0; i < login_buttons.length; i++) {
    login_buttons[i].addEventListener("click", () => {
        window.location.href = "/html/login.html";
    });
}