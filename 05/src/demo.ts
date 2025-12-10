function LogClass(constructor: Function) {
	console.log(`-------------------------`);
	console.log(`${constructor.name}`);
	console.log(`-------------------------`);
}

@LogClass
class User {
	name: string;
	age: number;

	private _email!: string;

	constructor(name: string, age: number, email: string) {
		this.name = name;
		this.age = age;
		this.email = email;
	}

	get email() {
		return this._email;
	}

	set email(val: string) {
		this._email = val;
	}

	getInfo(condensed: boolean): string {
		return condensed
			? `Person ${this.name}`
			: `Person ${this.name} is ${this.age} years old with email ${this.email}`;
	}
}


const user1 = new User('Kiril', 24, 'kiril@abv.bg');
