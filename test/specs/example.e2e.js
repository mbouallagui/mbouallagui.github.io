describe('BrowserStack website', () => {
    it('should have the correct title', async () => {
        await browser.url('https://www.browserstack.com/');
        await expect(browser).toHaveTitle('BrowserStack | #1 Test Infrastructure for Instant, On-Demand Testing');
    });
});