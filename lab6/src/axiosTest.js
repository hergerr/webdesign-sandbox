const axios = require('axios');

axios.get('https://randomuser.me/api/')
    .then(function (response) {
        // handle success
        responseData = response.data.results[0]
        console.log(`${responseData.name.title} ${responseData.name.first} ${responseData.name.last}`);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });