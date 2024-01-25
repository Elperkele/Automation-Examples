import test from './utilities/base';
import config from '../playwright.config'

test(`Verify Contact us page ${config.name} version`, async ({ contact, page }) => {
    await test.step(`Navigate to Contact ${config.name} version`, async () => {
        await contact.navigateToContact();
    });
});