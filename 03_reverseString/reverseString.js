const reverseString = function(str) {
    // turn in ary, reverse position, join in a str
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
/*  MY WAY
    let reversedStr = '';
    for (let i = str.length; i >= 0; i--){
        reversedStr += str.charAt(i);
    }
    return reversedStr;
*/