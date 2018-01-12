
function permAlone(str) {
    var permStore =[];
    for(var i in str){
permStore.push(str[i])
    }
  return permStore;
}

console.log(permAlone('aab'));