class Vehicle {
	brand: string;

	constructor(b: string) {
		this.brand = b;
	}

	drive(): string {
		return `Driving a ${this.brand}`;
	}
}

class Car extends Vehicle {
	model: string;
	constructor(b: string, m: string) {
		super(b);
		this.model = m;
	}

	override drive(): string {
		return `Driving a ${this.brand} ${this.model}`;
	}
}

const car = new Car("Volkswagen", "Passat");
console.log(car.drive())
