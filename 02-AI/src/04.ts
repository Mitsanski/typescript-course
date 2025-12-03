type logEntry =
	| { level: "INFO" | "WARN"; message: string }
	| { level: "ERROR"; message: string; errorCode: number }
	| { level: "DEBUG"; message: string; detailsLevel: number };

function logAnalyzer(entry: logEntry) {
	switch (entry.level) {
		case "ERROR":
			console.log(`[${entry.level}] ${entry.message} (Code: ${entry.errorCode})`);
			break;
		case "DEBUG":
			console.log(`[${entry.level}] ${entry.message} (Depth: ${entry.detailsLevel})`);
			break;
		default:
            console.log(`[${entry.level}] ${entry.message}`);
			break;
	}
}

logAnalyzer({ level: "INFO", message: "Booting" });
logAnalyzer({ level: "ERROR", message: "DB Fail", errorCode: 503 });
logAnalyzer({ level: "DEBUG", message: "Check X", detailsLevel: 5 });
