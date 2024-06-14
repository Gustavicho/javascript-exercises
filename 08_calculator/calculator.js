const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numsAry) {
  let sum = 0;
  numsAry.forEach( num => {
    sum += num;
  });
  return sum;
};

const multiply = function(numsAry) {
  let mult = 1;
  numsAry.forEach( num => {
    mult *= num;
  });
  return mult;
};

const power = function(num, pow) {
	let total = 1;
  for (let i = 0; i < pow; i++){
    total *= num;
  }
  return total;
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
