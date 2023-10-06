function solve() {
    let addBtn = this.document.getElementById('add')
    const open = document.querySelector('h1.orange').parentElement.parentElement.children[1];
    const inProgress = document.querySelector('h1.yellow').parentElement.parentElement.children[1];
    const complete = document.querySelector('h1.green').parentElement.parentElement.children[1];
    // console.log(open, inProgress, complete);
    function deleteEl(el) {
        const articleEl = el.target.parentNode.parentNode
        articleEl.parentNode.removeChild(articleEl);
        console.log(articleEl);
    }
    function startTask(el) {
        const articleEl = el.target.parentNode.parentNode
        const btns = Array.from(articleEl.children)
        .filter(el => el.tagName =='DIV')[0]
        console.log(btns);
        btns.children[0].parentNode.removeChild( btns.children[0]);
        
        const finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', finishTask);
        finishBtn.setAttribute('class', 'orange')
        btns.appendChild(finishBtn)
        inProgress.appendChild(articleEl)
    }
    function finishTask(el) {
        const articleEl = el.target.parentNode.parentNode
        const btns = Array.from(articleEl.children)
        .filter(el => el.tagName =='DIV')[0]
        btns.parentNode.removeChild(btns)
        complete.appendChild(articleEl)
    }
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const inputs = Array.from(e.target.parentElement.children);
        // console.log(inputs);
        const task = inputs.filter(el => el.id == 'task').shift()
        const description = inputs.filter(el => el.id == 'description').shift()
        const date = inputs.filter(el => el.id == 'date').shift()
       
       
        if (task.value !== '' && description.value !== '' && date.value !== '') { // to do : create output obj and aurtomate the appending of childs
            const article = document.createElement('article');                      // add inputs to arr -> check if every el in the arr satisfies the desctiption
            
            
            //generating text
            const taskText = document.createElement('h3');
            taskText.textContent = task.value
            article.appendChild(taskText)
            const descText = document.createElement('p');
            descText.textContent = `Description: ${description.value}`;
            article.appendChild(descText)
            const dateText = document.createElement('p');
            dateText.textContent = `Due Date: ${date.value}`
            article.appendChild(dateText)
            const div = document.createElement('div')
            div.setAttribute('class', 'flex');
            const startBtn = document.createElement('button')
            startBtn.setAttribute('class', 'green')
            startBtn.textContent = 'Start'
            const delBtn = document.createElement('button')
            delBtn.textContent = 'Delete'
            delBtn.addEventListener
            delBtn.setAttribute('class', 'red')
            delBtn.addEventListener('click', deleteEl)
            startBtn.addEventListener('click', startTask)
            div.appendChild(startBtn)
            div.appendChild(delBtn)
            article.appendChild(div)
            open.appendChild(article)
            //clear fields              // to do: add for each and clear the output
            task.value = ''
            description.value = ''
            date.value = ''
        }
    })   
}




