class Animal {
    name = "";
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} valami hangot ad ki.`);
    }
}

// A kutya egy allat
class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} ugat.`);
    }
}

let d = new Dog('Bodri');
d.speak(); // Bodri ugat.