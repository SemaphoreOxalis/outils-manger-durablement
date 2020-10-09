export default {
    methods: {
        fetchProducts() {
            getProducts().then((response) => {
                this.products = response.data;
            });
        },

        updateProduct(product) {
            patchProduct(product).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addProduct() {
            postProduct(this.newProduct).then(response => {
                this.products.push(response.data);
                this.newProduct = {};
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        deleteProduct(productId) {
            destroyProduct(productId).then(response => {
                flash(response.data);
                this.refreshProducts();
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        }
    }
}

function getProducts() {
    return axios.get('/api/products');
}

function patchProduct(product) {
    return axios.patch('/api/products/' + product.id, {
        name: product.name,
        unit_id: product.unit_id,
        category_id: product.category_id,
        comment: product.comment,
        emissionFactor: product.emissionFactor,
    });
}

function postProduct(newProduct) {
    return axios.post('/api/products', {
        name: newProduct.name,
        unit_id: newProduct.unit_id,
        category_id: newProduct.category_id,
        comment: newProduct.comment,
        emissionFactor: newProduct.emissionFactor,
    });
}

function destroyProduct(productId) {
    return axios.delete('/api/products/' + productId);
}
