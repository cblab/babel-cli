'use strict';

function fire(bool) {
    var foo;
    if (bool) {
        foo = 'bar';
        console.log(foo); // bar
    } else {
            console.log(foo); //undefined -> hoisting (quite confusing, isn't it?)
        }
}

fire(false);