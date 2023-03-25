window.addEventListener('load', () =>{
    const form = document.querySelector('form');
    const newTaskElement = document.querySelector('#addNewTask');
    const tasksElementList = document.querySelector('.tasks')

    form.addEventListener( 'submit', (e)=>{
        e.preventDefault();

        
        const newTaskValue = newTaskElement.value;

        if(newTaskValue == ''){
            alert('Input a TODO');
            return;
        }
        

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        tasksElementList.appendChild(taskElement);

        const contentElement = document.createElement('div');
        contentElement.classList.add('content');
        taskElement.appendChild(contentElement);

        const inputTextElement = document.createElement('input');
        inputTextElement.classList.add('text');
        inputTextElement.type = 'text';
        inputTextElement.value = newTaskValue;
        inputTextElement.setAttribute('readonly','readonly');
        contentElement.appendChild(inputTextElement);

        const actionsBtnElement = document.createElement('div');
        actionsBtnElement.classList.add('actionBtns');
        taskElement.appendChild(actionsBtnElement);

        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit');
        editBtnElement.innerText = 'edit';
        actionsBtnElement.appendChild(editBtnElement);

        const deleteBtnElement = document.createElement('button');
        deleteBtnElement.classList.add('delete');
        deleteBtnElement.innerText = 'delete';
        actionsBtnElement.appendChild(deleteBtnElement);
         
        const expandBtnElement = document.createElement('button');
        expandBtnElement.classList.add('expand');
        expandBtnElement.innerText = '\u21B4' ;
        actionsBtnElement.appendChild(expandBtnElement);

        newTaskElement.value = '';

        editBtnElement.addEventListener('click', ()=>{
            if (editBtnElement.innerText.toLowerCase () == 'edit'){
                editBtnElement.innerText = 'save';
                inputTextElement.removeAttribute('readonly')
            } else {
                editBtnElement.innerText = 'edit';
                inputTextElement.setAttribute('readonly','readonly')
            }
        })

        deleteBtnElement.addEventListener('click', ()=>{
            taskElement.remove();
        })

        expandBtnElement.addEventListener('click', ()=>{
            if (expandBtnElement.innerText.toLowerCase() == '\u21B4' ) {
                expandBtnElement.innerText = '\u2B0F';
                contentElement.style.paddingBottom = '50px';
            } else{
                expandBtnElement.innerText = '\u21B4';
                contentElement.style.paddingBottom = '0';
            }
        })

    }

    )
})