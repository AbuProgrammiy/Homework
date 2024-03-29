/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    // Your implementation here
    if(symbolsCount>str.length)
        return str
    return str.substring(str.length-symbolsCount,str.length)+str+str.substring(str.length-symbolsCount,str.length)
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    // Your implementation here
    if(Math.abs(z-x)<Math.abs(z-y))
        return x;
    else
        return y;
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
