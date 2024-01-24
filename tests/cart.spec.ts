import test from './utilities/base';
import config from '../playwright.config'

test(`Verify Cart page ${config.name} version`, async ({ cart, page }) => {
    await test.step(`Navigate to Login ${config.name} version`, async () => {
        await cart.navigateToCart();
    });
});