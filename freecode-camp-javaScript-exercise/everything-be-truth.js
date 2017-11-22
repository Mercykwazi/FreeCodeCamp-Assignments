function truthCheck(collection, pre) {
    for (var i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) {
            return false;
        }
    }
}