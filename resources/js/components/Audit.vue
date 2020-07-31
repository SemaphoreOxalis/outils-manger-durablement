<template>
    <div>
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

        <simulations></simulations>
    </div>
</template>

<script>
    // Petite bibliothèque de fonctions bien pratique
    import NumberRounder from "../helpers/NumberRounder";
    import DateFormatter from "../helpers/DateFormatter";
    import Simulations from "./Simulations";

    export default {

        // déclaration de la dépendance à ce mixin
        mixins: [
            NumberRounder,
            DateFormatter
        ],

        components: {
            Simulations
        },

        // données récupérées du composant parent (Results.vue)
        props: [
            'auditData'
        ],

        // données utilisées par ce composant
        data() {
            return {
                input: {}
            }
        },

        // données calculées
        computed: {

            // calcul de la part fermentescible globale ( environ 25 % du volume global de déchets )
            globalFoodWasteVolume: function () {
                return this.roundToThreeDecimal(
                    (this.auditData.foodLeftoversVolumeInGlobalWaste / 100) * this.auditData.globalWasteVolume
                );
            },

            // calcul du volume de gaspillage alimentaire ( environ 75 % de la part fermentescible globale )
            foodWasteVolume: function () {
                return this.roundToThreeDecimal(
                    (this.auditData.actualFoodLeftoversInFoodWaste / 100) * this.globalFoodWasteVolume
                );
            },

            // coût du gaspillage alimentaire global = volume de gaspillage alimentaire X prix de traitement d'une T de déchets
            foodWasteCost: function () {
                return this.roundToTwoDecimal(
                    this.foodWasteVolume * this.auditData.wasteTreatmentCost
                );
            },

            // coût du gaspillage par repas = coût du gaspillage alimentaire global / nombre de repas produits
            wasteCostPerDish: function () {
                return this.roundToThreeDecimal(
                    this.foodWasteCost / this.auditData.dishesNumber
                );
            },

            // équivalence en nombre de repas = coût du gaspillage alimentaire global / prix de revient d'un repas
            amountOfDishesWasted: function () {
                return this.roundToOneDecimal(
                    this.foodWasteCost / this.auditData.dishCost
                );
            },
        },

        // A l'initialisation du composant, on récupère les données du parent
        mounted() {
            this.input = this.auditData;
        }
    }
</script>
