var queue;
var clientGenerator;
var officialA, officialB, officialC;

function startAll() {
    if (typeof (clientGenerator) === 'undefined' && typeof (queue) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined') {
        // project root path relative path
        clientGenerator = new Worker('./js/clientGenerator.worker.js');
        queue = new Worker('./js/queue.worker.js');
    }

    // client generator pushes new client every random period of time
    clientGenerator.onmessage = function (event) {
        clinetCaseDuration = event.data;
        queue.postMessage({ "command": "push", "value": clinetCaseDuration })
    }

    queue.onmessage = function (event) {
        queueAnswer = event.data

        if (queueAnswer.type == "new client") {
            while (true) {
                if (typeof (officialA) === 'undefined') {
                    officialA = new Worker('./js/official.worker.js', {
                        'name': 'officialA'
                    });
                    officialA.postMessage(queueAnswer.value);

                    officialA.onmessage = function () {
                        officialA.terminate();
                        officialA = undefined;
                        queue.postMessage({"command": "pop"})
                    }
                }
            }
        } else {
            
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


function main() {
    startAll();
}

main();