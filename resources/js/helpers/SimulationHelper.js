export default {
    methods: {

        // Effacer une simulation
        removeSimulation: function (index) {

            // Envoie la demande au composant parent (Simulations.vue) qui s'en occupe
            this.$emit('delete-simulation', index);
        },

        // Sauvegarder les modifications faites à la simulation
        saveChanges() {

            // Envoie la demande au composant parent (Simulations.vue) qui s'en occupe
            this.$emit('save-changes');
            flash('Vos modifications ont été sauvegardées');
        },

        // Classes CSS appliquées en fonction de la position de la simulation
        getClasses() {
            if (this.isFirst) {
                return [
                    'd-flex',
                    'text-center',
                    'handle',
                    'highlighted'
                ]
            } else {
                return [
                    'd-flex',
                    'text-center',
                    'handle'
                ]
            }
        },
    }
}
