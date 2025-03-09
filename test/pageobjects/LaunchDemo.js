
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