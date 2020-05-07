var clientCaseDuration;

self.onmessage = function(event){
    clientCaseDuration = event.data;
    console.log(`${self.name} zaczyna obsługe`);
    setTimeout("doClientCase()", clientCaseDuration);
}

function doClientCase(){
    console.log(`${self.name} obsłużył klienta. Długość sprawy: ${clientCaseDuration}`);
    postMessage('usun mnie')
}