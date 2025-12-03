class Student {
	readonly studentId: string;
	name: string;
	gpa: number;

	constructor(id: string, name: string, gpa: number) {
		this.studentId = id;
		this.name = name;
		this.gpa = gpa;
	}

	getAcademicStatus(): string {
		return `Student ${this.studentId} (${this.name}) has a GPA of ${this.gpa}.`;
	}

	isDeanList(): boolean {
		return this.gpa >= 3.7;
	}
}

const student = new Student("67", "Kiril", 6);

console.log(student.getAcademicStatus());

console.log(`Is ${student.name} on the Dean's List? ${student.isDeanList()}`);
