function vol(){

    return Math.abs(this.x*this.y*this.z);
}
function area() {
    return Math.abs(this.x * this.y)
}
function solve(area, vol, inputString) {
    const outputArr = []
    const objArr = JSON.parse(inputString)
    for (const objArrElement of objArr) {
        for (let key in (objArrElement)) {
            objArrElement[key] = Number(objArrElement[key]);
        }
        outputArr.push({area: area.call(objArrElement), volume: vol.call(objArrElement)})
    }
    return outputArr
}
let figures1 = solve(area, vol,`[
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`)