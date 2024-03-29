// helper pour le composant AuditSimulationList.vue

import DataBase from "../../DataBase";

export default {
    mixins: [
        DataBase,
    ],
    methods: {

        // Met à jour la liste des simulations avec les données strictement nécessaires au fonctionnement de l'application
        updateSimulationsList(simulation) {
            this.simulations[simulation.index].wasteCostPerDish = simulation.wasteCostPerDish;
            this.simulations[simulation.index].foodWasteCost = simulation.foodWasteCost;
            this.simulations[simulation.index].amountOfDishesWasted = simulation.amountOfDishesWasted;
            this.simulations[simulation.index].ratio = simulation.ratio;
            this.saveChangesToLocalStorage();
        },

        // Met à jour la liste des simulations avec les données complètes (différences et pourcentages) pour préparer un export
        updateSimulationsListWithFullInfo(simulation) {
            this.updateSimulationsList(simulation);

            this.simulations[simulation.index].deltas = {};
            this.simulations[simulation.index].deltas.dishesNumber = simulation.dishesNumberDelta;
            this.simulations[simulation.index].deltas.dishCost = simulation.dishCostDelta;
            this.simulations[simulation.index].deltas.dishWeight = simulation.dishWeightDelta;
            this.simulations[simulation.index].deltas.wasteTreatmentCost = simulation.wasteTreatmentCostDelta;
            this.simulations[simulation.index].deltas.foodWasteVolume = simulation.foodWasteVolumeDelta;
            this.simulations[simulation.index].deltas.wasteCostPerDish = simulation.wasteCostPerDishDelta;
            this.simulations[simulation.index].deltas.foodWasteCost = simulation.foodWasteCostDelta;
            this.simulations[simulation.index].deltas.amountOfDishesWasted = simulation.amountOfDishesWastedDelta;
            this.simulations[simulation.index].deltas.ratio = simulation.ratioDelta;

            this.simulations[simulation.index].percentages = {};
            this.simulations[simulation.index].percentages.dishesNumber = simulation.dishesNumberDeltaPercentage;
            this.simulations[simulation.index].percentages.dishCost = simulation.dishCostDeltaPercentage;
            this.simulations[simulation.index].percentages.dishWeight = simulation.dishWeightDeltaPercentage;
            this.simulations[simulation.index].percentages.wasteTreatmentCost = simulation.wasteTreatmentCostDeltaPercentage;
            this.simulations[simulation.index].percentages.foodWasteVolume = simulation.foodWasteVolumeDeltaPercentage;
            this.simulations[simulation.index].percentages.wasteCostPerDish = simulation.wasteCostPerDishDeltaPercentage;
            this.simulations[simulation.index].percentages.foodWasteCost = simulation.foodWasteCostDeltaPercentage;
            this.simulations[simulation.index].percentages.amountOfDishesWasted = simulation.amountOfDishesWastedDeltaPercentage;
            this.simulations[simulation.index].percentages.ratio = simulation.ratioDeltaPercentage;

            this.saveChangesToLocalStorage();
        },

        // Efface une simulation
        deleteSimulation: function (index) {
            this.simulations.splice(index, 1);
            this.refreshCounter();
            this.saveChangesToLocalStorage();
        },

        // Nécessaire pour savoir sur quoi doit se baser une 'nouvelle simulation'
        getDataSourceForNewSimulation() {
            this.dataSource = this.simulations.length === 0 ? this.auditData : this.simulations[this.simulations.length - 1];
        },

        // Ajoute une simulation
        addSimulationToSimList() {

            this.getDataSourceForNewSimulation();

            this.counter++;

            this.simulations.push(
                {
                    id: this.counter,
                    name: 'simulation ' + this.counter,
                    dishesNumber: this.dataSource.dishesNumber,
                    dishCost: this.dataSource.dishCost,
                    dishWeight: this.dataSource.dishWeight,
                    wasteTreatmentCost: this.dataSource.wasteTreatmentCost,
                    foodWasteVolume: this.dataSource.foodWasteVolume,
                    wasteCostPerDish: this.dataSource.wasteCostPerDish,
                    foodWasteCost: this.dataSource.foodWasteCost,
                    amountOfDishesWasted: this.dataSource.amountOfDishesWasted,
                    ratio: this.dataSource.ratio
                }
            );
            this.saveChangesToLocalStorage();
            this.log('GASPI : Nouvelle simulation')
            this.$nextTick(() => {
               events.$emit('validate-simulations');
            });
        },

        // Sauvegarde les changements des simulations en localStorage
        saveChangesToLocalStorage() {
            const sims = JSON.stringify(this.simulations);
            this.saveSimulationsToLocalStorage(sims);
        },

        // Remet à zéro les simulations (pas l'audit)
        resetSimulations() {
            this.deleteSimulationsFromLocalStorage();
            this.simulations = [];
            this.counter = 0;
        },
    }
}

