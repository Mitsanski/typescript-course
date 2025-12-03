class Snapshot {
	readonly timestamp: Date;
	readonly data: object;

	constructor(ts: Date, data: object) {
		this.timestamp = ts;
		this.data = data;
	}
}

const userProfile = { 
    id: 101, 
    name: "Jane Doe", 
    status: "online" 
};

// 1. Create the snapshot
const snapshotTime = new Date();
const profileSnapshot = new Snapshot(snapshotTime, userProfile);

console.log("--- Snapshot Creation ---");
console.log(`Snapshot Time: ${profileSnapshot.timestamp.toLocaleTimeString()}`);
console.log(`Snapshot Data (Status): ${JSON.stringify(profileSnapshot.data)}`);

// 2. Attempt to change the original source data (Doesn't affect the snapshot object itself)
userProfile.status = "offline"; 

// 3. Attempt to change the snapshot itself (Causes a TypeScript error)
// profileSnapshot.timestamp = new Date(); // ERROR: Cannot assign to 'timestamp' because it is a read-only property.

console.log("\n--- Immutability Check ---");
// The timestamp remains the same:
// console.log(`Profile Status in Snapshot (Original): ${profileSnapshot.data.status}`); 
// The object inside the snapshot is still the same reference (objects are shallowly immutable)
console.log("If the original object is mutated, the snapshot will reflect that change because objects are references.");
