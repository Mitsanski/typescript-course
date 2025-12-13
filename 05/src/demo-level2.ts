function FreezeClass(target: Function) {
	// console.log('Freeze Applied');
	Object.freeze(target);
	Object.freeze(target.prototype);
}

function ValidateStringAccessor(target: any, propName: string, descriptor: PropertyDescriptor) {
	const originalSetter = descriptor.set;

	descriptor.set = function (val: string) {
		if (val.length < 4) {
			throw new Error('shit aint long enought gang');
		}

		originalSetter?.call(this, val);
	};

	return descriptor;
}

function DeperecatedMethod(message: string = 'Depricated method') {
	return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;

		descriptor.value = function (...args: any[]) {
			console.log(
				`⚠️ Caution! ${message} ${methodName}! Consider using another one`
			);

			return originalMethod.apply(this, args);
		};
		return descriptor;
	};
}

@FreezeClass
class User {
	name: string;
	age: number;
	static version = 1;
	private _email!: string;

	constructor(name: string, age: number, email: string) {
		this.name = name;
		this.email = email;
		this.age = age;
	}

	@ValidateStringAccessor
	get email(): string {
		return this._email;
	}
	set email(val: string) {
		this._email = val;
	}

	@DeperecatedMethod('Method is depricated')
	getInfo(condensed: boolean): string {
		return condensed
			? `Person ${this.name}`
			: `Person ${this.name} is ${this.age} years old with this email address: ${this.email}`;
	}
}

const pimp = new User('Kiril', 24, 'kiril@abv.bg');
const pimp2 = new User('Joe', 23, 'joasdasde');

console.log(pimp.getInfo(true));
