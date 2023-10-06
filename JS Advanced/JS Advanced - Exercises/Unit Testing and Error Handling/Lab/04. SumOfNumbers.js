// const { assert } = require("chai");
function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}
describe('sum', () => {
    it('should be passed arr', () => {
        expect(arr).to.be.array();
    });
    it('should 3 & 5 give 8', function () {
       assert(sum(3,5))
    });
});
module.exports = {
    sum
}