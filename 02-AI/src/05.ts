type cmdType =
	| { id: "Move"; x: number; y: number; speed: "Fast" | "Slow" }
	| { id: "Lift"; weight: number; height: number; safety?: "On" }
	| { id: "Scan"; range: number; analyze: () => void }
	| { id: "Speak"; text: string; volume: number };

function executeCommand(cmd: cmdType) {
	switch (cmd.id) {
		case "Move":
			// TypeScript knows 'cmd' has x, y, and speed here
			console.log(`[MOVE] Robot moving to (${cmd.x}, ${cmd.y}) at ${cmd.speed} speed.`);
			break;
		case "Lift":
			// TypeScript knows 'cmd' has weight, height, and optional safety here
			const safetyStatus = cmd.safety ? "Safety ON" : "Safety OFF";
			console.log(
				`[LIFT] Lifting ${cmd.weight}kg to height ${cmd.height}m. (${safetyStatus})`
			);
			break;
		case "Scan":
			// TypeScript knows 'cmd' has range and analyze() here
			console.log(`[SCAN] Initiating scan for range ${cmd.range}...`);
			cmd.analyze();
			break;
		case "Speak":
			// TypeScript knows 'cmd' has text and volume here
			console.log(`[SPEAK] Volume ${cmd.volume}: "${cmd.text}"`);
			break;
	}
}

executeCommand({ id: "Move", x: 100, y: -50, speed: "Fast" });
executeCommand({ id: "Lift", weight: 500, height: 2 });
executeCommand({ id: "Lift", weight: 800, height: 1.5, safety: "On" });
executeCommand({ id: "Scan", range: 30, analyze: () => console.log("Scan completed.") });
executeCommand({ id: "Speak", text: "Wagwan, fam", volume: 8 });
