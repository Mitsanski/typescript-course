class Ticket {
	private static _nextTicketNumber: number = 100;
	readonly ticketNumber: number;
	status: "Open" | "Closed" = "Open";
	private _name: string = "";

	constructor(name: string) {
		this.name = name;
		this.ticketNumber = Ticket._nextTicketNumber++;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		if (value.length < 6) {
			throw new Error("Name should be at least 5 chars long");
		}
		this._name = value;
	}

	closeTicket(): void {
		this.status = "Closed";
	}
}

class Helpdesk {
    private _tickets: Ticket[] = [];

    public addTicket(name: string): void {
        try {
            const newTicket = new Ticket(name);
            this._tickets.push(newTicket);
            console.log(`[LOG] Ticket #${newTicket.ticketNumber} created by ${newTicket.name}.`);
        } catch (e: any) {
            console.error(`[ERROR] Could not create ticket: ${e.message}`);
        }
    }

    public listOpenTickets(): Ticket[] {
        return this._tickets.filter(t => t.status === 'Open');
    }

    public get allTickets(): Ticket[] {
        return this._tickets;
    }
}

const helpdesk = new Helpdesk();

console.log("--- Test 1: ID Generation & Name Validation (Success) ---");
// T1a: Check ID generation and success case (6 chars)
helpdesk.addTicket("Mickey");
// T1b: Check ID generation for the second ticket
helpdesk.addTicket("DonaldDuck");

console.log("\n--- Test 2: Name Validation (Failure) ---");
// T2: Check failure case (< 5 chars). This should throw an error caught by addTicket.
helpdesk.addTicket("Joe"); // Length 3

console.log("\n--- Test 3: Status & Immutability Check ---");
const ticket1 = helpdesk.allTickets[0]; // Get the first ticket (Mickey, ID 100)

// T3a: Check initial status (Expected: Open)
console.log(`Ticket #${ticket1.ticketNumber} Status: ${ticket1.status}`);

// T3b: Check action (closeTicket)
ticket1.closeTicket();
console.log(`Ticket #${ticket1.ticketNumber} Status after close: ${ticket1.status}`);


console.log("\n--- Test 4: Open Tickets Listing ---");
// T4: Ticket 100 is closed, Ticket 101 is open.
const openTickets = helpdesk.listOpenTickets();
console.log(`Open Tickets Count: ${openTickets.length}`); // Expected: 1
if (openTickets.length > 0) {
	console.log(`Open Ticket ID: ${openTickets[0].ticketNumber}`); // Expected: 101
}
