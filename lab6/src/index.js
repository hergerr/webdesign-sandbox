let math = require('./math.js');
let jokeGenerator = require('./joke.js')

for(let i = 0; i < 8; ++i){
    console.log(math.fib(i));
}

console.log(jokeGenerator.randomJoke);