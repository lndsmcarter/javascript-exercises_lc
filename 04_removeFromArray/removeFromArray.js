const removeFromArray = function(array, ...args) {
    
    let newArray = [];
    
    array.forEach((element) => {
        if(!args.includes(element)) {
            newArray.push(element);
        }
        });


    return newArray;
}
        
        // for(let i = 1; i <= args.length; i++) {
        //     if (element == args[i])
        //         return "";
        //     else {
                
        //     }
        // }
    // });
    
    // for (item of array) {
    //     for(let i = 1; i <= arguments.length; i++) {
    //         if (item != arguments[i])
    //             continue;
    //         else if (item == arguments[i])
    //             return false;
    //         else {
    //             newArray.push(item);
    //             return true;
    //         }
    //     }
    // }
    // return newArray 


// Do not edit below this line
module.exports = removeFromArray;
