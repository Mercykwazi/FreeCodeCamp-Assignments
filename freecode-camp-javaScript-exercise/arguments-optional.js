function addTogether(num1, num2) {
    function isNum(number) {
        if (typeof number === "number") {
            return true;
        }
    }
    if (!isNum(num1)) {
        return undefined;
    }

    if (isNum(num1) && isNum(num2)) {
        return num1 + num2;
    } else if (!num2) {
        var sumUp = function (value) {
            if (isNum(value)) {
                return num1 + value;
            }
        };

        return sumUp;
    }
}
