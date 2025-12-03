type ReturnTuple = [string, string, string];

function dripCheck(brand: string, size: number, color?: string, isLimited?: boolean): ReturnTuple {
	const description = color ? `${color} size ${size}` : `Standard size ${size}`;
	const status = isLimited ? `Rare find` : `General release`;

	return [brand, description, status];
}

// Test 1: All required params + color (common case)
console.log(dripCheck("Nike", 10, "Black"));
// Expected Output: ['Nike', 'Black size 10', 'General release']

// Test 2: All required params + limited edition (no color)
console.log(dripCheck("Gucci", 42, undefined, true));
// Expected Output: ['Gucci', 'Standard size 42', 'Rare find']

// Test 3: All four parameters provided
console.log(dripCheck("Stone Island", 50, "Navy", true));
// Expected Output: ['Stone Island', 'Navy size 50', 'Rare find']

// Test 4: Only required parameters provided (base case)
console.log(dripCheck("Uniqlo", 32));
// Expected Output: ['Uniqlo', 'Standard size 32', 'General release']

// Test 5: Passing null for an optional parameter (Should be treated as missing)
console.log(dripCheck("Adidas", 9, null));
// TypeScript would normally prefer `undefined`, but if you allow `null` in your type,
// it should behave like the base case. Assuming type is `string | undefined`.
// Expected Output (if only checking for existence): ['Adidas', 'Standard size 9', 'General release']
