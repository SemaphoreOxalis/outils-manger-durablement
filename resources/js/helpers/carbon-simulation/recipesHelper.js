export default {
    methods: {
        turnRecipesIntoProducts() {
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
    }
}