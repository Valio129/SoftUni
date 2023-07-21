function processCarRequest(carRequest) {
    const carFactory = {
        engines: {
            Small: { power: 90, volume: 1800 },
            Normal: { power: 120, volume: 2400 },
            Monster: { power: 200, volume: 3500 }
        },
        wheels(inches) { // rest if it's working
            let tire = inches;
            if (tire % 2 == 0) {
                tire--;
            }
            tire = Math.min(tire);
            return Array(4).fill(tire);
        }
    };
    let car = { model: carRequest.model };
    // car engine
    for (const engine in carFactory.engines) {
        const clientPower = carRequest.power;
        const currEnginePower = carFactory.engines[engine].power;
        if (currEnginePower >= clientPower) {
            car.engine = carFactory.engines[engine];
            break;
        }
    }
    // carriage
    car.carriage = { type: carRequest.carriage, color: carRequest.color };
    // wheels
    car.wheels = carFactory.wheels(carRequest.wheelsize);
    return car;
}
processCarRequest({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);