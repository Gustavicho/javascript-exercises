const repeatString = function(str, nTimes) {
    if (nTimes < 0) return 'ERROR';

    let repeatedStr = '';
    for (let i = 0; i < nTimes; i++){
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
