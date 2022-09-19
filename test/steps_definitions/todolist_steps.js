const { When, Then, Given } = require("@wdio/cucumber-framework");
const TodoListPage = require("../pageobjects/todolist.page");

Given(/^I am on the todolist page$/, async () => {
  await TodoListPage.open();
});

When(/^I add "(.*)" in the todo list$/, async (todoText) => {
  await TodoListPage.todoInput.waitForDisplayed();
  await TodoListPage.todoInput.setValue(todoText);
  await TodoListPage.addButton.waitForDisplayed();
  await TodoListPage.addButton.click();
});

Then(/^I verify "(.*)" is showing in todo list$/, async (todoText) => {
  await TodoListPage.latestTodoItem.waitForDisplayed();
  expect(await TodoListPage.latestTodoItem.getText()).toEqual(todoText);
});

When(/^I check "(.*)" from the todo list$/, async (todoText) => {
  await TodoListPage.selectTodoCheckBox(todoText).click();
});

When(/^I click on delete todo button$/, async () => {
  await TodoListPage.clearButton.click();
});

Then(/^I verify "(.*)" is deleted$/, async (todoText) => {
  await TodoListPage.selectTodo(todoText).waitForDisplayed({ reverse: true });
});
