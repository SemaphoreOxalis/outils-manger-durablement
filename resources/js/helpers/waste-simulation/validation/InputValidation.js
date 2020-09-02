// Validation des données saisies lors de l'audit

export default {
    computed: {
        // VALIDATION - empêche de continuer si les données saisies ne sont pas pertinentes

        // validation des données saisies pour l'audit
        areThereInvalidData: function () {

            // Validation des données de référence (cf. plus bas)
            if (this.areThereInvalidValues) {
                return true;
            }

            // Validation des données saisies (supérieures à 0)
            if (this.userInput.dishesNumber < 1 ||
                this.userInput.dishCost < 0.01 ||
                this.userInput.dishWeight < 1 ||
                this.userInput.globalWasteVolume < 0.001 ||
                this.userInput.wasteTreatmentCost < 0.01) {
                return true;
            }

            // Validation des dates (doivent être présentes et cohérentes)
            if (!this.userInput.startDate ||
                !this.userInput.endDate ||
                this.userInput.startDate > this.userInput.endDate) {
                return true;
            }

            // Si tout est OK, il n'y a pas d'erreur
            return false;
        },

        // validation des valeurs de référence ( entre 0 et 100 %)
        areThereInvalidValues: function () {
            if (this.referenceValues.foodLeftoversVolumeInGlobalWaste < 0.01 ||
                this.referenceValues.foodLeftoversVolumeInGlobalWaste > 100) {
                return true;
            }
            if (this.referenceValues.actualFoodLeftoversInFoodWaste < 0.01 ||
                this.referenceValues.actualFoodLeftoversInFoodWaste > 100) {
                return true;
            }

            // Si tout est OK, il n'y a pas d'erreur
            return false;
        },
    }
}
