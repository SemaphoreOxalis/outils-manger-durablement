export default {
    methods: {
        fetchRecipes() {
            getRecipes().then((response) => {
                this.recipes = response.data;
            });
        },

        updateRecipe(recipe) {
            recipe.products.forEach(p => {
                p.pivot.origin = p.origin.from;
            })
            patchRecipe(recipe).then(response => {
                this.$router.push({name: 'recipes-index', params : { search: recipe.name}})
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addRecipe() {
            postRecipe(this.newRecipe).then(response => {
                this.recipes.push(response.data);
                this.newRecipe = {};
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        deleteRecipe(recipeId) {
            destroyRecipe(recipeId).then(response => {
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        async getRecipeById(recipeId) {
            const {data:response} = await getRecipe(recipeId);
            return response;
        }
    }
}

function getRecipes() {
    return axios.get('/api/recipes');
}


function patchRecipe(recipe) {
    return axios.patch('/api/recipes/' + recipe.id, recipe);
}

function postRecipe(newRecipe) {
    return axios.post('/api/recipes', newRecipe);
}

function destroyRecipe(recipeId) {
    return axios.delete('/api/recipes/' + recipeId);
}

function getRecipe(recipeId) {
    return axios.get('/api/recipes/' + recipeId);
}
