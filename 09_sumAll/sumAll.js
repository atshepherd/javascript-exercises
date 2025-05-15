const sumAll = function(firstNumber, lastNumber) {
    let sum = firstNumber;
    for (i=firstNumber; i<lastNumber; i++) {
        let nextNumber = i + 1;
        sum += nextNumber;
    }
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
