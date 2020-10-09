<template>
    <div class="container">
        <div class="search mb-4">
            <input type="text" v-model="search" placeholder="Rechercher un produit.." v-on:input="filterProductsBySearch" style="max-width: 350px;">
            <button @click="search=''" style="display: inline-block;">X</button>
        </div>

        <div class="row">

            <div class="left col-2">
                <h3>Catégories</h3>
                <div v-for="category in categories"
                     :class="getClasses(category.id)"
                     :key="category.id"
                     @click="filterProductsByCategory(category.id)">

                    {{ category.name }}

                </div>
            </div>

            <div class="middle col-4">
                <h3>Produits</h3>
                <draggable v-model="filteredProducts"
                           class="dragArea list-group"
                           :group="{ name: 'draggableProducts', pull: 'clone', put: false }"
                           :sort="false"
                           chosenClass="moving"
                           :clone="addProduct">

                    <div v-for="product in filteredProducts"
                         class="list-group-item product"
                         :key="product.id">

                        {{ product.id }} : {{ product.name }}

                    </div>

                </draggable>
            </div>

            <div class="right col-6">
                <h3>Liste de courses</h3>
                <draggable v-model="shoppingList"
                           class="dragArea list-group h-100"
                           group="draggableProducts"
                           :animation="150">

                    <div v-for="product in shoppingList"
                         class="list-group-item product"
                         :key="product.id">

                        <p>
                            {{ product.id }} : {{ product.name }} -
                            <input type="number" :id="'shopping-item-' + product.id" placeholder="1"> {{
                                product.unit.unit }}
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
import draggable from 'vuedraggable';
import ProductsDataBase from "../../helpers/carbon-simulation/database/ProductsDataBase";
import CategoriesDataBase from "../../helpers/carbon-simulation/database/CategoriesDataBase";
import UnitsDataBase from "../../helpers/carbon-simulation/database/UnitsDataBase";
import OriginsDataBase from "../../helpers/carbon-simulation/database/OriginsDataBase";

export default {
    components: {
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

                return this.products.filter(product => {
                    let productName = this.areWeLookingForBeefAndEggs(product.name);
                    if(product.comment) {
                        let productComment = this.areWeLookingForBeefAndEggs(product.comment);
                        return this.searchByProduct(productName, this.search) || this.searchByComment(productComment, this.search);
                    }
                    return this.searchByProduct(productName, this.search);
                });
            }

            return this.products;
        }
    },

    created() {
        this.fetchProducts();
        this.fetchCategories();
        this.fetchUnits();
        this.fetchOrigins();
    },

    methods: {
        filterProductsByCategory(categoryId) {
            this.selectedCategoryId = categoryId;
            this.toggleSelectedBy();
        },
        filterProductsBySearch() {
            this.selectedCategoryId = null;
            this.toggleSelectedBy();
        },
        toggleSelectedBy() {
            this.selectedBySearchBar = !this.selectedBySearchBar;
            this.selectedByCategory = !this.selectedByCategory;
        },



        getClasses(categoryId) {
            return [
                'list-group-item',
                'category',
                categoryId === this.selectedCategoryId ? 'selected' : ''
            ];
        },


        addProduct({id, name, unit, category}) {
            return {
                oldId: id,
                name: name,
                unit: unit,
                category: category,
                origin: this.origins[2] // France par défaut
            }
        },
    }
}
</script>

<style>
.left {
    border: 1px black solid;
}

.middle {
    border: 1px black solid;
}

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

.category {
    cursor: pointer;
}

.selected {
    background-color: lime;
}

input {
    width: 50px;
}
</style>
