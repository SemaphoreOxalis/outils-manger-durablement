<template>
    <div>
        <div class="table-row table-header">
            <div class="table-div bigger">
                <div>{{ labels.name }}</div>
            </div>
            <div class="table-div">
                <div>{{ labels.dishes_number }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ labels.dish_cost }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ labels.dish_weight }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ labels.waste_cost }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ labels.waste_volume }}</div>
            </div>

            <div class="flex results text-center">
                <div class="estimate pt-2">
                    {{ labels.waste_estimation.estimate }}
                </div>
                <div class="table-div highlighted-label-1 result">
                    <div>{{ labels.waste_estimation.in_g_per_dish }}</div>
                </div>
                <div class="table-div highlighted-label-2 result">
                    <div>{{ labels.waste_estimation.in_euros }}</div>
                </div>
                <div class="table-div highlighted-label-1 result">
                    <div>{{ labels.waste_estimation.in_dishes_number }}</div>
                </div>
            </div>
        </div>

        <div class="table-row ref">
            <div class="table-div bigger">
                <div>{{ this.auditData.name }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.separateThousands(this.input.dishesNumber) }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ this.input.dishCost }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ this.input.dishWeight }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ this.input.wasteTreatmentCost }}</div>
            </div>
            <div class="table-div shorter">
                <div>{{ this.foodWasteVolume }}</div>
            </div>

            <div class="table-div">
                <div>{{ this.ratio }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.separateThousands(this.foodWasteCost) }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.separateThousands(this.amountOfDishesWasted) }}</div>
            </div>
        </div>

        <audit-simulation-list
            v-bind:audit-data="this.auditData"
        ></audit-simulation-list>

    </div>
</template>

<script>

// Imports des dépendances
import ResultsPageText from "../../../texts/wasteSimulator/ResultsPageText";
// logique du composant
import AuditLogic from "../../helpers/waste-simulation/calculations/AuditLogic";
// utiles pour arrondir les nombres et formatter les dates
import NumberFormatter from "../../helpers/NumberFormatter";
import DateFormatter from "../../helpers/DateFormatter";
// Composant enfant
const AuditSimulationList = () => import(
    /* webpackChunkName: "js/waste-simulation/AuditSimulationList" */
    './AuditSimulationList.vue'
    );

export default {

    // Déclaration des composants enfants
    components: {
        AuditSimulationList
    },

    // déclaration de la dépendance à ces mixins (bibliothèques de fonctions)
    mixins: [
        ResultsPageText,
        AuditLogic,
        NumberFormatter,
        DateFormatter
    ],

    // données récupérées du composant parent (ResultsPage.vue)
    props: {
        auditRawData: Object
    },

    // données utilisées par ce composant
    data() {
        return {
            input: {},
            computedValues: {},
            auditData: {}
        }
    },

    // A l'initialisation du composant
    mounted() {

        // on récupère les données du parent (ResultsPage.vue)
        this.input = this.auditRawData;

        // et on initialise un objet qui va servir pour les composants enfants (AuditSimulationList.vue)
        this.computedValues = {
            globalFoodWasteVolume: this.globalFoodWasteVolume,
            foodWasteVolume: this.foodWasteVolume,
            foodWasteCost: this.foodWasteCost,
            wasteCostPerDish: this.wasteCostPerDish,
            amountOfDishesWasted: this.amountOfDishesWasted,
            ratio: this.ratio
        };

        // Par souci de practicité, on stocke tout dans un unique objet
        this.auditData = {...this.input, ...this.computedValues};
        this.auditData.name = "Référence du " + this.formatToFrench(this.input.startDate) + " au " + this.formatToFrench(this.input.endDate);

        events.$on('get-audit-results', this.sendAuditResults);
        this.sendAuditResults();
    },

    methods: {
        sendAuditResults() {
            this.$emit('sent-audit-results', this);
        }
    }
}
</script>
