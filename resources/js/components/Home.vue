<template>
    <div class="py-4 px-4">

        <!-- fenêtre modale d'aide (HelpModal.vue) -->
        <help-modal v-if="showModal" @close="showModal = false"></help-modal>

        <h1>Accueil</h1>
        <div>
            <p>
                Il semble que vous ayez déjà réalisé des simulations sur ce site depuis ce navigateur pour la dernière
                fois en date du 15/12/2020
            </p>
            <div class="d-flex justify-content-around">
                <button class="btn btn-primary">Les consulter</button>
                <button class="btn btn-danger">Les effacer</button>
            </div>
        </div>

        <p>Pour réaliser votre première simulation, vous aurez besoin :</p>
        <ul>
            <li>du nombre de repas produits dans votre établissement (par an)</li>
            <li>du coût de revient unitaire d'un repas <button id="help" @click="showModal = true">?</button></li>
            <li>du volume de déchets ménagers produits par votre établissement (en tonnes)</li>
            <li>du coût de traitement des déchets (en euros par tonne)</li>
        </ul>
        <p>Grâce à ces données, vous obtiendrez une estimation économique et quantitative du gaspillage alimentaire de
            votre établissement en 15 minutes</p>
        <p>Aucune des informations saisies sur cet outil ne sont sauvegardées en ligne. Le stockage est réalisé
            uniquement au sein de votre navigateur, et donc uniquement sur cet ordinateur</p>


        <router-link to="/input" tag="span">
            <button class="btn btn-primary btn-lg btn-block py-4" id="im-ready-button">Je suis prêt.e</button>
        </router-link>
    </div>
</template>

<script>
    // fenêtre modale d'aide
    import HelpModal from "./HelpModal";

    export default {

        // Déclaration de la parenté de ce composant
        components: {
            HelpModal
        },

        // initialisation des données utilisées par le composant
        data() {
            return {

                // par défaut, la fenêtre modale est masquée
                showModal: false
            }
        },
    }
</script>

<style>
    #im-ready-button {
        display: block;
        max-width: 500px;
        margin: auto;
    }

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
</style>
