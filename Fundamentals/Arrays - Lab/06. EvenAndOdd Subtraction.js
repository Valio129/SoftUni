function evenOddDiff(arr) {
    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) {
            even += Number(arr[i])
        } else {
            odd += Number(arr[i])
        }
    }
    console.log(even - odd);
}
evenOddDiff([3, 5, 7, 9])