class ProductCart{
    constructor(){
        this.$order=()=>$(`//button[@type="button" and text()="Place Order"]`);
        this.$producttitle=()=>$(`//h2[text()="Products"]`);
        this.$placeordertitle=()=>$(`//h5[text()="Place order"]`);
        this.$name=()=>$(`//input[@id="name"]`);
        this.$country=()=>$(`//input[@id="country"]`);
        this.$city=()=>$(`//input[@id="city"]`);
        this.$creditcard=()=>$(`//input[@id="card"]`);
        this.$month=()=>$(`//input[@id="month"]`);
        this.$year=()=>$(`//input[@id="year"]`);
        this.$purchaseButton=()=>$(`//button[text()="Purchase"]`)
        this.$alertConfirm=()=>$('.sweet-alert.showSweetAlert');

    } 
    async placeOrder(){
        await this.$name().setValue('Aswin');
        await this.$country().setValue('India');
        await this.$city().setValue('pta');
        await this.$creditcard().setValue('12327828');
        await this.$month().setValue('8');
        await this.$year().setValue('2028');
    }
        
    
}
export default new ProductCart();