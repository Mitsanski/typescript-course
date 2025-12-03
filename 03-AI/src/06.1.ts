type envTypes = "dev" | "test" | "prod";

class Config {
	appName: string;
	protected enviroment: envTypes;
	private _apiKey: string = "";

	constructor(name: string, env: envTypes, apiKey: string) {
		this.appName = name;
		this.enviroment = env;
		this._apiKey = apiKey;
	}

	getAppConfig(): string {
		return `Currently the app ${this.appName} is in ${this.enviroment} enviroment.`;
	}

	protected _getSecretKey(): string {
		return this._apiKey;
	}
}

class TestConfig extends Config {
	public leakSecret(): string {
		const secret = this._getSecretKey();
		const env = this.enviroment;
		return `[SUBCLASS ACCESS] Environment: ${env}, Secret Key: ${secret.substring(0, 5)}...`;
	}
}

const configuration = new Config('Minecraft', 'prod', 'alksjdhnaslkj');
const testConfiguration = new TestConfig('Minecraft Test', 'dev', '9876543210');


console.log("--- 1. Public Access Test ---");
console.log(configuration.getAppConfig()); // OK: Public method is called
// console.log(configuration.appName); // OK: Public property is read

console.log("\n--- 2. Protected/Private Access Failure Test ---");
try {
    // @ts-ignore: TS prevents this access at compile time, but if it were JS, it would fail.
    // We add a try/catch block for runtime clarity if this code ran in a non-strict environment.
    configuration._getSecretKey();
    console.log("Attempt to access _getSecretKey() directly FAILED (TS Error)");
} catch (e) {
    // This part shows why you can't access it.
    console.error(e);
}

console.log("\n--- 3. Subclass Access Success Test (The Proof) ---");
// The subclass can access the protected method via its own public method
console.log(testConfiguration.leakSecret());