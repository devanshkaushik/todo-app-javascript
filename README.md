# Todo-App

This is a basic javascript project which includes a Todo App with all the basic functionalities such as:
- Adding Todos
- Deleting Todos
- Marking Todos as Complete
- Storing Todos to the local storage

## Showcase

![Todo App](Demonstration.gif)

## Working

This program makes use of many Event Listeners and perform actions based on the operation.

While creating the todo, the app creates a todo object with different properties.

``` javascript

const todo = {
    text: todoText, // Text from the input
    complete: false, // Default completed value 
    id: Date.now().toString(), // Unique ID
};

```

The unique id is used to mark specific todos as completed and incomplete. It is also used to retrieve the todo from the local storage and store it there.

The complete property of the todo object is used to render it as Completed or Filter it using the filterTodo function.
