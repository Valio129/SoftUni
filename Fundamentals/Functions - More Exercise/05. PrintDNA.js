function printDNA(num) {
    const n = num

    let letters = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G']
    let counter = 0
    let index = 0
    for (let line = 1; line <= n; line ++) {
        counter++
        
        switch (counter) {
            case 1:
                console.log(`**${letters[index]}${letters[index + 1]}**`);
                break;
            case 2:
                console.log(`*${letters[index]}--${letters[index + 1]}*`);
                break;

            case 3:
                console.log(`${letters[index]}----${letters[index + 1]}`);
                break;
            case 4:
                console.log(`*${letters[index]}--${letters[index + 1]}*`);
                break;
            case 5:
                console.log(`**${letters[index]}${letters[index + 1]}**`);

                break;

            case 6:
                if (index === letters.length - 1) {

                    console.log(`*${letters[index]}--${letters[0]}*`);
                } else {
                    console.log(`*${letters[index]}--${letters[index + 1]}*`);
                }
            default:
                break;
        }
        index += 2

        if (index === letters.length) {
            index = 0
        }
        if (counter === 6) {
            counter = 2
        }

    }

}



printDNA(50)