function validate(target: any, methodName: string, descriptor: PropertyDescriptor) {
	const originalSetter = descriptor.set;

	descriptor.set = function (age: number) {
		if (age < 1 || age > 200) {
			throw new Error('You are lying as hell lil git');
		}

		originalSetter?.call(this, age);
	};
}

class Age {
	private _age!: number;
	constructor(age: number) {
		this.age = age;
	}

	set age(val: number) {
		this._age = val;
	}

	@validate
	get age() {
		return this._age;
	}
}

let ageVal = new Age(10);
ageVal.age = 25;
