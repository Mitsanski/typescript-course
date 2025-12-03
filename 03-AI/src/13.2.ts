// Exercise 13.2: Restaurant Table Management - Solution

class RestaurantTable {
	// Shared Static Properties
	private static _maxCapacity: number = 100;
	private static _nextTableId: number = 100; // Counter for ID generation
	private static _reservedCapacity: number = 0; // Tracker for total capacity taken by all created tables

	// Instance Properties
	readonly tableId: number;
	private _capacity: number; // Private backing field for capacity validation
	isOccupied: boolean = false;

	constructor(capacity: number) {
		// 1. Assign readonly ID using the static counter
		this.tableId = RestaurantTable._nextTableId++;

		// 2. Assign capacity via the setter to enforce validation immediately
		this.capacity = capacity;

		// 3. Update the total reserved capacity tracker
		RestaurantTable._reservedCapacity += this._capacity;
	}

	// Public getter for the capacity (read access)
	get capacity(): number {
		return this._capacity;
	}

	/**
	 * Public setter for capacity. Validation must be > 1 and <= 10.
	 */
	set capacity(newCapacity: number) {
		// FIX: Capacity must be > 1 (min 2) and <= 10. (Used || instead of &&)
		if (newCapacity <= 1 || newCapacity > 10) {
			throw new Error("Validation Error: Table capacity must be between 2 and 10 guests.");
		}
		// NOTE: Because capacity is set once in the constructor, we don't worry about
		// updating _reservedCapacity in the setter, only in the constructor.
		this._capacity = newCapacity;
	}

	/**
	 * Public method to reserve the table.
	 */
	reserve(): void {
		this.isOccupied = true;
	}

	/**
	 * Static method to check the total available capacity across the restaurant.
	 */
	static getRemainingCapacity(): number {
		return RestaurantTable._maxCapacity - RestaurantTable._reservedCapacity;
	}
}

class Restaurant {
	// Composition: Holds the collection of Table objects.
	private _tables: RestaurantTable[] = [];

	/**
	 * Creates a new table and adds it to the inventory.
	 */
	setTable(people: number): void {
		try {
			const newTable = new RestaurantTable(people);
			this._tables.push(newTable);
			console.log(
				`[LOG] Table #${newTable.tableId} created with capacity ${newTable.capacity}.`
			);
		} catch (e: any) {
			// Catch the validation error thrown by the Table constructor
			console.warn(`[ERROR] Could not create table: ${e.message}`);
		}
	}

	/**
	 * Lists tables that are NOT occupied (i.e., open/available).
	 */
	public listOpenTables(): RestaurantTable[] {
		// FIX: 'Open' usually means 'not occupied'.
		return this._tables.filter((t) => t.isOccupied === false);
	}

	public get allTables(): RestaurantTable[] {
		return this._tables;
	}
}

// --- CERTIFIED TEST CASES ---
const dining = new Restaurant();

console.log("--- Test 1: Validation Failures ---");
// T1a: Capacity too low (Expected: Error)
dining.setTable(1);
// T1b: Capacity too high (Expected: Error)
dining.setTable(11);
// T1c: Capacity 0 (Expected: Error)
dining.setTable(0);

console.log("\n--- Test 2: Successful Creation & ID Check ---");
// T2a: Create small table (ID 100, Capacity 2)
dining.setTable(2);
// T2b: Create medium table (ID 101, Capacity 6)
dining.setTable(6);
// T2c: Create large table (ID 102, Capacity 10)
dining.setTable(10);
const createdTables = dining.allTables.filter((t) => t.tableId >= 100);

console.log("\n--- Test 3: Static Capacity Tracking ---");
// T3: Check total capacity consumption: 100 - (2 + 6 + 10) = 82
const totalReserved = createdTables.reduce((sum, t) => sum + t.capacity, 0);
console.log(`Total Capacity Used (2+6+10): ${totalReserved}`);
console.log(`Remaining Capacity (Expected 82): ${RestaurantTable.getRemainingCapacity()}`);

console.log("\n--- Test 4: Reservation & Listing Open Tables ---");
// T4a: Reserve the medium table (ID 101)
const reservedTable = createdTables.find((t) => t.tableId === 101);
if (reservedTable) {
	reservedTable.reserve();
	console.log(`Reserved Table #${reservedTable.tableId} (Occupied: ${reservedTable.isOccupied})`);
}

// T4b: Check open list (Expected: 2 tables open, 1 reserved)
const openList = dining.listOpenTables();
console.log(`\nOpen Tables Count (Expected 2): ${openList.length}`);
if (openList.length > 0) {
	console.log(`Open Table IDs: ${openList.map((t) => t.tableId).join(", ")}`); // Expected: 100, 102
}
