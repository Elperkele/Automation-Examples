import test from './utilities/base';

test('@a Verify Homepage', async ({ homepage, page }) => {
    await test.step(`Navigate to Homepage`, async () => {
        await homepage.navigateToHomepage();
    });
    await test.step(`Check Navigation Visibility`, async () => {
        await homepage.verifyNavigationVisibility();
    });
    await test.step(`Login to Book Store application`, async () => {
        await homepage.verifyHeroVisibility();
    });
    await test.step(`Verify User is logged in and navigated to Profile page`, async () => {
        await homepage.verifyFiltersVisibility();
    });
});