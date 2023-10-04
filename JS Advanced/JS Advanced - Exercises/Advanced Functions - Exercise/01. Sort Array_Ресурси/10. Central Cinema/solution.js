function solve() {
    /**
     * clear function
     * delete function
     * archive function
     * onscreen function
     * ADD archive e listener
     * 
     */

    const [moviesSection, archiveSection] = Array.from(document.querySelectorAll('section'));
    const [name, hall, ticketPrice, onScreenBtn] = Array.from(
        document.querySelector('form#add-new div#container').children
    );


    onScreenBtn.addEventListener('click', addToArchive);

    function addToArchive(e) {
        e.preventDefault();
        console.log('cancelled succsessfuly');
        const isValid = ((name.value !== '') && (hall.value !== '') && (ticketPrice.value !== '' && !(isNaN((ticketPrice))) )); //To to : validate that it's number
        // let data = new FormData(document.getElementById('add-new'));
        if (isValid) {
            const movieDataArr = [
                ['span', name.value],
                ['strong', hall.value],
                ['strong', (Number(ticketPrice.value)).toFixed(2)],
                ['input', 'Tickets Sold'],
                ['button', 'Archive']
            ];
            // console.log(movieDataArr);
    
            const liEl = createMovieObj(movieDataArr);
            // console.log(moviesSection);
            
            moviesSection.appendChild(liEl);
        }
    }

    function createMovieObj(arr) {
        console.log('invoked createMovieObj');
        const outputLi = document.createElement('li');
        const div = document.createElement('div');

        for (let i = 0; i < arr.length; i++) {
            const [tag, value] = arr[i];
            const el = document.createElement(tag);
            console.log(arr[i]);
            console.log(tag, value);

            if (tag === 'input') {
                el.setAttribute('placeholder', value);
            } else {
                el.textContent = value;
            }

            if (i > 1) {
                div.appendChild(el);
                if (i == arr.length - 1) {
                    outputLi.appendChild(div);
                    break;
                }
                continue;
            } else {
                outputLi.appendChild(el);
            }
        }
        console.log(outputLi);
        return outputLi;
    }
    function clearInputs() {

    }
    function moveToArrchive() {

    }
    function deleteMovie() {

    }
    function clearList() {

    }
}