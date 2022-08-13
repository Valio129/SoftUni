function chess(n) {
    //<div class="chessboard">
    console.log(`<div class="chessboard">`);
    for (let divCounter = 1; divCounter <= n; divCounter++) {
        console.log(`  <div>`);

        for (let spanCounter = 1; spanCounter <= n; spanCounter++) {
            if (divCounter % 2 != 0) {
                if (spanCounter % 2 != 0) {
                    console.log(`<span class="black"></span>`);
                } else {
                    console.log(`<span class="white"></span>`);
                }
            } else {
                if (spanCounter % 2 != 0) {
                    console.log(`<span class="white"></span>`);
                } else {
                    console.log(`<span class="black"></span>`);
                }
            }

        }
        console.log(`  </div>`);

    }
    console.log(`</div>`);
    //</div>

} chess(6)