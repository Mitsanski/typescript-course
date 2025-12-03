function mysteryBox(input: unknown): string | number {
	if (typeof input === "string") {
		return `${input.split("").reverse().join("")}`;
	}
	if (typeof input === "number") {
        return input * input
	}

    return 'Invalid input'
}

console.log(mysteryBox('balls'))
console.log(mysteryBox(67))
console.log(mysteryBox({}))
