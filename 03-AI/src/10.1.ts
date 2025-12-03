class Thermometer {
	private _celcius: number = 0;

	get celcius(): number {
		return this._celcius;
	}

	set celcius(val: number) {
		this._celcius = val;
	}

	get fahrenheit(): number {
		return (this._celcius * 9) / 5 + 32;
	}

	set fahrenheit(temp: number) {
		this._celcius = (temp - 32) / (9 / 5);
	}
}

const thermometer = new Thermometer();

console.log("--- Testing C -> F Conversion ---");
thermometer.celcius = 30; // Set C to 30
console.log(`C: ${thermometer.celcius.toFixed(2)}`); // Expected: 30.00
console.log(`F: ${thermometer.fahrenheit.toFixed(2)}`); // Expected: 86.00 (30 * 1.8 + 32)

console.log("\n--- Testing F -> C Conversion ---");
thermometer.fahrenheit = 105; // Set F to 105
console.log(`F: ${thermometer.fahrenheit.toFixed(2)}`); // Expected: 105.00
console.log(`C: ${thermometer.celcius.toFixed(2)}`); // Expected: 40.56 ((105 - 32) * 5/9)
