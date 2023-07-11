function solve(name, population, treasury) {
    let cities = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            percentage /= 100;
            this.population += Math.floor(this.population * percentage);
        },
        applyRecession(percentage) {
            percentage /= 100;
            this.treasury -= Math.floor(this.treasury * percentage);
        }

    };
    return cities;
}