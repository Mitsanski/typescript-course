"use strict";
function evenSum(a, b, c) {
    const sum = a + b + c;
    return sum % 2 == 0;
}
console.log(evenSum(1, 2, 3));
console.log(evenSum(2, 2, 3));
