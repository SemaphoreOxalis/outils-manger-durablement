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
                            Impact transport : {{
                                    category.transportationFormattedImpact
                                }} {{ category.transportationImpactUnit }}
                        </span>
                        </a>
                    </div>
                    <div v-if="!isFirst" class="results-div" v-html="getStyle(category.carbonDelta)"></div>
                </div>
                <div class="results-row flex-horizontal final-results">
                    <div class="results-categorie-name">Total</div>
                    <div class="results-div">
                        <a class="info-bubble">{{ globalCarbonImpact.formatted }} {{ globalCarbonImpact.unit }}
                            <span>
                            Impact produit : {{ globalProductImpact.formatted }} {{ globalProductImpact.unit }}<br>
                            Impact transport : {{
                                    globalTransportationImpact.formatted
                                }} {{ globalTransportationImpact.unit }}
                        </span>
                        </a>
                    </div>
                    <div v-if="!isFirst" class="results-div" v-html="getStyle(carbonDelta)"></div>
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
                    <div v-if="!isFirst" class="results-div" v-html="getStyle(category.moneyDelta)"></div>
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
                    <div v-if="!isFirst" class="results-div" v-html="getStyle(moneyDelta)"></div>
                </div>
                <div class="results-comment">
                    <div>Votre bilan carbone équivaut à un aller-retour Paris/New-York en avion</div>
                </div>
            </div>

            <div class="tab-pane fade" :id="basketId + '-graph'" role="tabpanel" aria-labelledby="contact-tab">
                <div class="custom-control switch center">
                    <label>
                        bilan carbone <input v-model="chartViewMoney" type="checkbox" class="custom-control-input" @change="updateChart">
                        <span class="lever"></span>
                        bilan financier
                    </label>
                </div>
                <div>
                    <span v-if="chartViewMoney">Ventilation des dépenses</span>
                    <span v-else>Ventilation de l'empreinte carbone en grammes de CO2</span>
                </div>
                <canvas :id="basketId + '-chart'" width="370px" height="400px"></canvas>
            </div>

        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';
import NumberFormatter from "../../helpers/NumberFormatter";
import basketLogic from "../../helpers/carbon-simulation/calculations/basketLogic";
import resultsCharts from "../../helpers/carbon-simulation/resultsCharts";

export default {
    mixins: [
        basketLogic,
        NumberFormatter,
        resultsCharts,
    ],
    props: {
        index: Number,
        products: Array,
        categories: Array,
        basketId: String,
        isFirst: Boolean,
        previousBasket: Object,
        firstBasket: Object,
        compareToPreviousBasket: Boolean,
    },
    computed: {
        // comparedBasket: function () {
        //     return this.compareToPreviousBasket ? this.previousBasket : this.firstBasket;
        // },
        carbonDelta: function () {
            return this.getDelta(this.globalCarbonImpactVariable, this.comparedBasket.results.globalCarbonImpact);
        },
        moneyDelta: function () {
            return this.getDelta(this.globalMoneySpend, this.comparedBasket.results.globalMoneySpend);
        },
    },
    watch: {
        products: {
            handler: function () {
                this.updateResults();
                this.updateChart();
            },
            deep: true
        },
        compareToPreviousBasket: function() {
            this.updateResults();
        },
    },
    data() {
        return {
            cats: [],

            globalProductImpact: {},
            globalTransportationImpact: {},
            globalCarbonImpact: {},
            globalCarbonImpactVariable: Number,

            globalMoneySpend: Number,
            globalCO2PerEuro: Number,
            globalCO2PerEuroFormatted: Number,
            globalCO2PerEuroUnit: String,

            chart: Chart,
            chartViewMoney: false,

            results: {},

            comparedBasket: {},
        }
    },
    created() {
        this.updateResults();
    },
    mounted() {
        this.createChart(this.basketId + '-chart');
        Vue.nextTick().then(function () {
            this.$forceUpdate();
        });
    },
    methods: {
        updateResults() {
            if(!this.isFirst) {
                this.comparedBasket = this.compareToPreviousBasket ? this.previousBasket : this.firstBasket;
            }

            this.cats = JSON.parse(JSON.stringify(this.categories));
            this.getCarbonImpactByCategory();
            this.getGlobalCarbonImpact();

            this.getMoneyImpactByCategory();
            this.getGlobalMoneyImpact();

            if(!this.isFirst) {
                this.getDeltas();
            }

            this.sendResults();
        },
        getCarbonImpactByCategory() {
            this.cats.forEach(cat => {
                this.getCarbonImpactFor(cat);
            });
        },
        getMoneyImpactByCategory() {
            this.cats.forEach(cat => {
                this.getMoneyImpactFor(cat);
            });
        },
        getDeltas() {
            this.cats.forEach((cat, index) => {
                this.getDeltasFor(cat, index);
            });
        },

        sendResults() {
            this.results.cats = this.cats;
            this.results.globalCarbonImpact = this.globalCarbonImpact.impact;
            this.results.globalMoneySpend = this.globalMoneySpend;
            events.$emit('save-baskets-results', this.index, this.results);
        },

        getDelta(basketCarbon, previousBasketCarbon) {
            let result = this.roundToOneDecimal(
                ((basketCarbon * 100) / previousBasketCarbon) - 100
            );
            if (isNaN(result)) {
                result = 0;
            }

            return result > 0 ? "+" + result + "%" : result + "%";
        },
        getStyle(value) {
            if (value.startsWith('+')) {
                return '<span class="bad"><i class="icon icon-long-arrow-right up"></i> ' + value + ' </span>';
            } else if (value.startsWith('-')) {
                return '<span class="good"><i class="icon icon-long-arrow-right down"></i> ' + value + ' </span>';
            }
            return '<span>' + value + '</span>';
        }
    },
}
</script>
