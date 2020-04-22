var canvas = document.getElementById("paint-canvas");
var scoreCounter = document.getElementById("counter");
var levelOutput = document.getElementById("level");
var ctx = canvas.getContext("2d");
var score = 0;
scoreCounter.innerText += score;
var running = true;

// ball start position
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballRadius = 10;
// ball speed
var dx = 5;
var dy = -5;


// paddle dimensions
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

// brick dimensions
var brickRowCount = 3;
var brickColumnCount = 11;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var bricks = [];

for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    collisionDetection();

    x += dx;
    y += dy;

    // collision with bottom and top
    // ballradius because of collision is counted with central point of the ball

    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            scoreCounter.innerHTML = `Game over. Your score: ${score}. Press "y" to start again`;
            running = false;
        }
    }

    // collision with right and left
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    // paddle coordinates changes
    if (rightPressed) {
        paddleX += 7;

        // set boundaries from right
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if (leftPressed) {
        paddleX -= 7;

        // ... and from left
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
    if (running)
        requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == "y" && running == false) {
        running = true;
        document.location.reload()
    }
    else if (e.key == "u" && running == true) {
        if (dx < 0 && dy < 0) {
            dx--;
            dy--;
        }
        else if (dx > 0 && dy > 0) {
            dx++;
            dy++;
        }
        else if (dx > 0 && dy < 0) {
            dx++;
            dy--;
        } else if (dx < 0 && dy > 0) {
            dx--;
            dy++;
        }

        levelOutput.innerHTML = `Level ("u" to higher, "i" lower): ${Math.abs(dx)}`;
    }
    else if (e.key == "i" && running == true && Math.abs(dx) > 1 && Math.abs(dy) > 1) {
        console.log(Math.abs(dx));
        if (dx < 0 && dy < 0) {
            dx++;
            dy++;
        }
        else if (dx > 0 && dy > 0) {
            dx--;
            dy--;
        }
        else if (dx > 0 && dy < 0) {
            dx--;
            dy++;
        } else if (dx < 0 && dy > 0) {
            dx++;
            dy--;
        }

        levelOutput.innerHTML = `Level ("u" to higher, "i" lower): ${Math.abs(dx)}`;
    }
}

function keyUpHandler(e) {
    if (e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// collision for brick
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                // x, y - ball position
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score += 1;
                    scoreCounter.innerText = `Score: ${score}`;
                    if (score == brickRowCount * brickColumnCount) {
                        scoreCounter.innerHTML = "You won!. Press \"y\" to start again"
                    }
                }
            }
        }
    }
}

draw()