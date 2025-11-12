class Product {
	static productCount = 1;
	readonly id: number = Product.productCount;
	name: string;
	price: number;

	constructor(name: string, price: number) {
		if (name.length < 3) {
			throw new Error(
				"Product name should be at least 3 characters long"
			);
		}

		this.name = name;

		if (price < 0) {
			throw new Error("Product price should be more than 0");
		}
		this.price = price;

		Product.productCount++;
	}

	getDetails(): string {
		return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`;
	}
}

class Inventory {
	private products: Product[] = [];

	addProduct(product: Product): void {
		this.products.push(product);
	}

	listProducts(): string {
		const productStrings = this.products.map(
			(p) => `ID: ${p.id}, Name: ${p.name}, Price: ${p.price}`
		);
		return `${productStrings.join("\n")}\nTotal products created: ${
			Product.productCount - 1
		}`;
	}
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
