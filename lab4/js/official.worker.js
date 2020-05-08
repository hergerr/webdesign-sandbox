var clientCaseDuration;

self.onmessage = function(event){
    clientCaseDuration = event.data;
    setTimeout("doClientCase()", clientCaseDuration);
}

function doClientCase(){
    console.log(`${self.name} obsłużył klienta. Długość sprawy: ${clientCaseDuration}`);
    postMessage('usun mnie')
}