const todos = [];

const renderTodos = function(todos) {
  document.querySelector('#todos').innerHTML = '';

  todos.forEach(function(todo) {
    const newTodo = document.createElement('p');
    newTodo.textContent = todo.description;
    document.querySelector('#todos').appendChild(newTodo);
  });
};

renderTodos(todos);

document.querySelector('#add-todo').addEventListener('submit', function(e) {
  e.preventDefault();

  todos.push({
    description: e.target.elements.text.value,
    completed: false
  });

  renderTodos(todos);
  e.target.elements.text.value = '';
});
