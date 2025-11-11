function printGreetings(text: string | string[]): void {
    if (typeof text === 'string') {
        console.log(text)
    } else {
        console.log(text.join(' '))
    }
}

// printGreetings('Hello Pencho');
// printGreetings(['Hello', 'its', 'me']);


let passFailGrade: "Pass" | "Fail";

passFailGrade = "Fail"
// console.log(passFailGrade)

let numericGrade: 2 | 3 | 4 | 5 | 6;
numericGrade = 4;

type Person = {
    firstName: string;
    lastName: string;
    age: number;
}

type StudentProfile = {
    school: string;
    gpa: number;
}

type FullStudent = Person & StudentProfile

function printStudentInfo(student: FullStudent): void {
    for (let key in student) {
        console.log(`${key} -> ${student[key as keyof FullStudent]}`)
    }
}

// printStudentInfo({
//     firstName: 'Kiril',
//     lastName: "Mitsanski",
//     age: 24,
//     school: "Uzu",
//     gpa: 6
// })

let kirilPerson: FullStudent = {
    firstName: 'Kiril',
    lastName: "Mitsanski",
    age: 24,
    school: "Uzu",
    gpa: 6
}

// console.log(kirilPerson)

type Point = {
    x: number;
    y: number;
}

type PartialPoint = {
    [K in keyof Point]?: Point[K]
}

let partialOriginPoint: PartialPoint = {
    y: 3
}

let originPoint = {
    x: 0,
    y: 0
}

function changeCoordinate(point: Point, coordinateName: keyof Point, newValue: number) {
    point[coordinateName] = newValue;
}
changeCoordinate(originPoint, "x", 5);

// console.log(originPoint)


type TreeNode = {
    value: number;
    leftChild?: TreeNode;
    rightChild?: TreeNode;
}

const leftLeaf: TreeNode = {
    value: 5,
}

const rightLeaf: TreeNode = {
    value: 10,
}

const root: TreeNode = {
    value: 3,
    leftChild: leftLeaf,
    rightChild: rightLeaf
}

// console.log(root)

interface Animal {
    name: string;
    age: number;
    makeSound(soundName: string): void;
}

class Dog implements Animal {
    public name: string;
    public age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    makeSound(soundName: string): void {
        console.log(`${this.name} ${soundName}s`)
    }
}

const newDog = new Dog('Charlie', 5);

newDog.makeSound('Bark')


interface Person1 {
    firstName: string;
    lastName: string;
    age: number;
}

interface StudentProfile1 extends Person1 {
    school: string;
    gpa: number;
}

  