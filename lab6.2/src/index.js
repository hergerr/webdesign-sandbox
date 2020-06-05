const main = require("./js/main");
import './style/index.scss'

window.onload = function () {
    let longitude = document.getElementById("longitude");
    let latitude = document.getElementById("latitude");
    let peopleList = document.getElementById('people-list');
    setInterval(function () {
        main.getCoords().then(data => {
            longitude.innerHTML = data.iss_position.longitude;
            latitude.innerHTML = data.iss_position.latitude;
        });
    }, 1000);

    main.getPeople().then(data => {
        data.people.forEach(element => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(element.name));
            peopleList.appendChild(li);
        })
    })
};
