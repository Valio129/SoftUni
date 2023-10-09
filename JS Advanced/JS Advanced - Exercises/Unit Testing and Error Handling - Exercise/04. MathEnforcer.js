describe('mathEnforcer', () => {
    it('should be object', ()=> {
        expect(typeof mathEnforcer).to.be.equal('object');
        expect(typeof mathEnforcer.addFive(-1)).to.be.equal('number');
        expect(typeof mathEnforcer.subtractTen(-1)).to.be.equal('number');
        expect(typeof mathEnforcer.sum(-1, 1)).to.be.equal('number');
    })
    describe('addFive', () => {
        it('used (-1 -5 0 1 1.1 -1.1)', () => {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
            expect(mathEnforcer.addFive(1.111)).to.be.equal(1.111 + 5);
            expect(mathEnforcer.addFive(-1.111)).to.be.equal(-1.111 + 5);
            
        });
        it("mathEnforcer.addFive() should return undefined",function(){
            expect(mathEnforcer.addFive()).to.equal(undefined);
         });
        it('should NOT work WITH non integers', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
            expect(mathEnforcer.addFive(['1'])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            // expect(mathEnforcer.sum('1.11', -1)).to.be.undefined;

        });
    });
    describe('subtractTen', () => {
        it('should work with -10', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
            expect(mathEnforcer.subtractTen(1.111)).to.be.equal(1.111 - 10);
            expect(mathEnforcer.subtractTen(-1.122)).to.be.equal(-1.122 - 10);
        });
        it('should NOT work WITH non integers', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
            expect(mathEnforcer.subtractTen(['1'])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;// expect(mathEnforcer.sum('1.11', -1)).to.be.undefined;

        });
        it("mathEnforcer.subtractTen() should return undefined",function(){
            expect(mathEnforcer.subtractTen()).to.equal(undefined);
         });
    });
    describe('sum', () => {
        it('should work', () => {
            expect(mathEnforcer.sum(1.111, 1)).to.be.equal(1.111+ 1);
            expect(mathEnforcer.sum(1.111, -1)).to.be.equal( -1 + 1.111);
            expect(mathEnforcer.sum(-1.11, -1)).to.be.equal(-1.11 -1);
            expect(mathEnforcer.sum(1, -1)).to.be.equal(0);
            expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
            expect(mathEnforcer.sum(-1, 1)).to.be.equal(0);
            

        });
        it('should NOT work when first num is non-integers', () => {
            expect(mathEnforcer.sum([1.11], 1.111)).to.be.undefined;
            expect(mathEnforcer.sum([1.11], -1.111)).to.be.undefined;
            expect(mathEnforcer.sum([1.11], -1)).to.be.undefined;
            expect(mathEnforcer.sum([1.11], 1)).to.be.undefined;
            expect(mathEnforcer.sum('1.11', 1.111)).to.be.undefined;
            expect(mathEnforcer.sum('1.11', -1.111)).to.be.undefined;
            expect(mathEnforcer.sum('1.11', 1)).to.be.undefined;
            expect(mathEnforcer.sum('1.11', -1)).to.be.undefined;
            expect(mathEnforcer.sum({}, -1.11)).to.be.undefined;
            expect(mathEnforcer.sum({}, 1.11)).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum({}, -1)).to.be.undefined;
            expect(mathEnforcer.sum(true, 1.111)).to.be.undefined;
            expect(mathEnforcer.sum(true, -1.111)).to.be.undefined;
            expect(mathEnforcer.sum(true, 1)).to.be.undefined;
            expect(mathEnforcer.sum(true, -1)).to.be.undefined;
        });
        it('should NOT work when second num is non-integers', () => {
            expect(mathEnforcer.sum(1.111, '2')).to.be.undefined;
            expect(mathEnforcer.sum(-1.111, '2')).to.be.undefined;
            expect(mathEnforcer.sum(-1, '2')).to.be.undefined;
            expect(mathEnforcer.sum(1, '2')).to.be.undefined;
            expect(mathEnforcer.sum(1.111, ['1'])).to.be.undefined;
            expect(mathEnforcer.sum(-1.111, ['1'])).to.be.undefined;
            expect(mathEnforcer.sum(1, ['1'])).to.be.undefined;
            expect(mathEnforcer.sum(-1, ['1'])).to.be.undefined;
            expect(mathEnforcer.sum(1.111, {})).to.be.undefined;
            expect(mathEnforcer.sum(-1.111, {})).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
            expect(mathEnforcer.sum(-1, {})).to.be.undefined;
            expect(mathEnforcer.sum(-1.111, true)).to.be.undefined;
            expect(mathEnforcer.sum(1.111, true)).to.be.undefined;
            expect(mathEnforcer.sum(-1, true)).to.be.undefined;
            expect(mathEnforcer.sum(1, true)).to.be.undefined;

        });
        it("mathEnforcer.sum() should return undefined",function(){
            expect(mathEnforcer.sum()).to.equal(undefined);
         });
    });
});