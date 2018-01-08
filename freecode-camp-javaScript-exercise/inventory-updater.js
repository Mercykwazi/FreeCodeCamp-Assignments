function filtered(array, array2) {
    return array.filter(e => e !== array2);
}
function updateInventory(arr1, arr2) {
    arr2.forEach(function (element) {
        for (var i= 0; i< arr1.length; i++) {
            if (element[1] === arr1[i][1]) {
                element[0] += arr1[i][0];
                arr1 = filtered(arr1, arr1[i]);
            }
        }
        if (arr1.indexOf(element) === -1) {
            arr1.push(element);
        }
    });
    return arr1;
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
console.log(updateInventory(curInv, newInv));

