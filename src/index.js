/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
let createCounter = function createCounter(startValue = 0) {
    // Your implementation here
    let count = startValue;
    function increment() {
        return ++count;
    }
    return increment;
};
/**
 *
 * @param x: {Number}
 * @returns {Function}
 */
module.exports.multiply = function multiply(x) {
    // Your implementation here
    return function (y) {
        return function (z) {
            return x * y * z;
        };
    };
};
