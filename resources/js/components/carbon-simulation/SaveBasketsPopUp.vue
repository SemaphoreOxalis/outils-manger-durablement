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
                        <label>Nom du fichier :</label>
                        <input type="text" class="custom-input browser-default" v-model="fileName">
                        <span>.carbon</span>
                        <div class="mt-2">
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
        this.fileName = this.selectedBaskets[0].name + "_" + new Date().toLocaleDateString().replace(/\//g, "-");
    },
    methods: {
        saveBaskets() {
            this.$emit('save-baskets', this.fileName);
            this.$emit('exit-without-saving');
        },
        cancel() {
            this.$emit('exit-without-saving');
        },
    }
}
</script>