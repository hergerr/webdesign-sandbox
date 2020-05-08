var queue;
var clientGenerator;
var officialA, officialB, officialC;
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var officialAState = document.getElementById("officialA");
var officialBState = document.getElementById("officialB");
var officialCState = document.getElementById("officialC");
var queueState = document.getElementById("queue");
var serviced = document.getElementById("serviced");
var notServiced = document.getElementById("not-serviced");
var servicedCounter = 0;
var notServicedCounter = 0;

function startAll() {
    if (typeof (clientGenerator) === 'undefined' && typeof (queue) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined' && typeof (officialA) == 'undefined') {
        // project root path relative path
        clientGenerator = new Worker('./js/clientGenerator.worker.js');
        queue = new Worker('./js/queue.worker.js');

        // first clients
        queue.postMessage({ "command": "pop" }); queue.postMessage({ "command": "pop" }); queue.postMessage({ "command": "pop" });
    }

    // client generator pushes new client every random period of time
    clientGenerator.onmessage = function (event) {
        clinetCaseDuration = event.data;
        queue.postMessage({ "command": "push", "value": clinetCaseDuration })
    }

    queue.onmessage = function (event) {
        queueState.innerHTML = event.data.queue

        // if there's new client from queue
        if (event.data.type === "new client") {

            // if official is not busy (nit exists)
            if (typeof (officialA) === 'undefined') {

                // make official
                officialA = new Worker('./js/official.worker.js', {
                    'name': 'officialA'
                });

                // assign case and update DOM
                officialAState.innerHTML = `Obsługuje sprawe o dlugosci ${event.data.value}`
                officialA.postMessage(event.data.value);

                // if case is finished, make worker free and update DOM
                officialA.onmessage = function () {
                    officialA.terminate();
                    officialA = undefined;
                    officialAState.innerHTML = `wolny`;
                    servicedCounter += 1;
                    serviced.innerHTML = servicedCounter;

                    // invite new client
                    queue.postMessage({ "command": "pop" })
                }
            } else if (typeof (officialB) === 'undefined') {
                officialB = new Worker('./js/official.worker.js', {
                    'name': 'officialB'
                });
                officialBState.innerHTML = `Obsługuje sprawe o dlugosci ${event.data.value}`
                officialB.postMessage(event.data.value);
                officialB.onmessage = function () {
                    officialB.terminate();
                    officialB = undefined;
                    officialBState.innerHTML = `wolny`;
                    servicedCounter += 1;
                    serviced.innerHTML = servicedCounter;
                    queue.postMessage({ "command": "pop" })
                }
            } else if (typeof (officialC) === 'undefined') {
                officialC = new Worker('./js/official.worker.js', {
                    'name': 'officialC'
                });
                officialCState.innerHTML = `Obsługuje sprawe o dlugosci ${event.data.value}`
                officialC.postMessage(event.data.value);
                officialC.onmessage = function () {
                    officialC.terminate();
                    officialC = undefined;
                    officialCState.innerHTML = `wolny`;
                    servicedCounter += 1;
                    serviced.innerHTML = servicedCounter;
                    queue.postMessage({ "command": "pop" })
                }
            }
        } 
        // when queue wants to say sth, update DOM
        else if (event.data.type == 'info') {
            console.log(event.data.value);

            // if queue is empty, wait till there is sth.
            if (event.data.value === "Kolejka jest pusta") {
                setTimeout(() => {
                    queue.postMessage({ "command": "pop" });
                }, 1000);
            
            } 
            
            // if queue capacity is reached, update DOM
            else if (event.data.value === "Maksymalna liczba klientów przekroczona") {
                notServicedCounter++;
                notServiced.innerHTML = notServicedCounter;
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
