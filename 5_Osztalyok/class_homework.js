class Living {
    constructor(age)
    {
        this.age = age;
    }
}


class Animal extends Living{
    name = "";
    constructor(name, age) {
        this.name = name;
        super(age);
    }

    speak() {
        console.log(`${this.name} elfelejtetted megadni a hangot!`);
    }
}

// A kutya egy allat
class Dog extends Animal {
    constructor(name, age) {
        super(name, age); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} ugat.`);
    }
}

// A macska egy allat
class Cat extends Animal {
    constructor(name, age) {
        super(name, age); // call the super class constructor and pass in the name parameter
    }

    
}

let d = new Dog('Bodri', 22);
d.speak(); // Bodri ugat.

let d22 = new Cat('Nero', 22);
d22.speak();