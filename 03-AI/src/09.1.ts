abstract class StaffMember {
	name: string;

	constructor(n: string) {
		this.name = n;
	}

	abstract calculatePay(): number;
}

class HourlyEmployee extends StaffMember {
	hourlyRate: number;
	hoursWorked: number;

	constructor(n: string, hourlyPay: number, hoursWorked: number) {
		super(n);
		this.hourlyRate = hourlyPay;
		this.hoursWorked = hoursWorked;
	}

	override calculatePay(): number {
		return this.hourlyRate * this.hoursWorked;
	}
}

class SalariedEmployee extends StaffMember {
	annualSalary: number;

	constructor(n: string, annualSalary: number) {
		super(n);
		this.annualSalary = annualSalary;
	}

	override calculatePay(): number {
		return this.annualSalary / 12;
	}
}




const hourEmployee = new HourlyEmployee("Kiril", 16, 40);
console.log(
	`${hourEmployee.name} has worked for ${
		hourEmployee.hoursWorked
	} hours and got paid ${hourEmployee.calculatePay()} buckaroos`
);

const salariedEmployee = new SalariedEmployee("Kiril", 30000)
console.log(`${salariedEmployee.name} receives ${salariedEmployee.annualSalary} buckaroos or ${salariedEmployee.calculatePay()} buckaroos per month.`)