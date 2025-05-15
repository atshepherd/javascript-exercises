const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    
    for (i=firstNumber; i<=secondNumber; i++) {
        let nextNumber = firstNumber++;
        sum = firstNumber + nextNumber;
    }
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
