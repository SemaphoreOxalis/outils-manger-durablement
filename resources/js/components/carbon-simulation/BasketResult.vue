<template>
    <div class="results-container">

        <ul class="nav nav-tabs" :id="basketId + '-nav-tab'" role="tablist">
            <li class="nav-item">
                <a class="nav-link active button btn-2" :id="basketId + '-carbon-tab'" data-toggle="tab"
                   :href="'#' + basketId + '-carbon'" role="tab" aria-controls="home"
                   aria-selected="true">Bilan carbone</a>
            </li>
            <li class="nav-item">
                <a class="nav-link button btn-2" :id="basketId + '-finance-tab'" data-toggle="tab"
                   :href="'#' + basketId + '-finance'" role="tab" aria-controls="profile"
                   aria-selected="false">Bilan financier</a>
            </li>
            <li class="nav-item">
                <a class="nav-link button btn-2 nav-ico" :id="basketId + '-graph-tab'" data-toggle="tab"
                   :href="'#' + basketId + '-graph'" role="tab" aria-controls="contact"
                   aria-selected="false" @click="resetGraphData"></a>
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
                            Impact transport : {{
                                    category.transportationFormattedImpact
                                }} {{ category.transportationImpactUnit }}
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
                            Impact transport : {{
                                    globalTransportationImpact.impact
                                }} {{ globalTransportationImpact.unit }}
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
    computed: {},
    watch: {
        products: {
            handler: function () {
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

            chart: Object,
            chartData: {
                labels: [],
                values: [],
                money: [],
                backgroundColors: [],
                colors: [],
                hoverColors: [],
            },
            chartColors: [
                [255, 99, 132],
                [54, 162, 235],
                [255, 206, 86],
                [75, 192, 192],
                [153, 102, 255],
                [114, 42, 89],
                [42, 12, 241],
                [200, 198, 202],
                [142, 58, 14],
                [10, 246, 158],
                [215, 102, 45],
                [123, 56, 126],
            ]
        }
    },
    mounted() {
        setTimeout(() => {
            this.updateResults();
            this.createChart(this.basketId + '-chart');
        }, 1500);

        // let chartId = '#' + this.basketId + '-graph-tab';
        // $(chartId).on('click', function () {
        //     console.log(chartId);
        // });
    },
    methods: {
        updateResults() {
            this.cats = JSON.parse(JSON.stringify(this.categories));
            this.getCarbonImpactByCategory();
            this.getGlobalCarbonImpact();

            this.getMoneyImpactByCategory();
            this.getGlobalMoneyImpact();

            this.updateChart(this.chart);

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

        createChart(chartId) {
            this.prepareChartLabels();
            this.prepareChartValues();
            this.getColors();

            let ctx = document.getElementById(chartId).getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: this.chartData.labels,
                    datasets: [
                        {
                            label: 'gCO2',
                            data: this.chartData.values,
                            backgroundColor: this.chartData.backgroundColors,
                            borderColor: this.chartData.colors,
                            hoverBackgroundColor: this.chartData.hoverColors,
                            borderWidth: 1,
                            hoverBorderWidth: 2,
                            //borderAlign: 'inner',
                        },
                        {
                            label: '€',
                            data: this.chartData.money,
                            backgroundColor: this.chartData.backgroundColors,
                            borderColor: this.chartData.colors,
                            hoverBackgroundColor: this.chartData.hoverColors,
                            borderWidth: 1,
                            hoverBorderWidth: 2,
                            //borderAlign: 'inner',
                        },
                    ]
                },
                options: {
                    animation: {
                        animateRotate: true,
                    },
                },
            });
        },
        prepareChartLabels() {
            this.cats.forEach(cat => {
                this.chartData.labels.push(cat.name);
            });
        },
        prepareChartValues() {
            this.cats.forEach(cat => {
                this.chartData.values.push(cat.carbonImpact);
                this.chartData.money.push(cat.moneySpent);
            });
        },
        getColors() {
            this.chartColors.forEach(color => {
                this.chartData.backgroundColors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.2)');
                this.chartData.hoverColors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0.5)');
                this.chartData.colors.push('rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)');
            });
        },
        resetGraphData() {

        },
        updateChart(chart) {
            console.log(chart);
            //chart.update();
        },
    },
}
</script>
