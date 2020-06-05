const axios = require('axios');

function getCoords () {
    return axios.get('http://api.open-notify.org/iss-now.json')
        .then(response => {
          return response.data;
        })
    }

function getPeople (){
    return axios.get('http://api.open-notify.org/astros.json')
    .then(response => {
      return response.data;
    })
}

// location = document.getElementById("location");

// let interval = setInterval(function() {
//     getCoords().then(data => console.log(data));
// }, 1000);

module.exports = { getCoords:getCoords, getPeople: getPeople };