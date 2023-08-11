function extract(content) {
    let text = document.getElementById(content).textContent;
    let reg = /(?:\((.[^(]+)\))/gm;
    let res = text.match(reg).map(x => x.split('')
        .slice(1, x.length - 1)
        .join(''));
    return res;


}