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
            <div><small>{{ wasteCostPerDishDelta }}</small></div>
            <div><small>{{ wasteCostPerDishDeltaPercentage }}</small></div>
            <div>{{ wasteCostPerDish }}</div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ foodWasteCostDelta }}</small></div>
            <div><small>{{ foodWasteCostDeltaPercentage }}</small></div>
            <div>{{ foodWasteCost }}</div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ amountOfDishesWastedDelta }}</small></div>
            <div><small>{{ amountOfDishesWastedDeltaPercentage }}</small></div>
            <div>{{ amountOfDishesWasted }}</div>
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

    watch: {
        foodWasteCost: function() {
            this.updateSimulationsComponent();
        },

        wasteCostPerDish: function() {
            this.updateSimulationsComponent();
        },

        amountOfDishesWasted: function() {
            this.updateSimulationsComponent();
        },
    },

    // Propriétés calculées du composant
    computed: {

        previousSim() {
            return this.isFirst ? this.auditData : this.previousSimulation;
        },

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



        wasteCostPerDishDelta() {
            return this.getDelta(this.wasteCostPerDish, this.previousSim.wasteCostPerDish);
        },

        wasteCostPerDishDeltaPercentage() {
            return this.getDeltaPercentage(this.wasteCostPerDish, this.previousSim.wasteCostPerDish);
        },

        foodWasteCostDelta() {
            return this.getDelta(this.foodWasteCost, this.previousSim.foodWasteCost);
        },

        foodWasteCostDeltaPercentage() {
            return this.getDeltaPercentage(this.foodWasteCost, this.previousSim.foodWasteCost);
        },

        amountOfDishesWastedDelta() {
            return this.getDelta(this.amountOfDishesWasted, this.previousSim.amountOfDishesWasted);
        },

        amountOfDishesWastedDeltaPercentage() {
            return this.getDeltaPercentage(this.amountOfDishesWasted, this.previousSim.amountOfDishesWasted);
        },




        // coût du gaspillage alimentaire global = volume de gaspillage alimentaire X prix de traitement d'une T de déchets
        foodWasteCost: function () {
            return this.roundToTwoDecimal(
                this.simulation.foodWasteVolume * this.simulation.wasteTreatmentCost
            );
        },

        // coût du gaspillage par repas = coût du gaspillage alimentaire global / nombre de repas produits
        wasteCostPerDish: function () {
            return this.roundToThreeDecimal(
                this.foodWasteCost / this.simulation.dishesNumber
            );
        },

        // équivalence en nombre de repas = coût du gaspillage alimentaire global / prix de revient d'un repas
        amountOfDishesWasted: function () {
            return this.roundToOneDecimal(
                this.foodWasteCost / this.simulation.dishCost
            );
        },
    },

    // Fonctions inhérentes au composant
    methods: {

        updateSimulationsComponent() {
            this.$emit('update-simulations-component', this);
        },

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
    },
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
