rocket.style.left = "5px"
rocket = document.getElementById("rocket");
velocity = 20;
container = document.getElementById("container")
windowWidth = 0.9 * container.clientWidth;

document.addEventListener('keydown', function (e) {
    console.log(velocity);

    if (e.keyCode == "39") {
        if (velocity < 0) {
            velocity -= 3;
        } else {
            velocity += 3;
        }

    }
    if (e.keyCode == "37") {
        if (velocity < 0) {
            velocity += 3;
        } else {
            velocity -= 3;
        }
    }
})

function move() {
    rocket.style.left = parseInt(rocket.style.left) + velocity + "px";
    if (parseInt(rocket.style.left) >= windowWidth) {
        velocity = -velocity;
        rocket.src = "res/rocketship_back.gif";
    }
    if (parseInt(rocket.style.left) <= 10) {
        velocity = -velocity;
        rocket.src = "res/rocketship.gif";
    }
    setTimeout("move()", 100);
};

move();