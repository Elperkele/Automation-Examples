import test from './utilities/base';
import config from '../playwright.config'

test(`Verify Login page ${config.name} version`, async ({ login, page }) => {
    await test.step(`Navigate to Login ${config.name} version`, async () => {
        await login.navigateToLogin();
    });
});