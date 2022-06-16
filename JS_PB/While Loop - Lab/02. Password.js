function solve(arg) {
    let username = arg.shift();
    const pass = arg.shift();
    let inputPass = arg.shift();
    while (inputPass !== pass) {
        inputPass = arg.shift();
    }
    console.log(`Welcome ${username}!`);

}