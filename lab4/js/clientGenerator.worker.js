

function timedCount() {
    var clientCaseDuration = getRandom(10000, 15000)
    var timeTillNextClient = getRandom(3000, 5000);
    postMessage(clientCaseDuration);
    setTimeout("timedCount()", timeTillNextClient);
}


// inne rozklady
// https://blog.bramp.net/post/2016/08/08/introducing-prob.js/
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function normalDistribution() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

function exponentialDistribution(x, lambda) {
    if (x < 0) {
        return 0;
    }
    return lambda * Math.exp(-1 * lambda * x);
}

timedCount();