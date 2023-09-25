function solution(){
    let string = '';
    function append(str) {
        return  string + str;
    }
    function removeStart(n) {
        return string.slice(n);
    }
    function removeEnd(n) {
        return string.slice(0, -n);
    }
    function print() {
        console.log(string);
    }
    return {
        append,
        removeEnd,
        removeStart,
        print
    }

}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();