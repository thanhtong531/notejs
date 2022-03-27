const todoList = document.querySelector(".todo-list");
window.addEventListener("load", function () {
  let todos =
    localStorage.length > 0
      ? JSON.parse(localStorage.getItem("todo_list"))
      : [];
  // let todos = [];
  function createTodo(title) {
    const template = `
    <div class="todo-item">
    <h3 class="todo-title">${title}</h3>
    <i class="fa fa-trash todo-remove"></i>
    </div>
    `;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodo(item));
  }

  const form = document.querySelector(".todo-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputVal = this.elements["todo"].value;
    createTodo(inputVal);
    todos.push(inputVal);
    localStorage && localStorage.setItem("todo_list", JSON.stringify(todos));
    this.elements["todo"].value = "";
  });
  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      // Remove todo in DOM
      const todo = e.target.parentNode;
      todo.parentNode.removeChild(todo);
      // Remove todo in localstorage
      const todoText = e.target.previousElementSibling.textContent;
      const newTodo = todos.filter((item) => item !== todoText);
      localStorage.setItem("todo_list", JSON.stringify(newTodo));
    }
  });
});
