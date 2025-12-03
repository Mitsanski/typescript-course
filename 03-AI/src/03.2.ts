class Pet {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    makeNoise(): string {
        return `A generic pet sound`;
    }
}

class Cat extends Pet{
    furColor: string;

    constructor(name: string, fc: string){
        super(name);
        this.furColor = fc;
    }

    override makeNoise():string {
        return `Purrrr. ${this.name} the ${this.furColor} cat.`
    }
}

const newCat = new Cat('Ogre', 'orange')

console.log(newCat.makeNoise())