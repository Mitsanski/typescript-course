type paramType = number | string;

function flexibleAdder(a?: paramType, b?: paramType, c?: paramType): number {
	const params = [a, b, c];
	let sum = 0;

    for (let param of params){
        if (param !== undefined) {
            sum += Number(param);
        }
    }
	return sum;
}

console.log(flexibleAdder(undefined, 5, 5));
console.log(flexibleAdder("5", 5, "5"));
console.log(flexibleAdder("10", "20"));
console.log(flexibleAdder(100, undefined, "50"));
console.log(flexibleAdder());
