<template>
    <div class="basket-results">

        <div class="nav justify-content-around">
            <a class="nav-link active button alter"
               :href="'#' + basketId + '-carbon-results'"
               data-toggle="tab">Bilan CO2</a>
            <a class="nav-link button alter"
               :href="'#' + basketId + '-money-results'"
               data-toggle="tab">Bilan €</a>
        </div>

        <div class="tab-content">
            <div class="tab-pane active"
                 :id="basketId + '-carbon-results'">
                <p>catégorie - impact global</p>
                <p v-for="category in categories">
                    {{ category.name }} :

                    <a href="#" class="info-bubble">{{ category.carbonFormattedImpact }} {{ category.carbonImpactUnit }}
                        <span>
                            Impact produit : {{ category.productFormattedImpact }} {{ category.productImpactUnit }}<br>
                            Impact transport : {{ category.transportationFormattedImpact }} {{ category.transportationImpactUnit }}
                        </span>
                    </a>
                </p>
                <hr>
                <p>
                    <strong>Total :</strong>
                    <a href="#" class="info-bubble">{{ globalCarbonImpact.impact }} {{ globalCarbonImpact.unit }}
                        <span>
                            Impact produit : {{ globalProductImpact.impact }} {{ globalProductImpact.unit }}<br>
                            Impact transport : {{ globalTransportationImpact.impact }} {{ globalTransportationImpact.unit }}
                        </span>
                    </a>
                </p>
            </div>

            <div class="tab-pane"
                 :id="basketId + '-money-results'">
                <p>catégorie - montant</p>
                <p v-for="category in categories">
                    {{ category.name }} :
                    <a href="#" class="info-bubble">{{ category.moneySpent }} €
                        <span>
                            {{ category.co2PerEuroFormatted }} {{ category.co2PerEuroUnit }}
                        </span>
                    </a>
                </p>
                <p>
                    <strong>Total :</strong>
                    <a href="#" class="info-bubble">{{ globalMoneySpend }} €
                        <span>
                            {{ globalCO2PerEuroFormatted }} {{ globalCO2PerEuroUnit }}
                        </span>
                    </a>
                </p>
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
.basket-results {
    width: available;
    border: 1px solid black;
}
a.nav-link.active {
    background-color: var(--main-color);
}

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
