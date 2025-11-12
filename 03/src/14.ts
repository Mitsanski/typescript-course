class Calculator {
	calculate(operator: "power", a: number, b: number): number;
	calculate(operator: "log", a: number, b: number): number;
	calculate(
		operator: "add",
		a: number,
		b: number,
		c?: number,
		d?: number
	): number;
	calculate(
		operator: "subtract",
		a: number,
		b: number,
		c?: number,
		d?: number
	): number;
	calculate(
		operator: "multiply",
		a: number,
		b: number,
		c?: number,
		d?: number
	): number;
	calculate(
		operator: "divide",
		a: number,
		b: number,
		c?: number,
		d?: number
	): number;
	calculate(
		operator: string,
		a: number,
		b: number,
		c?: number,
		d?: number
	): number | undefined {
		switch (operator) {
			case "power":
				return Math.pow(a, b);
			case "log":
				return Math.log(a) / Math.log(b);
			case "add":
				return a + b + (c ?? 0) + (d ?? 0);
			case "subtract":
				return a - b - (c ?? 0) - (d ?? 0);
			case "multiply":
				return a * b * (c ?? 1) * (d ?? 1);
			case "divide":
				return a / b / (c ?? 0) / (d ?? 0);
			default:
				break;
		}
	}
}

const calc = new Calculator();
console.log(calc.calculate("power", 2, 3));
console.log(calc.calculate("power", 4, 1 / 2));
console.log(calc.calculate("log", 8, 2));
console.log(calc.calculate("add", 10, 5));
console.log(calc.calculate("add", 10, 5, 3));
console.log(calc.calculate("subtract", 10, 5));
console.log(calc.calculate("multiply", 2, 3, 4));
console.log(calc.calculate("divide", 100, 5, 2, 2));
