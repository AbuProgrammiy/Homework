/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    // Your implementation here
    return Number((number1 + number2).toFixed(2));
};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
module.exports.greeting = function greeting(name, surname, age) {
    // Your implementation here
    return `Hello, my name is ${name} ${surname} and I am ${age} years old.`
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    // Your implementation here
    return true?x%2==1:false
};


