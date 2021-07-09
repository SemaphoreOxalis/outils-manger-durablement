<template>
    <div>
        <add-product-pop-up v-if="showAddingModal"
                            :product="this.productAdded"
                            :origins="this.origins"
                            :selected-baskets="this.selectedBaskets"
                            ref="searchBar"
                            @add="addProductToBasket"
                            @exit-without-adding="showAddingModal = false">
        </add-product-pop-up>

        <div class="search-bar main-search">
            <product-list v-bind:categories="this.categories"
                          v-bind:origins="this.origins"
                          v-bind:products="this.products"
                          v-bind:recipes="this.recipesAsProducts"
                          v-bind:specialProducts="this.specialProducts"
                          v-bind:selected-category-id="this.selectedCategoryId"
                          v-bind:selected-by-category="this.selectedByCategory"
                          v-bind:counters="this.internalCounters"
                          @filter-products-by-category="filterProductsByCategory"
                          @deselect-category="deselectCategories"
                          @add-product-to-basket="showAddingProductModal">
            </product-list>

            <search-bar :products="this.products"
                        :recipes="this.recipesAsProducts"
                        :specialProducts="this.specialProducts"
                        :focus="this.focusOnSearchBar"
                        @search-complete="filterProductsBySearch"
                        @product-chosen="showAddingProductModal"
                        @lose-focus="loseFocusOnSearchBar">
            </search-bar>

            <button data-target="mode_emploi" class="btn info modal-trigger info-bubble" title="Mode d'emploi">?</button>
            <div class="modal modal-fixed-footer" id="mode_emploi">
                <div class="modal-content">
                    <div v-html="howTo"></div>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green button">{{ how_to.close_btn }}</a>
                </div>
            </div>
        </div>

        <router-link :to="{ name: 'recipes-index'}" tag="span">
            <button class="button">Recettes de Chef</button>
        </router-link>

        <baskets-list v-bind:origins="this.origins"
                      v-bind:categories="this.categories"
                      v-bind:product-to-add="this.productToAddWithDetails"
                      @selected-baskets="setSelectedBaskets">
        </baskets-list>
    </div>

</template>

<script>
import searchBar from "../../helpers/carbon-simulation/searchBar";
import ProductsDataBase from "../../helpers/carbon-simulation/database/ProductsDataBase";
import CategoriesDataBase from "../../helpers/carbon-simulation/database/CategoriesDataBase";
import UnitsDataBase from "../../helpers/carbon-simulation/database/UnitsDataBase";
import OriginsDataBase from "../../helpers/carbon-simulation/database/OriginsDataBase";
import BasketSimulatorText from "../../../texts/carbonSimulator/BasketSimulatorText";
import DataBase from "../../helpers/DataBase";
import RecipesDataBase from "../../helpers/carbon-simulation/database/RecipesDataBase";
const SearchBar = () => import(
    /* webpackChunkName: "js/carbon-simulation/SearchBar" */
    './SearchBar'
    );
const ProductList = () => import(
    /* webpackChunkName: "js/carbon-simulation/ProductList" */
    './ProductList'
    );
const AddProductPopUp = () => import(
    /* webpackChunkName: "js/carbon-simulation/AddProductPopUp" */
    './AddProductPopUp'
    );
const BasketsList = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketsList" */
    './BasketsList'
    );

export default {
    components: {
        SearchBar,
        ProductList,
        AddProductPopUp,
        BasketsList
    },
    mixins: [
        searchBar,
        ProductsDataBase,
        RecipesDataBase,
        CategoriesDataBase,
        UnitsDataBase,
        OriginsDataBase,
        BasketSimulatorText,
        DataBase,
    ],
    data() {
        return {
            products: [],
            specialProducts: [],
            recipes: [],
            recipesAsProducts: [],
            categories: [],
            units: [],
            origins: [],

            selectedCategoryId: null,
            selectedByCategory: false,
            selectedBySearchBar: false,

            search: '',

            selectedBaskets: [],
            internalCounters: [],

            showAddingModal: false,
            productAdded: {},
            productToAddWithDetails: {},
            focusOnSearchBar: false,

            howTo:'',
        }
    },

    created() {
        events.$on('internal-counters', this.setInternalCounters);
        this.fetchProducts();
        this.fetchRecipes();
        this.fetchSpecialProducts();
        this.fetchCategories();
        this.fetchUnits();
        this.fetchOrigins();

        this.getInternalCounters();

        $(document).ready(() => {
            $('.modal').modal();
        });
    },

    async mounted() {
        this.howTo = await this.fetchContent('Carbone - Mode d\'emploi');
        this.turnRecipesIntoProducts();
    },

    methods: {
        filterProductsByCategory(categoryId) {
            this.selectedCategoryId = categoryId;
            this.selectedBySearchBar = false;
            this.selectedByCategory = true;
        },
        filterProductsBySearch() {
            this.deselectCategories();
            this.selectedBySearchBar = true;
        },
        deselectCategories() {
            this.selectedCategoryId = null;
            this.selectedByCategory = false;
        },

        showAddingProductModal(product) {
            this.getSelectedBaskets();
            if(!this.selectedBaskets.length) {
                alert('Aucune liste sélectionnée');
                return;
            }
            if(product.type === 'special') {
                events.$emit('insert-block');
                return;
            }
            if(product.type === 'recipe') {
                events.$emit('insert-recipe', product);
                return;
            }
            this.loseFocusOnSearchBar();
            this.productAdded = product;
            this.showAddingModal = true;
        },
        addProductToBasket(product) {
            this.showAddingModal = false;
            this.addProductToSelectedBaskets(product);
            this.focusOnSearchBar = true;
        },
        addProductToSelectedBaskets(product) {
            this.productToAddWithDetails = product;
        },

        getSelectedBaskets() {
            events.$emit('send-selected-baskets');
        },
        setSelectedBaskets(baskets) {
            this.selectedBaskets = baskets;
        },

        getInternalCounters() {
            events.$emit('get-internal-counters');
        },
        setInternalCounters(basketI, counter) {
            this.internalCounters[basketI] = counter;
        },

        loseFocusOnSearchBar() {
            events.$emit('clear-search-bar');
            this.focusOnSearchBar = false;
        },

        getOriginObject(from) {
            return this.origins.filter(origin => origin.from === from)[0];
        },

        turnRecipesIntoProducts() {
            this.recipes.forEach((recipe) => {
                let prod = {...recipe};
                prod.type = "recipe";
                prod.comment = recipe.description;
                recipe.products.forEach((product) => {
                    product.origin = this.getOriginObject(product.pivot.origin);
                    product.amount = product.pivot.amount;
                    product.price = product.pivot.price;
                });
                this.recipesAsProducts.push(prod);
            });
        },
    }
}
</script>
