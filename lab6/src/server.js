const http = require('http');
const os = require('os');
const jokeGenerator = require('./joke');
const fs = require('fs');


let server = http.createServer(function (req, res) {
    if (req.url == "/ping") {

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('Pong');
        res.end();

    }
    else if (req.url == "/datetime") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        let date = new Date();
        res.write(`${date.getHours()}:${date.getMinutes()}, ${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`);
        res.end();

    }
    else if (req.url == "/cpus") {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(os.cpus()));
        res.end();

    }
    else if (req.url == "/env") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(JSON.stringify(process.env));
        res.end();

    }
    else if (req.url == "/joke") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(jokeGenerator.randomJoke);
        res.end();

    }
    else if (req.url == "/somedata") {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        fs.writeFile("/tmp/test", "We want more PIW", function (err) {
            if (err) {
                res.write(err);
                res.end();
            }
        });

        fs.readFile("/tmp/test", "utf8", function (err, data) {
            res.write(data);
            res.end();
        });

    }
    else
        res.end('Invalid Request!');

});

server.listen(8080); //6 - listen for any incoming requests