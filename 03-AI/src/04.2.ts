interface PaymentGateway {
	processPayment(amount: number): boolean;
}

class StripeGateway implements PaymentGateway {
	processPayment(amount: number): boolean {
		return amount < 1000;
	}
}

const card = new StripeGateway();

console.log("--- Payment Gateway Test ---");
// Test 1: Amount exceeds the 1000 limit
const result1 = card.processPayment(1001);
console.log(`Payment $1001.00: ${result1 ? "SUCCESS" : "FAILURE"}`); // Expected: FAILURE (false)

// Test 2: Amount is just below the 1000 limit
const result2 = card.processPayment(999);
console.log(`Payment $999.00: ${result2 ? "SUCCESS" : "FAILURE"}`); // Expected: SUCCESS (true)

// Test 3: Edge case - exactly 1000
const result3 = card.processPayment(1000);
console.log(`Payment $1000.00: ${result3 ? "SUCCESS" : "FAILURE"}`); // Expected: FAILURE (false)
