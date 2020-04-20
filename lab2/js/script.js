function validateName() {
    var name = document.getElementById("name").value;
    var nameRegex = /^[A-Z][a-z]+$/;
    if (nameRegex.test(name)) return name;
    else return false
}

function validateLastName() {
    var lastName = document.getElementById("last-name").value;
    var lastNameRegex = /^[A-Z][a-z]+$/;
    if (lastNameRegex.test(lastName)) return lastName;
    else return false;
}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\+[0-9]{11}$/;
    if (phoneRegex.test(phone)) return phone;
    else return false;
}

function validateBirth() {
    var birth = document.getElementById("birth").value;
    var birthRegex = /^(3[0-1]|2[0-9]|1[0-9]|0[1-9]|[1-9])\.(1[0-2]|0[1-9]|[1-9])\.([0-9]{4})$/;
    if (birthRegex.test(birth)) return birth;
    else return false;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) return email;
    else return false;
}

function validateLogin() {
    var login = document.getElementById("login").value;
    var loginRegex = /^[a-z]+$/;
    if (loginRegex.test(login)) return login;
    else return false;
}

function validatePassword() {
    var pass = document.getElementById("password").value;
    var passConfirm = document.getElementById("password-confirm").value;

    if (pass == "" || passConfirm == "" || pass != passConfirm) return false;
    else return true;
}


function validateForm() {
    message = "";
    event.preventDefault(); // do not reload after form submitting
    var nameValidated = validateName();
    var lastNameValidated = validateLastName();
    var phoneValidated = validatePhone()
    var birthValidated = validateBirth()
    var emailValidated = validateEmail()
    var loginValidated = validateLogin()
    var passwordValidated = validatePassword()

    var name = document.getElementById("info-name");
    var lastName = document.getElementById("info-last-name");
    var phone = document.getElementById("info-phone");
    var birthDate = document.getElementById("info-birth");
    var email = document.getElementById("info-email");
    var login = document.getElementById("info-login");
    var password = document.getElementById("info-password");
    var msg = document.getElementById("text");


    if (!nameValidated) {
        name.innerHTML = "Wrong name";
    } else {
        message += "Name: " + nameValidated + ";";
        name.innerHTML = "";
    }

    if (!lastNameValidated) {
        lastName.innerHTML = "Wrong last name";
    } else {
        message += "Last name: " + lastNameValidated + ";";
        lastName.innerHTML = "";
    }

    if (!phoneValidated) {
        phone.innerHTML = "Wrong phone number";
    } else {
        message += "Phone number: " + phoneValidated + ";";
        phone.innerHTML = "";
    }

    if (!birthValidated) {
        birthDate.innerHTML = "Wrong birth date";
    } else {
        var splittedDate = birthValidated.split('.');
        message += "Birth day: " + splittedDate[0] + ";";
        message += "Birth month: " + splittedDate[1] + ";";
        message += "Birth year: " + splittedDate[2] + ";";
        birthDate.innerHTML = "";
    }

    if (!emailValidated) {
        email.innerHTML = "Wrong email";
    } else {
        message += "Email: " + emailValidated + ";";
        email.innerHTML = "";
    }

    if (!loginValidated) {
        login.innerHTML = "Wrong login";
    } else {
        message += "Login: " + loginValidated + ";";
        login.innerHTML = "";
    }

    if (!passwordValidated) {
        password.innerHTML = "Empty or not matching password";
    } else {
        message += "Passwords are correct and matching;";
        password.innerHTML = "";
    }

    if (nameValidated && lastNameValidated && phoneValidated && birthValidated && emailValidated && loginValidated && passwordValidated) {
        msg.innerHTML = message;
    } else {
        msg.innerHTML = "";
    }
}