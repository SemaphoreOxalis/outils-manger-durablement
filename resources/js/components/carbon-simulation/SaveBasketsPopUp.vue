<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">

                    <div class="modal-header">
                        <strong class="mx-auto">Vous avez sélectionné les listes suivantes :</strong>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <li v-for="basket in selectedBaskets">{{ basket.name }}</li>
                        </ul>
                    </div>

                    <div class="modal-footer">
                        <p>Cliquez sur OK pour sauvegarder les listes sélectionnées dans un fichier .carbon que vous pourrez stocker sur votre ordinateur</p>
                        <button class="modal-default-button button"
                                @click="saveBaskets">
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
        baskets: Array,
        selectedBaskets: Array,
    },
    methods: {
        saveBaskets() {
            this.$emit('save-baskets');
            this.$emit('exit-without-saving');
        },
        cancel() {
            this.$emit('exit-without-saving');
        },
    }
}
</script>