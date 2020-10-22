export default {
    methods: {
        francifyBasket(basketIndex) {
            this.baskets[basketIndex].products.forEach(product => {
                product.origin = this.origins[2]; // France
            });
            this.showGroupedActionModal = false;
            this.saveBasketsToLocalStorage();
        },
    }
}
