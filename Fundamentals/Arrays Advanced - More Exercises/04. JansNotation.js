function notation(array) {
    let nums = []
    while (array.length > 0) {
        let el = array.shift()
        if (typeof el === 'number') {
            nums.push(el)
        } else {
            if (nums.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else { // OR pop + pop
                let result
                let a = nums[nums.length - 2]
                let b = nums[nums.length - 1]
                switch (el) {
                    case "+":
                        result = a + b
                        break;
                    case "-":
                        result = a - b
                        break;
                    case "/":
                        result = a / b
                        break;
                    case "*":
                        result = a * b
                        break;
                    default:
                        break;
                }
                nums.splice(nums.length - 2, 2)
                nums.push(result)
            }
        }
    }
    if (nums.length === 1) {
        console.log(nums[0]);
    } else {
        console.log('Error: too many operands!');
    }
}
notation([3,

    4,

    '+'])
notation([5,

    3,

    4,

    '*',

    '-'])
notation([15, '/'])