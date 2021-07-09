export default {
    methods: {
        fetchRecipes() {
            getRecipes().then((response) => {
                this.recipes = response.data;
            });
        },

        updateRecipe(recipe) {
            patchRecipe(recipe).then(response => {
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
        }
    }
}

function getRecipes() {
    return axios.get('/api/recipes');
}


function patchRecipe(recipe) {
    return axios.patch('/api/recipes/' + recipe.id, {
        name: recipe.name,
    });
}

function postRecipe(newRecipe) {
    return axios.post('/api/recipes', {
        name: newRecipe.name,
    });
}

function destroyRecipe(recipeId) {
    return axios.delete('/api/recipes/' + recipeId);
}
