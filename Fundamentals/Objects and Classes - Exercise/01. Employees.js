//create a employee class 
//loop thru the array & take its length and assign it to the class as number
// store the curr emp into array 
// print the array with seperated spaces 

function employeeInfo(namesArray) {
    class Employee {
        constructor(name, number) {
            this.employeeName = name;
            this.personalNum = number;
        }
    };

    for (const name of namesArray) {
        const currentNumber = name.length;
        let employee = new Employee(name, currentNumber);
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`);
    }

}
employeeInfo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)
employeeInfo([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
)