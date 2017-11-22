
function binaryAgent(str) {
    var splittedString = str.split(' ');
    var string = [];
    for (i = 0; i < splittedString.length; i++) {
        string.push(String.fromCharCode(parseInt(splittedString[i], 2)));
    }
}
console.log(binaryAgent(str))