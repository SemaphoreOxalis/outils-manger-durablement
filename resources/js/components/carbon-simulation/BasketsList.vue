<template>
    <div class="d-flex">
        <basket-item v-for="(basket, i) in this.baskets"
                     v-bind:key="basket.id"
                     v-bind:basket="basket"
                     v-bind:index="i"
                     v-bind:origins="origins"
                     v-bind:product-to-add="productToAdd"
                     @copy-basket="copyBasket"
                     @delete-basket="deleteBasket">
        </basket-item>
        <div>
            <button @click="addBasket()">+</button>
        </div>
    </div>
</template>

<script>
const BasketItem = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketItem" */
    './BasketItem'
    );

export default {
    components: {
        BasketItem
    },
    props: {
        origins: Array,
        productToAdd: Object,
    },
    data() {
        return {
            baskets: [],
        }
    },
    computed: {
        selectedBaskets: function () {
            return this.baskets.filter(basket => {
                return basket.isSelected === true;
            });
        },
        basketsCounter: function() {
            if (this.baskets.length > 0) {
                return Math.max(...this.baskets.map(basket => {
                    return basket.id.substring(7); // "basket_" id prefix is 7 characters long
                }));
            } else {
                return 0;
            }
        }
    },
    created() {
        this.addBasket('votre panier');
        events.$on('send-selected-baskets', this.sendSelectedBaskets);
    },
    methods: {
        sendSelectedBaskets() {
            this.$emit('selected-baskets', this.selectedBaskets);
        },

        addBasket(name = '') {
            this.baskets.push(this.prepareBasketToAdd(name));
        },
        deleteBasket(basketIndex) {
            this.baskets.splice(basketIndex, 1);
        },
        copyBasket(basket, index) {
            let tempBasket = JSON.parse(JSON.stringify(basket));
            this.baskets.splice(index + 1, 0, this.prepareBasketToAdd('Copie de ' + tempBasket.name, tempBasket.products));
        },

        prepareBasketToAdd(name = '', products = []) {
            if(name === '') {
                name = 'panier ' + (this.basketsCounter + 1);
            }
            return {
                id: 'basket_' + (this.basketsCounter + 1),
                name: name,
                products: products,
                isSelected: true,
            };
        }
    }
}
</script>

<style>

</style>
