
class Demolaunch{
    constructor(){
        this.$login=()=>$(`//a[@id="login2"]`);
        this.$username=()=>$(`//input[@id="loginusername"]`);
        this.$password=()=>$(`//input[@id="loginpassword"]`);
        this.$loginclick=()=>$(`//button[@onclick="logIn()"]`);
        this.$selectPhones=()=>$(`//div[@class="list-group"]//*[contains(text(),"Phones")]`);
        this.$fourthphone=()=>$(`//div[@class="card-block"]//*[@class="card-title"]//a[@href="prod.html?idp_=4"]`);
        this.$categories=()=>$(`//a[text()="CATEGORIES"]`);

    }
    async launch(){
        await browser.url('https://www.demoblaze.com/');
        await browser.pause(1000);
    }
    async UserLogin(){
        await this.$login().click();
        await this.$username().setValue('aswin@123');
        await this.$password().setValue('Aswin@123');
        await browser.pause(1500);
        await this.$loginclick().click();
        const output=await $(`//li[@class="nav-item"]//a[text()="Welcome aswin@123"]`).getText();

    }
    async SelectProduct(){
        await this.$selectPhones().click();
        await this.$fourthphone().click();

    }
}
export default new Demolaunch();



/*class Demolaunch {
    constructor() {
        this.$login = () => $(`//a[@id="login2"]`);
        this.$username = () => $(`//input[@id="loginusername"]`);
        this.$password = () => $(`//input[@id="loginpassword"]`);
        this.$loginclick = () => $(`//button[@onclick="logIn()"]`);
        this.$selectPhones = () => $(`//div[@class="list-group"]//*[contains(text(),"Phones")]`);
        this.$categories = () => $(`//a[text()="CATEGORIES"]`);
    }

    async launch() {
        await browser.url('https://www.demoblaze.com/');
        await browser.pause(1000);
    }

    async UserLogin() {
        await this.$login().click();
        await this.$username().setValue('aswin@123');
        await this.$password().setValue('Aswin@123');
        await browser.pause(1500);
        await this.$loginclick().click();
        const output = await $(`//li[@class="nav-item"]//a[text()="Welcome aswin@123"]`).getText();
    }

    async SelectProduct() {
        await this.$selectPhones().click();
        await browser.pause(2000);

        // Select all phones dynamically
        const allPhones = await $$(`//div[@class="card-block"]//*[@class="card-title"]//a`);

        if (allPhones.length >= 4) {  // Ensure at least 4 phones exist
            await allPhones[3].click(); // Index 3 -> 4th phone (since index starts from 0)
        } else {
            throw new Error("Less than 4 phones are available on the page.");
        }
    }
}

export default new Demolaunch();
it('Check in Phones section user can select the 4th Phone', async () => {
    await expect(LaunchDemo.$categories()).toBeDisplayed();
    
    // Select all phones dynamically
    const allPhones = await $$(`//div[@class="card-block"]//*[@class="card-title"]//a`);

    if (allPhones.length >= 4) { // Ensure at least 4 phones exist
        let phone = await allPhones[3].getText(); // Get text of 4th phone
        await expect(phone).toContain('Samsung galaxy s7'); // Verify the phone name
        if(allphones[i]==3)
        {
           await allPhones[3].click(); // Click on the 4th phone dynamically
           await browser.pause(1500);
        }
        
    } else {
        throw new Error("Less than 4 phones are available on the page.");
    }
});

//Adding a product using iteration in swag labs

describe("Add Specific Product to Cart", () => {
    it("should add the product with $9.99 to the cart", async () => {
        await browser.url("https://www.saucedemo.com/inventory.html");
        await browser.maximizeWindow();
        
        // Get all product elements
        const products = await $$("//div[@class='inventory_item']");
        
        for (let product of products) {
            // Find price element within each product
            let priceElement = await product.$(".//div[@class='inventory_item_price']");
            let priceText = await priceElement.getText();

            // If the price is $9.99, click the corresponding "Add to cart" button
            if (priceText === "$9.99") {
                let addToCartButton = await product.$(".//button[contains(text(),'Add to cart')]");
                await addToCartButton.waitForDisplayed(); // Explicit Wait
                await addToCartButton.click();
                console.log("Added product with price $9.99 to cart");
                break; // Exit loop after adding the item
            }
        }
    });
});
*/
