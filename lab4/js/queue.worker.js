var capacity;
var queue = [];

self.onmessage = function (event) {
    if (event.data.command === 'push') {
        if (queue.length === capacity) {
            postMessage({"type": "info", "value":"Maksymalna liczba klientów przekroczona", "queue": queue })
        } else {
            queue.push(event.data.value);
            postMessage({"type": "info", "value": `Do kolejki przesłano klienta, ktorego sprawa trwa ${event.data.value}`, "queue": queue})
        }
    } else if (event.data.command === 'pop'){
        if (queue.length > 0){
            var nextClientPeriod = queue.shift();
            postMessage({"type": "new client", "value": nextClientPeriod, "queue": queue});
        } else {
            postMessage({"type": "info", "value": "Kolejka jest pusta", "queue": queue});
        }
    } else if (event.data.command === "init"){
        capacity = parseInt(event.data.capacity);
    }

}