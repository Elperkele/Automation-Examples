import { TestInfo, test as baseTest } from '@playwright/test';
import { Homepage } from '../../page-objects/homepage';
import { Login } from '../../page-objects/login';
import { Product } from '../../page-objects/productpage';
import { Contact } from '../../page-objects/contact';

const test = baseTest.extend<{
    homepage: Homepage;
    login: Login;
    productpage: Product;
    contact: Contact;
}>({
    homepage: async ({ page, context}, use) => {
        await use(new Homepage(page, context));
    },
    login: async ({ page, context}, use) => {
        await use(new Login(page, context));
    },
    productpage: async ({ page, context}, use) => {
        await use(new Product(page, context));
    },
    contact: async ({ page, context}, use) => {
        await use(new Contact(page, context));
    }
})

export default test;
