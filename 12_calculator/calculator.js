const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(arr) {
    return arr.reduce((sum, val) => (sum + val),0);
};

const multiply = function(arr) {
    return arr.reduce((sum, val) => (sum * val));
};

const power = function(num1, num2) {
  let sum = num1;
	for (i = 1; i < num2; i++) {
    sum = sum * num1;
  }
  return sum;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
