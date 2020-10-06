<template>
    <div class="py-4 px-4">
        <div v-if="showResultsModal" id="results-modal"></div>

        <div>
            <h4 class="mb-4 text-center">{{ your_results }}</h4>

            <transition name="modal" v-if="showResultsModal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">

                            <div class="modal-body">
                                <p>{{ modal.you_just_made_an_audit }}</p>
                                <p>{{ modal.your_food_waste_amounts_to }} <strong><span
                                    v-html="auditResults.foodWasteCost"></span></strong> {{ modal.euros_or }}
                                    <strong><span v-html="auditResults.amountOfDishesWasted"></span></strong> {{ modal.dishes }}</p>
                                <p>{{ modal.you_can_add_sims_to_this_table }}</p>
                                <p>{{ modal.each_sim_is_compared_to_the_one_above }}</p>
                            </div>

                            <div class="modal-footer">
                                <button class="modal-default-button button alter" @click="showResultsModal = false">
                                    {{ modal.closeBtn }}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </transition>

            <div class="position-relative info p-3 mb-4">
                <div class="d-flex justify-content-end">
                    <span v-if="!legendShown" class="mr-2 align-self-center colored">{{ how_to.title }}</span>
                    <button class="button alter" data-toggle="collapse" data-target="#legend" @click="toggleLegend"
                            aria-expanded="true" aria-controls="legend">
                        <i id="collapse-icon" class="icon icon-angle-down"></i>
                    </button>
                </div>
                <div class="collapse" id="legend">
                    <p><i class="icon mr-2"></i> {{ how_to.add_sims_to_audit }}</p>
                    <p><input type="text" class="custom-input browser-default" v-model="how_to.these_fields" readonly>
                        {{ how_to.are_editable }}</p>
                    <p><i class="icon mr-2"></i> {{ how_to.reorganize_sims }}</p>
                    <p><i class="icon mr-2"></i> {{ how_to.delete_one_sim }}</p>
                    <p><i class="icon mr-2"></i> {{ how_to.delete_all_sims }}</p>
                    <p><i class="icon mr-2"></i> {{ how_to.export_sims }}</p>
                </div>
            </div>

            <div class="spacer">
                <audit-item v-bind:audit-raw-data="this.auditRawData" @sent-audit-results="this.setAuditResults">
                </audit-item>

                <div class="d-flex mt-4">
                    <button class="button"
                            @click="addSimulation">
                        <i class="icon mr-2"></i>{{ btns.add_sim }}
                    </button>

                    <button class="button alter"
                            @click="resetSimulations">
                        <i class="icon mr-2"></i>{{ btns.reset_sims }}
                    </button>

                    <button class="button ml-auto"
                            @click="exportSimulations"
                            :disabled="areSimulationsInvalid">
                        <i class="icon mr-2"></i>{{ btns.export_sims }}
                    </button>
                </div>
            </div>

            <div class="text-center mt-5" id="further-actions">
                <p>
                    {{ congrats_you_just_completed }} <a href="https://agriculture.gouv.fr/egalim-ce-que-contient-la-loi-agriculture-et-alimentation" target="_blank">{{ egalim }} <span
                    class="icon"></span></a>
                </p>
                <p>
                    {{ what_to_do }} <a href="#">{{ go_to_anap_site }} <span class="icon"></span></a>
                </p>
            </div>
            <div class="text-center mt-2">
                <router-link to="input" tag="span">
                    <button class="button alter">
                        <i class="icon mr-2"></i>{{ btns.new_audit }}
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ResultsPageText from "../../../texts/wasteSimulator/ResultsPageText";
// import des composants enfants
const AuditItem = () => import(
    /* webpackChunkName: "js/waste-simulation/AuditItem" */
    './AuditItem.vue'
    );

// Logique de validation
import SimulationValidation from "../../helpers/waste-simulation/validation/SimulationValidation";
// import des helpers
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
import DataBase from "../../helpers/DataBase";

export default {

    // déclaration des composants enfants
    components: {
        AuditItem
    },

    // déclaration des helpers
    mixins: [
        ResultsPageText,
        LocalStorageHelper,
        SimulationValidation,
        DataBase
    ],

    // données à récupérer de la page Input
    props: {
        userInput: [Object, undefined],
        referenceValues: [Object, undefined]
    },

    // initialisation des données utilisées par le composant
    data() {
        return {
            auditRawData: {},
            simulationsErrors: [],
            areSimulationsInvalid: false,
            legendShown: false,
            auditResults: {},
            showResultsModal: false
        }
    },

    // A l'initialisation du composant (i.e quand on arrive sur la "page")
    created() {

        // Si on vient de la page de saisie
        if (this.userInput) {
            this.showResultsModal = true;
            this.incrementAuditCounter();
            this.handleUserInput();
        }

        // sinon (i.e si on vient directement de l'accueil par ex. on veut récupérer l'audit stocké en localStorage)
        else if (localStorage.hasOwnProperty('audit')) {
            this.auditRawData = this.getAuditFromLocalStorage();
        }

        // et si on arrive de nulle part et qu'il n'y a rien dans le localStorage, redirection vers la homepage
        else {
            this.$router.push({name: 'home-page'})
        }

        // Listener
        events.$on('validate', this.checkValidation);

        // HACK : ce timeout est nécessaire, sinon la variable areSimulationsInvalid est calculée avant d'avant d'avoir les données des simulations
        setTimeout(() => {
            this.validateSimulations();
            this.fetchAuditResults();
            this.$forceUpdate();
        }, 10);
    },

    // Fonctions inhérentes au composant
    methods: {

        // Efface les simulations (pas l'audit)
        resetSimulations() {
            // demande au composant Simulations d'effacer ses données
            events.$emit('reset-simulations');
        },

        // Traite les données saisies par l'utilisateur si il vient de réaliser un audit
        handleUserInput() {
            // on efface le localStorage (audit et simulations précédentes s'il y en a)
            this.clearLocalStorage();

            // On récupère les données saisies lors de la phase de saisie, qu'on stocke dans un seul objet par souci de practicité
            this.auditRawData = {...this.userInput, ...this.referenceValues, auditDate: Date.now()};
            const audit = JSON.stringify(this.auditRawData);

            // On enregistre l'audit en localStorage
            this.saveAuditToLocalStorage(audit);
        },

        fetchAuditResults() {
            events.$emit('get-audit-results');
        },

        setAuditResults(result) {
            this.auditResults.foodWasteCost = result.foodWasteCost;
            this.auditResults.amountOfDishesWasted = result.amountOfDishesWasted;
        },

        // Demande aux composants concernés de rassembler les données pour un export (Audit, Simulations et Simulation)
        exportSimulations() {
            events.$emit('export-simulations');
        },

        // envoie une demande au composant concerné (AuditSimulationList.vue)
        addSimulation() {
            events.$emit('add-simulation');
            this.incrementSimulationCounter();
        },

        // montre/cache la légende
        toggleLegend() {
            this.legendShown = !this.legendShown;

            $(".collapse").on('show.bs.collapse', function() {
                $("#collapse-icon").addClass("reversed");
            }).on('hide.bs.collapse', function() {
                $("#collapse-icon").removeClass("reversed");
            })
        }
    }
}
</script>
