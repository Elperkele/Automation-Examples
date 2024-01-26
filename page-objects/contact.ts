import {BrowserContext, Locator, TestInfo, Page, expect } from '@playwright/test';
import config from '../playwright.config'

export class Contact {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly Name: Locator;
    readonly Lastname: Locator;
    readonly Email: Locator;
    readonly Dropdown: Locator;
    readonly Message: Locator;
    readonly Attachment: Locator;
    readonly Send: Locator;
    readonly Option5: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.Name = page.getByPlaceholder('Your first name *');
        this.Lastname = page.getByPlaceholder('Your last name *');
        this.Email = page.getByPlaceholder('Your email *');
        this.Dropdown = page.locator('//*[@id="subject"]');
        this.Message = page.locator('//*[@id="message"]');
        this.Attachment = page.locator('//*[@id="attachment"]');
        this.Send = page.locator(`.btnSubmit`);
    }

    async navigateToContact(): Promise<void> {
            await this.page.goto(`${config.baseURL}contact`);
    }
    async fillFormName(): Promise<void> {
            await this.Name.fill('Student');
    }
    async fillFormLastname(): Promise<void> {
            await this.Lastname.fill('Vistula');
    }
    async fillFormEmail(): Promise<void> {
            await this.Email.fill('student@uczelnia.pl');
    }
    async openDroplist(): Promise<void> {
            await this.Dropdown.selectOption({ label: 'payments'});
    }
    async fillMessage(): Promise<void> {
            await this.Email.fill('This is a test message. Please disregard');
    }
    async addAttachment(): Promise<void> {
            await this.Attachment.uploadFile('../tests/utilities.test.txt');
    }
    async clickSend(): Promise<void> {
            await this.Send.click();
    }
}