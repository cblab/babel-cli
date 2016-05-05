function fire(bool) {
    if (bool) {
        let foo = 'bar';

        console.log(foo); // bar
    } else {
        console.log(foo); //undefined
    }
}

fire(false);