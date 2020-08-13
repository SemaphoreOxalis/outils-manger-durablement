export default {
    // données calculées
    computed: {

        // calcul de la part fermentescible globale ( environ 25 % du volume global de déchets - ou taux personnalisé)
        globalFoodWasteVolume: function () {
            return this.roundToThreeDecimal(
                (this.auditRawData.foodLeftoversVolumeInGlobalWaste / 100) * this.auditRawData.globalWasteVolume
            );
        },

        // calcul du volume de gaspillage alimentaire ( environ 75 % de la part fermentescible globale - ou taux personnalisé)
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
}
