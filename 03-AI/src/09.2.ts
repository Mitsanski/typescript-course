abstract class Asset {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    abstract getValue():number;

}

class Stock extends Asset {
    shares: number = 0;
    pricePerShare: number = 0;

    constructor(name: string, shares: number, price: number){
        super(name);
        this.shares = shares;
        this.pricePerShare = price;
    }

    override getValue(): number {
        return this.shares * this.pricePerShare;
    }
}

class RealEstate  extends Asset  {
    appraisedValue: number = 0;

    constructor(name: string, av: number) {
        super(name)
        this.appraisedValue = av;
    }

    override getValue(): number {
        return this.appraisedValue;
    }
}
const stock = new Stock("Lockheed Martin", 30, 441.82);
console.log(`Fam got ${stock.shares} shares of that ${stock.name} stock and they worth ${stock.getValue().toFixed(2)} freedom units. MAD. `)

const house = new RealEstate("Main blvd. 67", 3000000);
console.log(`Fam got that ${house.name} real estate property and it's worth about ${house.getValue()}`)

