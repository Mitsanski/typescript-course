class Logger {
	private static _logEntries: string[] = [];

	static log(message: string): void {
		const timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");
		Logger._logEntries.push(`[${timestamp}] ${message}`);
	}
	static getLogs(): string[] {
		return this._logEntries;
	}
}

Logger.log("aslkdn");
Logger.log("asdasdlakjsbd");
Logger.log("asl;dkihasn;dklj");
Logger.log("asdasdlakjsbd");
console.log(Logger.getLogs());
