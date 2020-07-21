<template>
    <div class="container">
        <div class="search mb-4">
            <input type="" placeholder="search">
        </div>

        <div class="row">

            <div class="left col-2">
                <h3>Catégories</h3>
                <div v-for="category in categories"
                     :class="getClasses(category.id)"
                     :key="category.id"
                     @click="filterProducts(category.id)">

                    {{ category.name }}

                </div>
            </div>

            <div class="middle col-4">
                <h3>Produits</h3>
                <draggable v-model="filteredProducts"
                           class="dragArea list-group"
                           :group="{ name: 'draggableProducts', pull: 'clone', put: false }"
                           :sort="false"
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
    import draggable from 'vuedraggable'

    export default {
        components: {
            draggable
        },

        data() {
            return {
                products: [],
                origins: [],
                categories: [],
                shoppingList: [],
                selectedCategoryId: null
            }
        },

        computed: {
            filteredProducts() {
                if(this.selectedCategoryId === null) {
                    return this.products;
                } else {
                    return this.products.filter(product => {
                        return product.category.id === this.selectedCategoryId;
                    });
                }
            }
        },

        created() {
            this.fetchCategoriesData();
            this.fetchProductsData();
            this.fetchOriginsData();
        },

        methods: {
            fetchProductsData() {
                axios.get('/api/products').then((response) => {
                    this.products = response.data;
                });
            },
            fetchOriginsData() {
                axios.get('/api/origins').then((response) => {
                    this.origins = response.data;
                });
            },
            fetchCategoriesData() {
                axios.get('/api/categories').then((response) => {
                    this.categories = response.data;
                });
            },
            addProduct({id, name, unit, category}) {
                return {
                    id: id,
                    name: name,
                    unit: unit,
                    category: category,
                    origin: this.origins[2] // France
                }
            },
            filterProducts(categoryId) {
                this.selectedCategoryId = categoryId;
            },
            getClasses(categoryId) {
                return [
                    'list-group-item',
                    'category',
                    categoryId === this.selectedCategoryId ? 'selected' : ''
                ];
            }
        }
    }
</script>

<style scoped>
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
        /* TODO : grabbing when grabbing */
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
