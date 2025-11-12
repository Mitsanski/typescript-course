//! Encapsulation

// class Hustler {
//     private money = 0;

//     work(hours: number){
//         this.money += hours * 10;
//     }

//     checkMoney(){
//         return this.money;
//     }
// }

// const g = new Hustler();

// g.work(5);
// console.log(g.checkMoney())

//! Abstraction

// abstract class Vehicle {
// 	abstract start(): void;
// 	model: string;

// 	constructor(m: string) {
// 		this.model = m;
// 	}

// 	stop() {
// 		console.log("Engine off");
// 	}
// }

// class Car extends Vehicle {
// 	start() {
// 		console.log("Push to start");
// 	}
// }

// const vw = new Car("Passat");
// vw.start();
// console.log(vw.model);
// vw.stop();

//! Polymorphism
class Animal {
	speak() {
		console.log("Some random Sound");
	}
}

class Dog extends Animal {
	override speak() {
		console.log("Woof woof");
	}
}

class Cat extends Animal {
	override speak() {
		console.log("Meow");
	}
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((a) => a.speak());
