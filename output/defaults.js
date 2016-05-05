"use strict";

function defaultDiscountRate() {
    return .10;
}

function applyDiscount(cost) {
    var discount = arguments.length <= 1 || arguments[1] === undefined ? defaultDiscountRate() : arguments[1];

    return cost - cost * discount;
}

alert(applyDiscount(100));