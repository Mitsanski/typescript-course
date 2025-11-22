// function getFirstElement<DataType>(arr: DataType[]): DataType {
// 	return arr[0];
// }

// const firstEl = getFirstElement<string>(["kiril", "pencho"]);

// console.log(firstEl.length);

// const firstNumEl = getFirstElement<number>([45, 11, 35]);

// console.log(firstNumEl.toFixed(2));

// function makeTuple<T, U>(a: T, b: U): [T, U] {
// 	return [a, b];
// }

// const tupleOne = makeTuple<string, number>("kiril", 24);

// console.log(tupleOne);

// const tupleTwo = makeTuple<number, boolean>(67, true);
// console.log(tupleTwo);

// // ! Generic Interface

// interface Message<T> {
// 	sender: string;
// 	recipient: string;
// 	data: T;
// }

// type MessageDataType = {
// 	text: string;
// 	timestamp: number;
// };

// const messageOne: Message<string> = {
// 	sender: "Kiril",
// 	recipient: "Joe",
// 	data: "Hello, there",
// };

// const messageTwo: Message<MessageDataType> = {
// 	sender: "min4o",
// 	recipient: "penka",
// 	data: { text: "Hi whats up", timestamp: 19782369 },
// };

// console.log(messageTwo.data);

// console.log(`----------------------`);

// // ! Generic type constraints
// function logItemId<T extends {id: number}>(item: T): void {
// 	console.log(item);
// }

// // logItemId("pen4o");
// // logItemId(23);
// // logItemId({ name: "Kiril" });
// logItemId({ id: 1, name: "Kiril", age: 24 });

// ! Generic Class with 1 type param

class StorageBox<T> {
	items: T[] = [];

	constructor(initialItems: T[]) {
		this.items = initialItems;
	}

	getAll(): T[] {
		return this.items;
	}

	getFirstItem(): T {
		return this.items[0];
	}

	add(newItem: T): void {
		this.items.push(newItem);
	}

	reverse(): void {
		this.items.reverse();
	}

	removeItem(item: T): void {
		const index = this.items.indexOf(item);

		if (index > -1) {
			this.items.splice(index, 1);
		}
	}
}

const storage = new StorageBox<number>([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(storage.getAll());
// console.log(storage.getFirstItem());
// storage.add(9);
// console.log(storage.getAll());
// storage.reverse();
// console.log(storage.getAll());
// storage.removeItem(3);
// console.log(storage.getAll());

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
		if (!this.isSuccessful || this.data == null) {
			throw new Error(String(this.error));
		}

		return this.data;
	}
}

const userResponse1 = new ApiResponse<string, string>(true, "Joe", null);
const userResponse2 = new ApiResponse<string[], string>(
	true,
	["kiril", "joe"],
	null
);
const userResponse3 = new ApiResponse(false, null, "Unknown Error");

// console.log(userResponse2.getResult())
// console.log(userResponse3.getResult())

// ! Mapped types using generics

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
	[K in keyof T]?: T[K];
};

type PartialUser = MakeOptionalProperties<User>;

type PartialPoint = MakeOptionalProperties<Point>;

type Employee = {
	name: string;
	age: number;
	salary: number;
};

type Product = {
	title: string;
	price: number;
	inStock: boolean;
	rating: number;
};

type GetNumbericKeys<T> = {
	[K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

// name: never;
// age: 'age';
// salary: 'salary'


type EmployeeNumericKeys = GetNumbericKeys<Employee>
type ProductNumericKeys = GetNumbericKeys<Product>