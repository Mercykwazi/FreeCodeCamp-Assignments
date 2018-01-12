function permAlone(str) {
    var test = [];
    for (var index = 0; index < str.length; index++) {
        var ti = str[index] + str.replace(str.charAt(index), "");
        test.push(ti);
    }
    test.forEach(function (element) {
        for (var x = 0; x < element.length; x++) {
        var pi = element[x] + element.replace(element.charAt(x), "");
        test.push(pi);
        }
    });
    test.forEach(function (character) {
        for (var t = 0; t < character.length; t++) {
        var pi = character[t] + character.replace(character.charAt(t), "");
        test.push(pi);
        }
    });
return remove(test).length;
}
function remove(arr){
    var noRepeats = [];
    arr.forEach(function(element){
        if(noRepeats.indexOf(element) === -1){
            noRepeats.push(element);
        }        
    });
    return noRepeats;
}
console.log(permAlone("abcd"))
