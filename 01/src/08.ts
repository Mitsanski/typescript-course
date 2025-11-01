function customTypeGuard(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.length >= 1 && arr.every(el => typeof el == 'string')
}

console.log(customTypeGuard({}));
console.log(customTypeGuard({ test: 'one' }));
console.log(customTypeGuard([]));
console.log(customTypeGuard(undefined));
console.log(customTypeGuard(null));
console.log(customTypeGuard([12, 13]));
console.log(customTypeGuard(['test', 123]));
console.log(customTypeGuard(['a', 'b', 'c']));
