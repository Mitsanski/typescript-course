class Task {
	title: string;
	description: string;
	completed: boolean = false;
	private _createdBy: string;

	constructor(t: string, d: string, cb: string) {
		this.title = t;
		this.description = d;
		this._createdBy = cb;
	}

	get createdBy(): string {
		return this._createdBy;
	}

	toggleStatus() {
		this.completed = !this.completed ? true : false;
	}

	getDetails(): string {
		return `Task: ${this.title} - ${this.description} - ${
			this.completed ? "Completed" : "Pending"
		}`;
	}

	static createSampleTask(): Task[] {
		return [
			new Task(
				"Wash Dishes",
				"Clean up the kitchen and wash all dishes",
				"Mum"
			),
			new Task("Do Homework", "Finish the math assignment", "Teacher"),
		];
	}
}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());

const tasks = Task.createSampleTask();
tasks.forEach((task) => console.log(task.getDetails()));
