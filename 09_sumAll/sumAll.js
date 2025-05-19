const sumAll = function(num1, num2) {
    if(isNonZero(num1) && isNonZero(num2) 
    && isNumber(num1) && isNumber(num2) 
    && Number.isInteger(num1) && Number.isInteger(num2)) {
        if(num1 < num2) {
            let sum = num1;
            for (i=num1; i<num2; i++) {
            let nextNumber = i + 1;
            sum += nextNumber
        }
            return sum;
        }

        else if(num1 > num2) {
            let sum = num2;
            for (i=num2; i<num1; i++) {
            let nextNumber = i + 1;
            sum += nextNumber
        }
            return sum;
        }
        }

    else {
        return "ERROR";
    }
};

function isNumber(num) {
    if (typeof num == "number") {
        return true;
    }
    else {
        return false;
    }
}

function isNonZero(num) {
    if (num > 0) {
        return true;
    }
    else {
        return false;
    }
}

// Do not edit below this line
module.exports = sumAll;
