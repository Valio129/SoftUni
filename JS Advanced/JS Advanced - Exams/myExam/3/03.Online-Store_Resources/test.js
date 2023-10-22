const { expect, assert } = require('chai');
const onlineStore = require('./onlineStore');
describe("Tests …", function () {
    describe("canAffordProduct(productPrice, accountBalance)", function () {

        it("valid input enough funds", function () {
            assert.equal(onlineStore.canAffordProduct(100, 200), `Product purchased. Your remaining balance is $100.`);
        });
        it("valid input not enough funds", function () {
            assert.equal(onlineStore.canAffordProduct(300, 200), `You don't have sufficient funds to buy this product.`);
        });

        it("invalid input", function () {
            expect(() => onlineStore.canAffordProduct('100', '0')).throw("Invalid input.");
        });
    });

    describe("getRecommendedProducts(productList, category)", function () {

        it("valid input matching category", function () {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Camera Stand", category: "Photography" },], 'Photography')).to.equal(
                `Recommended products in the Photography category: Camera, Camera Stand`
            );
        });
        it("valid input not matching category", function () {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Camera Stand", category: "Photography" },], 'Sport')).to.equal(
                `Sorry, we currently have no recommended products in the Sport category.`
            );
        });
        it("invalid input", function () {
            expect(() =>onlineStore.getRecommendedProducts('[]', 12)).to.throw(
                "Invalid input."
            );
        });

    });


    describe("isProductAvailable(product, stockQuantity)", function () {
        
        it("valid input in stock", function () {
            expect(onlineStore.isProductAvailable('PC', 2)).to.equal(`Great! PC is available for purchase.`)
        });
        it("valid input out of stock", function () {
            expect(onlineStore.isProductAvailable('PC', 0)).to.equal(`Sorry, PC is currently out of stock.`)
            expect(onlineStore.isProductAvailable('PC', -1)).to.equal(`Sorry, PC is currently out of stock.`)
        });
        it("invalid input", function () {
            expect(() => onlineStore.isProductAvailable(['PC', 'laptop'], '2')).to.throw("Invalid input.")
        });
    });
    
    // TODO: …
    describe("TODO …", function () {

        it("TODO …", function () {
            // TODO: …
        });
    });
});