<template>
    <div class="container">
        <div class="row">

            <div class="left col-5">
                <h3>Produits</h3>
                <draggable v-model="products"
                           class="dragArea list-group"
                           :group="{ name: 'draggableProducts', pull: 'clone', put: false }"
                           @change="log"
                           :sort="false">

                    <div v-for="(product, index) in products"
                         class="list-group-item product"
                         :key="product.id">
                        {{ index }} : {{ product.name }}
                    </div>

                </draggable>
            </div>

            <div class="right col-5">
                <h3>Liste de courses</h3>
                <draggable v-model="shoppingList"
                           class="dragArea list-group h-100"
                           group="draggableProducts"
                           @change="log"
                           :animation="150">

                    <div v-for="(product, index) in shoppingList"
                         class="list-group-item product"
                         :key="product.id">
                        {{ index }} : {{ product.name }} - qté {{ product.unit.unit }}
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
                shoppingList: []
            }
        },

        created() {
            this.fetch();
        },

        methods: {
            fetch() {
                axios.get('/api/test').then((response) => {
                    this.products = response.data;
                });
            },
            log(event) {
                console.log(event);
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
</style>
