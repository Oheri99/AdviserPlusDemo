import { expect, type Locator, type Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly todoLink: Locator;
  readonly todoTypeSelect: Locator;
  readonly newTodoInput: Locator;
  readonly addTodoButton: Locator;
  readonly todoList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoLink = page.locator('#todo-link');
    this.todoTypeSelect = page.locator('#todo-type-select');
    this.newTodoInput = page.locator('#new-todo-input');
    this.addTodoButton = page.locator('#add-todo-button');
    this.todoList = page.locator('#todo-list');
  }

  async gotoHome() {
    await this.page.goto('/');
  }

  async openTodoPage() {
    await this.todoLink.click();
  }

  async addTodo(taskText: string, type: string = 'Task') {
    await this.todoTypeSelect.selectOption(type);
    await this.newTodoInput.fill(taskText);
    await this.addTodoButton.click();
  }

  async expectTodoVisible(taskText: string) {
    await this.todoList.locator('li', { hasText: taskText }).waitFor({ state: 'visible' });
  }

  async expectTodoContains(taskText: string, type: string) {
    const item = this.todoList.locator('li', { hasText: taskText });
    await item.waitFor({ state: 'visible' });
    await expect(item).toContainText(type);
  }
}
