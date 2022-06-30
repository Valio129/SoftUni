function easterLunch(params) {
    const kozunakPrice = 3.20;
    const eggPrice = 4.35;
    const cookiesPricePerKg = 5.40;
    const eggPaintPrice = 0.15;

    let kozunakCount = Number(params[0])
    let eggCount = Number(params[1]) 
    let cookieKilos = Number(params[2])

    let easterPaint = eggCount * 12 * eggPaintPrice
    let sum =  + (kozunakCount * kozunakPrice) + (cookieKilos * cookiesPricePerKg) + easterPaint + eggCount * eggPrice
    console.log((sum).toFixed(2));
} easterLunch(["3",

    "2",

    "3"])