// create new arr to store uniqe arrs 
// create isEqual set to 'false'
// forof every arr and forof it again with others to get yes or no
// if no -> it's unique , then move on ,
// if at the end of the last loop the isEqual is still false 
//  store it into the arr with unique sequences  
function solve(array) {
    let arrOfArrs = array.map(el => JSON.parse(el))
    let uniqueArrs = []
    for (let arr of arrOfArrs) {
        // console.log(arr);
        let isEqual = true

        for (let arrIndex = arrOfArrs.indexOf(arr) + 1; arrIndex <= arrOfArrs.length - 1; arrIndex++) {
            isEqual = true
            let secondArr = arrOfArrs[arrIndex]
            isEqual = compare(arr, secondArr)
        }
        if (!isEqual) {
            uniqueArrs.push(arr)
        }
    }
    uniqueArrs.sort((a, b) => a.length - b.length)
    uniqueArrs.map(ar => ar.sort((a, b) => b - a))
    // print
    for (const arr of uniqueArrs) {
        console.log(arr);
    }
        //Compare Fn 
    function compare(a, b) {
        let isEqual = true
        if (a.length !== b.length) {
            isEqual = false
        }
        a.sort((a, b) => (a - b))
        b.sort((a, b) => a - b)
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                isEqual = false
                break;
            }
        }
        return isEqual
    }

}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
)
// solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"]
// )