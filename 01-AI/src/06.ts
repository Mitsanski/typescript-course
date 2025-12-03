enum Directions {
	North = 0,
	East = 90,
	South = 180,
	West = 270,
}

function getDirection(dir: string): number | string {
	const result = Directions[dir as keyof typeof Directions];
	return result ?? "Invalid";
}

console.log(getDirection("North"));
console.log(getDirection("South"));
console.log(getDirection("East"));
console.log(getDirection("West"));
console.log(getDirection("asd"));
