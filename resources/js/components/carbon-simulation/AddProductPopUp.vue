<template>
    <transition name="modal" class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-mask">
            <div class="modal-wrapper modal-dialog modal-dialog-centered">
                <div class="modal-container modal-content" ref="modal" @keydown.enter="onEnter">
                    <div class="modal-header">
                        <small>{{ add_popup.help }}</small>

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="exit">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <h5 class="modal-title" id="exampleModalLabel">{{ add_popup.you_are_adding }} <strong>{{ this.productToAdd.name }}</strong></h5>
                        <div class="results-row">{{ add_popup.by_this_amount }}
                            <input v-model="productToAdd.amount" type="number" min="0" required="required" class="number-field custom-input browser-default input" ref="qty"> <small>{{ this.productToAdd.unit.unit }}</small>
                        </div>
                        <div class="results-row">
                            pour un montant <strong>TOTAL</strong> de <input v-model="productToAdd.price" type="number" min="0" required="required" class="number-field custom-input browser-default input"> €
                        </div>
                        <div class="results-row">
                            {{ add_popup.from }}
                            <select v-model="productToAdd.origin" id="origine-4" class="custom-select input" name="origine-4" data-name="Origine 4">
                                <option v-for="origin in origins"
                                        v-bind:value="origin">
                                    {{ origin.from }}
                                </option>
                            </select>
                        </div>
                        <div class="results-row">{{ add_popup.in_baskets }}
                            <span v-for="(basket, i) in selectedBaskets">
                                <span v-if="i == selectedBaskets.length - 1"><strong>{{ basket.name }}</strong></span>
                                <span v-else><strong>{{ basket.name }}</strong>,</span>
                            </span>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button :disabled="isInputInvalid"
                                class="modal-default-button button"
                                @click="add">
                            {{ add_popup.ok }}
                        </button>
                        <button class="modal-default-button button alter"
                                @click="exit">
                            {{ add_popup.cancel }}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import BasketSimulatorText from "../../../texts/carbonSimulator/BasketSimulatorText";
export default {
    mixins: [
        BasketSimulatorText
    ],
    props: {
        product: Object,
        origins: Array,
        selectedBaskets: Array,
    },
    data() {
        return {
            productToAdd: {},
        }
    },
    computed: {
        isInputInvalid: function () {
            if (this.productToAdd.amount < 0.01) {
                return true;
            }
            return false
        }
    },
    created() {
        this.productToAdd = {...this.product, productId: this.product.id, id: 'product_to_add_' + this.product.id, amount: '', price: '', origin: this.origins[2]};
        let self = this;
        Vue.nextTick().then(function () {
            self.$refs.qty.focus();
        });
    },
    methods: {
        add() {
            if(!this.isInputInvalid) {
                this.$emit('add', this.productToAdd);
            }
        },
        exit() {
            this.productToAdd = {};
            this.$emit('exit-without-adding');
        },
        onEnter() {
            this.add();
        },
    }
}
</script>
