self.onmessage = function(event){
    clientCaseDuration = event.data;
    setTimeout("doClientCase()", clientCaseDuration);
    console.log(`${self.name} jest wolny`)
    postMessage('usun mnie')
}

function doClientCase(){
    console.log(`${self.name} obsługuje klienta. Długość sprawy: ${clientCaseDuration}`);
}