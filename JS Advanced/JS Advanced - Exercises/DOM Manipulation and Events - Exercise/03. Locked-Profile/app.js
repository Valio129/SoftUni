function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach(btn => btn.addEventListener('click', toggle));
    function toggle(e) {
        const el = e.target;
        const isActive = el.parentElement.querySelector('input[type="radio"][value="unlock"').checked;
        if (isActive) {
            //  = Array
            // .from(el.parentElement.querySelectorAll('div'))
            // .find(d => d.id.includes('HiddenFields'));
            const hiddenInfo = el.parentElement.querySelector('div')
            if (el.textContent == 'Show more') {
                hiddenInfo.style.display = 'block'  ;
                el.textContent = 'Hide it';
                // console.log(el.textContent);
                // console.log(hiddenInfo);
            } else if (el.textContent == 'Hide it'){
                hiddenInfo.style.display = '';
                el.textContent = 'Show more';
                // console.log('YES');
            }
        }
    }
}