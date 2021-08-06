export default {
    methods: {
        turnRecipesIntoProducts() {
            this.recipesAsProducts = [];
            this.recipes.forEach((recipe) => {
                let prod = {...recipe};
                prod.type = "recipe";
                prod.comment = recipe.description;
                recipe.products.forEach((product) => {
                    product.origin = this.getOriginObject(product.pivot.origin);
                    product.amount = product.pivot.amount;
                    product.price = product.pivot.price;
                });
                this.recipesAsProducts.push(prod);
            });
        },

        getOriginObject(from) {
            return this.origins.filter(origin => origin.from === from)[0];
        },

        isEmpty(obj) {
            return Object.keys(obj).length === 0;
        },
        unit(product) {
            if (product.unit.shortUnit !== 'kg' && product.pivot.amount >= 2) {
                return product.unit.shortUnit + 's';
            }
            return product.unit.shortUnit;
        },
        removeProduct(index) {
            this.recipe.products.splice(index, 1);
        },
        addProductToRecipe(product) {
            this.showAddingModal = false;
            this.focusOnSearchBar = true;
            if (!product.price) { product.price = 0 ;}
            this.recipe.products.push({...product, productId: product.productId, id: 'prod-' + (this.counter + 1), pivot: {amount: product.amount, price: product.price}, origin: product.origin});
        },
        showAddingProductModal(product) {
            this.loseFocusOnSearchBar();
            this.productAdded = product;
            this.showAddingModal = true;
        },
    }
}