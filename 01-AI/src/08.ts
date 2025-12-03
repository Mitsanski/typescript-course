type User = {
	username: string;
	points: number;
};

function userGuard(input: unknown): string | undefined {
	if (
		"username" in (input as any) &&
		typeof (input as any).usename === "string" &&
		"points" in (input as any) &&
		typeof (input as any).points === "number"
	) {
		return `input is User`;
	}
}

console.log(userGuard({ username: "Kiril", points: 67 }));
