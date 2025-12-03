class SessionManager {
	private _isActive: boolean = false;
	protected _lastActivity: Date = new Date();

	public start(): void {
		this._isActive = true;
		this._lastActivity = new Date();
		console.log(`Sessions started at ${this._lastActivity.toLocaleDateString()}`);
	}

	public end(): void {
		this._isActive = false;
		console.log(`Session ended`);
	}
	get status(): string {
		return this._isActive ? "Active" : "Inactive";
	}
}

const session = new SessionManager();

session.start();

console.log(session.status);

session.end();

console.log(session.status);
