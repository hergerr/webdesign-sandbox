var queue;
var clientGenerator;
var officialA, officialB, officialC;

function startAll() {
    if (typeof (clientGenerator) === 'undefined' && typeof (queue) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined') {
        // project root path relative path
        clientGenerator = new Worker('./js/clientGenerator.worker.js');
        queue = new Worker('./js/queue.worker.js');
        officialA = new Worker('./js/official.worker.js', {
            'name': 'officialA'
        });
        officialB = new Worker('./js/official.worker.js', {
            'name': 'officialB'
        });
        officialC = new Worker('./js/official.worker.js', {
            'name': 'officialC'
        });

        // first client
        setTimeout(() => { queue.postMessage({ "command": "pop" }) }, 3000);
    }

    // client generator pushes new client every random period of time
    clientGenerator.onmessage = function (event) {
        clinetCaseDuration = event.data;
        queue.postMessage({ "command": "push", "value": clinetCaseDuration })
    }

    queue.onmessage = function (event) {
        if (event.data.type === "new client") {
            officialA.postMessage(event.data.value);
            officialA.onmessage = function () {
                // officialA.terminate();
                // officialA = undefined;
                queue.postMessage({ "command": "pop" })
            }
        } else if (event.data.type == 'info') {
            console.log('Kolejka: ' + event.data.value);
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