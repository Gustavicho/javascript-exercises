const leapYears = function(year) {
    // leap year is divisible by 4 and can't be divisible by 100.
    // However, IF divisible by 100 need be divisible by 400 to be a leap year
    return year % 4 === 0 && year % 100 !== 0 || year % 100 === 0  && year % 400 === 0
};

// Do not edit below this line
module.exports = leapYears;
