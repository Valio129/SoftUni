function sortArr(arr ,cmd) {
    if(cmd === 'asc') return (arr.sort((a,b) => a-b));
    else return (arr.sort((a,b) => b-a));

}
sortArr([14, 7, 17, 6, 8], 'desc')
