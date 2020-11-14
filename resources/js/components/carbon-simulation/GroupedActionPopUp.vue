<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">

                    <div class="modal-header">
                        <span>{{ edit.i_am_editing_to }} :</span>
                    </div>

                    <div class="modal-body">
                        <input type="radio"
                               class="radio-boxes"
                               v-model="action"
                               id="francify"
                               value="francify"
                               checked="checked">
                        <label for="francify">{{ edit.set_origin_to_france }}</label>
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
    import BasketSimulatorText from "../../../texts/carbonSimulator/BasketSimulatorText";

    export default {
        mixins: [
            BasketSimulatorText
        ],
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
