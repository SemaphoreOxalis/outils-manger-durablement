<template>
    <div class="d-flex">
        <action-confirmation v-if="showConfirmationModal"
                            :action="this.action"
                            :affected-basket="this.affectedBasket"
                            :affected-basket-index="this.affectedBasketIndex"
                            @exit-without-action="showConfirmationModal = false"
                            @delete="deleteBasket"
                            @clear="clearBasket">
        </action-confirmation>

        <grouped-action-pop-up v-if="showGroupedActionModal"
                               :affected-basket-index="this.affectedBasketIndex"
                               @francify-basket="francifyBasket"
                               @exit-without-grouped-action="showGroupedActionModal = false">
        </grouped-action-pop-up>

        <basket-item v-for="(basket, i) in this.baskets"
                     v-bind:key="basket.id"
                     v-bind:basket="basket"
                     v-bind:index="i"
                     v-bind:origins="origins"
                     v-bind:categories="categories"
                     v-bind:product-to-add="productToAdd"
                     @save-baskets="saveBasketsToLocalStorage"
                     @do-stuff="showGroupedActionPopUp"
                     @copy-basket="copyBasket"
                     @clear-basket="showConfirmationPopUp"
                     @delete-basket="showConfirmationPopUp">
        </basket-item>
        <div>
            <button @click="addBasket()">+</button>
        </div>
    </div>
</template>

<script>
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
import groupedActionFilters from "../../helpers/carbon-simulation/groupedActionFilters";
import basketsListHelper from "../../helpers/carbon-simulation/component-specific/basketsListHelper";

const BasketItem = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketItem" */
    './BasketItem'
    );
const ActionConfirmation = () => import(
    /* webpackChunkName: "js/carbon-simulation/ActionConfirmation" */
    './ActionConfirmation'
    );
const GroupedActionPopUp = () => import(
    /* webpackChunkName: "js/carbon-simulation/GroupedActionPopUp" */
    './GroupedActionPopUp'
    );

export default {
    components: {
        BasketItem,
        ActionConfirmation,
        GroupedActionPopUp
    },
    mixins: [
        LocalStorageHelper,
        groupedActionFilters,
        basketsListHelper,
    ],
    props: {
        origins: Array,
        categories: Array,
        productToAdd: Object,
    },
    data() {
        return {
            baskets: [],

            showConfirmationModal: false,
            action: '',
            affectedBasket: {},
            affectedBasketIndex: -1,

            showGroupedActionModal: false,
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
        if (localStorage.hasOwnProperty('baskets')) {
            this.baskets = JSON.parse(localStorage.getItem('baskets'));
        } else {
            this.addBasket('votre panier');
        }
        events.$on('send-selected-baskets', this.sendSelectedBaskets);
    },
    mounted() {
        events.$emit('get-internal-counters');
    },
    methods: {
        sendSelectedBaskets() {
            this.$emit('selected-baskets', this.selectedBaskets);
        },

        showConfirmationPopUp(basket, index, action) {
            this.action = action;
            this.affectedBasket = basket;
            this.affectedBasketIndex = index;
            this.showConfirmationModal = true;
        },
        showGroupedActionPopUp(index) {
            this.affectedBasketIndex = index;
            this.showGroupedActionModal = true;
        },
    }
}
</script>

<style>

</style>
