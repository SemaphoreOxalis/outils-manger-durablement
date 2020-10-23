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
                          v-bind:selected-category-id="this.selectedCategoryId"
                          v-bind:selected-by-category="this.selectedByCategory"
                          v-bind:counters="this.internalCounters"
                          @filter-products-by-category="filterProductsByCategory"
                          @deselect-category="deselectCategories"
                          @add-product-to-basket="showAddingProductModal">
            </product-list>

            <search-bar :products="this.products"
                        :focus="this.focusOnSearchBar"
                        @search-complete="filterProductsBySearch"
                        @product-chosen="showAddingProductModal"
                        @lose-focus="loseFocusOnSearchBar">
            </search-bar>
        </div>

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
        CategoriesDataBase,
        UnitsDataBase,
        OriginsDataBase,
    ],
    data() {
        return {
            products: [],
            categories: [],
            units: [],
            origins: [],

            selectedCategoryId: null,
            selectedByCategory: false,
            selectedBySearchBar: false,

            search: '',
            //searchResults: [],

            selectedBaskets: [],
            internalCounters: [],

            showAddingModal: false,
            productAdded: {},
            productToAddWithDetails: {},
            focusOnSearchBar: false,
        }
    },

    created() {
        events.$on('internal-counters', this.setInternalCounters);
        this.fetchProducts();
        this.fetchCategories();
        this.fetchUnits();
        this.fetchOrigins();

        this.getInternalCounters();
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
    }
}
</script>
