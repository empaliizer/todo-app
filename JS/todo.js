function todo () {
    
    //Läster in dina varibaler från html dokumentet
    const todoAddButton = document.querySelector('.todo-add');
    const todoForm = document.querySelector('.todo-form');
    const todoList = document.querySelector('.todo-list');
    const todoInput = document.querySelector('.todo-input');
    const todoPrintButton = document.querySelector('.todo-print')


    // Creatve Event Listners - The interactions with the elements
    todoAddButton.addEventListener('click', addToList);

    todoForm.addEventListener('submit', e => {
        e.preventDefault(); // Prevents original event function
        addToList();
    });

    todoPrintButton.addEventListener('click', printList);

    // Add item to list
    function addToList() {   

        // Get value from input element
        const todoValue = todoInput.value;

        // Create li item 
        const createTodoItem = document.createElement('li');

        //Add class to created element
        createTodoItem.classList.add('todo-item'); 

        //Add value to new li element
        createTodoItem.innerText = todoValue;

        //Add created element to list
        todoList.appendChild(createTodoItem);

        //Empty input value
        todoInput.value = null;

        //Add event listner to new item
        //Click - Complete Item
        createTodoItem.addEventListener('click', e => {

            //Toggle Completed Class on Item
            e.target.classList.toggle('todo-item--completed')

        });

        //Right click
        createTodoItem.addEventListener('contextmenu', e => {
            
            //Prevent original right click target
            e.preventDefault();

            //Define cotant for the right click target (element)
            const removeItem = e.target;

            //Start function to remove and send the target to that function
            removeFromList(removeItem);
        });
    }

    //Remove item from list
    function removeFromList(item) {

        //Retrive target element from function and remove it from the DOM
        item.remove(); 
    }

    //Print List
    function printList(){

        window.print();

    }
}

todo();