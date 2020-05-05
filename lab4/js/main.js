var queue;
var clientGenerator;

function startClientGeneratorWorker() {
    if (typeof(clientGenerator) === 'undefined'){
        // project root path relative path
        clientGenerator = new Worker('./js/clientGenerator.worker.js');
        queue = new Worker('./js/queue.worker.js');
    }

    clientGenerator.onmessage = function (event) {
        client = new Worker('./js/client.worker.js');
        // https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessage
        // queue.
        console.log(event.data);

    }   
}

function stopClientGeneratorWorker() {
    clientGenerator.terminate();
    clientGenerator = undefined
}


function main() {
    startClientGeneratorWorker();
}

main();