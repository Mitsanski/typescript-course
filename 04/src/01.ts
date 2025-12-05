function arraySwap<T>(arrA: T[], aIndex: number, arrB: T[], bIndex: number){
    const elA = arrA[aIndex];
    const elB = arrB[bIndex]
    arrA.splice(aIndex, 1, elB)
    arrB.splice(bIndex, 1, elA)

}



let a = [20, 30 , 40];
let b = [1, 2, 3, 4, 5];
arraySwap<number>(a, 0, b, 2);
console.log(a)
console.log(b)
