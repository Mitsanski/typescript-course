function splitP(total: number, people: number): string {
	return total % people === 0
		? `Each person pays ${total / people}`
		: `Can't split the bill equally, fam`;
}

console.log(splitP(100, 5));
console.log(splitP(99, 4));
