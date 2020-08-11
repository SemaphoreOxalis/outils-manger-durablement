<template>
    <div :class="getClasses()">
        <div class="p-2 w-25">
            <i class="fa fa-arrows-alt"></i>
            <input v-model="simulation.name" @blur="saveChanges" class="inputs">
            <div>
                <p>{{ this.previousSim }}</p>
            </div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.dishesNumber }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.dishCost }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.wasteTreatmentCost }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.foodWasteVolume }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.wasteCostPerDish }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.foodWasteCost }}</div>

        </div>
        <div class="p-2 flex-grow-1">
            <div><small>+2</small></div>
            <div><small>+2.3 %</small></div>
            <div>{{ simulation.amountOfDishesWasted }}</div>

        </div>
        <div class="p-2 flex-grow-0">
            <div>
                <button @click="remove(index)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {

    // données récupérées du composant parent (Simulations.vue)
    props: [
        'simulation',
        'index',
        'auditData',
        'previousSimulation'
    ],

    // Propriétés calculées du composant
    computed: {

        // Booléen qui permet à une simulation de savoir si elle est placée juste en dessous de l'audit
        isFirst() {
            return this.index === 0;
        },
    },

    // Initialisation des données et propriétés utilisées par ce composant
    data() {
        return {
            previousSim: null
        }
    },

    // Fonctions inhérentes au composant
    methods: {

        // Effacer une simulation
        remove: function (index) {

            // Envoie la demande au composant parent (Simulations.vue) qui s'en occupe
            this.$emit('delete-simulation', index);
        },

        // Sauvegarder les modifications faites à la simulation
        saveChanges() {

            // Envoie la demande au composant parent (Simulations.vue) qui s'en occupe
            this.$emit('save-changes');
            flash('Vos modifications ont été sauvegardées');
        },

        // Met à jour les données utilisées par la simulation lors du drag'n'drop
        updateSimulationsValues() {
            this.getPreviousSim();
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

        // Par souci de practicité, chaque simulation a une "previousSim" qui s'avère être l'audit si elle est en première position
        getPreviousSim() {
            if (!this.isFirst) {
                this.previousSim = this.previousSimulation.name;
            } else {
                this.previousSim = this.auditData.auditDate;
            }
        }
    },

    // A l'initialisation du composant
    created() {
        this.updateSimulationsValues();
        this.getPreviousSim();

        events.$on('update-simulations-values', this.updateSimulationsValues);
    }
}
</script>

<style>
.highlighted {
    background-color: #2fa360;
}
</style>
