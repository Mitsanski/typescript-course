enum LoggingLevel {
	Info = "Info",
	Error = "Error",
	Warning = "Warning",
	Debug = "Debug",
}

enum LoggingFormat {
	Standard = "[%level][%date] %text",
	Minimal = "*%level* %text",
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
	cachedLogs: Map<T, string[]>;
	log(logLevel: T, message: string): void;
	getFormat(): V;
}

class Logger<T extends LoggingLevel, V extends LoggingFormat> implements CachingLogger<T, V> {
	cachedLogs: Map<T, string[]> = new Map();
	format: V;

	constructor(format: V) {
		this.format = format;
	}

	log(logLevel: T, message: string): void {
		const timestamp = new Date().toISOString();
		const log = this.format
			.replace("%level", logLevel)
			.replace("%date", timestamp)
			.replace("%text", message);
		console.log(log);

		const currMessages = this.cachedLogs.get(logLevel) || [];
		currMessages.push(log);
		this.cachedLogs.set(logLevel, currMessages);
	}

	getFormat(): V {
		return this.format;
	}
}

const infoLogger = new Logger<LoggingLevel.Info, LoggingFormat.Minimal>(LoggingFormat.Minimal);

infoLogger.log(LoggingLevel.Info, "Starting up the server.");
// infoLogger.log(LoggingLevel.Error, "This would work, but usually you'd constrain T further.");

const debugLogger = new Logger<LoggingLevel, LoggingFormat.Standard>(LoggingFormat.Standard);
debugLogger.log(LoggingLevel.Debug, "Database connection established.");
debugLogger.log(LoggingLevel.Error, "Database timed out.");

console.log("\n--- Cached Logs (Debug) ---");
console.log(debugLogger.cachedLogs.get(LoggingLevel.Debug));
console.log(debugLogger.cachedLogs.get(LoggingLevel.Error));
console.log(`Format used by Info Logger: ${infoLogger.getFormat()}`);
