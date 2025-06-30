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
	for (let i = 1; i < num2; i++) {
    sum = sum * num1;
  }
  return sum;
};

const factorial = function(num1) {
  let sum = 0;
	if (num1 == 0 || num1 == 1) {
      sum = 1;
  }

  else if (num1 != 0) {
      let nextNum = num1 - 1;
      sum = num1 * nextNum;
    for (let i = (nextNum - 1); i > 0; i--) {
        sum = (sum * i);
    }
  }
  return sum;
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
