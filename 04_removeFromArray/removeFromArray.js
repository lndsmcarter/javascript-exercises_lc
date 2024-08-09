const removeFromArray = function(array,...args) {
    
    let newArray = []

    for (item of array) {
        for(let i = 1; i <= arguments.length; i++) {
            if (item != arguments[i])
                continue;
            else if (item == arguments[i])
                return false;
            else {
                newArray.push(item);
                return true;
            }
        }
    }
    return newArray 
};

// Do not edit below this line
module.exports = removeFromArray;
