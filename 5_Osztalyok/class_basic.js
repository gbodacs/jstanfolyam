class Rectangle 
{
    var height;
    var width;

    constructor(height, width) 
    {
        this.height = height;
        this.width = width;
    }

    // Getter
    get area() 
    {
        return this.calcArea();
    }

    set height(h)
    {
        if (h==0)
        {
            console.log("hibas h ertek!");
        }
        this.height = h;
    }

    // Method
    calcArea() 
    {
        return this.height * this.width;
    }
}

var square = new Rectangle(10, 10);
var teglalap = new Rectangle(20, 10);


square.height = -22;

console.log(square.area); // 100