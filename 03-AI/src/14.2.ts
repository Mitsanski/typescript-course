type returnType = number | string | string[];

class ArrayUtility {
	manipulator(arr: number[], operation: "sum" | "average"): number;
	manipulator(arr: string[], operation: "join", separator: string): string;
	manipulator(arr: number[], operation: "sort"): string[];
	manipulator(
		arr: number[] | string[],
		operation: string,
		separator?: string
	): returnType | undefined {
		const nums = arr as number[];
		switch (operation) {
			case "sum":
				return nums.reduce((sum, num) => sum + num, 0);
			case "average":
				const sum = nums.reduce((sum, num) => sum + num, 0);
				return nums.length > 0 ? sum / nums.length : 0;
			case "join":
				const strings = arr as string[];
				return strings.join(separator);
			case "sort":
				const sortArray = [...arr];
				sortArray.sort((a, b) => (a as number) - (b as number));

				return sortArray.map((n) => String(n));
			default:
				break;
		}
	}
}

const util = new ArrayUtility();
console.log("--- Test 1: Overload 1 (Numeric Operations) ---");
const numbers = [10, 5, 20, 5];

// T1a: Sum (Expected: 40)
console.log(`Sum: ${util.manipulator(numbers, "sum")}`);

// T1b: Average (Expected: 40 / 4 = 10)
console.log(`Average: ${util.manipulator(numbers, "average")}`);

console.log("\n--- Test 2: Overload 2 (Join Operation) ---");
const words = ["oop", "is", "locked", "off"];

// T2a: Join with space (Expected: "oop is locked off")
console.log(`Joined (Space): ${util.manipulator(words, "join", " ")}`);

// T2b: Join with underscore (Expected: "oop_is_locked_off")
console.log(`Joined (_): ${util.manipulator(words, "join", "_")}`);

console.log("\n--- Test 3: Overload 3 (Sort Operation) ---");
const unsortedNumbers = [500, 1, 10, 200];

// T3a: Sort Check (Expected: [1, 10, 200, 500] but returned as strings)
const sortedResult = util.manipulator(unsortedNumbers, "sort");
console.log(`Sorted Array (as strings): ${sortedResult}`);
console.log(
	`Type Check (Expected string[]): ${
		Array.isArray(sortedResult) && typeof sortedResult[0] === "string"
	}`
);
