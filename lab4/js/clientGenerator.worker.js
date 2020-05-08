

self.importScripts("../bower_components/random/lib/random.min.js");
self.importScripts("../bower_components/prob.js/dist/prob-min.js");

var normal = Prob.normal(10000, 5000);
var exponential = Prob.exponential(0.0001);

function timedCount() {
    var clientCaseDuration = Math.abs(Math.trunc(normal()));
    var timeTillNextClient = Math.abs(Math.trunc(exponential()));
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