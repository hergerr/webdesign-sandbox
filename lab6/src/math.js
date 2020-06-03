math = {
    fib: function (n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return math.fib(n - 1) + math.fib(n - 2);
        }
    }
}

module.exports = math;