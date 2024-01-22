import { TestInfo, test as baseTest } from '@playwright/test';
import { Homepage } from '../../page-objects/homepage';
import { Login } from '../../page-objects/login';
import { Product } from '../../page-objects/productpage';
import { Cart } from '../../page-objects/cart';
import { Basepage } from './actions';

const test = baseTest.extend<{
    homepage: Homepage;
    basepage: Basepage;
    login: Login;
    productpage: Product;
    cart: Cart;
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
    cart: async ({ page, context}, use) => {
        await use(new Cart(page, context));
    }
})

export default test;
