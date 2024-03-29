<template>
    <div class="simulations">
        <draggable v-model="simulations"
                   class="dragArea"
                   @change="saveChangesToLocalStorage"
                   :animation="150"
                   handle=".handle"
                   chosenClass="handling"
                   filter=".ignore-draggable"
                   :preventOnFilter="false"
        >

            <simulation-item
                v-for="(simulation, index) in simulations"
                v-bind:key="simulation.id"
                v-bind:simulation="simulation"
                v-bind:index="index"
                v-bind:audit-data="auditData"
                v-bind:compare-to-previous-sim="compareToPreviousSim"
                v-bind:previous-simulation="previousSimulation(index)"
                @delete-simulation="deleteSimulation"
                @save-changes="saveChangesToLocalStorage"
                @update-simulations-component="updateSimulationsList"
                @update-simulations-component-will-full-info-for-export="updateSimulationsListWithFullInfo"
            >
            </simulation-item>

        </draggable>

        <div class="custom-control switch center">
            <label>
                {{ compare_to.audit }} <input type="checkbox" v-model="compareToPreviousSim" class="custom-control-input"><span class="lever"></span>{{ compare_to.previous_sim }}
            </label>
        </div>
    </div>
</template>

<script>

// import des dépendances
// bibliothèque de fonctions chargée de traiter la liste des simulations
import SimulationsHelper from "../../helpers/waste-simulation/component-specific/SimulationsHelper";
// intéraction avec le localStorage
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
// responsable de l'export Excel
import ExportHelper from "../../helpers/ExportHelper";
// pratique pour formatter les dates
import DateFormatter from "../../helpers/DateFormatter";
import ResultsPageText from "../../../texts/wasteSimulator/ResultsPageText";
// composant enfant
const SimulationItem = () => import(
    /* webpackChunkName: "js/waste-simulation/SimulationItem" */
    './SimulationItem.vue'
    );
// Vue-draggable (https://github.com/SortableJS/Vue.Draggable) pour le drag'n'drop
const draggable = () => import(
    /* webpackChunkName: "js/draggable" */
    'vuedraggable'
    );

export default {

    // Composants enfants
    components: {
        SimulationItem,
        draggable
    },

    // déclaration de dépendance à ces fichiers
    mixins: [
        SimulationsHelper,
        LocalStorageHelper,
        ExportHelper,
        DateFormatter,
        ResultsPageText,
    ],

    // Données reçues du composant parent (AuditItem.vue)
    props: {
        auditData: Object
    },

    // Initialisation des données utilisées par le composant
    data() {
        return {
            simulations: [],
            counter: 0,
            dataSource: null,
            export: {},
            compareToPreviousSim: false,
        }
    },

    // A l'initialisation du composant
    mounted() {

        // On vérifie qu'il existe ou non des simulations enregistrées en localStorage
        if (localStorage.hasOwnProperty('simulations')) {
            this.simulations = this.getSimulationsFromLocalStorage();
            this.refreshCounter();
        }

        // Fait le lien entre le composant grand-parent (ResultsPage.vue) où se trouve le bouton et ce composant
        events.$on('reset-simulations', this.resetSimulations);

        // listeners
        events.$on('export-simulations', this.exportSimulations);
        events.$on('add-simulation', this.addSimulationToSimList);

        // nécessaire pour savoir sur quoi se baser en cas de clic sur "nouvelle simulation"
        this.getDataSourceForNewSimulation();
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

        // Utile pour le composant enfant SimulationItem.vue, permet de lui communiquer les données de son prédécesseur
        previousSimulation(index) {

            // si la simulation est en première position, sa "previousSimulation" se trouve être l'audit
            return index > 0 ? this.simulations[index - 1] : this.auditData
        },
    },
}
</script>
