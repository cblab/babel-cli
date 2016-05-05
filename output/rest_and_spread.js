"use strict";

function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    return numbers.reduce(function (prev, current) {
        return prev + current;
    });
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

function simpleSum(x, y) {
    return x + y;
}

var nums = [1, 2];
console.log(simpleSum.apply(undefined, nums));