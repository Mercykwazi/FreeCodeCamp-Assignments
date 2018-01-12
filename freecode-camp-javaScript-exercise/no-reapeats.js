
var temp ="";
function premAlone(n, str, arr) {
    for (var i = 0; i < n; i++) {
    }
    console.log(str);
    while ( i= 0,i < n,i++) {
        if(arr[i] < i){
        if (i % 2 === 0) {
            var spited =str;
             spited.splice(i, 1, temp[n - 1])
                spited.splice(n - 1, 1, temp[i]);
                temp = spited.join("");
        } else {
            var spited = str.split("");
            spited.splice(str[arr[i]], 1, str[i])
            console.log(spited);
              spited.splice(0, 1, temp[n - 1]);
                spited.splice(n - 1, 1, temp[0]);
                temp = spited.join("");
        }
        }
        console.log(temp);
    }
    }
console.log(premAlone(2, "abc", ["b, c, d"]));
