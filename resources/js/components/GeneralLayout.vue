<template>
    <div class="d-flex flex-column align-items-end vh-100">
        <main class="container mb-auto">
            <div class="py-4">
                <router-view></router-view>
            </div>
        </main>

        <div class="text-center mt-auto mb-2 sticky-link">
            <a class="button alter" href="https://airtable.com/shrFZqKu6MuVIK5DZ" target="_blank">
                <i class="icon mr-2"></i>J'ai une question <br> ou un retour à faire
            </a>
        </div>

        <footer class="mt-auto w-100" id="general-footer">
            <p v-if="showCounters" class="text-center pt-2" v-html="stats"></p>
            <div v-html="footer"></div>
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
                if(to.path.startsWith('/waste-simulator')) {
                    this.showCounters = true;
                    this.fillCounters('waste')
                    this.fetchFooter('Footer Gaspi');
                } else if (to.path.startsWith('/carbon-simulator')) {
                    this.showCounters = true;
                    this.fillCounters('carbon')
                    this.fetchFooter('Footer Carbone');
                } else if (to.path.startsWith('/admin')) {
                    this.showCounters = false;
                    this.fetchFooter('Footer Admin');
                } else {
                    this.showCounters = false;
                    this.fetchFooter('Footer General');
                }
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
            this.fetchFooter('Footer General');
        },
        methods: {
            fillCounters(tool) {
                if(tool === 'waste') {
                    this.stats = `Cet outil a été utilisé pour générer ${this.counters.auditsCounter} audits
                                    et ${this.counters.simulationsCounter} simulations`;
                }
                if(tool === 'carbon') {
                    this.stats = `Sur cet outil, ${this.counters.productsCounter} produits ont été ajoutés à
                                    <router-link :to="{ name: 'basket-simulator'}" tag="span">
                                        ${this.counters.basketCounter} listes de courses</router-link>, et
                                    <router-link :to="{ name: 'recipe-create'}" tag="span">
                                        ${this.counters.recipesCounter} recettes de Chef</router-link> ont été proposées`;
                }
            },
            renderCarbonSimStats() {

            }
        }
    }
</script>
