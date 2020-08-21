<template>
    <div>
        <div class="table-row table-header">
            <div class="table-div bigger">
                <div>Nom de la simulation</div>
            </div>
            <div class="table-div">
                <div>Nombre de repas produits</div>
            </div>
            <div class="table-div">
                <div>Coût de revient d'un repas</div>
            </div>
            <div class="table-div">
                <div>Coût de traitement par tonne (€)</div>
            </div>
            <div class="table-div">
                <div>Volume de gaspillage alimentaire (tonnes).</div>
            </div>
            <div class="table-div">
                <div>Coût de traitement des déchets d'un repas</div>
            </div>
            <div class="table-div">
                <div>Estimation du gaspillage alimentaire (en €)</div>
            </div>
            <div class="table-div">
                <div>Estimation du gaspillage alimentaire (équivalence en nombre de repas)</div>
            </div>
        </div>

        <div class="table-row ref">
            <div class="table-div bigger">
                <div>{{ this.auditData.name }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.input.dishesNumber }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.input.dishCost }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.input.wasteTreatmentCost }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.foodWasteVolume }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.wasteCostPerDish }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.foodWasteCost }}</div>
            </div>
            <div class="table-div">
                <div>{{ this.amountOfDishesWasted }}</div>
            </div>
        </div>

        <simulations
            v-bind:audit-data="this.auditData"
        ></simulations>

    </div>
</template>

<script>

// Imports des dépendances
// logique du composant
import AuditLogic from "../helpers/calculations/AuditLogic";
// utiles pour arrondir les nombres et formatter les dates
import NumberRounder from "../helpers/NumberRounder";
import DateFormatter from "../helpers/DateFormatter";
// Composant enfant
import Simulations from "./Simulations";

export default {

    // déclaration de la dépendance à ces mixins (bibliothèques de fonctions)
    mixins: [
        AuditLogic,
        NumberRounder,
        DateFormatter
    ],

    // Déclaration des composants enfants
    components: {
        Simulations
    },

    // données récupérées du composant parent (Results.vue)
    props: [
        'auditRawData'
    ],

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

        // on récupère les données du parent (Results.vue)
        this.input = this.auditRawData;

        // et on initialise un objet qui va servir pour les composants enfants (Simulations.vue)
        this.computedValues = {
            globalFoodWasteVolume: this.globalFoodWasteVolume,
            foodWasteVolume: this.foodWasteVolume,
            foodWasteCost: this.foodWasteCost,
            wasteCostPerDish: this.wasteCostPerDish,
            amountOfDishesWasted: this.amountOfDishesWasted
        };

        // Par souci de practicité, on stocke tout dans un unique objet
        this.auditData = {...this.input, ...this.computedValues};
        this.auditData.name = "Référence du " + this.formatToFrench(this.input.startDate) + " au " + this.formatToFrench(this.input.endDate);
    }
}
</script>
