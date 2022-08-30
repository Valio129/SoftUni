function loadingBar(proc) {
    let progress = proc / 10
    let bar = new Array(10).fill(".")
    for (let index = 0; index <= progress - 1; index++) {
        bar[index] = "%"
    }
    console.log(`${proc}% [${bar.join("")}]`);
    if (proc < 100) {
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
    }
}
(loadingBar(9))