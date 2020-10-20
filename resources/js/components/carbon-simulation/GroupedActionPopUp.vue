<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">

                    <div class="modal-body">
                        <p>
                            Yo {{ affectedBasket.name }}
                        </p>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button button"
                                @click="">
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
            affectedBasket: Object,
        },
        methods: {
            cancel() {
                this.$emit('exit-without-grouped-action');
            },
        },
    }
</script>
