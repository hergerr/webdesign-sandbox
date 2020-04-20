var canvas = document.getElementById('paint-canvas');
var ctx = canvas.getContext('2d');

var canvasX = canvas.offsetLeft;
var canvasY = canvas.offsetTop;

// console.log(`${canvasY}, ${canvasX} `)

var isDrawing = false;
var startX;
var startY;

canvas.addEventListener("mousedown", function (e) {
    var mouseX = parseInt(e.pageX - canvasX);
    var mouseY = parseInt(e.pageY - canvasY); 

    if (isDrawing){
        isDrawing = false;
        ctx.beginPath();
        console.log(`${startX}, ${startY}`)
        ctx.rect(startX, startY, mouseX - startX, mouseY - startY);
        ctx.fill();
        canvas.style.cursor = "default";
    } else {
        isDrawing = true;
        startX = mouseX;
        startY = mouseY;
        canvas.style.cursor = "crosshair";
    }
})
