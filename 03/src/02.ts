class BankAccount {
    private balance: number;

    constructor(initial: number){
        this.balance = initial;
    }

    deposit(n: number): void {
        this.balance += n;
    }

    withdraw(n: number): void {
        this.balance -= n;
    }

    getBalance(): number{
        return this.balance;
    }
}

const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance())