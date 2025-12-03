const CURRENT_YEAR = 2025

class Voter {
    private _birthYear: number = 0;

    set birthYear(year: number) {
        if (year > CURRENT_YEAR){
            throw new Error("Shits in the future")
        }

        this._birthYear = year;
    }

    get age(): number {
        return CURRENT_YEAR - this._birthYear
    }
}

const newVoter =new Voter();

newVoter.birthYear = 2001; 
console.log(`\nTest 1 (Valid): Fam you is ${newVoter.age} years old. mad`); // Expected Age: 24

// Test 2: Invalid input (should throw an error)
try {
    console.log("\nTest 2 (Invalid): Attempting to set year 2030...");
    newVoter.birthYear = 2030; // This line throws an error
} catch (e: any) {
    console.error("Error Caught:", e.message); // Expected: Error message
}

// Check that the private state was NOT changed by the failed setter call.
console.log(`Current age remains: ${newVoter.age}`); // Expected Age: Still 24
