var exerciseNumber = document.getElementById("exercise-number");
var button = document.getElementById("button");
var arrayTag = document.getElementById("array");
var resultTag = document.getElementById("result");

class Solver {
    constructor(size) {
        this.size = size;
        this.solverWorker = undefined;
        this.array = []
        for (var i = 0; i < this.size; i++) {
            this.array.push(Math.round(Math.random() * 100))
        }
        arrayTag.innerHTML = `Wylosowana tablica: ${this.array}`;
    }


    solve() {
        this.solverWorker = new Worker('./js/ex2.solver.worker.js')
        this.solverWorker.postMessage(this.array);
        this.solverWorker.onmessage = (event) => {
            this.solverWorker.terminate();
            this.solverWorker = undefined;
            resultTag.innerHTML = `Wynik: ${event.data}`;
        }
    }
}



window.onload = function () {
    exerciseNumber.innerHTML = `Numer zadania: 241255 mod 5 = ${241255 % 5}`

    button.addEventListener("click", function (event) {
        event.preventDefault();
        var size = document.getElementById("size");
        if (size.checkValidity()) {
            size = parseInt(size.value);
            var solver = new Solver(size);
            solver.solve();
        }


    })
}
