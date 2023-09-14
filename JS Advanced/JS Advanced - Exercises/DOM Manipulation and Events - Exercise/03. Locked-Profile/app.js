function lockedProfile() {
    const btns = Array.from(document.querySelectorAll('.profile button'))
        .forEach(btn => btn.addEventListener('click', revealData));
    function revealData(e) {
        const el = e.target;
        const isActive = el.parentElement.querySelector('input[type="radio"][value="unlock"').checked;
        if (isActive) {
            const hiddenInfo = el.parentElement.querySelector('div');
            if (el.textContent = 'Show more') {
                hiddenInfo.style.display = 'block';
                el.textContent = 'Hide it';
                // console.log(el.textContent);
                console.log(hiddenInfo);
            } else {
                hiddenInfo.style.display = '';
                el.textContent = 'Show more';
                // console.log(el.textContent);
            }
        }
    }
}