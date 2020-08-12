<template>
    <div :class="getClasses()">
        <div class="p-2 w-25">
            <i class="fa fa-arrows-alt"></i>
            <input v-model="simulation.name" @blur="saveChanges" class="ignore-draggable">
            <div>
                <p>source : {{ this.previousSim.name }}</p>
            </div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ dishesNumberDelta }}</small></div>
            <div><small>{{ dishesNumberDeltaPercentage }}</small></div>
            <input v-model="simulation.dishesNumber" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ dishCostDelta }}</small></div>
            <div><small>{{ dishCostDeltaPercentage }}</small></div>
            <input v-model="simulation.dishCost" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ wasteTreatmentCostDelta }}</small></div>
            <div><small>{{ wasteTreatmentCostDeltaPercentage }}</small></div>
            <input v-model="simulation.wasteTreatmentCost" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ foodWasteVolumeDelta }}</small></div>
            <div><small>{{ foodWasteVolumeDeltaPercentage }}</small></div>
            <input v-model="simulation.foodWasteVolume" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small></small></div>
            <div><small></small></div>
            <div>{{ simulation.wasteCostPerDish }}</div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small></small></div>
            <div><small></small></div>
            <div>{{ simulation.foodWasteCost }}</div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small></small></div>
            <div><small></small></div>
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
import NumberRounder from "../helpers/NumberRounder";

export default {

    mixins: [
        NumberRounder
    ],

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

        dishesNumberDelta() {
            return this.getDelta(this.simulation.dishesNumber, this.previousSim.dishesNumber);
        },

        dishesNumberDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.dishesNumber, this.previousSim.dishesNumber);
        },

        dishCostDelta() {
            return this.getDelta(this.simulation.dishCost, this.previousSim.dishCost);
        },

        dishCostDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.dishCost, this.previousSim.dishCost);
        },

        wasteTreatmentCostDelta() {
            return this.getDelta(this.simulation.wasteTreatmentCost, this.previousSim.wasteTreatmentCost);
        },

        wasteTreatmentCostDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.wasteTreatmentCost, this.previousSim.wasteTreatmentCost);
        },

        foodWasteVolumeDelta() {
            return this.getDelta(this.simulation.foodWasteVolume, this.previousSim.foodWasteVolume);
        },

        foodWasteVolumeDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.foodWasteVolume, this.previousSim.foodWasteVolume);
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

        getDelta(simData, sourceData) {
            let result = this.roundToThreeDecimal(simData - sourceData);
            return result >= 0 ? "+" + result : result;
        },

        getDeltaPercentage(simData, sourceData) {
            let result = this.roundToThreeDecimal(
                ((simData * 100) / sourceData) - 100
            );
            return result >= 0 ? "+" + result + "%" :  result + "%";
        },

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
                this.previousSim = this.previousSimulation;
            } else {
                this.previousSim = this.auditData;
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

.handle {
    cursor: grab;
    cursor: -webkit-grab;
}

/* TODO : make it work */
.handling {
    cursor: grabbing;
    cursor: -webkit-grabbing;
}
</style>
