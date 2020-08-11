<template>
    <div>
        <div class="d-flex text-center">
            <div class="p-2 w-50">Nom de la simulation</div>
            <div class="p-2 flex-shrink-1">Nombre de repas produits</div>
            <div class="p-2 flex-shrink-1">Coût de revient d'un repas</div>
            <div class="p-2 flex-shrink-1">Coût de traitement par tonne (€)</div>
            <div class="p-2 flex-shrink-1">Volume de gaspillage alimentaire (tonnes)</div>
            <div class="p-2 flex-shrink-1">Coût de traitement des déchets d'un repas</div>
            <div class="p-2 flex-shrink-1">Coûts de gaspillage alimentaire</div>
            <div class="p-2 flex-shrink-1">Equivalence en nombre de repas</div>
            <div class="p-2 flex-grow-1"></div>
        </div>

        <div class="d-flex text-center">
            <div class="p-2 w-25">Référence du {{ this.formatToFrench(this.input.startDate) }} au {{
                this.formatToFrench(this.input.endDate) }}
            </div>
            <div class="p-2 flex-grow-1">{{ this.input.dishesNumber }}</div>
            <div class="p-2 flex-grow-1">{{ this.input.dishCost }}</div>
            <div class="p-2 flex-grow-1">{{ this.input.wasteTreatmentCost }}</div>
            <div class="p-2 flex-grow-1">{{ this.foodWasteVolume }}</div>
            <div class="p-2 flex-grow-1">{{ this.wasteCostPerDish }}</div>
            <div class="p-2 flex-grow-1">{{ this.foodWasteCost }}</div>
            <div class="p-2 flex-grow-1">{{ this.amountOfDishesWasted }}</div>
            <div class="p-2 flex-grow-0"></div>
        </div>

        <simulations
            v-bind:audit-data="this.auditData"
        ></simulations>

    </div>
</template>

<script>

    // Imports des dépendances
    import NumberRounder from "../helpers/NumberRounder";
    import DateFormatter from "../helpers/DateFormatter";
    import Simulations from "./Simulations";

    export default {

        // déclaration de la dépendance à ce mixin
        mixins: [
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

        // données calculées
        computed: {

            // calcul de la part fermentescible globale ( environ 25 % du volume global de déchets )
            globalFoodWasteVolume: function () {
                return this.roundToThreeDecimal(
                    (this.auditRawData.foodLeftoversVolumeInGlobalWaste / 100) * this.auditRawData.globalWasteVolume
                );
            },

            // calcul du volume de gaspillage alimentaire ( environ 75 % de la part fermentescible globale )
            foodWasteVolume: function () {
                return this.roundToThreeDecimal(
                    (this.auditRawData.actualFoodLeftoversInFoodWaste / 100) * this.globalFoodWasteVolume
                );
            },

            // coût du gaspillage alimentaire global = volume de gaspillage alimentaire X prix de traitement d'une T de déchets
            foodWasteCost: function () {
                return this.roundToTwoDecimal(
                    this.foodWasteVolume * this.auditRawData.wasteTreatmentCost
                );
            },

            // coût du gaspillage par repas = coût du gaspillage alimentaire global / nombre de repas produits
            wasteCostPerDish: function () {
                return this.roundToThreeDecimal(
                    this.foodWasteCost / this.auditRawData.dishesNumber
                );
            },

            // équivalence en nombre de repas = coût du gaspillage alimentaire global / prix de revient d'un repas
            amountOfDishesWasted: function () {
                return this.roundToOneDecimal(
                    this.foodWasteCost / this.auditRawData.dishCost
                );
            },
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
        }
    }
</script>
