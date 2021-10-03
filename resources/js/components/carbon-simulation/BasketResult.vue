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
                                    <span>{{ impact.product_impact }}&nbsp;:&nbsp;{{ category.productFormattedImpact }}&nbsp;{{ category.productImpactUnit }}<br>
                                {{ impact.transportation_impact }}&nbsp;:&nbsp;{{ category.transportationFormattedImpact }}&nbsp;{{ category.transportationImpactUnit }}</span>
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
                                    <span>{{ impact.product_impact }}&nbsp;:&nbsp;{{ block.productFormattedImpact }}&nbsp;{{ block.productImpactUnit }}<br>
                                        {{ impact.transportation_impact }}&nbsp;:&nbsp;{{ block.transportationFormattedImpact }}&nbsp;{{ block.transportationImpactUnit }}
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
                                    <span>{{ impact.product_impact }}&nbsp;:&nbsp;{{ globalProductImpact.formatted }}&nbsp;{{ globalProductImpact.unit }}<br>
                                    {{ impact.transportation_impact }}&nbsp;:&nbsp;{{ globalTransportationImpact.formatted }}&nbsp;{{ globalTransportationImpact.unit }}</span>
                                </a>
                            </div>
                            <div v-if="!isFirst" class="results-div" v-html="getStyle(carbonDelta)"></div>
                        </div>
                        <div class="results-comment">
                            <div class="guests-number">
                                Soit, pour <input type="number" class="browser-default results-select guests" min="1" step="1" v-model="guests" oninput="this.style.width = ((this.value.length + 1) * 7) + 'px';" @change="updateResults">
                                personne<span v-if="guests > 1">s</span>,
                                {{ this.roundToTwoDecimal(globalCarbonImpact.formatted / guests) }}&nbsp;{{ globalCarbonImpact.unit }} par personne.
                            </div>
                            <div class="d-flex justify-content-center change-equivalence">
                                <span>Equivalent : {{ this.separateThousands(equivalent) }}</span>
                                <select v-model="selectedEquivalence" @change="updateResults" class="results-select" :id="'results-select-' + basketId">
                                    <option v-for="eq in equivalences" v-bind:value="eq">
                                        {{ eq.unit }}
                                    </option>
                                </select>
                                <a v-if="selectedEquivalence.source" class="info-bubble product-info-bubble btn-ico alt tool info ml-2 align-self-baseline">
                                    <span><a :href="selectedEquivalence.source" target="_blank"><strong class="icon">&nbsp;Source</strong></a></span>
                                </a>
                                <br>
                                <span class="hidden-span" :id="'hidden-span-' + basketId"></span>
                            </div>
                            <div v-if="guests > 1"> ({{ this.separateThousands(this.roundToOneDecimal(equivalent / guests)) }} par personne)</div>
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
                                    <span>{{ category.co2PerEuroFormatted }}&nbsp;{{ category.co2PerEuroUnit }}</span>
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
                                    <span>{{ block.co2PerEuroFormatted }}&nbsp;{{ block.co2PerEuroUnit }}</span>
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
                                    <span>{{ globalCO2PerEuroFormatted }}&nbsp;{{ globalCO2PerEuroUnit }}</span>
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
        equivalences: Array,
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
            return this.selectedEquivalence.unit;
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

            guests: 1,
            selectedEquivalence: {},
            equivalent: null,
        }
    },
    created() {
        this.updateResults();
    },
    mounted() {
        setTimeout(() => {
            this.selectedEquivalence = this.equivalences[0];
            this.updateResults();
            this.createChart(this.basketId + '-chart');
            let select = '#results-select-' + this.basketId;
            let span = '#hidden-span-' + this.basketId;
            $(select).change(function() {
               $(select).width($(span).html($(select).find(':selected').text()).width() + 8);
            });
            $(select).width($(span).html(this.equivalences[0].unit).width() + 8);
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
            if (this.globalCarbonImpact.impact < (1 / this.selectedEquivalence.rate)) { // en dessous ça ne fais pas une "unité" de l'équivalence
                this.equivalent = 'négligeable';
            } else {
                this.equivalent = this.roundToOneDecimal(this.globalCarbonImpact.impact * this.selectedEquivalence.rate);
            }
        },
        updateInternalBlocks() {
            this.blcks = [];
            if(this.blocks.length && this.basket.products.length) {
                this.blocks.forEach(block => {
                    this.blcks.push({number: block[2], name: this.basket.products[block[0]].name});
                });
            }
            this.blcks.push({name: 'Produits hors blocs', number: -1});
        },

        sendResults() {
            this.results.cats = this.cats;
            this.results.blocks = this.blcks;
            this.results.equivalent = this.equivalent;
            this.results.equivalentUnit = this.equivalentUnit;
            this.results.co2PerEuro = this.globalCO2PerEuroFormatted + ' ' +  this.globalCO2PerEuroUnit;
            this.results.globalProductImpact = this.globalProductImpact.impact;
            this.results.globalTransportationImpact = this.globalTransportationImpact.impact;
            this.results.globalCarbonImpact = this.globalCarbonImpact.impact;
            this.results.globalMoneySpend = this.globalMoneySpend;
            this.results.guests = this.guests;
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
