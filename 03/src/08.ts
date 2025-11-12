class Book {
    readonly title: string;
    readonly author: string;

    constructor(t: string, a: string){
        this.title = t;
        this.author = a;
    }
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
// book.title = "Brave New World";
// book.author = "Terry Pratchet";
// Error: Cannot assign to 'title' because it is a read-only property
// Error: Cannot assign to author because it is a read-only property
