function login(userArray) {
    let username = String(userArray[0])

    let index = 1
    let password = ""
    for (let currrentLetter = username.length; currrentLetter >= 0; currrentLetter--) {
        password += username.charAt(currrentLetter)

    }
    let counter = 0
    while (userArray[index] !== password) {
        counter++
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            return
        }
        console.log("Incorrect password. Try again.");
        index++
    }
    console.log(`User ${username} logged in.`);
} login['Acer', 'login', 'go', 'let me in', 'recA']