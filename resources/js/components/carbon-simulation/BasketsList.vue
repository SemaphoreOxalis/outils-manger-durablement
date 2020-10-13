<template>
    <div>
        <basket-item v-for="(basket, index) in baskets"
                     v-bind:key="basket.id"
                     v-bind:basket="basket"
                     v-bind:index="index"
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
            counter: 0,
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
        this.baskets.push({
            id: this.counter,
            name: 'panier ' + this.counter,
            products: [],
            selected: true,
        });
        events.$on('send-selected-baskets', this.sendSelectedBaskets);
    },
    methods: {
        sendSelectedBaskets() {
            this.$emit('selected-baskets', this.selectedBaskets);
        }
    }
}
</script>

<style>

</style>
