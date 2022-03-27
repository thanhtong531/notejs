window.addEventListener("load", function () {
  const todoList = document.querySelector(".todo-list");
  const todoForm = document.querySelector(".todo-form");
  let todos =
    localStorage.length > 0
      ? JSON.parse(localStorage.getItem("todo_list"))
      : [];
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
  todoForm.addEventListener("submit", handleRenderTodo);

  function handleRenderTodo(e) {
    e.preventDefault();
    const value = this.elements["todo"].value;
    createTodo(value);
    todos.push(value);
    localStorage && localStorage.setItem("todo_list", JSON.stringify(todos));
    this.elements["todo"].value = "";
  }
  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      const todoItem = e.target.parentNode;
      todoItem.parentNode.removeChild(todoItem);
      const todoText = e.target.previousElementSibling.textContent;
      const newTodo = todos.filter((item) => item !== todoText);
      localStorage.setItem("todo_list", JSON.stringify(newTodo));
    }
  });
});
