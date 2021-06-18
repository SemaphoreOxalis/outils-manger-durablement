<template>
    <div class="py-4 px-4">

        <!-- fenêtre modale d'aide (HelpModal.vue) -->
        <help-modal v-if="showModal" @close="showModal = false"></help-modal>

        <div class="row">

            <div class="col">
                <div v-html="localStorageDisclaimer"></div>

                <div class="info p-4 m-4" v-if="previousAuditDetectedInLocalStorage">
                    <p>{{ it_seems_you_have_sims_from }} <strong>{{ this.previousAuditDate }}</strong></p>
                    <div class="d-flex flex-column align-items-center">
                        <button class="button big-button d-flex p-4 justify-content-center mb-2" @click="goToPreviousAudit">
                            <div class="icon align-self-center mr-4"></div>
                            <div class="text-left big-button-line-height">
                                <strong>{{ prevBtn.goTo }}</strong><br><small>{{ prevBtn.sim }}<br>{{ prevBtn.from }} {{ previousAuditDate }}</small>
                            </div>
                        </button>

                        <div class="text-center">
                            <button class="button alter" @click="deletePreviousAudit"><span class="icon mr-4"></span>{{ delete_all_data }}</button>
                        </div>
                    </div>
                </div>

                <p>{{ cntrs.this_tool_has_generated }} {{ this.counters.auditsCounter }} {{ cntrs.audits }} {{ this.counters.simulationsCounter }} {{ cntrs.sims }}</p>

            </div>

            <div class="col p-4 m-4">
                <div v-html="howToUse"></div>


                <router-link to="input" tag="span">
                    <button class="button big-button d-flex p-4 m-2 justify-content-center">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left big-button-line-height">
                            <small>{{ lnchBtn.im_ready }}</small> <br> <strong>{{ lnchBtn.start }}</strong> <br> <small>{{ lnchBtn.new_sim }}</small>
                        </div>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// fenêtre modale d'aide
import GeneralText from "../../../texts/GeneralText";
import HomePageText from "../../../texts/wasteSimulator/HomePageText";
const HelpModal = () => import(
    /* webpackChunkName: "js/waste-simulation/HelpModal" */
    './HelpModal.vue'
    );
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
        GeneralText,
        HomePageText,
        LocalStorageHelper,
        DateFormatter,
        DataBase,
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
            previousAuditDate: null,

            localStorageDisclaimer: '',
            howToUse: '',
            button: null,
        }
    },

    // A l'initialisation du composant
    created() {
        this.checkPreviousAuditFromLocalStorage();
        this.fetchCountersFromDB();
    },

    async mounted() {
        this.localStorageDisclaimer = await this.fetchContent('Disclaimer LocalStorage');
        this.howToUse = await this.fetchContent('Gaspi - Préparation');


        this.$nextTick(() => {
            this.button = document.createElement('span');
            this.button.innerHTML = '<a class="button alter info-bubble" title="Aide" @click="displayModal">?</a>';
            this.button.addEventListener('click', this.displayModal);
            document.getElementById('add-help-modal-button').appendChild(this.button);
        })
    },

    beforeDestroy() {
        this.button.removeEventListener('click', this.displayModal);
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

        displayModal() {
            this.showModal = true;
        },
    },
}
</script>

