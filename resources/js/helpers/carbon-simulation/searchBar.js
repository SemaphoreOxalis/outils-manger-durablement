export default {
    methods: {
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
        }
    }
}
