type Config = {
	endpoint: string;
	retries: number;
};

type Metadata = {
	timestamp: number;
	source: string;
};
type Payload = {
	data: string[];
	metadata: Metadata | null;
};
type Status = "Success" | "Fail" | "Pending";
type ResType = {
	status: Status;
	payload: Payload;
	retry: (force: boolean) => void;
};

function mapResponse(
	config: Config,
	response: ResType
) {
	if (response.status === "Fail" && config.retries > 0) {
		console.log(`Retrying ${config.endpoint}...`);
		response.retry(true);
	}
}
