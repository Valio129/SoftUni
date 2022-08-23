function demo(array) {
    let fieldLength = array[0];
    let slotsWithBugs = array[1].split(" ").map(Number);
    let field = new Array(fieldLength).fill(0);
    slotsWithBugs.forEach(i => {
        if (i >= 0 && i < fieldLength) {
            field[i] = 1;
        }
    });
    for (let index = 2; index < array.length; index++) {
        let command = array[index].split(" ");
        let [selectIndex, direction, jumpLength] = command;
        selectIndex = Number(selectIndex);
        jumpLength = Number(jumpLength);
        if (selectIndex < 0 || selectIndex >= fieldLength || field[selectIndex] !== 1) {
            continue;
        }
        if (direction === "right") {
            field[selectIndex] = 0;
            let newIndex = selectIndex + jumpLength;
            while (newIndex < fieldLength) {
                if (field[newIndex] === 1) {
                    newIndex += jumpLength;
                    continue;
                }
                field[newIndex] = 1;
                break;
            }
        } else if (direction === "left") {
            field[selectIndex] = 0;
            let newIndex = jumpLength - selectIndex;
            while (newIndex >= 0) {
                if (field[newIndex] === 1) {
                    newIndex -= jumpLength;
                    continue;
                }
                field[newIndex] = 1;
                break;
            }
        }
    }
    console.log(field.join(" "));
}
demo([5, '3', '3 left 2', '1 left -2']);
