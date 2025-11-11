type input = string | number;

function optionalMultiplier(a?: input, b?: input, c?: input): number {
    let num1 = a == undefined ? 1 : Number(a);
    let num2 = b == undefined ? 1 : Number(b);
    let num3 = c == undefined ? 1 : Number(c);

    return num1 * num2 * num3;
}

console.log(optionalMultiplier('3', 5, '10'))
console.log(optionalMultiplier('2', '2'))
console.log(optionalMultiplier(undefined, 2, 3))
console.log(optionalMultiplier(7, undefined, '2'))
console.log(optionalMultiplier())