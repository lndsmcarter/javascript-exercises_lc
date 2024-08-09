const repeatString = function(string, num) {
    let multiString = string;

    for (let i = 0; i <= num; i++) {
        if (i == 0) {
            multiString = "";
        }
        else if (i == 1) {
            multiString = string;
        }
        else {
            multiString = multiString + string;
        };
    }
    
    if (num < 0) {
        return ("ERROR");
    }
    else {
    return (multiString);
    }
}

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
