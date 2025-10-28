const path = require('path');

describe('Application Test', () => {
    it('should open the app, capture a screenshot, and close the app', async () => {
        // The app is opened automatically when the session starts due to the 'app' capability

        // Click on the 'Add ad units' button
        await $('~Add ad units').click();

        // Capture a screenshot
        const screenshotPath = path.join(process.cwd(), 'app_screenshot.png');
        await browser.saveScreenshot(screenshotPath);
        console.log(`Screenshot saved to: ${screenshotPath}`);

        // The app is closed automatically when the session ends
    });
});