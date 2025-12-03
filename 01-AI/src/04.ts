type returnStats = [number, number];

function statCalculator(data: number[]): returnStats {
	const total = data.reduce((sum, x) => (sum += x), 0);
	const avg = total / data.length || 0;

	return [total, avg];
}

console.log(statCalculator([10, 20, 30]));

console.log(statCalculator([-5, 5, 10, 0]));

console.log(statCalculator([1.5, 2.5, 4]));

console.log(statCalculator([42]));

console.log(statCalculator([]));
