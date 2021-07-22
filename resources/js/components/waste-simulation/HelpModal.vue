<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-body">
                        <div v-html="text"></div>
                    </div>

                    <div class="help-modal modal-footer">
                        <button class="modal-default-button button alter" @click="close">
                            {{ okBtn }}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import HelpModalText from "../../../texts/wasteSimulator/HelpModalText";
    import DataBase from "../../helpers/DataBase";

    export default {
        mixins: [
            HelpModalText,
            DataBase
        ],

        data() {
            return {
                text: `<div class="loader-spinner"></div>`
            }
        },

        methods: {
            // nécessaire pour notifier le composant parent (WasteHomePage.vue)
            close() {
                this.$emit('close');
            }
        },

        async mounted() {
            this.text = await this.fetchContent('Gaspi - Modale calcul prix d\'un repas');
        }
    }
</script>
