let string = "";
let num = 0;

const repeatString = function(string, num) {
    let newString = "";
    if (num < 0) return "ERROR";
    else {
        for (let i = 0; i<num; i++) {
            newString += string;
        }
        return newString;
    }
};

repeatString(string, num);

// Do not edit below this line
module.exports = repeatString;
