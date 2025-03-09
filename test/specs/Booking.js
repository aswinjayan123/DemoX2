/*import AllureReporter from '@wdio/allure-reporter';

describe("Handling Multiple Windows - Switching Between Parent & Child", () => {
    
    it("should switch between parent and child tabs dynamically", async () => {
        AllureReporter.addFeature("Booking Flow");
        AllureReporter.addSeverity("critical");

        await browser.url("https://www.booking.com/");
        await browser.maximizeWindow();
        await browser.pause(5000);

        const listItems = await $$('(//ul[@aria-label="Quick and easy trip planner"]//li)');
        let parentWindow = await browser.getWindowHandle(); // 

        for (let i = 0; i < Math.min(3, listItems.length); i++) {
            const linkElement = await listItems[i].$('a'); // Find <a> tag inside <li>
            const placeUrl = await linkElement.getAttribute('href'); // Extract URL
            
            // Open new tab 
            await browser.newWindow(placeUrl);
            await browser.pause(2000);

            await browser.closeWindow(); // Close the new tab
            await browser.switchToWindow(parentWindow); // Switch back to parent
        }
    });

    it("should open a new window for Google", async () => {
        AllureReporter.addFeature("Google Search");
        AllureReporter.addSeverity("normal");

        await browser.newWindow("https://www.google.com/");
        await browser.pause(5000);
    });
});*/
