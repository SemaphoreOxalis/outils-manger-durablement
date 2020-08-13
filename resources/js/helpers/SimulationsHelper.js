export default {
    methods: {
        updateSimulationsList(simulation) {
            this.simulations[simulation.index].wasteCostPerDish = simulation.wasteCostPerDish;
            this.simulations[simulation.index].foodWasteCost = simulation.foodWasteCost;
            this.simulations[simulation.index].amountOfDishesWasted = simulation.amountOfDishesWasted;
            this.saveChangesToLocalStorage();
        },

        // Efface une simulation
        deleteSimulation: function (index) {
            this.simulations.splice(index, 1);
            this.refreshCounter();
            this.saveChangesToLocalStorage();
        },

        getDataSourceForNewSimulation() {
            this.dataSource = this.simulations.length === 0 ? this.auditData : this.simulations[this.simulations.length - 1];
        },

        // Ajoute une simulation
        addSimulation() {

            this.getDataSourceForNewSimulation();

            this.counter++;

            this.simulations.push(
                {
                    id: this.counter,
                    name: 'simulation ' + this.counter,
                    dishesNumber: this.dataSource.dishesNumber,
                    dishCost: this.dataSource.dishCost,
                    wasteTreatmentCost: this.dataSource.wasteTreatmentCost,
                    foodWasteVolume: this.dataSource.foodWasteVolume,
                    wasteCostPerDish: this.dataSource.wasteCostPerDish,
                    foodWasteCost: this.dataSource.foodWasteCost,
                    amountOfDishesWasted: this.dataSource.amountOfDishesWasted
                }
            );
            this.saveChangesToLocalStorage();
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
