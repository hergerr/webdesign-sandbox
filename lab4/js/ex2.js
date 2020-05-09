exerciseNumber = document.getElementById("exercise-number");

function solution(A) {
    var maxHeight = 0
    var minHeight = 0
    var maxDepth = 0

    A.forEach(element => {
        if (element > maxHeight) {
            var d = maxHeight - minHeight
            maxHeight = element
            minHeight = element
        } else if (element < minHeight) {
            minHeight = element
        } else {
            var d = element - minHeight
        }

        if (d > maxDepth) {
            maxDepth = d
        }
    });

    return maxDepth
}


window.onload = function () {
    exerciseNumber.innerHTML = `Numer zadania: 241255 mod 5 = ${241255 % 5}`
    console.log(solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]))
}
