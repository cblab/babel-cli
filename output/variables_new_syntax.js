'use strict';

function fire(bool) {
    if (bool) {
        var _foo = 'bar';

        console.log(_foo); // bar
    } else {
        console.log(foo); //undefined
    }
}

fire(false);