const reverseString = function(normString) {
    stringArray = normString.split('')
    revArray = stringArray.reverse()
    revString = stringArray.join('')
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
