export default {
    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                let productName = this.areWeLookingForBeefAndEggs(product.name);
                if(product.comment) {
                    let productComment = this.areWeLookingForBeefAndEggs(product.comment);
                    return this.searchByProduct(productName) || this.searchByComment(productComment);
                }
                return this.searchByProduct(productName);
            });
        }
    },
    methods: {
        // TODO : See if it works with IE
        searchByProduct(productName) {
            return productName.toLowerCase().includes(this.search.toLowerCase()) || this.searchByUnaccentedProducts(productName);
        },
        searchByUnaccentedProducts(productName) {
            // from https://stackoverflow.com/questions/5700636/using-javascript-to-perform-text-matches-with-without-accented-characters
            let unaccentedProd = productName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            return unaccentedProd.toLowerCase().includes(this.search.toLowerCase());
        },
        searchByComment(productComment) {
            return productComment.toLowerCase().includes(this.search.toLowerCase()) || this.searchByUnaccentedComment(productComment);
        },
        searchByUnaccentedComment(productComment) {
            let unaccentedComment = productComment.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            return unaccentedComment.toLowerCase().includes(this.search.toLowerCase());
        },
        areWeLookingForBeefAndEggs(string) {
            // remplace œ par oe
            return string.toLowerCase().replace(/[\u0153]/, "oe")
        }
    }
}
