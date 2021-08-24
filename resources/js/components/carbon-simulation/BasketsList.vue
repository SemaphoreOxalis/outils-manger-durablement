<template>
    <div>
        <div class="baskets-list">
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
                         v-bind:previous-basket="previousBasket(i)"
                         v-bind:first-basket="firstBasket"
                         v-bind:is-selected="isSelected(i)"
                         v-bind:compare-to-previous-basket="compareToPreviousBasket"
                         @save-baskets="saveBasketsToLocalStorage"
                         @do-stuff="showGroupedActionPopUp"
                         @copy-basket="copyBasket"
                         @clear-basket="showConfirmationPopUp"
                         @delete-basket="showConfirmationPopUp">
            </basket-item>

            <div class="basket">
                <a @click="addBasket()" class="add-basket flex-horizontal">
                    <div class="btn-ico"></div>
                    <div class="add-basket-text spacer-left">{{ add_new_basket }}</div>
                </a>
            </div>
        </div>

        <div class="custom-control switch center">
            <label>
                {{ switch_labels.compare_to_first }} <input v-model="compareToPreviousBasket" type="checkbox" class="custom-control-input"><span class="lever"></span> {{ switch_labels.compare_to_previous }}
            </label>
        </div>

        <button class="button ml-auto"
                @click="exportBaskets">
            <i class="icon mr-2"></i>{{ btn.export_btn }}
        </button>
    </div>
</template>

<script>
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
import groupedActionFilters from "../../helpers/carbon-simulation/groupedActionFilters";
import basketsListHelper from "../../helpers/carbon-simulation/component-specific/basketsListHelper";
import BasketSimulatorText from "../../../texts/carbonSimulator/BasketSimulatorText";
import DateFormatter from "../../helpers/DateFormatter";
import ExportHelper from "../../helpers/ExportHelper";
import DataBase from "../../helpers/DataBase";

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
        BasketSimulatorText,
        DateFormatter,
        ExportHelper,
        DataBase
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
            compareToPreviousBasket: false,

            export: {},
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
        },
        firstBasket: function () {
            return this.baskets[0];
        },
    },
    created() {
        this.eraseLocalStorageIfVersionOlderThan(App.version ,'basketSim');
        if (localStorage.hasOwnProperty('baskets')) {
            this.baskets = JSON.parse(localStorage.getItem('baskets'));
        } else {
            this.addBasket('votre liste');
        }
        events.$on('send-selected-baskets', this.sendSelectedBaskets);
        events.$on('save-baskets-results', this.saveBasketsResults);
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

        previousBasket(index) {
            return index > 0 ? this.baskets[index - 1] : null;
        },

        isSelected(i) {
            if(this.baskets[i]) {
                return this.baskets[i].isSelected;
            }
        }
    }
}
</script>
