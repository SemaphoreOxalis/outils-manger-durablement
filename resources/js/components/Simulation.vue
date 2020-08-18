<template>
    <div :class="getClasses()">
        <div class="p-2 w-25">
            <i class="fa fa-arrows-alt"></i>
            <input v-model="simulation.name" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ dishesNumberDelta }}</small></div>
            <div v-html="getStyle(dishesNumberDeltaPercentage, true)"></div>
            <input v-model="simulation.dishesNumber" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ dishCostDelta }}</small></div>
            <div v-html="getStyle(dishCostDeltaPercentage, false)"></div>
            <input v-model="simulation.dishCost" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ wasteTreatmentCostDelta }}</small></div>
            <div v-html="getStyle(wasteTreatmentCostDeltaPercentage, false)"></div>
            <input v-model="simulation.wasteTreatmentCost" @blur="saveChanges" class="ignore-draggable">
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ foodWasteVolumeDelta }}</small></div>
            <div v-html="getStyle(foodWasteVolumeDeltaPercentage, false)"></div>
            <input v-model="simulation.foodWasteVolume" @blur="saveChanges" class="ignore-draggable">
        </div>


        <div class="p-2 flex-grow-1">
            <div><small>{{ wasteCostPerDishDelta }}</small></div>
            <div v-html="getStyle(wasteCostPerDishDeltaPercentage, false)"></div>
            <div>{{ wasteCostPerDish }}</div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ foodWasteCostDelta }}</small></div>
            <div v-html="getStyle(foodWasteCostDeltaPercentage, false)"></div>
            <div>{{ foodWasteCost }}</div>
        </div>

        <div class="p-2 flex-grow-1">
            <div><small>{{ amountOfDishesWastedDelta }}</small></div>
            <div v-html="getStyle(amountOfDishesWastedDeltaPercentage, false)"></div>
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
// traite les simulations (add, remove, style...)
import SimulationHelper from "../helpers/SimulationHelper";
// La logique principale de composant (calculs)
import SimulationLogic from "../helpers/calculations/SimulationLogic";
// utile pour arrondir les nombres
import NumberRounder from "../helpers/NumberRounder";

export default {

    // déclaration de dépendance vis-à-vis de ces fichiers
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

    // propriétés à "surveiller", elles invoquent la fonction 'updateSimulationsComponent' dès qu'elles changent
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

        // récupère les données de la simulation précédente (qui se trouve être l'audit si elle est en première position)
        previousSim() {
            return this.isFirst ? this.auditData : this.previousSimulation;
        },

        // Booléen qui permet à une simulation de savoir si elle est placée juste en dessous de l'audit
        isFirst() {
            return this.index === 0;
        },
    },

    // Fonctions inhérentes à ce composant
    methods: {

        // Demande au composant parent (Simulations) de mettre à jour sa liste de simulations
        updateSimulationsComponent() {
            this.$emit('update-simulations-component', this);
        },

        // Envoie au composant parent (Simulations) TOUTES les données (y compris deltas et pourcentages) pour préparer l'export
        sendSimulationFullInfo() {
            this.$emit('update-simulations-component-will-full-info-for-export', this);
        },
    },

    // A l'initialisation du composant
    mounted() {

        // Listener
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

.up {
    transform: rotate(-45deg);
}

.down {
    transform: rotate(45deg);
}

.good {
    color: #00ff00;
}

.bad {
    color: #ff0000;
}

/* TODO : make it work */
.handling {
    cursor: grabbing;
    cursor: -webkit-grabbing;
}
</style>
