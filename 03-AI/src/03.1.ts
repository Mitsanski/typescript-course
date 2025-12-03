class Device {
	powerStatus: boolean = false;
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	powerToggle(): void {
		this.powerStatus = !this.powerStatus;
	}
}

class Smartphone extends Device {
	screenSize: number = 0;

	constructor(name: string, screenSize: number) {
		super(name);
		this.screenSize = screenSize;
	}

	override powerToggle(): void {
        super.powerToggle()
		console.log(`Smartphone screen is now <${[this.powerStatus ? "On" : "Off"]}>`);
	}
}

const phone = new Smartphone('iPhone', 67)

phone.powerToggle()
phone.powerToggle()
phone.powerToggle()
phone.powerToggle()
