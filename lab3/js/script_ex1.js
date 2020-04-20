var canvas = document.getElementById('paint-canvas');
var ctx = canvas.getContext('2d');
//Variables
var canvasx = canvas.offsetLeft;
var canvasy = canvas.offsetTop;
var last_mousex = last_mousey = 0;
var mousex = mousey = 0;
var mousedown = false;


canvas.addEventListener("mousedown", function (e) {
    last_mousex = parseInt(e.pageX - canvasx);
    last_mousey = parseInt(e.pageY - canvasy);
    mousedown = true;
})

canvas.addEventListener("mouseup", function (e) {
    mousedown = false;
})

//Mousemove
canvas.addEventListener('mousemove', function (e) {
    mousex = parseInt(e.pageX - canvasx);
    mousey = parseInt(e.pageY - canvasy);
    if (mousedown) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
        ctx.beginPath();
        var width = mousex - last_mousex;
        var height = mousey - last_mousey;
        ctx.rect(last_mousex, last_mousey, width, height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
});