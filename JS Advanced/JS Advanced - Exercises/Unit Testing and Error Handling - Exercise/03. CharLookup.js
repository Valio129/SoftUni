describe('lookupChar', () => {
    it('Should chack If the first parameter is a string ', () => {
        expect(lookupChar(2)).to.be.undefined;
        expect(lookupChar({})).to.be.undefined;
        expect(lookupChar([2])).to.be.undefined;
        expect(lookupChar(true)).to.be.undefined;
        expect(lookupChar('')).to.be.undefined;
    });
    it('Should chack If the second parameter is a number', () => {
        expect(lookupChar('2', 'index')).to.be.undefined;
        expect(lookupChar('2', {})).to.be.undefined;
        expect(lookupChar('2', true)).to.be.undefined;
        expect(lookupChar('2', [2])).to.be.undefined;
    });
    it('check if the value of the index is incorrect (-1)(2)(3)', () => {
        expect(lookupChar('22', -1)).to.be.equal('Incorrect index');
        expect(lookupChar('22', '22'.length)).to.be.equal('Incorrect index');
        expect(lookupChar('22', '22'.length + 1)).to.be.equal('Incorrect index');

    });
    it('valid out', () => {
        let inputString = 'hey';
        expect(lookupChar(inputString, 0)).to.be.string('h');
        expect(lookupChar(inputString, 1)).to.be.string('e');
        expect(lookupChar(inputString, inputString.length - 1)).to.be.string('y');
    });
    it('check if the value of the index is integer', () => {
        let index = 2.1;
        const output = lookupChar('hey', index);
        expect(output).to.be.undefined;
    });
    it('should return undefined on lookupChar("test", "2")', () => {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", 1.23)', () => {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    });
    it('should return Incorrect index on lookupChar("hello", -4)', () => {
        expect(lookupChar("hello", -4)).to.equal('Incorrect index');
    }); it('should return undefined on lookupChar(2, 2)', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", "2")', () => {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });



});