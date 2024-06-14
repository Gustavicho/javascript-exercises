const palindromes = function (str) {
    const TARGETS = ['!', '?', ',', '.', ' '];
    const TEMP = str.toLowerCase().split('');
    let newStr = [];
    TEMP.forEach(char => {
        if (!TARGETS.includes(char))
            newStr.push(char);
    });
    return newStr.join('') === newStr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
