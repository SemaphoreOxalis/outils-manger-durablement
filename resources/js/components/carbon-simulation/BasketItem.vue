<template>
    <div class="flex-grow-1">
        <div>
            <input type="checkbox" v-model="basket.isSelected"> Ajouter dans ce panier
        </div>
        <div class="flex">
            <h5 class="text-center">{{ basket.name }}</h5>
            <button @click="copyBasket">copy</button>
        </div>

        <input type="text"
               v-model="search"
               placeholder="Chercher dans le panier"
               @input="searchInBasket">

        <div class="flex">
            <button @click="deleteBasket">X</button>
        </div>
        <div class="right col-12">
            <draggable v-model="basket.products"
                       class="dragArea list-group h-100"
                       :group="{ name: 'draggableProducts', pull: false }"
                       :animation="150">

                <basket-product v-for="(product, i) in filteredProducts"
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
import searchBar from "../../helpers/carbon-simulation/searchBar";

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
        mixins: [
            searchBar
        ],
        props: {
            basket: Object,
            index: Number,
            origins: Array,
            productToAdd: Object,
        },
        data() {
            return {
                search: '',
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
            filteredProducts: function() {
                if (this.search) {
                    return this.searchWithSearchBar(this.basket.products);
                }
                return this.basket.products;
            },
            productCounter: function() {
                if (this.basket.products.length > 0) {
                    return Math.max(...this.basket.products.map(product => {
                        return product.id.substring(15); // "basket_product_" id prefix is 15 characters long
                    }));
                } else {
                    return 0;
                }
            }
        },
        created() {
            events.$on('get-internal-counters', this.sendInternalCounter);
        },
        methods: {
            addProduct(product) {
                let tempProd = { ...product};
                tempProd.id = ('basket_product_' + (this.productCounter + 1));
                this.basket.products.unshift(tempProd);
                this.sendInternalCounter();
            },
            removeProduct(productIndex) {
                this.basket.products.splice(productIndex, 1);
            },

            deleteBasket() {
                this.$emit('delete-basket', this.index);
            },
            copyBasket() {
                this.$emit('copy-basket', this.basket, this.index);
            },

            searchInBasket() {
                this.$emit('search-in-basket', this.search, this.index);
            },

            sendInternalCounter() {
                events.$emit('internal-counters', this.basket.id, this.productCounter);
            },
        }
    }
</script>

<style>

</style>
