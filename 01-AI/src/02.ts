enum TrafficLights {
	Red = "Stop right there",
	Yellow = "Get ready",
	Green = "Go time",
}

function getInsctructions(light: TrafficLights): string {
	return light;
}

console.log(getInsctructions(TrafficLights.Red))
console.log(getInsctructions(TrafficLights.Yellow))
console.log(getInsctructions(TrafficLights.Green))

console.log(TrafficLights.Green)