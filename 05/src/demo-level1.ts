function LogClass(constructor: Function) {
	console.log('--------------------------');
	console.log(`Class ${constructor.name} created`);
	console.log('--------------------------');
}

function LogAccessor(target: any, propName: string, descriptor: PropertyDescriptor) {
	console.log('--------------------------');
	console.log(`Accessors for property ${propName} created!`);
	console.log('--------------------------');
}
function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
	console.log('--------------------------');
	console.log(`Accessors for property ${methodName} created!`);
	// console.log(descriptor);
	console.log('--------------------------');
}

function LogProperty(target: any, propName: string) {
	console.log('--------------------------');
	console.log(`Property ${propName} created!`);
	console.log('--------------------------');
}

function LogParameter(target:any, methodName: string, paramIndex: number) {
	console.log('--------------------------');
	console.log(`Param name: ${methodName}`);
	console.log(`Param index: ${paramIndex}`);
	console.log('--------------------------');

}

@LogClass
class User {
	@LogProperty
	name: string;
	age: number;

	private _email!: string;

	constructor(name: string, age: number, email: string) {
		this.name = name;
		this.email = email;
		this.age = age;
	}

	@LogAccessor
	get email(): string {
		return this._email;
	}
	set email(val: string) {
		this._email = val;
	}

	@LogMethod
	getInfo(@LogParameter condensed: boolean, @LogParameter test: string): string {
		return condensed
			? `Person" ${this.name}`
			: `Person ${this.name} is ${this.age} years old with this email address: ${this.email}`;
	}
}

const pimp = new User('Kiril', 24, 'kiril@abv.bg');
const pimp2 = new User('Joe', 23, 'joe@abv.bg');
