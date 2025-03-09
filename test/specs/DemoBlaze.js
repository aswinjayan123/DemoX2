import LaunchDemo from "../pageobjects/LaunchDemo"
import AddtoCartpage from "../pageobjects/AddtoCartpage";
import Cartpage from "../pageobjects/Cartpage";
describe('Add Asus Full Hd Monitor to the Cart and Proceed Transaction ', function () {
    it('Check Launch of the Url', async () => {
        await LaunchDemo.launch();
        await expect(browser).toHaveTitle('STORE');
    })
    it('Verify Successfull login of the user', async () => {
        await expect(LaunchDemo.$login()).toHaveText('Log in');
        const inputuser = await LaunchDemo.$username().getValue();
        await LaunchDemo.UserLogin();

    })
    it('Check in Phones section user can select the 4th Phone', async () => {
        await expect(LaunchDemo.$categories()).toBeDisplayed();
        let phone = await LaunchDemo.$fourthphone().getText();
        await expect(phone).toContain('Samsung galaxy s7');
        await LaunchDemo.SelectProduct();
        await browser.pause(1500);
    })
    it('Add product to the cart', async () => {
        await expect(AddtoCartpage.$PhoneName()).toBeDisplayed();
        await expect(AddtoCartpage.$PhoneName()).toHaveText('Samsung galaxy s7');
        await AddtoCartpage.$AddtoCart().click();
        await browser.pause(5000);
        // Handle and Assert JavaScript Alert
        /*await browser.waitUntil(async () => await browser.isAlertOpen(), {
            timeout: 5000,
            timeoutMsg: 'Expected alert to be present'
        });

        const alertText = await browser.getAlertText();
        expect(alertText).toEqual('Product added');*/
        //await browser.acceptAlert();
    })
    it('Proceed the checkout',async()=>{
        await AddtoCartpage.$Cart().click();
        await expect(Cartpage.$producttitle()).toBeDisplayed();
        await Cartpage.$order().click();
        await expect(Cartpage.$placeordertitle()).toBeDisplayed();
        await Cartpage.placeOrder();
    })
    

})