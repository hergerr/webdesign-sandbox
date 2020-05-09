var maxHeight = 0
var minHeight = 0
var maxDepth = 0


self.onmessage = function (event) {
    array = event.data;

    array.forEach(element => {
        if (element > maxHeight) {
            var d = maxHeight - minHeight;
            maxHeight = element;
            minHeight = element;
        } else if (element < minHeight) {
            minHeight = element;
        } else {
            var d = element - minHeight;
        }

        if (d > maxDepth) {
            maxDepth = d;
        }

    });
    postMessage(maxDepth);
}
