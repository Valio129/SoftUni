window.addEventListener('load', solution);

function solution() {
  const inputBlocks = document.querySelectorAll('div#block div#form input');
  const [fname, email, phone, address, code, submitBtn] = inputBlocks;
  const [editBtn, continueBtn] = document.querySelectorAll('div#block div#information input');
  console.log(editBtn);
  const ul = document.querySelector('div#information ul#infoPreview');
  console.log(ul);
  submitBtn.addEventListener('click', submitData);
  continueBtn.addEventListener('click', onContinue);
  function submitData(event) {
    if (fname.value !== '' && email.value !== '') {
      const personData = {
        'fname': ['Full Name', fname.value],
        'email': ['Email', email.value],
        'phone': ['Phone Number', phone.value],
        'address': ['Address', address.value],
        'code': ['Postal Code', Number(code.value)],
      };
      editBtn.addEventListener('click', editData.bind(null, personData));
      for (const key in personData) {
        const li = document.createElement('li');
        li.textContent = `${personData[key][0]}: ${personData[key][1]}`;
        ul.appendChild(li);
      }
      //clear input
      fname.value = '';
      phone.value = '';
      email.value = '';
      address.value = '';
      code.value = '';
      //BTNS logic
      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
      // e listener 
    }
  }


  function editData(obj, event) {

    // Clear table
    Array.from(ul.querySelectorAll('li')).forEach(e => e.parentNode.removeChild(e));
    //BTNS logic
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
    // Retrieve data
    for (const key in obj) {
        const string = obj[key][1];
        document.getElementById(key).value = string;
     
    }
    // inputBlocks.forEach(e => {
    //   if (obj.hasOwnProperty(e.id)) {
    //     const string = obj[e.id][1];
    //     document.getElementById(e.id) = string;
    //   }
    // });
  }


  function onContinue(event) {
    let el = event.target;
    const block = document.getElementById('block');
    Array.from(block.children).forEach(child => child.parentNode.removeChild(child));
    const h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
    // .parentNode.removeChild(block)
  }
}
/**
 * Get input fields - later on they might be used again, so they must be saved into obj {id: value}
 * Add ev listener for [Submit] BTN
 * Read input data from input fields \
 * # validate it
 * ##   save it into an object if we want to use it back later  (pass it to [Edit] btn ev-listener)
 * # append data to the ul #infoPreview
 * # disable [Submit] and enable [Edit] and [Continue]
 * Add ev listener for [Edit] BTN
 *  # delete the submitted li from the ul
 *  # it will be passed object with the saved input data, we fill it back (might be used Obj.assign)
 *  ##[Edit] and [Continue] are disabled and [Submit] is enabled
 * Add ev listener for [Continue] BTN
 *  # inside div # block remove everything and add h3  with message
 *               delete Obj it after the continue - optional
*/

// console.log(continueBtn);
// console.log(phone);
// console.log(address);
// console.log(code);
// console.log(submitBtn);