<template>
    <div class="results-container flex flex-column">
        <div>
            <!-- Onglets -->
            <ul class="nav nav-tabs" :id="basketId + '-nav-tab'" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active button btn-2" :id="basketId + '-carbon-tab'" data-toggle="tab"
                       :href="'#' + basketId + '-carbon'" role="tab" aria-controls="home"
                       aria-selected="true">{{ impact.title.carbon }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link button btn-2" :id="basketId + '-finance-tab'" data-toggle="tab"
                       :href="'#' + basketId + '-finance'" role="tab" aria-controls="profile"
                       aria-selected="false">{{ impact.title.money }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link button btn-2 nav-ico" :id="basketId + '-graph-tab'" data-toggle="tab"
                       :href="'#' + basketId + '-graph'" role="tab" aria-controls="contact"
                       aria-selected="false"></a>
                </li>
            </ul>

            <div class="custom-control switch center">
                <label>
                    Catégories
                    <input v-model="listByBlocks" type="checkbox" class="custom-control-input" @change="updateChart"><span class="lever"></span>
                    Blocs
                </label>
            </div>
        </div>

        <div class="flex-grow-1 flex flex-column">
            <!-- Résultats -->
            <div class="tab-content flex-grow-1 flex flex-column">
                <!-- Bilan carbone / catégories -->
                <div class="tab-pane fade show active flex-grow-1 position-relative" :id="basketId + '-carbon'" role="tabpanel">
                    <!-- Par catégories -->
                    <div v-if="!listByBlocks">
                        <div v-for="category in cats" class="results-row flex-horizontal">
                            <div class="results-categorie-name">{{ category.name }}</div>
                            <div :class="getClasses()">
                                <a class="info-bubble">{{ category.carbonFormattedImpact }} {{ category.carbonImpactUnit }}
                                    <span>{{ impact.product_impact }} : {{ category.productFormattedImpact }} {{ category.productImpactUnit }}<br>
                                {{ impact.transportation_impact }} : {{ category.transportationFormattedImpact }} {{ category.transportationImpactUnit }}</span>
                                </a>
                            </div>
                            <div v-if="!isFirst" class="results-div" v-html="getStyle(category.carbonDelta)"></div>
                        </div>
                    </div>
                    <!-- Par blocs -->
                    <div v-else>
                        <div v-for="block in blcks" class="results-row flex-horizontal">
                            <div class="results-categorie-name">{{ block.name }}</div>
                            <div :class="getClasses()">
                                <a class="info-bubble">{{ block.carbonFormattedImpact }} {{ block.carbonImpactUnit }}
                                    <span>{{ impact.product_impact }} : {{ block.productFormattedImpact }} {{ block.productImpactUnit }}<br>{{ impact.transportation_impact }} : {{ block.transportationFormattedImpact }} {{ block.transportationImpactUnit }}
                        </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Total -->
                    <div class="sum">
                        <div class="results-row flex-horizontal final-results">
                            <div class="results-categorie-name">{{ sum }}</div>
                            <div :class="getClasses()">
                                <a class="info-bubble">{{ globalCarbonImpact.formatted }} {{ globalCarbonImpact.unit }}
                                    <span>{{ impact.product_impact }} : {{ globalProductImpact.formatted }} {{ globalProductImpact.unit }}<br>
                                    {{ impact.transportation_impact }} : {{ globalTransportationImpact.formatted }} {{ globalTransportationImpact.unit }}</span>
                                </a>
                            </div>
                            <div v-if="!isFirst" class="results-div" v-html="getStyle(carbonDelta)"></div>
                        </div>
                        <div class="results-comment">
                            <div>{{ impact.carbon }} : {{ equivalent }} {{ equivalentUnit }}</div>
                        </div>
                    </div>
                </div>

                <!-- Bilan financier / catégories -->
                <div class="tab-pane fade flex-grow-1 position-relative" :id="basketId + '-finance'" role="tabpanel">
                    <!-- Par catégories -->
                    <div v-if="!listByBlocks">
                        <div v-for="category in cats" class="results-row flex-horizontal">
                            <div class="results-categorie-name">{{ category.name }}</div>
                            <div class="results-div">
                                <a class="info-bubble">{{ category.moneySpent }} €
                                    <span>{{ category.co2PerEuroFormatted }} {{ category.co2PerEuroUnit }}</span>
                                </a>
                            </div>
                            <div v-if="!isFirst" class="results-div" v-html="getStyle(category.moneyDelta)"></div>
                        </div>
                    </div>
                    <!-- Par blocs -->
                    <div v-else>
                        <div v-for="block in blcks" class="results-row flex-horizontal">
                            <div class="results-categorie-name">{{ block.name }}</div>
                            <div class="results-div">
                                <a class="info-bubble">{{ block.moneySpent }} €
                                    <span>{{ block.co2PerEuroFormatted }} {{ block.co2PerEuroUnit }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Total -->
                    <div class="sum">
                        <div class="results-row flex-horizontal final-results">
                            <div class="results-categorie-name">{{ sum }}</div>
                            <div class="results-div">
                                <a class="info-bubble">{{ globalMoneySpend }} €
                                    <span>{{ globalCO2PerEuroFormatted }} {{ globalCO2PerEuroUnit }}</span>
                                </a>
                            </div>
                            <div v-if="!isFirst" class="results-div" v-html="getStyle(moneyDelta)"></div>
                        </div>
                        <div class="results-comment">
                            <div>{{ impact.co2_per_euro }} : {{ globalCO2PerEuroFormatted }} {{ globalCO2PerEuroUnit }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- "Camembert" graphs -->
                <div class="tab-pane fade" :id="basketId + '-graph'" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="custom-control switch center">
                        <label>
                            {{ impact.title.carbon }}
                            <input v-model="chartViewMoney" type="checkbox" class="custom-control-input" @change="updateChart"><span class="lever"></span>
                            {{ impact.title.money }}
                        </label>
                    </div>
                    <div class="my-4 text-center">
                        <span v-if="chartViewMoney">{{ ventilation.money }}</span>
                        <span v-else>{{ ventilation.carbon }}</span>
                    </div>
                    <canvas :id="basketId + '-chart'" width="370px" height="400px"></canvas>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';
import NumberFormatter from "../../helpers/NumberFormatter";
import basketLogic from "../../helpers/carbon-simulation/calculations/basketLogic";
import resultsCharts from "../../helpers/carbon-simulation/resultsCharts";
import BasketSimulatorText from "../../../texts/carbonSimulator/BasketSimulatorText";

export default {
    mixins: [
        basketLogic,
        NumberFormatter,
        resultsCharts,
        BasketSimulatorText,
    ],
    props: {
        index: Number,
        basket: Object,
        products: Array,
        categories: Array,
        basketId: String,
        isFirst: Boolean,
        previousBasket: Object,
        firstBasket: Object,
        compareToPreviousBasket: Boolean,
        blocks: Array,
    },
    computed: {
        carbonDelta: function () {
            return this.getDelta(this.globalCarbonImpactVariable, this.comparedBasket.results.globalCarbonImpact);
        },
        moneyDelta: function () {
            return this.getDelta(this.globalMoneySpend, this.comparedBasket.results.globalMoneySpend);
        },
        equivalentUnit: function () {
            if (this.equivalent === 'négligeable') {
                return;
            }
            if (this.equivalent < 2) {
                return "km en voiture";
            }
            return "kms en voiture";
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
        compareToPreviousBasket: function () {
            this.updateResults();
        },
    },
    data() {
        return {
            cats: [],
            blcks: [],

            globalProductImpact: {},
            globalTransportationImpact: {},
            globalCarbonImpact: {},
            globalCarbonImpactVariable: Number,

            globalMoneySpend: Number,
            globalCO2PerEuro: Number,
            globalCO2PerEuroFormatted: Number,
            globalCO2PerEuroUnit: String,

            listByBlocks: false,
            chart: Chart,
            chartViewMoney: false,

            results: {},

            comparedBasket: {},

            equivalent: null,
        }
    },
    created() {
        this.updateResults();
    },
    mounted() {
        setTimeout(() => {
            this.updateResults();
            this.createChart(this.basketId + '-chart');
        }, 1500);
        events.$on('update-results', this.updateResults);
    },
    methods: {
        updateResults() {
            if (!this.isFirst) {
                this.comparedBasket = this.compareToPreviousBasket ? this.previousBasket : this.firstBasket;
            }

            this.cats = JSON.parse(JSON.stringify(this.categories));
            this.updateInternalBlocks();

            this.getCarbonImpactByCategory();
            this.getCarbonImpactByBlock();
            this.getGlobalCarbonImpact();

            this.getMoneyImpactByCategory();
            this.getMoneyImpactByBlock();
            this.getGlobalMoneyImpact();

            if (!this.isFirst) {
                this.getDeltas();
            } else {
                this.cats.forEach((cat) => {
                    cat.carbonDelta = null;
                    cat.moneyDelta = null;
                });
            }

            if (this.isFirst) {
                this.basket.globalCarbonDelta = null;
                this.basket.globalMoneyDelta = null;
            } else {
                this.basket.globalCarbonDelta = this.carbonDelta;
                this.basket.globalMoneyDelta = this.moneyDelta;
            }

            this.updateEquivalence();

            this.sendResults();
            this.$forceUpdate();
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
        getCarbonImpactByBlock() {
            this.blcks.forEach(block => {
                this.getCarbonImpactForBlock(block);
            });
        },
        getMoneyImpactByBlock() {
            this.blcks.forEach(block => {
                this.getMoneyImpactForBlock(block);
            });
        },
        getDeltas() {
            this.cats.forEach((cat, index) => {
                this.getDeltasFor(cat, index);
            });
        },
        updateEquivalence() {
            if (this.globalCarbonImpact.impact < 0.253) { // en dessous ça ne fais pas un km
                this.equivalent = 'négligeable';
            } else {
                this.equivalent = this.roundToOneDecimal(this.globalCarbonImpact.impact / 0.253);
                // faire 10 000 km en voiture c’est émettre 2.53 tonnes de CO2
                // "la voiture moyenne émettant 0,253 kg CO2e/km"
                // Source: ADEME https://datagir.ademe.fr/blog/transport/impact-carbone-mobilite-eco-deplacement.md
            }
        },
        updateInternalBlocks() {
            this.blcks = [];
            this.blocks.forEach(block => {
                this.blcks.push({number: block[2], name: this.basket.products[block[0]].name});
            });
            this.blcks.push({name: 'Produits hors blocs', number: -1});
        },

        sendResults() {
            this.results.cats = this.cats;
            this.results.blocks = this.blcks;
            this.results.equivalence = this.equivalent + ' ' + this.equivalentUnit;
            this.results.co2PerEuro = this.globalCO2PerEuroFormatted + ' ' +  this.globalCO2PerEuroUnit;
            this.results.globalProductImpact = this.globalProductImpact.impact;
            this.results.globalTransportationImpact = this.globalTransportationImpact.impact;
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
                return '<span><i class="icon icon-long-arrow-right up"></i> ' + value + ' </span>';
            } else if (value.startsWith('-')) {
                return '<span><i class="icon icon-long-arrow-right down"></i> ' + value + ' </span>';
            }
            return '<span>' + value + '</span>';
        },
        getClasses() {
            return [
                'results-div',
                this.isFirst ? 'first-basket' : ''
            ];
        },
    },
}
</script>
