<template>
    <div>
        <h3>{{ basket.name }}</h3>
        <div class="right col-12">
            <draggable v-model="products"
                       class="dragArea list-group h-100"
                       group="draggableProducts"
                       :animation="150">

                <basket-product v-for="(product, index) in products"
                                v-bind:key="product.id"
                                v-bind:product="product"
                                v-bind:index="index"
                                v-bind:origins="origins"
                                @remove-product="remove">
                </basket-product>

            </draggable>
        </div>
    </div>

</template>

<script>
const BasketProduct = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketProduct" */
    './BasketProduct'
    );
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );

    export default {
        components: {
            BasketProduct,
            draggable
        },
        props: {
            basket: Object,
            index: Number,
            origins: Array,
        },
        data() {
            return {
                products: [],
                counter: 0,
            }
        },
        created() {
            this.refreshCounter();
            events.$on('refresh-counters', this.refreshCounter);
            events.$on('increment-counters', this.incrementCounter);
            events.$on('add-products-to-selected-baskets', this.addProduct)
        },
        methods: {
            refreshCounter() {
                if (this.products.length > 0) {
                    this.counter = Math.max(...this.products.map(product => product.id));
                } else {
                    this.counter = 0;
                }
            },
            incrementCounter() {
                this.counter++;
            },
            addProduct(product) {
                if (this.basket.selected) {
                    this.products.push(product);
                }
            },
            remove(productIndex) {
                this.products.splice(productIndex, 1);
                this.refreshCounter();
            },
        }
    }
</script>

<style>

</style>
