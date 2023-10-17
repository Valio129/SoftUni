function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this._salary = 0;
            this._taskIndex = 0;
            this._bonuses = 0;
        }
        get salary() {
            return this._salary;
        }
        set salary(value) {
            this._salary = value;
        }
        get bonuses() {
            return this._bonuses;
        }
        set bonuses(value) {
            this._bonuses = value;
        }
        work() {
            if (this._taskIndex == this.tasks.length) {
                this._taskIndex = 0;
            }
            console.log(this.tasks[this._taskIndex]);
            this._taskIndex++;

        }
        collectSalary() {
            let outputSal = this.salary + this.bonuses;
            if (this.hasOwnProperty('_dividend')) {
                outputSal += this.dividend;
            }
            console.log(`${this.name} received ${outputSal} this month.`);
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.salary = 0;
            this.tasks = [`${this.name} is working on a simple task.`];
            this._taskIndex = 0;
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.salary = 0;
            this.tasks = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
            this._taskIndex = 0;
        }

    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.salary = 0;
            this.tasks = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];
            this._taskIndex = 0;
            this._dividend = 0;
        }
        get dividend() {
            return this._dividend;
        }
        set dividend(value) {
            this._dividend = value;
        }
    }
    return { Employee, Junior, Senior, Manager };
}
const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();