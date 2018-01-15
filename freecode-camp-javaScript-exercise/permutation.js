var temp = "";
function permAlone(n, str) {
    let temp = str;
    if (n === 1) {
        console.log(temp)
    } else {
        for (var i = 0; i < n - 1; i++) {
            permAlone(n - 1, temp)
            if (n % 2 === 0) {
                var splitted = temp.split("");                         //
                console.log("this is the splited string", splitted)
                splitted.splice(i, 1, temp[n - 1])
                splitted.splice(n - 1, 1, temp[i]);
                temp = splitted.join("");

                console.log("this is the sliced string", splitted);
            } else {
                var splitted = temp.split("");
                splitted.splice(0, 1, temp[n - 1]);
                splitted.splice(n - 1, 1, temp[0]);
                temp = splitted.join("");
                console.log("the value of temp", temp);
            }
        }
        permAlone(n - 1, temp)
    }
}
console.log(permAlone(4, "ABCD"))

