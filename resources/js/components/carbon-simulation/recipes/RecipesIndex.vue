<template>
    <div>
        <transition name="modal" v-if="showModal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container text-center" ref="modal">

                        <div class="modal-body">
                            <p>
                                Êtes-vous sûr(e) de vouloir supprimer la recette "{{ affectedRecipe.name }}" ?
                                Cette action est irréversible
                            </p>
                        </div>

                        <div class="modal-footer">
                            <button class="modal-default-button button"
                                    @click="deleteRecipe(affectedRecipe.id)">
                                OK
                            </button>
                            <button class="modal-default-button button alter"
                                    @click="showModal = false">
                                Annuler
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </transition>

        <div class="mb-4 d-flex">
            <router-link :to="{ name: 'recipe-create'}" tag="span">
                <button class="button">Créer une nouvelle recette</button>
            </router-link>
            <router-link :to="{ name: 'basket-simulator'}" tag="span">
                <button class="button alter">Retour aux listes</button>
            </router-link>
        </div>
        <div class="d-flex align-items-center w-100 mb-2">
            <span>Filtrer les recettes : &nbsp;</span>
            <input type="text" v-model="search" style="max-width: 550px;" class="custom-input browser-default input" placeholder="Par nom de recette, description, ingrédient, auteur">
            <a @click="search=''" class="button alter ml-2 align-self-baseline" title="Effacer les filtres">Réinitialiser</a>
        </div>

        <div v-if="!loaded" class="loader-spinner"></div>
        <div v-for="(recipe, i) in filteredRecipes"
             v-if="loaded"
             :key="recipe.id"
             class="w-100 recipe-header-container"
             :id="'recipe-' + recipe.id">
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
                    <a @click="copyRecipe(recipe)" class="btn-ico alt tool" title="Dupliquer cette recette"><i class="icon"></i></a>
                    <a @click="showDeleteModal(recipe)" class="btn-ico alt tool" title="Supprimer"></a>
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
            affectedRecipe: {},
            showModal: false,
            search: '',
        }
    },
    computed: {
        filteredRecipes() {
            return this.searchWithSearchBar(this.recipesAsProducts);
        },
        loaded() {
            if (this.recipes.length && this.products.length) {
                this.turnRecipesIntoProducts();
                if(this.recipesAsProducts.length) {
                    return true;
                }
            }
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
        showDeleteModal(recipe) {
            this.affectedRecipe = {... recipe};
            this.showModal = true;
        },
        copyRecipe(recipe) {
            this.affectedRecipe = {... recipe};
            this.affectedRecipe.name = 'Copie de ' + this.affectedRecipe.name;
            this.affectedRecipe.products.forEach((p, i) => {
                p.productId = p.id;
            });
            this.addRecipe(this.affectedRecipe, true, false);
            this.affectedRecipe = {};
        },
        refreshRecipes() {
            this.recipes = [];
            this.recipesAsProducts = [];
            this.fetchRecipes();
            if(this.loaded && this.recipes.length) {
                this.turnRecipesIntoProducts();
            }
        },
        displayCopy(id) {
            setTimeout(() => {
                let el = document.getElementById('recipe-' + id);
                let cl = document.getElementById('body-' + id);
                el.scrollIntoView({behavior: "smooth"});
                $(cl).collapse('show');
            }, 500);
        },
    }
}
</script>