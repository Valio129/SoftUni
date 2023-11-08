function solution() {
    window.addEventListener('load', loadStartData);
    function loadStartData(event) {
        fetch('http://localhost:3030/jsonstore/advanced/articles/list')
            .then(response => response.json())
            .then(data => {
                const mainEl = document.getElementById('main');
                console.log(mainEl);
                for (const card of data) {
                    mainEl.appendChild(e('div', { className: 'accordion' },
                        e('div', { className: 'head' },
                            e('span', {}, card.title),
                            e('button', { id: card._id, onClick: toggleData , className:'button'}, 'More'),
                        ),
                        e('div', { className: 'extra' }),
                    ));
                }
                function e(type, attributes, ...content) {
                    const result = document.createElement(type);

                    for (let [attr, value] of Object.entries(attributes || {})) {
                        if (attr.substring(0, 2) == 'on') {
                            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
                        } else {
                            result[attr] = value;
                        }
                    }

                    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

                    content.forEach(e => {
                        if (typeof e == 'string' || typeof e == 'number') {
                            const node = document.createTextNode(e);
                            result.appendChild(node);
                        } else {
                            result.appendChild(e);
                        }
                    });

                    return result;
                }
                function toggleData(ev) {
                    const el = ev.target;
                    const idUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/' + el.id;
                    const extraDiv = el.parentNode.parentNode.querySelector('div.extra');
                    if (el.textContent == 'More') {
                        el.textContent = 'Less';
                        fetch(idUrl).then(response => response.json())
                            .then(data => {
                                console.log(data.content);
                                const text = data.content;
                                extraDiv.style.display = 'block';
                                extraDiv.innerHTML = '';
                                extraDiv.appendChild(e('p', {}, text));
                            });
                    } else if (el.textContent == 'Less') {
                        extraDiv.style.display = 'none';
                        el.textContent = 'More';
                    }
                }
            });

    }
    /**
     * 
    <!-- <div class="accordion">
    <div class="head">
    <span>Scalable Vector Graphics</span>
    <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
    </div>
    <div class="extra">
                <p>Scalable Vector Graphics .....</p>
            </div>
        </div> -->
 */
}
solution();