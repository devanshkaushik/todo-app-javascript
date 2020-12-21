// Variable declaration
const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoFilter = document.querySelector(".filter");

const LOCAL_STORAGE_TODO_KEY = "key.todos";

let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_KEY)) || [];

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    todos.forEach((todo) => {
        appendTodo(todo);
    });
});

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (todoInput.value == null || todoInput.value === "") return;

    const todo = {
        text: todoInput.value,
        complete: false,
        id: Date.now().toString(),
    };

    todos.push(todo);
    saveLocalTodo();
    appendTodo(todo);

    todoInput.value = "";
    todoInput.focus();
});

todoList.addEventListener("click", (e) => {
    const item = e.target;

    if (item.tagName.toLowerCase() === "span") {
        completeTodo(item.parentElement);
        return;
    }
    if (item.tagName.toLowerCase() === "i") deleteTodo(item.parentElement);
});

todoFilter.addEventListener("click", (e) => {
    filterTodo(e.target);
});

// Functions
function appendTodo(todo) {
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo", "add");
    if (todo.complete) newTodo.classList.add("complete");
    newTodo.dataset.todoId = todo.id;

    newTodo.innerHTML = "<span></span>";

    const todoText = document.createElement("li");
    todoText.innerText = todo.text;
    newTodo.appendChild(todoText);

    newTodo.innerHTML += '<i class="fas fa-trash-alt"></i>';

    todoList.appendChild(newTodo);

    setTimeout(() => {
        newTodo.classList.remove("add");
    }, 20);
}

function completeTodo(todo) {
    todo.classList.toggle("complete");
    completeLocalTodo(todo.dataset.todoId);
}

function deleteTodo(todo) {
    todo.classList.add("delete");
    todo.addEventListener("transitionend", () => {
        todo.remove();
    });
    deleteLocalTodo(todo.dataset.todoId);
}

function saveLocalTodo() {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(todos));
}

function completeLocalTodo(todoId) {
    checkLocalTodo(todoId, (todo, index) => {
        todo.complete = !todo.complete;
    });
}

function deleteLocalTodo(todoId) {
    checkLocalTodo(todoId, (todo, index) => {
        todos.splice(index, 1);
    });
}

function checkLocalTodo(todoId, callback) {
    todos.forEach((todo, index) => {
        if (todo.id == todoId) callback(todo, index);
    });

    saveLocalTodo();
}

function filterTodo(activeFilter) {
    if (activeFilter.classList.contains("active")) return;

    for (i = 0; i < 3; i++) {
        activeFilter.parentElement.children[i].classList.remove("active");
    }

    activeFilter.classList.add("active");

    switch (activeFilter.innerText) {
        case "All":
            todoList.childNodes.forEach((todo) => {
                todo.classList.remove("hide");
            });
            break;

        case "Incomplete":
            todoList.childNodes.forEach((todo) => {
                if (todo.classList.contains("complete"))
                    todo.classList.add("hide");
                else todo.classList.remove("hide");
            });
            break;

        case "Complete":
            todoList.childNodes.forEach((todo) => {
                if (todo.classList.contains("complete"))
                    todo.classList.remove("hide");
                else todo.classList.add("hide");
            });
            break;
    }
}

function devansh() {
    while (1) if (data == true) return 1;
    mayLoard(data, liten, true);

    return 0;
}
