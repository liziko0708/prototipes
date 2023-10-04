/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
module.exports.createCounter = function createCounter(startValue = 0) {
    // Your implementation here

    return function () {
        return ++startValue;
    };
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
