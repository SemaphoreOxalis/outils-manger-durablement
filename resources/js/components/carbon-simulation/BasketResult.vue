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
                <div v-for="category in categories" class="results-row flex-horizontal">
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
                <div v-for="category in categories" class="results-row flex-horizontal">
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
            setTimeout(() => {
                this.updateResults();
            }, 1500);
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
                this.categories.forEach(category => {
                    this.getCarbonImpactFor(category);
                })
            },
            getMoneyImpactByCategory() {
                this.categories.forEach(category => {
                    this.getMoneyImpactFor(category);
                })
            },
        },
    }
</script>

<style>
.info-bubble:hover, .info-bubble:focus {
    background: rgba(0,0,0,.4);
    box-shadow: 0 1px 0 rgba(255,255,255,.4);
}

.info-bubble span {
    position: absolute;
    margin-top: 23px;
    margin-left: -35px;
    background-color: var(--main-color);
    color: var(--dark-color);
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0,0,0,.5);
    transform: scale(0) rotate(-12deg);
    transition: all .25s;
    opacity: 0;
    z-index: 10;
}
.info-bubble:hover span, .info-bubble:focus span {
    transform: scale(1) rotate(0);
    opacity: 1;
}
</style>
