const fibonacci = function(input) {
    let num = Number(input);
    if (num < 0) {
        return "OOPS";
    }
    else {
        let arr = [0, 1];
        let prevSum;
        for(let i = 2; i <= num; i++) {
            prevNum1 = arr[i - 1];
            prevNum2 = arr[i - 2];            
            prevSum = prevNum1 + prevNum2;
            arr[i] = prevSum;
        }
        return arr[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
