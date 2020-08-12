<template>
    <div>
        <draggable v-model="simulations"
                   class="dragArea"
                   @change="saveChangesToLocalStorage"
                   :animation="150"
                   handle=".handle"
                   chosenClass=".handling"
                   filter=".ignore-draggable"
                   :preventOnFilter="false"
        >

            <simulation
                v-for="(simulation, index) in simulations"
                v-bind:key="simulation.id"
                v-bind:simulation="simulation"
                v-bind:index="index"
                v-bind:audit-data="auditData"
                v-bind:previous-simulation="previousSimulation(index)"
                @delete-simulation="deleteSimulation"
                @save-changes="saveChangesToLocalStorage"
                @update-simulations-component="updateSimulationsList"
            >
            </simulation>

        </draggable>


        <button class="btn btn-primary btn-lg btn-block py-4 my-2" id="addSimulation" @click="addSimulation">
            <i class="fas fa-plus-circle mr-2"></i>Ajouter une simulation
        </button>

    </div>
</template>

<script>

// import des dépendances
import Simulation from "./Simulation";
import draggable from 'vuedraggable'

export default {

    // Composants enfants
    components: {
        Simulation,
        draggable
    },

    // Données reçues du composant parent (Audit.vue)
    props: [
        'auditData'
    ],

    // Initialisation des données utilisées par le composant
    data() {
        return {
            simulations: [],
            counter: 0,
            dataSource: null
        }
    },

    // Fonction inhérentes au composant
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
            this.updateSimulationsValues();
        },

        getDataSourceForNewSimulation() {
            if (this.simulations.length === 0) {
                this.dataSource = this.auditData;
            } else {
                this.dataSource = this.simulations[this.simulations.length - 1];
            }
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
                    wasteCostPerDish: null,
                    foodWasteCost: null,
                    amountOfDishesWasted: null
                }
            );
            this.saveChangesToLocalStorage();
        },

        // Sauvegarde les changements des simulations en localStorage
        saveChangesToLocalStorage() {
            const sims = JSON.stringify(this.simulations);
            localStorage.setItem('simulations', sims);
        },

        // Met à jour le compteur qui sert à incrémenter les id des simulations
        refreshCounter() {
            if (this.simulations.length > 0) {
                // inspiré de www.danvega.dev/blog/2019/03/14/find-max-array-objects-javascript
                // Plus efficace qu'un loop basique
                this.counter = Math.max(...this.simulations.map(simulation => simulation.id));
            } else {
                this.counter = 0;
            }
        },

        // Remet à zéro les simulations (pas l'audit)
        resetSimulations() {
            localStorage.removeItem('simulations');
            this.simulations = [];
            this.counter = 0;
        },

        // Utile pour le composant enfant Simulation.vue, permet de lui communiquer les données de son prédécesseur
        previousSimulation(index) {
            if (index > 0) {
                return this.simulations[index - 1];
            } else {
                return this.auditData;
            }
        }
    },

    // A l'initialisation du composant
    mounted() {

        // On vérifie qu'il existe ou non des simulations enregistrées en localStorage
        if (localStorage.hasOwnProperty('simulations')) {
            this.simulations = JSON.parse(localStorage.getItem('simulations'));
            this.refreshCounter();
        }

        // Fait le lien entre le composant grand-parent (Results.vue) où se trouve le bouton et ce composant
        events.$on('reset-simulations', this.resetSimulations);

        this.getDataSourceForNewSimulation();
    }
}
</script>

<style>
#addSimulation {
    display: block;
    max-width: 500px;
    margin: auto;
}
</style>
