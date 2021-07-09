export default {
    methods: {
        searchWithSearchBar(products) {
            return products.filter(product => {
                let productName = this.areWeLookingForBeefAndEggs(product.name);
                if(product.type === 'recipe') {
                    if (product.comment) {
                        return this.searchByProduct(productName, this.search)
                            || this.searchByComment(product.comment, this.search)
                            || this.searchRecipe(product, this.search);
                    }
                    return this.searchByProduct(productName, this.search)
                        || this.searchRecipe(product, this.search);
                }
                else if(product.comment) {
                    let productComment = this.areWeLookingForBeefAndEggs(product.comment);
                    return this.searchByProduct(productName, this.search) || this.searchByComment(productComment, this.search);
                }
                else return this.searchByProduct(productName, this.search);
            });
        },
        // TODO : See if it works with IE
        searchByProduct(productName, search) {
            return productName.toLowerCase().includes(search.toLowerCase()) || this.searchByUnaccentedProducts(productName, search);
        },
        searchByUnaccentedProducts(productName, search) {
            // from https://stackoverflow.com/questions/5700636/using-javascript-to-perform-text-matches-with-without-accented-characters
            let unaccentedProd = productName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            return unaccentedProd.toLowerCase().includes(search.toLowerCase());
        },
        searchByComment(productComment, search) {
            return productComment.toLowerCase().includes(search.toLowerCase()) || this.searchByUnaccentedComment(productComment, search);
        },
        searchByUnaccentedComment(productComment, search) {
            let unaccentedComment = productComment.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            return unaccentedComment.toLowerCase().includes(search.toLowerCase());
        },
        areWeLookingForBeefAndEggs(string) {
            // remplace œ par oe
            return string.toLowerCase().replace(/[\u0153]/, "oe")
        },
        searchRecipe(recipe, search) {
            return recipe.products.some(p => this.searchByProduct(p.name, search));
        }
    }
}
