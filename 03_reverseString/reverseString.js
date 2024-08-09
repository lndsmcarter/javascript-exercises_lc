const reverseString = function(string) {
//Find the length of string and store it in vairalbe n
let lenString = string.length;
let newString = "";
//Create a loop
for (i = 1; i <= lenString; i++) {
    let char = string[lenString - i];
    newString += char;
}

return(newString);
};

// Do not edit below this line
module.exports = reverseString;
