function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputData = JSON.parse(document.querySelector('#inputs textarea').value);

         let bestEl = document.querySelector('#outputs #bestRestaurant p');
         let bestElworkers = document.querySelector('#outputs #workers p');

         // console.log(inputData);
         let restaurantsObj = {};
         let bestRestName = '';
         let bestSalary = 0;
         for (let line of inputData) {
            let [name, workersData] = line.split(' - ');

            if (!(restaurantsObj.hasOwnProperty(name))) {
               restaurantsObj[name] = { name, workers: {}, avgSal: 0, bestSal: 0 };
            }
            workersData = workersData.split(', ');
            let restaurant = restaurantsObj[name];
            for (let workerInfo of workersData) {
               let [workerName, salary] = workerInfo.split(' ');
               salary = Number(salary);


               if (!(Object.hasOwnProperty(restaurant[workerName]))) {
                  restaurant.workers[workerName] = salary;
               }
               restaurant.avgSal += salary;
            }
            restaurant.avgSal /= Object.keys(restaurant.workers).length;
            if (!(bestSalary > restaurant.avgSal) ) {
               bestSalary = restaurant.avgSal ;
               bestRestName = name;
            }
            restaurant.bestSal = Object.values(restaurant.workers).sort((a, b) => b - a)[0];
            console.log(name);
            console.log(restaurant);
            console.log(restaurant.avgSal);
            console.log(restaurant.bestSal);
         }
         // const bestRestName = Object.values(restaurantsObj)
         //    .sort((a, b) => b.avgSal - a.avgSal)[0].name;
         console.log(bestRestName);
         // let bestSalary = restaurantsObj[bestRestName].avgSal;
         console.log(bestRestName);
         const bestRestSalary = restaurantsObj[bestRestName].bestSal;
         bestEl.textContent = `Name: ${bestRestName} Average Salary: ${(bestSalary).toFixed(2)} Best Salary:
         ${(bestRestSalary).toFixed(2)}`;
         //Name: {worker name} With Salary: {worker salary}
         let bestRestWorkers = Object.entries(restaurantsObj[bestRestName].workers).sort((a, b) => b[1] - a[1]);
         console.log(bestRestWorkers);
         bestRestWorkers.forEach(w => bestElworkers.textContent += `Name: ${w[0]} With Salary: ${w[1]} `);
      }
}