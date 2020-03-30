function validateNumbers(x2, x1, x0) {
    numberRegex = /^-?\d+(\.[0-9]+)?$/; // accepts rational and whole numbers
    testX2 = numberRegex.test(x2);
    testX1 = numberRegex.test(x1);
    testX0 = numberRegex.test(x0);

    if (testX0 && testX1 && testX2) return true;
    else return false;
}


function count() {
    event.preventDefault(); // do not reload after form submitting
    x2 = document.getElementById("equation_x2").value;
    x1 = document.getElementById("equation_x1").value;
    x0 = document.getElementById("equation_x0").value;

    messageText = document.getElementById("result").childNodes[1];

    if (validateNumbers(x2, x1, x0)) {
        x2 = Number(x2);
        x1 = Number(x1);
        x0 = Number(x0);
        var delta = x1*x1 - 4*x2*x0;
        
        if (delta > 0 && x2 != 0){
            var root1 = (-x1 - Math.sqrt(delta))/(2*x2);
            var root2 = (-x1 + Math.sqrt(delta))/(2*x2);
            messageText.innerHTML = "Roots: " + root1 + ", " + root2;
        } else if (delta == 0 && x2 != 0){
            var root = -x1/(2*x2);
            messageText.innerHTML = "Only real root: " + root;
        } else {
            messageText.innerHTML = "No real roots";
        }

    } else {
        messageText.innerHTML = "Some of given arguments are not numbers";
    }
}