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
                           :clone="addProductByDrag">

                    <div v-for="product in filteredProducts"
                         class="list-group-item product"
                         :key="product.id">
                        {{ product.name }}
                        <small>{{ product.comment }}</small>
                        <button @click="addProductToBasket(product)">+</button>
                    </div>

                </draggable>
            </div>

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
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );

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

        getClasses(categoryId) {
            return [
                'list-group-item',
                'category',
                categoryId === this.selectedCategoryId ? 'selected' : ''
            ];
        },


        addProductByDrag({id, name, comment, unit, category, unit_id, category_id, emissionFactor}) {
            this.counter++;
            return {
                id: this.counter,
                name: name,
                comment: comment,
                unit: unit,
                category: category,
                origin: this.origins[2], // France par défaut
                unit_id: unit_id,
                category_id: category_id,
                emissionFactor: emissionFactor,
            }
        },

        addProductToBasket(product) {
            this.counter++;
            let shoppingListProduct = {...product, origin: this.origins[2]};
            shoppingListProduct.id = this.counter;
            this.shoppingList.push(shoppingListProduct);
        },

        removeProduct(index) {
            this.shoppingList.splice(index, 1);
            this.refreshCounter();
        }
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

select {
    display: inline-block;
    max-width: 200px;
}
</style>
