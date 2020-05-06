const CAPATICY = 6;
var queue = [];

self.onmessage = function (event) {
    if (event.data.command === 'push') {
        if (queue.length >= CAPATICY) {
            console.log('Maksymalna liczba klientów przekroczona');
        } else {
            queue.push(event.data);
            console.log(`Do kolejki przesłano klienta, ktorego sprawa trwa ${event.data}`)
        }
    } else if (event.data.command === 'pop'){
        nextClientPeriod = queue.shift();
        postMessage({"type": "new client", "value": nextClientPeriod});
    }

}