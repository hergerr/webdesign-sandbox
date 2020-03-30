function mouseOver(obj){
    obj.src = obj.src.slice(0, -6) + "ver.gif";
    animal = document.getElementById("animal-image");
    animal.src=obj.src.slice(0, -8) + ".gif";
}

function mouseOut(obj){
    obj.src = obj.src.slice(0, -7) + "ut.gif";
}
