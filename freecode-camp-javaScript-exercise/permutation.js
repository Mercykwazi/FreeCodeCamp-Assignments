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
                console.log("is this working", temp);
            }
        }
        permAlone(n - 1, temp)
    }
}
console.log(permAlone(4, "ABCD"))
/*var temp="";
function generate(n, a) {
    temp = a;
    if (n === 1) {
        console.log(a);
    } else {
        // for i := 0; i < n - 1; i += 1 do
        //     generate(n - 1, A)
        //     if n is even then
        // swap(A[i], A[n - 1])
        for (var i = 0; i <= n-1; i++) {
            generate(n - 1, temp);
            if (n % 2 === 0) {
                let split = temp.split("");
                split.splice(i, 1, temp[n - 1]);
                split.splice(n - 1, 1, temp[i]);
                temp = split.join("");
            } else {
                let split = temp.split("");
                split.splice(0, 1, temp[n - 1]);
                split.splice(n - 1, 1, temp[0]);
                temp = split.join("");
            }
        }
        generate(n - 1, temp);
    }

}
console.log(generate(4, "ABCD"));*/
