function solve(speed, area) {
    let limit;
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break; case 'city':
            limit = 50;
            break; case 'residential':
            limit = 20;
            break;
        default:
            break;
    }
    if (speed > limit) {
        const overspeed = speed - limit;
        let status;
        if (overspeed <= 20) {
            status = 'speeding';
        } else if (overspeed <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}
solve(40, 'city');
solve(120, 'interstate');