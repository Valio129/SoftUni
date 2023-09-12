function lockedProfile() {
    const main = document.getElementById('main');
    main.addEventListener('click', revealData);
    function isActive(e) {
        const btn = el.parentElement.getElementsByTagName('button')[0];
        const radioBtns = Array.from(e.target.parentElement.querySelector('input[type="radio"]'));
        const value = radioBtns.find(btn => btn.checked = true).value;
        switch (value) {
            case 'lock':
                btn.disabled = true;
                break;

            case 'unlock':
                btn.disabled = false;
                break;
            default:
                break;
        }
    }

    function revealData(e) {
        const el = e.target;
        if (el.tagName == 'BUTTON') {
            const btn = el;
            const parentDiv = el.parentElement;
            parentDiv.addEventListener('load', isActive);
            const hiddenInfo = Array.from(el.parentElement.children)
                .find(el => (el.id.toLowerCase()).includes('hidden'));
            if (hiddenInfo.style.display == 'none') {
                hiddenInfo.style.display = 'inline-block';
                btn.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }
    console.log(main);
}