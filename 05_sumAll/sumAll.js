const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max){
        const TEMP = min;
        min = max;
        max = TEMP;
    }    
    
    let sumTotal = 0
    for (; min <= max; min++) {
        sumTotal += min
    }
    return sumTotal
};

// Do not edit below this line
module.exports = sumAll;
