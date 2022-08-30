function matrix(num) {
    for (let rols = 0; rols < num; rols++) {
        let out = []
        for (let colls = 0; colls < num; colls++) {
            out.push(num)
        }
        console.log(out.join(" "));
    }

}
matrix(7)