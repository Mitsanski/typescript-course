class IdGenerator {
    private static _nextId: number = 1000;
    static generateId(): number { return IdGenerator._nextId++}
}

console.log(IdGenerator.generateId())
console.log(IdGenerator.generateId())
console.log(IdGenerator.generateId())

