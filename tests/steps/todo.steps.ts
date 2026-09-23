import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { TodoPage } from '../pages/TodoPage';

const { Given, When, Then } = createBdd();

Given('I am on the home page', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.gotoHome();
});

When('I navigate to the todo page', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.openTodoPage();
});

When('I add a todo item {string} with type {string}', async ({ page }, taskText: string, todoType: string) => {
  const todoPage = new TodoPage(page);
  await todoPage.addTodo(taskText, todoType);
});

Then('I should see {string} in the todo list', async ({ page }, taskText: string) => {
  const todoPage = new TodoPage(page);
  await todoPage.expectTodoVisible(taskText);
});

Then('the todo item {string} should include type {string}', async ({ page }, taskText: string, todoType: string) => {
  const todoPage = new TodoPage(page);
  await todoPage.expectTodoContains(taskText, todoType);
});
