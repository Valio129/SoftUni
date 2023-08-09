function solve() {
    function createSortedList() {
        return {
            nums: [],
            // sortedArr: this.nums.sort((a, b) => a - b),
            size: 0,
            remove(index) {
                if (index <= this.nums.length - 1 || index >= 0) {
                    if (this.nums[index] !== undefined) {
                        this.nums.splice(index, 1);
                        this.size--;
                    }
                }
            },
            add(num) {
                this.nums.push(num);
                let sortedArr = this.nums.sort((a, b) => a - b);
                this.nums = sortedArr.slice(0);
                this.size++;
            },
            get(index) {
                if (index <= this.nums.length - 1 || index >= 0) {
                    if (this.nums[index] !== undefined && typeof index == 'number') {
                        return this.nums[index];
                    }
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
    console.log();

}
solve();
