<template>
    <div class="py-4 px-4">
        <h1 class="mb-4">Simulateur de gaspillage <br> pour la restauration collective</h1>
        <h4 class="mb-4 text-center">Résultats et comparaisons de vos simulations</h4>

        <div class="pt-4">
            <p>Vous venez de réaliser un audit simplifié de votre gaspillage alimentaire, représenté par la première ligne du tableau ci-dessous</p>
            <p>Il vous permet de simuler les modifications de vos pratiques: réduction du volume de gaspillage alimentaire, optimisation du nombre de repas...</p>
            <p>Chaque simulation est comparée en temps réel avec celle qui la précède dans le tableau, n'hésitez pas à expérimenter !</p>
        </div>

        <div class="position-relative info p-3 mb-4">
            <div class="d-flex justify-content-end">
                <span v-if="!legendShown" class="mr-2 align-self-center colored">Légende</span>
                <button class="button alter" data-toggle="collapse" data-target="#legend" @click="toggleLegend" aria-expanded="true" aria-controls="legend">
                    <i id="collapse-icon" class="icon icon-angle-down reversed"></i>
                </button>
            </div>
            <div class="collapse show" id="legend">
                <p><i class="icon mr-2"></i> Commencez par ajouter une ou plusieurs simulations à votre audit</p>
                <p><input type="text" class="custom-input browser-default" value="Les champs de ce type" readonly> sont modifiables</p>
                <p><i class="icon mr-2"></i> Vous pouvez maintenant réorganiser vos simulations en les faisant glisser</p>
                <p><i class="icon mr-2"></i> Vous pouvez supprimer les simulations inutiles une par une</p>
                <p><i class="icon mr-2"></i> ou toutes les supprimer d'un seul clic</p>
                <p><i class="icon mr-2"></i> Le bouton "exporter" vous permet de récupérer l'ensemble des données sur votre logiciel de tableur</p>
            </div>
        </div>


        <div class="spacer">
            <audit-item v-bind:audit-raw-data="this.auditRawData"></audit-item>

            <div class="d-flex mt-4">
                <button class="button"
                        @click="addSimulation">
                    <i class="icon mr-2"></i>Ajouter une simulation
                </button>

                <button class="button alter"
                        @click="resetSimulations">
                    <i class="icon mr-2"></i>Je réinitialise toutes mes simulations
                </button>

                <button class="button ml-auto"
                        @click="exportSimulations"
                        :disabled="areSimulationsInvalid">
                    <i class="icon mr-2"></i>Exporter le rapport de simulation
                </button>
            </div>
        </div>

        <div class="text-center">
            <p class="mt-5">
                Bravo, vous venez de franchir la première étape de la démarche de <a href="#">la loi EGALIM <span
                class="icon"></span></a>
            </p>
            <p>
                Que faire de ces résultats ? Rendez vous sur le <a href="#">site ressource de l'ANAP pour découvrir les
                actions réalisables <span class="icon"></span></a>
            </p>
        </div>

    </div>
</template>

<script>

// import des composants enfants
import AuditItem from "./AuditItem"
// Logique de validation
import SimulationValidation from "../../helpers/waste-simulation/validation/SimulationValidation";
// import des helpers
import LocalStorageHelper from "../../helpers/LocalStorageHelper";

export default {

    // déclaration des composants enfants
    components: {
        AuditItem
    },

    // déclaration des helpers
    mixins: [
        LocalStorageHelper,
        SimulationValidation
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
            areSimulationsInvalid: true,
            legendShown: true
        }
    },

    // A l'initialisation du composant (i.e quand on arrive sur la "page")
    created() {

        // Si on vient de la page de saisie
        if (this.userInput) {
            this.handleUserInput();
        }

        // sinon (i.e si on vient directement de l'accueil par ex. on veut récupérer l'audit stocké en localStorage)
        else if (localStorage.hasOwnProperty('audit')) {
            this.auditRawData = this.getAuditFromLocalStorage();
        }

        // et si on arrive de nulle part et qu'il n'y a rien dans le localStorage, redirection vers la homepage
        else {
            this.$router.push({name: 'home'})
        }

        // Listener
        events.$on('validate', this.checkValidation);

        // HACK : ce timeout est nécessaire, sinon la variable areSimulationsInvalid est calculée avant d'avant d'avoir les données des simulations
        setTimeout(() => {
            this.validateSimulations();
        }, 1000);
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

        // Demande aux composants concernés de rassembler les données pour un export (Audit, Simulations et Simulation)
        exportSimulations() {
            events.$emit('export-simulations');
        },

        // envoie une demande au composant concerné (AuditSimulationList.vue)
        addSimulation() {
            events.$emit('add-simulation');
        },

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