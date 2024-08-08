const repeatString = function(string, num) {
    let i = 0
    let multiString = string

    while (i < num) {
        let multiString = string
        multiString = (multiString + string);
        i++;
    }

    return(multiString)
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
