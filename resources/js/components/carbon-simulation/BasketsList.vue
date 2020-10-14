<template>
    <div class="row">
        <basket-item class="col"
                     v-for="(basket, i) in baskets"
                     v-bind:key="basket.id"
                     v-bind:basket="basket"
                     v-bind:index="i"
                     v-bind:origins="origins">
        </basket-item>
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
    },
    data() {
        return {
            baskets: [],
            basketsCounter: 0,
        }
    },
    computed: {
        selectedBaskets: function () {
            return this.baskets.filter(basket => {
                return basket.selected === true;
            });
        }
    },
    created() {
        this.refreshCounter();
        this.baskets.push({
            id: this.basketsCounter,
            name: 'votre panier',
            products: [],
            isSelected: true,
        });
        this.baskets.push({
            id: this.basketsCounter + 1,
            name: 'panier 1',
            products: [],
            isSelected: false,
        });
        events.$on('send-selected-baskets', this.sendSelectedBaskets);
    },
    methods: {
        sendSelectedBaskets() {
            this.$emit('selected-baskets', this.selectedBaskets);
        },
        refreshCounter() {
            if (this.baskets.length > 0) {
                this.basketsCounter = Math.max(...this.baskets.map(basket => basket.id));
            } else {
                this.basketsCounter = 0;
            }
        },
        incrementCounter() {
            this.basketsCounter++;
        },
    }
}
</script>

<style>

</style>
