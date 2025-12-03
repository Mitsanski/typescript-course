abstract class Project {
    title: string;
    budget: number;

    constructor(title: string, budget: number){
        this.title = title;
        this.budget = budget;
    }

    abstract getStatus(): string;
}

class InternalProject extends Project {
    department: string;
    constructor(title: string, budget: number, department: string){
        super(title, budget);
        this.department = department
    }

    override getStatus(): string {
        return `Internal Project: ${this.title} managed by ${this.department} - Budget: ${this.budget} buckaroos`
    }
}

class ClientProject extends Project {
    clientName: string;
    constructor(title: string, budget: number, cn: string){
        super(title, budget);
        this.clientName = cn;
    }

    override getStatus(): string {
        return `Client Project for ${this.clientName}: ${this.title} - Budget: $${this.budget}`
    }
}
