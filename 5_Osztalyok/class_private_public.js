class Rectangle {
    height = 0; //public fields
    width;

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.name = 35;
    }

    string getNeme()
    {
        this.loki = "asdfsf";
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

var o = new Rectangle2(11,11);
Rectangle2. = 22;