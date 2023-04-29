const todoinput = document.getElementById('todo-input'); 
const addbtn = document.getElementById('addbtn');
const todoList  = document.getElementById('todoList'); 

addbtn.addEventListener('click',addTodo); 


function addTodo(){
    const todoText = todoinput.value; 
    const listItem  = document.createElement('li'); 
    listItem.innerHTML = todoText; 


    todoList.appendChild(listItem ); 
    todoinput.value =''; 
}