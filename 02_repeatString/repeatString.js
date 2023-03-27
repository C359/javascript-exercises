const repeatString = function(compString, num) {

    if (num < 0) {
        return 'ERROR';
    }

    finalString = ''


    for (i=0; i<num; i++){
        finalString += compString;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
