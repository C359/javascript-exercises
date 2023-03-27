const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR';
    }
    startNum = 0;
    endNum = 0;
    if (a < b) {
        startNum = a;
        endNum = b;
    } else {
        startNum = b;
        endNum = a;
    }

    total = startNum + endNum;
    diff = endNum - startNum;

    for (i = 1; i < diff; i++) {
        total += startNum + i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;



//identify the smaller number and select it as start
//start a total that begins as 0
//start a value that tracks the increasing number
//in a loop add 1 to start value until end value is reached, each loop add increasing number, and i 
