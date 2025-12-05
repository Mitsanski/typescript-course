interface CountableSet<T> {
	addItem(item: T): void;
	removeItem(item: T): void;
	containsItem(item: T): boolean;
	getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
	items: Map<T, number> = new Map();

	addItem(item: T): void {
		const newCount = (this.items.get(item) || 0) + 1;
		this.items.set(item, newCount);
	}
	// *
	removeItem(item: T): void {
		const itemCount = this.items.get(item) || 0;
		if (itemCount >= 1) {
			this.items.set(item, itemCount - 1);
		}
	}
	// *
	containsItem(item: T): boolean {
		return this.getNumberOfCopies(item) > 0;
	}
	// *
	getNumberOfCopies(item: T): number {
		return this.items.get(item) || 0;
	}
}

let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
codesCounterSet.addItem(404);
codesCounterSet.addItem(200);
console.log(codesCounterSet.containsItem(404));
console.log(codesCounterSet.getNumberOfCopies(200));

