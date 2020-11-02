<template>
    <div class="handle table-row">

        <div class="table-div bigger d-flex">
            <input v-model="simulation.name"
                   @change="saveChanges"
                   class="ignore-draggable custom-input browser-default align-self-end"
                   type="text"
                   required>
        </div>
        <div class="table-div">
            <div class="d-flex justify-content-around">
                <div><small>{{ dishesNumberDelta }}</small></div>
                <div v-html="getStyle(dishesNumberDeltaPercentage, true)"></div>
            </div>
            <input v-model="simulation.dishesNumber"
                   @change="modifyWasteVolume()"
                   class="ignore-draggable custom-input browser-default strong number-field"
                   type="number"
                   required
                   min="1" step="1">
        </div>
        <div class="table-div shorter">
            <div class="d-flex justify-content-around">
                <div><small>{{ dishCostDelta }}</small></div>
                <div v-html="getStyle(dishCostDeltaPercentage, false)"></div>
            </div>
            <input v-model="simulation.dishCost"
                   @change="saveChanges"
                   class="ignore-draggable custom-input browser-default strong number-field"
                   type="number"
                   required
                   min="0.01" step="0.01">
        </div>
        <div class="table-div shorter">
            <div class="d-flex justify-content-around">
                <div><small>{{ dishWeightDelta }}</small></div>
                <div v-html="getStyle(dishWeightDeltaPercentage, false)"></div>
            </div>
            <input v-model="simulation.dishWeight"
                   @change="saveChanges"
                   class="ignore-draggable custom-input browser-default strong number-field"
                   type="number"
                   required
                   min="1" step="1">
        </div>
        <div class="table-div shorter">
            <div class="d-flex justify-content-around">
                <div><small>{{ wasteTreatmentCostDelta }}</small></div>
                <div v-html="getStyle(wasteTreatmentCostDeltaPercentage, false)"></div>
            </div>
            <input v-model="simulation.wasteTreatmentCost"
                   @change="saveChanges"
                   class="ignore-draggable custom-input browser-default strong number-field"
                   type="number"
                   required
                   min="0.01" step="0.01">
        </div>
        <div class="table-div shorter">
            <div class="d-flex justify-content-around">
                <div><small>{{ foodWasteVolumeDelta }}</small></div>
                <div v-html="getStyle(foodWasteVolumeDeltaPercentage, false)"></div>
            </div>
            <input v-model="simulation.foodWasteVolume"
                   @change="setRatio"
                   class="ignore-draggable custom-input browser-default strong number-field"
                   type="number"
                   required
                   min="0.001" step="0.001">
        </div>

        <div class="table-div">
            <div class="d-flex justify-content-around">
                <div><small>{{ ratioDelta }}</small></div>
                <div v-html="getStyle(ratioDeltaPercentage, false)"></div>
            </div>
            <div class="strong align-with-inputs">{{ this.ratio }}</div>
        </div>
        <div class="table-div">
            <div class="d-flex justify-content-around">
                <div><small>{{ foodWasteCostDelta }}</small></div>
                <div v-html="getStyle(foodWasteCostDeltaPercentage, false)"></div>
            </div>
            <div class="strong align-with-inputs">{{ this.separateThousands(foodWasteCost) }}</div>
        </div>
        <div class="table-div">
            <div class="d-flex justify-content-around">
                <div><small>{{ amountOfDishesWastedDelta }}</small></div>
                <div v-html="getStyle(amountOfDishesWastedDeltaPercentage, false)"></div>
            </div>
            <div class="strong align-with-inputs">{{ this.separateThousands(amountOfDishesWasted) }}</div>
        </div>

        <div class="trash-icon">
            <a @click="removeSimulation(index)">
                <i class="icon"></i>
            </a>
        </div>
    </div>
</template>

<script>
// traite les simulations (add, remove, style...)
import SimulationHelper from "../../helpers/waste-simulation/component-specific/SimulationHelper";
// La logique principale de composant (calculs)
import SimulationLogic from "../../helpers/waste-simulation/calculations/SimulationLogic";
// Validation
import SimulationValidation from "../../helpers/waste-simulation/validation/SimulationValidation";
// utile pour arrondir les nombres
import NumberFormatter from "../../helpers/NumberFormatter";

export default {

    // déclaration de dépendance vis-à-vis de ces fichiers
    mixins: [
        SimulationHelper,
        SimulationLogic,
        SimulationValidation,
        NumberFormatter
    ],

    // données récupérées du composant parent (AuditSimulationList.vue)
    props: {
        simulation: Object,
        index: Number,
        auditData: Object,
        previousSimulation: Object,
        compareToPreviousSim: Boolean,
    },

    data() {
        return {
            ratio: null
        }
    },

    // Propriétés calculées du composant
    computed: {

        // récupère les données de la simulation précédente (qui se trouve être l'audit si elle est en première position)
        previousSim() {
            if(!this.compareToPreviousSim) {
                return this.auditData;
            }
            return this.isFirst ? this.auditData : this.previousSimulation;
        },

        // Booléen qui permet à une simulation de savoir si elle est placée juste en dessous de l'audit
        isFirst() {
            return this.index === 0;
        },

        // Vérifie que les données saisies sont valides
        isInvalid() {
            if (this.simulation.dishesNumber < 1 ||
                this.simulation.dishCost < 0.01 ||
                this.simulation.dishWeight < 1 ||
                this.simulation.wasteTreatmentCost < 0.01 ||
                this.simulation.foodWasteVolume < 0.001) {
                return true;
            }
            return false;
        }
    },

    // propriétés à "surveiller", elles invoquent la fonction 'updateSimulationsComponent' dès qu'elles changent
    watch: {
        foodWasteCost: function () {
            this.updateSimulationsComponent();
        },

        wasteCostPerDish: function () {
            this.updateSimulationsComponent();
        },

        amountOfDishesWasted: function () {
            this.updateSimulationsComponent();
        },

        ratio: function () {
            this.updateSimulationsComponent();
        },
    },

    // A l'initialisation du composant
    mounted() {

        // Listeners
        events.$on('get-full-simulations-info-for-export', this.sendSimulationFullInfo);
        events.$on('validate-simulations', this.validate);

        this.setRatio();
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

        modifyWasteVolume() {
            this.simulation.foodWasteVolume = this.roundToThreeDecimal(
                this.simulation.dishesNumber * this.ratio / 1000 / 1000
            );
            this.saveChanges();
        },

        setRatio() {
            this.ratio = this.roundToTwoDecimal(this.simulation.foodWasteVolume / this.simulation.dishesNumber * 1000 * 1000);
            this.saveChanges();
        }
    },
}
</script>
