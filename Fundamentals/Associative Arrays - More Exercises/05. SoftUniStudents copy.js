function solveStudents(input) {
    let coursesObj = {
        /**
         * usersObj = {
         *  username: { 
         *  email:, credits
         * }
         * }
         * courseName: courseObj
         *          couseObj {
         *             
         *              cap: (Number, decreasing useing If (> 0))
         *               users : Map {
         *                  usernameKey: [email, credits]                    
         *                    }                     
         *              }
         */
    }
    for (let token of input) {
        if (token.split(': ').length == 2) {
            let [courseName, curCapacity] = token.split(': ')
            curCapacity = Number(curCapacity)
            //check if name is present in Obj
            if (coursesObj.hasOwnProperty(courseName)) {
                curCapacity += coursesObj.courseName.capacity
                coursesObj[courseName].capacity = curCapacity
            } else {

                coursesObj[courseName] = { curCapacity, users: [] }
            }
        } else {
            token = token.split(' ')
            const user = token[0]
            const email = token[3]
            const courseName = token[token.length - 1]
            if (courses.includes(obj => obj.courseName === courseName)) {
                let index = courses.indexOf(el => el.courseName === courseName)
                let courseObj = courses[index]

            }
            console.log();
        }
    }
    console.log();

}
solveStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])