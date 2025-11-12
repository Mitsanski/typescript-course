//! extends

// class ManLike {
// 	move() {
// 		console.log("Man`s on road");
// 	}
// }

// class Roadman extends ManLike {
// 	speak() {
// 		console.log("Wagwan, fam");
// 	}
// }

// const bruv = new Roadman();

// bruv.move();
// bruv.speak();

//! implements

// interface Hustler {
// 	grind(): void;
// }

// class TrapStar implements Hustler {
// 	name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// 	grind() {
// 		console.log(`${this.name} on the grind daily`);
// 	}
// }

// const star = new TrapStar("Kiril");

// star.grind();

//! abstract

abstract class Yardman {
	abstract cook(): void;

	chill() {
		console.log("Mans vibin");
	}
}

class ChefMan extends Yardman {
	cook() {
		console.log("Whippin up rice and peas");
	}
}

const chefMans = new ChefMan();

chefMans.chill();
chefMans.cook();
