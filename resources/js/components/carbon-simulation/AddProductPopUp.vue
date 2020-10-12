<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <p>Utilisez les touches tabulation et entrée bla bla</p>
                    </div>

                    <div class="modal-body">
                        Vous ajoutez le produit <strong>{{ this.productToAdd.name }}</strong>
                        <br>en quantité de <input type="number" v-model="productToAdd.amount" min="0" required> {{ this.productToAdd.unit.unit }}
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
                        <button class="modal-default-button button alter" @click="add">
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
    created() {
        this.productToAdd = {...this.product, amount: 0, price: 0, origin: this.origins[2], baskets: ['panier 1', 'panier 2']};
    },
    methods: {
        add() {
            this.$emit('add', this.productToAdd);
        }
    }
}
</script>
