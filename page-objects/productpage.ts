import {BrowserContext, Locator, TestInfo, Page, expect } from '@playwright/test';
import config from '../playwright.config'

export class Product {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly Navigation: Locator;
    readonly ProductImage: Locator;
    readonly ProductTitle: Locator;
    readonly AddItemButton: Locator;
    readonly BuyButton: Locator;
    readonly RelatedSection: Locator;
    readonly ItemCounter: Locator;
    readonly CartIcon: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.ProductImage = page.locator(`//html/body/app-root/div/app-detail/div[1]/div[1]/figure/div/img`);
        this.ProductTitle = page.locator('//html/body/app-root/div/app-detail/div[1]/div[2]/h1');
        this.AddItemButton = page.locator(`//*[@id="btn-increase-quantity"]`);
        this.BuyButton = page.locator("[id='btn-add-to-cart']");
        this.RelatedSection = page.locator('//html/body/app-root/div/app-detail/div[2]');
        this.ItemCounter = page.locator(`//html/body/app-root/div/app-detail/div[1]/div[2]/div[1]`);
        this.CartIcon = page.locator(`//*[@id="navbarSupportedContent"]/ul/li[5]/a/i`);
    }

    async navigateToProduct(): Promise<void> {
        await this.page.goto(`${config.baseURL}product/01HPA2TCRQZMFHHBHJ5XH212KB`);
    }
    async verifyProductImage(): Promise<void> {
        await expect.soft(this.ProductImage).toBeVisible();
    }
    async verifyProductTitle(): Promise<void> {
        await expect(this.ProductTitle).toBeVisible();
    }
    async verifyItemCounter(): Promise<void> {
        await expect(this.ItemCounter).toBeVisible();
    }
    async verifyBuyButton(): Promise<void> {
        await expect(this.BuyButton).toBeVisible();
    }
    async buyButtonClick(): Promise<void> {
        await this.BuyButton.click();
    }
    async verifyRelatedSection(): Promise<void> {
        await expect(this.RelatedSection).toBeVisible();
    }
    async checkCartInvisible(): Promise<void> {
        await expect(this.CartIcon).toBeHidden();
    }
    async checkCartVisible(): Promise<void> {
        await expect(this.CartIcon).toBeVisible();
    }
    async addItem(): Promise<void> {
        await this.AddItemButton.click();
    }
}
