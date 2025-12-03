class Point {
	readonly x: number;
	readonly y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	getCoordinates(): [number, number] {
		return [this.x, this.y];
	}
}

const newPoint = new Point(6, 7);

console.log(newPoint.getCoordinates())