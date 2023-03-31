const fibonacci = function(retInd) {
    let fibArray = [1,1]
    for (let i = 2; i < +retInd; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return retInd >= 0 ? fibArray[+retInd - 1]: 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
