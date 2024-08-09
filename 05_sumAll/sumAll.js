const sumAll = function(num1, num2) {
    let newVal = 0;
    if (num1 > num2) {
        let extVar = num1
        num1 = num2
        num2 = extVar
    }
    else if ((num1 < 0) ||
        (Number.isInteger(num1) == false) || 
        (Number.isInteger(num2) == false)) {
        return ("ERROR")
    }

    for (i = num1; i <= num2; i++) {
        newVal = newVal + i;
    }
    
    return(newVal);
};

// Do not edit below this line
module.exports = sumAll;
