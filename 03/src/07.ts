class Counter {
    static count = 0;

    static increment(){
        this.count++;
    }
    static decrement(){
        this.count--;
    }

    static getCount(): number{
        return this.count;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount())