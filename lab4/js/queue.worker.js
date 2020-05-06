const CAPATICY = 6;
var queue = [];

self.onmessage = function (event) {
    if (event.data.command === 'push') {
        if (queue.length >= CAPATICY) {
            postMessage({"type": "info", "value":"Maksymalna liczba klientów przekroczona" })
        } else {
            queue.push(event.data);
            postMessage({"type": "info", "value": `Do kolejki przesłano klienta, ktorego sprawa trwa ${event.data.value}`})
        }
    } else if (event.data.command === 'pop'){
        var nextClientPeriod = queue.shift();
        

        postMessage({"type": "new client", "value": nextClientPeriod});
    }

}