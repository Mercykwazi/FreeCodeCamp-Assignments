var temp="";
function permAlone(n, str) {
    let temp =str;
    if (n === 1) {
        console.log(temp)
    } else {
        for (var i = 0; i < n - 1; i++) {
            permAlone(n - 1,temp)
            if (n % 2 === 0) {
                var splitted = temp.split("");
                console.log("this is the splitted string",splitted)
                splitted.splice(temp[i],1,temp[n-1])

                console.log("this is the sliced string",splitted);
            } else {
                var splitted = temp.split("");
                splitted.splice(temp[0], 1, temp[n-1])
                console.log(splitted);
            }
        }
        permAlone(n - 1, temp)
    }
}
console.log(permAlone(3,"aba"))

