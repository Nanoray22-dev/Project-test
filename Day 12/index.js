document.addEventListener("DOMContentLoaded", function () {
    const addTodoBtn = document.getElementById("addTodoBtn");
    const newTodoInput = document.getElementById("newTodo");
    const todoList = document.querySelector(".todo-list");

    addTodoBtn.addEventListener("click", addTodo);

    function addTodo() {
      const todoText = newTodoInput.value.trim();
      if (todoText !== "") {
        const todoItem = document.createElement("li");
        todoItem.innerHTML = `
          <p>${todoText}</p>`;
        todoList.appendChild(todoItem);
        newTodoInput.value = "";
      }
    }
  });