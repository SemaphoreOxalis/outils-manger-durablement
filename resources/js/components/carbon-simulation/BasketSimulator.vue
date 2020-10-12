<template>
    <div class="container">
        <add-product-pop-up v-if="showAddingModal"
                            :product="this.productAdded"
                            :origins="this.origins"
                            @add="addProductToBasket"></add-product-pop-up>

        <div class="search mb-4">
            <search-bar :products="this.products"
                        @search-complete="filterProductsBySearchBar"
                        @product-chosen="showAddingProductModal">
            </search-bar>
        </div>

        <div class="row">

            <product-list class="col-4"
                          v-bind:categories="this.categories"
                          v-bind:origins="this.origins"
                          v-bind:search="this.search"
                          v-bind:counter="this.counter"
                          v-bind:filtered-products="this.filteredProducts"
                          v-bind:selected-category-id="this.selectedCategoryId"
                          v-bind:selected-by-category="this.selectedByCategory"
                          v-bind:selected-by-search-bar="this.selectedBySearchBar"
                          @filter-products-by-category="filterProductsByCategory"
                          @add-product-to-basket="showAddingProductModal"
                          @increment-counter="incrementCounter">
            </product-list>


            <div class="col-8">
                <h3>Liste de courses</h3>
                <div class="right col-12">
                    <draggable v-model="shoppingList"
                               class="dragArea list-group h-100"
                               group="draggableProducts"
                               :animation="150"
                               @change="log">

                        <div v-for="(product,index) in shoppingList"
                             class="list-group-item product"
                             :key="product.id">

                            <p>
                                {{ product.name }} - <small>{{ product.comment }}</small>
                                <button @click="removeProduct(index)" class="trash-icon" style="display: inline-block;">
                                    X
                                </button>
                            </p>
                            <input type="number" v-model="product.amount" min="0" style="width: 100px;"> {{ product.unit.unit }} -
                            <input type="number" v-model="product.price" min="0" style="width: 100px;"> € -
                            <select v-model="product.origin" style="width: 100px;">
                                <option v-for="origin in origins"
                                        v-bind:value="origin">
                                    {{ origin.from }}
                                </option>
                            </select>


                        </div>

                    </draggable>
                </div>
            </div>
        </div>
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
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );

export default {
    components: {
        SearchBar,
        ProductList,
        AddProductPopUp,
        draggable
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

            shoppingList: [],

            selectedCategoryId: null,
            selectedByCategory: false,
            selectedBySearchBar: false,

            search: '',
            searchResults: [],

            counter:0,

            showAddingModal: false,
            productAdded: {},
        }
    },

    computed: {
        filteredProducts() {
            if(this.selectedByCategory && this.selectedCategoryId != null) {
                return this.products.filter(product => {
                    return product.category.id === this.selectedCategoryId;
                });
            }

            if(this.selectedBySearchBar) {
                this.selectedCategoryId = null;

                return this.searchResults;
            }

            return this.products;
        }
    },

    created() {
        this.fetchProducts();
        this.fetchCategories();
        this.fetchUnits();
        this.fetchOrigins();

        this.refreshCounter();
    },

    methods: {
        filterProductsByCategory(categoryId) {
            this.selectedCategoryId = categoryId;
            this.selectedBySearchBar = false;
            this.selectedByCategory = true;
        },
        filterProductsBySearch() {
            this.selectedCategoryId = null;
            this.selectedBySearchBar = true;
            this.selectedByCategory = false;
        },
        filterProductsBySearchBar(results) {
            this.searchResults = results;
            this.filterProductsBySearch()
        },
        refreshCounter() {
            if (this.shoppingList.length > 0) {
                // inspiré de www.danvega.dev/blog/2019/03/14/find-max-array-objects-javascript
                // Plus efficace qu'un loop basique
                this.counter = Math.max(...this.shoppingList.map(product => product.id));
            } else {
                this.counter = 0;
            }
        },
        showAddingProductModal(product) {
            this.refreshCounter();
            this.incrementCounter();
            this.productAdded = product;
            this.showAddingModal = true;

        },
        addProductToBasket(product) {
            this.showAddingModal = false
            product.id = this.counter;
            this.shoppingList.push(product);
        },

        removeProduct(index) {
            this.shoppingList.splice(index, 1);
            this.refreshCounter();
        },
        incrementCounter() {
            this.counter++;
        },
        log: function(evt) {
            window.console.log(evt);
        }
    }
}
</script>

<style>
.right {
    border: 1px black solid;
    min-height: 100px;
}

.product {
    cursor: grab;
}

.moving {
    background-color: var(--main-color-darker);
    color: var(--light-grey);
}

input {
    width: 50px;
}

select {
    display: inline-block;
    max-width: 200px;
}
</style>
