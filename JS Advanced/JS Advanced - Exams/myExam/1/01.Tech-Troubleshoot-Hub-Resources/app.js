window.addEventListener('load', solution);
// const selectFields = Array.from(document.getElementsByTagName('select'));
// const tgextFields =  Array.from(document.getElementsByTagName('input'));
// let [ category, urgency, team, ] = inputs

function solution(e) {
  // console.log(Array.from(document.getElementsByTagName('select')));
  // console.log(Array.from(document.getElementsByTagName('input')));
  console.log('hey');
  // e.preventDefault();
  const selectFields = Array.from(document.getElementsByTagName('select'));
  const [category, urgency, team] = selectFields;
  const tgextFields = Array.from(document.getElementsByTagName('input'));
  const [employee, description] = tgextFields;
  const [preview, pending, resolved] = document.querySelectorAll('div#wrapper section ul');
  // console.log(Array.from(document.querySelectorAll('div#wrapper section ul')));
  const addBtn = document.getElementById('add-btn');
  console.log(addBtn);
  addBtn.addEventListener('click', toPreview);


  //addBtn
  function toPreview(e) {
    console.log(this);
    e.preventDefault();
    // validation
    if (!selectFields.some(el => el.value == '') && !tgextFields.some(el => el.value == '')) {
      // get copy of data
      const inputData = {
        employee: ['From:', employee.value],
        category: ['Category:', category.value],
        urgency: ['Urgency:', urgency.value],
        team: ['Assigned to:', team.value],
        description: ['Description:', description.value],
      };
      //create li and append
      const element = createEl('li', { 'class': 'problem-content' },
        createEl('article', {},
          createEl('p', {}, `${['employee'][0]} ${inputData['employee'][1]}`),
          createEl('p', {}, `${inputData['category'][0]} ${inputData['category'][1]}`),
          createEl('p', {}, `${inputData['urgency'][0]} ${inputData['urgency'][1]}`),
          createEl('p', {}, `${inputData['team'][0]} ${inputData['team'][1]}`),
          createEl('p', {}, `${inputData['description'][0]} ${inputData['description'][1]}`)
        ),
        createEl('button', { 'class': 'edit-btn' }, 'Edit'),
        createEl('button', { 'class': 'continue-btn' }, 'Continue')
      );
      const editBtn = Array.from(element.children)[1];
      editBtn.addEventListener('click', onEdit.bind(null, inputData));
      const contBtn = Array.from(element.children)[2];
      contBtn.addEventListener('click', onContinue.bind(null, element, inputData));
      // console.log()
      // console.log()
      // console.log(element);
      preview.appendChild(element);
    }
    addBtn.disabled = true;
    selectFields.forEach(e => e.value = '');
    tgextFields.forEach(e => e.value = '');
  }
  // edit btn
  function onEdit(obj, ev) {
    console.log(obj);
    addBtn.disabled = false;
    const element = ev.target;
    element.parentNode.parentNode.removeChild(element.parentNode);
    for (const idKey in obj) {
      const inputEl = document.getElementById(idKey);
      inputEl['value'] = obj[idKey][1];
    }
  }
  function onContinue(liEl, ev) {
    liEl.parentNode.removeChild(liEl);
    console.log(liEl);
    const edit = Array.from(liEl.children)[1];
    const cont = Array.from(liEl.children)[2];
    edit.parentNode.removeChild(edit);
    cont.parentNode.removeChild(cont);
    const pendingLi = liEl;
    pendingLi.appendChild(createEl('button', { 'class': 'resolve-btn' }, 'Resolved'));
    console.log(pendingLi);


    const resBtn = Array.from(pendingLi.children)[1];
    resBtn.addEventListener('click', onResolve.bind(null, pendingLi));
    pending.appendChild(pendingLi);
  }
  function onResolve(pendingEl, ev) {
    pendingEl.parentNode.removeChild(pendingEl);

    const res = Array.from(pendingEl.children)[1];
    res.parentNode.removeChild(res);
    const resolvedLi = pendingEl;
    resolvedLi.appendChild(createEl('button', { 'class': 'clear-btn' }, 'Clear'));
    // console.log(pendingLi);


    const clearBtn = Array.from(resolvedLi.children)[1];
    clearBtn.addEventListener('click', onClear.bind(null, resolvedLi));
    resolved.appendChild(resolvedLi);
  }
  function onClear(resolvedEl, ev) {
    resolvedEl.parentNode.removeChild(resolvedEl);
  }

  function createEl(type, attr, ...content) {
    let element = document.createElement(type);
    for (const prop in attr) {
      prop == 'class' ? element.classList.add(attr[prop]) : element[prop] = attr[prop];
    }
    for (let item of content) {
      if (typeof item === 'string' || typeof item === 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }
    return element;
    // console.log(element);
  }
}
/*
PREVENMT DEAFULT
  Get input data
  ad e listeners to the btns 
  # validate data 
  # ul gets li item with the following structure
  # uls also get [{Edit}{Continue}] btns
  # disable add btn {Add} {Edit}{Continue} btns are enabled 
  EDIT E listener 
  retrieve data
    remove data
    enable addd 
 Pending 
  remove data from preview and add it to the pending list with resolved button instead of the two
  add e listener for this
Rsolved
  same data just resolve btn must be clear btn with other functionality
    [CLEAR]remove everything from the resolve list 

*/


