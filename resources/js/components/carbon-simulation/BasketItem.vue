<template>
    <div class="flex-grow-1">
        <div>
            <input type="checkbox" v-model="basket.isSelected"> Ajouter dans ce panier
        </div>
        <div class="flex">
            <h5 class="text-center">
                <input v-model="basket.name"
                       @change="saveBasket"
                       class="custom-input browser-default align-self-end"
                       type="text"
                       required>
            </h5>
            <button @click="copyBasket">copy</button>
        </div>

        <div class="flex">
            <input type="text"
                   v-model="search"
                   placeholder="Chercher dans le panier"
                   @input="searchInBasket">
            <button v-if="containsProducts" @click="">Do</button>
            <button v-if="containsProducts" @click="clearBasket">Empty</button>
            <button @click="deleteBasket">X</button>
        </div>

        <div class="right col-12">
            <draggable v-model="basket.products"
                       class="dragArea list-group h-100"
                       :group="{ name: 'draggableProducts', pull: false }"
                       @change="saveBasket"
                       filter=".ignore-draggable"
                       :preventOnFilter="false"
                       :animation="150">

                <basket-product v-for="(product, i) in filteredProducts"
                                v-bind:key="product.id"
                                v-bind:product="product"
                                v-bind:basket-id="basket.id"
                                v-bind:index="i"
                                v-bind:origins="origins"
                                @save-changes="saveBasket"
                                @remove-product="removeProduct">
                </basket-product>

            </draggable>

            <basket-result :products="basket.products"
                           :basket-id="basket.id">
            </basket-result>
        </div>
    </div>

</template>

<script>
import searchBar from "../../helpers/carbon-simulation/searchBar";

const BasketProduct = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketProduct" */
    './BasketProduct'
    );
const BasketResult = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketResult" */
    './BasketResult'
    );
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );

    export default {
        components: {
            BasketProduct,
            BasketResult,
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
            },
            containsProducts: function() {
                return this.basket.products.length > 0;
            },
        },
        created() {
            events.$on('get-internal-counters', this.sendInternalCounter);
        },
        mounted() {
            this.sendInternalCounter();
        },
        methods: {
            addProduct(product) {
                let tempProd = { ...product};
                tempProd.id = ('basket-product-' + (this.productCounter + 1));
                this.basket.products.unshift(tempProd);
                this.sendInternalCounter();
                this.saveBasket();
            },
            removeProduct(productIndex) {
                this.basket.products.splice(productIndex, 1);
                this.saveBasket();
            },

            copyBasket() {
                this.$emit('copy-basket', this.basket, this.index);
            },
            deleteBasket() {
                this.$emit('delete-basket', this.basket, this.index, 'delete');
            },
            clearBasket() {
                this.$emit('clear-basket', this.basket, this.index, 'clear');
            },
            saveBasket() {
                this.$emit('save-baskets');
            },

            searchInBasket() {
                this.$emit('search-in-basket', this.search, this.index);
            },

            sendInternalCounter() {
                events.$emit('internal-counters', this.index, this.productCounter);
            },
        }
    }
</script>

<style>

</style>
