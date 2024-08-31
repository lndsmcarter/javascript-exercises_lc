const palindromes = function (word) {
    function makeArray(str) {
            let punctuationLess = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
            let noSpaces = punctuationLess.replace(/ /g, "");
            let lowerC = noSpaces.toLowerCase();
            return lowerC.split("");
        }
    let arr = makeArray(word)
    let forwards = ([...arr]).toString(); 
    let backwards = (arr.reverse()).toString();

    if (backwards === forwards) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
