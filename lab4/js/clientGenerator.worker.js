

self.importScripts("../bower_components/random/lib/random.min.js");
self.importScripts("../bower_components/prob.js/dist/prob-min.js");

var normal;
var exponential;

onmessage = function(event){
    normal = Prob.normal(event.data.expected, event.data.variance);
    exponential = Prob.exponential(event.data.lambda);
    timedCount();
}

function timedCount() {
    var clientCaseDuration = Math.abs(Math.trunc(normal()));
    var timeTillNextClient = Math.abs(Math.trunc(exponential()));
    postMessage(clientCaseDuration);
    setTimeout("timedCount()", timeTillNextClient);
}
