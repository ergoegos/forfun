const add_todo_input = document.getElementById("add_todo_input");
const add_todo_button = document.getElementById("add_todo_button");

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
        await new Promise(resolve => setTimeout(resolve, 150)); //timeout
        add_todo_input.classList.remove('shakked');


    } else {

        // append the list item and clear input box
        list_todo.appendChild(li);
        add_todo_input.value = "";

        // scroll to button
        add_todo_button.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

}


function didit() {
    let list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}

addEventListener('DOMContentLoaded', function (event) {

    didit();
    add_todo_input.focus();

}, false);

