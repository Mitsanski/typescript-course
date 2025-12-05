// ! Generic class with 1 type parameter

export default class StorageBox<T> {
	items: T[] = [];
	constructor(initialItems: T[]) {
		this.items = initialItems;
	}

	getAllItems(): T[] {
		return this.items;
	}

	getFirstItem(): T {
		if (this.items.length === 0) {
			throw new Error("Fam you cannot be doing this to an empty array");
		}
		return this.items[0];
	}

	addItem(newItem: T): void {
		this.items.push(newItem);
		console.log(`Item with value of ${newItem} has been added!`);
	}

	reverseItems(): void {
		this.items.reverse();
	}

	removeItem(item: T): void {
		const index = this.items.indexOf(item);
		if (index > -1) {
			this.items.splice(index, 1);
			console.log(`${item} has been removed.`);
		}
	}
}

// Test Case 1
// const storageNums = new StorageBox([1, 2, 3, 4, 5]);
// console.log(storageNums.getAllItems())
// console.log(storageNums.getFirstItem())

// const storageNums = new StorageBox([]);
// console.log(storageNums.getAllItems())
// console.log(storageNums.getFirstItem())

// Test Case 2
// const storage = new StorageBox([1]);
// storage.addItem(5);
// console.log(storage.getAllItems());
// storage.addItem(6);
// console.log(storage.getAllItems());
// const storage = new StorageBox(["A", "B", "C", "D"]);
// console.log(storage.removeItem("A"))
// const storage = new StorageBox([true, false, true]);
// console.log(storage.removeItem(false))
// const storage = new StorageBox([10, 20, 10, 30]);
// console.log(storage.removeItem(10))
// const storage = new StorageBox([10, 20, 10, 30]);
// console.log(storage.removeItem(99))

// Test Case 3
// const storage = new StorageBox([1,2,3]);
// storage.reverseItems()
// console.log(storage.getAllItems())
// const storage = new StorageBox([1]);
// storage.reverseItems()
// console.log(storage.getAllItems())
// const storage = new StorageBox([]);
// storage.reverseItems()
// console.log(storage.getAllItems())
