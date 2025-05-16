const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 4 == 0 && year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

// has to be divisible by 4
// and not divisible by 100
// if divisible by 100 must also be divisible by 400