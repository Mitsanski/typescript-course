function convertArrays(arr: string[]): [string, number] {
    const str: string = arr.join('');

    return [str, str.length]
}
console.log(convertArrays(['How', 'are', 'you?']));
console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));