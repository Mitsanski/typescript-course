class User {
    private _username: string;

    constructor(u: string){
        this._username = u;
    }

    get username(): string {
        return this._username;
    } 

    set username(value: string){
        if (value.length < 3){
            console.log(`Error: Username must be at least 3 characters long`);
            return;
        }

        this._username = value;
    }
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);


const user2 = new User("Jo");

const user3 = new User('Martin');
user3.username = "Do";

