import {BrowserContext, Locator, TestInfo, Page, expect } from '@playwright/test';
import config from '../playwright.config'

export class Login {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly Login: Locator;
    readonly Password: Locator;
    readonly LoginButton: Locator;
    readonly ErrorPopup: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.Login = page.getByPlaceholder('Your E-mail *');
        this.Password = page.getByPlaceholder('Your Password *');
        this.LoginButton = page.locator(`.btnSubmit`);
        this.ErrorPopup = page.locator(`//html/body/app-root/div/app-login/div/div/div/form/div[2]`);
    }

    async navigateToLogin(): Promise<void> {
        await this.page.goto(`${config.baseURL}auth/login`);
        await this.page.waitForTimeout(3000);
    }
    async inputCredentialsWrongFormat(): Promise<void> {
        await this.Login.fill('test');
        await this.Password.fill('test2');
    }
    async clickLogin(): Promise<void> {
        await this.LoginButton.click();
    }
    async checkErrorPopup(): Promise <void> {
        await expect(this.ErrorPopup).toBeVisible();
    }
}