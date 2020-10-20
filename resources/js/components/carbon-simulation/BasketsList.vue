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

        <basket-item v-for="(basket, i) in this.baskets"
                     v-bind:key="basket.id"
                     v-bind:basket="basket"
                     v-bind:index="i"
                     v-bind:origins="origins"
                     v-bind:product-to-add="productToAdd"
                     @save-baskets="saveBasketsToLocalStorage"
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

const BasketItem = () => import(
    /* webpackChunkName: "js/carbon-simulation/BasketItem" */
    './BasketItem'
    );
const ActionConfirmation = () => import(
    /* webpackChunkName: "js/carbon-simulation/ActionConfirmation" */
    './ActionConfirmation'
    );

export default {
    components: {
        BasketItem,
        ActionConfirmation
    },
    mixins: [
        LocalStorageHelper,
    ],
    props: {
        origins: Array,
        productToAdd: Object,
    },
    data() {
        return {
            baskets: [],

            showConfirmationModal: false,
            action: '',
            affectedBasket: {},
            affectedBasketIndex: -1,
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

        addBasket(name = '') {
            this.baskets.push(this.prepareBasketToAdd(name));
            this.saveBasketsToLocalStorage();
        },
        copyBasket(basket, index) {
            let tempBasket = JSON.parse(JSON.stringify(basket));
            this.baskets.splice(index + 1, 0, this.prepareBasketToAdd('Copie de ' + tempBasket.name, tempBasket.products));
            this.saveBasketsToLocalStorage();
        },
        deleteBasket(basketIndex) {
            this.showConfirmationModal = false;
            this.baskets.splice(basketIndex, 1);
            if (this.baskets.length === 0) {
                this.deleteBasketsFromLocalStorage();
            } else {
                this.saveBasketsToLocalStorage();
            }
            events.$emit('get-internal-counters');
        },
        clearBasket(basketIndex) {
            this.showConfirmationModal = false;
            this.baskets[basketIndex].products = [];
            this.saveBasketsToLocalStorage();
            events.$emit('get-internal-counters');
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
        },
        showConfirmationPopUp(basket, index, action) {
            this.action = action;
            this.affectedBasket = basket;
            this.affectedBasketIndex = index;
            this.showConfirmationModal = true;
        },


    }
}
</script>

<style>

</style>
