function companyList(arr) {
    let companies = {}
    for (const token of arr) {
        let [company, employeeId] = token.split(' -> ')
        if (!companies.hasOwnProperty(company)) {
            companies[company] = []
        }
        if (!companies[company].includes(employeeId)) {
            companies[company].push(employeeId)
        }
    }
    for (const companyName of Object.keys(companies).sort((a, b) => a.localeCompare(b))) {
        console.log(companyName);
        for (const employee of companies[companyName]) {
            console.log(`-- ${employee}`);
        }
    }
}
companyList([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)