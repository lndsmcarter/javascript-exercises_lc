const repeatString = function(string, num) {
    let multiString = string;

    for (let i = 0; i <= num; i++) {
        if (num < 0) {
            multiString = "ERROR";
            break;
        }
        else if (i == 0) {
            multiString = "";
        }
        else if (i == 1) {
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
