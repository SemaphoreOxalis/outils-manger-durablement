<template>
    <div>
        <div class="d-flex align-items-center mb-5">
            <span class="text-center">Filtrer les recettes : &nbsp;</span>
            <input type="text" v-model="search" placeholder="Filtrer" style="max-width: 350px;">
            <a @click="search=''" class="btn-ico alt tool" title="Effacer les filtres"><strong>✖</strong></a>
        </div>

        <div v-for="(recipe, i) in filteredRecipes"
             :key="recipe.id"
             :class="{ 'border-top border-secondary': i !== 0 }"
             class="w-75">
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center"><strong>{{ recipe.name }} &nbsp; </strong> {{ recipe.description }}</div>
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
                    <a @click="" class="btn-ico alt tool pb-1" title="Modifier"><i class="icon"></i></a>
                    <a @click="" class="btn-ico alt tool" title="Supprimer"></a>
                </div>
            </div>
            <div :class="'collapse w-75 collapse-' + recipe.id"
                 :id="'body-' + recipe.id">
                <ul>
                    <div v-for="product in recipe.products" :key="recipe.id+ '-' + product.id" class="ml-3 d-flex">
                        <p class="w-50"><strong>{{ product.name }} &nbsp; </strong> {{ product.comment }}</p>
                        <p class="ml-5">{{ product.pivot.amount }} {{ product.unit.shortUnit }} - {{ product.pivot.price }} € - {{ product.pivot.origin }}</p>
                    </div>
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
        setTimeout(() => {
            this.turnRecipesIntoProducts();
        }, 500);
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