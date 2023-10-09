describe('isOddOrEven',() => {
    it('Should not accept non-string values as parrameter',()=>{
        expect(typeof isOddOrEven(['a'])).not.to.be.string
    })
    it('Should not accept string values as parrameter',()=>{
        expect(typeof isOddOrEven('a')).not.to.be.string
    })
    it('Should not accept string values as parrameter',()=>{
        expect( isOddOrEven()).to.be.undefined
    })
    it('Should return odd when invoked with even length string',()=>{
        expect(isOddOrEven('aka')).to.be.equal('odd')
    })
    it('Should return even when invoked with even length string',()=>{
        expect(isOddOrEven('aa')).to.be.equal('even')
    })
    it('multiple different strings in a row to ensure the function works correctly',()=>{
        expect(isOddOrEven('aaOddNumEvEVnfksdafjgh')).to.be.equal('even')
    })
});