const removeFromArray = function(startArray) {
    argArr = Array.from(arguments);
    argArr = argArr.slice(1);
    newArr = startArray;
    lenCount = newArr.length;
    
    for(i = 0; i < lenCount; i++) {
        if (argArr.includes(newArr[i])) {
            console.log(argArr);
            removed = newArr.splice(i,1);
            lenCount--;
            i--;
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
