class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return 'Hello ' + this.name;
    }
}

console.log(new Person('Chris').greet());