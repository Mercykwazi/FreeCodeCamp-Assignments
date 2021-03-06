function sym() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    function symDiff(arr, array) {
        var result = [];

        arr.forEach(function (item) {
            if (array.indexOf(item) === -1 && result.indexOf(item) === -1) {
                result.push(item);
            }
        });

        array.forEach(function (item) {
            if (arr.indexOf(item) === -1 && result.indexOf(item) === -1) {
                result.push(item);
            }
        });
        return result;
    }
    return args.reduce(symDiff);
}
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))