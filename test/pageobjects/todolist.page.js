const Page = require("./page");

class TodolistPage extends Page {
  get todoInput() {
    return $("//input[@id='TodoTextInput']");
  }

  get addButton() {
    return $("//button[@id='AddTodoButton']");
  }

  get clearButton() {
    return $("//button[@id='ClearTodoButton']");
  }

  get todoItemText() {
    return $("//label[@id='TodoItemText']");
  }

  get latestTodoItem() {
    return $$("//div[@id='TodoListItem']")[0];
  }

  selectTodo(todoText) {
    return $(`//label[@id='TodoItemText' and text()='${todoText}']`);
  }

  selectTodoCheckBox(todoText) {
    return $(`//label[@id='TodoItemText' and text()='${todoText}']/preceding-sibling::input`)
  }

  open() {
    return super.open('react-todo-app');
  }
}

module.exports = new TodolistPage();
