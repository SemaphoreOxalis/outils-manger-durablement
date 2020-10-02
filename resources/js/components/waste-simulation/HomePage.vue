<template>
    <div class="py-4 px-4">

        <!-- fenêtre modale d'aide (HelpModal.vue) -->
        <help-modal v-if="showModal" @close="showModal = false"></help-modal>

        <div class="row">

            <div class="col">
                <div class="info p-4 m-4">
                    <p>
                        <i>Aucune des informations saisies sur cet outil ne sont sauvegardées en ligne. Le stockage est
                            réalisé uniquement au sein de votre navigateur, et donc uniquement sur cet ordinateur</i>
                    </p>
                </div>

                <div class="info p-4 m-4" v-if="previousAuditDetectedInLocalStorage">
                    <p>
                        Il semble que vous ayez déjà réalisé des simulations sur ce site depuis ce navigateur pour la dernière
                        fois en date du <strong>{{ this.previousAuditDate }}</strong>
                    </p>
                    <div class="d-flex flex-column align-items-center">
                        <button class="button big-button d-flex p-4 justify-content-center mb-2" @click="goToPreviousAudit">
                            <div class="icon align-self-center mr-4"></div>
                            <div class="text-left big-button-line-height"><strong>Reprendre</strong><br><small>la simulation<br>du {{ previousAuditDate }}</small></div>
                        </button>

                        <div class="text-center">
                            <button class="button alter" @click="deletePreviousAudit"><span class="icon mr-4"></span>Effacer toutes les données</button>
                        </div>
                    </div>
                </div>

                <p>Cet outil a été utilisé pour générer {{ this.counters.auditsCounter }} audits et {{ this.counters.simulationsCounter }} simulations</p>

            </div>

            <div class="col p-4 m-4">
                <p>Pour réaliser votre première simulation, <strong>vous aurez besoin</strong> :</p>
                <ul class="browser-default">
                    <li>du nombre de repas produits dans votre établissement (par an)</li>
                    <li>du coût de revient unitaire d'un repas
                        <a class="button alter" @click="showModal = true">?</a>
                    </li>
                    <li>du poids moyen d'un repas (en g)</li>
                    <li>du volume de déchets ménagers produits par votre établissement (en tonnes)</li>
                    <li>du coût de traitement des déchets (en euros par tonne)</li>
                </ul>
                <p>
                    <strong>Grâce à ces données, vous obtiendrez une estimation économique et quantitative du gaspillage
                    alimentaire de votre établissement en 15 minutes</strong>
                </p>

                <router-link to="/input" tag="span">
                    <button class="button big-button d-flex p-4 m-2 justify-content-center">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left big-button-line-height"><small>Je suis prêt</small> <br> <strong>Démarrer</strong> <br> <small>une nouvelle
                            simulation</small></div>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// fenêtre modale d'aide
import HelpModal from "./HelpModal";
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
import DateFormatter from "../../helpers/DateFormatter";
import DataBase from "../../helpers/DataBase";

export default {

    // Déclaration de la parenté de ce composant
    components: {
        HelpModal
    },

    // Bibliothèqye de fonctions custom
    mixins: [
        LocalStorageHelper,
        DateFormatter,
        DataBase
    ],

    // initialisation des données utilisées par le composant
    data() {
        return {
            // initialise les compteurs
            counters: {
                auditsCounter: 0,
                simulationsCounter: 0
            },

            // par défaut, la fenêtre modale est masquée
            showModal: false,

            // propriétés utilisées pour afficher (ou non) la possibilité de se rendre directement à l'audit enregistré en localStorage
            previousAuditDetectedInLocalStorage: false,
            previousAuditDate: null
        }
    },

    // A l'initialisation du composant
    created() {
        this.checkPreviousAuditFromLocalStorage();
        this.fetchCountersFromDB();
    },

    methods: {
        checkPreviousAuditFromLocalStorage() {
            // On récupère l'audit stocké en localStorage s'il y en a un
            if (localStorage.hasOwnProperty('audit')) {
                this.previousAuditDetectedInLocalStorage = true;
                this.previousAuditDate = this.getAuditDateFromLocalStorage();
            }
        },

        // Si un audit a été effectué, possibilité de s'y rendre directement
        goToPreviousAudit() {
            this.$router.push({name: 'results-page'})
        },

        // Efface l'audit enregistré en localStorage ainsi que les simulations associées
        deletePreviousAudit() {
            this.clearLocalStorage();
            this.previousAuditDetectedInLocalStorage = false;

            flash("Vos simulations ont bien été supprimées");
        },
    },
}
</script>

