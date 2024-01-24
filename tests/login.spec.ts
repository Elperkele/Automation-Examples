import test from './utilities/base';
import config from '../playwright.config'

test(`Verify Login page ${config.name} version`, async ({ login, page }) => {
    await test.step(`Navigate to Login ${config.name} version`, async () => {
        await login.navigateToLogin();
    });
    await test.step (`Input credentials ${config.name} version`, async () => {
        await login.inputCredentialsWrongFormat();
    });
    await test.step (`Click login button ${config.name} version`, async () => {
        await login.clickLogin();
    });
    await test.step (`Check login format error message ${config.name} version`, async () => {
        await login.checkErrorPopup();
    });
});