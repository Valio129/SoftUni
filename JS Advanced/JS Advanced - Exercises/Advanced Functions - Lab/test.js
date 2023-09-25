function vol(){

    return Math.abs(this.x*this.y*this.z);
}
function area() {
    return Math.abs(this.x * this.y)
}
let objArrElement = {"x":1,"y":2,"z":10}
console.log(area.call(objArrElement))