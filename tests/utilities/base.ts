import type { Page } from '@playwright/test';
import { BrowserContext } from '@playwright/test';

export class Basepage {
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }
}