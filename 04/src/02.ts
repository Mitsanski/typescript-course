interface CountableSet<T> {
	add(item: T): void;
	remove(item: T): void;
	contains(item: T): boolean;
	getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
	items: Map<T, number> = new Map();

	add(item: T) {
		this.items.set(item, (this.items.get(item) ?? 0) + 1);
	}

	remove(item: T) {
		const count = this.items.get(item) ?? 0;
		if (count > 1) {
			this.items.set(item, count - 1);
		}
	}

	contains(item: T): boolean {
		return (this.items.get(item) ?? 0) > 0
	}

	getNumberOfCopies(item: T): number {
		return this.items.get(item) ?? 0;
	}
}

let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));
