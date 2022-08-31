function validatePoints(numArr) {
    const x1 = numArr[0]
    const y1 = numArr[1]
    const x2 = numArr[2]
    const y2 = numArr[3]  
    let x1y1x2y2 = findDistance(x1, y1, x2, y2)
    let x1y1 = findDistance(x1, y1, 0, 0)
    let x2y2 = findDistance(x2, y2, 0, 0)
    let parsing = (value) => value = parseInt(value)
    let output = print(x1, y1, 0, 0)
    if (x1y1 === parsing(x1y1)) {
        output += 'valid'
    } else {
        output += 'invalid'
    }
    console.log(output);
    output = print(x2, y2, 0, 0)
    if (x2y2 === parsing(x2y2)) {
        output += 'valid'
    } else {
        output += 'invalid'
    }
    console.log(output);
    output = print(x1, y1, x2, y2)
    if (x1y1x2y2 === parsing(x1y1x2y2)) {
        output += 'valid'
    } else {
        output += 'invalid'
    }
    console.log(output);

    //(x1, y1) and (x2, y2)
    function findDistance(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));

        return result
    }
    function print(point1, point2, toPoint1, toPoint2) {
        const answer = `{${point1}, ${point2}} to {${toPoint1}, ${toPoint2}} is `
        return answer
    }
}

validatePoints([3, 0, 0, 4])
validatePoints([2, 1, 1, 1])

