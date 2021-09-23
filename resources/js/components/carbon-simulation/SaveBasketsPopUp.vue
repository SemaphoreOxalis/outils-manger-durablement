<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container text-center" ref="modal">

                    <div class="modal-header">
                        <strong class="mx-auto">Vous pouvez sélectionner/désélectionner des listes à sauvegarder</strong>
                    </div>
                    <div class="modal-body pt-5 mt-5">
                        <div v-for="basket in baskets"
                             class="basket-select custom-control custom-checkbox text-left ml-5">
                            <input type="checkbox"
                                   v-model="basket.isSelected"
                                   class="custom-control-input"> <label class="custom-control-label">{{ basket.name }}</label>
                        </div>
                    </div>

                    <div class="modal-footer pt-3">
                        <label>Nom du fichier :</label>
                        <input type="text" class="custom-input browser-default" v-model="fileName">
                        <span>.carbon</span>
                        <div class="mt-5">
                            <button :class="selectedBaskets.length ? 'modal-default-button button' : 'modal-default-button button alter'"
                                    @click="saveBaskets"
                                    :disabled="!selectedBaskets.length">
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
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        baskets: Array,
        selectedBaskets: Array,
    },
    data() {
        return {
            fileName: '',
        }
    },
    mounted() {
        this.fileName = this.selectedBaskets[0].name.replace(/ /,"-") + "_" + new Date().toLocaleDateString().replace(/\//g, "-");
    },
    methods: {
        saveBaskets() {
            this.$emit('save-baskets', this.fileName);
        },
        cancel() {
            this.$emit('exit-without-saving');
        },
    }
}
</script>