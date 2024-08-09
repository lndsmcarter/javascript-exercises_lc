const repeatString = function(string, num) {
    let multiString = string;

    for (let i = 0; i < num; i++) {
        if (i == 0) {
            multiString = string;
        }
        else {
            multiString = multiString + string;
        };
    }
    return (multiString);
}

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
