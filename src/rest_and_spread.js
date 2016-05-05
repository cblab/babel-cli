function sum(...numbers) {
    return numbers.reduce(
        (prev, current) => prev + current
    );
}
console.log(sum(1,2,3,4,5,6,7,8));


function simpleSum(x,y) {
    return x + y;
}

let nums = [1,2];
console.log(simpleSum(...nums));