const { assert } = require("assert").strict;
const solve = require('./04. SumOfNumbers');
describe('sum', () => {
    it('should be passed arr', () => {
        expect(arr).to.be.array();
    });
    it('should 3 & 5 give 8', function () {
       assert(sum(3,5))
    });
})