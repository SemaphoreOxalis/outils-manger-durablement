<template>
    <div>
        <div class="d-flex justify-content-between mb-5">
            <div class="d-flex align-items-center w-75">
                <span>Filtrer les recettes : &nbsp;</span>
                <input type="text" v-model="search" style="max-width: 550px;" class="custom-input browser-default input" placeholder="Par nom de recette, description, ingrédient, auteur">
                <a @click="search=''" class="btn-ico alt tool" title="Effacer les filtres"><i class="icon icon-times-circle"></i></a>
            </div>
            <div>
                <router-link :to="{ name: 'recipe-create'}" tag="span">
                    <button class="button">Créer une nouvelle recette</button>
                </router-link>
            </div>
        </div>

        <div v-if="!filteredRecipes.length" class="loader-spinner"></div>
        <div v-for="(recipe, i) in filteredRecipes"
             :key="recipe.id"
             class="w-100 recipe-header-container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="w-50 d-flex align-items-center"><strong> &nbsp; {{ recipe.name }} &nbsp; </strong> {{ recipe.description }}</div>

                <span v-if="recipe.author" class="mr-5 w-25">Proposée par <a @click="search=recipe.author" href="#">{{ recipe.author }}</a></span>

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
                    <router-link :to="'./edit/' + recipe.id" tag="span">
                        <a @click="" class="btn-ico alt tool" title="Modifier"><i class="icon"></i></a>
                    </router-link>
                    <a @click="" class="btn-ico alt tool" title="Dupliquer cette recette"><i class="icon"></i></a>
                    <a @click="" class="btn-ico alt tool" title="Supprimer"></a>
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
import ProductsDataBase from "../../../helpers/carbon-simulation/database/ProductsDataBase";
import searchBar from "../../../helpers/carbon-simulation/searchBar";
import recipesHelper from "../../../helpers/carbon-simulation/recipesHelper";
import OriginsDataBase from "../../../helpers/carbon-simulation/database/OriginsDataBase";
export default {
    mixins: [
        RecipesDataBase,
        ProductsDataBase,
        searchBar,
        recipesHelper,
        OriginsDataBase,
    ],
    data() {
        return {
            recipes: [],
            products: [],
            recipesAsProducts: [],
            origins: [],
            search: '',
        }
    },
    computed: {
        filteredRecipes() {
            return this.searchWithSearchBar(this.recipesAsProducts);
        }
    },
    created() {
        this.fetchRecipes();
        this.fetchProducts();
        this.fetchOrigins();
    },
    mounted() {
        if(this.$route.params.search) {
            this.search = this.$route.params.search;
        }
        setTimeout(() => {
            this.turnRecipesIntoProducts();
        }, 1500);
    },
    methods: {
        collapseClass: function () {
            return '.collapse-' + this.product.id;
        },
        collapseIconId: function () {
            return '#collapse-icon-' + this.basketId + '-' + this.product.id;
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
    }
}
</script>