const removeFromArray = function(ary, ...targets) {
    let newAry = [];
    ary.forEach( item => {
    if (!targets.includes(item))
        newAry.push(item)
    })
    return newAry;
};

// Do not edit below this line
module.exports = removeFromArray;
