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

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.ProductImage = page.locator(`//html/body/app-root/div/app-detail/div[1]/div[1]/figure/div/img`);
        this.ProductTitle = page.locator('//html/body/app-root/div/app-detail/div[1]/div[2]/h1');
        this.AddItemButton = page.locator(`.btn btn-secondary`);
        this.BuyButton = page.locator(`.btn-success btn`);
        this.RelatedSection = page.locator('//html/body/app-root/div/app-detail/div[2]');
        this.ItemCounter = page.locator(`.input-group quantity`);
    }

    async navigateToProduct(): Promise<void> {
        await this.page.goto(`${config.baseURL}product/01HMYGXX8NT1T0B6QHNJ6R3342`);
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
        await this.BuyButton.click();
    }
    async verifyRelatedSection(): Promise<void> {
        await expect(this.RelatedSection).toBeVisible();
    }
}
