/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
module.exports.createCounter = function createCounter(startValue = 0) {
    // Your implementation here
    let count = startValue;
    for (i = 0; i < 3; i++) {
        return ++count;
    }
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
