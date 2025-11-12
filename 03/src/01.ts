class Person {
	fName: string;
	lName: string;
	age: number;

	constructor(fn: string, ln: string, a: number) {
		this.fName = fn;
		this.lName = ln;
		this.age = a;
	}

	introduce(): string {
		return `My name is ${this.fName} ${this.lName} and I am ${this.age} years old.`;
	}
}

const person = new Person('Kiril', 'Mitsanski', 24)

console.log(person.introduce())
