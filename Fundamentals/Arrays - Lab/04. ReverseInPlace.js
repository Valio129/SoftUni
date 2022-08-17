function revPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = "";
        let endIndex = arr.length - 1 - i;
        temp = arr[i]
        arr[i] = arr[endIndex]
        arr[endIndex] = temp


    }
    console.log(arr.join(" "));

}
revPlace(['a', 'b', 'c', 'd', 'e'])
revPlace(['33', '123', '0', 'dd'])