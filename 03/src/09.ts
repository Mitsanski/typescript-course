abstract class Shape{
    color: string;

    abstract getArea(): number;

    constructor(c: string){
        this.color = c;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(c: string, r: number){
        super(c);
        this.radius = r;
    }

    override getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    a: number;
    b: number;

    constructor(c: string, a: number, b: number){
        super(c);
        this.a = a;
        this.b = b;
    }

    override getArea(): number {
        return this.a * this.b;
    }
}


const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea())