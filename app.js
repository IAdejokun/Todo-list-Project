window.addEventListener('load', () =>{
    const form = document.querySelector('form');
    const newTaskElement = document.querySelector('#addNewTask');
    const tasksElementList = document.querySelector('.tasks')
    const bodyStyle = document.querySelector('body');

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
        expandBtnElement.innerText = 'more' ;
        actionsBtnElement.appendChild(expandBtnElement);

        newTaskElement.value = '';

       const readMoreElement = document.createElement('div');
       readMoreElement.classList.add('readMore');
       taskElement.appendChild(readMoreElement);

       const readContentElement = document.createElement('div');
       readContentElement.classList.add('readContent');
       readMoreElement.appendChild(readContentElement);
       
       const readMoreContentElement = document.createElement('textarea');
       readMoreContentElement.name = 'readMoreContent';
       readMoreContentElement.classList.add('readMoreContent');
       readMoreContentElement.setAttribute('readonly', 'readonly');
       readMoreContentElement.rows = '10';
       readMoreContentElement.cols = '30';
       readMoreContentElement.value = newTaskValue;
       readContentElement.appendChild(readMoreContentElement);

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close');
        closeBtn.innerText = 'x';
        readContentElement.appendChild(closeBtn);

        readMoreElement.style.display = 'none';

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
          readMoreElement.style.display = 'block';
        })

        closeBtn.addEventListener( 'click', ()=>{
            readMoreElement.style.display = 'none'
            
        }

        )

    }

    )
})