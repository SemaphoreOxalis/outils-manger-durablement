import DataBase from "../../DataBase";
export default {
    mixins: [
        DataBase,
    ],
    methods: {
        fetchRecipes() {
            getRecipes().then((response) => {
                this.recipes = response.data;
            });
        },

        fetchTrashedRecipes() {
            getTrashedRecipes().then((response) => {
                this.recipes = response.data;
            });
        },

        updateRecipe(recipe, close) {
            recipe.products.forEach(p => {
                p.pivot.origin = p.origin.from;
            })
            patchRecipe(recipe).then(response => {
                if (close) {
                    this.$router.push({name: 'recipes-index', params : { search: recipe.name}});
                } else {
                    this.$router.go(0);
                }
                flash(response.data);
            }).catch(error => {
                flash(error.response.data, 'danger');
            });
        },

        addRecipe(newRecipe, copied, stay) {
            newRecipe.products.forEach(p => {
                p.pivot.origin = p.origin.from;
            })
            postRecipe(newRecipe).then(response => {
                this.incrementRecipeCounter();
                if(copied) {
                    this.refreshRecipes();
                    this.displayCopy(response.data);
                    //this.search = newRecipe.name;
                } else {
                    if(stay) {
                        this.$router.push({name: 'recipe-edit', params : { id: response.data}});
                    } else {
                        this.$router.push({name: 'recipes-index', params : { search: newRecipe.name}});
                    }
                }
                flash('Recette créée avec succès');
            }).catch(error => {
                console.log(error);
                flash('Erreur de sauvegarde', 'danger');
            });
        },

        deleteRecipe(recipeId) {
            destroyRecipe(recipeId).then(response => {
                flash(response.data);
                this.showModal = false;
                this.refreshRecipes();
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

function getTrashedRecipes() {
    return axios.get('/api/trashed-recipes');
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
