// class Shape {
// 	draw() {
// 		return "Drawing shape";
// 	}
// }

// class Circle extends Shape {
// 	override draw() {
// 		return `${super.draw()} + Drawing circle`;
// 	}
// }

// let shape = new Shape();
// let circle = new Circle();

// console.log(shape.draw());
// console.log(circle.draw());


class Person{
    greet(num: number): void;
    greet(fName: string, lname: string): void;
    greet(a: number | string, b?:string): void{
        console.log(typeof a === 'number'
            ? `Your number: ${a}`
            : `Hello, ${a} ${b}`
        )
    }
}

let person = new Person();
person.greet('John', 'Doe')
person.greet(13)
// person.greet('John')