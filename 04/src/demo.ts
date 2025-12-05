// ! Generic function with one type parameter
function getFirstElement<T>(arr: T[]): T {
	return arr[0];
}

// console.log(getFirstElement(["kiril", "dim4o"]));
// console.log(getFirstElement([6, 7]));
// console.log(getFirstElement([true, false]));

// ! Generic function with 2 type parameters
function makeTuple<T, U>(el1: T, el2: U): [T, U] {
	return [el1, el2];
}

const tupleEls = makeTuple<string, number>("kiril", 67);
// console.log(tupleEls)

// ! Generic interface
interface Message<T> {
	sender: string;
	recipient: string;
	data: T;
}

const message1: Message<string> = {
	sender: "Kiril",
	recipient: "CIA",
	data: "Info",
};

const message2: Message<{ text: string; timestamp: Date }> = {
	sender: "Kiril",
	recipient: "Joe",
	data: { text: "Hello", timestamp: new Date() },
};

// console.log(message2.data.timestamp)

// ! Generic type constraints

function logItemId<T extends { id: number }>(item: T): void {
	console.log(item);
}

// logItemId('kiril')
// logItemId(234)
// logItemId({name: 'Kiril'})

// logItemId({id: 2, name: 'Kiril', age: 24})
// logItemId({id: 2, name: 'Kiril', age: 24, email: "akjlshbd"})

// ! Generic class with 1 type parameter
// storageBoxDemo.ts

class UserInput<F, S, T> {
	first: F;
	second: S;
	third: T;
	constructor(f: F, s: S, t: T) {
		this.first = f;
		this.second = s;
		this.third = t;
	}

	showAll() {
		return `First: ${this.first}, second ${this.second}, third: ${this.third}`;
	}
}

const input = new UserInput("six", 7, 9);
const test = new UserInput("joe", true, 9);

// console.log(input.showAll());
// console.log(test.showAll());

class ApiResponse<T, U> {
	isSuccessful: boolean;
	data: T | null;
	error: U | null;

	constructor(isSuccessful: boolean, data: T | null, error: U | null) {
		this.isSuccessful = isSuccessful;
		this.data = data;
		this.error = error;
	}

	getResult(): T {
		if (!this.isSuccessful || this.data === null) {
			throw new Error(String(this.error));
		}
		return this.data;
	}
}

// const userResponse = new ApiResponse<string, string>(true, 'Kiril', 'no error')
// console.log(userResponse.getResult())
// const userResponse = new ApiResponse<string, string>(false, 'Kiril', 'The request was unsuccessful')
// console.log(userResponse.getResult())
const userResponse = new ApiResponse(true, [1, 2, 3, 4], null);
const userResponse3 = new ApiResponse(false, null, "Unknown Error");

// console.log(userResponse.getResult())
// console.log(userResponse3.getResult())

// ! Mapped types using Generics
type User = {
	id: number;
	username: string;
	email: string;
};

type Point = {
	x: number;
	y: number;
};

type MakeOptionalProperties<T> = {
	[K in keyof T]?: T[K]
}

type PartialUser = MakeOptionalProperties<User>;

const user: PartialUser = {
	id: 1
}

console.log(user)