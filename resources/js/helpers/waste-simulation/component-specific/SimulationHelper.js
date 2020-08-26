// helper pour le composant Simulation.vue

export default {
    methods: {

        // Effacer une simulation
        removeSimulation: function (index) {

            // Envoie la demande au composant parent (Simulations.vue) qui s'en occupe
            this.$emit('delete-simulation', index);
        },

        // Sauvegarder les modifications faites à la simulation
        saveChanges() {

            this.validate();

            // Envoie la demande au composant parent (Simulations.vue) qui s'en occupe
            this.$emit('save-changes');
            flash('Vos modifications ont été sauvegardées');
        },

        // Style appliqué aux pourcentages (flèches et couleurs)
        // la propriété upIsGood nous permet de savoir si une modification est bénéfique et de lui appliquer la bonne couleur
        // ( + de repas produits = bien, mais + de gaspillage = mauvais)
        getStyle(value, upIsGood) {
            if (value.startsWith('+')) {
                let cssClass = (upIsGood === true) ? 'good' : 'bad';
                return '<small class="' + cssClass + '"><i class="icon icon-long-arrow-right up"></i> ' + value + ' </small>';
            } else if (value.startsWith('-')) {
                let cssClass = (upIsGood === true) ? 'bad' : 'good';
                return '<small class="' + cssClass + '"><i class="icon icon-long-arrow-right down"></i> ' + value + ' </small>';
            }
            return '<small>' + value + '</small>';
        }
    }
}
