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
        // selectedBaskets: function () {
        //     return this.baskets.filter(basket => {
        //         return basket.selected === true;
        //     });
        // },
        basketsCounter: function() {
            if (this.baskets.length > 0) {
                return Math.max(...this.baskets.map(basket => basket.id));
            } else {
                return 0;
            }
        }
    },
    created() {
        this.addBasket('votre panier');
        // events.$on('send-selected-baskets', this.sendSelectedBaskets);
    },
    methods: {
        // sendSelectedBaskets() {
        //     this.$emit('selected-baskets', this.selectedBaskets);
        // },

        addBasket(name = '', products = []) {
            if(name === '') {
                name = 'panier ' + (this.basketsCounter + 1);
            }
            this.baskets.push({
                id: (this.basketsCounter + 1),
                name: name,
                products: products,
                isSelected: true,
            })
        },
        deleteBasket(basketIndex) {
            this.baskets.splice(basketIndex, 1);
        },
        copyBasket(basket) {
            //let tempBasket = { ...basket};
            let tempBasket = JSON.parse(JSON.stringify(basket));
            //tempBasket.products = [...basket.products];
            this.addBasket('Copie de ' + tempBasket.name, tempBasket.products);
        }
    }
}
</script>

<style>

</style>
