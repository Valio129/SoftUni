function solve() {
    function createSortedList() {
        return {
            nums: [],
            // sortedArr: this.nums.sort((a, b) => a - b),
            size: 0,
            remove(index) {
                let sortedArr = this.nums.sort((a, b) => a - b);
                let indexValue = sortedArr[index];
                let delIndex = this.nums.indexOf(indexValue);
                if (delIndex <= this.nums.length - 1 || delIndex >= 0) {
                    if (this.nums[delIndex] !== undefined) {
                        this.nums.splice(delIndex - 1, 1);
                        this.size--;
                    }
                }
            },
            add(num) {
                this.nums.push(num);
                this.size++;
            },
            get(index) {
                let sortedArr = this.nums.sort((a, b) => a - b);
                if (index <= sortedArr.length - 1 || index >= 0) {
                    return sortedArr[index];
                }
            },
        };
    }
    let list = createSortedList();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1));
    list.remove(1);
    console.log(list.get(1));

}
solve();
