class Rectangle {
    height = 0; //public fields
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Rectangle2 {
    #height = 0; //private fields
    #width;

    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}