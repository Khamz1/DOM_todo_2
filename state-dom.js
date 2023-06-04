const input = document.getElementById('input')
const addButton = document.getElementById('addButton')
const list = document.getElementById('ulList')

// addButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (input.value == '') { return }

//     const li = document.createElement('li')


//     removeButton.addEventListener('click', (e) => {
//         e.target.parentElement.remove()
//     })

//     li.textContent = input.value
//     li.append(removeButton)
//     list.append(li);
//     input.value = ''
// })


    const myArr = [
        { task: 'First Task', done: true },
        { task: 'Second Task', done: true },
        { task: 'Third Task', done: true },
        { task: 'Fourth Task', done: true },
        { task: 'Fifth Task', done: true }
    ]

    function render(array) {
        list.innerHTML = ''
        
        for (let i = 0; i < array.length; i++) {
            const newLi = document.createElement('li');
            newLi.textContent = array[i].task
            
            
            const checkBox = document.createElement('input')
            checkBox.type = 'checkbox'
            checkBox.addEventListener('click', (e)=>{
                e.target.parentElement
                if (checkBox.checked){checkTodo(i) }
                
                
            })
            newLi.prepend(checkBox)

            list.append(newLi)
        
            const removeButton = document.createElement('button')
            removeButton.textContent = 'X'
            removeButton.addEventListener('click', (e) => {
                e.target.parentElement.remove()
            })
            
            
            newLi.appendChild(removeButton,)
        }
    }

    
    function checkTodo(index){
        myArr[index].done = !myArr[index].done
                
 }



    function remove(index) {
        for ( i = 0; i < myArr.length; i++) {
            if (i === index) {
                myArr.splice(i, 1);
                render(myArr)
                break

            }

        }


    }

    function addTodo(text) {
        for (let i = 0; i < 1; i++) {
            myArr.push({ task: text, done: true })
        }
        render(myArr)

    }

    addButton.addEventListener('click', (e) => {
        if (input.value == '') { return }
        e.preventDefault()
        addTodo(input.value)
        input.value = ''
    });


    render(myArr)