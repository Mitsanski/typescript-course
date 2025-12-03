class Unit {
	unitName: string;
	protected health: number;
	private _damage: number;

	constructor(un: string, hp: number, dmg: number) {
		this.unitName = un;
		this.health = hp;
		this._damage = dmg;
	}

	getSummary(): string {
		return `${this.unitName} status: Health = ${this.health}`;
	}

	attack(): string {
		this.health -= this._damage;
		return `${this.unitName} has been attacked for ${this._damage} and now has ${this.health} hp remaining`;
	}
}

const enemy = new Unit("Joe", 120, 30);

console.log(enemy.getSummary());

console.log(enemy.attack());

console.log(enemy.getSummary());
