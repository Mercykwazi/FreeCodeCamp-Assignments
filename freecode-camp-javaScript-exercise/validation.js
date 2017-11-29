function telephoneCheck(str) {
    var checker = /^(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return checker.test(str)
}
console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("555 555 5555"))
console.log(telephoneCheck("(555)555-5555"))
console.log(telephoneCheck("(555) 555-5555"))