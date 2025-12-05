type InputParam<T> = T extends number ? number : string

function conditionalNumber<T>(val: InputParam<T>){
    if (typeof val === 'number'){
        return val.toFixed(2);
    }
    return String(val)
}


console.log(conditionalNumber<number>(20.3555));
console.log(conditionalNumber<string>('wow'));
console.log(conditionalNumber<boolean>('a string'));
