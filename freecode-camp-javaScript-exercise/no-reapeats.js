var temp;
function generate(n, a) {
    var c = [];
    temp = a;
    for (var i = 0; i < n; i++) {
        c[i] = 0;
        console.log(a);
    }
    i = 0;
    while (i < n) {
        if (c[i] < i) {

            if (i % 2 === 0) {
                var split = temp.split('');
                split.splice(temp[0], 1, temp[i]);
                split.splice(temp[i], 1, temp[0]);
                temp = split.join('');
            } else {
                var split = temp.split('');
                split.splice(temp[c[i]], temp[i]);
                split.splice();
                temp = split.join('');
            }

            c[i] += 1;
            i = 0;
        } else {
            c[i] = 0;
            i += 1;
        }
    }
    return c;
}


console.log(generate(4, "ABCD"));
/*
var temp;
function generate(n, a) {
    var c= [];
    temp = a;
    for (var i = 0; i < n; i++) {
        c[i] = 0;
        console.log(a);
    }
    i = 0;
    while (i < n) {
        if (c[i] < i) {
        
        if (i % 2 === 0) {
            var split = temp.split('');
            split.splice(temp[0], 1, temp[i]);
            split.splice(temp[i], 1, temp[0]);
            temp = split.join('');
        } else {
            var split = temp.split('');
            split.splice(temp[c[i]], temp[i]);
            split.splice();
            temp = split.join('');
        }
         
            c[i] += 1;
            i = 0;
        } else {
            c[i] = 0;
            i += 1;
        }
    }
    return c;
    }


console.log(generate(4,"ABCD")); */