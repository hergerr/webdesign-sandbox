const main = require("./js/main");
import './style/index.scss'

window.onload = function () {
    let location = document.getElementById("people-list");
    let interval = setInterval(function () {
        main.getCoords().then(data => location.innerHTML = JSON.stringify(data));
    }, 1000);
};



//   clearInterval(interval);

// main.getPeople().then(data => console.log(data));


