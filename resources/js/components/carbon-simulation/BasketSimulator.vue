<template>
    <div class="container">
        <div class="search mb-4">
            <input type="text" v-model="search" placeholder="Rechercher un produit.." v-on:input="filterProductsBySearch" style="max-width: 350px;">
            <button @click="search=''" style="display: inline-block;">X</button>
        </div>

        <div class="flex">

            <product-list v-bind:categories="this.categories"
                          v-bind:origins="this.origins"
                          v-bind:search="this.search"
                          v-bind:counter="this.counter"
                          v-bind:filtered-products="this.filteredProducts"
                          v-bind:selected-category-id="this.selectedCategoryId"
                          v-bind:selected-by-category="this.selectedByCategory"
                          v-bind:selected-by-search-bar="this.selectedBySearchBar"
                          @filter-products-by-category="filterProductsByCategory"
                          @add-product-to-basket="addProductToBasket"
                          @increment-counter="incrementCounter"
            >
            </product-list>

            <div class="right col-6">
                <h3>Liste de courses</h3>
                <draggable v-model="shoppingList"
                           class="dragArea list-group h-100"
                           group="draggableProducts"
                           :animation="150">

                    <div v-for="(product,index) in shoppingList"
                         class="list-group-item product"
                         :key="product.id">

                        <p>
                            {{ product.name }} - <small>{{ product.comment }}</small>
                            <button @click="removeProduct(index)" class="trash-icon" style="display: inline-block;">X</button>
                            <input type="number" :id="'shopping-item-' + product.id" placeholder="1"> {{ product.unit.unit }}
                        </p>
                        <p>
                            Origine :
                            <select v-model="product.origin">
                                <option v-for="origin in origins"
                                        v-bind:value="origin">
                                    {{ origin.from }}
                                </option>
                            </select>
                        </p>

                    </div>

                </draggable>
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
const ProductList = () => import(
    /* webpackChunkName: "js/carbon-simulation/ProductList" */
    './ProductList'
    );
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );

export default {
    components: {
        ProductList,
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
            counter:0,
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

                return this.searchWithSearchBar();
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

        refreshCounter() {
            if (this.shoppingList.length > 0) {
                // inspiré de www.danvega.dev/blog/2019/03/14/find-max-array-objects-javascript
                // Plus efficace qu'un loop basique
                this.counter = Math.max(...this.shoppingList.map(product => product.id));
            } else {
                this.counter = 0;
            }
        },

        addProductToBasket(product) {
            this.refreshCounter();
            this.incrementCounter();
            let shoppingListProduct = {...product, origin: this.origins[2]};
            shoppingListProduct.id = this.counter;
            this.shoppingList.push(shoppingListProduct);
        },

        removeProduct(index) {
            this.shoppingList.splice(index, 1);
            this.refreshCounter();
        },
        incrementCounter() {
            console.log('yo');
            this.counter++;
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
    background-color: #1f6fb2;
}

input {
    width: 50px;
}

select {
    display: inline-block;
    max-width: 200px;
}
</style>
