export default {
    methods: {
        addBasket(name = '') {
            this.baskets.push(this.prepareBasketToAdd(name));
            this.incrementBasketCounter();
            this.saveBasketsToLocalStorage();
        },
        copyBasket(basket, index) {
            let tempBasket = JSON.parse(JSON.stringify(basket));
            this.baskets.splice(index + 1, 0, this.prepareBasketToAdd('Copie de ' + tempBasket.name, tempBasket.products, tempBasket.results));
            this.incrementBasketCounter();
            this.saveBasketsToLocalStorage();
        },
        deleteBasket(basketIndex) {
            this.showConfirmationModal = false;
            this.baskets.splice(basketIndex, 1);
            if (this.baskets.length === 0) {
                this.deleteBasketsFromLocalStorage();
            } else {
                this.saveBasketsToLocalStorage();
            }
            events.$emit('get-internal-counters');
        },
        clearBasket(basketIndex) {
            this.showConfirmationModal = false;
            this.baskets[basketIndex].products = [];
            this.saveBasketsToLocalStorage();
            events.$emit('get-internal-counters');
        },

        prepareBasketToAdd(name = '', products = [], results = []) {
            if(name === '') {
                name = 'liste ' + (this.basketsCounter + 1);
            }
            return {
                id: 'basket-' + (this.basketsCounter + 1),
                name: name,
                products: products,
                isSelected: true,
                results: results,
            };
        },
        saveBasketsResults(basketIndex, results) {
            if(this.baskets[basketIndex]) {
                this.baskets[basketIndex].results = results;
            }
        },
    }
}
