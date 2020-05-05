

function timedCount() {
    var clientCaseDuration = getRandom(1000, 3000)
    var timeTillNextClient = getRandom(1000, 2000);
    postMessage(clientCaseDuration);
    setTimeout("timedCount()", timeTillNextClient);
}


// inne rozklady
// https://blog.bramp.net/post/2016/08/08/introducing-prob.js/
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

timedCount();