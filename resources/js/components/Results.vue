<template>
    <div class="py-4 px-4">
        <h1>Etape 2/2 : Résultats et comparaisons de vos simulations</h1>

        <div>
            <p>Vous venez de réaliser un audit simplifié de votre gaspillage alimentaire, représenté par la première ligne du tableau ci-dessous</p>
            <p>Il vous permet de simuler les modifications de vos pratiques: réduction du volume de gaspillage alimentaire, optimisation du nombre de repas...</p>
            <br>
            <p>Chaque simulation est comparée avec celle qui la précède dans le tableau, n'hésitez pas à expérimenter !</p>
        </div>

        <div style="border: 1px solid black;" class="p-3">
            <p><i class="fas fa-arrows-alt mr-2"></i> Vous pouvez réorganiser les simulations en les faisant glisser</p>
            <p><i class="fas fa-pencil-alt mr-2"></i> Les valeurs modifiables sont indiquées par ce symbole</p>
            <p><i class="fas fa-trash-alt mr-2"></i> Vous pouvez également supprimer les simulations inutiles</p>
            <p><i class="fas fa-file-export mr-2"></i> Le bouton "exporter" vous permet de récupérer l'ensemble des données sur votre logiciel de tableur</p>
        </div>

        <audit v-bind:audit-raw-data="this.auditRawData"></audit>

        <p class="mt-5">Bravo, vous venez de franchir la première étape de la démarche de <a href="#">la loi EGALIM</a></p>
        <p>Que faire de ces résultats ? Rendez vous sur le <a href="#">site ressource de l'ANAP pour découvrir les actions réalisables</a></p>

        <div class="d-flex justify-content-around">
            <button class="btn btn-primary" @click="exportSimulations"><i class="fas fa-file-export mr-2"></i>Exporter le rapport de simulation</button>
            <button class="btn btn-danger" @click="resetSimulations"><i class="fas fa-redo-alt mr-2"></i>Je réinitialise toutes mes simulations</button>
        </div>

    </div>
</template>

<script>

    // import des composants enfants
    import Audit from "./Audit"
    // import des helpers
    import LocalStorageHelper from "../helpers/LocalStorageHelper";
    export default {

        // déclaration des composants enfants
        components: {
            Audit
        },

        // données à récupérer de la page Input
        props: [
            'userInput',
            'referenceValues'
        ],

        mixins: [
          LocalStorageHelper
        ],

        // initialisation des données utilisées par le composant
        data() {
            return {
                auditRawData: {}
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

            // et si on arrive de nulle part, redirection vers la homepage
            else {
                this.$router.push({name: 'home'})
            }
        },

        // Fonctions inhérentes au composant
        methods: {

            // Efface les simulations (pas l'audit)
            resetSimulations() {
                events.$emit('reset-simulations');
            },

            handleUserInput() {
                this.clearLocalStorage();

                // On récupère les données saisies lors de la phase de saisie
                this.auditRawData = {...this.userInput, ...this.referenceValues, auditDate: Date.now()};

                const audit = JSON.stringify(this.auditRawData);
                this.saveAuditToLocalStorage(audit);
            },

            exportSimulations() {
                events.$emit('export-simulations');
            }
        }
    }
</script>
