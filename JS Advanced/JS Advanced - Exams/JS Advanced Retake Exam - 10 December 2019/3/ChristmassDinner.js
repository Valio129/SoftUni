class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    set budget(r) {
        if (r < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = r;
    }
    get budget() {
        return this._budget;
    }
    shopping(product) {
        let [productName, price] = product;
        price = Number(price);
        if (this._budget >= price) {
            this.products.push(productName);
            this._budget -= price;
            return(`You have successfully bought ${productName}!`);
        } else {
            throw new Error('Not enough money to buy this product');
        }
    }
    recipes(recipeObject) {
        // const { recipeName,productList } = recipeObject;
        let { productsList, recipeName } = recipeObject;
        // return((productsList).some((prod) => this.products.includes(prod) === false));
        // return(recipeName);
        if ((productsList).some((prod) => this.products.includes(prod) === false)) {
            throw new Error('We do not have this product');
        }
        this.dishes.push({ recipeName, productsList });
        return(`${recipeName} has been successfully cooked!`);
    }
    inviteGuests(name, dish) {
        if (this.guests.hasOwnProperty(name) == true) {
            throw new Error('This guest has already been invited');
        }
        if (this.dishes.some(recipeObj => recipeObj.recipeName === dish) == false) {
            throw new Error('We do not have this dish');
        }
        this.guests[name] = dish;
        return(`You have successfully invited ${name}!`);
    }
    showAttendance() {
        const out = [];
        for (const guestNameKey of Object.keys(this.guests)) {
            const name = guestNameKey;
            const dishName = this.guests[guestNameKey];
            const products = this.dishes.find(dish => dish.recipeName == dishName);
            out.push(`${name} will eat ${dishName}, which consists of ${products.productsList.join(', ')}`);
        }
        return out.join('\n');
    }

}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

return(dinner.showAttendance());

