const CAPATICY = 6;
var queue = [];

self.onmessage = function (event) {
    if (event.data.command === 'push') {
        if (queue.length === CAPATICY) {
            postMessage({"type": "info", "value":"Maksymalna liczba klientów przekroczona" })
        } else {
            queue.push(event.data.value);
            postMessage({"type": "info", "value": `Do kolejki przesłano klienta, ktorego sprawa trwa ${event.data.value}`})
        }
    } else if (event.data.command === 'pop'){
        if (queue.length > 0){
            var nextClientPeriod = queue.shift();
            postMessage({"type": "new client", "value": nextClientPeriod});
        } else {
            postMessage({"type": "info", "value": "Kolejka jest pusta"});
        }
        

    }

}