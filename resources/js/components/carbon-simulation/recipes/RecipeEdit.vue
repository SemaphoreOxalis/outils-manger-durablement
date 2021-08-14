<template>
    <div>
        <add-product-pop-up v-if="showAddingModal"
                            :product="this.productAdded"
                            :origins="this.origins"
                            :selected-baskets="[{name: recipe.name}]"
                            ref="searchBar"
                            @add="addProductToRecipe"
                            @exit-without-adding="showAddingModal = false">
        </add-product-pop-up>

        <div class="form-group w-100 d-flex mb-4">
            <div class="w-33 mr-1">
                <label for="recipeName">Nom de la recette : </label>
                <input v-model="recipe.name" type="text" required style="max-width: 350px;" id="recipeName"
                       class="custom-input browser-default">
            </div>
            <div class="w-33 mr-1">
                <label for="description">Description : </label>
                <textarea v-model="recipe.description" type="text" style="max-width: 350px;" id="description"
                          class="custom-input browser-default"></textarea>
            </div>
            <div class="w-33 mr-1">
                <label for="author">Auteur : </label>
                <input v-model="recipe.author" type="text" style="max-width: 350px;" id="author"
                       class="custom-input browser-default">
            </div>
        </div>

        <div>
            <div class="search-bar main-search">
                <product-list v-bind:categories="this.categories"
                              v-bind:origins="this.origins"
                              v-bind:products="this.products"
                              v-bind:recipes="[]"
                              v-bind:specialProducts="[]"
                              v-bind:selected-category-id="this.selectedCategoryId"
                              v-bind:selected-by-category="this.selectedByCategory"
                              v-bind:counters="[0]"
                              v-bind:show-recipes="false"
                              @filter-products-by-category="filterProductsByCategory"
                              @deselect-category="deselectCategories"
                              @add-product-to-basket="showAddingProductModal">
                </product-list>

                <search-bar :products="this.products"
                            :recipes="[]"
                            :specialProducts="[]"
                            :focus="this.focusOnSearchBar"
                            :placeholder="'Taper le nom d\'un produit'"
                            @search-complete="filterProductsBySearch"
                            @product-chosen="showAddingProductModal"
                            @lose-focus="loseFocusOnSearchBar">
                </search-bar>
            </div>

            <div class="d-flex justify-content-between mb-4">
                <div v-if="isEmpty(recipe.products)"class="loader-spinner"></div>
                <div v-if="!isEmpty(recipe.products)" class="form-group w-100 recipe-products">
                    <label class="mb-3">Produits : </label>
                    <ul>
                        <li v-for="(product, index) in recipe.products" :key="recipe.id+ '-' + product.id">
                            <div class="ml-3 d-flex">
                                <p class="w-50 mr-3 mt-auto"><strong>{{ product.name }} &nbsp; </strong>
                                    <small>{{ product.comment }}</small></p>
                                <div class="w-50">
                                    <input type="number"
                                           class="ignore-draggable custom-input browser-default number-field input"
                                           style="max-width: 75px;"
                                           v-model="product.pivot.amount"
                                           min="0" step="0.1"
                                           required>
                                    <div class="units crud mr-2">
                                        {{ unit(product) }}
                                        <a class="info-bubble product-info-bubble btn-ico alt tool info" :title="product.unit.unit"></a>
                                    </div>

                                    <input type="number"
                                           class="ignore-draggable custom-input browser-default number-field input"
                                           style="max-width: 75px;"
                                           v-model="product.pivot.price"
                                           min="0" step="0.1"
                                           required>
                                    <div class="units mr-2">€</div>

                                    <select v-model="product.origin"
                                            :id="'origin-' + recipe.id + '-' + product.id"
                                            class="custom-select input custom-input w-50"
                                            :name="'origin-' + recipe.id + '-' + product.id"
                                            :data-name="'Origine ' + recipe.id + '-' + product.id">
                                        <option v-for="origin in origins" :value="origin">
                                            {{ origin.from }}
                                        </option>
                                    </select>

                                    <a class="btn-ico alt tool info-bubble d-inline ml-2"
                                       @click="removeProduct(index)" title="Supprimer ce produit de la recette"></a>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>

            <button class="button"
                    @click="updateRecipe(recipe, false)">
                <i class="icon mr-2"></i>Sauvegarder
            </button>


            <button class="button"
                    @click="updateRecipe(recipe, true)">
                <i class="icon mr-2"></i>Sauvegarder et fermer
            </button>

            <router-link :to="{ name: 'recipes-index'}" tag="span">
                <button class="button alter">Fermer sans enregistrer</button>
            </router-link>

        </div>
    </div>
</template>

<script>
import RecipesDataBase from "../../../helpers/carbon-simulation/database/RecipesDataBase";
import OriginsDataBase from "../../../helpers/carbon-simulation/database/OriginsDataBase";
import recipesHelper from "../../../helpers/carbon-simulation/recipesHelper";
import ProductsDataBase from "../../../helpers/carbon-simulation/database/ProductsDataBase";
import CategoriesDataBase from "../../../helpers/carbon-simulation/database/CategoriesDataBase";
import searchBar from "../../../helpers/carbon-simulation/searchBar";
const ProductList = () => import(
    /* webpackChunkName: "js/carbon-simulation/ProductList" */
    './../ProductList'
    );
const SearchBar = () => import(
    /* webpackChunkName: "js/carbon-simulation/SearchBar" */
    './../SearchBar'
    );
const AddProductPopUp = () => import(
    /* webpackChunkName: "js/carbon-simulation/AddProductPopUp" */
    './../AddProductPopUp'
    );

export default {
    components: {
        SearchBar,
        ProductList,
        AddProductPopUp,
    },
    mixins: [
        RecipesDataBase,
        OriginsDataBase,
        ProductsDataBase,
        CategoriesDataBase,
        recipesHelper,
        searchBar,
    ],
    computed: {
        counter: function() {
            if (this.recipe.products.length) {
                return Math.max(...this.recipe.products.map(product => {
                    return product.id.substring(5); // "prod-" id prefix is 5 characters long
                }));
            } else {
                return 0;
            }
        }
    },
    data() {
        return {
            recipe: {
                products: {},
            },
            origins: [],
            products: [],
            categories: [],

            selectedCategoryId: null,
            selectedByCategory: false,
            selectedBySearchBar: false,
            showAddingModal: false,
            focusOnSearchBar: false,
            productAdded: {},
        }
    },
    created() {
        this.fetchOrigins();
        this.fetchProducts();
        this.fetchCategories();
    },
    async mounted() {
        this.recipe = await this.getRecipeById(this.$attrs.id);
        this.recipe.products.forEach((p, i) => {
            p.origin = this.getOriginObject(p.pivot.origin);
            p.productId = p.id;
            p.id = 'prod-' + (i + 1);
        });
    },
}
</script>