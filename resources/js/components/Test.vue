<template>
    <div class="container">
        <div class="row">

            <div class="left col-6">
                <h3>Produits</h3>
                <draggable v-model="products"
                           class="dragArea list-group"
                           :group="{ name: 'draggableProducts', pull: 'clone', put: false }"
                           :sort="false"
                           :clone="addProduct">

                    <div v-for="(product, index) in products"
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

                    <div v-for="(product, index) in shoppingList"
                         class="list-group-item product"
                         :key="product.id">

                        <p>
                            {{ product.id }} : {{ product.name }} -
                            <input type="number" :id="'shopping-item-' + product.id" placeholder="1"> {{ product.unit.unit }}
                        </p>
                        <p>
                            Origine :
                            <select @change="updateOrigin">
                                <option v-for="origin in origins"
                                        :value="origin.from"
                                        :key="origin.id"
                                        :selected="origin.from === 'France' ? 'selected' : ''">
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
                shoppingList: []
            }
        },

        created() {
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
                console.log(this.origins);
            },
            addProduct({id, name, unit, category}) {
                return {
                    id: id,
                    name: name,
                    unit: unit,
                    category: category,
                    origin: 'France'
                }
            },
            updateOrigin(value) {
                console.log(value.target.selectedOptions[0].value);

            }
        }
    }
</script>

<style scoped>
    .left {
        border: 1px black solid;
    }

    .right {
        border: 1px black solid;
        min-height: 100px;
    }

    .product {
        cursor: grab;
    }

    input {
        width: 50px;
    }
</style>
