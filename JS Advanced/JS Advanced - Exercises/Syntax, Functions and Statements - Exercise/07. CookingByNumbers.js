function solve(...args) {
    let number = Number(args.shift());
    args.forEach(
        (operation) => {
            switch (operation) {
                case 'chop':
                    number /= 2;
                    break;
                case 'dice':
                    number = Math.sqrt(number);
                    break;
                case 'spice':
                    number++;
                    break;
                case 'bake':
                    number *= 3;
                    break;
                case 'fillet':
                    number -= number * 0.2;
                    break;
                default:
                    break;
            }
            console.log(number);
        });
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');