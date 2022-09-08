function lastKSequence(n,k) {
    let res = [1]
    for (let index = 0; index < n - 1; index++) {
        let take = res.slice(-k)
        let sum = 0
        for (let element of take) {
            sum+= element
        }
        res.push(sum)
    }
    console.log(res.join(' '));
}
lastKSequence(6, 3)
lastKSequence(8, 2)