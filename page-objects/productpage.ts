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

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.ProductImage = page.locator(`.figure-img img-fluid`);
        this.ProductTitle = page.locator('/html/body/app-root/div/app-detail/div[1]/div[2]/h1');
        this.AddItemButton = page.locator(`.btn btn-secondary`);
        this.BuyButton = page.locator(`.btn-success btn`);
        this.RelatedSection = page.locator('/html/body/app-root/div/app-detail/div[2]');
    }

    async navigateToProduct(): Promise<void> {
            await this.page.goto(`${config.baseURL}product/01HMRD7PNHNB5B6BKTHHVYKNGT`);
    }
}
