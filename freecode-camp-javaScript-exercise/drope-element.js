function dropElements(arr, func) {
    var array = [];
    for (var i = 0; i <= arr.length; i++) {
        if (func(arr[i]) !== false) {
            return arr.slice(i, arr.length);
        }
    }
    return array;

}
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1; }))