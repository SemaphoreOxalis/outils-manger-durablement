<template>
    <div class="flex-grow-1">
        <div>
            <input type="checkbox" v-model="basket.isSelected"> Ajouter dans ce panier
        </div>
        <div class="flex">
            <h5 class="text-center">{{ basket.name }}</h5>
            <button @click="copyBasket">copy</button>
        </div>

        <div class="flex">
            <button @click="deleteBasket">X</button>
        </div>
        <div class="right col-12">
            <draggable v-model="basket.products"
                       class="dragArea list-group h-100"
                       group="draggableProducts"
                       :animation="150">

                <basket-product v-for="(product, i) in basket.products"
                                v-bind:key="product.id"
                                v-bind:product="product"
                                v-bind:index="i"
                                v-bind:origins="origins"
                                @remove-product="removeProduct">
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
            productToAdd: Object,
        },
        data() {
            return {
                // ownBasket: {
                //     id: -1,
                //     name: '',
                //     products: [],
                //     isSelected: false,
                // },
            }
        },
        watch: {
            productToAdd(newProduct) {
                if(this.basket.isSelected) {
                    this.addProduct(newProduct);
                }
            }
        },
        computed: {
            productCounter: function() {
                if (this.basket.products.length > 0) {
                    return Math.max(...this.basket.products.map(product => product.id));
                } else {
                    return 0;
                }
            }
        },
        created() {
            // this.id = this.basket.id;
            // this.name = this.basket.name;
            // this.products = this.basket.products;
            // this.isSelected = this.basket.isSelected;
            //this.ownBasket = this.basket;
            //events.$on('add-products-to-selected-baskets', this.addProduct);
        },
        // destroyed() {
        //     events.$off('add-products-to-selected-baskets', this.addProduct);
        // },
        methods: {
            addProduct(product) {
                let tempProd = { ...product};
                tempProd.id = (this.productCounter + 1);
                console.log('adding from ' + this.basket.name + ' - productId = ' + tempProd.id);
                this.basket.products.push(tempProd);
            },
            removeProduct(productIndex) {
                this.basket.products.splice(productIndex, 1);
            },
            deleteBasket() {
                //this.ownBasket.isSelected = false;
                this.$emit('delete-basket', this.index);
            },
            copyBasket() {
                this.$emit('copy-basket', this.basket);
            },
            getRandomId() {
                return Date.now() + Math.random();
            },
        }
    }
</script>

<style>

</style>
