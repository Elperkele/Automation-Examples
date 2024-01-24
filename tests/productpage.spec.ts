import test from './utilities/base';
import config from '../playwright.config'

test(`Verify Product page ${config.name} version`, async ({ productpage, page }) => {
    await test.step(`Navigate to Product page ${config.name} version`, async () => {
        await productpage.navigateToProduct();
    });
    await test.step(`Check Product Image visibility ${config.name} version`, async () => {
        await productpage.verifyProductImage();
    });
    await test.step(`Check Product Title visibility ${config.name} version`, async () => {
        await productpage.verifyProductTitle();
    });
});