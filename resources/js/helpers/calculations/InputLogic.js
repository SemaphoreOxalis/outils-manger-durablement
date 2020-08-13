export default {
    // Données calculées en fonction des sonnées saisies
    computed: {

        // CALCULS - "soit dans votre cas ..... tonnes"

        // calcul de la part fermentescible globale ( environ 25 % du volume global de déchets )
        foodLeftoversVolumeInGlobalWasteInYourCase: function() {
            return this.roundToThreeDecimal(
                ( this.referenceValues.foodLeftoversVolumeInGlobalWaste / 100 ) * this.userInput.globalWasteVolume
            );
        },

        // calcul du volume de gaspillage alimentaire ( environ 75 % de la part fermentescible globale )
        actualFoodLeftoversInFoodWasteInYourCase: function() {
            return this.roundToThreeDecimal(
                ( this.referenceValues.actualFoodLeftoversInFoodWaste / 100 ) * this.foodLeftoversVolumeInGlobalWasteInYourCase
            );
        },
    },
}
