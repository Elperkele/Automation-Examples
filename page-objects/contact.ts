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
        this.Option5 = page.locator('//*[@id="subject"]/option[5]');
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
            await this.Dropdown.selectOption('payments');
    }
    async fillMessage(): Promise<void> {
            await this.Message.fill('This is a test message. Please disregard - more characters to meet 50 char cap');
    }
    async addAttachment(): Promise<void> {
            //await this.Attachment.click();
            await this.Attachment.setInputFiles('tests/utilities/test.txt');
    }
    async clickSend(): Promise<void> {
            await this.page.screenshot({ path: 'test-results/filledContactForm.png', fullPage: true });
            await this.Send.click();
    }
}