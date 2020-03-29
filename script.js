function validateName() {
    var name = document.getElementById("name").value;
    var nameRegex = /^[A-Z][a-z]+$/;
    return nameRegex.test(name);
}

function validateLastName() {
    var lastName = document.getElementById("lastName").value;
    var lastNameRegex = /^[A-Z][a-z]+$/;
    return lastNameRegex.test(lastName);
}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\+[0-9]{11}$/;
    return phoneRegex.test(phone)
}

function validateBirth() {
    var birth = document.getElementById("birth").value;
    var birthRegex = /^(3[0-1]|2[0-9]|1[0-9]|0[1-9]|[1-9])\.(1[0-2]|0[1-9]|[1-9])\.([0-9]{4})$/;
    return birthRegex.test(birth);
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

function validateLogin() {
    var login = document.getElementById("login").value;
    var loginRegex = /^[a-z]+$/;
    return loginRegex.test(login);
}

function validatePassword() {
    var pass = document.getElementById("password").value;
    var passConfirm = document.getElementById("password-confirm").value;

    if (pass == "" || passConfirm == "" || pass != passConfirm) return false;
    else return true;
}


function validateForm() {
    validateName()
    validateLastName()
    validatePhone()
    validateBirth()
    validateEmail()
    validateLogin()
    validatePassword()
}