import {BrowserContext, Locator, TestInfo, Page, expect } from '@playwright/test';
import config from '../playwright.config'

export class Login {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly Login: Locator;
    readonly Password: Locator;
    readonly LoginButton: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.Login = page.getByPlaceholder('Your E-mail *');
        this.Password = page.getByPlaceholder('Your Password *');
        this.LoginButton = page.locator(`.btnSubmit`);
    }

    async navigateToLogin(): Promise<void> {
        await this.page.goto(`${config.baseURL}auth/login`);
    }
    async inputCredentials(): Promise<void> {
        await this.Login.fill('test');
        await this.Password.fill('test2');
    }
    async clickLogin(): Promise<void> {
        await this.LoginButton.click();
    }
}