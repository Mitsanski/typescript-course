type BaseCPU = { cores: number; speed: string };
type BaseGPU = { vram: number; model: string };
type BaseRAM = { size: number; type: string };
type ComponentDiagnostics = {
	manufacturer: string;
	getDetails: () => string;
};

type CPU = BaseCPU & ComponentDiagnostics;
type GPU = BaseGPU & ComponentDiagnostics;
type RAM = BaseRAM & ComponentDiagnostics;

function carMechanic(cpu: CPU, gpu: GPU, ram: RAM) {
	console.log(`CPU: ${cpu.getDetails()}`);
	console.log(`GPU: ${gpu.getDetails()}`);
	console.log(`RAM: ${ram.getDetails()}`);
}

carMechanic(
	{
		cores: 8,
		speed: "3.8GHz",
		manufacturer: "Intel",
		getDetails() {
			return `${this.manufacturer} -> ${this.cores} cores`;
		},
	},
	{
		vram: 12,
		model: "RTX 3060",
		manufacturer: "NVIDIA",
		getDetails() {
			return `${this.manufacturer} -> ${this.vram}GB VRAM`;
		},
	},
	{
		size: 16,
		type: "DDR4",
		manufacturer: "Corsair",
		getDetails() {
			return `${this.manufacturer} -> ${this.size}GB DDR4`;
		},
	}
);
