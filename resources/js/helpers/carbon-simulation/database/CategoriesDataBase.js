export default {
    methods: {
        fetchCategories() {
            getCategories().then((response) => {
                this.categories = response.data;
            });
        },

        updateCategory(category) {
            patchCategory(category).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addCategory() {
            postCategory(this.newCategory).then(response => {
                this.categories.push(response.data);
                this.newCategory = '';
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        deleteCategory(catId) {
            destroyCategory(catId).then(response => {
                flash(response.data);
                this.refreshCategories();
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        }
    }
}

function getCategories() {
    return axios.get('/api/categories');
}

function patchCategory(category) {
    return axios.patch('/api/categories/' + category.id, {
        name: category.name
    });
}

function postCategory(newCatName) {
    return axios.post('/api/categories', { name: newCatName });
}

function destroyCategory(catId) {
    return axios.delete('/api/categories/' + catId);
}
