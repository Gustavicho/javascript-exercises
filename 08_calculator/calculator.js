const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numsAry) {
  return numsAry.reduce( (total, num) => total + num, 0);
};

const multiply = function(numsAry) {
  return numsAry.reduce((total, num) => total * num, 1);
};

const power = function(num, power) {
	return Math.pow(num, power)
};

const factorial = function(num) {
	let total = 1;
  for (let i = num; i > 0; i--){
    total *= i;
  }
  return total;
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
