<template>
    <div class="py-4 px-4">

        <!-- fenêtre modale d'aide (HelpModal.vue) -->
        <help-modal v-if="showModal" @close="showModal = false"></help-modal>

        <h1>Simulateur de gaspillage <br> pour la restauration collective</h1>
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
                    <div class="position-relative">
                        <button class="button big-button d-flex p-4 m-2" @click="goToPreviousAudit">
                            <div class="icon align-self-center mr-4"></div>
                            <div class="text-left small-line-height"><strong>Reprendre</strong><br><small>la simulation<br>du {{ previousAuditDate }}</small></div>
                        </button>

                        <div class="text-right">
                            <a class="button" @click="deletePreviousAudit"><span class="icon"></span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col p-4 m-4">
                <p>Pour réaliser votre première simulation, <strong>vous aurez besoin</strong> :</p>
                <ul>
                    <li>du nombre de repas produits dans votre établissement (par an)</li>
                    <li>du coût de revient unitaire d'un repas
                        <button id="help" @click="showModal = true">?</button>
                    </li>
                    <li>du volume de déchets ménagers produits par votre établissement (en tonnes)</li>
                    <li>du coût de traitement des déchets (en euros par tonne)</li>
                </ul>
                <p>
                    <strong>Grâce à ces données, vous obtiendrez une estimation économique et quantitative du gaspillage
                    alimentaire de votre établissement en 15 minutes</strong>
                </p>

                <router-link to="/input" tag="span">
                    <button class="button big-button d-flex p-4 m-2">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left small-line-height"><small>Je suis prêt</small> <br> <strong>Démarrer</strong> <br> <small>une nouvelle
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
import LocalStorageHelper from "../helpers/LocalStorageHelper";
import DateFormatter from "../helpers/DateFormatter";

export default {

    // Déclaration de la parenté de ce composant
    components: {
        HelpModal
    },

    // Bibliothèqye de fonctions custom
    mixins: [
        LocalStorageHelper,
        DateFormatter
    ],

    // initialisation des données utilisées par le composant
    data() {
        return {

            // par défaut, la fenêtre modale est masquée
            showModal: false,

            // propriétés utilisées pour afficher (ou non) la possibilité de se rendre directement à l'audit enregistré en localStorage
            previousAuditDetectedInLocalStorage: false,
            previousAuditDate: null
        }
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
            this.$router.push({name: 'results'})
        },

        // Efface l'audit enregistré en localStorage ainsi que les simulations associées
        deletePreviousAudit() {
            this.clearLocalStorage();
            this.previousAuditDetectedInLocalStorage = false;

            flash("Vos simulations ont bien été supprimées");
        },
    },

    // A l'initialisation du composant
    created() {
        this.checkPreviousAuditFromLocalStorage();
    }
}
</script>

<style>
#help {
    display: inline-block;
    background-color: #343a40;
    color: white;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    border-style: none;
}

.info {
    background-color: white;
    border-radius: 1rem;
}

.big-button {
    background-color: var(--main-color);
    background-image: linear-gradient(129deg, rgba(17, 153, 142,0.8), var(--main-color));
}

.big-button {
    font-size: 1rem;
}

.big-button .icon {
    font-size: 3rem;
}

.small-line-height {
    line-height: 25px;
}
</style>
