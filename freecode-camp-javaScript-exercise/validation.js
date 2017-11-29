function telephoneCheck(str) {
     var checker =/^(\d{10})/;
         return checker.test(str)
    }
    console.log(telephoneCheck("5555555555"))