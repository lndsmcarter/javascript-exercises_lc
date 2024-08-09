const removeFromArray = function(array, int) {
   
    let newArray = []

    for (item of array) {
        i = 1;
        if (item == arguments[i]) continue;
        else {
            newArray.push(item);
        }
        i++;
    }
    return newArray 
};

// Do not edit below this line
module.exports = removeFromArray;
