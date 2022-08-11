function latin(n) {
    //loop from 1 to n
    let sequence = ""
    for (let i = 97; i <= 122; i++) {
        sequence += String.fromCharCode(i)
        if (sequence.length == n) {
            break;
        }
    }

    for (let i = 0; i < sequence.length; i++) {
        for (let j = 0; j < sequence.length; j++) {
            for (let k = 0; k < sequence.length; k++) {
                console.log(`${sequence[i]}${sequence[j]}${sequence[k]}`);;

            }

        }

    }
} latin(2)