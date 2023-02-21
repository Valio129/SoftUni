function gcd(fruitType, quantityInGrams, pricePerKilo) {
    const weightKilo = quantityInGrams / 1000;
    const money = weightKilo * pricePerKilo;
    console.log(`I need $${money.toFixed(2)} to buy ${weightKilo.toFixed(2)} kilograms ${fruitType}.`);
}
gcd('orange', 2500, 1.80);