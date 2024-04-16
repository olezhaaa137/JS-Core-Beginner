class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = 0.1 * baseSalary; 
        return baseSalary + bonus;
    }
}


const manager1 = new Manager("Alice", 50000, "Sales");
const manager2 = new Manager("Bob", 60000, "Marketing");


const annualSalary1 = manager1.calculateAnnualSalary();
const annualSalary2 = manager2.calculateAnnualSalary();