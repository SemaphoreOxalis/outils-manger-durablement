<template>
    <div class="mt-4">
        <h4 class="mb-4">Recettes Supprimées</h4>

        <div v-if="!recipes.length && !loaded" class="loader-spinner"></div>
        <div v-for="(recipe, i) in recipes"
             v-else
             :key="recipe.id"
             class="w-100 recipe-header-container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="w-50 d-flex align-items-center"><strong> &nbsp; {{ recipe.name }} &nbsp; </strong> {{ recipe.description }}</div>

                <span v-if="recipe.author" class="mr-5 w-25">Proposée par {{ recipe.author }}</span>

                <div class="d-flex">
                    <a class="btn-ico alt tool"
                       data-toggle="collapse"
                       :data-target="'#body-' + recipe.id"
                       aria-expanded="false"
                       :aria-controls="'body-' + recipe.id"
                       @click="toggleFullRecipe(recipe.id)"
                       title="Détails">
                        <i :id="'collapse-icon-' + recipe.id" class="icon icon-eye"></i>
                    </a>
                    <a @click="restore(recipe)" class="btn-ico alt tool" title="Restaurer cette recette"><i class="icon"></i></a>
                    <a @click="erase(recipe)" class="btn-ico alt tool" title="Supprimer Définitivement"></a>
                </div>
            </div>
            <div :class="'collapse w-75 mt-3 collapse-' + recipe.id"
                 :id="'body-' + recipe.id">
                <ul>
                    <li v-for="product in recipe.products" :key="recipe.id+ '-' + product.id" class="ml-3 d-flex">
                        <p class="w-50"><i class="icon icon-minus align-text-bottom"></i> &nbsp; <strong>{{ product.name }} &nbsp; </strong> {{ product.comment }}</p>
                        <p class="ml-5">{{ product.pivot.amount }} {{ product.unit.shortUnit }} - {{ product.pivot.price }} € - {{ product.pivot.origin }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import RecipesDataBase from "../../../helpers/carbon-simulation/database/RecipesDataBase";

export default {
    mixins: [
        RecipesDataBase,
    ],
    data() {
        return {
            recipes: [],
            loaded: false,
        }
    },
    created() {
        this.fetchTrashedRecipes();
    },
    mounted() {
        this.loaded = true;
    },
    methods: {
        refreshRecipes() {
            this.fetchTrashedRecipes();
        },
        toggleFullRecipe(id) {
            let collapseClass = '.collapse-' + id;
            let collapseIconId = '#collapse-icon-' + id;

            $(collapseClass).on('show.bs.collapse', function () {
                $(collapseIconId).removeClass("icon-eye");
                $(collapseIconId).addClass("icon-eye-slash");
            }).on('hide.bs.collapse', function () {
                $(collapseIconId).removeClass("icon-eye-slash");
                $(collapseIconId).addClass("icon-eye");
            });
        },
        restore(recipe) {
            if(confirm("Voulez vous vraiment restaurer la recette '" + recipe.name + "' ?")) {
                axios.get('/api/trashed-recipes/' + recipe.id + '/restore').then(response => {
                    this.recipes = [];
                    this.fetchTrashedRecipes();
                    //this.$router.push({name: 'recipes-index', params : { search: recipe.name }});
                    flash(response.data);
                }).catch(error => {
                    flash(error.response.data, 'danger');
                });
            }
        },
        erase(recipe) {
            if(confirm("Voulez vous vraiment supprimer définitivement la recette '" + recipe.name + "' ?")) {
                axios.delete('/api/trashed-recipes/' + recipe.id + '/delete').then(response => {
                    this.refreshRecipes();
                    flash(response.data);
                }).catch(error => {
                    flash(error.response.data, 'danger');
                });
            }
        }
    }
}
</script>