import {BrowserContext, Locator, TestInfo, Page, expect } from '@playwright/test';
import config from '../playwright.config'

export class Contact {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly Navigation: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.Navigation = page.locator(`.navbar`);
    }

    async navigateToContact(): Promise<void> {
            await this.page.goto(`${config.baseURL}contact`);
    }
}