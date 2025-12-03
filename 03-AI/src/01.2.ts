class Clock {
	public hours: number = 22;
	public minutes: number = 59;
	public seconds: number = 49;

	tick(): void {
		this.seconds += 1;

		if (this.seconds == 60) {
			this.seconds = 0;
			this.minutes += 1;
		}

		if (this.minutes == 60) {
            this.minutes = 0
			this.hours += 1;
		}

        if (this.hours == 24){
            this.hours = 0
        }
	}

	getTime(): string {
        const h = String(this.hours).padStart(2, "0");
        const m = String(this.minutes).padStart(2, "0");
        const s = String(this.seconds).padStart(2, "0");
		return `${h}:${m}:${s}`
	}
}

const clock = new Clock();

clock.tick();
clock.tick();
clock.tick();
clock.tick();
clock.tick();
clock.tick();
clock.tick();
clock.tick();
clock.tick();
clock.tick();
clock.tick();

console.log(clock.getTime());
