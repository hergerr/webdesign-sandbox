var clientCaseDuration;

self.onmessage = function(event){
    clientCaseDuration = event.data;
    setTimeout("doClientCase()", clientCaseDuration);
    console.log(`${self.name} jest wolny`)
}

function doClientCase(){
    console.log(`${self.name} obsługuje klienta. Długość sprawy: ${clientCaseDuration}`);
    postMessage('usun mnie')
}