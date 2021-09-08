<template>
    <div class="d-flex flex-column align-items-end vh-100">
        <main class="container mb-auto">
            <div class="py-4">
                <router-view></router-view>
            </div>
        </main>

        <!-- Bouton "J'ai une question ou un retour -->
        <div class="text-center mt-auto mb-2 sticky-link">
            <a class="button alter" href="https://airtable.com/shrFZqKu6MuVIK5DZ" target="_blank" @click="logClickOnFeedback">
                <i class="icon mr-2"></i>J'ai une question <br> ou un retour à faire
            </a>
        </div>

        <footer class="mt-auto w-100" id="general-footer">
            <!-- Compteurs, le cas échéant -->
            <p v-if="stats === 'gaspi' && showCounters" class="text-center pt-2">
                Cet outil a été utilisé pour générer {{counters.auditsCounter}} audits
                et {{counters.simulationsCounter}} simulations
            </p>
            <p v-if="stats === 'carbon' && showCounters" class="text-center pt-2">
                Sur cet outil, {{counters.productsCounter}} produits ont été ajoutés à
                <router-link :to="{ name: 'basket-simulator'}" tag="a">
                    {{counters.basketCounter}} listes de courses</router-link>, et
                <router-link :to="{ name: 'recipes-index'}" tag="a">
                    {{counters.recipesCounter}} recettes de Chef</router-link> ont été proposées
            </p>

            <!-- Footer tel que dans le wysiwyg admin -->
            <div v-html="footer"></div>

            <!-- Lien vers le changelog -->
            <p class="text-center">
                <small><router-link :to="{ name: 'changelog'}" tag="a">Changelog</router-link></small>
            </p>
        </footer>
    </div>
</template>

<script>
    import GeneralLayoutText from "../../texts/GeneralLayoutText";
    import DataBase from "../helpers/DataBase";
    export default {
        mixins: [
            GeneralLayoutText,
            DataBase,
        ],
        watch: {
            $route: function(to, from) {
                this.chooseFooterToDisplay(to.path);
            }
        },
        data() {
            return {
                showCounters: false,
                counters: {},
                stats: '',
                footer: `<div class="loader-spinner"></div>`,
            }
        },
        mounted() {
            this.fetchCountersFromDB();
            this.chooseFooterToDisplay(this.$route.path);
        },
        methods: {
            chooseFooterToDisplay(path) {
                if(path.startsWith('/waste-simulator')) {
                    this.showCounters = true;
                    this.stats = 'gaspi';
                    this.fetchFooter('Footer Gaspi');
                } else if (path.startsWith('/carbon-simulator')) {
                    this.showCounters = true;
                    this.stats = 'carbon';
                    this.fetchFooter('Footer Carbone');
                } else if (path.startsWith('/admin')) {
                    this.showCounters = false;
                    this.fetchFooter('Footer Admin');
                } else {
                    this.showCounters = false;
                    this.fetchFooter('Footer General');
                }
            },
            logClickOnFeedback() {
                this.log('Bouton de retour cliqué');
            }
        }
    }
</script>
