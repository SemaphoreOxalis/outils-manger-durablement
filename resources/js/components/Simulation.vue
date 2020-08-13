<template>
    <div :class="getClasses()">
        <div class="p-2 w-25">
            <i class="fa fa-arrows-alt"></i>
            <input v-model="simulation.name" @blur="saveChanges" class="ignore-draggable">
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
                <button @click="removeSimulation(index)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import SimulationHelper from "../helpers/SimulationHelper";
import SimulationLogic from "../helpers/calculations/SimulationLogic";
import NumberRounder from "../helpers/NumberRounder";

export default {

    mixins: [
        SimulationHelper,
        SimulationLogic,
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
    },

    methods: {
        updateSimulationsComponent() {
            this.$emit('update-simulations-component', this);
        },

        sendSimulationFullInfo() {
            this.$emit('update-simulations-component-will-full-info-for-export', this);
        },
    },

    mounted() {
        events.$on('get-full-simulations-info-for-export', this.sendSimulationFullInfo)
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
