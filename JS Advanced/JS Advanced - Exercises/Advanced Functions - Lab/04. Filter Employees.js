function filterEmployees(empList, criteria) {
    // console.log(employees);
    let employees = JSON.parse(empList);
    function  print(list) {
        return list.forEach((emp, index) => console.log(`${index}. ${emp['first_name']} ${emp['last_name']} - ${emp['email']}`))
    }
   if (criteria !== 'all') {
       const [criteriaKey, criteriaValue] = criteria.split('-');
          print(employees.filter((obj) => {
               return obj[criteriaKey] == criteriaValue;
           })
          )

   } else {
       print(employees)
   }

}


filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'all'
)