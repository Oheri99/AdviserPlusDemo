import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { chromium, type Browser, type Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async openBrowser() {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
