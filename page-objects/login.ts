import {BrowserContext, Locator, TestInfo, Page, expect } from '@playwright/test';
import config from '../playwright.config'

const UserLogin: string = 'customer@practicesoftwaretesting.com';
const UserPassword: string = 'welcome01';
const WrongFormatLogin: string = 'Vistula';
const WrongFormatPassword: string = 'Vistula1';
const IncorrectLogin: string = 'test@vistula.pl';
const IncorrectPassword: string = 'student';

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
        this.ErrorEmptyName = page.getByText(` E-mail is required. `);
        this.ErrorEmptyPassword = page.getByText(` Password is required. `);
        this.ErrorWrongFormat = page.getByText(` E-mail format is invalid. `);
    }

    async navigateToLogin(): Promise<void> {
        await this.page.goto(`${config.baseURL}auth/login`);
        await this.page.waitForTimeout(3000);
    }
    async inputCredentialsWrongFormat(): Promise<void> {
        await this.Login.fill(WrongFormatLogin);
        await this.Password.fill(WrongFormatPassword);
    }
    async inputCredentialsInvalid(): Promise<void> {
        await this.Login.fill(IncorrectLogin);
        await this.Password.fill(IncorrectPassword);
    }
    async inputCredentialsValid(): Promise<void> {
        await this.Login.fill(UserLogin);
        await this.Password.fill(UserPassword);
    }
    async clickLogin(): Promise<void> {
        await this.LoginButton.click();
    }
    async checkErrorPopupEmpty(): Promise <void> {
        await expect(this.ErrorEmptyName).toBeVisible();
        await expect(this.ErrorEmptyPassword).toBeVisible();
    }
    async checkErrorPopupFormat(): Promise <void> {
        await expect(this.ErrorWrongFormat).toBeVisible();
    }
    async checkPostLoginURL(): Promise <void> {
        await expect(this.page).toHaveURL(`${config.baseURL}account`);
    }
}