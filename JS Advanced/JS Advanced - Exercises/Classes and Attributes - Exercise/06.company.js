class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(...args) {
        const [name, salary, position, department] = args;
        // console.log(args);
        if ((!args.every(el => (el !== '' && el !== null && el !== undefined))) || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary, position });

        return (`New employee is hired. Name: ${name}. Position: ${position}`);
    }
    bestDepartment() {
        let out = [];
        let currBestAvgSalary = 0;
        let bestDep = '';
        for (const dep in this.departments) {
            let currDepSal = 0;
            const departmentArr = this.departments[dep];
            for (const employee of departmentArr) {
                const emSalary = employee.salary;
                // console.log(emSalary);
                currDepSal += emSalary;
            }
            currDepSal /= departmentArr.length;
            if (currDepSal > currBestAvgSalary) {
                currBestAvgSalary = currDepSal;
                bestDep = dep;
            }
        }
        out.push(`Best Department is: ${bestDep}`);
        out.push(`Average salary: ${currBestAvgSalary.toFixed(2)}`);
        let sortedArr = this.departments[bestDep]
            .sort((e1, e2) => e1.name.localeCompare(e2.name))
            .sort((e1, e2) => e2.salary - e1.salary);
        sortedArr = sortedArr.forEach(emp => {
            out.push(`${emp.name} ${emp.salary} ${emp.position}`);
        });
        return out.join('\n');
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// console.log(c.bestDepartment());
// console.log(c.bestDepartment());