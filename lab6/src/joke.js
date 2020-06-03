let oneLinerJoke = require('one-liner-joke');

let jokeGenerator =  {
    randomJoke: oneLinerJoke.getRandomJoke().body
}

module.exports = jokeGenerator;