class Coupon {
	readonly code: string = "";
	private _usesRemaining: number;

	constructor(code: string, uses: number) {
		this._usesRemaining = uses;
		this.code = code;
	}

	applyCoupon(): boolean {
		if (this._usesRemaining > 0) {
			this._usesRemaining -= 1;
            console.log(`Coupon '${this.code}' applied. 1 use deducted.`);
			return true;
		} else {
            console.warn(`Coupon '${this.code}' failed to apply: 0 uses remaining.`);
			return false;
		}
	}

	get availableUses(): number {
		return this._usesRemaining;
	}
}

const couponCard = new Coupon("SUMMER20", 2);

console.log(`Coupon Code: ${couponCard.code}`);
// couponCard.code = "WINTER50"; // <-- This would cause a TS error because 'code' is readonly.

// Initial check
console.log(`\nInitial status: ${couponCard.availableUses} uses remaining`); // Output: 2

// 1. Use 1
couponCard.applyCoupon();
console.log(`After 1st use: ${couponCard.availableUses} uses remaining`); // Output: 1

// 2. Use 2
couponCard.applyCoupon();
console.log(`After 2nd use: ${couponCard.availableUses} uses remaining`); // Output: 0

// 3. Attempt to use 3 (Should fail)
couponCard.applyCoupon();
console.log(`After 3rd attempt: ${couponCard.availableUses} uses remaining`); // Output: 0
