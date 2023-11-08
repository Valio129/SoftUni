function lockedProfile() {
    //get data for all users => 
    // replace  the example existing one with those from the fetch
    loadUsersData();

    // get all 'Show more' buttons
    // attach ev listeners
    //  => find ParentEl = profile div
    // check if unlocked 
    // fetch data 
    // then unfold the profile div and show data
    // reveal disabled fields
    // else 
    //disable buttons 
    function toggleProfileData(ev) {
        const clickedBtnEl = ev.target;
        const profileDivEl = clickedBtnEl.parentNode;
        const checkedRadioBtn = profileDivEl.querySelector('input[type="radio"]:checked');
        console.log(checkedRadioBtn)
        
        const hiddenFields = profileDivEl.querySelector('div#user1HiddenFields')
        //get locked Data and check if the curr profile is locked 
        if (checkedRadioBtn.value == 'unlock') {
            // enable profile's  btn first

            
            //get all user data
            if (clickedBtnEl.textContent == 'Show more') {
                clickedBtnEl.textContent = 'Hide it';
                hiddenFields.style.display = ''
            } else {
                clickedBtnEl.textContent = 'Show more';
                hiddenFields.style.display = 'none'
                
            }
        } else if(checkedRadioBtn.value == 'lock'){
            // disable profile's  btn first
           
        }

        console.log(profileDivEl);
        console.log(checkedRadioBtn);
    }
    function loadUsersData() {
        fetch('http://localhost:3030/jsonstore/advanced/profiles').then(response => response.json())
            .then(data => {
                const profileDiv = document.querySelector('div.main');
                const loadedProfiles = [];
                Object.keys(data).forEach((profileId, index) => {
                    const profile = data[profileId];
                    loadedProfiles.push(
                        //div.profile
                        e('div', { className: 'profile' },
                            e('img', { className: 'userIcon', src: './iconProfile2.png' }),
                            e('label', {}, 'Lock'),
                            e('input', {checked: true, type: 'radio', name: `user${index}Locked`, value: 'lock' }),
                            e('label', {}, 'Unlock'),
                            e('input', { type: 'radio', name: `user${index}Locked`, value: 'unlock' }),
                            e('br', {},),
                            e('hr', {},),
                            e('label', {}, 'Username'),
                            e('input', { type: 'text', name:`user${index}Username`, disabled: true, readonly:true, value:profile.username }),
                            // div : hiddenFields
                            e('div', { id: 'user1HiddenFields' },
                                e('hr', {},),
                                e('label', {}, 'Email:'),
                                e('input', { type: 'email', name: `user${index}Email`, value: profile.email, disabled: true, readonly: true }),
                                e('label', {}, 'Age:'),
                                e('input', { type: 'age', name: `user${index}Age`, value: profile.age, disabled: true, readonly: true }),
                            ),
                            e('button', {onClick: toggleProfileData}, 'Show more')
                        )
                    );
                });
                loadedProfiles.map(e => e.querySelector('div#user1HiddenFields').style.display = 'none')
                document.querySelector('main#main').replaceChildren(...loadedProfiles);
            });
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
}