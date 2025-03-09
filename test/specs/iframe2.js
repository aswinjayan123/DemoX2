describe("My Login application", () => {
    beforeEach(async () => {
        await browser.reloadSession(); // Ensures a fresh session before each test
    });

    it("should login with valid credentials", async () => {
        await browser.url("https://example.com/login");

        const usernameInput = await $("#username");
        await usernameInput.waitForDisplayed();
        await usernameInput.setValue("your_username");

        const passwordInput = await $("#password");
        await passwordInput.waitForDisplayed();
        await passwordInput.setValue("your_password");

        const loginButton = await $("#login");
        await loginButton.waitForDisplayed();
        await loginButton.click();

        // Validate successful login
        const successMessage = await $("#success-message");
        await successMessage.waitForDisplayed();
        const messageText = await successMessage.getText();
        expect(messageText).toBe("Login successful");
    });
});
