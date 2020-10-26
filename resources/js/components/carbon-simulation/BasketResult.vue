<template>
    <div class="results-container">

        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active button btn-2" id="basket1-carbon-tab" data-toggle="tab" :href="'#' + basketId + '-carbon'" role="tab" aria-controls="home"
                   aria-selected="true">Bilan carbone</a>
            </li>
            <li class="nav-item">
                <a class="nav-link button btn-2" id="basket1-finance-tab" data-toggle="tab" :href="'#' + basketId + '-finance'" role="tab" aria-controls="profile"
                   aria-selected="false">Bilan financier</a>
            </li>
            <li class="nav-item">
                <a class="nav-link button btn-2 nav-ico" id="#basket1-graph-tab" data-toggle="tab" :href="'#' + basketId + '-graph'" role="tab" aria-controls="contact"
                   aria-selected="false"></a>
            </li>
        </ul>

        <div class="tab-content">

            <div class="tab-pane fade show active" :id="basketId + '-carbon'" role="tabpanel">
                <div v-for="category in cats" class="results-row flex-horizontal">
                    <div class="results-categorie-name">{{ category.name }}</div>
                    <div class="results-div">
                        <a class="info-bubble">{{ category.carbonFormattedImpact }} {{ category.carbonImpactUnit }}
                            <span>
                            Impact produit : {{ category.productFormattedImpact }} {{ category.productImpactUnit }}<br>
                            Impact transport : {{ category.transportationFormattedImpact }} {{ category.transportationImpactUnit }}
                        </span>
                        </a>
                    </div>
                    <div v-if="!isFirst" class="results-div">+ 42 %</div>
                </div>
                <div class="results-row flex-horizontal final-results">
                    <div class="results-categorie-name">Total</div>
                    <div class="results-div">
                        <a class="info-bubble">{{ globalCarbonImpact.impact }} {{ globalCarbonImpact.unit }}
                            <span>
                            Impact produit : {{ globalProductImpact.impact }} {{ globalProductImpact.unit }}<br>
                            Impact transport : {{ globalTransportationImpact.impact }} {{ globalTransportationImpact.unit }}
                        </span>
                        </a>
                    </div>
                    <div v-if="!isFirst" class="results-div">+ 42 %</div>
                </div>
                <div class="results-comment">
                    <div>Votre bilan carbone équivaut à un aller-retour Paris/New-York en avion</div>
                </div>
            </div>

            <div class="tab-pane fade" :id="basketId + '-finance'" role="tabpanel">
                <div v-for="category in cats" class="results-row flex-horizontal">
                    <div class="results-categorie-name">{{ category.name }}</div>
                    <div class="results-div">
                        <a class="info-bubble">{{ category.moneySpent }} €
                            <span>
                            {{ category.co2PerEuroFormatted }} {{ category.co2PerEuroUnit }}
                        </span>
                        </a>
                    </div>
                    <div v-if="!isFirst" class="results-div">+ 42 %</div>
                </div>
                <div class="results-row flex-horizontal final-results">
                    <div class="results-categorie-name">Total</div>
                    <div class="results-div">
                        <a class="info-bubble">{{ globalMoneySpend }} €
                            <span>
                            {{ globalCO2PerEuroFormatted }} {{ globalCO2PerEuroUnit }}
                        </span>
                        </a>
                    </div>
                    <div v-if="!isFirst" class="results-div">+ 42 %</div>
                </div>
                <div class="results-comment">
                    <div>Votre bilan carbone équivaut à un aller-retour Paris/New-York en avion</div>
                </div>
            </div>

            <div class="tab-pane fade" :id="basketId + '-graph'" role="tabpanel" aria-labelledby="contact-tab">
                <canvas :id="basketId + '-chart'" width="370px" height="400px"></canvas>
            </div>

        </div>
    </div>
</template>

<script>
    import NumberFormatter from "../../helpers/NumberFormatter";
    import basketLogic from "../../helpers/carbon-simulation/calculations/basketLogic";
    import Chart from 'chart.js';

    export default {
        mixins: [
            basketLogic,
            NumberFormatter
        ],
        props: {
            products: Array,
            categories: Array,
            basketId: String,
            isFirst: Boolean,
        },
        computed: {

        },
        watch: {
            products: {
                handler: function() {
                    this.updateResults();
                },
                deep: true
            },
        },
        data() {
            return {
                cats: [],

                globalProductImpact: {},
                globalTransportationImpact: {},
                globalCarbonImpact: {},

                globalMoneySpend: Number,
                globalCO2PerEuro: Number,
                globalCO2PerEuroFormatted: Number,
                globalCO2PerEuroUnit: String,
            }
        },
        mounted() {
            this.cats = JSON.parse(JSON.stringify(this.categories));

            setTimeout(() => {
                this.updateResults();
            }, 1500);

            this.createChart(this.basketId + '-chart', );
        },
        methods: {
            updateResults() {
                this.getCarbonImpactByCategory();
                this.getGlobalCarbonImpact();

                this.getMoneyImpactByCategory();
                this.getGlobalMoneyImpact();

                this.$forceUpdate();
            },
            getCarbonImpactByCategory() {
                this.cats.forEach(cat => {
                    this.getCarbonImpactFor(cat);
                })
            },
            getMoneyImpactByCategory() {
                this.cats.forEach(cat => {
                    this.getMoneyImpactFor(cat);
                })
            },

            createChart(chartId, chartData) {
                let ctx = document.getElementById(chartId).getContext('2d');
                let myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {}
                });
            },
        },
    }
</script>
