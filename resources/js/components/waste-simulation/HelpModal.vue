<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-body">
                        <p>Le prix de revient peut être calculé à partir :</p>
                        <ul>
                            <li>du montant total des achats alimentaires</li>
                            <li>de la masse salariale de l'équipe de restauration</li>
                            <li>du coût des investissements</li>
                            <li>du coût de l'énergie</li>
                        </ul>
                        <p><strong>OU</strong>, dans le cas où votre établissement fait appel à un prestataire :</p>
                        <ul>
                            <li>du coût unitaire d'un repas facturé</li>
                        </ul>
                    </div>

                    <div class="modal-footer">
                        <button class="modal-default-button button alter" @click="close">
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
        methods: {
            // nécessaire pour notifier le composant parent (HomePage.vue)
            close() {
                this.$emit('close');
            }
        }
    }
</script>
