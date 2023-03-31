const palindromes = function (testStr) {
    alphOnly = Array.from(testStr).filter(char => char.match(/[a-z]/i));
    return alphOnly.join('').toUpperCase() === alphOnly.reverse().join('').toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
