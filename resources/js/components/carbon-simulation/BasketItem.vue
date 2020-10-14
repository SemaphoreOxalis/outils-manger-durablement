<template>
    <div>
        <div>
            <input type="checkbox" v-model="isSelected"> Ajouter dans ce panier
        </div>
        <h5 class="text-center">{{ basket.name }}</h5>
        <div class="right col-12">
            <draggable v-model="products"
                       class="dragArea list-group h-100"
                       group="draggableProducts"
                       :animation="150">

                <basket-product v-for="(product, i) in this.products"
                                v-bind:key="i"
                                v-bind:product="product"
                                v-bind:index="i"
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
                productCounter: 0,
                id: null,
                isSelected: false,
            }
        },
        created() {
            this.isSelected = this.basket.isSelected;
            this.id = this.basket.id;
            this.refreshCounter();
            this.sendInternalCounter();
            events.$on('refresh-counters', this.refreshCounter);
            events.$on('increment-counters', this.incrementCounter);
            events.$on('add-products-to-selected-baskets', this.addProduct);
            events.$on('get-internal-counters', this.sendInternalCounter);
        },
        methods: {
            refreshCounter() {
                if (this.products.length > 0) {
                    this.productCounter = Math.max(...this.products.map(product => product.id));
                } else {
                    this.productCounter = 0;
                }
            },
            incrementCounter() {
                this.productCounter++;
            },
            addProduct(product) {
                this.refreshCounter();

                if (this.isSelected) {
                    this.incrementCounter();
                    product.id = this.productCounter;
                    this.products.push(product);
                    this.sendInternalCounter();
                    setTimeout(() => {
                        console.log(this.products[this.products.length - 1].id);
                    }, 1000);
                }
            },
            remove(productIndex) {
                this.products.splice(productIndex, 1);
                this.refreshCounter();
                this.sendInternalCounter();
            },
            sendInternalCounter() {
                this.refreshCounter();
                events.$emit('internal-counters', this.id, this.productCounter);
            }
        }
    }
</script>

<style>

</style>
