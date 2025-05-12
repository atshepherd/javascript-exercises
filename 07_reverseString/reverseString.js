const reverseString = function(string) {
    const array = [];
    for (let i = string.length; i >= 0; i--) {
        array.push(string[i]);
    }

    return array.join("");
};

let string = "";

reverseString(string);

// Do not edit below this line
module.exports = reverseString;