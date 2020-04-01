container = document.getElementById("container")
containerWidth = container.clientWidth - 50;
containerHeight = container.clientHeight - 50;
duckCounter = document.getElementById("counter");
counter = 0;
duckCounter.innerText += counter;

DUCK_PATH = 'res/duck.png';


function drawRandom(number, path) {
    for(var i = 0; i < number; ++i){
        let randX = Math.trunc(Math.random() * containerWidth);
        let randY = Math.trunc(Math.random() * containerHeight);
        

        let newImg = document.createElement("img");
        newImg.style.left = randX + "px";
        newImg.style.top = randY + "px";
        newImg.src = path;
        newImg.className = "selectDisable";
        container.appendChild(newImg);
        newImg.style.position = "absolute";
        
        newImg.onclick = function(e){
            e.target.remove();
            counter++;
            duckCounter.innerText = `Duck shot: ${counter}`;
        };
    }
    setTimeout(`drawRandom(${number++}, DUCK_PATH)`, 3000);
    
};

drawRandom(5, DUCK_PATH);