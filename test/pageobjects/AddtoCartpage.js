class Cart{
    constructor(){
        this.$PhoneName=()=>$(`//h2[text()="Samsung galaxy s7"]`);
        this.$AddtoCart=()=>$(`//a[text()="Add to cart"]`);
        this.$Cart=()=>$(`//a[text()="Cart"]`);
    }
}
export default new Cart();