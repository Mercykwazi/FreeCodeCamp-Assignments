
function pairwise(arr, arg) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {

        for (var x = i + 1; x < arr.length; x++) {

            if (arr[i] + arr[x] === arg) {
                counter += i;
                counter += x;
                counter[i] = counter[x] = NaN;

            }

        }

    }

    return counter;

}

console.log(pairwise([1, 3, 2, 4], 4))