type figherType = { name: string; fight: () => void };
type mageType = { mana: number; cast: () => void };
type mixedChars = figherType & mageType;
const fighter = {
	name: "Grom",
	fight() {
		console.log(`${this.name} attacks with an axe.`);
	},
};

const mage = {
	mana: 250,
	cast() {
		console.log(`Character with ${this.mana} mana unleashes fire.`);
	},
};

function createAction(fighter: figherType, mage: mageType): (combinedHero: mixedChars) => void {
	return function (combinedHero: mixedChars) {
		combinedHero.fight();
		combinedHero.cast();
	};
}

let actionFunc = createAction(fighter, mage);
let hero = { ...fighter, ...mage };
actionFunc(hero);
