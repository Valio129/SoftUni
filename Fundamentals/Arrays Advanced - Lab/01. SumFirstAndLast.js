function firstLastSum(arr) {
    let first = Number(arr.shift())
    let last = Number(arr.pop())
    console.log(first+last);
}
firstLastSum(['5', '10'])
firstLastSum(['20', '30', '40'])