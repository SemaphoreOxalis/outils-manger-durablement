<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">
                    <div class="modal-header">
                        <small>{{ add_popup.help }}</small>
                    </div>

                    <div class="modal-body">
                        {{ add_popup.you_are_adding }} <strong>{{ this.productToAdd.name }}</strong>
                        <br>{{ add_popup.by_this_amount }} <input class="number-field custom-input browser-default" type="number" v-model="productToAdd.amount" min="0" required ref="qty">
                        <small>{{ this.productToAdd.unit.unit }}</small>
                        <br>{{ add_popup.for_that_much_$ }} <input class="number-field custom-input browser-default" type="number" v-model="productToAdd.price" min="0" required> €
                        <br>{{ add_popup.from }} <select v-model="productToAdd.origin">
                                              <option v-for="origin in origins"
                                                      v-bind:value="origin">
                                                  {{ origin.from }}
                                              </option>
                                          </select>
                        <br>{{ add_popup.in_baskets }} <span v-for="basket in this.productToAdd.baskets"> {{ basket }}</span>
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
            if (this.productToAdd.price < 0.01) {
                return true;
            }

            return false
        }
    },
    created() {
        this.productToAdd = {...this.product, amount: 1, price: 1, origin: this.origins[2], baskets: ['panier 1', 'panier 2']};
        let self = this;
        Vue.nextTick().then(function () {
            self.$refs.qty.focus();
        });
    },
    methods: {
        add() {
            console.log(this.productToAdd);
            this.$emit('add', this.productToAdd);
        },
        exit() {
            this.productToAdd = {};
            this.$emit('exit-without-adding');
        },
    }
}
</script>
