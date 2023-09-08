function focused() {
    let container = Array.from(document.querySelectorAll('div div'));
    container.forEach(element => {
        let input = element.children[1];
        input.addEventListener('focus', (e) => {
            let el = e.currentTarget;
            el.parentNode.setAttribute('class','focused')
            console.log(e.target);
        });
    });

}