<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">

                    <div class="modal-body">
                        <p>
                            Êtes-vous sûr(e) de vouloir {{ this.actionText }} la liste "{{ affectedBasket.name }}" ?
                            Cette action est irréversible
                        </p>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button button"
                                @click="performAction">
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
    mixins: [

    ],
    props: {
        action: String,
        affectedBasket: Object,
        affectedBasketIndex: Number,
    },
    data() {
        return {
            actionText: '',
        }
    },
    computed: {

    },
    created() {
        if (this.action === 'delete') {
            this.actionText = "supprimer"
        }
        if (this.action === 'clear') {
            this.actionText = "vider"
        }
    },
    methods: {
        performAction() {
            if (this.action === 'delete') {
                this.$emit('delete', this.affectedBasketIndex);
            }
            if (this.action === 'clear') {
                this.$emit('clear', this.affectedBasketIndex);
            }
        },
        cancel() {
            this.$emit('exit-without-action');
        },
    }
}
</script>
