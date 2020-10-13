<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container" ref="modal">
                    <div class="modal-header">
                        <p>Utilisez les touches tabulation et entrée bla bla</p>
                    </div>

                    <div class="modal-body">
                        Vous ajoutez le produit <strong>{{ this.productToAdd.name }}</strong>
                        <br>en quantité de <input type="number" v-model="productToAdd.amount" min="0" required ref="qty"> {{ this.productToAdd.unit.unit }}
                        <br>pour un montant de <input type="number" v-model="productToAdd.price" min="0" required> €
                        <br>originaire de <select v-model="productToAdd.origin">
                                              <option v-for="origin in origins"
                                                      v-bind:value="origin">
                                                  {{ origin.from }}
                                              </option>
                                          </select>
                        <br>dans les paniers nommés <span v-for="basket in this.productToAdd.baskets"> {{ basket }}</span>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button button alter"
                                @click="exit">
                            Annuler
                        </button>
                        <button :disabled="isInputInvalid"
                                class="modal-default-button button"
                                @click="add">
                            OK
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
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
        this.productToAdd = {...this.product, amount: null, price: null, origin: this.origins[2], baskets: ['panier 1', 'panier 2']};
        let self = this;
        Vue.nextTick().then(function () {
            self.$refs.qty.focus();
        });
    },
    methods: {
        add() {
            this.$emit('add', this.productToAdd);
        },
        exit() {
            console.log('exit');
            this.productToAdd = {};
            this.$emit('exit-without-adding');
        },
    }
}
</script>
