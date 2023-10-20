const { expect, assert } = require("chai");
const ChristmasMovies = require("./02. Christmas Movies_Resources");

describe("ChristmasMovies", function () {

    describe("Test all initial properties", function () {
        let testClass = new ChristmasMovies();
        it("TODO …", function () {
            expect(testClass.movieCollection.length).to.deep.equal(0);
            expect(testClass.movieCollection).to.equal([]);
        });
        it("Check Watched list …", function () {
            expect(testClass.watched).to.equal({});
        });
        it("Check actors list …", function () {
            expect(testClass.actors.length).to.deep.equal(0);
            expect(testClass.actors).to.deep.equal([]);
        });
    });
    describe("buyMovie()", function () {

        let testClass = new ChristmasMovies();
        beforeEach(function () {
            testClass = new ChristmasMovies();
        });
        it("Passes empty invocation", function () {
            assert.equal((testClass.buyMovie()), 'You just got undefined to your collection in which  are taking part!');
        });
        it("Throw err if title is not string", function () {
            expect(() => testClass.buyMovie(['It'], ['asd'])).to.throw;
        });
        it("Throw err if actors is not arr", function () {
            expect(testClass.buyMovie('asd', 'asd')).to.throw;
        });
        it("Throw err if title is already owned", function () {
            testClass.buyMovie('as', ['asd']);
            expect(() => testClass.buyMovie('as', ['asd'])).to.throw(Error, `You already own as in your collection!`);
        });
        it("Throw err if actors are not unique", function () {
            expect(testClass.buyMovie('It', ['a', 'a'])).to.throw;
        });
        it("Don't Throw err if actors are unique", function () {
            // testClass.buyMovie('It', ['a', 'b']);
            expect((testClass.buyMovie('It', ['a a', 'b b']))).to.be.equal('You just got It to your collection in which a a, b b are taking part!');
        });
    });

    describe("watchMovie()", function () {
        let testClass = new ChristmasMovies();
        beforeEach(function () {
            testClass = new ChristmasMovies();
        });
        it("Works buyMovie() to work", function () {
            testClass.buyMovie();

            expect(testClass.watchMovie()).to.equal();
        });
        it("Create new counter and set it to 1", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It');
            expect(testClass.watched['It']).to.equal(1);
        });
        it("Increment already owned movie", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It');
            testClass.watchMovie('It');
            expect(testClass.watched['It']).to.deep.equal(2);
        });
        it("Throws Err for invalid movie title", function () {
            testClass.buyMovie('It', ['a', 'b']);
            expect(() => testClass.watchMovie('2')).to.throw(Error, 'No such movie in your collection!');
        });
        // INVALID INPUT
        it("INVALID INPUT", function () {
            testClass.buyMovie('It', ['a', 'b']);
            expect(() => testClass.watchMovie(['2'])).to.throw(Error, 'No such movie in your collection!');
        });
        it("INVALID INPUT (passed number)", function () {
            testClass.buyMovie('It', ['a', 'b']);
            expect(() => testClass.watchMovie(2)).to.throw;
        });
    });

    describe("discardMovie()", function () {
        let testClass = new ChristmasMovies();
        beforeEach(function () {
            testClass = new ChristmasMovies();
        });

        it('Should throw error if input is empty string', () => {
            assert.throw(() => testClass.discardMovie(''), ' is not at your collection!');
            assert.throw(() => testClass.discardMovie('Hey'), 'Hey is not at your collection!');
        });
        it('Should throw error if input is empty string', () => {
            testClass.buyMovie();
            testClass.watchMovie();
            assert.equal(testClass.discardMovie(), 'You just threw away undefined!');
        });
        // propper message
        it("Should be  removed from the watched section", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It');
            testClass.discardMovie('It');
            expect(testClass.watched.hasOwnProperty('It')).to.be.false;
        });
        it("Should be  removed from the watched section", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It');
            expect(testClass.discardMovie('It')).to.be.equal('You just threw away It!');
            // expect(testClass.watched.hasOwnProperty('It')).to.be.false;
        });
        it("Should be  removed from the movie list section", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It', ['a', 'b']);
            testClass.discardMovie('It');
            expect(testClass.movieCollection.some(obj => obj.name === 'It')).to.be.false;

        });
        it("Should be  removed from the movie list section", function () {
            testClass.buyMovie('It', ['a', 'b']);
            // testClass.watchMovie('It', ['a', 'b']);
            // testClass.discardMovie('It');
            expect(() => testClass.discardMovie('It')).to.throw(Error, 'It is not watched!');

        });
        it("Should return error if input is invalid Title", function () {
            expect(() => testClass.discardMovie('It')).to.throw(Error, 'It is not at your collection!');
        });
        // INVALID INPUT
        it("INVALID INPUT", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It');
            expect(() => testClass.discardMovie(['It'])).to.throw(Error, 'It is not at your collection!');
        });
        it("INVALID INPUT (passed number)", function () {
            testClass.buyMovie('It', ['a', 'b']);
            expect(() => testClass.discardMovie(2)).to.throw(Error, '2 is not at your collection!');
        });
    });

    describe("mostStarredActors()()", function () {
        let testClass = new ChristmasMovies();
        beforeEach(function () {
            testClass = new ChristmasMovies();
        });

        it("No movies owned", function () {
            expect(() => testClass.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        });

        it("We have owned movie ", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It');
            expect(testClass.mostStarredActor()).to.equal('The most starred actor is a and starred in 1 movies!');
        });
        it("We have more than one owned movies ", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.buyMovie('A', ['a', 'c']);
            testClass.buyMovie('B', ['a', 'asd']);
            testClass.watchMovie('It');
            expect(testClass.mostStarredActor()).to.equal('The most starred actor is a and starred in 3 movies!');
        });
        it("No input added # checked ", function () {
            testClass.buyMovie();
            testClass.watchMovie();
            expect(() => testClass.mostStarredActor()).to.throw;
        });
    });

    describe("favouriteMovie()", function () {
        let testClass = new ChristmasMovies();
        beforeEach(function () {
            testClass = new ChristmasMovies();
        });

        it("No movies owned", function () {
            expect(() => testClass.favouriteMovie()).to.throw(Error, 'You have not watched a movie yet this year!');
        });
        it("We have an owned movie ", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.watchMovie('It');
            expect(testClass.favouriteMovie()).to.equal('Your favourite movie is It and you have watched it 1 times!');
        });
        it("We have more than one owned movies ", function () {
            testClass.buyMovie('It', ['a', 'b']);
            testClass.buyMovie('A', ['a', 'b']); ``;
            testClass.watchMovie('It');
            testClass.watchMovie('It');
            testClass.watchMovie('It');
            testClass.watchMovie('It');
            testClass.watchMovie('A');
            expect(testClass.favouriteMovie()).to.equal('Your favourite movie is It and you have watched it 4 times!');
        });

        it("No input added # also checked", function () {
            testClass.buyMovie();
            testClass.watchMovie();
            expect(testClass.favouriteMovie()).to.equal('Your favourite movie is undefined and you have watched it 1 times!');
        });
    });
});
