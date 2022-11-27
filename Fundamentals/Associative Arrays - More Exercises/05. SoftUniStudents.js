function solveStudents(input) {
    const coursePattern = /(?<name>[\w#]+):\s(?<cap>\d+)/;
    const studentPattern = /(?<username>\w+)\[(?<credit>\d+)\] with email (?<email>\w+@\w+\.\w+) joins (?<course>[\w#]+)/;
    let coursesObj = {}
    let users = {}
    for (let token of input) {
        if (coursePattern.test(token)) {
            let [courseName, curCapacity] = token.split(': ')
            curCapacity = Number(curCapacity)
            //check if name is present in Obj
            if (coursesObj.hasOwnProperty(courseName)) {
                curCapacity += coursesObj[courseName].capacity
                coursesObj[courseName].capacity = curCapacity
            } else {

                coursesObj[courseName] = { capacity: curCapacity, users: [] }
            }
        } else if (studentPattern.test(token)) {
            token = token.split(' ')
            let user = token[0]
            user = user.split('[')
            let credits = Number(user[1].substring(0, user[1].indexOf(']')))
            user = user[0]
            const email = token[3]
            const courseName = token[token.length - 1]
            if (coursesObj.hasOwnProperty(courseName) && coursesObj[courseName].capacity > 0 
            && coursesObj[courseName].users.includes(user) === false) {
                coursesObj[courseName].capacity -= 1
                coursesObj[courseName].users.push(user)
                users[user] = { email, credits }
            }
        }
    }
    // +++ SORING PART
    let sortedCourses = Array.from(Object.keys(coursesObj))
        .sort((a, b) => {
            let A = coursesObj[a].users.length
            let B = coursesObj[b].users.length
            return B - A
        })
    for (let course of sortedCourses) {
        console.log(`${course}: ${coursesObj[course].capacity} places left`);
        // TO DO: sort descending print credit ... check if sortedStudents has el's
        if (coursesObj[course].users.length > 0) {
            let sortedStudents = Array.from(coursesObj[course].users)
                .sort((a, b) => {
                    let A = users[a].credits
                    let B = users[b].credits
                    return B - A
                })
            for (const student of sortedStudents) {
                const studCredits = users[student].credits
                const studEmail = users[student].email
                console.log(`--- ${studCredits}: ${student}, ${studEmail}`);
            }
        }
    }
}
solveStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])