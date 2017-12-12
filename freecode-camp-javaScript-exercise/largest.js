function largestOfFour(arr) {
    // You can do this!
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i][0];
        for (var v = 0; v < arr[i].length; v++) {
            if (arr[i][v] > num) {
                num = arr[i][v];

            }
            array[i] = num;
        }
    }
    return array;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))