type dataType = string | number | boolean;
type actionType = "Reverse" | "Double" | "Type";

function universalProcessor(data: dataType, action: actionType, fallback: number): dataType {
	switch (action) {
		case "Reverse":
			if (typeof data === "string") {
				return data.split("").reverse().join("");
			} else if (typeof data == "number") {
				return +data.toString().split("").reverse().join("");
			} else {
				return !data;
			}
		case "Double":
			if (typeof data === "string") {
				return data.repeat(2);
			} else if (typeof data == "number") {
				return data * 2;
			} else {
				return fallback;
			}
		case "Type":
			return typeof data;
	}
}

console.log(universalProcessor("hello", "Reverse", 0));
console.log(universalProcessor(123, "Reverse", 0));
console.log(universalProcessor(true, "Reverse", 0));
console.log(universalProcessor("Hi", "Double", 0));
console.log(universalProcessor(50, "Double", 0));
console.log(universalProcessor(true, "Type", 0));
