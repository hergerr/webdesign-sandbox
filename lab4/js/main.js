var queue;
var clientGenerator;
var officialA, officialB, officialC;
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");


function startAll() {
    if (typeof (clientGenerator) === 'undefined' && typeof (queue) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined') {
        // project root path relative path
        clientGenerator = new Worker('./js/clientGenerator.worker.js');
        queue = new Worker('./js/queue.worker.js');

        // first clients
        setTimeout(() => { queue.postMessage({ "command": "pop" }); queue.postMessage({ "command": "pop" }); queue.postMessage({ "command": "pop" }); }, 5000);
    }

    // client generator pushes new client every random period of time
    clientGenerator.onmessage = function (event) {
        clinetCaseDuration = event.data;
        queue.postMessage({ "command": "push", "value": clinetCaseDuration })
    }

    queue.onmessage = function (event) {
        if (event.data.type === "new client") {
            if (typeof (officialA) === 'undefined') {
                officialA = new Worker('./js/official.worker.js', {
                    'name': 'officialA'
                });
                officialA.postMessage(event.data.value);
                officialA.onmessage = function () {
                    officialA.terminate();
                    officialA = undefined;
                    queue.postMessage({ "command": "pop" })
                }
            } else if (typeof (officialB) === 'undefined') {
                officialB = new Worker('./js/official.worker.js', {
                    'name': 'officialB'
                });
                officialB.postMessage(event.data.value);
                officialB.onmessage = function () {
                    officialB.terminate();
                    officialB = undefined;
                    queue.postMessage({ "command": "pop" })
                }
            } else if (typeof (officialC) === 'undefined') {
                officialC = new Worker('./js/official.worker.js', {
                    'name': 'officialC'
                });
                officialC.postMessage(event.data.value);
                officialC.onmessage = function () {
                    officialC.terminate();
                    officialC = undefined;
                    queue.postMessage({ "command": "pop" })
                }
            }
        } else if (event.data.type == 'info') {
            console.log('Kolejka: ' + event.data.value);
            if (event.data.value === "Kolejka jest pusta") {
                setTimeout(() => {
                    queue.postMessage({ "command": "pop" });
                }, 1000);
            }
        }
    }
}


function stopAll() {
    queue.terminate();
    officialA.terminate();
    officialB.terminate();
    officialC.terminate();
    clientGenerator.terminate();
    clientGenerator = undefined;
    queue = undefined;
    officialA = undefined;
    officialB = undefined;
    officialC = undefined;
}


startButton.addEventListener("click", function (event) {
    startAll();
})

stopButton.addEventListener("click", function (event) {
    stopAll();
})
