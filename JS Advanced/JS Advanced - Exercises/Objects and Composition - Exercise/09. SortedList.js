function solve() {
    function createSortedList() {
        return {
            nums: new Set(),
            remove(num) {
                this.nums.delete(num);
            },
            add(num) {
                this.nums.add(num);
            },
            get(num) {
                // for (const el of this.nums.keys()) {
                //     if (el == num) {
                //         return this.nums.values[el];
                //     }
                // }
                return this.nums.values()[num];
            },
            size() {
                return this.nums.size;
            }
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
