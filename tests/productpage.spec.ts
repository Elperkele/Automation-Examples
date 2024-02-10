import test from './utilities/factory';
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
    await test.step(`Check Item counter visibility ${config.name} version`, async () => {
        await productpage.verifyItemCounter();
    });
    await test.step(`Check Item cart icon visibility ${config.name} version`, async () => {
        await productpage.checkCartInvisible();
    });
    await test.step(`Click on add item button ${config.name} version`, async () => {
        await productpage.addItem();
    });
    await test.step(`Check buy button visibility ${config.name} version`, async () => {
        await productpage.verifyBuyButton();
    });
    await test.step(`Click but button ${config.name} version`, async () => {
            await productpage.buyButtonClick();
    });
    await test.step(`Check Item cart icon visibility ${config.name} version`, async () => {
        await productpage.checkCartVisible();
    });
    await test.step(`Check related section visibility ${config.name} version`, async () => {
        await productpage.verifyRelatedSection();
    });
});