function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	descriptor.value = function (...args: any[]) {
		console.log(`Function ${methodName} called with arguments: ${args.join(', ')}`);

		return originalMethod(args);
	};
	return descriptor;
}

class Person {
	fName: string;
	lName: string;
	constructor(fName: string, lName: string) {
		this.fName = fName;
		this.lName = lName;
	}

	@log
	static getFullName(fName: string, lName: string): string {
		return `${fName} ${lName}`;
	}
}

let person = new Person('John', 'Does');

Person.getFullName(person.fName, person.lName);

Person.getFullName('Benny', 'Tres');
