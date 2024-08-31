const palindromes = function (arr) {
    let forwards = arr.split("" && ", ")
    let backwards = forwards.reverse();

    if (backwards == forwards) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
