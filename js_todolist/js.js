const add_todo_input = document.getElementById("add_todo_input");
const list_todo = document.getElementById("list_todo");

// onclick button
async function add_todo() {

    // init list item
    let text = document.createTextNode(add_todo_input.value);
    let li = document.createElement("li");
    li.appendChild(text);



    if (add_todo_input.value == "") {

        // shake the input box
        add_todo_input.classList.add('shakked');
        await new Promise(resolve => setTimeout(resolve, 150));
        add_todo_input.classList.remove('shakked');

        // add_todo_input.style.animation = 'shake 0.5s';

    } else {

        // append the list item and clear input box
        list_todo.appendChild(li);
        add_todo_input.value = "";

        // scroll to bottom
        window.scrollTo(0, li.scrollHeight)
    }

    // reset shake animation
    //add_todo_input.style.animation = 'none';
    //add_todo_input.style.animation = null;


}

addEventListener('DOMContentLoaded', (event) => {

    add_todo_input.focus();


});

