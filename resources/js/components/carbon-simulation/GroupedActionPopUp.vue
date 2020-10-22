<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">

                    <div class="modal-header">
                        <span>Je modifie ce panier pour :</span>
                    </div>

                    <div class="modal-body">
                        <input type="radio"
                               class="radio-boxes"
                               v-model="action"
                               id="francify"
                               value="francify"
                               checked="checked">
                        <label for="francify">Je modifie tous les produits qui le peuvent en origine France</label>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button button"
                                @click="performActions">
                            OK
                        </button>
                        <button class="modal-default-button button alter"
                                @click="cancel">
                            Annuler
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
            affectedBasketIndex: Number,
        },
        data() {
            return {
                action: 'francify',
            }
        },
        methods: {
            cancel() {
                this.$emit('exit-without-grouped-action');
            },
            performActions() {
                if(this.action === 'francify') {
                    this.$emit('francify-basket', this.affectedBasketIndex);
                }
            },
        },
    }
</script>
