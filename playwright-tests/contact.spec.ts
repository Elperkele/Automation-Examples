import test from './utilities/factory';
import config from '../playwright.config'

test(`Verify Contact us page ${config.name} version`, async ({ contact, page }) => {
    await test.step(`Navigate to Contact ${config.name} version`, async () => {
        await contact.navigateToContact();
    });
    await test.step (`Input first name`, async () => {
        await contact.fillFormName();
    });
    await test.step (`Input last name`, async () => {
        await contact.fillFormLastname();
    });
    await test.step (`Input first e-mail address`, async () => {
        await contact.fillFormEmail();
    });
    await test.step (`Open dropdown list and select payments`, async () => {
        await contact.openDroplist();
    });
    await test.step (`Input message`, async () => {
        await contact.fillMessage();
    });
    await test.step (`Add attachment`, async () => {
        await contact.addAttachment();
    });
    await test.step (`Submit the form`, async () => {
        await contact.clickSend();
    });
});