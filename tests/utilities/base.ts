import { TestInfo, test as baseTest } from '@playwright/test';
import { Homepage } from '../../page-objects/homepage';
import { Login } from '../../page-objects/login';
import { Product } from '../../page-objects/productpage';
import { Contact } from '../../page-objects/contact';
import { Basepage } from './actions';

const test = baseTest.extend<{
    homepage: Homepage;
    basepage: Basepage;
    login: Login;
    productpage: Product;
    contact: Contact;
}>({
    homepage: async ({ page, context}, use) => {
        await use(new Homepage(page, context));
    },
    basepage: async ({ page, context}, use) => {
        await use(new Basepage(page, context));
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
