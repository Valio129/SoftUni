function rev(num, arr) {
    let revArr = []
    for (let i = num-1; i >= 0; i--) {
        revArr.push(arr[i]);

    }
    console.log(revArr.join(" "));
}
rev(3, [10, 20, 30, 40, 50])
rev(4, [-1, 20, 99, 5])