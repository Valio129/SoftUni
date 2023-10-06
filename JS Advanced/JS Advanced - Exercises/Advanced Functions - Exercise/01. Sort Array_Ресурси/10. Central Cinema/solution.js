function solve() {
    const [moviesSection, archiveSection] = Array.from(document.querySelectorAll('section'));
    const [name, hall, ticketPrice, onScreenBtn] =
        Array.from(document.querySelector('form#add-new div#container').children);
    onScreenBtn.addEventListener('click', addToArchive);
    const clearBtn = archiveSection.children[2];
    clearBtn.addEventListener('click', clearList);


    function addToArchive(e) {
        e.preventDefault();
        const isValid = (name.value && hall.value && Number(ticketPrice.value) || ticketPrice.value === '0');
        if (isValid) {
            const movieDataArr = [
                ['span', name.value],
                ['strong', hall.value],
                ['strong', (Number(ticketPrice.value)).toFixed(2)],
                ['input', 'Tickets Sold'],
                ['button', 'Archive']
            ];

            const liEl = createMovieObj(movieDataArr);

            moviesSection.children[1].appendChild(liEl);
            clearInputs();
        }
    }

    function createMovieObj(arr) {
        const outputLi = document.createElement('li');
        const div = document.createElement('div');

        for (let i = 0; i < arr.length; i++) {
            const [tag, value] = arr[i];
            const el = document.createElement(tag);

            if (tag === 'input') {
                el.setAttribute('placeholder', value);
            } else {
                el.textContent = value;
            }

            if (i > 1) {
                div.appendChild(el);
                if (i == arr.length - 1) {
                    el.addEventListener('click', moveToArrchive);
                    outputLi.appendChild(div);
                    break;
                }
                continue;
            } else {
                outputLi.appendChild(el);
            }
        }
        // console.log(outputLi);
        return outputLi;
    }

    function moveToArrchive(e) {
        const movieLi = e.target.parentNode.parentNode;

        const movieName = movieLi.children[0].textContent;
        const price = Number(movieLi.children[2].children[0].textContent);

        let soldCount = (movieLi.children[2].children[1].value);
        // const isValidCount = validateInput(soldCount);
        ///  /^[0-9]*$/
        if (Number(soldCount.value) || soldCount === '0') {
            console.log(soldCount);
            const li = document.createElement('li');

            const span = document.createElement('span');
            span.textContent = movieName;

            const strong = document.createElement('strong');
            strong.textContent = `Total amount: ${(price * soldCount).toFixed(2)}`;

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', deleteMovie);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(delBtn);
            archiveSection.children[1].appendChild(li);
            movieLi.parentNode.removeChild(movieLi);
        }
    }

    function clearInputs() {
        [name, hall, ticketPrice].forEach(area => area.value = '');
    }

    function deleteMovie(e) {
        const movieLi = e.target.parentNode;
        movieLi.parentNode.removeChild(movieLi);
    }

    function clearList(e) {
        const movies = Array.from(e.target.parentNode.children[1].children);
        while (movies.length > 0) {
            movies[0].parentNode.removeChild(movies.shift());
        }
    }


}
