// Logique du composant SimulationItem.vue

export default {

    // propriétés recalculées dès qu'elles changent
    computed: {

        // Différences en valeur absolue et en pourcentage (previousSim se trouve être l'audit si la simulation est en première place)
        dishesNumberDelta() {
            return this.getDelta(this.simulation.dishesNumber, this.previousSim.dishesNumber);
        },

        dishesNumberDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.dishesNumber, this.previousSim.dishesNumber);
        },

        dishCostDelta() {
            return this.getDelta(this.simulation.dishCost, this.previousSim.dishCost);
        },

        dishCostDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.dishCost, this.previousSim.dishCost);
        },

        dishWeightDelta() {
            return this.getDelta(this.simulation.dishWeight, this.previousSim.dishWeight);
        },

        dishWeightDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.dishWeight, this.previousSim.dishWeight);
        },

        wasteTreatmentCostDelta() {
            return this.getDelta(this.simulation.wasteTreatmentCost, this.previousSim.wasteTreatmentCost);
        },

        wasteTreatmentCostDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.wasteTreatmentCost, this.previousSim.wasteTreatmentCost);
        },

        foodWasteVolumeDelta() {
            return this.getDelta(this.simulation.foodWasteVolume, this.previousSim.foodWasteVolume);
        },

        foodWasteVolumeDeltaPercentage() {
            return this.getDeltaPercentage(this.simulation.foodWasteVolume, this.previousSim.foodWasteVolume);
        },

        wasteCostPerDishDelta() {
            return this.getDelta(this.wasteCostPerDish, this.previousSim.wasteCostPerDish);
        },

        wasteCostPerDishDeltaPercentage() {
            return this.getDeltaPercentage(this.wasteCostPerDish, this.previousSim.wasteCostPerDish);
        },

        ratioDelta() {
            return this.getDelta(this.ratio, this.previousSim.ratio);
        },

        ratioDeltaPercentage() {
            return this.getDeltaPercentage(this.ratio, this.previousSim.ratio);
        },

        foodWasteCostDelta() {
            return this.getDelta(this.foodWasteCost, this.previousSim.foodWasteCost);
        },

        foodWasteCostDeltaPercentage() {
            return this.getDeltaPercentage(this.foodWasteCost, this.previousSim.foodWasteCost);
        },

        amountOfDishesWastedDelta() {
            return this.getDelta(this.amountOfDishesWasted, this.previousSim.amountOfDishesWasted);
        },

        amountOfDishesWastedDeltaPercentage() {
            return this.getDeltaPercentage(this.amountOfDishesWasted, this.previousSim.amountOfDishesWasted);
        },


        // coût du gaspillage alimentaire global = volume de gaspillage alimentaire X prix de traitement d'une T de déchets
        foodWasteCost: function () {
            let foodWasteVolumeInKg = this.simulation.foodWasteVolume * 1000;
            let dishWeightInKg = this.simulation.dishWeight / 1000;
            return this.roundToTwoDecimal(
                (this.simulation.foodWasteVolume * this.simulation.wasteTreatmentCost) + ((foodWasteVolumeInKg / dishWeightInKg) * this.simulation.dishCost)
            );
        },

        // coût du gaspillage par repas = coût du gaspillage alimentaire global / nombre de repas produits
        wasteCostPerDish: function () {
            return this.roundToThreeDecimal(
                this.foodWasteCost / this.simulation.dishesNumber
            );
        },

        // équivalence en nombre de repas = coût du gaspillage alimentaire global / prix de revient d'un repas
        amountOfDishesWasted: function () {
            return this.roundToOneDecimal(
                this.foodWasteCost / this.simulation.dishCost
            );
        },
    },

    // Fonctions inhérentes au composant
    methods: {

        // Renvoie la différence en valeur absolue entre la simulation précédente et celle-ci
        getDelta(simData, sourceData) {
            let result = this.roundToThreeDecimal(simData - sourceData);

            // si le résultat et supérieur à 0, on lui ajoute le symbole '+'
            return result >= 0 ? "+" + result : result;
        },

        // Renvoie la différence en pourcentage entre la simulation précédente et celle-ci
        getDeltaPercentage(simData, sourceData) {
            let result = this.roundToOneDecimal(
                // - 100 pour ne pas avoir +150% si on passe de 100 à 150, mais seulement +50%
                ((simData * 100) / sourceData) - 100
            );

            // si le résultat est positif, on lui ajoute le symbole '+'
            return result > 0 ? "+" + result + "%" : result + "%";
        },
    },
}
