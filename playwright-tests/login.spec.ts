import test from './utilities/factory';
import config from '../playwright.config'

test(`Verify Login page ${config.name} version`, async ({ login, page }) => {
    await test.step(`Navigate to Login ${config.name} version`, async () => {
        await login.navigateToLogin();
    });
    await test.step (`Click login button when credentials are empty ${config.name} version`, async () => {
        await login.clickLogin();
    });
    await test.step (`Check error popups for empty credentials ${config.name} version`, async () => {
        await login.checkErrorPopupEmpty();
    });
    await test.step (`Input credentials with incorrect email format${config.name} version`, async () => {
        await login.inputCredentialsWrongFormat();
    });
    await test.step (`Click login button ${config.name} version`, async () => {
        await login.clickLogin();
    });
    await test.step (`Check login format error message ${config.name} version`, async () => {
        await login.checkErrorPopupFormat();
    });
    await test.step(`Input wrong credentials in correct format ${config.name} version`, async () => {
        await login.inputCredentialsInvalid();
    });
    await test.step (`Click login button ${config.name} version`, async () => {
        await login.clickLogin();
    });
    await test.step(`Input correct email or password popup ${config.name} version`, async () => {
        await login.inputCredentialsValid();
    });
    await test.step (`Click login button ${config.name} version`, async () => {
        await login.clickLogin();
    });
    await test.step (`Verify if the user is logged in and redirected to the account page ${config.name} version`, async () => {
        await login.checkPostLoginURL();
    });
});