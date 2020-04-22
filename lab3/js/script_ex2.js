var canvas = document.getElementById("paint-canvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;

// ball start position
var x = canvas.width / 2;
var y = canvas.height - 30;
// ball speed
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    x += dx;
    y += dy;

    // collision with bottom and top
    // ballradius because of collision is counted with central point of the ball
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    // collision with right and left
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }


}

setInterval(draw, 10);