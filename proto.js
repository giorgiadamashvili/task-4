class Animal {
    constructor(name, move) {
        this.name = name;
        this.move = move;

    }

    greet() {
        console.log(`hey ${this.name}`);
    }
}

class Cat extends Animal {
    constructor(name, move) {
        super(name, move);

        this.move = "is going at 10 km/h "

    }


}

const jessi = new Cat("jessi", "move");
console.log(jessi)