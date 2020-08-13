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
                @update-simulations-component-will-full-info-for-export="updateSimulationsListWithFullInfo"
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
import SimulationsHelper from "../helpers/SimulationsHelper";
import LocalStorageHelper from "../helpers/LocalStorageHelper";
import DateFormatter from "../helpers/DateFormatter";
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

    mixins: [
        SimulationsHelper,
        LocalStorageHelper,
        DateFormatter
    ],

    // Initialisation des données utilisées par le composant
    data() {
        return {
            simulations: [],
            counter: 0,
            dataSource: null,
            export: {}
        }
    },

    // Fonction inhérentes au composant
    methods: {

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

        // Utile pour le composant enfant Simulation.vue, permet de lui communiquer les données de son prédécesseur
        previousSimulation(index) {
            return index > 0 ? this.simulations[index - 1] : this.auditData
        },

        exportSimulations() {
            events.$emit('get-full-simulations-info-for-export');

            this.export.audit = this.auditData;
            this.export.audit.auditDate = this.getAuditDateFromLocalStorage()
            this.export.simulations = this.simulations;
        }
    },

    // A l'initialisation du composant
    mounted() {

        // On vérifie qu'il existe ou non des simulations enregistrées en localStorage
        if (localStorage.hasOwnProperty('simulations')) {
            this.simulations = this.getSimulationsFromLocalStorage();
            this.refreshCounter();
        }

        // Fait le lien entre le composant grand-parent (Results.vue) où se trouve le bouton et ce composant
        events.$on('reset-simulations', this.resetSimulations);

        events.$on('export-simulations', this.exportSimulations);

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
