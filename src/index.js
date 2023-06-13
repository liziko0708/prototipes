/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
module.exports.createCounter = function createCounter(startValue = 0) {
    // Your implementation here
    let count = startValue;

    function increment() {
        return ++count;
    }

    return increment;
};

const counter = createCounter(44);
console.log(counter()); // 45
console.log(counter()); // 46
console.log(counter()); // 47

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
