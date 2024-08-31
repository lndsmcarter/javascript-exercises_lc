const fibonacci = function(x) {
    let array = [1, 1];
    x = Number(x)
    for (let i = 1; i < x; i++) {
        let num = (array.at(-2) + array.at(-1));
        array.push(num);
    }

    if (x < 0) {
        return "OOPS";
    } else if (x == 0) {
        return x;
    } else {
        return array.at(x - 1);
    };
};

// Do not edit below this line
module.exports = fibonacci;
