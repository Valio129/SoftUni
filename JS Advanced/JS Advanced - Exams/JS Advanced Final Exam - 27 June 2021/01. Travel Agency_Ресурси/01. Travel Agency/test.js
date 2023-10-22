const { expect } = require("chai");
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
    inputBlocks.forEach(e => {
      if (obj.hasOwnProperty(e.id)) {
        e.value = obj[e.id][1];
      }
    });
  }


  function onContinue(event) {
    let el = event.target;
    const block = document.getElementById('block')
    Array.from(block.children).forEach(child => child.parentNode.removeChild(child))
    const h3 = document.createElement('h3')
    h3.textContent = 'Thank you for your reservation!'
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

document.body.innerHTML = `
<div id="block">
    <h1>Travel Agency - Reservation</h1>
    <h4>Please fill in the following information in order to proceed with your reservation:</h4>
    <div id="form">
        <div>
            <label>Full Name:</label>
            <input type="text" id="fname">
        </div>
        <div>
            <label>Email:</label>
            <input type="email" id="email">
        </div>
        <div>
            <label>Phone Number:</label>
            <input type="number" id="phone">
        </div>
        <div>
            <label>Address:</label>
            <input type="text" id="address">
        </div>
        <div>
            <label>Postal Code:</label>
            <input type="number" id="code">
        </div>
        <input type="button" id="submitBTN" value="Submit">
    </div>

    <div id="information">
        <label>Preview your information:</label>
        <div class="preview">
            <ul id="infoPreview"></ul>
            <div class="actions">
                <input type="button" id="editBTN" value="Edit" disabled>
                <input type="button" id="continueBTN" value="Continue" disabled>
            </div>
        </div>
    </div>
    <footer>JS Advanced Exam - Travel Agency </footer>
</div>
<script src="solution.js"></script>
`;
result();

const createFields = {
	fname: ()=>document.getElementById("fname"),
	email: ()=>document.getElementById("email"),
	phone: ()=>document.getElementById("phone"),
	address: ()=>document.getElementById("address"),
	code: ()=>document.getElementById("code"),
submitbtn: ()=>document.getElementById("submitBTN"),
editbtn: ()=>document.getElementById("editBTN"),
continuebtn: ()=>document.getElementById("continueBTN")
}

createFields.fname().value = 'Joro Italianeza';
createFields.email().value = 'joroitalianeza@gmail.com';
createFields.phone().value = '0888 888 888';
createFields.address().value = 'Simeonovo';
createFields.code().value = '1000';

createFields.submitbtn().click()
createFields.editbtn().click()

expect($('#fname').val()).to.equal('Joro Italianeza', 'Name input field does not have correct data');
expect($('#email').val()).to.equal('joroitalianeza@gmail.com', 'Email input field does not have correct data');
expect($('#phone').val()).to.equal('0888 888 888', 'Phone input field does not have correct data');
expect($('#address').val()).to.equal('Simeonovo', 'Address input field does not have correct data');
expect($('#code').val()).to.equal('1000', 'Code field does not have correct data');

expect($('#submitBTN').prop('disabled'), 'When edit button is clicked, the submit button was not enabled').to.be.false;
expect($('#editBTN').prop('disabled'), 'When edit button is clicked, the edit button was not disabled').to.be.true;
expect($('#continueBTN').prop('disabled'), 'When edit button is clicked, the continue button was not disabled').to.be.true;