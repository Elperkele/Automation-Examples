import { TestInfo, test as baseTest } from '@playwright/test';
import { Homepage } from '../../page-objects/homepage';
import { Basepage } from './actions';

const test = baseTest.extend<{
    homepage: Homepage;
    basepage: Basepage;
}>({
    homepage: async ({ page, context}, use) => {
        await use(new Homepage(page, context));
    },
    basepage: async ({ page, context}, use) => {
        await use(new Basepage(page, context));
    }
})

export default test;
