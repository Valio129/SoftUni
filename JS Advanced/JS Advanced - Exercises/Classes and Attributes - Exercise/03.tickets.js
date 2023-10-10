function solve(arr, order) {
    const tickets = [];
    for (let ticket of arr) {
        let [destination, price, status] = ticket.split('|');
        price = Number(price);
        tickets.push({ destination, price, status });
    }
    if (order == 'price') {
        return tickets.sort((t1, t2) => t1[order] - t2[order]);

    } else {
        return tickets.sort((t1, t2) => {
           return t1[order].localeCompare(t2[order])
        });
    }
}
// let sortedArr = solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'price')
// .forEach(e => console.log(e));
