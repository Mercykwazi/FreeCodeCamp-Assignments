function filtered(array, array2) {
     return array.filter(function (e) {
      return  e !== array2;
});
}
function updateInventory(arr1, arr2) {
    arr1.forEach(function (element) {
        for (var i = 0; i < arr2.length; i++) {
            if (element[1] === arr2[i][1]) {
                element[0] += arr2[i][0];
                arr2 = filtered(arr2, arr2[i]);
            }
        }
        if (arr2.indexOf(element) === -1) {
            arr2.push(element);
        }
    });
    return arr2.sort(function(a,b){
        if (a[1] < b[1]) return -1;
      else if (a[1] > b[1]) return 1;
      return 0;
    });
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

