container = document.getElementById("container")
containerWidth = container.clientWidth - 50;
containerHeight = container.clientHeight - 50;

DUCK_PATH = 'res/duck.png';


function drawdRandom(number, path) {
    for(var i = 0; i < number; ++i){
        var randX = Math.trunc(Math.random() * containerWidth);
        var randY = Math.trunc(Math.random() * containerHeight);
        

        var newImg = document.createElement("img");
        newImg.style.left = randX + "px";
        newImg.style.top = randY + "px";
        newImg.src = path;
        container.appendChild(newImg);
        newImg.style.position = "absolute";
        
        newImg.onclick = function(){
            newImg.remove();
        };
    }
    
};

drawdRandom(2, DUCK_PATH);