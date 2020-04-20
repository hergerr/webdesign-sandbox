// getting elements
var canvas = document.getElementById('paint-canvas');
var rect = document.getElementById("rectangle");
var filledRect = document.getElementById("filled-rectangle");
var circle = document.getElementById("circle");
var filledCircle = document.getElementById("filled-circle");
var colorPicker = document.getElementById("color-control");

// setting initial values
var ctx = canvas.getContext('2d');
var canvasx = canvas.offsetLeft;
var canvasy = canvas.offsetTop;
var last_mousex = last_mousey = 0;
var mousex = mousey = 0;
var mousedown = false;
var currentShape = "rectangle";
rect.classList.add("active");

// opcja bez wymazywania
// http://jsfiddle.net/m1erickson/7uNfW/

// event listeners
rect.addEventListener("click", function (e) {
    currentShape = "rectangle";
    rect.classList.add("active");
    filledRect.classList.remove("active");
    circle.classList.remove("active");
    filledCircle.classList.remove("active");
})

filledRect.addEventListener("click", function(e){
    currentShape = "filledRect";
    filledRect.classList.add("active");
    rect.classList.remove("active");
    circle.classList.remove("active");
    filledCircle.classList.remove("active");
})

circle.addEventListener("click" , function(e){
    currentShape = "circle";
    circle.classList.add("active");
    rect.classList.remove("active");
    filledRect.classList.remove("active");
    filledCircle.classList.remove("active");
})

filledCircle.addEventListener("click", function(e){
    currentShape = "filledCircle";
    filledCircle.classList.add("active");
    rect.classList.remove("active");
    filledRect.classList.remove("active");
    circle.classList.remove("active");
})

canvas.addEventListener("mousedown", function (e) {
    last_mousex = parseInt(e.pageX - canvasx);
    last_mousey = parseInt(e.pageY - canvasy);
    mousedown = true;
})

canvas.addEventListener("mouseup", function (e) {
    mousedown = false;
})

canvas.addEventListener('mousemove', function (e) {
    mousex = parseInt(e.pageX - canvasx);
    mousey = parseInt(e.pageY - canvasy);
    if (mousedown) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
        ctx.beginPath();
        var width = mousex - last_mousex;
        var height = mousey - last_mousey;

        if (currentShape == "rectangle"){
            ctx.rect(last_mousex, last_mousey, width, height);
            ctx.strokeStyle = colorPicker.value;
            ctx.lineWidth = 1;
            ctx.stroke();
        } else if (currentShape == "filledRect"){
            ctx.rect(last_mousex, last_mousey, width, height);
            ctx.fillStyle = colorPicker.value;
            ctx.fill();
        } else if (currentShape == "circle"){
            ctx.beginPath();
            // last two args - beginning and ending of curve
            ctx.strokeStyle = colorPicker.value;
            ctx.lineWidth = 1;
            ctx.arc(last_mousex, last_mousey, Math.abs(width), 0, 2 * Math.PI);
            ctx.stroke();
        } else if (currentShape == "filledCircle"){
            ctx.beginPath();
            ctx.arc(last_mousex, last_mousey, Math.abs(width), 0, 2 * Math.PI);
            ctx.fillStyle = colorPicker.value;
            ctx.fill();
        }
        
    }
});