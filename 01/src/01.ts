function evenSum(a: number, b: number, c: number): boolean{
    const sum = a + b + c;

    return sum % 2 == 0;
}
console.log(evenSum(1,2,3))
console.log(evenSum(2,2,3))