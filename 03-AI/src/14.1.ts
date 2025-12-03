class StringProcessor {
	process(str: string, operation: "uppercase" | "lowercase"): string;
	process(str: string, operation: "trim" | "reverse"): string;
	process(str: string, operation: "repeat", count?: number): string;
	process(str: string, operation: string, count?: number | undefined): string | undefined {
		switch (operation) {
			case "uppercase":
				return str.toUpperCase();
			case "lowercase":
				return str.toLowerCase();
			case "trim":
				return str.trim();
			case "reverse":
				return str.split("").reverse().join("");
			case "repeat":
				return str.repeat(count!);
			default:
				break;
		}
	}
}
const processor = new StringProcessor();

console.log("--- Test 1: Overload 1 (Uppercase/Lowercase) ---");
const mixedCaseText = "TeSTinG My TypEscRipt";

// T1a: Uppercase check
console.log(`Uppercase: ${processor.process(mixedCaseText, "uppercase")}`); 
// Expected: TESTING MY TYPESCRIPT

// T1b: Lowercase check
console.log(`Lowercase: ${processor.process(mixedCaseText, "lowercase")}`); 
// Expected: testing my typescript

console.log("\n--- Test 2: Overload 2 (Trim/Reverse) ---");
const whitespaceText = "   Yo, I'm trimmed.   ";
const palindromeText = "racecar";

// T2a: Trim check (removes spaces from start/end)
console.log(`Trimmed (Length): ${processor.process(whitespaceText, "trim")}`); 
// Expected: "Yo, I'm trimmed."

// T2b: Reverse check
console.log(`Reverse: ${processor.process(palindromeText, "reverse")}`); 
// Expected: racecar (still!)

console.log("\n--- Test 3: Overload 3 (Repeat) ---");
const repeatText = "Safe ";

// T3a: Repeat 4 times
console.log(`Repeat 4: ${processor.process(repeatText, "repeat", 4)}`);
// Expected: Safe Safe Safe Safe 

// T3b: Repeat 0 times
console.log(`Repeat 0: ${processor.process(repeatText, "repeat", 0)}`);